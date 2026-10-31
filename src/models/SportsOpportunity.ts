import mongoose, { Schema, Document } from 'mongoose';

export interface SportsOpportunityDocument extends Document {
  sportsId: string;
  title: string;
  sport: string;
  level: string;
  category: 'Men' | 'Women' | 'Mixed';
  participation: 'Team' | 'Individual';
  organizer: string;
  city: string;
  venue: string;
  registrationDeadline: Date;
  eventStartDate: Date;
  eventEndDate: Date;
  isFree: boolean;
  registrationFeeINR?: number;
  officialRegistrationUrl: string;
  brochureUrl?: string;
  contactPhone?: string;
  contactEmail?: string;
  viewsCount: number;
  referralClicksCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const SportsOpportunitySchema = new Schema<SportsOpportunityDocument>(
  {
    sportsId: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true, trim: true },
    sport: { type: String, required: true, index: true },
    level: { type: String, required: true, index: true },
    category: { type: String, enum: ['Men', 'Women', 'Mixed'], default: 'Mixed' },
    participation: { type: String, enum: ['Team', 'Individual'], default: 'Team' },
    organizer: { type: String, required: true },
    city: { type: String, required: true, index: true },
    venue: { type: String, required: true },
    registrationDeadline: { type: Date, required: true },
    eventStartDate: { type: Date, required: true },
    eventEndDate: { type: Date, required: true },
    isFree: { type: Boolean, default: true },
    registrationFeeINR: { type: Number, default: 0 },
    officialRegistrationUrl: { type: String, required: true },
    brochureUrl: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String },
    viewsCount: { type: Number, default: 0 },
    referralClicksCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const SportsOpportunityModel =
  mongoose.models.SportsOpportunity ||
  mongoose.model<SportsOpportunityDocument>('SportsOpportunity', SportsOpportunitySchema);
