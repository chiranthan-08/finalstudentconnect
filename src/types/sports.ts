export type SportsLevel = 'College' | 'University' | 'State' | 'National' | 'International';

export type SportsCategory = 'Men' | 'Women' | 'Mixed' | 'Open';

export type ParticipationType = 'Individual' | 'Team' | 'Both';

export type SportType = 
  | 'Cricket'
  | 'Football'
  | 'Volleyball'
  | 'Basketball'
  | 'Badminton'
  | 'Kabaddi'
  | 'Athletics'
  | 'Chess'
  | 'Table Tennis'
  | 'Swimming'
  | 'Kho Kho'
  | 'Taekwondo'
  | 'Tennis'
  | 'Powerlifting'
  | 'Other';

export interface SportsEligibility {
  ageLimit?: string;
  rules: string[];
  scheme?: string;
  requiredDocuments?: string[];
}

export interface SportsLinks {
  registerUrl: string;
  brochureUrl?: string;
  officialWebsite?: string;
}

export interface SportsContact {
  name: string;
  role: string;
  phone: string;
  email: string;
  department?: string;
}

export interface SportsPrizes {
  cashPool?: string;
  trophies?: string;
  certificates?: string;
  perks?: string[];
}

export interface SportsOpportunity {
  id: string;
  title: string;
  sport: SportType;
  level: SportsLevel;
  category: SportsCategory;
  participationType: ParticipationType;
  organizer: string;
  collegeName?: string;
  city: string;
  state: string;
  venue: string;
  description: string;
  registrationOpenDate: string;
  registrationDeadline: string; // ISO date string e.g. "2026-11-05T23:59:59"
  trialDate?: string;
  eventStartDate: string;
  eventEndDate: string;
  isFree: boolean;
  entryFee?: string;
  eligibility: SportsEligibility;
  links: SportsLinks;
  contact: SportsContact;
  prizes?: SportsPrizes;
  status: 'Open' | 'Closing Soon' | 'Trials Active' | 'Registration Closed' | 'Completed';
  isVerified: boolean;
  badge?: string;
  tags: string[];
  bannerImage?: string;
}

export interface SportsFilterState {
  searchQuery: string;
  selectedSport: string;
  selectedLevel: string;
  selectedCategory: string;
  participationType: string;
  selectedCity: string;
  feeType: 'ALL' | 'FREE' | 'PAID';
  status: 'ALL' | 'OPEN' | 'CLOSING_SOON' | 'TRIALS';
}
