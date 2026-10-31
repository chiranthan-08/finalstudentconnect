import mongoose, { Schema, Document } from 'mongoose';

export interface ChatbotLogDocument extends Document {
  sessionId: string;
  userId?: string;
  isAuthenticated: boolean;
  userRole?: string;
  latencyMs: number;
  status: 'success' | 'error';
  modelUsed: 'gemini' | 'openai' | 'local';
  queryCategory: string; // e.g., 'college_info', 'event_inquiry', 'vtu_cgpa', 'general'
  hasCards: boolean;
  createdAt: Date;
}

const ChatbotLogSchema = new Schema<ChatbotLogDocument>(
  {
    sessionId: { type: String, required: true, index: true },
    userId: { type: String, index: true },
    isAuthenticated: { type: Boolean, default: false },
    userRole: { type: String, default: 'guest' },
    latencyMs: { type: Number, default: 0 },
    status: { type: String, enum: ['success', 'error'], default: 'success', index: true },
    modelUsed: { type: String, enum: ['gemini', 'openai', 'local'], default: 'local' },
    queryCategory: { type: String, default: 'general', index: true },
    hasCards: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

ChatbotLogSchema.index({ createdAt: -1, status: 1 });
ChatbotLogSchema.index({ sessionId: 1, createdAt: -1 });

export const ChatbotLogModel =
  mongoose.models.ChatbotLog ||
  mongoose.model<ChatbotLogDocument>('ChatbotLog', ChatbotLogSchema);
