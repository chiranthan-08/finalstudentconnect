import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { UserModel, OtpVerificationModel } from '@/models';
import { hashPassword } from '@/backend/utils/hash';

export async function POST(req: NextRequest) {
  try {
    const { email, token, newPassword } = await req.json();

    if (!email || !token || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Email, reset token, and new password are required.' },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 6 characters long.' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const cleanEmail = email.trim().toLowerCase();
    const cleanToken = token.trim();

    // Verify token
    const otpRecord = await OtpVerificationModel.findOne({
      email: cleanEmail,
      otp: cleanToken,
      type: 'password_reset',
      isVerified: false,
    });

    if (!otpRecord) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired password reset token.' },
        { status: 400 }
      );
    }

    if (new Date() > otpRecord.expiresAt) {
      return NextResponse.json(
        { success: false, message: 'Password reset token has expired. Please request a new token.' },
        { status: 400 }
      );
    }

    // Mark single-use token as used
    otpRecord.isVerified = true;
    await otpRecord.save();

    // Update password hash
    const passwordHash = await hashPassword(newPassword);
    const user = await UserModel.findOneAndUpdate(
      { email: cleanEmail },
      { passwordHash }
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User account not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Password reset successfully. You can now log in with your new password.',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Error resetting password' },
      { status: 500 }
    );
  }
}
