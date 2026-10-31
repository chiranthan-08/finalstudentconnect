import mongoose, { Schema, Document } from 'mongoose';

export interface OtpVerificationDocument extends Document {
  email: string;
  otp: string;
  type: 'google_auth' | 'email_registration' | 'password_reset';
  attempts: number;
  maxAttempts: number;
  expiresAt: Date;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const OtpVerificationSchema = new Schema<OtpVerificationDocument>(
  {
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    otp: { type: String, required: true },
    type: { 
      type: String, 
      enum: ['google_auth', 'email_registration', 'password_reset'],
      default: 'google_auth'
    },
    attempts: { type: Number, default: 0 },
    maxAttempts: { type: Number, default: 5 },
    expiresAt: { type: Date, required: true, index: { expires: 0 } },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const OtpVerificationModel =
  mongoose.models.OtpVerification ||
  mongoose.model<OtpVerificationDocument>('OtpVerification', OtpVerificationSchema);
