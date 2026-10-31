import mongoose, { Schema, Document } from 'mongoose';

export interface SubscriptionDocument extends Document {
  userId: string;
  userEmail: string;
  plan: 'starter_free' | 'pro_student' | 'placement_pass' | 'institution_access';
  planName: string;
  status: 'active' | 'pending' | 'cancelled' | 'expired';
  priceINR: number;
  startDate: Date;
  endDate: Date;
  renewalDate?: Date;
  cancelledAt?: Date;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<SubscriptionDocument>(
  {
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    plan: {
      type: String,
      enum: ['starter_free', 'pro_student', 'placement_pass', 'institution_access'],
      required: true,
      index: true,
    },
    planName: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'pending', 'cancelled', 'expired'],
      default: 'pending',
      index: true,
    },
    priceINR: { type: Number, required: true, min: 0 },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
    renewalDate: { type: Date },
    cancelledAt: { type: Date },
    paymentId: { type: String, index: true },
  },
  { timestamps: true }
);

SubscriptionSchema.index({ status: 1, endDate: 1 });
SubscriptionSchema.index({ userId: 1, status: 1 });

export const SubscriptionModel =
  mongoose.models.Subscription ||
  mongoose.model<SubscriptionDocument>('Subscription', SubscriptionSchema);
