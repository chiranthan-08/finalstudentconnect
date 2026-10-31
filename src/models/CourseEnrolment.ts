import mongoose, { Schema, Document } from 'mongoose';

export interface CourseEnrolmentDocument extends Document {
  userId: string;
  userEmail?: string;
  courseId: string;
  courseTitle: string;
  status: 'active' | 'completed' | 'dropped';
  progressPercent: number;
  completedLessons: string[];
  lastActivityAt: Date;
  completedAt?: Date;
  certificateIssued: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CourseEnrolmentSchema = new Schema<CourseEnrolmentDocument>(
  {
    userId: { type: String, required: true, index: true },
    userEmail: { type: String, lowercase: true, trim: true },
    courseId: { type: String, required: true, index: true },
    courseTitle: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'completed', 'dropped'],
      default: 'active',
      index: true,
    },
    progressPercent: { type: Number, default: 0, min: 0, max: 100 },
    completedLessons: { type: [String], default: [] },
    lastActivityAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    certificateIssued: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Unique compound index so a user cannot have duplicate active enrollments for the same course
CourseEnrolmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });
CourseEnrolmentSchema.index({ status: 1, lastActivityAt: -1 });

export const CourseEnrolmentModel =
  mongoose.models.CourseEnrolment ||
  mongoose.model<CourseEnrolmentDocument>('CourseEnrolment', CourseEnrolmentSchema);
