import mongoose, { Schema, Document } from 'mongoose';

export interface UserSessionDocument extends Document {
  sessionId: string;
  userId?: mongoose.Types.ObjectId | string;
  userEmail?: string;
  role?: string;
  eventType: 'login' | 'logout' | 'register' | 'email_verify' | 'session_start' | 'ping';
  userAgent?: string;
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSessionSchema = new Schema<UserSessionDocument>(
  {
    sessionId: { type: String, required: true, index: true },
    userId: { type: Schema.Types.Mixed, ref: 'User', index: true },
    userEmail: { type: String, lowercase: true, trim: true },
    role: { type: String, default: 'guest' },
    eventType: {
      type: String,
      enum: ['login', 'logout', 'register', 'email_verify', 'session_start', 'ping'],
      required: true,
      index: true,
    },
    userAgent: { type: String },
    ipAddress: { type: String },
  },
  { timestamps: true }
);

// Indexes for DAU / WAU / MAU calculations
UserSessionSchema.index({ createdAt: -1, eventType: 1 });
UserSessionSchema.index({ userId: 1, createdAt: -1 });

export const UserSessionModel =
  mongoose.models.UserSession ||
  mongoose.model<UserSessionDocument>('UserSession', UserSessionSchema);
