export type UserRole = 
  | 'student' 
  | 'mentor' 
  | 'college_rep' 
  | 'recruiter' 
  | 'event_organizer' 
  | 'admin' 
  | 'super_admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  college?: string;
  branch?: string;
  year?: string;
  usn?: string;
  bio?: string;
  skills: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  reputationScore?: number;
  isVerified?: boolean;
  googleVerified?: boolean;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  code: string;
  logo: string;
  heroImage: string;
  location: {
    district: string;
    city: string;
    address: string;
    mapUrl: string;
  };
  website: string;
  contact: {
    phone: string;
    email: string;
  };
  collegeType: 'Government' | 'Private' | 'Aided';
  affiliation: 'Autonomous' | 'VTU Affiliated' | 'Deemed' | 'State University';
  accreditations: {
    naacGrade: 'A++' | 'A+' | 'A' | 'B++' | 'B+' | 'NA';
    nbaAccredited: boolean;
    nirfRank?: number;
    karnatakaRank: number;
  };
  rating: number;
  reviewCount: number;
  fees: {
    kcetAnnual: number;
    comedkAnnual: number;
    managementAnnual?: number;
    hostelAnnual: number;
  };
  hostelAvailable: boolean;
  branches: CollegeBranch[];
  placements: PlacementRecord;
  admissionInfo: {
    eligibility: string;
    process: string;
    managementQuotaDetails?: string;
  };
  sourceInfo: {
    source: string;
    lastUpdated: string;
    verificationStatus: 'Verified' | 'Official Demo Data' | 'Crowdsourced';
  };
}

export interface CollegeBranch {
  branchCode: string;
  branchName: string;
  intakeSeats: number;
  cutoffs: {
    kcet: {
      gm: number;
      twoA?: number;
      twoB?: number;
      threeA?: number;
      threeB?: number;
      sc?: number;
      st?: number;
    };
    comedk?: {
      gm: number;
      hkr?: number;
    };
  };
  avgPackage: number;
  highestPackage: number;
}

export interface PlacementRecord {
  year: number;
  placementPercentage: number;
  totalEligible: number;
  studentsPlaced: number;
  highestPackageLPA: number;
  averagePackageLPA: number;
  medianPackageLPA: number;
  topRecruiters: string[];
  historicalTrend: { year: number; avgPackage: number; placementRate: number }[];
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  isFreeStarter: boolean;
  priceINR: number;
  rating: number;
  enrolledCount: number;
  thumbnail: string;
  description: string;
  skills: string[];
  modules: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  durationMinutes: number;
  lessons: {
    id: string;
    title: string;
    type: 'video' | 'pdf' | 'quiz' | 'assignment';
    videoUrl?: string;
    pdfUrl?: string;
    duration?: string;
  }[];
}

export interface CommunityPost {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    college: string;
    branch: string;
    role: UserRole;
    verifiedBadge?: boolean;
  };
  timestamp: string;
  category: 'Project' | 'Achievement' | 'Question' | 'Hackathon' | 'General';
  content: string;
  tags: string[];
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  isLiked?: boolean;
  projectLink?: string;
  githubLink?: string;
  imageUrl?: string;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  college: string;
  branch: string;
  year: string;
  skills: string[];
  subjects: string[];
  hourlyRateINR: number;
  rating: number;
  reviewsCount: number;
  completedSessions: number;
  completionRatePercent: number;
  bio: string;
  isVerified: boolean;
  availableSlots: string[];
}

export interface MentorBooking {
  id: string;
  studentId: string;
  studentName: string;
  mentorId: string;
  mentorName: string;
  subject: string;
  date: string;
  timeSlot: string;
  amountINR: number;
  escrowStatus: 'HELD_IN_ESCROW' | 'RELEASED_TO_TUTOR' | 'REFUNDED' | 'DISPUTED';
  sessionStatus: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';
  meetingRoomId: string;
}

export interface StudyRoom {
  id: string;
  name: string;
  category: 'Coding' | 'VTU Preparation' | 'KCET Preparation' | 'AI Learning' | 'Hackathon Teams' | 'Group Study';
  isPrivate: boolean;
  activeParticipants: number;
  maxParticipants: number;
  hostName: string;
  topic: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: 'Notes' | 'PYQ' | 'Model Paper' | 'Lab Manual' | 'Syllabus' | 'Roadmap';
  university: string;
  branch: string;
  semester: number;
  subject: string;
  subjectCode: string;
  scheme: '2022 Scheme' | '2021 Scheme' | '2018 Scheme';
  author: string;
  downloadsCount: number;
  rating: number;
  fileSize: string;
  fileUrl: string;
}

export interface Internship {
  id: string;
  companyName: string;
  companyLogo: string;
  role: string;
  location: string;
  isRemote: boolean;
  stipendMonthlyINR: number;
  durationMonths: number;
  deadline: string;
  skillsRequired: string[];
  description: string;
  isVerified: boolean;
  applyUrl: string;
  applicantsCount: number;
}

export interface TechnicalEvent {
  id: string;
  title: string;
  organizer: string;
  type: 'Hackathon' | 'Ideathon' | 'Workshop' | 'Webinar' | 'Technical Fest' | 'Coding Competition';
  date: string;
  deadline: string;
  location: string;
  prizePoolINR: number;
  teamSize: string;
  eligibility: string;
  isAnnualHackathon?: boolean;
  bannerUrl: string;
  description: string;
  registeredCount: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: 'KCET' | 'COMEDK' | 'VTU' | 'Exam' | 'Internship' | 'Event' | 'System';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface Advertisement {
  id: string;
  title: string;
  sponsorName: string;
  bannerImage: string;
  targetUrl: string;
  placement: 'Homepage' | 'College Pages' | 'Course Pages' | 'Internship Pages' | 'Sidebar';
  impressions: number;
  clicks: number;
  active: boolean;
}
