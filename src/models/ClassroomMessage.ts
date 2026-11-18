import mongoose, { Schema, Document } from 'mongoose';

export interface ClassroomMessageDocument extends Document {
  roomId: string;
  senderRole: 'student' | 'teacher';
  senderName: string;
  inputMethod: 'sign_camera' | 'sign_card' | 'aac_speech' | 'text' | 'voice' | 'teacher_reply';
  signEmoji?: string;
  signLanguage?: 'ISL' | 'ASL' | 'CUSTOM';
  confidence?: number;
  message: string;
  teacherReply?: string;
  teacherReplyMode?: 'text' | 'speech' | 'sign_visual';
  resolved: boolean;
  createdAt: Date;
}

const ClassroomMessageSchema = new Schema<ClassroomMessageDocument>(
  {
    roomId: { type: String, required: true, default: 'live-math-101', index: true },
    senderRole: { type: String, enum: ['student', 'teacher'], required: true },
    senderName: { type: String, required: true },
    inputMethod: {
      type: String,
      enum: ['sign_camera', 'sign_card', 'aac_speech', 'text', 'voice', 'teacher_reply'],
      default: 'sign_card',
    },
    signEmoji: { type: String },
    signLanguage: { type: String, enum: ['ISL', 'ASL', 'CUSTOM'], default: 'ISL' },
    confidence: { type: Number },
    message: { type: String, required: true },
    teacherReply: { type: String },
    teacherReplyMode: { type: String, enum: ['text', 'speech', 'sign_visual'] },
    resolved: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

ClassroomMessageSchema.index({ roomId: 1, createdAt: -1 });

export const ClassroomMessageModel =
  mongoose.models.ClassroomMessage ||
  mongoose.model<ClassroomMessageDocument>('ClassroomMessage', ClassroomMessageSchema);
