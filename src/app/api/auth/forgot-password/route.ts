import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { UserModel, OtpVerificationModel } from '@/models';
import { checkRateLimit } from '@/backend/middleware/rateLimiter';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'local_ip';
    const rateCheck = checkRateLimit(`pwd_reset_${ip}`, 5, 60000);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, message: `Too many requests. Please retry in ${rateCheck.resetInSec}s.` },
        { status: 429 }
      );
    }

    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ success: false, message: 'Email address is required.' }, { status: 400 });
    }

    await connectToDatabase();
    const cleanEmail = email.trim().toLowerCase();

    // Check if user exists without revealing account presence to arbitrary scanners
    const user = await UserModel.findOne({ email: cleanEmail });
    if (user) {
      const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

      await OtpVerificationModel.create({
        email: cleanEmail,
        otp: resetToken,
        type: 'password_reset',
        expiresAt,
        isVerified: false,
      });

      console.log(`[Password Reset Token] Dispatched for ${cleanEmail}: ${resetToken}`);
    }

    // Generic response to prevent user enumeration attacks
    return NextResponse.json({
      success: true,
      message: 'If an account exists with this email address, a password reset token has been dispatched.',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error processing request' },
      { status: 500 }
    );
  }
}
