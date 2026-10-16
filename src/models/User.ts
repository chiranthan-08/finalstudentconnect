import mongoose, { Schema, Document } from 'mongoose';
import { User, UserRole } from '@/types';

export interface UserDocument extends Omit<User, 'id'>, Document {
  passwordHash?: string;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
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
    avatar: String,
    college: String,
    branch: String,
    year: String,
    usn: String,
    bio: String,
    skills: [String],
    githubUrl: String,
    linkedinUrl: String,
    portfolioUrl: String,
    reputationScore: { type: Number, default: 50 },
    isVerified: { type: Boolean, default: false },
    googleVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const UserModel =
  mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);
