import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { OtpVerificationModel } from '@/models/OtpVerification';
import { UserModel } from '@/models/User';

export async function POST(request: Request) {
  try {
    const { email, otp, type = 'google_auth', name, role = 'student', college, branch, usn, year } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: 'Email and verification code are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = otp.trim().replace(/^(G-|SC-)/i, '').replace(/\s+/g, '');

    // 1. Try to find OTP record in MongoDB
    let record: any = null;
    let usingMemory = false;
    let isDbConnected = false;

    try {
      const db = await connectToDatabase();
      isDbConnected = db.isConnected;
      if (isDbConnected) {
        record = await OtpVerificationModel.findOne({
          email: cleanEmail,
          isVerified: false
        }).sort({ createdAt: -1 });
      }
    } catch (dbErr) {
      console.warn('MongoDB OTP query note: Falling back to active memory store.', dbErr);
    }

    // Fallback to in-memory store if DB record not found or DB disconnected
    if (!record && globalThis.otpMemoryStore) {
      const memoryRecord = globalThis.otpMemoryStore.get(cleanEmail);
      if (memoryRecord && !memoryRecord.isVerified) {
        record = memoryRecord;
        usingMemory = true;
      }
    }

    if (!record) {
      return NextResponse.json(
        { success: false, message: 'No active verification code found for this email. Please request a new code.' },
        { status: 404 }
      );
    }

    // 2. Check Expiration (10 minutes)
    const expiryTime = usingMemory ? record.expiresAt : new Date(record.expiresAt).getTime();
    if (Date.now() > expiryTime) {
      return NextResponse.json(
        { success: false, expired: true, message: 'Verification code has expired. Please click Resend to get a new code.' },
        { status: 400 }
      );
    }

    // 3. Check Attempt Limit (Max 5 attempts)
    const currentAttempts = record.attempts || 0;
    const maxAttempts = record.maxAttempts || 5;

    if (currentAttempts >= maxAttempts) {
      return NextResponse.json(
        {
          success: false,
          maxAttemptsReached: true,
          message: 'Security lock: Maximum verification attempts reached. Please request a new code.'
        },
        { status: 429 }
      );
    }

    // 4. Verify Code
    const expectedOtp = String(record.otp).trim();
    if (cleanOtp !== expectedOtp) {
      const newAttempts = currentAttempts + 1;
      const remaining = Math.max(0, maxAttempts - newAttempts);

      if (usingMemory) {
        record.attempts = newAttempts;
        globalThis.otpMemoryStore?.set(cleanEmail, record);
      } else {
        await OtpVerificationModel.updateOne(
          { _id: record._id },
          { $set: { attempts: newAttempts } }
        );
      }

      return NextResponse.json(
        {
          success: false,
          remainingAttempts: remaining,
          message: remaining > 0
            ? `Incorrect verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`
            : 'Maximum attempts reached. Please request a new code.'
        },
        { status: 400 }
      );
    }

    // 5. Code is VALID: Mark as verified
    if (usingMemory) {
      record.isVerified = true;
      globalThis.otpMemoryStore?.set(cleanEmail, record);
    } else {
      await OtpVerificationModel.updateOne(
        { _id: record._id },
        { $set: { isVerified: true } }
      );
    }

    // 6. Update or Create User in MongoDB
    const isGoogleAuth = type === 'google_auth';
    const formattedName = name || cleanEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
    
    let dbUser: any = null;
    try {
      if (isDbConnected) {
        dbUser = await UserModel.findOneAndUpdate(
          { email: cleanEmail },
          {
            $set: {
              name: formattedName,
              email: cleanEmail,
              role,
              college: college || 'Karnataka Engineering Academic Ecosystem',
              branch: branch || 'Computer Science & Engineering',
              usn,
              year: year || '3rd Year',
              isVerified: true,
              googleVerified: isGoogleAuth,
              verificationMethod: isGoogleAuth ? 'Google 2-Step OTP' : 'Email OTP',
              verifiedAt: new Date()
            }
          },
          { upsert: true, new: true }
        );
      }
    } catch (userSaveErr) {
      console.warn('MongoDB User save note: User session verified.', userSaveErr);
    }

    const verifiedUserPayload = {
      id: dbUser?._id?.toString() || 'usr_' + Date.now(),
      name: formattedName,
      email: cleanEmail,
      role,
      college: college || dbUser?.college || 'VTU Affiliated Engineering Institution',
      branch: branch || dbUser?.branch || 'Computer Science & Engineering',
      year: year || dbUser?.year || '3rd Year',
      usn: usn || dbUser?.usn,
      isVerified: true,
      googleVerified: isGoogleAuth,
      verifiedAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      message: 'Account successfully verified!',
      user: verifiedUserPayload
    });

  } catch (error: any) {
    console.error('Verify OTP Handler Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Verification failed.' },
      { status: 500 }
    );
  }
}
