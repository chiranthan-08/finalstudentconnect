import mongoose, { Schema, Document } from 'mongoose';

export interface AnalyticsEventDocument extends Document {
  sessionId: string;
  userId?: string;
  userRole?: string;
  eventType: 
    | 'page_view'
    | 'unique_visitor'
    | 'feature_use'
    | 'course_visit'
    | 'sports_visit'
    | 'chatbot_interaction'
    | 'premium_visit'
    | 'conversion_register'
    | 'conversion_login'
    | 'outbound_click'
    | 'error';
  pageUrl: string;
  pageName: string;
  category: string;
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}

const AnalyticsEventSchema = new Schema<AnalyticsEventDocument>(
  {
    sessionId: { type: String, required: true, index: true },
    userId: { type: String, index: true },
    userRole: { type: String, default: 'guest' },
    eventType: {
      type: String,
      enum: [
        'page_view',
        'unique_visitor',
        'feature_use',
        'course_visit',
        'sports_visit',
        'chatbot_interaction',
        'premium_visit',
        'conversion_register',
        'conversion_login',
        'outbound_click',
        'error',
      ],
      required: true,
      index: true,
    },
    pageUrl: { type: String, required: true },
    pageName: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    metadata: { type: Schema.Types.Mixed, default: {} },
    ipAddress: { type: String },
    userAgent: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

// High performance aggregation indexes
AnalyticsEventSchema.index({ createdAt: -1, eventType: 1 });
AnalyticsEventSchema.index({ eventType: 1, pageName: 1 });
AnalyticsEventSchema.index({ sessionId: 1, eventType: 1 });

export const AnalyticsEventModel =
  mongoose.models.AnalyticsEvent ||
  mongoose.model<AnalyticsEventDocument>('AnalyticsEvent', AnalyticsEventSchema);
