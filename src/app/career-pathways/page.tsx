'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Compass, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Stethoscope, 
  Scale, 
  Palette, 
  DollarSign, 
  Clock, 
  Target, 
  HelpCircle, 
  ChevronRight, 
  ExternalLink,
  ChevronDown,
  Building2,
  FileCheck,
  Zap,
  Flame,
  Lightbulb,
  AlertCircle
} from 'lucide-react';

// ==============================================================================
// DATA: AFTER 10TH (SSLC) PATHWAYS
// ==============================================================================
interface PathwayItem {
  id: string;
  title: string;
  subtitle: string;
  stage: 'after-10th' | 'after-12th' | 'after-diploma';
  category: string;
  duration: string;
  difficulty: 'Moderate' | 'Demanding' | 'Highly Competitive';
  overview: string;
  popularBranches: string[];
  entranceExams: { name: string; conductingBody: string; link?: string }[];
  eligibility: string;
  topCollegesKarnataka: string[];
  careerProspects: string[];
  futureDegrees: string[];
  avgStartingSalary: string;
  pros: string[];
  cons: string[];
  icon: any;
  featured?: boolean;
}

const AFTER_10TH_PATHWAYS: PathwayItem[] = [
  {
    id: 'puc-science',
    title: 'Pre-University (PUC) — Science Stream',
    subtitle: 'PCMB / PCMC / PCME Combinations',
    stage: 'after-10th',
    category: 'PUC (+2)',
    duration: '2 Years',
    difficulty: 'Demanding',
    overview: 'The most popular gateway for students aiming for Engineering, Medicine, Pure Sciences, Architecture, or Defense. Provides deep theoretical mastery in Physics, Chemistry, Mathematics, and Biology/Computer Science/Electronics.',
    popularBranches: [
      'PCMB (Physics, Chemistry, Maths, Biology) — Opens Engineering & Medicine',
      'PCMC (Physics, Chemistry, Maths, Computer Science) — Prime for Tech & IT',
      'PCME (Physics, Chemistry, Maths, Electronics) — Prime for Hardware/Robotics',
      'PCMBiotech (Biotechnology combination)',
    ],
    entranceExams: [
      { name: 'KCET (Karnataka CET)', conductingBody: 'KEA — B.E./B.Tech, B.Sc Agri, B.Pharm, Vet', link: 'https://cetonline.karnataka.gov.in/kea/' },
      { name: 'COMEDK UGET', conductingBody: 'Consortium of Karnataka Medical/Engg Colleges', link: 'https://www.comedk.org/' },
      { name: 'JEE Main & Advanced', conductingBody: 'NTA / IITs — NITs, IIITs & IITs' },
      { name: 'NEET-UG', conductingBody: 'NTA — MBBS, BDS, AYUSH, BVSc' },
      { name: 'NATA', conductingBody: 'COA — Bachelor of Architecture (B.Arch)' },
    ],
    eligibility: 'Pass in 10th (SSLC / CBSE / ICSE) with minimum 50% in Science and Mathematics.',
    topCollegesKarnataka: [
      'MES PU College, Malleshwaram (Bengaluru)',
      'National PU College, Basavanagudi (Bengaluru)',
      'St. Joseph’s Pre-University College (Bengaluru)',
      'Expert PU College, Kodialbail (Mangaluru)',
      'Alva’s PU College (Moodbidri)',
      'Deeksha / BASE PU network campuses',
    ],
    careerProspects: [
      'Software Engineer / AI Specialist (via B.E./B.Tech)',
      'Medical Doctor / Surgeon / Dentist (via MBBS/BDS)',
      'Data Scientist / Tech Researcher (via B.Sc/BCA)',
      'Defense Officer (via UPSC NDA written exam)',
    ],
    futureDegrees: ['B.E. / B.Tech (4 Yrs)', 'MBBS / BDS (5.5 Yrs)', 'B.Arch (5 Yrs)', 'B.Sc / BCA (3–4 Yrs)', 'B.Pharm (4 Yrs)'],
    avgStartingSalary: '₹4.5 LPA – ₹14.0 LPA (post professional degree)',
    pros: [
      'Maximum career flexibility — keeps both Engineering & Medical pathways accessible',
      'Standard requirement for national premier institutes like IITs, NITs, AIIMS',
      'Strong academic foundation for competitive national exams',
    ],
    cons: [
      'High academic pressure with concurrent board exams and CET/NEET coaching',
      'Does not offer direct employability after 2 years; professional degree mandatory',
    ],
    icon: Cpu,
    featured: true,
  },
  {
    id: 'polytechnic-diploma-10th',
    title: '3-Year Polytechnic Engineering Diploma',
    subtitle: 'Direct Practical Engineering after 10th Standard',
    stage: 'after-10th',
    category: 'Polytechnic Diploma',
    duration: '3 Years (6 Semesters)',
    difficulty: 'Moderate',
    overview: 'Practical, lab-intensive engineering education. Offers the fastest route to technical mastery and direct eligibility for 2nd-year B.E./B.Tech Lateral Entry via DCET (skipping 1st year). Also enables immediate recruitment as Junior Engineers in Govt and PSUs.',
    popularBranches: [
      'Computer Science & Engineering',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics & Communication Engineering',
      'Electrical & Electronics Engineering',
      'Automobile Engineering & Mechatronics',
    ],
    entranceExams: [
      { name: 'DTE Karnataka Non-Exam Single Window Merit Admission', conductingBody: 'Directorate of Technical Education, Karnataka' },
      { name: 'DCET (Taken after 3rd year)', conductingBody: 'KEA — Lateral entry to 2nd year B.E./B.Tech' },
    ],
    eligibility: 'Pass in 10th Standard / SSLC with minimum 35% marks in Science and Mathematics.',
    topCollegesKarnataka: [
      'S.J. Polytechnic (SJP), Seshadri Road (Bengaluru)',
      'MEI Polytechnic, Rajajinagar (Bengaluru)',
      'Government Polytechnic, Immadihalli (Whitefield)',
      'Karnataka Government Polytechnic (KPT), Kadri (Mangaluru)',
      'C.P.C. Polytechnic (Mysuru)',
      'Acharya Polytechnic, Soladevanahalli (Bengaluru)',
    ],
    careerProspects: [
      'Junior Engineer (JE) in PWD, KPTCL, BESCOM, BMRCL Namma Metro',
      'Technical Supervisor in L&T, Bosch, Toyota, Tata Motors, ABB',
      'Direct Lateral Entry to 2nd Year B.E. via DCET at RVCE, MSRIT, BMSCE',
      'CAD/CAM & CNC Programmer, Embedded Systems Technician',
    ],
    futureDegrees: ['Lateral Entry B.E. / B.Tech (3 Yrs via DCET)', 'Post Diploma in Tool Design (PDTD)', 'B.Sc (IT / CS)'],
    avgStartingSalary: '₹3.0 LPA – ₹5.5 LPA (or direct B.E. admission)',
    pros: [
      'Direct Lateral Entry to 2nd year B.E./B.Tech saves 1 year and bypasses 1st-year PUC rush',
      '10% Supernumerary quota reserved in premier engineering colleges (RVCE, MSRIT, BMSCE)',
      'Early hands-on technical skills and immediate eligibility for state/central Junior Engineer exams',
    ],
    cons: [
      'Cannot appear directly for medical courses (MBBS/BDS)',
      'Branch migration during DCET is subject to strict DTE Karnataka branch eligibility matrix',
    ],
    icon: Award,
    featured: true,
  },
  {
    id: 'puc-commerce',
    title: 'Pre-University (PUC) — Commerce Stream',
    subtitle: 'CEBA / SEBA / MEBA / EBAC Combinations',
    stage: 'after-10th',
    category: 'PUC (+2)',
    duration: '2 Years',
    difficulty: 'Moderate',
    overview: 'The launchpad for future financial analysts, chartered accountants, corporate lawyers, and business executives. Combines Accountancy, Business Studies, Economics, and Statistics/Mathematics/Computer Science.',
    popularBranches: [
      'CEBA (Computer Science, Economics, Business Studies, Accountancy)',
      'SEBA (Statistics, Economics, Business Studies, Accountancy)',
      'MEBA (Basic Maths, Economics, Business Studies, Accountancy)',
      'HEBA (History, Economics, Business Studies, Accountancy)',
    ],
    entranceExams: [
      { name: 'CA Foundation', conductingBody: 'Institute of Chartered Accountants of India (ICAI)' },
      { name: 'CSEET (CS Executive Entrance)', conductingBody: 'Institute of Company Secretaries of India (ICSI)' },
      { name: 'CMA Foundation', conductingBody: 'Institute of Cost Accountants of India (ICMAI)' },
      { name: 'CLAT (Common Law Admission Test)', conductingBody: 'Consortium of NLUs — 5-Year Integrated BBA/BA LLB' },
      { name: 'CUET-UG', conductingBody: 'NTA — Central Universities (Delhi Univ, Christ Univ, etc.)' },
    ],
    eligibility: 'Pass in 10th Standard / SSLC / CBSE / ICSE.',
    topCollegesKarnataka: [
      'St. Joseph’s College of Commerce (Autonomous), Bengaluru',
      'Mount Carmel College (Bengaluru)',
      'Christ Junior College (Bengaluru)',
      'Sri Bhagawan Mahaveer Jain College (VV Puram, Bengaluru)',
      'Canara PU College (Mangaluru)',
      'Seshadripuram PU College (Bengaluru)',
    ],
    careerProspects: [
      'Chartered Accountant (CA) / Audit Partner',
      'Investment Banker / Equity Analyst / Portfolio Manager',
      'Corporate Legal Counsel (via 5-Yr BBA LLB at NLSIU)',
      'Chief Financial Officer (CFO) / Fintech Entrepreneur',
    ],
    futureDegrees: ['B.Com / B.Com (Honours)', 'BBA / BBM (3–4 Yrs)', '5-Yr Integrated Law (BBA LLB)', 'B.Sc Finance / Economics'],
    avgStartingSalary: '₹4.0 LPA – ₹10.0 LPA (post-CA/B.Com)',
    pros: [
      'Faster professional certification path through CA/CS/CMA foundation',
      'Balanced workload compared to high-intensity science streams',
      'High entrepreneurship and corporate finance relevance in Bengaluru startup hub',
    ],
    cons: [
      'Cannot transition back to engineering or medical degrees later',
      'Chartered Accountancy intermediate/final exams have rigorous national pass rates',
    ],
    icon: TrendingUp,
  },
  {
    id: 'puc-arts',
    title: 'Pre-University (PUC) — Arts & Humanities',
    subtitle: 'HEP / HEPS / Psychology / Journalism',
    stage: 'after-10th',
    category: 'PUC (+2)',
    duration: '2 Years',
    difficulty: 'Moderate',
    overview: 'Ideal for students oriented towards Civil Services (UPSC CSE, KPSC KAS), Journalism, Psychology, International Relations, Law, Public Policy, and Creative Design.',
    popularBranches: [
      'HEP (History, Economics, Political Science)',
      'HEPS (History, Economics, Political Science, Sociology)',
      'Psychology, English Literature, Journalism combinations',
    ],
    entranceExams: [
      { name: 'CLAT / AILET', conductingBody: 'Consortium of NLUs / NLU Delhi — 5-Yr Integrated BA LLB' },
      { name: 'NID DAT / NIFT / UCEED', conductingBody: 'National Institute of Design / NIFT — B.Des Fashion & Product' },
      { name: 'CUET-UG', conductingBody: 'NTA — Top Central Universities (JNU, DU, BHU)' },
    ],
    eligibility: 'Pass in 10th Standard / SSLC.',
    topCollegesKarnataka: [
      'St. Joseph’s University / PU College (Bengaluru)',
      'Mount Carmel PU College (Bengaluru)',
      'National College, Basavanagudi (Bengaluru)',
      'Maharani’s Arts College (Bengaluru & Mysuru)',
      'St. Aloysius PU College (Mangaluru)',
    ],
    careerProspects: [
      'Civil Servant (IAS, IPS, KAS via UPSC / KPSC)',
      'Corporate Advocate / Constitutional Lawyer (via NLSIU)',
      'Broadcast Journalist / Investigative Reporter / Media Strategist',
      'Clinical Psychologist / HR Behavioral Consultant',
    ],
    futureDegrees: ['BA / BA (Honours) 3–4 Yrs', '5-Yr Integrated BA LLB', 'Bachelor of Design (B.Des)', 'Bachelor of Social Work (BSW)'],
    avgStartingSalary: '₹3.5 LPA – ₹9.0 LPA',
    pros: [
      'Strongest early foundation for UPSC Civil Services and KPSC examinations',
      'Nurtures critical thinking, creative expression, and analytical writing',
      'Excellent entry point for prestigious national law universities (NLSIU)',
    ],
    cons: [
      'Requires strategic planning for high-paying corporate roles',
      'Fewer direct campus recruitment opportunities at the undergraduate level without professional post-grad',
    ],
    icon: BookOpen,
  },
  {
    id: 'iti-vocational',
    title: 'Industrial Training Institute (ITI)',
    subtitle: 'Craftsman Training Scheme (CTS) Trades',
    stage: 'after-10th',
    category: 'Vocational Training',
    duration: '1 to 2 Years',
    difficulty: 'Moderate',
    overview: 'Fast-track vocational training focusing 100% on trade skills. Earn National Trade Certificate (NTC) recognized by NCVT for direct technical recruitment across Indian Railways, HAL, BEL, ISRO, and private manufacturing giants.',
    popularBranches: [
      'Electrician (2 Years) — High PSU & Electrical Board Demand',
      'Fitter (2 Years) — Core Mechanical Maintenance',
      'Turner & Machinist (2 Years) — Precision CNC Machining',
      'COPA (Computer Operator & Programming Assistant - 1 Year)',
      'Electronic Mechanic & Welder',
    ],
    entranceExams: [
      { name: 'Karnataka ITI Single Window Merit Admission', conductingBody: 'Industrial Training & Employment Department Karnataka' },
    ],
    eligibility: 'Pass in 10th Standard / SSLC.',
    topCollegesKarnataka: [
      'Government ITI, Hosur Road (Bengaluru)',
      'Government ITI, Peenya (Bengaluru Industrial Area)',
      'HAL Industrial Training Institute (Vimanapura)',
      'Government ITI, Kadri (Mangaluru)',
      'Government ITI, Belagavi & Hubballi',
    ],
    careerProspects: [
      'Technician Grade-III in Indian Railways (RRB ALP / Technician)',
      'Craftsman in HAL, BEL, BHEL, ISRO, DRDO',
      'Plant Maintenance Technician in Bosch, Toyota, TVS Motor',
      'Licensed Electrical Contractor / Self-Employed Workshop Owner',
    ],
    futureDegrees: ['Apprenticeship Training (NAC)', 'Direct Lateral Entry to 2nd Year Polytechnic Diploma', 'CITS Instructor Training'],
    avgStartingSalary: '₹2.2 LPA – ₹4.2 LPA + Overtime & Benefits',
    pros: [
      'Shortest route to government PSU employment and financial independence',
      'Can transition directly to 2nd year Polytechnic Diploma through lateral entry scheme',
      'High demand in Karnataka industrial hubs (Peenya, Bommasandra, Bidadi)',
    ],
    cons: [
      'Ceiling on executive promotions without subsequent engineering degrees',
      'Physical workshop labor and shift duties',
    ],
    icon: Building2,
  },
  {
    id: 'paramedical-diplomas-10th',
    title: 'Paramedical & Allied Healthcare Diplomas',
    subtitle: 'Diagnostic & Hospital Care Diplomas',
    stage: 'after-10th',
    category: 'Healthcare & Paramedical',
    duration: '3 Years (or 2 Yrs after PUC)',
    difficulty: 'Moderate',
    overview: 'Direct technical healthcare training under Karnataka Paramedical Board. Prepares crucial hospital specialists in diagnostic laboratories, radiology clinics, dialysis units, and operation theatres.',
    popularBranches: [
      'DMLT (Diploma in Medical Laboratory Technology)',
      'DMXT (Diploma in Medical X-Ray / Radiography Technology)',
      'DOT (Diploma in Operation Theatre & Anaesthesia Technology)',
      'DDT (Diploma in Dialysis Technology)',
      'Diploma in Ophthalmic Technology & Health Inspector',
    ],
    entranceExams: [
      { name: 'Karnataka Paramedical Board Allotment', conductingBody: 'Paramedical Board, Government of Karnataka', link: 'http://pmbkarnataka.org/' },
    ],
    eligibility: 'Pass in 10th Standard / SSLC with minimum 35% marks.',
    topCollegesKarnataka: [
      'Bangalore Medical College & Research Institute (BMCRI Paramedical)',
      'Victoria Hospital & Bowring Hospital Training Schools',
      'Mysore Medical College & Research Institute (MMCRI)',
      'KIMS Hospital & Paramedical Institute (Bengaluru)',
      'Father Muller Medical College Allied Health Sciences (Mangaluru)',
    ],
    careerProspects: [
      'Certified Clinical Laboratory Technologist',
      'Hospital Radiographer / CT-MRI Scan Operator',
      'Operation Theatre Assistant / Anaesthesia Assistant',
      'Dialysis Technologist in Nephrology Units',
    ],
    futureDegrees: ['B.Sc Allied Health Sciences (Lateral Entry)', 'B.Sc Medical Laboratory Technology', 'Hospital Administration'],
    avgStartingSalary: '₹2.8 LPA – ₹5.0 LPA',
    pros: [
      'Recession-proof healthcare industry with consistent domestic and Gulf job demand',
      'Meaningful clinical contribution without the 5.5-year commitment of an MBBS',
      'Direct government hospital contract and permanent staff recruitment',
    ],
    cons: [
      'Involves hospital shift rotations and exposure to clinical biohazards',
      'Independent diagnostic reporting reserved for MBBS pathologists',
    ],
    icon: Stethoscope,
  },
];

