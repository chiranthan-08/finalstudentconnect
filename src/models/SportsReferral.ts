import mongoose, { Schema, Document } from 'mongoose';

export interface SportsReferralDocument extends Document {
  sportsId: string;
  sportTitle: string;
  userId?: string;
  sessionId: string;
  outboundUrl: string;
  clickedAt: Date;
}

const SportsReferralSchema = new Schema<SportsReferralDocument>(
  {
    sportsId: { type: String, required: true, index: true },
    sportTitle: { type: String, required: true },
    userId: { type: String, index: true },
    sessionId: { type: String, required: true },
    outboundUrl: { type: String, required: true },
    clickedAt: { type: Date, default: Date.now, index: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const SportsReferralModel =
  mongoose.models.SportsReferral ||
  mongoose.model<SportsReferralDocument>('SportsReferral', SportsReferralSchema);
