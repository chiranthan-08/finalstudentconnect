import mongoose, { Schema, Document } from 'mongoose';

export interface CourseDocument extends Document {
  courseId: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  level: string;
  priceINR: number;
  isFreeStarter: boolean;
  thumbnail: string;
  rating: number;
  enrolledCount: number;
  durationHours: number;
  modules: any[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<CourseDocument>(
  {
    courseId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    instructor: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    category: { type: String, required: true, index: true },
    level: { type: String, required: true },
    priceINR: { type: Number, default: 0 },
    isFreeStarter: { type: Boolean, default: false, index: true },
    thumbnail: { type: String, required: true },
    rating: { type: Number, default: 4.8 },
    enrolledCount: { type: Number, default: 0 },
    durationHours: { type: Number, default: 10 },
    modules: [{ type: Schema.Types.Mixed }],
    notes: { type: String },
  },
  { timestamps: true }
);

export const CourseModel =
  mongoose.models.Course || mongoose.model<CourseDocument>('Course', CourseSchema);
