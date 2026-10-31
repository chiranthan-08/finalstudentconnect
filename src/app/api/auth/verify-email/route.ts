import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { OtpVerificationModel, UserModel } from '@/models';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: 'Email and verification code are required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanOtp = otp.trim().replace(/^(SC-|G-)/i, '').replace(/\s+/g, '');

    const record = await OtpVerificationModel.findOne({
      email: cleanEmail,
      isVerified: false,
    }).sort({ createdAt: -1 });

    if (!record) {
      return NextResponse.json(
        { success: false, message: 'No active verification code found. Please request a new code.' },
        { status: 404 }
      );
    }

    if (new Date() > record.expiresAt) {
      return NextResponse.json(
        { success: false, message: 'Verification code has expired. Please request a new one.' },
        { status: 400 }
      );
    }

    if (record.otp !== cleanOtp) {
      record.attempts = (record.attempts || 0) + 1;
      await record.save();
      return NextResponse.json(
        { success: false, message: 'Invalid verification code. Please check and try again.' },
        { status: 400 }
      );
    }

    // Mark verified
    record.isVerified = true;
    await record.save();

    await UserModel.findOneAndUpdate(
      { email: cleanEmail },
      { isVerified: true, verifiedAt: new Date() }
    );

    return NextResponse.json({
      success: true,
      message: 'Email address verified successfully!',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error verifying email' },
      { status: 500 }
    );
  }
}
