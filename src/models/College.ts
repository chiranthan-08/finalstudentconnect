import mongoose, { Schema, Document } from 'mongoose';
import { College } from '@/types';

export interface CollegeDocument extends Omit<College, 'id'>, Document {}

const CollegeBranchSchema = new Schema({
  branchCode: { type: String, required: true },
  branchName: { type: String, required: true },
  intakeSeats: { type: Number, required: true },
  cutoffs: {
    kcet: {
      gm: Number,
      twoA: Number,
      twoB: Number,
      threeA: Number,
      threeB: Number,
      sc: Number,
      st: Number,
    },
    comedk: {
      gm: Number,
      hkr: Number,
    },
  },
  avgPackage: Number,
  highestPackage: Number,
});

const PlacementSchema = new Schema({
  year: Number,
  placementPercentage: Number,
  totalEligible: Number,
  studentsPlaced: Number,
  highestPackageLPA: Number,
  averagePackageLPA: Number,
  medianPackageLPA: Number,
  topRecruiters: [String],
  historicalTrend: [
    {
      year: Number,
      avgPackage: Number,
      placementRate: Number,
    },
  ],
});

const CollegeSchema = new Schema<CollegeDocument>(
  {
    name: { type: String, required: true, index: true },
    shortName: { type: String, required: true, index: true },
    code: { type: String, required: true, unique: true },
    logo: String,
    heroImage: String,
    location: {
      district: { type: String, required: true, index: true },
      city: String,
      address: String,
      mapUrl: String,
    },
    website: String,
    contact: {
      phone: String,
      email: String,
    },
    collegeType: {
      type: String,
      enum: ['Government', 'Private', 'Aided'],
      required: true,
      index: true,
    },
    affiliation: {
      type: String,
      enum: ['Autonomous', 'VTU Affiliated', 'Deemed', 'State University'],
      required: true,
    },
    accreditations: {
      naacGrade: { type: String, enum: ['A++', 'A+', 'A', 'B++', 'B+', 'NA'] },
      nbaAccredited: Boolean,
      nirfRank: Number,
      karnatakaRank: Number,
    },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    fees: {
      kcetAnnual: Number,
      comedkAnnual: Number,
      managementAnnual: Number,
      hostelAnnual: Number,
    },
    hostelAvailable: { type: Boolean, default: true },
    branches: [CollegeBranchSchema],
    placements: PlacementSchema,
    admissionInfo: {
      eligibility: String,
      process: String,
      managementQuotaDetails: String,
    },
    sourceInfo: {
      source: String,
      lastUpdated: String,
      verificationStatus: {
        type: String,
        enum: ['Verified', 'Official Demo Data', 'Crowdsourced'],
        default: 'Official Demo Data',
      },
    },
  },
  { timestamps: true }
);

export const CollegeModel =
  mongoose.models.College || mongoose.model<CollegeDocument>('College', CollegeSchema);
