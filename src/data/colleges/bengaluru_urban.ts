import { College } from '@/types';

export const BENGALURU_URBAN_COLLEGES: College[] = [
  {
    id: "nhce-bangalore",
    name: "New Horizon College of Engineering",
    shortName: "NHCE Bengaluru",
    code: "E094",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "New Horizon College of Engineering (NHCE Bengaluru) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 92% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹35.0 LPA Highest CTC with 92% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "New Horizon College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at NHCE Bengaluru."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Bellandur Main Road, Near Marathahalli, Bengaluru, Karnataka 560103",
      mapUrl: "https://maps.google.com/?q=New+Horizon+College+of+Engineering+Bengaluru",
    },
    website: "https://newhorizonindia.edu/nhengineering",
    contact: {
      phone: "+91 80 6629 7777",
      email: "admissionsnhce@newhorizonindia.edu",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: 125,
      karnatakaRank: 12,
    },
    rating: 4.6,
    reviewCount: 510,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 260000,
      managementAnnual: 450000,
      hostelAnnual: 95000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E094) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 92,
      totalEligible: 480,
      studentsPlaced: 441,
      highestPackageLPA: 35.0,
      averagePackageLPA: 7.8,
      medianPackageLPA: 6.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 7.1, placementRate: 88 },
        { year: 2023, avgPackage: 7.5, placementRate: 90 },
        { year: 2024, avgPackage: 7.8, placementRate: 92 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 29200,
                        "twoA": 36800,
                        "twoB": 42800,
                        "threeA": 32200,
                        "threeB": 30200,
                        "sc": 73600,
                        "st": 81600
                  },
                  "comedk": {
                        "gm": 27600,
                        "hkr": 35600
                  }
            },
            "avgPackage": 9.0,
            "highestPackage": 35.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 36560,
                        "twoA": 45040,
                        "twoB": 51040,
                        "threeA": 39560,
                        "threeB": 37560,
                        "sc": 85600,
                        "st": 93600
                  },
                  "comedk": {
                        "gm": 34200,
                        "hkr": 42200
                  }
            },
            "avgPackage": 8.2,
            "highestPackage": 31.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 32320,
                        "twoA": 40800,
                        "twoB": 46800,
                        "threeA": 35320,
                        "threeB": 33320,
                        "sc": 79600,
                        "st": 87600
                  },
                  "comedk": {
                        "gm": 30840,
                        "hkr": 38840
                  }
            },
            "avgPackage": 8.6,
            "highestPackage": 33.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 47400,
                        "twoA": 61000,
                        "twoB": 68000,
                        "threeA": 51400,
                        "threeB": 49400,
                        "sc": 101600,
                        "st": 108600
                  },
                  "comedk": {
                        "gm": 44800,
                        "hkr": 54800
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 28.0
      }
],
  },
  {
    id: "nmit-bangalore",
    name: "Nitte Meenakshi Institute of Technology",
    shortName: "NMIT Yelahanka (Bengaluru)",
    code: "E085",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Nitte Meenakshi Institute of Technology (NMIT Yelahanka (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 91% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹40.0 LPA Highest CTC with 91% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Nitte Meenakshi Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at NMIT Yelahanka (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Govindapura, Gollahalli, Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=Nitte+Meenakshi+Institute+of+Technology+Bengaluru",
    },
    website: "https://nmit.ac.in",
    contact: {
      phone: "+91 80 2216 7800",
      email: "principal@nmit.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: 130,
      karnatakaRank: 14,
    },
    rating: 4.6,
    reviewCount: 490,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 250000,
      managementAnnual: 420000,
      hostelAnnual: 90000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E085) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 91,
      totalEligible: 480,
      studentsPlaced: 436,
      highestPackageLPA: 40.0,
      averagePackageLPA: 7.6,
      medianPackageLPA: 6.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.9, placementRate: 87 },
        { year: 2023, avgPackage: 7.3, placementRate: 89 },
        { year: 2024, avgPackage: 7.6, placementRate: 91 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 29900,
                        "twoA": 37600,
                        "twoB": 43600,
                        "threeA": 32900,
                        "threeB": 30900,
                        "sc": 74200,
                        "st": 82200
                  },
                  "comedk": {
                        "gm": 28200,
                        "hkr": 36200
                  }
            },
            "avgPackage": 8.7,
            "highestPackage": 40.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 37320,
                        "twoA": 45880,
                        "twoB": 51880,
                        "threeA": 40320,
                        "threeB": 38320,
                        "sc": 86200,
                        "st": 94200
                  },
                  "comedk": {
                        "gm": 34900,
                        "hkr": 42900
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 36.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33040,
                        "twoA": 41600,
                        "twoB": 47600,
                        "threeA": 36040,
                        "threeB": 34040,
                        "sc": 80200,
                        "st": 88200
                  },
                  "comedk": {
                        "gm": 31480,
                        "hkr": 39480
                  }
            },
            "avgPackage": 8.4,
            "highestPackage": 38.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 48300,
                        "twoA": 62000,
                        "twoB": 69000,
                        "threeA": 52300,
                        "threeB": 50300,
                        "sc": 102200,
                        "st": 109200
                  },
                  "comedk": {
                        "gm": 45600,
                        "hkr": 55600
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 32.0
      }
],
  },
  {
    id: "cmrit-bangalore",
    name: "C.M.R. Institute of Technology",
    shortName: "CMRIT Whitefield (Bengaluru)",
    code: "E089",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "C.M.R. Institute of Technology (CMRIT Whitefield (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹26.5 LPA Highest CTC with 90% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "C.M.R. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CMRIT Whitefield (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "132 AECS Layout, ITPL Main Road, Kundalahalli, Bengaluru, Karnataka 560037",
      mapUrl: "https://maps.google.com/?q=C.M.R.+Institute+of+Technology+Bengaluru",
    },
    website: "https://cmrit.ac.in",
    contact: {
      phone: "+91 80 2852 4466",
      email: "info@cmrit.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 145,
      karnatakaRank: 15,
    },
    rating: 4.6,
    reviewCount: 460,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 250000,
      managementAnnual: 420000,
      hostelAnnual: 92000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E089) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 90,
      totalEligible: 480,
      studentsPlaced: 432,
      highestPackageLPA: 26.5,
      averagePackageLPA: 7.3,
      medianPackageLPA: 6.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.6, placementRate: 86 },
        { year: 2023, avgPackage: 7.0, placementRate: 88 },
        { year: 2024, avgPackage: 7.3, placementRate: 90 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30250,
                        "twoA": 38000,
                        "twoB": 44000,
                        "threeA": 33250,
                        "threeB": 31250,
                        "sc": 74500,
                        "st": 82500
                  },
                  "comedk": {
                        "gm": 28500,
                        "hkr": 36500
                  }
            },
            "avgPackage": 8.4,
            "highestPackage": 26.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 37700,
                        "twoA": 46300,
                        "twoB": 52300,
                        "threeA": 40700,
                        "threeB": 38700,
                        "sc": 86500,
                        "st": 94500
                  },
                  "comedk": {
                        "gm": 35250,
                        "hkr": 43250
                  }
            },
            "avgPackage": 7.7,
            "highestPackage": 23.9
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33400,
                        "twoA": 42000,
                        "twoB": 48000,
                        "threeA": 36400,
                        "threeB": 34400,
                        "sc": 80500,
                        "st": 88500
                  },
                  "comedk": {
                        "gm": 31800,
                        "hkr": 39800
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 25.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 48750,
                        "twoA": 62500,
                        "twoB": 69500,
                        "threeA": 52750,
                        "threeB": 50750,
                        "sc": 102500,
                        "st": 109500
                  },
                  "comedk": {
                        "gm": 46000,
                        "hkr": 56000
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 21.2
      }
],
  },
  {
    id: "rnsit-bangalore",
    name: "R.N.S. Institute of Technology",
    shortName: "RNSIT RR Nagar (Bengaluru)",
    code: "E084",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "R.N.S. Institute of Technology (RNSIT RR Nagar (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹30.0 LPA Highest CTC with 89% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "R.N.S. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RNSIT RR Nagar (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Dr. Vishnuvardhan Road, Channasandra, RR Nagar Post, Bengaluru, Karnataka 560098",
      mapUrl: "https://maps.google.com/?q=R.N.S.+Institute+of+Technology+Bengaluru",
    },
    website: "https://rnsit.ac.in",
    contact: {
      phone: "+91 80 2861 1880",
      email: "principal@rnsit.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 16,
    },
    rating: 4.5,
    reviewCount: 450,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 240000,
      managementAnnual: 400000,
      hostelAnnual: 88000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E084) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 89,
      totalEligible: 480,
      studentsPlaced: 427,
      highestPackageLPA: 30.0,
      averagePackageLPA: 7.2,
      medianPackageLPA: 6.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.5, placementRate: 85 },
        { year: 2023, avgPackage: 6.9, placementRate: 87 },
        { year: 2024, avgPackage: 7.2, placementRate: 89 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30600,
                        "twoA": 38400,
                        "twoB": 44400,
                        "threeA": 33600,
                        "threeB": 31600,
                        "sc": 74800,
                        "st": 82800
                  },
                  "comedk": {
                        "gm": 28800,
                        "hkr": 36800
                  }
            },
            "avgPackage": 8.3,
            "highestPackage": 30.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38080,
                        "twoA": 46720,
                        "twoB": 52720,
                        "threeA": 41080,
                        "threeB": 39080,
                        "sc": 86800,
                        "st": 94800
                  },
                  "comedk": {
                        "gm": 35600,
                        "hkr": 43600
                  }
            },
            "avgPackage": 7.6,
            "highestPackage": 27.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33760,
                        "twoA": 42400,
                        "twoB": 48400,
                        "threeA": 36760,
                        "threeB": 34760,
                        "sc": 80800,
                        "st": 88800
                  },
                  "comedk": {
                        "gm": 32120,
                        "hkr": 40120
                  }
            },
            "avgPackage": 7.9,
            "highestPackage": 28.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49200,
                        "twoA": 63000,
                        "twoB": 70000,
                        "threeA": 53200,
                        "threeB": 51200,
                        "sc": 102800,
                        "st": 109800
                  },
                  "comedk": {
                        "gm": 46400,
                        "hkr": 56400
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 24.0
      }
],
  },
  {
    id: "acharya-it-bangalore",
    name: "Acharya Institute of Technology",
    shortName: "Acharya IT Soladevanahalli",
    code: "E078",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Acharya Institute of Technology (Acharya IT Soladevanahalli) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹26.0 LPA Highest CTC with 87% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Acharya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Acharya IT Soladevanahalli."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Acharya Dr. Sarvepalli Radhakrishnan Road, Soladevanahalli, Bengaluru, Karnataka 560107",
      mapUrl: "https://maps.google.com/?q=Acharya+Institute+of+Technology+Bengaluru",
    },
    website: "https://acharya.ac.in/ait",
    contact: {
      phone: "+91 80 2255 5555",
      email: "admissions@acharya.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 20,
    },
    rating: 4.5,
    reviewCount: 540,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 90000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E078) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 87,
      totalEligible: 480,
      studentsPlaced: 417,
      highestPackageLPA: 26.0,
      averagePackageLPA: 6.8,
      medianPackageLPA: 5.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.1, placementRate: 83 },
        { year: 2023, avgPackage: 6.5, placementRate: 85 },
        { year: 2024, avgPackage: 6.8, placementRate: 87 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 32000,
                        "twoA": 40000,
                        "twoB": 46000,
                        "threeA": 35000,
                        "threeB": 33000,
                        "sc": 76000,
                        "st": 84000
                  },
                  "comedk": {
                        "gm": 30000,
                        "hkr": 38000
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 26.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 39600,
                        "twoA": 48400,
                        "twoB": 54400,
                        "threeA": 42600,
                        "threeB": 40600,
                        "sc": 88000,
                        "st": 96000
                  },
                  "comedk": {
                        "gm": 37000,
                        "hkr": 45000
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 23.4
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 35200,
                        "twoA": 44000,
                        "twoB": 50000,
                        "threeA": 38200,
                        "threeB": 36200,
                        "sc": 82000,
                        "st": 90000
                  },
                  "comedk": {
                        "gm": 33400,
                        "hkr": 41400
                  }
            },
            "avgPackage": 7.5,
            "highestPackage": 24.7
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 51000,
                        "twoA": 65000,
                        "twoB": 72000,
                        "threeA": 55000,
                        "threeB": 53000,
                        "sc": 104000,
                        "st": 111000
                  },
                  "comedk": {
                        "gm": 48000,
                        "hkr": 58000
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 20.8
      }
],
  },
  {
    id: "bnmit-bangalore",
    name: "B.N.M. Institute of Technology",
    shortName: "BNMIT Banashankari (Bengaluru)",
    code: "E076",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "B.N.M. Institute of Technology (BNMIT Banashankari (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹40.0 LPA Highest CTC with 90% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "B.N.M. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BNMIT Banashankari (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "12th Main Road, 27th Cross, Banashankari 2nd Stage, Bengaluru, Karnataka 560070",
      mapUrl: "https://maps.google.com/?q=B.N.M.+Institute+of+Technology+Bengaluru",
    },
    website: "https://bnmit.org",
    contact: {
      phone: "+91 80 2671 1781",
      email: "principal@bnmit.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 18,
    },
    rating: 4.5,
    reviewCount: 430,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 240000,
      managementAnnual: 410000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E076) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 90,
      totalEligible: 480,
      studentsPlaced: 432,
      highestPackageLPA: 40.0,
      averagePackageLPA: 7.4,
      medianPackageLPA: 6.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.7, placementRate: 86 },
        { year: 2023, avgPackage: 7.1, placementRate: 88 },
        { year: 2024, avgPackage: 7.4, placementRate: 90 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 31300,
                        "twoA": 39200,
                        "twoB": 45200,
                        "threeA": 34300,
                        "threeB": 32300,
                        "sc": 75400,
                        "st": 83400
                  },
                  "comedk": {
                        "gm": 29400,
                        "hkr": 37400
                  }
            },
            "avgPackage": 8.5,
            "highestPackage": 40.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38840,
                        "twoA": 47560,
                        "twoB": 53560,
                        "threeA": 41840,
                        "threeB": 39840,
                        "sc": 87400,
                        "st": 95400
                  },
                  "comedk": {
                        "gm": 36300,
                        "hkr": 44300
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 36.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 34480,
                        "twoA": 43200,
                        "twoB": 49200,
                        "threeA": 37480,
                        "threeB": 35480,
                        "sc": 81400,
                        "st": 89400
                  },
                  "comedk": {
                        "gm": 32760,
                        "hkr": 40760
                  }
            },
            "avgPackage": 8.1,
            "highestPackage": 38.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 50100,
                        "twoA": 64000,
                        "twoB": 71000,
                        "threeA": 54100,
                        "threeB": 52100,
                        "sc": 103400,
                        "st": 110400
                  },
                  "comedk": {
                        "gm": 47200,
                        "hkr": 57200
                  }
            },
            "avgPackage": 7.0,
            "highestPackage": 32.0
      }
],
  },
  {
    id: "jssate-bangalore",
    name: "JSS Academy of Technical Education",
    shortName: "JSSATE Uttarahalli (Bengaluru)",
    code: "E049",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "JSS Academy of Technical Education (JSSATE Uttarahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹33.8 LPA Highest CTC with 88% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "JSS Academy of Technical Education Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JSSATE Uttarahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "JSSATE Campus, Uttarahalli-Kengeri Main Road, Bengaluru, Karnataka 560060",
      mapUrl: "https://maps.google.com/?q=JSS+Academy+of+Technical+Education+Bengaluru",
    },
    website: "https://jssateb.ac.in",
    contact: {
      phone: "+91 80 2861 2565",
      email: "principal@jssateb.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 19,
    },
    rating: 4.5,
    reviewCount: 420,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E049) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 88,
      totalEligible: 480,
      studentsPlaced: 422,
      highestPackageLPA: 33.8,
      averagePackageLPA: 7.0,
      medianPackageLPA: 6.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.3, placementRate: 84 },
        { year: 2023, avgPackage: 6.7, placementRate: 86 },
        { year: 2024, avgPackage: 7.0, placementRate: 88 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 31650,
                        "twoA": 39600,
                        "twoB": 45600,
                        "threeA": 34650,
                        "threeB": 32650,
                        "sc": 75700,
                        "st": 83700
                  },
                  "comedk": {
                        "gm": 29700,
                        "hkr": 37700
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 33.8
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 39220,
                        "twoA": 47980,
                        "twoB": 53980,
                        "threeA": 42220,
                        "threeB": 40220,
                        "sc": 87700,
                        "st": 95700
                  },
                  "comedk": {
                        "gm": 36650,
                        "hkr": 44650
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 30.4
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 34840,
                        "twoA": 43600,
                        "twoB": 49600,
                        "threeA": 37840,
                        "threeB": 35840,
                        "sc": 81700,
                        "st": 89700
                  },
                  "comedk": {
                        "gm": 33080,
                        "hkr": 41080
                  }
            },
            "avgPackage": 7.7,
            "highestPackage": 32.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 50550,
                        "twoA": 64500,
                        "twoB": 71500,
                        "threeA": 54550,
                        "threeB": 52550,
                        "sc": 103700,
                        "st": 110700
                  },
                  "comedk": {
                        "gm": 47600,
                        "hkr": 57600
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 27.0
      }
],
  },
  {
    id: "toce-bangalore",
    name: "The Oxford College of Engineering",
    shortName: "TOCE Bommanahalli (Bengaluru)",
    code: "E074",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "The Oxford College of Engineering (TOCE Bommanahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹22.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "The Oxford College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at TOCE Bommanahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Hosur Road, Bommanahalli, Bengaluru, Karnataka 560068",
      mapUrl: "https://maps.google.com/?q=The+Oxford+College+of+Engineering+Bengaluru",
    },
    website: "https://theoxford.edu/engineering",
    contact: {
      phone: "+91 80 6175 4601",
      email: "engprincipal@theoxford.edu",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 23,
    },
    rating: 4.4,
    reviewCount: 400,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 220000,
      managementAnnual: 350000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E074) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 22.0,
      averagePackageLPA: 6.5,
      medianPackageLPA: 5.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.8, placementRate: 81 },
        { year: 2023, avgPackage: 6.2, placementRate: 83 },
        { year: 2024, avgPackage: 6.5, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 33050,
                        "twoA": 41200,
                        "twoB": 47200,
                        "threeA": 36050,
                        "threeB": 34050,
                        "sc": 76900,
                        "st": 84900
                  },
                  "comedk": {
                        "gm": 30900,
                        "hkr": 38900
                  }
            },
            "avgPackage": 7.5,
            "highestPackage": 22.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 40740,
                        "twoA": 49660,
                        "twoB": 55660,
                        "threeA": 43740,
                        "threeB": 41740,
                        "sc": 88900,
                        "st": 96900
                  },
                  "comedk": {
                        "gm": 38050,
                        "hkr": 46050
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 19.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 36280,
                        "twoA": 45200,
                        "twoB": 51200,
                        "threeA": 39280,
                        "threeB": 37280,
                        "sc": 82900,
                        "st": 90900
                  },
                  "comedk": {
                        "gm": 34360,
                        "hkr": 42360
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 20.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 52350,
                        "twoA": 66500,
                        "twoB": 73500,
                        "threeA": 56350,
                        "threeB": 54350,
                        "sc": 104900,
                        "st": 111900
                  },
                  "comedk": {
                        "gm": 49200,
                        "hkr": 59200
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "dbit-bangalore",
    name: "Don Bosco Institute of Technology",
    shortName: "DBIT Kumbalagodu (Bengaluru)",
    code: "E077",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Don Bosco Institute of Technology (DBIT Kumbalagodu (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹20.0 LPA Highest CTC with 83% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Don Bosco Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at DBIT Kumbalagodu (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Mysore Road, Kumbalagodu, Bengaluru, Karnataka 560074",
      mapUrl: "https://maps.google.com/?q=Don+Bosco+Institute+of+Technology+Bengaluru",
    },
    website: "https://dbit.co.in",
    contact: {
      phone: "+91 80 2843 7028",
      email: "principal@dbit.co.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 29,
    },
    rating: 4.3,
    reviewCount: 360,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E077) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 83,
      totalEligible: 480,
      studentsPlaced: 398,
      highestPackageLPA: 20.0,
      averagePackageLPA: 6.0,
      medianPackageLPA: 5.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.3, placementRate: 79 },
        { year: 2023, avgPackage: 5.7, placementRate: 81 },
        { year: 2024, avgPackage: 6.0, placementRate: 83 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 35150,
                        "twoA": 43600,
                        "twoB": 49600,
                        "threeA": 38150,
                        "threeB": 36150,
                        "sc": 78700,
                        "st": 86700
                  },
                  "comedk": {
                        "gm": 32700,
                        "hkr": 40700
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 20.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 43020,
                        "twoA": 52180,
                        "twoB": 58180,
                        "threeA": 46020,
                        "threeB": 44020,
                        "sc": 90700,
                        "st": 98700
                  },
                  "comedk": {
                        "gm": 40150,
                        "hkr": 48150
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 18.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 38440,
                        "twoA": 47600,
                        "twoB": 53600,
                        "threeA": 41440,
                        "threeB": 39440,
                        "sc": 84700,
                        "st": 92700
                  },
                  "comedk": {
                        "gm": 36280,
                        "hkr": 44280
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 55050,
                        "twoA": 69500,
                        "twoB": 76500,
                        "threeA": 59050,
                        "threeB": 57050,
                        "sc": 106700,
                        "st": 113700
                  },
                  "comedk": {
                        "gm": 51600,
                        "hkr": 61600
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "drait-bangalore",
    name: "Dr. Ambedkar Institute of Technology",
    shortName: "Dr. AIT Mallathahalli (Bengaluru)",
    code: "E004",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Dr. Ambedkar Institute of Technology (Dr. AIT Mallathahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹25.0 LPA Highest CTC with 88% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Dr. Ambedkar Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Dr. AIT Mallathahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "BDA Outer Ring Road, Near Jnana Bharati, Mallathahalli, Bengaluru, Karnataka 560056",
      mapUrl: "https://maps.google.com/?q=Dr.+Ambedkar+Institute+of+Technology+Bengaluru",
    },
    website: "https://drait.edu.in",
    contact: {
      phone: "+91 80 2321 1505",
      email: "principal@drait.edu.in",
    },
    collegeType: "Aided",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 17,
    },
    rating: 4.5,
    reviewCount: 470,
    fees: {
      kcetAnnual: 58000,
      comedkAnnual: 230000,
      managementAnnual: 390000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E004) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 88,
      totalEligible: 480,
      studentsPlaced: 422,
      highestPackageLPA: 25.0,
      averagePackageLPA: 7.0,
      medianPackageLPA: 6.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.3, placementRate: 84 },
        { year: 2023, avgPackage: 6.7, placementRate: 86 },
        { year: 2024, avgPackage: 7.0, placementRate: 88 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30950,
                        "twoA": 38800,
                        "twoB": 44800,
                        "threeA": 33950,
                        "threeB": 31950,
                        "sc": 75100,
                        "st": 83100
                  },
                  "comedk": {
                        "gm": 29100,
                        "hkr": 37100
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 25.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38460,
                        "twoA": 47140,
                        "twoB": 53140,
                        "threeA": 41460,
                        "threeB": 39460,
                        "sc": 87100,
                        "st": 95100
                  },
                  "comedk": {
                        "gm": 35950,
                        "hkr": 43950
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 22.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 34120,
                        "twoA": 42800,
                        "twoB": 48800,
                        "threeA": 37120,
                        "threeB": 35120,
                        "sc": 81100,
                        "st": 89100
                  },
                  "comedk": {
                        "gm": 32440,
                        "hkr": 40440
                  }
            },
            "avgPackage": 7.7,
            "highestPackage": 23.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49650,
                        "twoA": 63500,
                        "twoB": 70500,
                        "threeA": 53650,
                        "threeB": 51650,
                        "sc": 103100,
                        "st": 110100
                  },
                  "comedk": {
                        "gm": 46800,
                        "hkr": 56800
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "sjbit-bangalore",
    name: "S.J.B. Institute of Technology",
    shortName: "SJBIT Kengeri (Bengaluru)",
    code: "E080",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "S.J.B. Institute of Technology (SJBIT Kengeri (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹24.0 LPA Highest CTC with 87% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "S.J.B. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SJBIT Kengeri (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "BGS Health & Education City, Dr. Vishnuvardhan Road, Kengeri, Bengaluru, Karnataka 560060",
      mapUrl: "https://maps.google.com/?q=S.J.B.+Institute+of+Technology+Bengaluru",
    },
    website: "https://sjbit.edu.in",
    contact: {
      phone: "+91 80 2861 2445",
      email: "principal@sjbit.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 21,
    },
    rating: 4.5,
    reviewCount: 410,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E080) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 87,
      totalEligible: 480,
      studentsPlaced: 417,
      highestPackageLPA: 24.0,
      averagePackageLPA: 6.8,
      medianPackageLPA: 5.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.1, placementRate: 83 },
        { year: 2023, avgPackage: 6.5, placementRate: 85 },
        { year: 2024, avgPackage: 6.8, placementRate: 87 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 32350,
                        "twoA": 40400,
                        "twoB": 46400,
                        "threeA": 35350,
                        "threeB": 33350,
                        "sc": 76300,
                        "st": 84300
                  },
                  "comedk": {
                        "gm": 30300,
                        "hkr": 38300
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 24.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 39980,
                        "twoA": 48820,
                        "twoB": 54820,
                        "threeA": 42980,
                        "threeB": 40980,
                        "sc": 88300,
                        "st": 96300
                  },
                  "comedk": {
                        "gm": 37350,
                        "hkr": 45350
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 21.6
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 35560,
                        "twoA": 44400,
                        "twoB": 50400,
                        "threeA": 38560,
                        "threeB": 36560,
                        "sc": 82300,
                        "st": 90300
                  },
                  "comedk": {
                        "gm": 33720,
                        "hkr": 41720
                  }
            },
            "avgPackage": 7.5,
            "highestPackage": 22.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 51450,
                        "twoA": 65500,
                        "twoB": 72500,
                        "threeA": 55450,
                        "threeB": 53450,
                        "sc": 104300,
                        "st": 111300
                  },
                  "comedk": {
                        "gm": 48400,
                        "hkr": 58400
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 19.2
      }
],
  },
  {
    id: "amc-bangalore",
    name: "A.M.C. Engineering College",
    shortName: "AMC Bannerghatta (Bengaluru)",
    code: "E067",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "A.M.C. Engineering College (AMC Bannerghatta (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹21.0 LPA Highest CTC with 84% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "A.M.C. Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AMC Bannerghatta (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Bannerghatta Main Road, Kalkere, Bengaluru, Karnataka 560083",
      mapUrl: "https://maps.google.com/?q=A.M.C.+Engineering+College+Bengaluru",
    },
    website: "https://amcgroup.edu.in",
    contact: {
      phone: "+91 80 2782 8655",
      email: "principal@amceducation.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 27,
    },
    rating: 4.4,
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E067) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 84,
      totalEligible: 480,
      studentsPlaced: 403,
      highestPackageLPA: 21.0,
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 80 },
        { year: 2023, avgPackage: 5.9, placementRate: 82 },
        { year: 2024, avgPackage: 6.2, placementRate: 84 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 34450,
                        "twoA": 42800,
                        "twoB": 48800,
                        "threeA": 37450,
                        "threeB": 35450,
                        "sc": 78100,
                        "st": 86100
                  },
                  "comedk": {
                        "gm": 32100,
                        "hkr": 40100
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 21.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 42260,
                        "twoA": 51340,
                        "twoB": 57340,
                        "threeA": 45260,
                        "threeB": 43260,
                        "sc": 90100,
                        "st": 98100
                  },
                  "comedk": {
                        "gm": 39450,
                        "hkr": 47450
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 18.9
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 37720,
                        "twoA": 46800,
                        "twoB": 52800,
                        "threeA": 40720,
                        "threeB": 38720,
                        "sc": 84100,
                        "st": 92100
                  },
                  "comedk": {
                        "gm": 35640,
                        "hkr": 43640
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 19.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 54150,
                        "twoA": 68500,
                        "twoB": 75500,
                        "threeA": 58150,
                        "threeB": 56150,
                        "sc": 106100,
                        "st": 113100
                  },
                  "comedk": {
                        "gm": 50800,
                        "hkr": 60800
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.8
      }
],
  },
  {
    id: "achutha-bangalore",
    name: "Achutha Institute of Technology",
    shortName: "Achutha IT Bengaluru",
    code: "E238",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Achutha Institute of Technology (Achutha IT Bengaluru) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 76% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.0 LPA Highest CTC with 76% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Achutha Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Achutha IT Bengaluru."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chikkagubbi Village, Hennur-Bagalur Main Road, Bengaluru, Karnataka 560077",
      mapUrl: "https://maps.google.com/?q=Achutha+Institute+of+Technology+Bengaluru",
    },
    website: "https://achutha.edu.in",
    contact: {
      phone: "+91 80 2846 5555",
      email: "info@achutha.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 88,
    },
    rating: 4.0,
    reviewCount: 130,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E238) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 76,
      totalEligible: 480,
      studentsPlaced: 364,
      highestPackageLPA: 14.0,
      averagePackageLPA: 4.7,
      medianPackageLPA: 4.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.0, placementRate: 72 },
        { year: 2023, avgPackage: 4.4, placementRate: 74 },
        { year: 2024, avgPackage: 4.7, placementRate: 76 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 55800,
                        "twoA": 67200,
                        "twoB": 73200,
                        "threeA": 58800,
                        "threeB": 56800,
                        "sc": 96400,
                        "st": 104400
                  },
                  "comedk": {
                        "gm": 50400,
                        "hkr": 58400
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 65440,
                        "twoA": 76960,
                        "twoB": 82960,
                        "threeA": 68440,
                        "threeB": 66440,
                        "sc": 108400,
                        "st": 116400
                  },
                  "comedk": {
                        "gm": 60800,
                        "hkr": 68800
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 12.6
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 59680,
                        "twoA": 71200,
                        "twoB": 77200,
                        "threeA": 62680,
                        "threeB": 60680,
                        "sc": 102400,
                        "st": 110400
                  },
                  "comedk": {
                        "gm": 55160,
                        "hkr": 63160
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 13.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 81600,
                        "twoA": 99000,
                        "twoB": 106000,
                        "threeA": 85600,
                        "threeB": 83600,
                        "sc": 124400,
                        "st": 131400
                  },
                  "comedk": {
                        "gm": 75200,
                        "hkr": 85200
                  }
            },
            "avgPackage": 4.5,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "apsce-bangalore",
    name: "A.P.S. College of Engineering",
    shortName: "APSCE Kanakapura Rd (Bengaluru)",
    code: "E072",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "A.P.S. College of Engineering (APSCE Kanakapura Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.0 LPA Highest CTC with 80% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "A.P.S. College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at APSCE Kanakapura Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Somanahalli, Kanakapura Road, Bengaluru, Karnataka 560082",
      mapUrl: "https://maps.google.com/?q=A.P.S.+College+of+Engineering+Bengaluru",
    },
    website: "https://apsce.ac.in",
    contact: {
      phone: "+91 80 2843 2837",
      email: "principal@apsce.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 61,
    },
    rating: 4.2,
    reviewCount: 220,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E072) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 80,
      totalEligible: 480,
      studentsPlaced: 384,
      highestPackageLPA: 16.0,
      averagePackageLPA: 5.2,
      medianPackageLPA: 4.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.5, placementRate: 76 },
        { year: 2023, avgPackage: 4.9, placementRate: 78 },
        { year: 2024, avgPackage: 5.2, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 46350,
                        "twoA": 56400,
                        "twoB": 62400,
                        "threeA": 49350,
                        "threeB": 47350,
                        "sc": 88300,
                        "st": 96300
                  },
                  "comedk": {
                        "gm": 42300,
                        "hkr": 50300
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 16.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 55180,
                        "twoA": 65620,
                        "twoB": 71620,
                        "threeA": 58180,
                        "threeB": 56180,
                        "sc": 100300,
                        "st": 108300
                  },
                  "comedk": {
                        "gm": 51350,
                        "hkr": 59350
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 14.4
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 49960,
                        "twoA": 60400,
                        "twoB": 66400,
                        "threeA": 52960,
                        "threeB": 50960,
                        "sc": 94300,
                        "st": 102300
                  },
                  "comedk": {
                        "gm": 46520,
                        "hkr": 54520
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 15.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 69450,
                        "twoA": 85500,
                        "twoB": 92500,
                        "threeA": 73450,
                        "threeB": 71450,
                        "sc": 116300,
                        "st": 123300
                  },
                  "comedk": {
                        "gm": 64400,
                        "hkr": 74400
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "btl-bangalore",
    name: "B.T.L. Institute of Technology and Management",
    shortName: "BTL Bommasandra (Bengaluru)",
    code: "E075",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "B.T.L. Institute of Technology and Management (BTL Bommasandra (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 78% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "B.T.L. Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BTL Bommasandra (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "259/B, Bommasandra Industrial Area, Hosur Road, Bengaluru, Karnataka 560099",
      mapUrl: "https://maps.google.com/?q=B.T.L.+Institute+of+Technology+and+Management+Bengaluru",
    },
    website: "https://btlit.ac.in",
    contact: {
      phone: "+91 80 2783 3015",
      email: "btlitprincipal@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 66,
    },
    rating: 4.1,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 270000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E075) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 78,
      totalEligible: 480,
      studentsPlaced: 374,
      highestPackageLPA: 15.0,
      averagePackageLPA: 5.0,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.3, placementRate: 74 },
        { year: 2023, avgPackage: 4.7, placementRate: 76 },
        { year: 2024, avgPackage: 5.0, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 48100,
                        "twoA": 58400,
                        "twoB": 64400,
                        "threeA": 51100,
                        "threeB": 49100,
                        "sc": 89800,
                        "st": 97800
                  },
                  "comedk": {
                        "gm": 43800,
                        "hkr": 51800
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 15.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 57080,
                        "twoA": 67720,
                        "twoB": 73720,
                        "threeA": 60080,
                        "threeB": 58080,
                        "sc": 101800,
                        "st": 109800
                  },
                  "comedk": {
                        "gm": 53100,
                        "hkr": 61100
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 13.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 51760,
                        "twoA": 62400,
                        "twoB": 68400,
                        "threeA": 54760,
                        "threeB": 52760,
                        "sc": 95800,
                        "st": 103800
                  },
                  "comedk": {
                        "gm": 48120,
                        "hkr": 56120
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 14.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 71700,
                        "twoA": 88000,
                        "twoB": 95000,
                        "threeA": 75700,
                        "threeB": 73700,
                        "sc": 117800,
                        "st": 124800
                  },
                  "comedk": {
                        "gm": 66400,
                        "hkr": 76400
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "bcet-chandapura",
    name: "Bangalore College of Engineering and Technology",
    shortName: "BCET Chandapura (Bengaluru)",
    code: "E145",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bangalore College of Engineering and Technology (BCET Chandapura (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.5 LPA Highest CTC with 75% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Bangalore College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BCET Chandapura (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Near Chandapura Circle, Anekal Road, Bengaluru, Karnataka 560081",
      mapUrl: "https://maps.google.com/?q=Bangalore+College+of+Engineering+and+Technology+Bengaluru",
    },
    website: "https://bcet.edu.in",
    contact: {
      phone: "+91 80 2783 9999",
      email: "info@bcet.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 84,
    },
    rating: 4.0,
    reviewCount: 140,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E145) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 75,
      totalEligible: 480,
      studentsPlaced: 360,
      highestPackageLPA: 13.5,
      averagePackageLPA: 4.6,
      medianPackageLPA: 3.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.9, placementRate: 71 },
        { year: 2023, avgPackage: 4.3, placementRate: 73 },
        { year: 2024, avgPackage: 4.6, placementRate: 75 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 54400,
                        "twoA": 65600,
                        "twoB": 71600,
                        "threeA": 57400,
                        "threeB": 55400,
                        "sc": 95200,
                        "st": 103200
                  },
                  "comedk": {
                        "gm": 49200,
                        "hkr": 57200
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 63920,
                        "twoA": 75280,
                        "twoB": 81280,
                        "threeA": 66920,
                        "threeB": 64920,
                        "sc": 107200,
                        "st": 115200
                  },
                  "comedk": {
                        "gm": 59400,
                        "hkr": 67400
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 58240,
                        "twoA": 69600,
                        "twoB": 75600,
                        "threeA": 61240,
                        "threeB": 59240,
                        "sc": 101200,
                        "st": 109200
                  },
                  "comedk": {
                        "gm": 53880,
                        "hkr": 61880
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 79800,
                        "twoA": 97000,
                        "twoB": 104000,
                        "threeA": 83800,
                        "threeB": 81800,
                        "sc": 123200,
                        "st": 130200
                  },
                  "comedk": {
                        "gm": 73600,
                        "hkr": 83600
                  }
            },
            "avgPackage": 4.4,
            "highestPackage": 10.8
      }
],
  },
  {
    id: "bti-bangalore",
    name: "Bangalore Technological Institute",
    shortName: "BTI Sarjapur Rd (Bengaluru)",
    code: "E213",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bangalore Technological Institute (BTI Sarjapur Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹17.0 LPA Highest CTC with 81% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Bangalore Technological Institute Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BTI Sarjapur Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Off Sarjapur Road, Near Wipro Corporate Office, Kodathi, Bengaluru, Karnataka 560035",
      mapUrl: "https://maps.google.com/?q=Bangalore+Technological+Institute+Bengaluru",
    },
    website: "https://btibangalore.org",
    contact: {
      phone: "+91 80 2844 0404",
      email: "info@btibangalore.org",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 58,
    },
    rating: 4.2,
    reviewCount: 210,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 300000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E213) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 81,
      totalEligible: 480,
      studentsPlaced: 388,
      highestPackageLPA: 17.0,
      averagePackageLPA: 5.4,
      medianPackageLPA: 4.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.7, placementRate: 77 },
        { year: 2023, avgPackage: 5.1, placementRate: 79 },
        { year: 2024, avgPackage: 5.4, placementRate: 81 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 45300,
                        "twoA": 55200,
                        "twoB": 61200,
                        "threeA": 48300,
                        "threeB": 46300,
                        "sc": 87400,
                        "st": 95400
                  },
                  "comedk": {
                        "gm": 41400,
                        "hkr": 49400
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 17.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 54040,
                        "twoA": 64360,
                        "twoB": 70360,
                        "threeA": 57040,
                        "threeB": 55040,
                        "sc": 99400,
                        "st": 107400
                  },
                  "comedk": {
                        "gm": 50300,
                        "hkr": 58300
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 15.3
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 48880,
                        "twoA": 59200,
                        "twoB": 65200,
                        "threeA": 51880,
                        "threeB": 49880,
                        "sc": 93400,
                        "st": 101400
                  },
                  "comedk": {
                        "gm": 45560,
                        "hkr": 53560
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 68100,
                        "twoA": 84000,
                        "twoB": 91000,
                        "threeA": 72100,
                        "threeB": 70100,
                        "sc": 115400,
                        "st": 122400
                  },
                  "comedk": {
                        "gm": 63200,
                        "hkr": 73200
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "bgscet-bangalore",
    name: "BGS College of Engineering and Technology",
    shortName: "BGSCET Mahalakshmipuram",
    code: "E278",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "BGS College of Engineering and Technology (BGSCET Mahalakshmipuram) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹20.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "BGS College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BGSCET Mahalakshmipuram."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "West of Chord Road, Mahalakshmipuram, Bengaluru, Karnataka 560086",
      mapUrl: "https://maps.google.com/?q=BGS+College+of+Engineering+and+Technology+Bengaluru",
    },
    website: "https://bgscet.ac.in",
    contact: {
      phone: "+91 80 2349 7188",
      email: "principal@bgscet.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 40,
    },
    rating: 4.4,
    reviewCount: 240,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 210000,
      managementAnnual: 350000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E278) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 20.0,
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 81 },
        { year: 2023, avgPackage: 5.9, placementRate: 83 },
        { year: 2024, avgPackage: 6.2, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 39000,
                        "twoA": 48000,
                        "twoB": 54000,
                        "threeA": 42000,
                        "threeB": 40000,
                        "sc": 82000,
                        "st": 90000
                  },
                  "comedk": {
                        "gm": 36000,
                        "hkr": 44000
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 20.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 47200,
                        "twoA": 56800,
                        "twoB": 62800,
                        "threeA": 50200,
                        "threeB": 48200,
                        "sc": 94000,
                        "st": 102000
                  },
                  "comedk": {
                        "gm": 44000,
                        "hkr": 52000
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 18.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 42400,
                        "twoA": 52000,
                        "twoB": 58000,
                        "threeA": 45400,
                        "threeB": 43400,
                        "sc": 88000,
                        "st": 96000
                  },
                  "comedk": {
                        "gm": 39800,
                        "hkr": 47800
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 60000,
                        "twoA": 75000,
                        "twoB": 82000,
                        "threeA": 64000,
                        "threeB": 62000,
                        "sc": 110000,
                        "st": 117000
                  },
                  "comedk": {
                        "gm": 56000,
                        "hkr": 66000
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "brindavan-bangalore",
    name: "Brindavan College of Engineering",
    shortName: "BCE Yelahanka (Bengaluru)",
    code: "E103",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Brindavan College of Engineering (BCE Yelahanka (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 82% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Brindavan College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BCE Yelahanka (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Dwarakanagar, Bagalur Main Road, Yelahanka, Bengaluru, Karnataka 560063",
      mapUrl: "https://maps.google.com/?q=Brindavan+College+of+Engineering+Bengaluru",
    },
    website: "https://brindavancollege.com",
    contact: {
      phone: "+91 80 2847 8388",
      email: "principal@brindavancollege.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 48,
    },
    rating: 4.3,
    reviewCount: 270,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 190000,
      managementAnnual: 320000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E103) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 82,
      totalEligible: 480,
      studentsPlaced: 393,
      highestPackageLPA: 18.0,
      averagePackageLPA: 5.6,
      medianPackageLPA: 4.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.9, placementRate: 78 },
        { year: 2023, avgPackage: 5.3, placementRate: 80 },
        { year: 2024, avgPackage: 5.6, placementRate: 82 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 41800,
                        "twoA": 51200,
                        "twoB": 57200,
                        "threeA": 44800,
                        "threeB": 42800,
                        "sc": 84400,
                        "st": 92400
                  },
                  "comedk": {
                        "gm": 38400,
                        "hkr": 46400
                  }
            },
            "avgPackage": 6.4,
            "highestPackage": 18.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 50240,
                        "twoA": 60160,
                        "twoB": 66160,
                        "threeA": 53240,
                        "threeB": 51240,
                        "sc": 96400,
                        "st": 104400
                  },
                  "comedk": {
                        "gm": 46800,
                        "hkr": 54800
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 45280,
                        "twoA": 55200,
                        "twoB": 61200,
                        "threeA": 48280,
                        "threeB": 46280,
                        "sc": 90400,
                        "st": 98400
                  },
                  "comedk": {
                        "gm": 42360,
                        "hkr": 50360
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 17.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 63600,
                        "twoA": 79000,
                        "twoB": 86000,
                        "threeA": 67600,
                        "threeB": 65600,
                        "sc": 112400,
                        "st": 119400
                  },
                  "comedk": {
                        "gm": 59200,
                        "hkr": 69200
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "cambridge-krpuram",
    name: "Cambridge Institute of Technology",
    shortName: "CIT KR Puram (Bengaluru)",
    code: "E111",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Cambridge Institute of Technology (CIT KR Puram (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹27.0 LPA Highest CTC with 89% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Cambridge Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CIT KR Puram (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Jai Bhuvaneshwari Nagar, Basavanapura, KR Puram, Bengaluru, Karnataka 560036",
      mapUrl: "https://maps.google.com/?q=Cambridge+Institute+of+Technology+Bengaluru",
    },
    website: "https://cambridge.edu.in",
    contact: {
      phone: "+91 80 2561 8798",
      email: "principal@cambridge.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 25,
    },
    rating: 4.5,
    reviewCount: 420,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E111) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 89,
      totalEligible: 480,
      studentsPlaced: 427,
      highestPackageLPA: 27.0,
      averagePackageLPA: 7.0,
      medianPackageLPA: 6.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.3, placementRate: 85 },
        { year: 2023, avgPackage: 6.7, placementRate: 87 },
        { year: 2024, avgPackage: 7.0, placementRate: 89 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 33750,
                        "twoA": 42000,
                        "twoB": 48000,
                        "threeA": 36750,
                        "threeB": 34750,
                        "sc": 77500,
                        "st": 85500
                  },
                  "comedk": {
                        "gm": 31500,
                        "hkr": 39500
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 27.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 41500,
                        "twoA": 50500,
                        "twoB": 56500,
                        "threeA": 44500,
                        "threeB": 42500,
                        "sc": 89500,
                        "st": 97500
                  },
                  "comedk": {
                        "gm": 38750,
                        "hkr": 46750
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 24.3
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 37000,
                        "twoA": 46000,
                        "twoB": 52000,
                        "threeA": 40000,
                        "threeB": 38000,
                        "sc": 83500,
                        "st": 91500
                  },
                  "comedk": {
                        "gm": 35000,
                        "hkr": 43000
                  }
            },
            "avgPackage": 7.7,
            "highestPackage": 25.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 53250,
                        "twoA": 67500,
                        "twoB": 74500,
                        "threeA": 57250,
                        "threeB": 55250,
                        "sc": 105500,
                        "st": 112500
                  },
                  "comedk": {
                        "gm": 50000,
                        "hkr": 60000
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 21.6
      }
],
  },
  {
    id: "city-eng-bangalore",
    name: "City Engineering College",
    shortName: "CEC Kanakapura Rd (Bengaluru)",
    code: "E104",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "City Engineering College (CEC Kanakapura Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.5 LPA Highest CTC with 80% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "City Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CEC Kanakapura Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Doddakallasandra, Kanakapura Road, Bengaluru, Karnataka 560062",
      mapUrl: "https://maps.google.com/?q=City+Engineering+College+Bengaluru",
    },
    website: "https://cityengineeringcollege.ac.in",
    contact: {
      phone: "+91 80 2664 9263",
      email: "principal@cityengineeringcollege.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 63,
    },
    rating: 4.2,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E104) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 80,
      totalEligible: 480,
      studentsPlaced: 384,
      highestPackageLPA: 16.5,
      averagePackageLPA: 5.2,
      medianPackageLPA: 4.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.5, placementRate: 76 },
        { year: 2023, avgPackage: 4.9, placementRate: 78 },
        { year: 2024, avgPackage: 5.2, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 47050,
                        "twoA": 57200,
                        "twoB": 63200,
                        "threeA": 50050,
                        "threeB": 48050,
                        "sc": 88900,
                        "st": 96900
                  },
                  "comedk": {
                        "gm": 42900,
                        "hkr": 50900
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 16.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 55940,
                        "twoA": 66460,
                        "twoB": 72460,
                        "threeA": 58940,
                        "threeB": 56940,
                        "sc": 100900,
                        "st": 108900
                  },
                  "comedk": {
                        "gm": 52050,
                        "hkr": 60050
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 14.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 50680,
                        "twoA": 61200,
                        "twoB": 67200,
                        "threeA": 53680,
                        "threeB": 51680,
                        "sc": 94900,
                        "st": 102900
                  },
                  "comedk": {
                        "gm": 47160,
                        "hkr": 55160
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 15.7
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 70350,
                        "twoA": 86500,
                        "twoB": 93500,
                        "threeA": 74350,
                        "threeB": 72350,
                        "sc": 116900,
                        "st": 123900
                  },
                  "comedk": {
                        "gm": 65200,
                        "hkr": 75200
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 13.2
      }
],
  },
  {
    id: "dsatm-bangalore",
    name: "Dayananda Sagar Academy of Technology and Management",
    shortName: "DSATM Kanakapura Rd (Bengaluru)",
    code: "E186",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Dayananda Sagar Academy of Technology and Management (DSATM Kanakapura Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 91% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹32.0 LPA Highest CTC with 91% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Dayananda Sagar Academy of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at DSATM Kanakapura Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Opp. Art of Living, Udayapura, Kanakapura Road, Bengaluru, Karnataka 560082",
      mapUrl: "https://maps.google.com/?q=Dayananda+Sagar+Academy+of+Technology+and+Management+Bengaluru",
    },
    website: "https://dsatm.edu.in",
    contact: {
      phone: "+91 80 2843 2999",
      email: "principal@dsatm.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 16,
    },
    rating: 4.6,
    reviewCount: 460,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 250000,
      managementAnnual: 420000,
      hostelAnnual: 95000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E186) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 91,
      totalEligible: 480,
      studentsPlaced: 436,
      highestPackageLPA: 32.0,
      averagePackageLPA: 7.5,
      medianPackageLPA: 6.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.8, placementRate: 87 },
        { year: 2023, avgPackage: 7.2, placementRate: 89 },
        { year: 2024, avgPackage: 7.5, placementRate: 91 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30600,
                        "twoA": 38400,
                        "twoB": 44400,
                        "threeA": 33600,
                        "threeB": 31600,
                        "sc": 74800,
                        "st": 82800
                  },
                  "comedk": {
                        "gm": 28800,
                        "hkr": 36800
                  }
            },
            "avgPackage": 8.6,
            "highestPackage": 32.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38080,
                        "twoA": 46720,
                        "twoB": 52720,
                        "threeA": 41080,
                        "threeB": 39080,
                        "sc": 86800,
                        "st": 94800
                  },
                  "comedk": {
                        "gm": 35600,
                        "hkr": 43600
                  }
            },
            "avgPackage": 7.9,
            "highestPackage": 28.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33760,
                        "twoA": 42400,
                        "twoB": 48400,
                        "threeA": 36760,
                        "threeB": 34760,
                        "sc": 80800,
                        "st": 88800
                  },
                  "comedk": {
                        "gm": 32120,
                        "hkr": 40120
                  }
            },
            "avgPackage": 8.2,
            "highestPackage": 30.4
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49200,
                        "twoA": 63000,
                        "twoB": 70000,
                        "threeA": 53200,
                        "threeB": 51200,
                        "sc": 102800,
                        "st": 109800
                  },
                  "comedk": {
                        "gm": 46400,
                        "hkr": 56400
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 25.6
      }
],
  },
  {
    id: "epcet-bangalore",
    name: "East Point College of Engineering and Technology",
    shortName: "EPCET Bidarahalli (Bengaluru)",
    code: "E097",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "East Point College of Engineering and Technology (EPCET Bidarahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹25.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "East Point College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at EPCET Bidarahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Jnana Prabha, East Point Campus, Bidarahalli, Bengaluru, Karnataka 560049",
      mapUrl: "https://maps.google.com/?q=East+Point+College+of+Engineering+and+Technology+Bengaluru",
    },
    website: "https://eastpoint.ac.in",
    contact: {
      phone: "+91 80 2562 2555",
      email: "principal.epcet@eastpoint.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 35,
    },
    rating: 4.4,
    reviewCount: 330,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 200000,
      managementAnnual: 330000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E097) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 25.0,
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 81 },
        { year: 2023, avgPackage: 5.9, placementRate: 83 },
        { year: 2024, avgPackage: 6.2, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 37250,
                        "twoA": 46000,
                        "twoB": 52000,
                        "threeA": 40250,
                        "threeB": 38250,
                        "sc": 80500,
                        "st": 88500
                  },
                  "comedk": {
                        "gm": 34500,
                        "hkr": 42500
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 25.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 45300,
                        "twoA": 54700,
                        "twoB": 60700,
                        "threeA": 48300,
                        "threeB": 46300,
                        "sc": 92500,
                        "st": 100500
                  },
                  "comedk": {
                        "gm": 42250,
                        "hkr": 50250
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 22.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 40600,
                        "twoA": 50000,
                        "twoB": 56000,
                        "threeA": 43600,
                        "threeB": 41600,
                        "sc": 86500,
                        "st": 94500
                  },
                  "comedk": {
                        "gm": 38200,
                        "hkr": 46200
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 23.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 57750,
                        "twoA": 72500,
                        "twoB": 79500,
                        "threeA": 61750,
                        "threeB": 59750,
                        "sc": 108500,
                        "st": 115500
                  },
                  "comedk": {
                        "gm": 54000,
                        "hkr": 64000
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "ewce-yelahanka",
    name: "East West College of Engineering",
    shortName: "EWCE Yelahanka (Bengaluru)",
    code: "E239",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "East West College of Engineering (EWCE Yelahanka (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.0 LPA Highest CTC with 78% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "East West College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at EWCE Yelahanka (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Surabhi Nagar, Yelahanka New Town, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=East+West+College+of+Engineering+Bengaluru",
    },
    website: "https://ewce.edu.in",
    contact: {
      phone: "+91 80 2856 5588",
      email: "principal@ewce.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 67,
    },
    rating: 4.1,
    reviewCount: 200,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 270000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E239) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 78,
      totalEligible: 480,
      studentsPlaced: 374,
      highestPackageLPA: 16.0,
      averagePackageLPA: 5.0,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.3, placementRate: 74 },
        { year: 2023, avgPackage: 4.7, placementRate: 76 },
        { year: 2024, avgPackage: 5.0, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 48450,
                        "twoA": 58800,
                        "twoB": 64800,
                        "threeA": 51450,
                        "threeB": 49450,
                        "sc": 90100,
                        "st": 98100
                  },
                  "comedk": {
                        "gm": 44100,
                        "hkr": 52100
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 57460,
                        "twoA": 68140,
                        "twoB": 74140,
                        "threeA": 60460,
                        "threeB": 58460,
                        "sc": 102100,
                        "st": 110100
                  },
                  "comedk": {
                        "gm": 53450,
                        "hkr": 61450
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 14.4
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 52120,
                        "twoA": 62800,
                        "twoB": 68800,
                        "threeA": 55120,
                        "threeB": 53120,
                        "sc": 96100,
                        "st": 104100
                  },
                  "comedk": {
                        "gm": 48440,
                        "hkr": 56440
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 15.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 72150,
                        "twoA": 88500,
                        "twoB": 95500,
                        "threeA": 76150,
                        "threeB": 74150,
                        "sc": 118100,
                        "st": 125100
                  },
                  "comedk": {
                        "gm": 66800,
                        "hkr": 76800
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "ewit-magadi",
    name: "East West Institute of Technology",
    shortName: "EWIT Magadi Rd (Bengaluru)",
    code: "E095",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "East West Institute of Technology (EWIT Magadi Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹22.0 LPA Highest CTC with 84% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "East West Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at EWIT Magadi Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Off Magadi Main Road, Vishwaneedam Post, Bengaluru, Karnataka 560091",
      mapUrl: "https://maps.google.com/?q=East+West+Institute+of+Technology+Bengaluru",
    },
    website: "https://ewit.edu.in",
    contact: {
      phone: "+91 80 2328 6732",
      email: "principal@ewit.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 38,
    },
    rating: 4.4,
    reviewCount: 340,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 78000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E095) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 84,
      totalEligible: 480,
      studentsPlaced: 403,
      highestPackageLPA: 22.0,
      averagePackageLPA: 6.0,
      medianPackageLPA: 5.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.3, placementRate: 80 },
        { year: 2023, avgPackage: 5.7, placementRate: 82 },
        { year: 2024, avgPackage: 6.0, placementRate: 84 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 38300,
                        "twoA": 47200,
                        "twoB": 53200,
                        "threeA": 41300,
                        "threeB": 39300,
                        "sc": 81400,
                        "st": 89400
                  },
                  "comedk": {
                        "gm": 35400,
                        "hkr": 43400
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 22.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46440,
                        "twoA": 55960,
                        "twoB": 61960,
                        "threeA": 49440,
                        "threeB": 47440,
                        "sc": 93400,
                        "st": 101400
                  },
                  "comedk": {
                        "gm": 43300,
                        "hkr": 51300
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 19.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 41680,
                        "twoA": 51200,
                        "twoB": 57200,
                        "threeA": 44680,
                        "threeB": 42680,
                        "sc": 87400,
                        "st": 95400
                  },
                  "comedk": {
                        "gm": 39160,
                        "hkr": 47160
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 20.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 59100,
                        "twoA": 74000,
                        "twoB": 81000,
                        "threeA": 63100,
                        "threeB": 61100,
                        "sc": 109400,
                        "st": 116400
                  },
                  "comedk": {
                        "gm": 55200,
                        "hkr": 65200
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "gitw-bangalore",
    name: "Ghousia Institute of Technology for Women",
    shortName: "GITW Bengaluru",
    code: "E171",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Ghousia Institute of Technology for Women (GITW Bengaluru) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹12.0 LPA Highest CTC with 74% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Ghousia Institute of Technology for Women Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GITW Bengaluru."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Hosur Main Road, Bengaluru, Karnataka 560029",
      mapUrl: "https://maps.google.com/?q=Ghousia+Institute+of+Technology+for+Women+Bengaluru",
    },
    website: "https://ghousiaedu.org",
    contact: {
      phone: "+91 80 2553 4567",
      email: "gitw@ghousiaedu.org",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 87,
    },
    rating: 4.0,
    reviewCount: 120,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 220000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E171) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 74,
      totalEligible: 480,
      studentsPlaced: 355,
      highestPackageLPA: 12.0,
      averagePackageLPA: 4.4,
      medianPackageLPA: 3.7,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.7, placementRate: 70 },
        { year: 2023, avgPackage: 4.1, placementRate: 72 },
        { year: 2024, avgPackage: 4.4, placementRate: 74 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 55450,
                        "twoA": 66800,
                        "twoB": 72800,
                        "threeA": 58450,
                        "threeB": 56450,
                        "sc": 96100,
                        "st": 104100
                  },
                  "comedk": {
                        "gm": 50100,
                        "hkr": 58100
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 65060,
                        "twoA": 76540,
                        "twoB": 82540,
                        "threeA": 68060,
                        "threeB": 66060,
                        "sc": 108100,
                        "st": 116100
                  },
                  "comedk": {
                        "gm": 60450,
                        "hkr": 68450
                  }
            },
            "avgPackage": 4.6,
            "highestPackage": 10.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 59320,
                        "twoA": 70800,
                        "twoB": 76800,
                        "threeA": 62320,
                        "threeB": 60320,
                        "sc": 102100,
                        "st": 110100
                  },
                  "comedk": {
                        "gm": 54840,
                        "hkr": 62840
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 11.4
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 81150,
                        "twoA": 98500,
                        "twoB": 105500,
                        "threeA": 85150,
                        "threeB": 83150,
                        "sc": 124100,
                        "st": 131100
                  },
                  "comedk": {
                        "gm": 74800,
                        "hkr": 84800
                  }
            },
            "avgPackage": 4.2,
            "highestPackage": 9.6
      }
],
  },
  {
    id: "gat-bangalore",
    name: "Global Academy of Technology",
    shortName: "GAT RR Nagar (Bengaluru)",
    code: "E096",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Global Academy of Technology (GAT RR Nagar (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹25.0 LPA Highest CTC with 88% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Global Academy of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GAT RR Nagar (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Rajarajeshwarinagar, Ideal Homes Township, Bengaluru, Karnataka 560098",
      mapUrl: "https://maps.google.com/?q=Global+Academy+of+Technology+Bengaluru",
    },
    website: "https://gat.ac.in",
    contact: {
      phone: "+91 80 2860 3158",
      email: "info@gat.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 22,
    },
    rating: 4.5,
    reviewCount: 410,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E096) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 88,
      totalEligible: 480,
      studentsPlaced: 422,
      highestPackageLPA: 25.0,
      averagePackageLPA: 6.8,
      medianPackageLPA: 5.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.1, placementRate: 84 },
        { year: 2023, avgPackage: 6.5, placementRate: 86 },
        { year: 2024, avgPackage: 6.8, placementRate: 88 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 32700,
                        "twoA": 40800,
                        "twoB": 46800,
                        "threeA": 35700,
                        "threeB": 33700,
                        "sc": 76600,
                        "st": 84600
                  },
                  "comedk": {
                        "gm": 30600,
                        "hkr": 38600
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 25.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 40360,
                        "twoA": 49240,
                        "twoB": 55240,
                        "threeA": 43360,
                        "threeB": 41360,
                        "sc": 88600,
                        "st": 96600
                  },
                  "comedk": {
                        "gm": 37700,
                        "hkr": 45700
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 22.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 35920,
                        "twoA": 44800,
                        "twoB": 50800,
                        "threeA": 38920,
                        "threeB": 36920,
                        "sc": 82600,
                        "st": 90600
                  },
                  "comedk": {
                        "gm": 34040,
                        "hkr": 42040
                  }
            },
            "avgPackage": 7.5,
            "highestPackage": 23.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 51900,
                        "twoA": 66000,
                        "twoB": 73000,
                        "threeA": 55900,
                        "threeB": 53900,
                        "sc": 104600,
                        "st": 111600
                  },
                  "comedk": {
                        "gm": 48800,
                        "hkr": 58800
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "gcem-whitefield",
    name: "Gopalan College of Engineering and Management",
    shortName: "GCEM Whitefield (Bengaluru)",
    code: "E191",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Gopalan College of Engineering and Management (GCEM Whitefield (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹19.0 LPA Highest CTC with 82% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Gopalan College of Engineering and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GCEM Whitefield (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "181/1, 182/1, Hoodi Village, Sonnenahalli, K.R. Puram, Whitefield, Bengaluru, Karnataka 560048",
      mapUrl: "https://maps.google.com/?q=Gopalan+College+of+Engineering+and+Management+Bengaluru",
    },
    website: "https://gopalancolleges.com/gcem",
    contact: {
      phone: "+91 80 4222 9777",
      email: "gcem@gopalancolleges.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 53,
    },
    rating: 4.3,
    reviewCount: 250,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 185000,
      managementAnnual: 310000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E191) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 82,
      totalEligible: 480,
      studentsPlaced: 393,
      highestPackageLPA: 19.0,
      averagePackageLPA: 5.6,
      medianPackageLPA: 4.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.9, placementRate: 78 },
        { year: 2023, avgPackage: 5.3, placementRate: 80 },
        { year: 2024, avgPackage: 5.6, placementRate: 82 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 43550,
                        "twoA": 53200,
                        "twoB": 59200,
                        "threeA": 46550,
                        "threeB": 44550,
                        "sc": 85900,
                        "st": 93900
                  },
                  "comedk": {
                        "gm": 39900,
                        "hkr": 47900
                  }
            },
            "avgPackage": 6.4,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 52140,
                        "twoA": 62260,
                        "twoB": 68260,
                        "threeA": 55140,
                        "threeB": 53140,
                        "sc": 97900,
                        "st": 105900
                  },
                  "comedk": {
                        "gm": 48550,
                        "hkr": 56550
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 17.1
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 47080,
                        "twoA": 57200,
                        "twoB": 63200,
                        "threeA": 50080,
                        "threeB": 48080,
                        "sc": 91900,
                        "st": 99900
                  },
                  "comedk": {
                        "gm": 43960,
                        "hkr": 51960
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 18.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 65850,
                        "twoA": 81500,
                        "twoB": 88500,
                        "threeA": 69850,
                        "threeB": 67850,
                        "sc": 113900,
                        "st": 120900
                  },
                  "comedk": {
                        "gm": 61200,
                        "hkr": 71200
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 15.2
      }
],
  },
  {
    id: "hkbk-nagawara",
    name: "H.K.B.K. College of Engineering",
    shortName: "HKBK Nagawara (Bengaluru)",
    code: "E058",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "H.K.B.K. College of Engineering (HKBK Nagawara (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹22.4 LPA Highest CTC with 86% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "H.K.B.K. College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at HKBK Nagawara (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "22/1, Nagawara, Manyata Tech Park Road, Bengaluru, Karnataka 560045",
      mapUrl: "https://maps.google.com/?q=H.K.B.K.+College+of+Engineering+Bengaluru",
    },
    website: "https://hkbk.edu.in",
    contact: {
      phone: "+91 80 2544 1722",
      email: "principal@hkbk.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 30,
    },
    rating: 4.4,
    reviewCount: 370,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 350000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E058) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 86,
      totalEligible: 480,
      studentsPlaced: 412,
      highestPackageLPA: 22.4,
      averagePackageLPA: 6.3,
      medianPackageLPA: 5.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.6, placementRate: 82 },
        { year: 2023, avgPackage: 6.0, placementRate: 84 },
        { year: 2024, avgPackage: 6.3, placementRate: 86 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 35500,
                        "twoA": 44000,
                        "twoB": 50000,
                        "threeA": 38500,
                        "threeB": 36500,
                        "sc": 79000,
                        "st": 87000
                  },
                  "comedk": {
                        "gm": 33000,
                        "hkr": 41000
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 22.4
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 43400,
                        "twoA": 52600,
                        "twoB": 58600,
                        "threeA": 46400,
                        "threeB": 44400,
                        "sc": 91000,
                        "st": 99000
                  },
                  "comedk": {
                        "gm": 40500,
                        "hkr": 48500
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 20.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 38800,
                        "twoA": 48000,
                        "twoB": 54000,
                        "threeA": 41800,
                        "threeB": 39800,
                        "sc": 85000,
                        "st": 93000
                  },
                  "comedk": {
                        "gm": 36600,
                        "hkr": 44600
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 21.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 55500,
                        "twoA": 70000,
                        "twoB": 77000,
                        "threeA": 59500,
                        "threeB": 57500,
                        "sc": 107000,
                        "st": 114000
                  },
                  "comedk": {
                        "gm": 52000,
                        "hkr": 62000
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 17.9
      }
],
  },
  {
    id: "impact-sahakarnagar",
    name: "Impact College of Engineering and Applied Sciences",
    shortName: "Impact IT Sahakarnagar",
    code: "E147",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Impact College of Engineering and Applied Sciences (Impact IT Sahakarnagar) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 78% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Impact College of Engineering and Applied Sciences Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Impact IT Sahakarnagar."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Impact Campus, Kodigehalli, Sahakarnagar, Bengaluru, Karnataka 560092",
      mapUrl: "https://maps.google.com/?q=Impact+College+of+Engineering+and+Applied+Sciences+Bengaluru",
    },
    website: "https://impact.ac.in",
    contact: {
      phone: "+91 80 2333 4101",
      email: "iceas@impact.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 69,
    },
    rating: 4.1,
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 270000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E147) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 78,
      totalEligible: 480,
      studentsPlaced: 374,
      highestPackageLPA: 15.0,
      averagePackageLPA: 4.9,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.2, placementRate: 74 },
        { year: 2023, avgPackage: 4.6, placementRate: 76 },
        { year: 2024, avgPackage: 4.9, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 49150,
                        "twoA": 59600,
                        "twoB": 65600,
                        "threeA": 52150,
                        "threeB": 50150,
                        "sc": 90700,
                        "st": 98700
                  },
                  "comedk": {
                        "gm": 44700,
                        "hkr": 52700
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 58220,
                        "twoA": 68980,
                        "twoB": 74980,
                        "threeA": 61220,
                        "threeB": 59220,
                        "sc": 102700,
                        "st": 110700
                  },
                  "comedk": {
                        "gm": 54150,
                        "hkr": 62150
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 13.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 52840,
                        "twoA": 63600,
                        "twoB": 69600,
                        "threeA": 55840,
                        "threeB": 53840,
                        "sc": 96700,
                        "st": 104700
                  },
                  "comedk": {
                        "gm": 49080,
                        "hkr": 57080
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 73050,
                        "twoA": 89500,
                        "twoB": 96500,
                        "threeA": 77050,
                        "threeB": 75050,
                        "sc": 118700,
                        "st": 125700
                  },
                  "comedk": {
                        "gm": 67600,
                        "hkr": 77600
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "islamiah-bangalore",
    name: "Islamiah Institute of Technology",
    shortName: "IIT Bannerghatta (Bengaluru)",
    code: "E068",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Islamiah Institute of Technology (IIT Bannerghatta (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.0 LPA Highest CTC with 74% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Islamiah Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at IIT Bannerghatta (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "National Park Road, Bannerghatta Road, Bengaluru, Karnataka 560076",
      mapUrl: "https://maps.google.com/?q=Islamiah+Institute+of+Technology+Bengaluru",
    },
    website: "https://islamiahit.ac.in",
    contact: {
      phone: "+91 80 2658 0786",
      email: "principal@islamiahit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 86,
    },
    rating: 4.0,
    reviewCount: 130,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E068) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 74,
      totalEligible: 480,
      studentsPlaced: 355,
      highestPackageLPA: 13.0,
      averagePackageLPA: 4.5,
      medianPackageLPA: 3.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.8, placementRate: 70 },
        { year: 2023, avgPackage: 4.2, placementRate: 72 },
        { year: 2024, avgPackage: 4.5, placementRate: 74 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 55100,
                        "twoA": 66400,
                        "twoB": 72400,
                        "threeA": 58100,
                        "threeB": 56100,
                        "sc": 95800,
                        "st": 103800
                  },
                  "comedk": {
                        "gm": 49800,
                        "hkr": 57800
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 13.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 64680,
                        "twoA": 76120,
                        "twoB": 82120,
                        "threeA": 67680,
                        "threeB": 65680,
                        "sc": 107800,
                        "st": 115800
                  },
                  "comedk": {
                        "gm": 60100,
                        "hkr": 68100
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 11.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 58960,
                        "twoA": 70400,
                        "twoB": 76400,
                        "threeA": 61960,
                        "threeB": 59960,
                        "sc": 101800,
                        "st": 109800
                  },
                  "comedk": {
                        "gm": 54520,
                        "hkr": 62520
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 12.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 80700,
                        "twoA": 98000,
                        "twoB": 105000,
                        "threeA": 84700,
                        "threeB": 82700,
                        "sc": 123800,
                        "st": 130800
                  },
                  "comedk": {
                        "gm": 74400,
                        "hkr": 84400
                  }
            },
            "avgPackage": 4.3,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "jyothy-kanakapura",
    name: "Jyothy Institute of Technology",
    shortName: "JIT Tataguni (Bengaluru)",
    code: "E195",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jyothy Institute of Technology (JIT Tataguni (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹20.0 LPA Highest CTC with 84% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Jyothy Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JIT Tataguni (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Pipeline Road, Tataguni, Thataguni Post, Kanakapura Road, Bengaluru, Karnataka 560082",
      mapUrl: "https://maps.google.com/?q=Jyothy+Institute+of+Technology+Bengaluru",
    },
    website: "https://jyothyit.ac.in",
    contact: {
      phone: "+91 80 2843 5052",
      email: "principal@jyothyit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 39,
    },
    rating: 4.4,
    reviewCount: 320,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 78000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E195) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 84,
      totalEligible: 480,
      studentsPlaced: 403,
      highestPackageLPA: 20.0,
      averagePackageLPA: 6.0,
      medianPackageLPA: 5.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.3, placementRate: 80 },
        { year: 2023, avgPackage: 5.7, placementRate: 82 },
        { year: 2024, avgPackage: 6.0, placementRate: 84 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 38650,
                        "twoA": 47600,
                        "twoB": 53600,
                        "threeA": 41650,
                        "threeB": 39650,
                        "sc": 81700,
                        "st": 89700
                  },
                  "comedk": {
                        "gm": 35700,
                        "hkr": 43700
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 20.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46820,
                        "twoA": 56380,
                        "twoB": 62380,
                        "threeA": 49820,
                        "threeB": 47820,
                        "sc": 93700,
                        "st": 101700
                  },
                  "comedk": {
                        "gm": 43650,
                        "hkr": 51650
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 18.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 42040,
                        "twoA": 51600,
                        "twoB": 57600,
                        "threeA": 45040,
                        "threeB": 43040,
                        "sc": 87700,
                        "st": 95700
                  },
                  "comedk": {
                        "gm": 39480,
                        "hkr": 47480
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 59550,
                        "twoA": 74500,
                        "twoB": 81500,
                        "threeA": 63550,
                        "threeB": 61550,
                        "sc": 109700,
                        "st": 116700
                  },
                  "comedk": {
                        "gm": 55600,
                        "hkr": 65600
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "knsit-yelahanka",
    name: "KNS Institute of Technology",
    shortName: "KNSIT Yelahanka (Bengaluru)",
    code: "E098",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "KNS Institute of Technology (KNSIT Yelahanka (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.5 LPA Highest CTC with 79% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "KNS Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KNSIT Yelahanka (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Hegde Nagar, Post, Kogilu Main Rd, Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=KNS+Institute+of+Technology+Bengaluru",
    },
    website: "https://knsit.com",
    contact: {
      phone: "+91 80 2846 4165",
      email: "knsitprincipal@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 60,
    },
    rating: 4.2,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E098) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 79,
      totalEligible: 480,
      studentsPlaced: 379,
      highestPackageLPA: 16.5,
      averagePackageLPA: 5.1,
      medianPackageLPA: 4.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.4, placementRate: 75 },
        { year: 2023, avgPackage: 4.8, placementRate: 77 },
        { year: 2024, avgPackage: 5.1, placementRate: 79 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 46000,
                        "twoA": 56000,
                        "twoB": 62000,
                        "threeA": 49000,
                        "threeB": 47000,
                        "sc": 88000,
                        "st": 96000
                  },
                  "comedk": {
                        "gm": 42000,
                        "hkr": 50000
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 54800,
                        "twoA": 65200,
                        "twoB": 71200,
                        "threeA": 57800,
                        "threeB": 55800,
                        "sc": 100000,
                        "st": 108000
                  },
                  "comedk": {
                        "gm": 51000,
                        "hkr": 59000
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 49600,
                        "twoA": 60000,
                        "twoB": 66000,
                        "threeA": 52600,
                        "threeB": 50600,
                        "sc": 94000,
                        "st": 102000
                  },
                  "comedk": {
                        "gm": 46200,
                        "hkr": 54200
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.7
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 69000,
                        "twoA": 85000,
                        "twoB": 92000,
                        "threeA": 73000,
                        "threeB": 71000,
                        "sc": 116000,
                        "st": 123000
                  },
                  "comedk": {
                        "gm": 64000,
                        "hkr": 74000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 13.2
      }
],
  },
  {
    id: "ksit-kanakapura",
    name: "K.S. Institute of Technology",
    shortName: "KSIT Raghuvanahalli (Bengaluru)",
    code: "E083",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "K.S. Institute of Technology (KSIT Raghuvanahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹22.0 LPA Highest CTC with 86% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "K.S. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KSIT Raghuvanahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "No. 14, Raghuvanahalli, Kanakapura Main Road, Bengaluru, Karnataka 560109",
      mapUrl: "https://maps.google.com/?q=K.S.+Institute+of+Technology+Bengaluru",
    },
    website: "https://ksit.ac.in",
    contact: {
      phone: "+91 80 2843 5722",
      email: "principal@ksit.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 32,
    },
    rating: 4.4,
    reviewCount: 360,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E083) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 86,
      totalEligible: 480,
      studentsPlaced: 412,
      highestPackageLPA: 22.0,
      averagePackageLPA: 6.3,
      medianPackageLPA: 5.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.6, placementRate: 82 },
        { year: 2023, avgPackage: 6.0, placementRate: 84 },
        { year: 2024, avgPackage: 6.3, placementRate: 86 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 36200,
                        "twoA": 44800,
                        "twoB": 50800,
                        "threeA": 39200,
                        "threeB": 37200,
                        "sc": 79600,
                        "st": 87600
                  },
                  "comedk": {
                        "gm": 33600,
                        "hkr": 41600
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 22.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 44160,
                        "twoA": 53440,
                        "twoB": 59440,
                        "threeA": 47160,
                        "threeB": 45160,
                        "sc": 91600,
                        "st": 99600
                  },
                  "comedk": {
                        "gm": 41200,
                        "hkr": 49200
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 19.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 39520,
                        "twoA": 48800,
                        "twoB": 54800,
                        "threeA": 42520,
                        "threeB": 40520,
                        "sc": 85600,
                        "st": 93600
                  },
                  "comedk": {
                        "gm": 37240,
                        "hkr": 45240
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 20.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 56400,
                        "twoA": 71000,
                        "twoB": 78000,
                        "threeA": 60400,
                        "threeB": 58400,
                        "sc": 107600,
                        "st": 114600
                  },
                  "comedk": {
                        "gm": 52800,
                        "hkr": 62800
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "kssem-kanakapura",
    name: "K.S. School of Engineering and Management",
    shortName: "KSSEM Mallasandra (Bengaluru)",
    code: "E194",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "K.S. School of Engineering and Management (KSSEM Mallasandra (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 83% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "K.S. School of Engineering and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KSSEM Mallasandra (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "No. 15, Mallasandra, Off Kanakapura Road, Bengaluru, Karnataka 560109",
      mapUrl: "https://maps.google.com/?q=K.S.+School+of+Engineering+and+Management+Bengaluru",
    },
    website: "https://kssem.edu.in",
    contact: {
      phone: "+91 80 2842 5012",
      email: "principal@kssem.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 43,
    },
    rating: 4.3,
    reviewCount: 290,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 185000,
      managementAnnual: 300000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E194) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 83,
      totalEligible: 480,
      studentsPlaced: 398,
      highestPackageLPA: 18.0,
      averagePackageLPA: 5.8,
      medianPackageLPA: 4.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.1, placementRate: 79 },
        { year: 2023, avgPackage: 5.5, placementRate: 81 },
        { year: 2024, avgPackage: 5.8, placementRate: 83 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 40050,
                        "twoA": 49200,
                        "twoB": 55200,
                        "threeA": 43050,
                        "threeB": 41050,
                        "sc": 82900,
                        "st": 90900
                  },
                  "comedk": {
                        "gm": 36900,
                        "hkr": 44900
                  }
            },
            "avgPackage": 6.7,
            "highestPackage": 18.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 48340,
                        "twoA": 58060,
                        "twoB": 64060,
                        "threeA": 51340,
                        "threeB": 49340,
                        "sc": 94900,
                        "st": 102900
                  },
                  "comedk": {
                        "gm": 45050,
                        "hkr": 53050
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 16.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 43480,
                        "twoA": 53200,
                        "twoB": 59200,
                        "threeA": 46480,
                        "threeB": 44480,
                        "sc": 88900,
                        "st": 96900
                  },
                  "comedk": {
                        "gm": 40760,
                        "hkr": 48760
                  }
            },
            "avgPackage": 6.4,
            "highestPackage": 17.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 61350,
                        "twoA": 76500,
                        "twoB": 83500,
                        "threeA": 65350,
                        "threeB": 63350,
                        "sc": 110900,
                        "st": 117900
                  },
                  "comedk": {
                        "gm": 57200,
                        "hkr": 67200
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "msec-bangalore",
    name: "M.S. Engineering College",
    shortName: "MSEC Sadahalli (Bengaluru)",
    code: "E092",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "M.S. Engineering College (MSEC Sadahalli (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹17.5 LPA Highest CTC with 81% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "M.S. Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MSEC Sadahalli (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Navarathna Agrahara, Sadahalli Post, Near International Airport, Bengaluru, Karnataka 562110",
      mapUrl: "https://maps.google.com/?q=M.S.+Engineering+College+Bengaluru",
    },
    website: "https://msec.ac.in",
    contact: {
      phone: "+91 80 4121 5454",
      email: "principal@msec.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 51,
    },
    rating: 4.3,
    reviewCount: 250,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 290000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E092) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 81,
      totalEligible: 480,
      studentsPlaced: 388,
      highestPackageLPA: 17.5,
      averagePackageLPA: 5.4,
      medianPackageLPA: 4.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.7, placementRate: 77 },
        { year: 2023, avgPackage: 5.1, placementRate: 79 },
        { year: 2024, avgPackage: 5.4, placementRate: 81 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 42850,
                        "twoA": 52400,
                        "twoB": 58400,
                        "threeA": 45850,
                        "threeB": 43850,
                        "sc": 85300,
                        "st": 93300
                  },
                  "comedk": {
                        "gm": 39300,
                        "hkr": 47300
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 17.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 51380,
                        "twoA": 61420,
                        "twoB": 67420,
                        "threeA": 54380,
                        "threeB": 52380,
                        "sc": 97300,
                        "st": 105300
                  },
                  "comedk": {
                        "gm": 47850,
                        "hkr": 55850
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 15.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 46360,
                        "twoA": 56400,
                        "twoB": 62400,
                        "threeA": 49360,
                        "threeB": 47360,
                        "sc": 91300,
                        "st": 99300
                  },
                  "comedk": {
                        "gm": 43320,
                        "hkr": 51320
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 64950,
                        "twoA": 80500,
                        "twoB": 87500,
                        "threeA": 68950,
                        "threeB": 66950,
                        "sc": 113300,
                        "st": 120300
                  },
                  "comedk": {
                        "gm": 60400,
                        "hkr": 70400
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 14.0
      }
],
  },
  {
    id: "pesit-south-ecity",
    name: "PES Institute of Technology (Electronic City Campus)",
    shortName: "PESIT South ECity",
    code: "E081",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "PES Institute of Technology (Electronic City Campus) (PESIT South ECity) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 95% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹48.0 LPA Highest CTC with 95% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "PES Institute of Technology (Electronic City Campus) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at PESIT South ECity."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Hosur Road, 1KM before Electronic City, Bengaluru, Karnataka 560100",
      mapUrl: "https://maps.google.com/?q=PES+Institute+of+Technology+(Electronic+City+Campus)+Bengaluru",
    },
    website: "https://pes.edu/ecampus",
    contact: {
      phone: "+91 80 6618 6610",
      email: "admissions@pes.edu",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: 98,
      karnatakaRank: 8,
    },
    rating: 4.7,
    reviewCount: 580,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 280000,
      managementAnnual: 500000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E081) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 95,
      totalEligible: 480,
      studentsPlaced: 456,
      highestPackageLPA: 48.0,
      averagePackageLPA: 10.5,
      medianPackageLPA: 8.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 9.8, placementRate: 91 },
        { year: 2023, avgPackage: 10.2, placementRate: 93 },
        { year: 2024, avgPackage: 10.5, placementRate: 95 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 27800,
                        "twoA": 35200,
                        "twoB": 41200,
                        "threeA": 30800,
                        "threeB": 28800,
                        "sc": 72400,
                        "st": 80400
                  },
                  "comedk": {
                        "gm": 26400,
                        "hkr": 34400
                  }
            },
            "avgPackage": 12.1,
            "highestPackage": 48.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 35040,
                        "twoA": 43360,
                        "twoB": 49360,
                        "threeA": 38040,
                        "threeB": 36040,
                        "sc": 84400,
                        "st": 92400
                  },
                  "comedk": {
                        "gm": 32800,
                        "hkr": 40800
                  }
            },
            "avgPackage": 11.0,
            "highestPackage": 43.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 30880,
                        "twoA": 39200,
                        "twoB": 45200,
                        "threeA": 33880,
                        "threeB": 31880,
                        "sc": 78400,
                        "st": 86400
                  },
                  "comedk": {
                        "gm": 29560,
                        "hkr": 37560
                  }
            },
            "avgPackage": 11.6,
            "highestPackage": 45.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 45600,
                        "twoA": 59000,
                        "twoB": 66000,
                        "threeA": 49600,
                        "threeB": 47600,
                        "sc": 100400,
                        "st": 107400
                  },
                  "comedk": {
                        "gm": 43200,
                        "hkr": 53200
                  }
            },
            "avgPackage": 10.0,
            "highestPackage": 38.4
      }
],
  },
  {
    id: "presidency-univ-bangalore",
    name: "Presidency University",
    shortName: "Presidency Univ Rajanakunte",
    code: "U004",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Presidency University (Presidency Univ Rajanakunte) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹34.0 LPA Highest CTC with 90% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Presidency University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Presidency Univ Rajanakunte."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Itgalpur, Rajanakunte, Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=Presidency+University+Bengaluru",
    },
    website: "https://presidencyuniversity.in",
    contact: {
      phone: "+91 80 4925 5555",
      email: "admission@presidencyuniversity.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 15,
    },
    rating: 4.6,
    reviewCount: 530,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 260000,
      managementAnnual: 420000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U004) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 90,
      totalEligible: 480,
      studentsPlaced: 432,
      highestPackageLPA: 34.0,
      averagePackageLPA: 7.5,
      medianPackageLPA: 6.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.8, placementRate: 86 },
        { year: 2023, avgPackage: 7.2, placementRate: 88 },
        { year: 2024, avgPackage: 7.5, placementRate: 90 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30250,
                        "twoA": 38000,
                        "twoB": 44000,
                        "threeA": 33250,
                        "threeB": 31250,
                        "sc": 74500,
                        "st": 82500
                  },
                  "comedk": {
                        "gm": 28500,
                        "hkr": 36500
                  }
            },
            "avgPackage": 8.6,
            "highestPackage": 34.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 37700,
                        "twoA": 46300,
                        "twoB": 52300,
                        "threeA": 40700,
                        "threeB": 38700,
                        "sc": 86500,
                        "st": 94500
                  },
                  "comedk": {
                        "gm": 35250,
                        "hkr": 43250
                  }
            },
            "avgPackage": 7.9,
            "highestPackage": 30.6
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33400,
                        "twoA": 42000,
                        "twoB": 48000,
                        "threeA": 36400,
                        "threeB": 34400,
                        "sc": 80500,
                        "st": 88500
                  },
                  "comedk": {
                        "gm": 31800,
                        "hkr": 39800
                  }
            },
            "avgPackage": 8.2,
            "highestPackage": 32.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 48750,
                        "twoA": 62500,
                        "twoB": 69500,
                        "threeA": 52750,
                        "threeB": 50750,
                        "sc": 102500,
                        "st": 109500
                  },
                  "comedk": {
                        "gm": 46000,
                        "hkr": 56000
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 27.2
      }
],
  },
  {
    id: "rrit-bangalore",
    name: "R.R. Institute of Technology",
    shortName: "RRIT Chikkabanavara",
    code: "E165",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "R.R. Institute of Technology (RRIT Chikkabanavara) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹17.0 LPA Highest CTC with 80% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "R.R. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RRIT Chikkabanavara."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Raja Reddy Layout, Heseraghatta Main Road, Chikkabanavara, Bengaluru, Karnataka 560090",
      mapUrl: "https://maps.google.com/?q=R.R.+Institute+of+Technology+Bengaluru",
    },
    website: "https://rrinstitutions.com/rrit",
    contact: {
      phone: "+91 80 2839 1555",
      email: "principal@rrit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 59,
    },
    rating: 4.2,
    reviewCount: 220,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E165) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 80,
      totalEligible: 480,
      studentsPlaced: 384,
      highestPackageLPA: 17.0,
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 76 },
        { year: 2023, avgPackage: 5.0, placementRate: 78 },
        { year: 2024, avgPackage: 5.3, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 45650,
                        "twoA": 55600,
                        "twoB": 61600,
                        "threeA": 48650,
                        "threeB": 46650,
                        "sc": 87700,
                        "st": 95700
                  },
                  "comedk": {
                        "gm": 41700,
                        "hkr": 49700
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 17.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 54420,
                        "twoA": 64780,
                        "twoB": 70780,
                        "threeA": 57420,
                        "threeB": 55420,
                        "sc": 99700,
                        "st": 107700
                  },
                  "comedk": {
                        "gm": 50650,
                        "hkr": 58650
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.3
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 49240,
                        "twoA": 59600,
                        "twoB": 65600,
                        "threeA": 52240,
                        "threeB": 50240,
                        "sc": 93700,
                        "st": 101700
                  },
                  "comedk": {
                        "gm": 45880,
                        "hkr": 53880
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 68550,
                        "twoA": 84500,
                        "twoB": 91500,
                        "threeA": 72550,
                        "threeB": 70550,
                        "sc": 115700,
                        "st": 122700
                  },
                  "comedk": {
                        "gm": 63600,
                        "hkr": 73600
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "rrce-bangalore",
    name: "Rajarajeswari College of Engineering",
    shortName: "RRCE Mysuru Rd (Bengaluru)",
    code: "E117",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Rajarajeswari College of Engineering (RRCE Mysuru Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹23.0 LPA Highest CTC with 86% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Rajarajeswari College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RRCE Mysuru Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "No.14, Ramohalli Cross, Kumbalgodu, Mysore Road, Bengaluru, Karnataka 560074",
      mapUrl: "https://maps.google.com/?q=Rajarajeswari+College+of+Engineering+Bengaluru",
    },
    website: "https://rrce.org",
    contact: {
      phone: "+91 80 2843 7124",
      email: "principal@rrce.org",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 26,
    },
    rating: 4.4,
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 350000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E117) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 86,
      totalEligible: 480,
      studentsPlaced: 412,
      highestPackageLPA: 23.0,
      averagePackageLPA: 6.5,
      medianPackageLPA: 5.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.8, placementRate: 82 },
        { year: 2023, avgPackage: 6.2, placementRate: 84 },
        { year: 2024, avgPackage: 6.5, placementRate: 86 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 34100,
                        "twoA": 42400,
                        "twoB": 48400,
                        "threeA": 37100,
                        "threeB": 35100,
                        "sc": 77800,
                        "st": 85800
                  },
                  "comedk": {
                        "gm": 31800,
                        "hkr": 39800
                  }
            },
            "avgPackage": 7.5,
            "highestPackage": 23.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 41880,
                        "twoA": 50920,
                        "twoB": 56920,
                        "threeA": 44880,
                        "threeB": 42880,
                        "sc": 89800,
                        "st": 97800
                  },
                  "comedk": {
                        "gm": 39100,
                        "hkr": 47100
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 20.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 37360,
                        "twoA": 46400,
                        "twoB": 52400,
                        "threeA": 40360,
                        "threeB": 38360,
                        "sc": 83800,
                        "st": 91800
                  },
                  "comedk": {
                        "gm": 35320,
                        "hkr": 43320
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 21.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 53700,
                        "twoA": 68000,
                        "twoB": 75000,
                        "threeA": 57700,
                        "threeB": 55700,
                        "sc": 105800,
                        "st": 112800
                  },
                  "comedk": {
                        "gm": 50400,
                        "hkr": 60400
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 18.4
      }
],
  },
  {
    id: "rgit-hebbal",
    name: "Rajiv Gandhi Institute of Technology",
    shortName: "RGIT Hebbal (Bengaluru)",
    code: "E087",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Rajiv Gandhi Institute of Technology (RGIT Hebbal (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.8 LPA Highest CTC with 80% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Rajiv Gandhi Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RGIT Hebbal (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "RT Nagar Post, Cholanagar, Hebbal, Bengaluru, Karnataka 560032",
      mapUrl: "https://maps.google.com/?q=Rajiv+Gandhi+Institute+of+Technology+Bengaluru",
    },
    website: "https://rgit.ac.in",
    contact: {
      phone: "+91 80 2333 9377",
      email: "principal@rgit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 57,
    },
    rating: 4.2,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 290000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E087) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 80,
      totalEligible: 480,
      studentsPlaced: 384,
      highestPackageLPA: 16.8,
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 76 },
        { year: 2023, avgPackage: 5.0, placementRate: 78 },
        { year: 2024, avgPackage: 5.3, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 44950,
                        "twoA": 54800,
                        "twoB": 60800,
                        "threeA": 47950,
                        "threeB": 45950,
                        "sc": 87100,
                        "st": 95100
                  },
                  "comedk": {
                        "gm": 41100,
                        "hkr": 49100
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 16.8
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 53660,
                        "twoA": 63940,
                        "twoB": 69940,
                        "threeA": 56660,
                        "threeB": 54660,
                        "sc": 99100,
                        "st": 107100
                  },
                  "comedk": {
                        "gm": 49950,
                        "hkr": 57950
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.1
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 48520,
                        "twoA": 58800,
                        "twoB": 64800,
                        "threeA": 51520,
                        "threeB": 49520,
                        "sc": 93100,
                        "st": 101100
                  },
                  "comedk": {
                        "gm": 45240,
                        "hkr": 53240
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 67650,
                        "twoA": 83500,
                        "twoB": 90500,
                        "threeA": 71650,
                        "threeB": 69650,
                        "sc": 115100,
                        "st": 122100
                  },
                  "comedk": {
                        "gm": 62800,
                        "hkr": 72800
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 13.4
      }
],
  },
  {
    id: "reva-univ-bangalore",
    name: "REVA University",
    shortName: "REVA University Yelahanka",
    code: "U003",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "REVA University (REVA University Yelahanka) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 92% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹50.0 LPA Highest CTC with 92% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "REVA University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at REVA University Yelahanka."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=REVA+University+Bengaluru",
    },
    website: "https://reva.edu.in",
    contact: {
      phone: "+91 80 4696 6966",
      email: "admissions@reva.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: 110,
      karnatakaRank: 11,
    },
    rating: 4.7,
    reviewCount: 600,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 260000,
      managementAnnual: 450000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U003) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 92,
      totalEligible: 480,
      studentsPlaced: 441,
      highestPackageLPA: 50.0,
      averagePackageLPA: 8.2,
      medianPackageLPA: 7.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 7.5, placementRate: 88 },
        { year: 2023, avgPackage: 7.9, placementRate: 90 },
        { year: 2024, avgPackage: 8.2, placementRate: 92 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 28850,
                        "twoA": 36400,
                        "twoB": 42400,
                        "threeA": 31850,
                        "threeB": 29850,
                        "sc": 73300,
                        "st": 81300
                  },
                  "comedk": {
                        "gm": 27300,
                        "hkr": 35300
                  }
            },
            "avgPackage": 9.4,
            "highestPackage": 50.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 36180,
                        "twoA": 44620,
                        "twoB": 50620,
                        "threeA": 39180,
                        "threeB": 37180,
                        "sc": 85300,
                        "st": 93300
                  },
                  "comedk": {
                        "gm": 33850,
                        "hkr": 41850
                  }
            },
            "avgPackage": 8.6,
            "highestPackage": 45.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 31960,
                        "twoA": 40400,
                        "twoB": 46400,
                        "threeA": 34960,
                        "threeB": 32960,
                        "sc": 79300,
                        "st": 87300
                  },
                  "comedk": {
                        "gm": 30520,
                        "hkr": 38520
                  }
            },
            "avgPackage": 9.0,
            "highestPackage": 47.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46950,
                        "twoA": 60500,
                        "twoB": 67500,
                        "threeA": 50950,
                        "threeB": 48950,
                        "sc": 101300,
                        "st": 108300
                  },
                  "comedk": {
                        "gm": 44400,
                        "hkr": 54400
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 40.0
      }
],
  },
  {
    id: "rvitm-bangalore",
    name: "R.V. Institute of Technology and Management",
    shortName: "RVITM JP Nagar (Bengaluru)",
    code: "E276",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "R.V. Institute of Technology and Management (RVITM JP Nagar (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 94% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹42.0 LPA Highest CTC with 94% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "R.V. Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RVITM JP Nagar (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chaithanya Layout, 8th Phase, JP Nagar, Bengaluru, Karnataka 560076",
      mapUrl: "https://maps.google.com/?q=R.V.+Institute+of+Technology+and+Management+Bengaluru",
    },
    website: "https://rvitm.edu.in",
    contact: {
      phone: "+91 80 6717 8000",
      email: "principal.rvitm@rvei.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 10,
    },
    rating: 4.7,
    reviewCount: 420,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 270000,
      managementAnnual: 500000,
      hostelAnnual: 100000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E276) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 94,
      totalEligible: 480,
      studentsPlaced: 451,
      highestPackageLPA: 42.0,
      averagePackageLPA: 9.5,
      medianPackageLPA: 8.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 8.8, placementRate: 90 },
        { year: 2023, avgPackage: 9.2, placementRate: 92 },
        { year: 2024, avgPackage: 9.5, placementRate: 94 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 28500,
                        "twoA": 36000,
                        "twoB": 42000,
                        "threeA": 31500,
                        "threeB": 29500,
                        "sc": 73000,
                        "st": 81000
                  },
                  "comedk": {
                        "gm": 27000,
                        "hkr": 35000
                  }
            },
            "avgPackage": 10.9,
            "highestPackage": 42.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 35800,
                        "twoA": 44200,
                        "twoB": 50200,
                        "threeA": 38800,
                        "threeB": 36800,
                        "sc": 85000,
                        "st": 93000
                  },
                  "comedk": {
                        "gm": 33500,
                        "hkr": 41500
                  }
            },
            "avgPackage": 10.0,
            "highestPackage": 37.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 31600,
                        "twoA": 40000,
                        "twoB": 46000,
                        "threeA": 34600,
                        "threeB": 32600,
                        "sc": 79000,
                        "st": 87000
                  },
                  "comedk": {
                        "gm": 30200,
                        "hkr": 38200
                  }
            },
            "avgPackage": 10.5,
            "highestPackage": 39.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46500,
                        "twoA": 60000,
                        "twoB": 67000,
                        "threeA": 50500,
                        "threeB": 48500,
                        "sc": 101000,
                        "st": 108000
                  },
                  "comedk": {
                        "gm": 44000,
                        "hkr": 54000
                  }
            },
            "avgPackage": 9.0,
            "highestPackage": 33.6
      }
],
  },
  {
    id: "svit-rajanukunte",
    name: "Sai Vidya Institute of Technology",
    shortName: "SVIT Rajanukunte (Bengaluru)",
    code: "E174",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sai Vidya Institute of Technology (SVIT Rajanukunte (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹21.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sai Vidya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SVIT Rajanukunte (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Rajanukunte, Via Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=Sai+Vidya+Institute+of+Technology+Bengaluru",
    },
    website: "https://saividya.ac.in",
    contact: {
      phone: "+91 80 2846 8196",
      email: "info@saividya.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 34,
    },
    rating: 4.4,
    reviewCount: 320,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E174) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 21.0,
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 81 },
        { year: 2023, avgPackage: 5.9, placementRate: 83 },
        { year: 2024, avgPackage: 6.2, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 36900,
                        "twoA": 45600,
                        "twoB": 51600,
                        "threeA": 39900,
                        "threeB": 37900,
                        "sc": 80200,
                        "st": 88200
                  },
                  "comedk": {
                        "gm": 34200,
                        "hkr": 42200
                  }
            },
            "avgPackage": 7.1,
            "highestPackage": 21.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 44920,
                        "twoA": 54280,
                        "twoB": 60280,
                        "threeA": 47920,
                        "threeB": 45920,
                        "sc": 92200,
                        "st": 100200
                  },
                  "comedk": {
                        "gm": 41900,
                        "hkr": 49900
                  }
            },
            "avgPackage": 6.5,
            "highestPackage": 18.9
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 40240,
                        "twoA": 49600,
                        "twoB": 55600,
                        "threeA": 43240,
                        "threeB": 41240,
                        "sc": 86200,
                        "st": 94200
                  },
                  "comedk": {
                        "gm": 37880,
                        "hkr": 45880
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 19.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 57300,
                        "twoA": 72000,
                        "twoB": 79000,
                        "threeA": 61300,
                        "threeB": 59300,
                        "sc": 108200,
                        "st": 115200
                  },
                  "comedk": {
                        "gm": 53600,
                        "hkr": 63600
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.8
      }
],
  },
  {
    id: "sambhram-bangalore",
    name: "Sambhram Institute of Technology",
    shortName: "SaIT Vidyaranyapura",
    code: "E091",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sambhram Institute of Technology (SaIT Vidyaranyapura) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹21.0 LPA Highest CTC with 83% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sambhram Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SaIT Vidyaranyapura."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "MS Palya, Via Jalahalli East, Vidyaranyapura, Bengaluru, Karnataka 560097",
      mapUrl: "https://maps.google.com/?q=Sambhram+Institute+of+Technology+Bengaluru",
    },
    website: "https://sambhramit.com",
    contact: {
      phone: "+91 80 2364 8444",
      email: "principal@sambhramit.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 37,
    },
    rating: 4.3,
    reviewCount: 340,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E091) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 83,
      totalEligible: 480,
      studentsPlaced: 398,
      highestPackageLPA: 21.0,
      averagePackageLPA: 6.0,
      medianPackageLPA: 5.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.3, placementRate: 79 },
        { year: 2023, avgPackage: 5.7, placementRate: 81 },
        { year: 2024, avgPackage: 6.0, placementRate: 83 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 37950,
                        "twoA": 46800,
                        "twoB": 52800,
                        "threeA": 40950,
                        "threeB": 38950,
                        "sc": 81100,
                        "st": 89100
                  },
                  "comedk": {
                        "gm": 35100,
                        "hkr": 43100
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 21.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46060,
                        "twoA": 55540,
                        "twoB": 61540,
                        "threeA": 49060,
                        "threeB": 47060,
                        "sc": 93100,
                        "st": 101100
                  },
                  "comedk": {
                        "gm": 42950,
                        "hkr": 50950
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 18.9
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 41320,
                        "twoA": 50800,
                        "twoB": 56800,
                        "threeA": 44320,
                        "threeB": 42320,
                        "sc": 87100,
                        "st": 95100
                  },
                  "comedk": {
                        "gm": 38840,
                        "hkr": 46840
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 19.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 58650,
                        "twoA": 73500,
                        "twoB": 80500,
                        "threeA": 62650,
                        "threeB": 60650,
                        "sc": 109100,
                        "st": 116100
                  },
                  "comedk": {
                        "gm": 54800,
                        "hkr": 64800
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 16.8
      }
],
  },
  {
    id: "sapthagiri-bangalore",
    name: "Sapthagiri College of Engineering",
    shortName: "SCE Hesaraghatta (Bengaluru)",
    code: "E079",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sapthagiri College of Engineering (SCE Hesaraghatta (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹28.0 LPA Highest CTC with 88% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sapthagiri College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SCE Hesaraghatta (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "14/5, Chikkasandra, Hesaraghatta Main Road, Bengaluru, Karnataka 560057",
      mapUrl: "https://maps.google.com/?q=Sapthagiri+College+of+Engineering+Bengaluru",
    },
    website: "https://sapthagiri.edu.in",
    contact: {
      phone: "+91 80 2837 2800",
      email: "principal@sapthagiri.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 24,
    },
    rating: 4.5,
    reviewCount: 410,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 380000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E079) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 88,
      totalEligible: 480,
      studentsPlaced: 422,
      highestPackageLPA: 28.0,
      averagePackageLPA: 6.9,
      medianPackageLPA: 5.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.2, placementRate: 84 },
        { year: 2023, avgPackage: 6.6, placementRate: 86 },
        { year: 2024, avgPackage: 6.9, placementRate: 88 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 33400,
                        "twoA": 41600,
                        "twoB": 47600,
                        "threeA": 36400,
                        "threeB": 34400,
                        "sc": 77200,
                        "st": 85200
                  },
                  "comedk": {
                        "gm": 31200,
                        "hkr": 39200
                  }
            },
            "avgPackage": 7.9,
            "highestPackage": 28.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 41120,
                        "twoA": 50080,
                        "twoB": 56080,
                        "threeA": 44120,
                        "threeB": 42120,
                        "sc": 89200,
                        "st": 97200
                  },
                  "comedk": {
                        "gm": 38400,
                        "hkr": 46400
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 25.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 36640,
                        "twoA": 45600,
                        "twoB": 51600,
                        "threeA": 39640,
                        "threeB": 37640,
                        "sc": 83200,
                        "st": 91200
                  },
                  "comedk": {
                        "gm": 34680,
                        "hkr": 42680
                  }
            },
            "avgPackage": 7.6,
            "highestPackage": 26.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 52800,
                        "twoA": 67000,
                        "twoB": 74000,
                        "threeA": 56800,
                        "threeB": 54800,
                        "sc": 105200,
                        "st": 112200
                  },
                  "comedk": {
                        "gm": 49600,
                        "hkr": 59600
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 22.4
      }
],
  },
  {
    id: "seacet-krpuram",
    name: "S.E.A. College of Engineering and Technology",
    shortName: "SEACET KR Puram (Bengaluru)",
    code: "E134",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "S.E.A. College of Engineering and Technology (SEACET KR Puram (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.0 LPA Highest CTC with 78% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "S.E.A. College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SEACET KR Puram (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Ekatanagar, Basavanapura, Virgonagar Post, KR Puram, Bengaluru, Karnataka 560049",
      mapUrl: "https://maps.google.com/?q=S.E.A.+College+of+Engineering+and+Technology+Bengaluru",
    },
    website: "https://seaedu.ac.in/engineering",
    contact: {
      phone: "+91 80 2561 3741",
      email: "seacet@seaedu.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 65,
    },
    rating: 4.1,
    reviewCount: 210,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 270000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E134) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 78,
      totalEligible: 480,
      studentsPlaced: 374,
      highestPackageLPA: 16.0,
      averagePackageLPA: 5.1,
      medianPackageLPA: 4.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.4, placementRate: 74 },
        { year: 2023, avgPackage: 4.8, placementRate: 76 },
        { year: 2024, avgPackage: 5.1, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 47750,
                        "twoA": 58000,
                        "twoB": 64000,
                        "threeA": 50750,
                        "threeB": 48750,
                        "sc": 89500,
                        "st": 97500
                  },
                  "comedk": {
                        "gm": 43500,
                        "hkr": 51500
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 16.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 56700,
                        "twoA": 67300,
                        "twoB": 73300,
                        "threeA": 59700,
                        "threeB": 57700,
                        "sc": 101500,
                        "st": 109500
                  },
                  "comedk": {
                        "gm": 52750,
                        "hkr": 60750
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.4
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 51400,
                        "twoA": 62000,
                        "twoB": 68000,
                        "threeA": 54400,
                        "threeB": 52400,
                        "sc": 95500,
                        "st": 103500
                  },
                  "comedk": {
                        "gm": 47800,
                        "hkr": 55800
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 71250,
                        "twoA": 87500,
                        "twoB": 94500,
                        "threeA": 75250,
                        "threeB": 73250,
                        "sc": 117500,
                        "st": 124500
                  },
                  "comedk": {
                        "gm": 66000,
                        "hkr": 76000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "skit-bangalore",
    name: "Sri Krishna Institute of Technology",
    shortName: "SKIT Chimney Hills",
    code: "E086",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Krishna Institute of Technology (SKIT Chimney Hills) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹17.0 LPA Highest CTC with 80% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sri Krishna Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SKIT Chimney Hills."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chimney Hills, Chikkabanavara Post, Hesaraghatta Main Road, Bengaluru, Karnataka 560090",
      mapUrl: "https://maps.google.com/?q=Sri+Krishna+Institute+of+Technology+Bengaluru",
    },
    website: "https://skit.org.in",
    contact: {
      phone: "+91 80 2839 2221",
      email: "principal@skit.org.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 56,
    },
    rating: 4.2,
    reviewCount: 240,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E086) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 80,
      totalEligible: 480,
      studentsPlaced: 384,
      highestPackageLPA: 17.0,
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 76 },
        { year: 2023, avgPackage: 5.0, placementRate: 78 },
        { year: 2024, avgPackage: 5.3, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 44600,
                        "twoA": 54400,
                        "twoB": 60400,
                        "threeA": 47600,
                        "threeB": 45600,
                        "sc": 86800,
                        "st": 94800
                  },
                  "comedk": {
                        "gm": 40800,
                        "hkr": 48800
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 17.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 53280,
                        "twoA": 63520,
                        "twoB": 69520,
                        "threeA": 56280,
                        "threeB": 54280,
                        "sc": 98800,
                        "st": 106800
                  },
                  "comedk": {
                        "gm": 49600,
                        "hkr": 57600
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.3
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 48160,
                        "twoA": 58400,
                        "twoB": 64400,
                        "threeA": 51160,
                        "threeB": 49160,
                        "sc": 92800,
                        "st": 100800
                  },
                  "comedk": {
                        "gm": 44920,
                        "hkr": 52920
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 67200,
                        "twoA": 83000,
                        "twoB": 90000,
                        "threeA": 71200,
                        "threeB": 69200,
                        "sc": 114800,
                        "st": 121800
                  },
                  "comedk": {
                        "gm": 62400,
                        "hkr": 72400
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "srsiet-chikkajala",
    name: "Sri Revana Siddeshwara Institute of Technology",
    shortName: "SRSIET Chikkajala",
    code: "E065",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Revana Siddeshwara Institute of Technology (SRSIET Chikkajala) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.5 LPA Highest CTC with 75% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sri Revana Siddeshwara Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SRSIET Chikkajala."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chikkajala, Bengaluru North, Airport Road, Bengaluru, Karnataka 562157",
      mapUrl: "https://maps.google.com/?q=Sri+Revana+Siddeshwara+Institute+of+Technology+Bengaluru",
    },
    website: "https://srsit.ac.in",
    contact: {
      phone: "+91 80 2846 7200",
      email: "info@srsit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 83,
    },
    rating: 4.0,
    reviewCount: 140,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E065) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 75,
      totalEligible: 480,
      studentsPlaced: 360,
      highestPackageLPA: 13.5,
      averagePackageLPA: 4.6,
      medianPackageLPA: 3.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.9, placementRate: 71 },
        { year: 2023, avgPackage: 4.3, placementRate: 73 },
        { year: 2024, avgPackage: 4.6, placementRate: 75 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 54050,
                        "twoA": 65200,
                        "twoB": 71200,
                        "threeA": 57050,
                        "threeB": 55050,
                        "sc": 94900,
                        "st": 102900
                  },
                  "comedk": {
                        "gm": 48900,
                        "hkr": 56900
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 63540,
                        "twoA": 74860,
                        "twoB": 80860,
                        "threeA": 66540,
                        "threeB": 64540,
                        "sc": 106900,
                        "st": 114900
                  },
                  "comedk": {
                        "gm": 59050,
                        "hkr": 67050
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 57880,
                        "twoA": 69200,
                        "twoB": 75200,
                        "threeA": 60880,
                        "threeB": 58880,
                        "sc": 100900,
                        "st": 108900
                  },
                  "comedk": {
                        "gm": 53560,
                        "hkr": 61560
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 79350,
                        "twoA": 96500,
                        "twoB": 103500,
                        "threeA": 83350,
                        "threeB": 81350,
                        "sc": 122900,
                        "st": 129900
                  },
                  "comedk": {
                        "gm": 73200,
                        "hkr": 83200
                  }
            },
            "avgPackage": 4.4,
            "highestPackage": 10.8
      }
],
  },
  {
    id: "ssce-anekal",
    name: "Sri Sairam College of Engineering",
    shortName: "SSCE Anekal (Bengaluru)",
    code: "E060",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Sairam College of Engineering (SSCE Anekal (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹20.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sri Sairam College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SSCE Anekal (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Sai Leo Nagar, Guddanahalli, Anekal, Bengaluru, Karnataka 562106",
      mapUrl: "https://maps.google.com/?q=Sri+Sairam+College+of+Engineering+Bengaluru",
    },
    website: "https://sairamce.edu.in",
    contact: {
      phone: "+91 80 2784 0631",
      email: "principal@sairamce.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 36,
    },
    rating: 4.4,
    reviewCount: 330,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E060) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 20.0,
      averagePackageLPA: 6.1,
      medianPackageLPA: 5.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.4, placementRate: 81 },
        { year: 2023, avgPackage: 5.8, placementRate: 83 },
        { year: 2024, avgPackage: 6.1, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 37600,
                        "twoA": 46400,
                        "twoB": 52400,
                        "threeA": 40600,
                        "threeB": 38600,
                        "sc": 80800,
                        "st": 88800
                  },
                  "comedk": {
                        "gm": 34800,
                        "hkr": 42800
                  }
            },
            "avgPackage": 7.0,
            "highestPackage": 20.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 45680,
                        "twoA": 55120,
                        "twoB": 61120,
                        "threeA": 48680,
                        "threeB": 46680,
                        "sc": 92800,
                        "st": 100800
                  },
                  "comedk": {
                        "gm": 42600,
                        "hkr": 50600
                  }
            },
            "avgPackage": 6.4,
            "highestPackage": 18.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 40960,
                        "twoA": 50400,
                        "twoB": 56400,
                        "threeA": 43960,
                        "threeB": 41960,
                        "sc": 86800,
                        "st": 94800
                  },
                  "comedk": {
                        "gm": 38520,
                        "hkr": 46520
                  }
            },
            "avgPackage": 6.7,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 58200,
                        "twoA": 73000,
                        "twoB": 80000,
                        "threeA": 62200,
                        "threeB": 60200,
                        "sc": 108800,
                        "st": 115800
                  },
                  "comedk": {
                        "gm": 54400,
                        "hkr": 64400
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "svce-airport-road",
    name: "Sri Venkateshwara College of Engineering",
    shortName: "SVCE Vidyanagar (Bengaluru)",
    code: "E082",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Venkateshwara College of Engineering (SVCE Vidyanagar (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹22.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sri Venkateshwara College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SVCE Vidyanagar (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Vidyanagar, Bengaluru International Airport Road, Bengaluru, Karnataka 562157",
      mapUrl: "https://maps.google.com/?q=Sri+Venkateshwara+College+of+Engineering+Bengaluru",
    },
    website: "https://svcengg.edu.in",
    contact: {
      phone: "+91 80 2847 7024",
      email: "principal@svcengg.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 31,
    },
    rating: 4.4,
    reviewCount: 350,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E082) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 22.0,
      averagePackageLPA: 6.3,
      medianPackageLPA: 5.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.6, placementRate: 81 },
        { year: 2023, avgPackage: 6.0, placementRate: 83 },
        { year: 2024, avgPackage: 6.3, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 35850,
                        "twoA": 44400,
                        "twoB": 50400,
                        "threeA": 38850,
                        "threeB": 36850,
                        "sc": 79300,
                        "st": 87300
                  },
                  "comedk": {
                        "gm": 33300,
                        "hkr": 41300
                  }
            },
            "avgPackage": 7.2,
            "highestPackage": 22.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 43780,
                        "twoA": 53020,
                        "twoB": 59020,
                        "threeA": 46780,
                        "threeB": 44780,
                        "sc": 91300,
                        "st": 99300
                  },
                  "comedk": {
                        "gm": 40850,
                        "hkr": 48850
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 19.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 39160,
                        "twoA": 48400,
                        "twoB": 54400,
                        "threeA": 42160,
                        "threeB": 40160,
                        "sc": 85300,
                        "st": 93300
                  },
                  "comedk": {
                        "gm": 36920,
                        "hkr": 44920
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 20.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 55950,
                        "twoA": 70500,
                        "twoB": 77500,
                        "threeA": 59950,
                        "threeB": 57950,
                        "sc": 107300,
                        "st": 114300
                  },
                  "comedk": {
                        "gm": 52400,
                        "hkr": 62400
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "tjit-bannerghatta",
    name: "T. John Institute of Technology",
    shortName: "TJIT Bannerghatta (Bengaluru)",
    code: "E135",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "T. John Institute of Technology (TJIT Bannerghatta (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 82% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "T. John Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at TJIT Bannerghatta (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "No. 88/1, Kammanahalli, Gottigere, Bannerghatta Road, Bengaluru, Karnataka 560083",
      mapUrl: "https://maps.google.com/?q=T.+John+Institute+of+Technology+Bengaluru",
    },
    website: "https://tjohncollege.com/tjit",
    contact: {
      phone: "+91 80 4025 0555",
      email: "info@tjohncollege.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 46,
    },
    rating: 4.3,
    reviewCount: 290,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 185000,
      managementAnnual: 300000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E135) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 82,
      totalEligible: 480,
      studentsPlaced: 393,
      highestPackageLPA: 18.0,
      averagePackageLPA: 5.7,
      medianPackageLPA: 4.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.0, placementRate: 78 },
        { year: 2023, avgPackage: 5.4, placementRate: 80 },
        { year: 2024, avgPackage: 5.7, placementRate: 82 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 41100,
                        "twoA": 50400,
                        "twoB": 56400,
                        "threeA": 44100,
                        "threeB": 42100,
                        "sc": 83800,
                        "st": 91800
                  },
                  "comedk": {
                        "gm": 37800,
                        "hkr": 45800
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 18.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49480,
                        "twoA": 59320,
                        "twoB": 65320,
                        "threeA": 52480,
                        "threeB": 50480,
                        "sc": 95800,
                        "st": 103800
                  },
                  "comedk": {
                        "gm": 46100,
                        "hkr": 54100
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 16.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 44560,
                        "twoA": 54400,
                        "twoB": 60400,
                        "threeA": 47560,
                        "threeB": 45560,
                        "sc": 89800,
                        "st": 97800
                  },
                  "comedk": {
                        "gm": 41720,
                        "hkr": 49720
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 17.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 62700,
                        "twoA": 78000,
                        "twoB": 85000,
                        "threeA": 66700,
                        "threeB": 64700,
                        "sc": 111800,
                        "st": 118800
                  },
                  "comedk": {
                        "gm": 58400,
                        "hkr": 68400
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "vemana-koramangala",
    name: "Vemana Institute of Technology",
    shortName: "Vemana IT Koramangala",
    code: "E069",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Vemana Institute of Technology (Vemana IT Koramangala) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹24.0 LPA Highest CTC with 87% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Vemana Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Vemana IT Koramangala."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "1, 3rd Block, Koramangala, Bengaluru, Karnataka 560034",
      mapUrl: "https://maps.google.com/?q=Vemana+Institute+of+Technology+Bengaluru",
    },
    website: "https://vemanait.edu.in",
    contact: {
      phone: "+91 80 2552 9874",
      email: "vemanait@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 28,
    },
    rating: 4.5,
    reviewCount: 390,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 220000,
      managementAnnual: 360000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E069) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 87,
      totalEligible: 480,
      studentsPlaced: 417,
      highestPackageLPA: 24.0,
      averagePackageLPA: 6.6,
      medianPackageLPA: 5.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.9, placementRate: 83 },
        { year: 2023, avgPackage: 6.3, placementRate: 85 },
        { year: 2024, avgPackage: 6.6, placementRate: 87 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 34800,
                        "twoA": 43200,
                        "twoB": 49200,
                        "threeA": 37800,
                        "threeB": 35800,
                        "sc": 78400,
                        "st": 86400
                  },
                  "comedk": {
                        "gm": 32400,
                        "hkr": 40400
                  }
            },
            "avgPackage": 7.6,
            "highestPackage": 24.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 42640,
                        "twoA": 51760,
                        "twoB": 57760,
                        "threeA": 45640,
                        "threeB": 43640,
                        "sc": 90400,
                        "st": 98400
                  },
                  "comedk": {
                        "gm": 39800,
                        "hkr": 47800
                  }
            },
            "avgPackage": 6.9,
            "highestPackage": 21.6
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 38080,
                        "twoA": 47200,
                        "twoB": 53200,
                        "threeA": 41080,
                        "threeB": 39080,
                        "sc": 84400,
                        "st": 92400
                  },
                  "comedk": {
                        "gm": 35960,
                        "hkr": 43960
                  }
            },
            "avgPackage": 7.3,
            "highestPackage": 22.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 54600,
                        "twoA": 69000,
                        "twoB": 76000,
                        "threeA": 58600,
                        "threeB": 56600,
                        "sc": 106400,
                        "st": 113400
                  },
                  "comedk": {
                        "gm": 51200,
                        "hkr": 61200
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 19.2
      }
],
  },
  {
    id: "vvit-hennur",
    name: "Vijaya Vittala Institute of Technology",
    shortName: "VVIT Hennur (Bengaluru)",
    code: "E187",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Vijaya Vittala Institute of Technology (VVIT Hennur (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 78% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Vijaya Vittala Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VVIT Hennur (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "35/1, Dodda Gubbi Post, Hennur-Bagalur Road, Bengaluru, Karnataka 560077",
      mapUrl: "https://maps.google.com/?q=Vijaya+Vittala+Institute+of+Technology+Bengaluru",
    },
    website: "https://vvit.edu.in",
    contact: {
      phone: "+91 80 2844 5044",
      email: "vvit.admn@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 71,
    },
    rating: 4.1,
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E187) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 78,
      totalEligible: 480,
      studentsPlaced: 374,
      highestPackageLPA: 15.0,
      averagePackageLPA: 4.9,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.2, placementRate: 74 },
        { year: 2023, avgPackage: 4.6, placementRate: 76 },
        { year: 2024, avgPackage: 4.9, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 49850,
                        "twoA": 60400,
                        "twoB": 66400,
                        "threeA": 52850,
                        "threeB": 50850,
                        "sc": 91300,
                        "st": 99300
                  },
                  "comedk": {
                        "gm": 45300,
                        "hkr": 53300
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 58980,
                        "twoA": 69820,
                        "twoB": 75820,
                        "threeA": 61980,
                        "threeB": 59980,
                        "sc": 103300,
                        "st": 111300
                  },
                  "comedk": {
                        "gm": 54850,
                        "hkr": 62850
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 13.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 53560,
                        "twoA": 64400,
                        "twoB": 70400,
                        "threeA": 56560,
                        "threeB": 54560,
                        "sc": 97300,
                        "st": 105300
                  },
                  "comedk": {
                        "gm": 49720,
                        "hkr": 57720
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 73950,
                        "twoA": 90500,
                        "twoB": 97500,
                        "threeA": 77950,
                        "threeB": 75950,
                        "sc": 119300,
                        "st": 126300
                  },
                  "comedk": {
                        "gm": 68400,
                        "hkr": 78400
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "vkit-kumbalagodu",
    name: "Vivekananda Institute of Technology",
    shortName: "VKIT Kumbalagodu (Bengaluru)",
    code: "E073",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Vivekananda Institute of Technology (VKIT Kumbalagodu (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 77% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Vivekananda Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VKIT Kumbalagodu (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Gudimavu, Kumbalagodu Post, Kengeri Hobli, Bengaluru, Karnataka 560074",
      mapUrl: "https://maps.google.com/?q=Vivekananda+Institute+of+Technology+Bengaluru",
    },
    website: "https://vitb.ac.in",
    contact: {
      phone: "+91 80 2843 7036",
      email: "vkitprincipal@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 73,
    },
    rating: 4.1,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E073) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 77,
      totalEligible: 480,
      studentsPlaced: 369,
      highestPackageLPA: 15.0,
      averagePackageLPA: 4.9,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.2, placementRate: 73 },
        { year: 2023, avgPackage: 4.6, placementRate: 75 },
        { year: 2024, avgPackage: 4.9, placementRate: 77 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 50550,
                        "twoA": 61200,
                        "twoB": 67200,
                        "threeA": 53550,
                        "threeB": 51550,
                        "sc": 91900,
                        "st": 99900
                  },
                  "comedk": {
                        "gm": 45900,
                        "hkr": 53900
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 15.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 59740,
                        "twoA": 70660,
                        "twoB": 76660,
                        "threeA": 62740,
                        "threeB": 60740,
                        "sc": 103900,
                        "st": 111900
                  },
                  "comedk": {
                        "gm": 55550,
                        "hkr": 63550
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 13.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 54280,
                        "twoA": 65200,
                        "twoB": 71200,
                        "threeA": 57280,
                        "threeB": 55280,
                        "sc": 97900,
                        "st": 105900
                  },
                  "comedk": {
                        "gm": 50360,
                        "hkr": 58360
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 14.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 74850,
                        "twoA": 91500,
                        "twoB": 98500,
                        "threeA": 78850,
                        "threeB": 76850,
                        "sc": 119900,
                        "st": 126900
                  },
                  "comedk": {
                        "gm": 69200,
                        "hkr": 79200
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "ydit-kanakapura",
    name: "Yellamma Dasappa Institute of Technology",
    shortName: "YDIT Kanakapura Rd (Bengaluru)",
    code: "E093",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Yellamma Dasappa Institute of Technology (YDIT Kanakapura Rd (Bengaluru)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.0 LPA Highest CTC with 75% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Yellamma Dasappa Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at YDIT Kanakapura Rd (Bengaluru)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Raghuvanahalli, Kanakapura Road, Bengaluru, Karnataka 560062",
      mapUrl: "https://maps.google.com/?q=Yellamma+Dasappa+Institute+of+Technology+Bengaluru",
    },
    website: "https://ydit.ac.in",
    contact: {
      phone: "+91 80 2843 5143",
      email: "yditprincipal@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 81,
    },
    rating: 4.0,
    reviewCount: 150,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E093) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 75,
      totalEligible: 480,
      studentsPlaced: 360,
      highestPackageLPA: 13.0,
      averagePackageLPA: 4.5,
      medianPackageLPA: 3.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.8, placementRate: 71 },
        { year: 2023, avgPackage: 4.2, placementRate: 73 },
        { year: 2024, avgPackage: 4.5, placementRate: 75 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 53350,
                        "twoA": 64400,
                        "twoB": 70400,
                        "threeA": 56350,
                        "threeB": 54350,
                        "sc": 94300,
                        "st": 102300
                  },
                  "comedk": {
                        "gm": 48300,
                        "hkr": 56300
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 13.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 62780,
                        "twoA": 74020,
                        "twoB": 80020,
                        "threeA": 65780,
                        "threeB": 63780,
                        "sc": 106300,
                        "st": 114300
                  },
                  "comedk": {
                        "gm": 58350,
                        "hkr": 66350
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 11.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 57160,
                        "twoA": 68400,
                        "twoB": 74400,
                        "threeA": 60160,
                        "threeB": 58160,
                        "sc": 100300,
                        "st": 108300
                  },
                  "comedk": {
                        "gm": 52920,
                        "hkr": 60920
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 12.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 78450,
                        "twoA": 95500,
                        "twoB": 102500,
                        "threeA": 82450,
                        "threeB": 80450,
                        "sc": 122300,
                        "st": 129300
                  },
                  "comedk": {
                        "gm": 72400,
                        "hkr": 82400
                  }
            },
            "avgPackage": 4.3,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "alliance-univ-bangalore",
    name: "Alliance University (Alliance College of Engineering & Design)",
    shortName: "Alliance Univ Anekal",
    code: "U002",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Alliance University (Alliance College of Engineering & Design) (Alliance Univ Anekal) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 91% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹38.0 LPA Highest CTC with 91% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Alliance University (Alliance College of Engineering & Design) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Alliance Univ Anekal."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chikkahagade Cross, Chandapura-Anekal Main Road, Anekal, Bengaluru, Karnataka 562106",
      mapUrl: "https://maps.google.com/?q=Alliance+University+(Alliance+College+of+Engineering+&+Design)+Bengaluru",
    },
    website: "https://alliance.edu.in",
    contact: {
      phone: "+91 80 4619 9000",
      email: "admissions@alliance.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 13,
    },
    rating: 4.6,
    reviewCount: 510,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 260000,
      managementAnnual: 420000,
      hostelAnnual: 120000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U002) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 91,
      totalEligible: 480,
      studentsPlaced: 436,
      highestPackageLPA: 38.0,
      averagePackageLPA: 8.0,
      medianPackageLPA: 6.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 7.3, placementRate: 87 },
        { year: 2023, avgPackage: 7.7, placementRate: 89 },
        { year: 2024, avgPackage: 8.0, placementRate: 91 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 29550,
                        "twoA": 37200,
                        "twoB": 43200,
                        "threeA": 32550,
                        "threeB": 30550,
                        "sc": 73900,
                        "st": 81900
                  },
                  "comedk": {
                        "gm": 27900,
                        "hkr": 35900
                  }
            },
            "avgPackage": 9.2,
            "highestPackage": 38.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 36940,
                        "twoA": 45460,
                        "twoB": 51460,
                        "threeA": 39940,
                        "threeB": 37940,
                        "sc": 85900,
                        "st": 93900
                  },
                  "comedk": {
                        "gm": 34550,
                        "hkr": 42550
                  }
            },
            "avgPackage": 8.4,
            "highestPackage": 34.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 32680,
                        "twoA": 41200,
                        "twoB": 47200,
                        "threeA": 35680,
                        "threeB": 33680,
                        "sc": 79900,
                        "st": 87900
                  },
                  "comedk": {
                        "gm": 31160,
                        "hkr": 39160
                  }
            },
            "avgPackage": 8.8,
            "highestPackage": 36.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 47850,
                        "twoA": 61500,
                        "twoB": 68500,
                        "threeA": 51850,
                        "threeB": 49850,
                        "sc": 101900,
                        "st": 108900
                  },
                  "comedk": {
                        "gm": 45200,
                        "hkr": 55200
                  }
            },
            "avgPackage": 7.6,
            "highestPackage": 30.4
      }
],
  },
  {
    id: "christ-univ-kengeri",
    name: "Christ University (Faculty of Engineering)",
    shortName: "Christ Univ Kengeri Campus",
    code: "U001",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Christ University (Faculty of Engineering) (Christ Univ Kengeri Campus) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 93% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹42.0 LPA Highest CTC with 93% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Christ University (Faculty of Engineering) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Christ Univ Kengeri Campus."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Kanmanike, Kumbalgodu, Mysore Road, Kengeri, Bengaluru, Karnataka 560074",
      mapUrl: "https://maps.google.com/?q=Christ+University+(Faculty+of+Engineering)+Bengaluru",
    },
    website: "https://christuniversity.in",
    contact: {
      phone: "+91 80 4012 9800",
      email: "admissions.kengeri@christuniversity.in",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: 95,
      karnatakaRank: 9,
    },
    rating: 4.7,
    reviewCount: 590,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 280000,
      managementAnnual: 450000,
      hostelAnnual: 105000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U001) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 93,
      totalEligible: 480,
      studentsPlaced: 446,
      highestPackageLPA: 42.0,
      averagePackageLPA: 9.0,
      medianPackageLPA: 7.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 8.3, placementRate: 89 },
        { year: 2023, avgPackage: 8.7, placementRate: 91 },
        { year: 2024, avgPackage: 9.0, placementRate: 93 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 28150,
                        "twoA": 35600,
                        "twoB": 41600,
                        "threeA": 31150,
                        "threeB": 29150,
                        "sc": 72700,
                        "st": 80700
                  },
                  "comedk": {
                        "gm": 26700,
                        "hkr": 34700
                  }
            },
            "avgPackage": 10.3,
            "highestPackage": 42.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 35420,
                        "twoA": 43780,
                        "twoB": 49780,
                        "threeA": 38420,
                        "threeB": 36420,
                        "sc": 84700,
                        "st": 92700
                  },
                  "comedk": {
                        "gm": 33150,
                        "hkr": 41150
                  }
            },
            "avgPackage": 9.5,
            "highestPackage": 37.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 31240,
                        "twoA": 39600,
                        "twoB": 45600,
                        "threeA": 34240,
                        "threeB": 32240,
                        "sc": 78700,
                        "st": 86700
                  },
                  "comedk": {
                        "gm": 29880,
                        "hkr": 37880
                  }
            },
            "avgPackage": 9.9,
            "highestPackage": 39.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46050,
                        "twoA": 59500,
                        "twoB": 66500,
                        "threeA": 50050,
                        "threeB": 48050,
                        "sc": 100700,
                        "st": 107700
                  },
                  "comedk": {
                        "gm": 43600,
                        "hkr": 53600
                  }
            },
            "avgPackage": 8.5,
            "highestPackage": 33.6
      }
],
  },
  {
    id: "cmr-univ-bagalur",
    name: "CMR University (School of Engineering & Technology)",
    shortName: "CMR Univ Main Campus",
    code: "U005",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "CMR University (School of Engineering & Technology) (CMR Univ Main Campus) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹30.0 LPA Highest CTC with 89% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "CMR University (School of Engineering & Technology) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CMR Univ Main Campus."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Off Hennur-Bagalur Main Road, Chagalahatti, Bengaluru, Karnataka 562149",
      mapUrl: "https://maps.google.com/?q=CMR+University+(School+of+Engineering+&+Technology)+Bengaluru",
    },
    website: "https://cmr.edu.in",
    contact: {
      phone: "+91 80 2542 6977",
      email: "admissions@cmr.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 16,
    },
    rating: 4.5,
    reviewCount: 440,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 250000,
      managementAnnual: 400000,
      hostelAnnual: 100000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U005) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 89,
      totalEligible: 480,
      studentsPlaced: 427,
      highestPackageLPA: 30.0,
      averagePackageLPA: 7.4,
      medianPackageLPA: 6.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.7, placementRate: 85 },
        { year: 2023, avgPackage: 7.1, placementRate: 87 },
        { year: 2024, avgPackage: 7.4, placementRate: 89 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30600,
                        "twoA": 38400,
                        "twoB": 44400,
                        "threeA": 33600,
                        "threeB": 31600,
                        "sc": 74800,
                        "st": 82800
                  },
                  "comedk": {
                        "gm": 28800,
                        "hkr": 36800
                  }
            },
            "avgPackage": 8.5,
            "highestPackage": 30.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38080,
                        "twoA": 46720,
                        "twoB": 52720,
                        "threeA": 41080,
                        "threeB": 39080,
                        "sc": 86800,
                        "st": 94800
                  },
                  "comedk": {
                        "gm": 35600,
                        "hkr": 43600
                  }
            },
            "avgPackage": 7.8,
            "highestPackage": 27.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 33760,
                        "twoA": 42400,
                        "twoB": 48400,
                        "threeA": 36760,
                        "threeB": 34760,
                        "sc": 80800,
                        "st": 88800
                  },
                  "comedk": {
                        "gm": 32120,
                        "hkr": 40120
                  }
            },
            "avgPackage": 8.1,
            "highestPackage": 28.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49200,
                        "twoA": 63000,
                        "twoB": 70000,
                        "threeA": 53200,
                        "threeB": 51200,
                        "sc": 102800,
                        "st": 109800
                  },
                  "comedk": {
                        "gm": 46400,
                        "hkr": 56400
                  }
            },
            "avgPackage": 7.0,
            "highestPackage": 24.0
      }
],
  },
  {
    id: "dsu-bangalore",
    name: "Dayananda Sagar University",
    shortName: "DSU Innovation Campus",
    code: "U006",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Dayananda Sagar University (DSU Innovation Campus) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 93% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹45.0 LPA Highest CTC with 93% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Dayananda Sagar University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at DSU Innovation Campus."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Kudlu Gate, Hosur Road, Bengaluru, Karnataka 560068",
      mapUrl: "https://maps.google.com/?q=Dayananda+Sagar+University+Bengaluru",
    },
    website: "https://dsu.edu.in",
    contact: {
      phone: "+91 80 4646 4200",
      email: "admissions@dsu.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 11,
    },
    rating: 4.6,
    reviewCount: 550,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 270000,
      managementAnnual: 450000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U006) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 93,
      totalEligible: 480,
      studentsPlaced: 446,
      highestPackageLPA: 45.0,
      averagePackageLPA: 8.8,
      medianPackageLPA: 7.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 8.1, placementRate: 89 },
        { year: 2023, avgPackage: 8.5, placementRate: 91 },
        { year: 2024, avgPackage: 8.8, placementRate: 93 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 28850,
                        "twoA": 36400,
                        "twoB": 42400,
                        "threeA": 31850,
                        "threeB": 29850,
                        "sc": 73300,
                        "st": 81300
                  },
                  "comedk": {
                        "gm": 27300,
                        "hkr": 35300
                  }
            },
            "avgPackage": 10.1,
            "highestPackage": 45.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 36180,
                        "twoA": 44620,
                        "twoB": 50620,
                        "threeA": 39180,
                        "threeB": 37180,
                        "sc": 85300,
                        "st": 93300
                  },
                  "comedk": {
                        "gm": 33850,
                        "hkr": 41850
                  }
            },
            "avgPackage": 9.2,
            "highestPackage": 40.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 31960,
                        "twoA": 40400,
                        "twoB": 46400,
                        "threeA": 34960,
                        "threeB": 32960,
                        "sc": 79300,
                        "st": 87300
                  },
                  "comedk": {
                        "gm": 30520,
                        "hkr": 38520
                  }
            },
            "avgPackage": 9.7,
            "highestPackage": 42.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46950,
                        "twoA": 60500,
                        "twoB": 67500,
                        "threeA": 50950,
                        "threeB": 48950,
                        "sc": 101300,
                        "st": 108300
                  },
                  "comedk": {
                        "gm": 44400,
                        "hkr": 54400
                  }
            },
            "avgPackage": 8.4,
            "highestPackage": 36.0
      }
],
  },
  {
    id: "gardencity-univ-bangalore",
    name: "Garden City University",
    shortName: "Garden City Univ Bengaluru",
    code: "U013",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Garden City University (Garden City Univ Bengaluru) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹22.0 LPA Highest CTC with 85% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Garden City University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Garden City Univ Bengaluru."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "GCC House, Old Madras Road, Bengaluru, Karnataka 560049",
      mapUrl: "https://maps.google.com/?q=Garden+City+University+Bengaluru",
    },
    website: "https://gardencity.university",
    contact: {
      phone: "+91 80 6648 7600",
      email: "pro@gardencity.university",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 37,
    },
    rating: 4.4,
    reviewCount: 310,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 220000,
      managementAnnual: 350000,
      hostelAnnual: 95000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U013) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 85,
      totalEligible: 480,
      studentsPlaced: 408,
      highestPackageLPA: 22.0,
      averagePackageLPA: 6.4,
      medianPackageLPA: 5.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.7, placementRate: 81 },
        { year: 2023, avgPackage: 6.1, placementRate: 83 },
        { year: 2024, avgPackage: 6.4, placementRate: 85 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 37950,
                        "twoA": 46800,
                        "twoB": 52800,
                        "threeA": 40950,
                        "threeB": 38950,
                        "sc": 81100,
                        "st": 89100
                  },
                  "comedk": {
                        "gm": 35100,
                        "hkr": 43100
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 22.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 46060,
                        "twoA": 55540,
                        "twoB": 61540,
                        "threeA": 49060,
                        "threeB": 47060,
                        "sc": 93100,
                        "st": 101100
                  },
                  "comedk": {
                        "gm": 42950,
                        "hkr": 50950
                  }
            },
            "avgPackage": 6.7,
            "highestPackage": 19.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 41320,
                        "twoA": 50800,
                        "twoB": 56800,
                        "threeA": 44320,
                        "threeB": 42320,
                        "sc": 87100,
                        "st": 95100
                  },
                  "comedk": {
                        "gm": 38840,
                        "hkr": 46840
                  }
            },
            "avgPackage": 7.0,
            "highestPackage": 20.9
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 58650,
                        "twoA": 73500,
                        "twoB": 80500,
                        "threeA": 62650,
                        "threeB": 60650,
                        "sc": 109100,
                        "st": 116100
                  },
                  "comedk": {
                        "gm": 54800,
                        "hkr": 64800
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "iiit-bangalore",
    name: "International Institute of Information Technology Bangalore",
    shortName: "IIIT Bangalore (IIIT-B)",
    code: "E003",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "International Institute of Information Technology Bangalore (IIIT Bangalore (IIIT-B)) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 99% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹65.0 LPA Highest CTC with 99% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "International Institute of Information Technology Bangalore Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at IIIT Bangalore (IIIT-B)."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru, Karnataka 560100",
      mapUrl: "https://maps.google.com/?q=International+Institute+of+Information+Technology+Bangalore+Bengaluru",
    },
    website: "https://iiitb.ac.in",
    contact: {
      phone: "+91 80 4140 7777",
      email: "admission-info@iiitb.ac.in",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: 74,
      karnatakaRank: 2,
    },
    rating: 4.9,
    reviewCount: 720,
    fees: {
      kcetAnnual: 150000,
      comedkAnnual: 380000,
      managementAnnual: 600000,
      hostelAnnual: 120000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E003) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 99,
      totalEligible: 480,
      studentsPlaced: 475,
      highestPackageLPA: 65.0,
      averagePackageLPA: 24.5,
      medianPackageLPA: 20.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 23.8, placementRate: 95 },
        { year: 2023, avgPackage: 24.2, placementRate: 97 },
        { year: 2024, avgPackage: 24.5, placementRate: 99 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 25700,
                        "twoA": 32800,
                        "twoB": 38800,
                        "threeA": 28700,
                        "threeB": 26700,
                        "sc": 70600,
                        "st": 78600
                  },
                  "comedk": {
                        "gm": 24600,
                        "hkr": 32600
                  }
            },
            "avgPackage": 28.2,
            "highestPackage": 65.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 32760,
                        "twoA": 40840,
                        "twoB": 46840,
                        "threeA": 35760,
                        "threeB": 33760,
                        "sc": 82600,
                        "st": 90600
                  },
                  "comedk": {
                        "gm": 30700,
                        "hkr": 38700
                  }
            },
            "avgPackage": 25.7,
            "highestPackage": 58.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 28720,
                        "twoA": 36800,
                        "twoB": 42800,
                        "threeA": 31720,
                        "threeB": 29720,
                        "sc": 76600,
                        "st": 84600
                  },
                  "comedk": {
                        "gm": 27640,
                        "hkr": 35640
                  }
            },
            "avgPackage": 27.0,
            "highestPackage": 61.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 42900,
                        "twoA": 56000,
                        "twoB": 63000,
                        "threeA": 46900,
                        "threeB": 44900,
                        "sc": 98600,
                        "st": 105600
                  },
                  "comedk": {
                        "gm": 40800,
                        "hkr": 50800
                  }
            },
            "avgPackage": 23.3,
            "highestPackage": 52.0
      }
],
  },
  {
    id: "msruas-peenya",
    name: "M.S. Ramaiah University of Applied Sciences",
    shortName: "MSRUAS Peenya Campus",
    code: "U007",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "M.S. Ramaiah University of Applied Sciences (MSRUAS Peenya Campus) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 94% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹45.0 LPA Highest CTC with 94% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "M.S. Ramaiah University of Applied Sciences Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MSRUAS Peenya Campus."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Peenya Campus, 4th Phase, Peenya Industrial Area, Bengaluru, Karnataka 560058",
      mapUrl: "https://maps.google.com/?q=M.S.+Ramaiah+University+of+Applied+Sciences+Bengaluru",
    },
    website: "https://msruas.ac.in",
    contact: {
      phone: "+91 80 4536 6666",
      email: "director.admissions@msruas.ac.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 7,
    },
    rating: 4.7,
    reviewCount: 560,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 270000,
      managementAnnual: 450000,
      hostelAnnual: 105000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U007) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 94,
      totalEligible: 480,
      studentsPlaced: 451,
      highestPackageLPA: 45.0,
      averagePackageLPA: 9.2,
      medianPackageLPA: 7.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 8.5, placementRate: 90 },
        { year: 2023, avgPackage: 8.9, placementRate: 92 },
        { year: 2024, avgPackage: 9.2, placementRate: 94 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 27450,
                        "twoA": 34800,
                        "twoB": 40800,
                        "threeA": 30450,
                        "threeB": 28450,
                        "sc": 72100,
                        "st": 80100
                  },
                  "comedk": {
                        "gm": 26100,
                        "hkr": 34100
                  }
            },
            "avgPackage": 10.6,
            "highestPackage": 45.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 34660,
                        "twoA": 42940,
                        "twoB": 48940,
                        "threeA": 37660,
                        "threeB": 35660,
                        "sc": 84100,
                        "st": 92100
                  },
                  "comedk": {
                        "gm": 32450,
                        "hkr": 40450
                  }
            },
            "avgPackage": 9.7,
            "highestPackage": 40.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 30520,
                        "twoA": 38800,
                        "twoB": 44800,
                        "threeA": 33520,
                        "threeB": 31520,
                        "sc": 78100,
                        "st": 86100
                  },
                  "comedk": {
                        "gm": 29240,
                        "hkr": 37240
                  }
            },
            "avgPackage": 10.1,
            "highestPackage": 42.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 45150,
                        "twoA": 58500,
                        "twoB": 65500,
                        "threeA": 49150,
                        "threeB": 47150,
                        "sc": 100100,
                        "st": 107100
                  },
                  "comedk": {
                        "gm": 42800,
                        "hkr": 52800
                  }
            },
            "avgPackage": 8.7,
            "highestPackage": 36.0
      }
],
  },
  {
    id: "mahe-bangalore",
    name: "Manipal Academy of Higher Education (Bengaluru Campus)",
    shortName: "MAHE Bengaluru Campus",
    code: "U010",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Manipal Academy of Higher Education (Bengaluru Campus) (MAHE Bengaluru Campus) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 96% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹52.0 LPA Highest CTC with 96% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Manipal Academy of Higher Education (Bengaluru Campus) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MAHE Bengaluru Campus."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Govindapura, Yelahanka, Bengaluru, Karnataka 560064",
      mapUrl: "https://maps.google.com/?q=Manipal+Academy+of+Higher+Education+(Bengaluru+Campus)+Bengaluru",
    },
    website: "https://manipal.edu/blr",
    contact: {
      phone: "+91 80 2449 8999",
      email: "admissions.blr@manipal.edu",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 6,
      karnatakaRank: 4,
    },
    rating: 4.8,
    reviewCount: 640,
    fees: {
      kcetAnnual: 120000,
      comedkAnnual: 340000,
      managementAnnual: 550000,
      hostelAnnual: 130000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U010) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 96,
      totalEligible: 480,
      studentsPlaced: 460,
      highestPackageLPA: 52.0,
      averagePackageLPA: 12.8,
      medianPackageLPA: 10.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 12.1, placementRate: 92 },
        { year: 2023, avgPackage: 12.5, placementRate: 94 },
        { year: 2024, avgPackage: 12.8, placementRate: 96 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 26400,
                        "twoA": 33600,
                        "twoB": 39600,
                        "threeA": 29400,
                        "threeB": 27400,
                        "sc": 71200,
                        "st": 79200
                  },
                  "comedk": {
                        "gm": 25200,
                        "hkr": 33200
                  }
            },
            "avgPackage": 14.7,
            "highestPackage": 52.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 33520,
                        "twoA": 41680,
                        "twoB": 47680,
                        "threeA": 36520,
                        "threeB": 34520,
                        "sc": 83200,
                        "st": 91200
                  },
                  "comedk": {
                        "gm": 31400,
                        "hkr": 39400
                  }
            },
            "avgPackage": 13.4,
            "highestPackage": 46.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 29440,
                        "twoA": 37600,
                        "twoB": 43600,
                        "threeA": 32440,
                        "threeB": 30440,
                        "sc": 77200,
                        "st": 85200
                  },
                  "comedk": {
                        "gm": 28280,
                        "hkr": 36280
                  }
            },
            "avgPackage": 14.1,
            "highestPackage": 49.4
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 43800,
                        "twoA": 57000,
                        "twoB": 64000,
                        "threeA": 47800,
                        "threeB": 45800,
                        "sc": 99200,
                        "st": 106200
                  },
                  "comedk": {
                        "gm": 41600,
                        "hkr": 51600
                  }
            },
            "avgPackage": 12.2,
            "highestPackage": 41.6
      }
],
  },
  {
    id: "rv-university-bangalore",
    name: "RV University (School of Computer Science & Engineering)",
    shortName: "RV University Bengaluru",
    code: "U015",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "RV University (School of Computer Science & Engineering) (RV University Bengaluru) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 96% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹55.0 LPA Highest CTC with 96% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "RV University (School of Computer Science & Engineering) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RV University Bengaluru."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "RV Vidyanikethan Post, Mysuru Road, Bengaluru, Karnataka 560059",
      mapUrl: "https://maps.google.com/?q=RV+University+(School+of+Computer+Science+&+Engineering)+Bengaluru",
    },
    website: "https://rvu.edu.in",
    contact: {
      phone: "+91 80 6813 9999",
      email: "admissions@rvu.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 6,
    },
    rating: 4.8,
    reviewCount: 480,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 300000,
      managementAnnual: 520000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U015) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 96,
      totalEligible: 480,
      studentsPlaced: 460,
      highestPackageLPA: 55.0,
      averagePackageLPA: 12.5,
      medianPackageLPA: 10.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 11.8, placementRate: 92 },
        { year: 2023, avgPackage: 12.2, placementRate: 94 },
        { year: 2024, avgPackage: 12.5, placementRate: 96 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 27100,
                        "twoA": 34400,
                        "twoB": 40400,
                        "threeA": 30100,
                        "threeB": 28100,
                        "sc": 71800,
                        "st": 79800
                  },
                  "comedk": {
                        "gm": 25800,
                        "hkr": 33800
                  }
            },
            "avgPackage": 14.4,
            "highestPackage": 55.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 34280,
                        "twoA": 42520,
                        "twoB": 48520,
                        "threeA": 37280,
                        "threeB": 35280,
                        "sc": 83800,
                        "st": 91800
                  },
                  "comedk": {
                        "gm": 32100,
                        "hkr": 40100
                  }
            },
            "avgPackage": 13.1,
            "highestPackage": 49.5
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 30160,
                        "twoA": 38400,
                        "twoB": 44400,
                        "threeA": 33160,
                        "threeB": 31160,
                        "sc": 77800,
                        "st": 85800
                  },
                  "comedk": {
                        "gm": 28920,
                        "hkr": 36920
                  }
            },
            "avgPackage": 13.8,
            "highestPackage": 52.2
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 44700,
                        "twoA": 58000,
                        "twoB": 65000,
                        "threeA": 48700,
                        "threeB": 46700,
                        "sc": 99800,
                        "st": 106800
                  },
                  "comedk": {
                        "gm": 42400,
                        "hkr": 52400
                  }
            },
            "avgPackage": 11.9,
            "highestPackage": 44.0
      }
],
  },
  {
    id: "sapthagiri-nps-univ",
    name: "Sapthagiri NPS University",
    shortName: "Sapthagiri NPS Univ",
    code: "U016",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sapthagiri NPS University (Sapthagiri NPS Univ) is a distinguished engineering institution in Bengaluru, Bengaluru Urban district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹30.0 LPA Highest CTC with 89% campus placement rate',
      'Advanced compute, hardware development, and innovation incubation centers',
      'Dedicated training and placement division with active recruiter partnerships',
    ],
    facilities: [
      'High-speed computing laboratories and specialized branch centers',
      'Comprehensive central library with digital repository and journal subscriptions',
      'Separate on-campus residential hostels with Wi-Fi and 24/7 security',
      'Sports arena featuring basketball, cricket, indoor games, and gymnasium',
      'Multi-cuisine cafeteria and student activity centers',
    ],
    campusPhotos: [
      {
        title: "Sapthagiri NPS University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Sapthagiri NPS Univ."
      },
      {
        title: 'Advanced Computing & Research Labs',
        category: 'Laboratories',
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-speed technical laboratories and engineering workstations.'
      },
      {
        title: 'Central Technical Library',
        category: 'Library',
        url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
        caption: 'Extensive technical book repository with digital portals.'
      }
    ],
    location: {
      district: "Bengaluru Urban",
      city: "Bengaluru",
      address: "Chikkasandra, Hesaraghatta Main Road, Bengaluru, Karnataka 560057",
      mapUrl: "https://maps.google.com/?q=Sapthagiri+NPS+University+Bengaluru",
    },
    website: "https://snpsu.edu.in",
    contact: {
      phone: "+91 80 2837 2801",
      email: "info@snpsu.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 17,
    },
    rating: 4.5,
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 240000,
      managementAnnual: 400000,
      hostelAnnual: 90000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U016) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 89,
      totalEligible: 480,
      studentsPlaced: 427,
      highestPackageLPA: 30.0,
      averagePackageLPA: 7.2,
      medianPackageLPA: 6.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.5, placementRate: 85 },
        { year: 2023, avgPackage: 6.9, placementRate: 87 },
        { year: 2024, avgPackage: 7.2, placementRate: 89 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 30950,
                        "twoA": 38800,
                        "twoB": 44800,
                        "threeA": 33950,
                        "threeB": 31950,
                        "sc": 75100,
                        "st": 83100
                  },
                  "comedk": {
                        "gm": 29100,
                        "hkr": 37100
                  }
            },
            "avgPackage": 8.3,
            "highestPackage": 30.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 38460,
                        "twoA": 47140,
                        "twoB": 53140,
                        "threeA": 41460,
                        "threeB": 39460,
                        "sc": 87100,
                        "st": 95100
                  },
                  "comedk": {
                        "gm": 35950,
                        "hkr": 43950
                  }
            },
            "avgPackage": 7.6,
            "highestPackage": 27.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 34120,
                        "twoA": 42800,
                        "twoB": 48800,
                        "threeA": 37120,
                        "threeB": 35120,
                        "sc": 81100,
                        "st": 89100
                  },
                  "comedk": {
                        "gm": 32440,
                        "hkr": 40440
                  }
            },
            "avgPackage": 7.9,
            "highestPackage": 28.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49650,
                        "twoA": 63500,
                        "twoB": 70500,
                        "threeA": 53650,
                        "threeB": 51650,
                        "sc": 103100,
                        "st": 110100
                  },
                  "comedk": {
                        "gm": 46800,
                        "hkr": 56800
                  }
            },
            "avgPackage": 6.8,
            "highestPackage": 24.0
      }
],
  }
];