// ==============================================================================
// DATA: AFTER 12TH (PUC) PATHWAYS
// ==============================================================================
const AFTER_12TH_PATHWAYS: PathwayItem[] = [
  {
    id: 'engineering-btech',
    title: 'Bachelor of Engineering (B.E. / B.Tech)',
    subtitle: '4-Year Professional Undergraduate Degree',
    stage: 'after-12th',
    category: 'Engineering & Technology',
    duration: '4 Years (8 Semesters)',
    difficulty: 'Demanding',
    overview: 'Karnataka is India’s engineering powerhouse with 226+ verified institutions. Programs combine mathematical rigor with applied software, algorithmic, electronics, or mechanical design. Offers top-tier campus recruitment in Bengaluru tech corridors.',
    popularBranches: [
      'Computer Science & Engineering (CSE) & CSE (AI & ML)',
      'Information Science & Engineering (ISE) & Data Science',
      'Electronics & Communication Engineering (ECE)',
      'Electrical & Electronics (EEE) & Robotics & Automation',
      'Mechanical, Civil, Aerospace & Aeronautical Engineering',
      'Biotechnology & Computer Science and Business Systems (CSBS)',
    ],
    entranceExams: [
      { name: 'KCET (Karnataka CET)', conductingBody: 'KEA — Subsidized Govt Quota in 226 Colleges' },
      { name: 'COMEDK UGET', conductingBody: 'Consortium of Karnataka Medical/Engg Colleges' },
      { name: 'JEE Main & JEE Advanced', conductingBody: 'NTA — NIT Surathkal, IIIT Bangalore, IIT Dharwad' },
      { name: 'Institutional Exams', conductingBody: 'PES Scholastic Aptitude Test (PESSAT)' },
    ],
    eligibility: 'Passed 10+2 / PUC with Physics and Mathematics as compulsory subjects along with Chemistry/Bio/CS/Electronics with minimum 45% marks (40% for SC/ST/OBC).',
    topCollegesKarnataka: [
      'RV College of Engineering (RVCE), Bengaluru',
      'Ramaiah Institute of Technology (MSRIT) — NIRF 75, Bengaluru',
      'BMS College of Engineering (BMSCE) & BMSIT&M, Bengaluru',
      'National Institute of Technology Karnataka (NITK Surathkal)',
      'Nitte Meenakshi Institute of Technology (NMIT Yelahanka)',
      'Atria Institute of Technology (Hebbal Kempapura)',
      'Acharya Institute of Technology (Soladevanahalli)',
      'PES University (RR Campus & EC Campus)',
    ],
    careerProspects: [
      'Software Development Engineer (SDE-1) @ Tier-1 Tech (₹12–40 LPA)',
      'AI/ML Research Engineer & Data Architect',
      'Embedded Systems & VLSI Engineer (Qualcomm, Intel, TI)',
      'Public Sector PSU Executive Engineer (GATE via ISRO, IOCL, ONGC)',
    ],
    futureDegrees: ['M.Tech / ME (via GATE / Karnataka PGCET)', 'MBA (via CAT/GMAT/PGCET)', 'MS in USA, Germany, UK'],
    avgStartingSalary: '₹5.5 LPA – ₹24.0 LPA (Top tier packages ₹40–55 LPA)',
    pros: [
      'Bengaluru is the Silicon Valley of India — unmatched startup & MNC hiring',
      'Clear progression to high-paying global technical leadership roles',
      'Recognized degree for global MS and direct executive MBA paths',
    ],
    cons: [
      'Competitive KCET/COMEDK cutoffs for computer science and AI branches',
      'Requires continuous self-skilling beyond academic VTU syllabus',
    ],
    icon: Cpu,
    featured: true,
  },
  {
    id: 'medicine-mbbs-allied',
    title: 'Medical (MBBS / BDS / AYUSH / B.Sc Nursing)',
    subtitle: 'Clinical Healthcare & Life Sciences Degrees',
    stage: 'after-12th',
    category: 'Medicine & Healthcare',
    duration: '5.5 Years (MBBS) / 4 Years (Nursing/B.Pharm)',
    difficulty: 'Highly Competitive',
    overview: 'The noblest and most impactful profession. Prepares licensed physicians, dental surgeons, alternative medicine practitioners, and pharmacists serving the health ecosystem.',
    popularBranches: [
      'MBBS (Bachelor of Medicine & Bachelor of Surgery - 5.5 Yrs)',
      'BDS (Bachelor of Dental Surgery - 5 Yrs)',
      'BAMS / BHMS (Ayurvedic / Homeopathic Medicine - 5.5 Yrs)',
      'B.Pharm & Pharm.D (Doctor of Pharmacy - 6 Yrs)',
      'B.Sc Nursing (4 Yrs) & B.Sc Physiotherapy (BPT - 4.5 Yrs)',
    ],
    entranceExams: [
      { name: 'NEET-UG', conductingBody: 'NTA — Mandatory single entrance for MBBS/BDS/AYUSH' },
      { name: 'KCET (B.Sc Nursing / B.Pharm)', conductingBody: 'KEA — Mandatory for Karnataka state quota seats' },
    ],
    eligibility: '10+2 / PUC with Physics, Chemistry, Biology (PCB) and English with minimum 50% aggregate (40% for reserved categories) and valid NEET-UG qualification.',
    topCollegesKarnataka: [
      'Bangalore Medical College & Research Institute (BMCRI)',
      'St. John’s Medical College, Koramangala (Bengaluru)',
      'MS Ramaiah Medical College (Bengaluru)',
      'Kasturba Medical College (KMC Manipal & Mangaluru)',
      'Mysore Medical College & Research Institute (MMCRI)',
      'JSS Medical College (Mysuru)',
    ],
    careerProspects: [
      'Medical Officer / Resident Physician in Super-Speciality Hospitals',
      'Clinical Post-Graduate Specialist (MD / MS / DNB)',
      'Global Healthcare Practice (USMLE for USA, PLAB for UK, AMC for Australia)',
      'Hospital Clinical Director & Healthcare Entrepreneur',
    ],
    futureDegrees: ['MD / MS / DNB Post-Graduation (3 Yrs)', 'DM / M.Ch Super Speciality (3 Yrs)', 'Fellowships'],
    avgStartingSalary: '₹7.5 LPA – ₹18.0 LPA (accelerates steeply post-specialization)',
    pros: [
      'Highest societal respect, job security, and clinical satisfaction',
      'Global demand with high immigration visa privileges for qualified doctors and nurses',
      'Diverse sub-specialities: cardiology, neurosurgery, radiology, oncology',
    ],
    cons: [
      'Extreme NEET-UG competition (over 24 lakh applicants nationally for ~1 lakh seats)',
      'Long study gestation: 5.5 years MBBS + 3 years MD/MS + 3 years Super-speciality',
    ],
    icon: Stethoscope,
    featured: true,
  },
  {
    id: 'commerce-ca-law',
    title: 'Commerce & Corporate Finance (CA, CS, B.Com, BBA)',
    subtitle: 'Chartered Accountancy, Law & Business Systems',
    stage: 'after-12th',
    category: 'Commerce & Business',
    duration: '3 to 5 Years',
    difficulty: 'Demanding',
    overview: 'Prepares the leaders of corporate finance, auditing, tax architecture, and business operations. Includes prestigious global professional charters like CA (ICAI) and five-year integrated law from National Law Schools.',
    popularBranches: [
      'Chartered Accountancy (CA) — ICAI 3-Tier Exam Course',
      '5-Year Integrated BBA LLB / BA LLB (NLSIU Bangalore)',
      'B.Com (Honours in Finance / International Accounting & ACCA)',
      'BBA (Business Analytics / Aviation / Global Logistics)',
      'Company Secretary (CS) & Cost and Management Accountant (CMA)',
    ],
    entranceExams: [
      { name: 'CA Foundation', conductingBody: 'Institute of Chartered Accountants of India (ICAI)' },
      { name: 'CLAT (Common Law Admission Test)', conductingBody: 'Consortium of NLUs — NLSIU Bangalore' },
      { name: 'CUET-UG', conductingBody: 'NTA — Central Universities' },
    ],
    eligibility: 'Pass in 10+2 / PUC in any stream (Commerce preferred for CA/B.Com; any stream for CLAT Law).',
    topCollegesKarnataka: [
      'National Law School of India University (NLSIU), Nagarbhavi (Bengaluru) — NIRF #1 Law School',
      'St. Joseph’s College of Commerce (SJCC), Bengaluru',
      'Christ (Deemed to be University), Hosur Road & Bannerghatta',
      'Mount Carmel College (MCC), Vasanth Nagar',
      'Jain (Deemed-to-be University) Center for Management Studies',
    ],
    careerProspects: [
      'Chartered Accountant & Statutory Auditor @ Big-4 (PwC, EY, Deloitte, KPMG)',
      'Corporate Transaction Lawyer & Legal Advisor @ Top Law Firms (AZB, Trilegal)',
      'Management Consultant @ McKinsey, BCG, Bain',
      'Financial Controller & Corporate Tax Strategist',
    ],
    futureDegrees: ['CA Final', 'Master of Business Administration (MBA via CAT)', 'LL.M (Master of Laws)', 'M.Com'],
    avgStartingSalary: '₹6.5 LPA – ₹16.0 LPA (NLSIU law graduates average ₹18 LPA)',
    pros: [
      'CA qualification offers instant recognition and statutory signing authority across India',
      'NLSIU Bangalore offers the highest law placement salaries in the country',
      'Flexible career tracks across venture capital, private equity, and multinational corporations',
    ],
    cons: [
      'CA intermediate and final exams require intense self-discipline over 3–4 years',
      'Requires strong aptitude for legal statutes, accounting standards, and tax codes',
    ],
    icon: TrendingUp,
  },
  {
    id: 'bca-bsc-tech',
    title: 'Computer Applications & Data Science (BCA / B.Sc CS)',
    subtitle: '3 to 4-Year Software & IT Degrees (NEP Scheme)',
    stage: 'after-12th',
    category: 'Computer Applications',
    duration: '3 to 4 Years (NEP Honours)',
    difficulty: 'Moderate',
    overview: 'Direct pathway to IT industry careers without the full 4-year engineering physics/chemistry coursework. Focuses intensively on programming languages, web engineering, database architecture, mobile apps, and machine learning.',
    popularBranches: [
      'Bachelor of Computer Applications (BCA)',
      'B.Sc Computer Science & Data Analytics',
      'B.Sc Artificial Intelligence & Cloud Computing',
      'B.Sc Cybersecurity & Digital Forensics',
    ],
    entranceExams: [
      { name: 'University Merit / Direct Admission', conductingBody: 'Karnataka State Universities Single Window / Autonomous Colleges' },
    ],
    eligibility: '10+2 / PUC in any stream with Mathematics / Computer Science / Statistics / Accountancy or 45% aggregate.',
    topCollegesKarnataka: [
      'Christ University (Bengaluru)',
      'St. Joseph’s University (Bengaluru)',
      'Kristu Jayanti College (Kothanur, Bengaluru)',
      'Mount Carmel College (Bengaluru)',
      'Presidency College (Hebbal, Bengaluru)',
      'KLE Society’s S. Nijalingappa College (Rajajinagar)',
    ],
    careerProspects: [
      'Full Stack Web & Mobile App Developer',
      'Database Administrator & Cloud Engineer (AWS / Azure)',
      'Junior Data Analyst & Business Intelligence Specialist',
      'QA Automation & Software Testing Engineer',
    ],
    futureDegrees: ['MCA (Master of Computer Applications - 2 Yrs via PGCET)', 'M.Sc Data Science', 'MBA in IT / Tech Management'],
    avgStartingSalary: '₹3.6 LPA – ₹7.5 LPA (escalates rapidly with 2 years practical experience)',
    pros: [
      'More affordable tuition fees compared to engineering degrees',
      'Streamlined curriculum focused strictly on software and algorithms',
      'Eligible for MCA via Karnataka PGCET, which holds equivalence to B.E./B.Tech for IT recruitment',
    ],
    cons: [
      'Some core hardware/embedded MNCs prefer B.E./B.Tech degree credentials',
      'Starting compensation in mass recruiter drives may initially be lower than premier engineering colleges',
    ],
    icon: Cpu,
  },
  {
    id: 'agriculture-veterinary',
    title: 'Agriculture, Horticulture & Veterinary (B.Sc Agri / BVSc)',
    subtitle: 'Karnataka KEA Farm Universities Quota',
    stage: 'after-12th',
    category: 'Agricultural Sciences',
    duration: '4 Years (Agri) / 5.5 Years (BVSc)',
    difficulty: 'Demanding',
    overview: 'High-prestige government careers, agri-tech innovation, seed technology, and animal welfare. KEA conducts a dedicated Practical Agronomist Quota for children of agriculturalists with significant seat reservations.',
    popularBranches: [
      'B.Sc (Hons) Agriculture (UAS Bangalore & Dharwad)',
      'B.Sc (Hons) Horticulture (UHS Bagalkote)',
      'Bachelor of Veterinary Science & Animal Husbandry (BVSc & AH - 5.5 Yrs)',
      'B.Sc (Hons) Forestry & Sericulture',
      'B.Tech Agricultural Engineering & Food Technology',
    ],
    entranceExams: [
      { name: 'KCET Agriculture & Practical Farm Test', conductingBody: 'KEA + UAS Bangalore / Dharwad / Raichur / Shimoga' },
    ],
    eligibility: '10+2 / PUC with Physics, Chemistry, Biology and Mathematics/Inter-Agri with minimum 50% marks.',
    topCollegesKarnataka: [
      'University of Agricultural Sciences (UAS), Gandhi Krishi Vigyana Kendra (GKVK), Bengaluru',
      'University of Agricultural Sciences (UAS), Dharwad',
      'Veterinary College, Hebbal (Bengaluru - KVAFSU)',
      'College of Agriculture, Shimoga (UAHS)',
      'College of Horticulture, Bagalkote & Mudigere',
    ],
    careerProspects: [
      'Agriculture Officer (AO) & Assistant Director of Agriculture (Govt of Karnataka)',
      'Veterinary Officer in Animal Husbandry Department & Dairy Co-operatives (KMF Nandini)',
      'Agri-Tech Startup Specialist & Precision Farming Consultant',
      'Banking Agriculture Field Officer (IBPS SO AFO)',
    ],
    futureDegrees: ['M.Sc Agriculture (via ICAR AIEEA)', 'MVSc (Veterinary Post-Graduation)', 'MBA in Agribusiness Management (IIM Ahmedabad / IIM Lucknow)'],
    avgStartingSalary: '₹4.5 LPA – ₹9.5 LPA (Govt pay scales offer stable pensions & allowances)',
    pros: [
      'Strong reservation under KEA Practical Agriculturist Quota for farmers’ children',
      'Steady public sector employment through KPSC and nationalized banks (IBPS AFO)',
      'GKVK Bangalore campus is one of Asia’s foremost agricultural research centers',
    ],
    cons: [
      'Requires rural field immersions and work in outdoor environments',
      'Veterinary seats are limited and require high KCET ranking',
    ],
    icon: LeafIcon,
  },
  {
    id: 'design-architecture',
    title: 'Architecture & Design (B.Arch & B.Des)',
    subtitle: 'Spatial Architecture, UI/UX & Product Innovation',
    stage: 'after-12th',
    category: 'Design & Architecture',
    duration: '5 Years (B.Arch) / 4 Years (B.Des)',
    difficulty: 'Demanding',
    overview: 'Blends creative artistic flair with structural engineering, human ergonomics, spatial aesthetics, and digital design systems. Architecture is regulated by the Council of Architecture (COA).',
    popularBranches: [
      'Bachelor of Architecture (B.Arch - 5 Yrs)',
      'Bachelor of Design (B.Des - Industrial / Product Design)',
      'B.Des in User Experience (UI/UX) & Interaction Design',
      'B.Des in Fashion Communication & Interior Spatial Design',
    ],
    entranceExams: [
      { name: 'NATA (National Aptitude Test in Architecture)', conductingBody: 'Council of Architecture (COA)' },
      { name: 'UCEED / NID DAT / NIFT', conductingBody: 'IIT Bombay / NID / NIFT' },
      { name: 'KCET Architecture Rank Allotment', conductingBody: 'KEA — 50% NATA + 50% Board Marks' },
    ],
    eligibility: 'Passed 10+2 / PUC with Physics and Mathematics as compulsory subjects along with Chemistry, with at least 50% marks, and qualified in NATA.',
    topCollegesKarnataka: [
      'BMS College of Architecture (BMSCA), Basavanagudi (Bengaluru)',
      'School of Architecture, RV College of Engineering (RVCA), Bengaluru',
      'MSRIT Department of Architecture, Mathikere (Bengaluru)',
      'National Institute of Design (NID), R&D Campus (Yeshwanthpur, Bengaluru)',
      'Dayananda Sagar College of Architecture (DSCA), Bengaluru',
      'Manipal School of Architecture & Planning (MSAP, Manipal)',
    ],
    careerProspects: [
      'Licensed Architect & Urban Master Planner',
      'Principal UI/UX & Product Designer @ Tech Unicorns (₹14–35 LPA)',
      'Sustainable Green Building Consultant (LEED / GRIHA certified)',
      'Heritage Conservation Architect & Interior Stylist',
    ],
    futureDegrees: ['M.Arch (Master of Architecture)', 'M.Des (Master of Design via CEED)', 'Urban Planning (CEPT University)'],
    avgStartingSalary: '₹4.5 LPA – ₹12.0 LPA (UI/UX designers scale up to ₹25+ LPA in Bengaluru)',
    pros: [
      'Official license to practice architecture and stamp municipal blueprint approvals',
      'Massive boom in UI/UX and product design roles in Bengaluru tech firms',
      'High creative independence and ability to build an independent design consultancy',
    ],
    cons: [
      'Rigorous 5-year studio curriculum with demanding overnight jury reviews',
      'Architecture trainee stipends in initial years are historically modest',
    ],
    icon: Palette,
  },
];

