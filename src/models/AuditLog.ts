import mongoose, { Schema, Document } from 'mongoose';

export interface AuditLogDocument extends Document {
  adminId: string;
  adminEmail: string;
  action: 
    | 'ADMIN_LOGIN'
    | 'ADMIN_LOGOUT'
    | 'USER_SUSPEND'
    | 'USER_RESTORE'
    | 'ROLE_CHANGE'
    | 'COURSE_CREATE'
    | 'COURSE_MODIFY'
    | 'SUBSCRIPTION_ADJUST'
    | 'SPORTS_MODIFY'
    | 'REWARD_APPROVAL'
    | 'SETTINGS_CHANGE';
  affectedResource: string;
  affectedId: string;
  outcome: 'SUCCESS' | 'FAILURE';
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}

const AuditLogSchema = new Schema<AuditLogDocument>(
  {
    adminId: { type: String, required: true, index: true },
    adminEmail: { type: String, required: true, lowercase: true, trim: true },
    action: {
      type: String,
      enum: [
        'ADMIN_LOGIN',
        'ADMIN_LOGOUT',
        'USER_SUSPEND',
        'USER_RESTORE',
        'ROLE_CHANGE',
        'COURSE_CREATE',
        'COURSE_MODIFY',
        'SUBSCRIPTION_ADJUST',
        'SPORTS_MODIFY',
        'REWARD_APPROVAL',
        'SETTINGS_CHANGE',
      ],
      required: true,
      index: true,
    },
    affectedResource: { type: String, required: true },
    affectedId: { type: String, required: true },
    outcome: { type: String, enum: ['SUCCESS', 'FAILURE'], default: 'SUCCESS', index: true },
    metadata: { type: Schema.Types.Mixed, default: {} },
    ipAddress: { type: String },
    userAgent: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

// Append-only audit log index
AuditLogSchema.index({ createdAt: -1, action: 1 });
AuditLogSchema.index({ adminId: 1, createdAt: -1 });

export const AuditLogModel =
  mongoose.models.AuditLog ||
  mongoose.model<AuditLogDocument>('AuditLog', AuditLogSchema);
