import mongoose, { Schema, Document } from 'mongoose';

export interface RewardDocument extends Document {
  rewardId: string;
  title: string;
  description: string;
  points: number;
  badgeIcon: string;
  criteria: 'first_login' | 'course_complete' | 'profile_complete' | 'vtu_tool_use' | 'community_post';
  createdAt: Date;
}

export interface UserRewardDocument extends Document {
  userId: string;
  userEmail: string;
  rewardId: string;
  rewardTitle: string;
  pointsAwarded: number;
  awardedAt: Date;
  verifiedByBackend: boolean;
}

const RewardSchema = new Schema<RewardDocument>(
  {
    rewardId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    points: { type: Number, required: true, min: 0 },
    badgeIcon: { type: String, required: true },
    criteria: {
      type: String,
      enum: ['first_login', 'course_complete', 'profile_complete', 'vtu_tool_use', 'community_post'],
      required: true,
      index: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const UserRewardSchema = new Schema<UserRewardDocument>(
  {
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, lowercase: true, trim: true },
    rewardId: { type: String, required: true, index: true },
    rewardTitle: { type: String, required: true },
    pointsAwarded: { type: Number, required: true },
    awardedAt: { type: Date, default: Date.now },
    verifiedByBackend: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

UserRewardSchema.index({ userId: 1, rewardId: 1 }, { unique: true });
UserRewardSchema.index({ awardedAt: -1 });

export const RewardModel =
  mongoose.models.Reward || mongoose.model<RewardDocument>('Reward', RewardSchema);

export const UserRewardModel =
  mongoose.models.UserReward ||
  mongoose.model<UserRewardDocument>('UserReward', UserRewardSchema);