// Helper icon
function LeafIcon(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

// ==============================================================================
// DATA: AFTER DIPLOMA (POLYTECHNIC) PATHWAYS — SPECIAL COMPREHENSIVE SECTION
// ==============================================================================
const AFTER_DIPLOMA_PATHWAYS: PathwayItem[] = [
  {
    id: 'dcet-lateral-entry',
    title: 'DCET Lateral Entry to 2nd Year B.E. / B.Tech',
    subtitle: 'Direct Admission into 3rd Semester of Engineering',
    stage: 'after-diploma',
    category: 'Degree Engineering',
    duration: '3 Years (6 Semesters)',
    difficulty: 'Demanding',
    overview: 'The golden milestone for polytechnic diploma holders in Karnataka. Through the Diploma Common Entrance Test (DCET) conducted by KEA, diploma graduates enter directly into the 2nd Year (3rd Semester) of B.E./B.Tech, completely skipping the 1st year. 10% supernumerary seats are legally reserved across all VTU-affiliated and Autonomous government and private colleges.',
    popularBranches: [
      'CSE / ISE / AI & ML / Data Science (Open for CS, IS, EC diplomas)',
      'Mechanical, Aerospace, Automobile, Robotics (Open for Mech/Auto diplomas)',
      'ECE, EEE, Telecommunication, Medical Electronics (Open for EC/EE diplomas)',
      'Civil & Environmental Engineering (Open for Civil diplomas)',
    ],
    entranceExams: [
      { name: 'DCET (Diploma CET)', conductingBody: 'KEA — 140 Marks single-paper test (Applied Science, Applied Maths & Core Engineering)', link: 'https://cetonline.karnataka.gov.in/kea/' },
    ],
    eligibility: 'Passed 3-Year Polytechnic Diploma approved by DTE Karnataka / AICTE with at least 45% aggregate in final year (40% for SC/ST/OBC).',
    topCollegesKarnataka: [
      'RV College of Engineering (RVCE), Bengaluru',
      'Ramaiah Institute of Technology (MSRIT) — NIRF 75, Bengaluru',
      'BMS College of Engineering (BMSCE), Bengaluru',
      'University Visvesvaraya College of Engineering (UVCE), Bengaluru',
      'BMS Institute of Technology & Management (BMSIT&M), Yelahanka',
      'Nitte Meenakshi Institute of Technology (NMIT), Yelahanka',
      'Atria Institute of Technology, Hebbal',
      'The National Institute of Engineering (NIE), Mysuru',
    ],
    careerProspects: [
      'Full-fledged Graduate Software Development Engineer (SDE)',
      'Core Design Engineer in Aerospace, Automotive & Automation',
      'Eligibility for GATE Exam, IES (Indian Engineering Services) & PSU Officer posts',
      'Higher Management & Global Tech Roles',
    ],
    futureDegrees: ['B.E. / B.Tech Degree', 'M.Tech / ME (via GATE / Karnataka PGCET)', 'MBA (via CAT / KMAT / PGCET)', 'MS in Germany / USA'],
    avgStartingSalary: '₹5.5 LPA – ₹18.0 LPA (Identical campus placement eligibility to 4-year students)',
    pros: [
      'Saves 1 full academic year by skipping 1st year engineering physics/chemistry cycles',
      '10% supernumerary seat reservation in top colleges guarantees high merit admission',
      'Diploma holders often outshine regular students in hands-on college workshops and capstone projects',
    ],
    cons: [
      'Transition from diploma mathematics to Engineering Mathematics-III requires rigorous preparation in the first semester',
      'Must strictly follow DTE Karnataka branch eligibility matrix for seat selection',
    ],
    icon: Award,
    featured: true,
  },
  {
    id: 'govt-psu-junior-engineer',
    title: 'Government & PSU Junior Engineer (JE) Recruitment',
    subtitle: 'Direct State & Central Public Sector Careers',
    stage: 'after-diploma',
    category: 'Government & PSUs',
    duration: 'Immediate Employment',
    difficulty: 'Highly Competitive',
    overview: 'A 3-Year Polytechnic Diploma is the official statutory eligibility requirement for thousands of Junior Engineer (JE) and Technical Assistant positions in Karnataka State Government and Central Government PSUs.',
    popularBranches: [
      'Junior Engineer in Karnataka PWD (Public Works Department)',
      'KPTCL / BESCOM / MESCOM / HESCOM / GESCOM Junior Engineer (Electrical)',
      'BMRCL Namma Metro Station Controller / Train Operator / Maintainer',
      'Indian Railways RRB JE (Railway Recruitment Board Junior Engineer)',
      'Staff Selection Commission Junior Engineer (SSC JE — CPWD, MES, BRO)',
      'DRDO CEPTAM & ISRO Technical Assistant',
    ],
    entranceExams: [
      { name: 'KPSC Junior Engineer Exam', conductingBody: 'Karnataka Public Service Commission' },
      { name: 'KPTCL / ESCOMs Recruitment Test', conductingBody: 'Karnataka Power Transmission Corp. Ltd.' },
      { name: 'BMRCL Recruitment Exam', conductingBody: 'Bangalore Metro Rail Corporation Ltd.' },
      { name: 'RRB JE / SSC JE', conductingBody: 'Railway Recruitment Control Board / Staff Selection Commission' },
    ],
    eligibility: '3-Year Polytechnic Diploma in Civil, Mechanical, Electrical, Electronics or Computer Engineering from DTE Karnataka.',
    topCollegesKarnataka: [
      'Direct competitive examination open to graduates of all Karnataka polytechnics',
    ],
    careerProspects: [
      'Assistant Executive Engineer / Junior Engineer with gazetted promotional avenues',
      'Metro Train Operations & Signalling Supervisor',
      'Power Grid Substation Maintenance In-Charge',
      'Defense Laboratory Technical Officer @ DRDO',
    ],
    futureDegrees: ['AMIE (Associate Member of the Institution of Engineers)', 'Distance / Part-Time B.Tech for working professionals', 'State departmental promotional examinations'],
    avgStartingSalary: '₹4.2 LPA – ₹8.0 LPA + Government DA, HRA, Medical & Pension Benefits',
    pros: [
      'Highest job stability, social prestige, and job security in Karnataka public sector',
      'Guaranteed retirement benefits, health insurance, and structured government pay commissions',
      'Clear promotional hierarchy to Assistant Engineer (AE) and Executive Engineer (EE)',
    ],
    cons: [
      'State recruitment notifications may have multi-year exam cycles',
      'Rigorous written competitive exam covering core technical syllabus and general Kannada/English',
    ],
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 'industry-corporate-placements',
    title: 'Direct Corporate & Manufacturing Tech Placements',
    subtitle: 'Private Sector OEM & Automation Engineering',
    stage: 'after-diploma',
    category: 'Private Industry',
    duration: 'Immediate Employment',
    difficulty: 'Moderate',
    overview: 'Major Indian and global conglomerates actively conduct on-campus hiring across Karnataka polytechnics for Graduate Technician Trainees (DET / GTT).',
    popularBranches: [
      'Automotive Assembly & EV Powertrains (Toyota, TVS, Tata Motors)',
      'Industrial Automation & Robotics (ABB, Schneider Electric, Fanuc)',
      'Infrastructure Construction Engineering (Larsen & Toubro - L&T Construction)',
      'Electronics Manufacturing Services (Foxconn, Tata Electronics, Wistron)',
      'Precision Aerospace Components (HAL, Dynamatic Technologies, Collins Aerospace)',
    ],
    entranceExams: [
      { name: 'Campus Placement Technical Tests & Interviews', conductingBody: 'Corporate Recruiters & Polytechnic Training & Placement Cell' },
    ],
    eligibility: 'Polytechnic Diploma with minimum 60% marks and zero active backlogs.',
    topCollegesKarnataka: [
      'S.J. Polytechnic, Bengaluru',
      'MEI Polytechnic, Bengaluru',
      'Karnataka Govt Polytechnic, Mangaluru',
      'Acharya Polytechnic, Bengaluru',
      'NTTF & GTTC Campuses across Karnataka',
    ],
    careerProspects: [
      'Diploma Engineer Trainee (DET) -> Senior Production Engineer',
      'Quality Control & Six Sigma Assurance Specialist',
      'PLC & SCADA Commissioning Engineer',
      'Field Service & International Installation Specialist',
    ],
    futureDegrees: ['Sponsored B.Tech programs (e.g. BITS Pilani Work Integrated Learning Programmes for L&T/Bosch employees)', 'Executive MBA'],
    avgStartingSalary: '₹3.2 LPA – ₹5.5 LPA + Shift Allowances, Transport & Subsidized Housing',
    pros: [
      'Immediate financial independence within weeks of finishing 3rd-year diploma exams',
      'Top employers (L&T, Tata) sponsor higher engineering degrees (B.Tech) while continuing salary',
      'Rapid promotion for high-performing technical specialists in high-growth EV and semiconductor sectors',
    ],
    cons: [
      'Initial roles often involve factory floor rotations, 3-shift timings, and physical site supervision',
      'Starting compensation is lower than 4-year engineering graduates during trainee periods',
    ],
    icon: Briefcase,
  },
  {
    id: 'post-diploma-specializations',
    title: 'Advanced Post-Diploma & Tool Design Certifications',
    subtitle: 'GTTC, NTTF & Advanced Skill Excellence Centers',
    stage: 'after-diploma',
    category: 'Advanced Certification',
    duration: '1 to 1.5 Years',
    difficulty: 'Moderate',
    overview: 'Designed for diploma holders who want specialized high-end industrial engineering mastery in Tool & Die Making, VLSI, Embedded Systems, Mechatronics, or CNC 5-Axis Programming before entering leadership roles.',
    popularBranches: [
      'Post-Diploma in Tool Design (PDTD) — GTTC / NTTF',
      'Post-Diploma in Industrial Automation & Mechatronics',
      'Post-Diploma in CAD/CAM & Plastic Mould Design',
      'Embedded Systems & IoT Engineering (CDAC / NIELIT)',
    ],
    entranceExams: [
      { name: 'GTTC / NTTF Post-Diploma Entrance & Merit Selection', conductingBody: 'Government Tool Room & Training Centre / NTTF Karnataka' },
    ],
    eligibility: 'Pass in 3-Year Polytechnic Diploma in Mechanical, Automobile, Production, Electrical, or Electronics.',
    topCollegesKarnataka: [
      'Government Tool Room & Training Centre (GTTC), Rajajinagar (Bengaluru)',
      'Nettur Technical Training Foundation (NTTF), Electronic City & Peenya',
      'Central Institute of Petrochemicals Engineering & Technology (CIPET), Mysuru',
      'Karnataka-German Technical Training Institute (KGTTI), Bengaluru & Hubballi',
    ],
    careerProspects: [
      'Senior Tool & Die Designer (Aerospace & Automotive Die-Casting)',
      'CNC 5-Axis Multi-Tasking Specialist',
      'Robotics Automation Cell Engineer',
      'High-paying international opportunities in Germany, UAE, and Japan',
    ],
    futureDegrees: ['Direct entry to overseas engineering Bachelor’s or lateral B.E.'],
    avgStartingSalary: '₹4.5 LPA – ₹8.5 LPA (Substantially higher overseas starting salaries)',
    pros: [
      'Nearly 100% placement rate due to acute industry shortage of skilled tool designers',
      'Highly valued credentials in Germany, Switzerland, Singapore, and Japan',
      'GTTC and NTTF have cutting-edge German and Japanese multi-axis machining facilities',
    ],
    cons: [
      'Adds 1 year of post-diploma study before entering a full-time corporate role',
      'Specialized curriculum focused narrowly on precision manufacturing and automation',
    ],
    icon: Cpu,
  },
];

// ==============================================================================
// DCET LATERAL ENTRY ELIGIBILITY MAPPING
// ==============================================================================
interface DcetBranchMapping {
  diplomaBranch: string;
  eligibleBeBranches: string[];
  keyColleges: string[];
  quotaNote: string;
}

const DCET_BRANCH_MAPPINGS: DcetBranchMapping[] = [
  {
    diplomaBranch: 'Computer Science / Information Science',
    eligibleBeBranches: [
      'Computer Science & Engineering (CSE)',
      'Information Science & Engineering (ISE)',
      'Artificial Intelligence & Machine Learning (AIML)',
      'Data Science Engineering',
      'Cyber Security Engineering',
      'Computer Science & Business Systems (CSBS)',
    ],
    keyColleges: ['RVCE', 'MSRIT', 'BMSCE', 'UVCE', 'BMSIT&M', 'NMIT', 'Atria IT', 'NIE Mysuru'],
    quotaNote: '10% Supernumerary quota. Highly competitive; top ranks (< 500) needed for RVCE/MSRIT/BMSCE CSE.',
  },
  {
    diplomaBranch: 'Electronics & Communication / Telecommunication',
    eligibleBeBranches: [
      'Electronics & Communication Engineering (ECE)',
      'Electrical & Electronics Engineering (EEE)',
      'Telecommunication Engineering',
      'Medical Electronics',
      'Robotics & Automation',
      'CSE / ISE (in select VTU autonomous colleges subject to university conversion rules)',
    ],
    keyColleges: ['RVCE', 'MSRIT', 'BMSCE', 'BMSIT&M', 'Sir MVIT', 'NMIT', 'Acharya IT'],
    quotaNote: 'Wide branch eligibility. Strong placements in semiconductor, embedded hardware & telecom companies.',
  },
  {
    diplomaBranch: 'Mechanical Engineering / Automobile / Mechatronics',
    eligibleBeBranches: [
      'Mechanical Engineering',
      'Automobile Engineering',
      'Aerospace Engineering',
      'Aeronautical Engineering',
      'Mechatronics Engineering',
      'Industrial Engineering & Management (IEM)',
      'Manufacturing Science & Engineering',
    ],
    keyColleges: ['RVCE', 'MSRIT', 'BMSCE', 'Acharya IT', 'Sir MVIT', 'PES Mandya', 'SIT Tumkur'],
    quotaNote: 'Largest seat availability in Karnataka. High recruitment by automotive and aerospace sectors.',
  },
  {
    diplomaBranch: 'Civil Engineering / Environmental',
    eligibleBeBranches: [
      'Civil Engineering',
      'Environmental Engineering',
      'Construction Technology & Management',
      'Transportation Engineering',
    ],
    keyColleges: ['UVCE', 'BMSCE', 'MSRIT', 'RVCE', 'BMSIT&M', 'NIE Mysuru', 'SIT Tumkur'],
    quotaNote: 'Prime pathway for government PWD and KPSC Assistant Engineer examinations.',
  },
  {
    diplomaBranch: 'Electrical & Electronics Engineering',
    eligibleBeBranches: [
      'Electrical & Electronics Engineering (EEE)',
      'Electronics & Communication Engineering (ECE)',
      'Electronics & Instrumentation Engineering (EIE)',
      'Robotics & Automation',
    ],
    keyColleges: ['UVCE', 'BMSCE', 'MSRIT', 'RVCE', 'BMSIT&M', 'Sir MVIT'],
    quotaNote: 'Direct qualification for KPTCL, BESCOM and Central Power Grid recruitment.',
  },
];

// ==============================================================================
// QUIZ QUESTIONS FOR THE CAREER DECISION WIZARD
// ==============================================================================
interface QuizState {
  currentStage: string;
  primaryPassion: string;
  timeHorizon: string;
  learningStyle: string;
}

export default function CareerPathwaysPage() {
  const [activeTab, setActiveTab] = useState<'after-10th' | 'after-12th' | 'after-diploma' | 'dcet-matrix' | 'quiz' | 'scholarships'>('after-10th');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<QuizState>({
    currentStage: '',
    primaryPassion: '',
    timeHorizon: '',
    learningStyle: '',
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Filtered pathways for active tab
  const displayedPathways = useMemo(() => {
    let list: PathwayItem[] = [];
    if (activeTab === 'after-10th') list = AFTER_10TH_PATHWAYS;
    else if (activeTab === 'after-12th') list = AFTER_12TH_PATHWAYS;
    else if (activeTab === 'after-diploma') list = AFTER_DIPLOMA_PATHWAYS;
    else return [];

    return list.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.popularBranches.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.careerProspects.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [activeTab, searchQuery, selectedCategory]);

  // Unique categories for active tab
  const categoryFilters = useMemo(() => {
    let source: PathwayItem[] = [];
    if (activeTab === 'after-10th') source = AFTER_10TH_PATHWAYS;
    else if (activeTab === 'after-12th') source = AFTER_12TH_PATHWAYS;
    else if (activeTab === 'after-diploma') source = AFTER_DIPLOMA_PATHWAYS;
    
    const cats = Array.from(new Set(source.map(s => s.category)));
    return ['ALL', ...cats];
  }, [activeTab]);

  // Quiz Recommendation Logic
  const quizRecommendation = useMemo(() => {
    if (!quizSubmitted) return null;

    const { currentStage, primaryPassion, timeHorizon, learningStyle } = quizAnswers;

    if (currentStage === '10th') {
      if (primaryPassion === 'tech' || primaryPassion === 'machines') {
        if (learningStyle === 'hands-on' || timeHorizon === 'short') {
          return {
            title: '3-Year Polytechnic Engineering Diploma (DTE Karnataka)',
            matchScore: '98% Match',
            rationale: 'Because you prefer practical, hands-on engineering and want early industry skills or a fast track to 2nd-year B.E. via DCET without the 2-year theory burden of PUC.',
            recommendedStreams: ['Polytechnic Diploma in CSE / AIML', 'Polytechnic Diploma in Mechanical / Mechatronics', 'GTTC Precision Tool Design'],
            nextSteps: ['Apply through DTE Karnataka Non-Exam Merit Allotment', 'Target premier polytechnics like SJP Bengaluru or KPT Mangaluru', 'Prepare for DCET in 3rd year for lateral entry to RVCE, MSRIT, or BMSCE'],
            href: '/career-pathways#polytechnic-diploma-10th',
          };
        } else {
          return {
            title: 'PUC Science Stream (PCMC / PCME / PCMB)',
            matchScore: '95% Match',
            rationale: 'Because you aim for top-tier national institutions (IITs, NITs, BITS) or premier Karnataka colleges through KCET and COMEDK, and are prepared for rigorous 2-year academic mastery.',
            recommendedStreams: ['PCMC (Physics, Chem, Maths, Computer Science)', 'PCME (Physics, Chem, Maths, Electronics)'],
            nextSteps: ['Enroll in a reputed Karnataka PU College (MES, National, Expert, Alva’s)', 'Prepare early for KCET, COMEDK UGET, and JEE Main', 'Aim for CSE/AIML branches in top Bengaluru engineering hubs'],
            href: '/career-pathways#puc-science',
          };
        }
      } else if (primaryPassion === 'medical') {
        return {
          title: 'PUC Science Stream (PCMB — Medical Track)',
          matchScore: '96% Match',
          rationale: 'Biology in PUC is mandatory for NEET-UG to pursue MBBS, BDS, AYUSH, B.Sc Nursing, or Veterinary Sciences.',
          recommendedStreams: ['PCMB (Physics, Chemistry, Maths, Biology)', 'PCMBiotech'],
          nextSteps: ['Enroll in PCMB at an accredited PU College with structured NEET coaching', 'Register for NEET-UG and KCET Medical counseling via KEA', 'Explore allied courses like B.Pharm and B.Sc Nursing as solid concurrent backups'],
          href: '/career-pathways#puc-science',
        };
      } else if (primaryPassion === 'finance') {
        return {
          title: 'PUC Commerce Stream (CEBA / SEBA / MEBA)',
          matchScore: '94% Match',
          rationale: 'Prepares you for prestigious Chartered Accountancy (CA), corporate finance, and integrated commercial law (CLAT) in Bengaluru’s thriving financial ecosystem.',
          recommendedStreams: ['CEBA (Computer Science, Economics, Business, Accountancy)', 'MEBA (Maths, Economics, Business, Accountancy)'],
          nextSteps: ['Register for CA Foundation with ICAI during 12th/PUC-2nd year', 'Target top commerce colleges like St. Joseph’s College of Commerce (SJCC) or Christ University', 'Prepare for CLAT for 5-Year Integrated Law at NLSIU'],
          href: '/career-pathways#puc-commerce',
        };
      } else {
        return {
          title: 'PUC Arts / Humanities & Design / Law',
          matchScore: '92% Match',
          rationale: 'Nurtures your analytical, creative, and communicative strengths for Civil Services (UPSC/KPSC), Top-tier Law (NLSIU), and Design (NID/NIFT).',
          recommendedStreams: ['HEP / HEPS (History, Economics, Pol Science, Sociology)', 'Psychology & Journalism Combinations'],
          nextSteps: ['Focus on reading, current affairs, and critical debate', 'Target 5-Year Integrated BA LLB via CLAT', 'Prepare for NID DAT / UCEED if creative design is your passion'],
          href: '/career-pathways#puc-arts',
        };
      }
    } else if (currentStage === '12th') {
      if (primaryPassion === 'tech' || primaryPassion === 'machines') {
        return {
          title: 'Bachelor of Engineering (B.E. / B.Tech) via KCET & COMEDK',
          matchScore: '99% Match',
          rationale: 'With Karnataka’s 226+ engineering colleges and Bengaluru’s status as Asia’s top tech hub, a 4-year B.E. offers the highest career velocity, campus hiring, and global MS recognition.',
          recommendedStreams: ['Computer Science & Engineering', 'AI & Machine Learning', 'Data Science', 'Electronics & Communication', 'Robotics & Automation'],
          nextSteps: ['Prepare rigorously for KCET and COMEDK UGET', 'Review 2024–2025 college cutoffs on Student Connect', 'Target top North Bengaluru & central corridor colleges like RVCE, MSRIT (NIRF 75), BMSIT, NMIT, Atria, and Sir MVIT'],
          href: '/career-pathways#engineering-btech',
        };
      } else if (primaryPassion === 'medical') {
        return {
          title: 'NEET-UG Medical & Allied Healthcare Degrees',
          matchScore: '96% Match',
          rationale: 'High clinical impact and respected lifelong professions across MBBS, BDS, B.Pharm, B.Sc Nursing, or Veterinary Sciences.',
          recommendedStreams: ['MBBS (Bachelor of Medicine & Surgery)', 'B.Pharm & Pharm.D', 'B.Sc Allied Health / Nursing', 'B.Sc Agriculture via KEA Farm Quota'],
          nextSteps: ['Sit for NEET-UG with focused mock examinations', 'Attend KEA State Single Window Counseling', 'Consider B.Sc Agriculture at GKVK Bangalore via the special farm test if eligible'],
          href: '/career-pathways#medicine-mbbs-allied',
        };
      } else if (primaryPassion === 'finance') {
        return {
          title: 'Chartered Accountancy (CA) / 5-Year Law (CLAT) / B.Com Honours',
          matchScore: '95% Match',
          rationale: 'Combines statutory audit authority with top corporate consulting and investment banking avenues.',
          recommendedStreams: ['CA Foundation & Intermediate (ICAI)', '5-Year BBA LLB at NLSIU Bangalore', 'B.Com (Honours in International Finance & ACCA)'],
          nextSteps: ['Register for CA Foundation or sit for CLAT', 'Apply to St. Joseph’s College of Commerce, Christ University, or Mount Carmel'],
          href: '/career-pathways#commerce-ca-law',
        };
      } else {
        return {
          title: 'BCA / B.Sc Computer Science / B.Des Design',
          matchScore: '93% Match',
          rationale: 'A 3 to 4-year NEP professional degree that emphasizes software programming, UI/UX design, or data analytics without the 4-year engineering physics requirement.',
          recommendedStreams: ['BCA (Bachelor of Computer Applications)', 'B.Sc Data Science & AI', 'B.Des in UI/UX & Interaction Design'],
          nextSteps: ['Apply to top autonomous institutions in Bengaluru', 'Build an early portfolio on GitHub and Figma', 'Consider MCA via Karnataka PGCET for direct parity with B.E. in software placements'],
          href: '/career-pathways#bca-bsc-tech',
        };
      }
    } else {
      // Current stage is Diploma
      if (timeHorizon === 'short' || learningStyle === 'hands-on') {
        return {
          title: 'Government Junior Engineer (JE) & Corporate Core Tech Placement',
          matchScore: '97% Match',
          rationale: 'Your 3-year diploma provides immediate statutory eligibility for Junior Engineer posts in Karnataka PWD, KPTCL, BESCOM, BMRCL Metro, and Indian Railways, or direct recruitment by Bosch, L&T, and Toyota.',
          recommendedStreams: ['PWD / KPTCL / BESCOM Junior Engineer Recruitment', 'Indian Railways RRB JE / SSC JE', 'Diploma Engineer Trainee (DET) in private automotive & aerospace giants'],
          nextSteps: ['Review KPSC and KPTCL Junior Engineer syllabus and previous question papers', 'Register with your polytechnic’s Placement Cell for campus interviews', 'Earn additional CAD/CAM or PLC certifications from GTTC / NTTF'],
          href: '/career-pathways#govt-psu-junior-engineer',
        };
      } else {
        return {
          title: 'DCET Lateral Entry to 2nd Year B.E. / B.Tech (Direct 3rd Semester)',
          matchScore: '99% Match',
          rationale: 'You earn a full Bachelor of Engineering degree in just 3 years by skipping the 1st year! 10% supernumerary seats in premier institutions like RVCE, MSRIT (NIRF 75), BMSCE, BMSIT, and NMIT are exclusively reserved for you.',
          recommendedStreams: ['B.E. Computer Science & Engineering', 'B.E. AI & Machine Learning', 'B.E. Electronics & Communication', 'B.E. Mechanical / Aerospace Engineering'],
          nextSteps: ['Prepare for the DCET 140-mark single paper (Applied Maths, Applied Science & Core Branch)', 'Check the DCET branch eligibility matrix for permitted B.E. transitions', 'Target top Bangalore colleges with strong placement track records'],
          href: '/career-pathways#dcet-lateral-entry',
        };
      }
    }
  }, [quizSubmitted, quizAnswers]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-6 sm:py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 1. HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-950 text-white p-6 sm:p-10 shadow-2xl border border-indigo-700/30">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-300">
              <Compass className="w-4 h-4 text-cyan-300 animate-spin-slow" />
              <span>Karnataka Higher Education & Career Pathways Navigator</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              After 10th, 12th or Diploma: <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-emerald-300 bg-clip-text text-transparent">
                What Next?
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Confused about which branch or degree to pick? Explore structured academic pathways, entrance exam calendars (KCET, DCET, NEET, COMEDK, CLAT), 
              the DCET polytechnic-to-B.E. branch matrix, salary outcomes, and get personalized recommendations through our interactive decision wizard.
            </p>

            {/* Quick Stats Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 font-medium">
                <GraduationCap className="w-4 h-4 text-cyan-300" />
                <span>226+ Verified Engineering Colleges</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 font-medium">
                <Award className="w-4 h-4 text-emerald-300" />
                <span>10% DCET Supernumerary Lateral Seats</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 font-medium">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>100% Free Karnataka Student Guide</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. PRIMARY NAVIGATION TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 scrollbar-none">
          {[
            { id: 'after-10th', label: 'After 10th (SSLC)', count: AFTER_10TH_PATHWAYS.length, icon: BookOpen, badge: 'PUC / Diploma / ITI' },
            { id: 'after-12th', label: 'After 12th (PUC / +2)', count: AFTER_12TH_PATHWAYS.length, icon: GraduationCap, badge: 'B.E. / MBBS / CA' },
            { id: 'after-diploma', label: 'After Diploma (Polytechnic)', count: AFTER_DIPLOMA_PATHWAYS.length, icon: Award, badge: 'DCET B.E. / Govt JE', highlight: true },
            { id: 'dcet-matrix', label: 'DCET Branch Matrix', count: DCET_BRANCH_MAPPINGS.length, icon: Layers, badge: '10% Quota' },
            { id: 'quiz', label: 'Find My Next Step (Quiz)', icon: Sparkles, badge: 'AI Suggester', pulse: true },
            { id: 'scholarships', label: 'Karnataka Scholarships', icon: DollarSign, badge: 'SSP & Arivu' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedCategory('ALL');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                    : tab.highlight
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-extrabold ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
                {tab.pulse && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. CONDITIONAL VIEWS */}

        {/* VIEW A: AFTER 10TH / AFTER 12TH / AFTER DIPLOMA PATHWAYS */}
        {(activeTab === 'after-10th' || activeTab === 'after-12th' || activeTab === 'after-diploma') && (
          <div className="space-y-6">

            {/* Filter and Search Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
                  Category:
                </span>
                {categoryFilters.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter streams, exams, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Stage Intro Banner */}
            {activeTab === 'after-10th' && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border border-blue-200 dark:border-blue-900/40 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block font-bold text-sm mb-0.5">
                    Strategic Insight for 10th Standard Students:
                  </strong>
                  If your ultimate goal is Engineering, a <strong>3-Year Polytechnic Diploma</strong> lets you enter directly into the 2nd year of B.E./B.Tech through <strong>DCET</strong>, skipping the 1st year and saving tuition costs while avoiding intensive PUC board + CET double coaching pressure. If your goal is Medicine, Pure Science, or CA, <strong>PUC</strong> is the primary required route.
                </div>
              </div>
            )}

            {activeTab === 'after-diploma' && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-300 dark:border-emerald-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white block font-bold text-sm mb-0.5">
                    Polytechnic Diploma Graduates: Your 10% Reserved Seat Advantage!
                  </strong>
                  Under Karnataka government policy, <strong>10% supernumerary seats</strong> in every B.E./B.Tech branch across all 226+ engineering colleges are exclusively reserved for Diploma holders via <strong>DCET</strong>. You enter straight into 3rd Semester (2nd Year) and graduate as a full Bachelor of Engineering in just 3 years!
                </div>
              </div>
            )}

            {/* Pathway Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {displayedPathways.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`rounded-3xl bg-white dark:bg-slate-900 border transition-all hover:shadow-xl flex flex-col justify-between overflow-hidden group ${
                      item.featured
                        ? 'border-blue-400/80 dark:border-blue-600/70 shadow-md ring-1 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {/* Header */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-2xl ${
                            item.featured 
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                              : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                          }`}>
                            <ItemIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                {item.category}
                              </span>
                              {item.featured && (
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                                  <Flame className="w-3 h-3 text-amber-600" /> Top Choice
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Badges: Duration & Difficulty */}
                        <div className="flex flex-col items-end gap-1 shrink-0 text-right">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {item.duration}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                            item.difficulty === 'Highly Competitive'
                              ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                              : item.difficulty === 'Demanding'
                              ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                              : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Overview */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.overview}
                      </p>

                      {/* Popular Branches / Specializations */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Key Branches & Combinations:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {item.popularBranches.slice(0, 4).map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Entrance Exams */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Key Admission & Entrance Exams:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.entranceExams.map((exam, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                            >
                              <strong>{exam.name}</strong> <span className="text-[10px] text-slate-500">({exam.conductingBody})</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Top Karnataka Institutions */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Top Institutions in Karnataka:
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                          {item.topCollegesKarnataka.join(' • ')}
                        </p>
                      </div>

                      {/* Salary & Career Outcomes */}
                      <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Typical Starting Package:</span>
                          <span className="font-extrabold text-blue-700 dark:text-blue-300 text-sm">
                            {item.avgStartingSalary}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">Higher Education Next:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs truncate block">
                            {item.futureDegrees[0] || 'Professional Specialization'}
                          </span>
                        </div>
                      </div>

                      {/* Pros & Cons Preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                            Key Advantage:
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                            {item.pros[0]}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                            Consideration:
                          </span>
                          <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                            {item.cons[0]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Action */}
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500 font-medium">
                        Eligibility: {item.eligibility.slice(0, 50)}...
                      </span>
                      {activeTab === 'after-diploma' && item.id === 'dcet-lateral-entry' ? (
                        <button
                          onClick={() => setActiveTab('dcet-matrix')}
                          className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-1 shadow-sm"
                        >
                          <span>View Branch Matrix</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link
                          href="/colleges"
                          className="px-3.5 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 font-bold transition-all flex items-center gap-1"
                        >
                          <span>Explore Colleges</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW B: DCET LATERAL ENTRY BRANCH ELIGIBILITY MATRIX */}
        {activeTab === 'dcet-matrix' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-500/25">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    DCET Karnataka: Polytechnic to B.E./B.Tech Branch Mapping
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Official Directorate of Technical Education (DTE) and KEA Lateral Entry Branch Eligibility Guide
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>How DCET Lateral Entry Works in Karnataka:</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Entry Point:</strong> You enter directly into the <strong>3rd Semester (2nd Year)</strong> of Engineering, saving 1 full year.</li>
                  <li><strong>Reserved Quota:</strong> 10% Supernumerary Seats over and above the regular sanctioned intake in all VTU and Autonomous institutions (e.g., if a college has 180 seats in CSE, 18 extra seats are exclusively reserved for DCET candidates).</li>
                  <li><strong>Exam Pattern:</strong> Single composite paper of 140 Marks (3 Hours): Applied Mathematics (20 Marks), Applied Science (20 Marks), and Core Engineering Discipline (100 Marks).</li>
                  <li><strong>Eligibility:</strong> Minimum 45% aggregate in 5th and 6th semester diploma examinations (40% for SC/ST/OBC).</li>
                </ul>
              </div>

              {/* Matrix Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="px-4 py-3.5">Your 3-Year Diploma Branch</th>
                      <th className="px-4 py-3.5">Eligible B.E. / B.Tech Branches (Direct 2nd Year)</th>
                      <th className="px-4 py-3.5">Top Karnataka Destination Colleges</th>
                      <th className="px-4 py-3.5">Admission Guidance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                    {DCET_BRANCH_MAPPINGS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-4 py-4 font-bold text-slate-900 dark:text-white align-top whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>{row.diplomaBranch}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-slate-700 dark:text-slate-300 align-top">
                          <div className="flex flex-wrap gap-1.5">
                            {row.eligibleBeBranches.map((b, bIdx) => (
                              <span
                                key={bIdx}
                                className="px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 text-[11px] font-semibold"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-400 font-medium align-top whitespace-nowrap">
                          {row.keyColleges.join(', ')}
                        </td>
                        <td className="px-4 py-4 text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed align-top">
                          {row.quotaNote}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">
                  Ready to check cutoffs and engineering college profiles across Karnataka?
                </span>
                <Link
                  href="/colleges"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Browse 226+ Karnataka Engineering Colleges</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* VIEW C: INTERACTIVE "FIND MY NEXT STEP" DECISION WIZARD */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="text-center space-y-2">
                <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Find My Ideal Career Pathway
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                  Answer 4 quick questions about your current stage, passions, and goals. Our smart algorithm matches you with the ideal degrees and entrance exams.
                </p>
              </div>

              {/* Question 1: Current Stage */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  1. What is your current educational status?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: '10th', label: 'Completed 10th / SSLC', desc: 'Looking for PUC, Diploma, or ITI' },
                    { id: '12th', label: 'Completed 12th / PUC', desc: 'Looking for B.E., MBBS, CA, Law, BCA' },
                    { id: 'diploma', label: 'Completed 3-Yr Diploma', desc: 'Looking for DCET B.E. or JE Jobs' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizAnswers({ ...quizAnswers, currentStage: opt.id })}
                      className={`p-3.5 rounded-2xl text-left border transition-all text-xs ${
                        quizAnswers.currentStage === opt.id
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="font-bold text-slate-900 dark:text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Primary Passion */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  2. What are you most naturally drawn to?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'tech', label: 'Software, Coding & Artificial Intelligence', icon: Cpu },
                    { id: 'medical', label: 'Medicine, Biology, Healthcare & Pharmacy', icon: Stethoscope },
                    { id: 'machines', label: 'Machines, Robotics, Electronics & Building', icon: Award },
                    { id: 'finance', label: 'Business, Finance, Investing & Chartered Accountancy', icon: TrendingUp },
                    { id: 'creative', label: 'Design, UI/UX, Civil Services (IAS/KAS) & Law', icon: Palette },
                  ].map((opt) => {
                    const OptIcon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setQuizAnswers({ ...quizAnswers, primaryPassion: opt.id })}
                        className={`p-3 rounded-2xl text-left border transition-all text-xs flex items-center gap-3 ${
                          quizAnswers.primaryPassion === opt.id
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500/20'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <OptIcon className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 3: Time Horizon before Earning */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  3. What is your target timeline before starting to earn?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'short', label: 'Fast-Track (1–3 Years)', desc: 'Quick financial independence via Diploma, ITI or JE Job' },
                    { id: 'standard', label: 'Standard Degree (3–4 Yrs)', desc: 'Full Bachelor Degree (B.E., B.Com, BCA) with high corporate ceiling' },
                    { id: 'long', label: 'Specialized (5+ Years)', desc: 'Long-term high status (MBBS, Integrated Law, CA Final)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizAnswers({ ...quizAnswers, timeHorizon: opt.id })}
                      className={`p-3 rounded-2xl text-left border transition-all text-xs ${
                        quizAnswers.timeHorizon === opt.id
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="font-bold text-slate-900 dark:text-white block">{opt.label}</span>
                      <span className="text-[11px] text-slate-500 block mt-0.5">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 4: Learning Style */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  4. Which learning environment suits you better?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'theory', label: 'Classroom Theory, Competitive Exams & Conceptual Mastery' },
                    { id: 'hands-on', label: 'Hands-on Workshops, Labs, Machines & Real-world Projects' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizAnswers({ ...quizAnswers, learningStyle: opt.id })}
                      className={`p-3 rounded-2xl text-left border transition-all text-xs ${
                        quizAnswers.learningStyle === opt.id
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 ring-2 ring-blue-500/20'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <span className="font-bold text-slate-900 dark:text-white">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  disabled={!quizAnswers.currentStage || !quizAnswers.primaryPassion || !quizAnswers.timeHorizon || !quizAnswers.learningStyle}
                  onClick={() => setQuizSubmitted(true)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate My Personalized Pathway Recommendation</span>
                </button>
              </div>

              {/* Quiz Results Card */}
              {quizSubmitted && quizRecommendation && (
                <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 text-white border border-blue-500/40 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Top Recommended Pathway
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-extrabold text-xs">
                      {quizRecommendation.matchScore}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {quizRecommendation.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {quizRecommendation.rationale}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                      Recommended Branches / Courses:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {quizRecommendation.recommendedStreams.map((s, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                      Immediate Action Steps:
                    </span>
                    <div className="space-y-1 text-xs text-slate-300">
                      {quizRecommendation.nextSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-white/15">
                    <button
                      onClick={() => setQuizSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white transition-colors underline"
                    >
                      Reset Answers
                    </button>
                    <Link
                      href="/colleges"
                      className="px-4 py-2 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-all shadow-md flex items-center gap-1"
                    >
                      <span>Explore Karnataka Colleges</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW D: KARNATAKA SCHOLARSHIPS & FINANCIAL AID */}
        {activeTab === 'scholarships' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/25">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    Karnataka Student Scholarships & Financial Aid Guide
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Comprehensive portal guide for Post-Matric, Vidyasiri, Arivu Education Loan, and AICTE Pragati schemes
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'State Scholarship Portal (SSP Karnataka)',
                    portal: 'ssp.postmatric.karnataka.gov.in',
                    target: 'SC / ST / OBC / EWS / Minority Undergraduates & Diploma Students',
                    benefit: '100% Tuition Fee Reimbursement + Maintenance Allowance directly to bank account via DBT',
                    eligibility: 'Karnataka domicile, family income below ₹2.5 LPA (SC/ST) or ₹1.0 LPA (OBC Cat-1/2A/2B/3A/3B).',
                    steps: [
                      'Obtain SATS ID / Student ID from college',
                      'Link Aadhaar with National Payments Corporation (NPCI) active bank account',
                      'Submit online e-Attestation of caste/income certificate and college fee receipt',
                    ],
                  },
                  {
                    title: 'Vidyasiri (Food & Accommodation Scheme)',
                    portal: 'Backward Classes Welfare Department (BCWD)',
                    target: 'Students residing in private accommodation / paying guest without govt hostel allotment',
                    benefit: 'Monthly stipend of ₹1,500 for 10 months (₹15,000 per academic year)',
                    eligibility: 'Must be staying more than 5 km away from native town in recognized private PG/room.',
                    steps: [
                      'Apply during the annual BCWD notification window on SSP',
                      'Submit rental agreement or PG letter verified by college principal',
                    ],
                  },
                  {
                    title: 'Arivu Education Loan Scheme (KMDC / BCM)',
                    portal: 'kmdc.karnataka.gov.in (Minorities) & Devaraj Urs Corp (OBC)',
                    target: 'Students admitted through KEA (CET / DCET / NEET) for professional technical degrees',
                    benefit: 'Subsidized loan up to ₹1,00,000/year at nominal 2% simple interest rate',
                    eligibility: 'Admitted through KEA merit quota; income under ₹3.50 LPA for Category-1 and minorities.',
                    steps: [
                      'Apply with KEA CET Allotment Letter and college admission receipt',
                      'Loan amount is directly disbursed to the engineering college account each academic year',
                    ],
                  },
                  {
                    title: 'AICTE Pragati Scholarship for Girl Students',
                    portal: 'National Scholarship Portal (scholarships.gov.in)',
                    target: 'Female students admitted to 1st year B.E./B.Tech or 2nd year Lateral Entry via DCET',
                    benefit: '₹50,000 per year for all 4 years (or 3 years for lateral entry) towards college fees & laptop',
                    eligibility: 'Maximum 2 girls per family with family annual income less than ₹8 LPA.',
                    steps: [
                      'Register on National Scholarship Portal (NSP)',
                      'Institute nodal officer verifies admission details online',
                    ],
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                        {item.portal}
                      </span>
                    </div>

                    <div className="text-xs space-y-1">
                      <div>
                        <strong className="text-slate-700 dark:text-slate-300">Target Group: </strong>
                        <span className="text-slate-600 dark:text-slate-400">{item.target}</span>
                      </div>
                      <div>
                        <strong className="text-emerald-700 dark:text-emerald-400">Financial Aid Benefit: </strong>
                        <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.benefit}</span>
                      </div>
                      <div>
                        <strong className="text-slate-700 dark:text-slate-300">Eligibility: </strong>
                        <span className="text-slate-600 dark:text-slate-400">{item.eligibility}</span>
                      </div>
                    </div>

                    <div className="pt-1 text-[11px] text-slate-500 space-y-0.5 border-t border-slate-200 dark:border-slate-700 pt-2">
                      <span className="font-bold uppercase tracking-wider block text-[10px]">Key Application Process:</span>
                      {item.steps.map((st, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. FOOTER CROSS-LINK TO ENGINEERING COLLEGES & KCET PREDICTOR */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-700/40">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-black">
              Ready to Explore Karnataka Engineering Colleges?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 max-w-xl">
              Search all 226+ verified colleges across 31 districts, check real KEA cutoffs for GM, 2A, 2B, 3A, 3B, SC & ST, compare fees, and view upcoming college hackathons.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/colleges"
              className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-all shadow-md flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Explore 226 Colleges</span>
            </Link>
            <Link
              href="/predictor"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition-all shadow-md flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>KCET College Predictor</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
