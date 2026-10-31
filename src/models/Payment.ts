import mongoose, { Schema, Document } from 'mongoose';

export interface PaymentDocument extends Document {
  paymentId: string; // Unique internal transaction ID / Idempotency key
  userId: string;
  userEmail: string;
  plan: string;
  amountINR: number;
  currency: string;
  status: 'verified_success' | 'pending' | 'failed' | 'refunded';
  provider: 'upi_gateway' | 'razorpay' | 'cashfree' | 'stripe' | 'test_gateway';
  providerTransactionId?: string;
  webhookVerified: boolean;
  refundStatus: 'none' | 'partial' | 'full';
  metadata?: Record<string, any>;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<PaymentDocument>(
  {
    paymentId: { 
      type: String, 
      required: true, 
      unique: true, 
      index: true 
    },
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, required: true, lowercase: true, trim: true },
    plan: { type: String, required: true },
    amountINR: { type: Number, required: true, min: 0 },
    currency: { type: String, default: 'INR' },
    status: {
      type: String,
      enum: ['verified_success', 'pending', 'failed', 'refunded'],
      default: 'pending',
      index: true,
    },
    provider: {
      type: String,
      enum: ['upi_gateway', 'razorpay', 'cashfree', 'stripe', 'test_gateway'],
      default: 'upi_gateway',
    },
    providerTransactionId: { type: String },
    webhookVerified: { type: Boolean, default: false },
    refundStatus: {
      type: String,
      enum: ['none', 'partial', 'full'],
      default: 'none',
    },
    metadata: { type: Schema.Types.Mixed, default: {} },
    paidAt: { type: Date },
  },
  { timestamps: true }
);

// Indexes for revenue calculations and verified transactions
PaymentSchema.index({ status: 1, paidAt: -1 });
PaymentSchema.index({ userId: 1, status: 1 });

export const PaymentModel =
  mongoose.models.Payment ||
  mongoose.model<PaymentDocument>('Payment', PaymentSchema);
