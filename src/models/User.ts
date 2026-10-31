import mongoose, { Schema, Document } from 'mongoose';
import { UserRole } from '@/types';

export interface UserDocument extends Document {
  name: string;
  email: string;
  passwordHash?: string;
  role: UserRole;
  avatar?: string;
  college?: string;
  branch?: string;
  year?: string;
  usn?: string;
  bio?: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  reputationScore: number;
  isVerified: boolean;
  googleVerified?: boolean;
  accountStatus: 'active' | 'suspended' | 'pending';
  subscriptionStatus: 'free' | 'premium' | 'expired';
  enrolledCourses: string[];
  lastLoginAt?: Date;
  verificationMethod?: string;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true, 
      trim: true, 
      index: true 
    },
    passwordHash: { type: String },
    role: {
      type: String,
      enum: [
        'student',
        'mentor',
        'college_rep',
        'recruiter',
        'event_organizer',
        'admin',
        'super_admin',
      ],
      default: 'student',
      index: true,
    },
    avatar: { type: String },
    college: { type: String, trim: true },
    branch: { type: String, trim: true },
    year: { type: String, trim: true },
    usn: { type: String, trim: true, uppercase: true },
    bio: { type: String, trim: true },
    skills: { type: [String], default: [] },
    githubUrl: { type: String, trim: true },
    linkedinUrl: { type: String, trim: true },
    portfolioUrl: { type: String, trim: true },
    reputationScore: { type: Number, default: 50 },
    isVerified: { type: Boolean, default: false },
    googleVerified: { type: Boolean, default: false },
    accountStatus: {
      type: String,
      enum: ['active', 'suspended', 'pending'],
      default: 'active',
      index: true,
    },
    subscriptionStatus: {
      type: String,
      enum: ['free', 'premium', 'expired'],
      default: 'free',
      index: true,
    },
    enrolledCourses: { type: [String], default: [] },
    lastLoginAt: { type: Date },
    verificationMethod: { type: String },
    verifiedAt: { type: Date },
  },
  { timestamps: true }
);

// Compound index for analytics & query performance
UserSchema.index({ createdAt: -1, role: 1 });
UserSchema.index({ subscriptionStatus: 1, accountStatus: 1 });

export const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);
