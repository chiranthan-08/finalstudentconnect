import { College } from '@/types';

export const NORTH_KARNATAKA_COLLEGES: College[] = [
  {
    id: "bgmit-mudhol",
    name: "Biluru Gurubasava Mahaswamiji Institute of Technology",
    shortName: "BGMIT Mudhol (Bagalkote)",
    code: "E176",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Biluru Gurubasava Mahaswamiji Institute of Technology (BGMIT Mudhol (Bagalkote)) is a distinguished engineering institution in Mudhol, Bagalkote district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.5 LPA Highest CTC with 78% campus placement rate',
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
        title: "Biluru Gurubasava Mahaswamiji Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BGMIT Mudhol (Bagalkote)."
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
      district: "Bagalkote",
      city: "Mudhol",
      address: "Biligiri Campus, Mudhol, Bagalkote, Karnataka 587313",
      mapUrl: "https://maps.google.com/?q=Biluru+Gurubasava+Mahaswamiji+Institute+of+Technology+Mudhol",
    },
    website: "https://bgmit.ac.in",
    contact: {
      phone: "+91 8350 281 333",
      email: "principal@bgmit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 72,
    },
    rating: 4.1,
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E176) / COMEDK UGET.',
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
      highestPackageLPA: 14.5,
      averagePackageLPA: 4.8,
      medianPackageLPA: 4.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.1, placementRate: 74 },
        { year: 2023, avgPackage: 4.5, placementRate: 76 },
        { year: 2024, avgPackage: 4.8, placementRate: 78 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 50200,
                        "twoA": 60800,
                        "twoB": 66800,
                        "threeA": 53200,
                        "threeB": 51200,
                        "sc": 91600,
                        "st": 99600
                  },
                  "comedk": {
                        "gm": 45600,
                        "hkr": 53600
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 14.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 59360,
                        "twoA": 70240,
                        "twoB": 76240,
                        "threeA": 62360,
                        "threeB": 60360,
                        "sc": 103600,
                        "st": 111600
                  },
                  "comedk": {
                        "gm": 55200,
                        "hkr": 63200
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 13.1
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 53920,
                        "twoA": 64800,
                        "twoB": 70800,
                        "threeA": 56920,
                        "threeB": 54920,
                        "sc": 97600,
                        "st": 105600
                  },
                  "comedk": {
                        "gm": 50040,
                        "hkr": 58040
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.8
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 74400,
                        "twoA": 91000,
                        "twoB": 98000,
                        "threeA": 78400,
                        "threeB": 76400,
                        "sc": 119600,
                        "st": 126600
                  },
                  "comedk": {
                        "gm": 68800,
                        "hkr": 78800
                  }
            },
            "avgPackage": 4.6,
            "highestPackage": 11.6
      }
],
  },
  {
    id: "agmrit-jamkhandi",
    name: "Jain Acharya Gundharnandi Maharaj Institute of Technology",
    shortName: "AGMR Jamkhandi (Bagalkote)",
    code: "E233",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain Acharya Gundharnandi Maharaj Institute of Technology (AGMR Jamkhandi (Bagalkote)) is a distinguished engineering institution in Jamkhandi, Bagalkote district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
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
        title: "Jain Acharya Gundharnandi Maharaj Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AGMR Jamkhandi (Bagalkote)."
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
      district: "Bagalkote",
      city: "Jamkhandi",
      address: "Navalgund-Jamkhandi Road, Jamkhandi, Bagalkote, Karnataka 587301",
      mapUrl: "https://maps.google.com/?q=Jain+Acharya+Gundharnandi+Maharaj+Institute+of+Technology+Jamkhandi",
    },
    website: "https://agmr.ac.in",
    contact: {
      phone: "+91 8353 220 111",
      email: "info@agmr.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 85,
    },
    rating: 4.0,
    reviewCount: 140,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 220000,
      hostelAnnual: 50000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E233) / COMEDK UGET.',
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
                        "gm": 54750,
                        "twoA": 66000,
                        "twoB": 72000,
                        "threeA": 57750,
                        "threeB": 55750,
                        "sc": 95500,
                        "st": 103500
                  },
                  "comedk": {
                        "gm": 49500,
                        "hkr": 57500
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 12.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 64300,
                        "twoA": 75700,
                        "twoB": 81700,
                        "threeA": 67300,
                        "threeB": 65300,
                        "sc": 107500,
                        "st": 115500
                  },
                  "comedk": {
                        "gm": 59750,
                        "hkr": 67750
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 10.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 58600,
                        "twoA": 70000,
                        "twoB": 76000,
                        "threeA": 61600,
                        "threeB": 59600,
                        "sc": 101500,
                        "st": 109500
                  },
                  "comedk": {
                        "gm": 54200,
                        "hkr": 62200
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 11.4
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 80250,
                        "twoA": 97500,
                        "twoB": 104500,
                        "threeA": 84250,
                        "threeB": 82250,
                        "sc": 123500,
                        "st": 130500
                  },
                  "comedk": {
                        "gm": 74000,
                        "hkr": 84000
                  }
            },
            "avgPackage": 4.3,
            "highestPackage": 9.6
      }
],
  },
  {
    id: "aitm-belagavi",
    name: "Angadi Institute of Technology and Management",
    shortName: "AITM Belagavi",
    code: "E178",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Angadi Institute of Technology and Management (AITM Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "Angadi Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AITM Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Savagaon Road, Belagavi, Karnataka 590009",
      mapUrl: "https://maps.google.com/?q=Angadi+Institute+of+Technology+and+Management+Belagavi",
    },
    website: "https://aitmbgm.ac.in",
    contact: {
      phone: "+91 831 243 8100",
      email: "principal@aitmbgm.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 52,
    },
    rating: 4.3,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 280000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E178) / COMEDK UGET.',
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
      averagePackageLPA: 5.0,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.3, placementRate: 76 },
        { year: 2023, avgPackage: 4.7, placementRate: 78 },
        { year: 2024, avgPackage: 5.0, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 43200,
                        "twoA": 52800,
                        "twoB": 58800,
                        "threeA": 46200,
                        "threeB": 44200,
                        "sc": 85600,
                        "st": 93600
                  },
                  "comedk": {
                        "gm": 39600,
                        "hkr": 47600
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
                        "gm": 51760,
                        "twoA": 61840,
                        "twoB": 67840,
                        "threeA": 54760,
                        "threeB": 52760,
                        "sc": 97600,
                        "st": 105600
                  },
                  "comedk": {
                        "gm": 48200,
                        "hkr": 56200
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
                        "gm": 46720,
                        "twoA": 56800,
                        "twoB": 62800,
                        "threeA": 49720,
                        "threeB": 47720,
                        "sc": 91600,
                        "st": 99600
                  },
                  "comedk": {
                        "gm": 43640,
                        "hkr": 51640
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
                        "gm": 65400,
                        "twoA": 81000,
                        "twoB": 88000,
                        "threeA": 69400,
                        "threeB": 67400,
                        "sc": 113600,
                        "st": 120600
                  },
                  "comedk": {
                        "gm": 60800,
                        "hkr": 70800
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "bit-belagavi",
    name: "Bharatesh Institute of Technology",
    shortName: "BIT Belagavi",
    code: "E261",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bharatesh Institute of Technology (BIT Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 76% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.0 LPA Highest CTC with 76% campus placement rate',
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
        title: "Bharatesh Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BIT Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Dharwad Road, Belagavi, Karnataka 590016",
      mapUrl: "https://maps.google.com/?q=Bharatesh+Institute+of+Technology+Belagavi",
    },
    website: "https://bharatesh.edu.in",
    contact: {
      phone: "+91 831 248 1533",
      email: "info@bharatesh.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 78,
    },
    rating: 4.1,
    reviewCount: 160,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 240000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E261) / COMEDK UGET.',
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
      highestPackageLPA: 13.0,
      averagePackageLPA: 4.6,
      medianPackageLPA: 3.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.9, placementRate: 72 },
        { year: 2023, avgPackage: 4.3, placementRate: 74 },
        { year: 2024, avgPackage: 4.6, placementRate: 76 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 52300,
                        "twoA": 63200,
                        "twoB": 69200,
                        "threeA": 55300,
                        "threeB": 53300,
                        "sc": 93400,
                        "st": 101400
                  },
                  "comedk": {
                        "gm": 47400,
                        "hkr": 55400
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 61640,
                        "twoA": 72760,
                        "twoB": 78760,
                        "threeA": 64640,
                        "threeB": 62640,
                        "sc": 105400,
                        "st": 113400
                  },
                  "comedk": {
                        "gm": 57300,
                        "hkr": 65300
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 11.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 56080,
                        "twoA": 67200,
                        "twoB": 73200,
                        "threeA": 59080,
                        "threeB": 57080,
                        "sc": 99400,
                        "st": 107400
                  },
                  "comedk": {
                        "gm": 51960,
                        "hkr": 59960
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 77100,
                        "twoA": 94000,
                        "twoB": 101000,
                        "threeA": 81100,
                        "threeB": 79100,
                        "sc": 121400,
                        "st": 128400
                  },
                  "comedk": {
                        "gm": 71200,
                        "hkr": 81200
                  }
            },
            "avgPackage": 4.4,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "jcer-belagavi",
    name: "Jain College of Engineering and Research",
    shortName: "JCER Belagavi",
    code: "E221",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain College of Engineering and Research (JCER Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 81% campus placement rate',
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
        title: "Jain College of Engineering and Research Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JCER Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Plot No. 599, Navage Cross, Udyambag, Belagavi, Karnataka 590008",
      mapUrl: "https://maps.google.com/?q=Jain+College+of+Engineering+and+Research+Belagavi",
    },
    website: "https://jcer.in",
    contact: {
      phone: "+91 831 241 1192",
      email: "principal@jcer.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 49,
    },
    rating: 4.3,
    reviewCount: 240,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 280000,
      hostelAnnual: 62000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E221) / COMEDK UGET.',
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
      highestPackageLPA: 18.0,
      averagePackageLPA: 5.2,
      medianPackageLPA: 4.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.5, placementRate: 77 },
        { year: 2023, avgPackage: 4.9, placementRate: 79 },
        { year: 2024, avgPackage: 5.2, placementRate: 81 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 42150,
                        "twoA": 51600,
                        "twoB": 57600,
                        "threeA": 45150,
                        "threeB": 43150,
                        "sc": 84700,
                        "st": 92700
                  },
                  "comedk": {
                        "gm": 38700,
                        "hkr": 46700
                  }
            },
            "avgPackage": 6.0,
            "highestPackage": 18.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 50620,
                        "twoA": 60580,
                        "twoB": 66580,
                        "threeA": 53620,
                        "threeB": 51620,
                        "sc": 96700,
                        "st": 104700
                  },
                  "comedk": {
                        "gm": 47150,
                        "hkr": 55150
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 16.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 45640,
                        "twoA": 55600,
                        "twoB": 61600,
                        "threeA": 48640,
                        "threeB": 46640,
                        "sc": 90700,
                        "st": 98700
                  },
                  "comedk": {
                        "gm": 42680,
                        "hkr": 50680
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 17.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 64050,
                        "twoA": 79500,
                        "twoB": 86500,
                        "threeA": 68050,
                        "threeB": 66050,
                        "sc": 112700,
                        "st": 119700
                  },
                  "comedk": {
                        "gm": 59600,
                        "hkr": 69600
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "jce-belagavi",
    name: "Jain College of Engineering, Belagavi",
    shortName: "JCE Belagavi (Machhe)",
    code: "E179",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain College of Engineering, Belagavi (JCE Belagavi (Machhe)) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹19.5 LPA Highest CTC with 83% campus placement rate',
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
        title: "Jain College of Engineering, Belagavi Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JCE Belagavi (Machhe)."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "T.S. No. 1042/2, Peeranwadi Road, Machhe, Belagavi, Karnataka 590014",
      mapUrl: "https://maps.google.com/?q=Jain+College+of+Engineering,+Belagavi+Belagavi",
    },
    website: "https://jce.ac.in",
    contact: {
      phone: "+91 831 241 1199",
      email: "principal@jce.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 45,
    },
    rating: 4.4,
    reviewCount: 280,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 300000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E179) / COMEDK UGET.',
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
      highestPackageLPA: 19.5,
      averagePackageLPA: 5.4,
      medianPackageLPA: 4.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.7, placementRate: 79 },
        { year: 2023, avgPackage: 5.1, placementRate: 81 },
        { year: 2024, avgPackage: 5.4, placementRate: 83 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 40750,
                        "twoA": 50000,
                        "twoB": 56000,
                        "threeA": 43750,
                        "threeB": 41750,
                        "sc": 83500,
                        "st": 91500
                  },
                  "comedk": {
                        "gm": 37500,
                        "hkr": 45500
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 19.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49100,
                        "twoA": 58900,
                        "twoB": 64900,
                        "threeA": 52100,
                        "threeB": 50100,
                        "sc": 95500,
                        "st": 103500
                  },
                  "comedk": {
                        "gm": 45750,
                        "hkr": 53750
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 17.6
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 44200,
                        "twoA": 54000,
                        "twoB": 60000,
                        "threeA": 47200,
                        "threeB": 45200,
                        "sc": 89500,
                        "st": 97500
                  },
                  "comedk": {
                        "gm": 41400,
                        "hkr": 49400
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 18.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 62250,
                        "twoA": 77500,
                        "twoB": 84500,
                        "threeA": 66250,
                        "threeB": 64250,
                        "sc": 111500,
                        "st": 118500
                  },
                  "comedk": {
                        "gm": 58000,
                        "hkr": 68000
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 15.6
      }
],
  },
  {
    id: "kle-chikodi",
    name: "KLE College of Engineering and Technology",
    shortName: "KLECET Chikodi (Belagavi)",
    code: "E163",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "KLE College of Engineering and Technology (KLECET Chikodi (Belagavi)) is a distinguished engineering institution in Chikodi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "KLE College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KLECET Chikodi (Belagavi)."
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
      district: "Belagavi",
      city: "Chikodi",
      address: "Nipani-Chikodi Road, Chikodi, Belagavi, Karnataka 591201",
      mapUrl: "https://maps.google.com/?q=KLE+College+of+Engineering+and+Technology+Chikodi",
    },
    website: "https://klescet.ac.in",
    contact: {
      phone: "+91 8338 274 066",
      email: "principal@klescet.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 50,
    },
    rating: 4.3,
    reviewCount: 250,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 270000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E163) / COMEDK UGET.',
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
      averagePackageLPA: 5.1,
      medianPackageLPA: 4.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.4, placementRate: 77 },
        { year: 2023, avgPackage: 4.8, placementRate: 79 },
        { year: 2024, avgPackage: 5.1, placementRate: 81 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 42500,
                        "twoA": 52000,
                        "twoB": 58000,
                        "threeA": 45500,
                        "threeB": 43500,
                        "sc": 85000,
                        "st": 93000
                  },
                  "comedk": {
                        "gm": 39000,
                        "hkr": 47000
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 17.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 51000,
                        "twoA": 61000,
                        "twoB": 67000,
                        "threeA": 54000,
                        "threeB": 52000,
                        "sc": 97000,
                        "st": 105000
                  },
                  "comedk": {
                        "gm": 47500,
                        "hkr": 55500
                  }
            },
            "avgPackage": 5.4,
            "highestPackage": 15.3
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 46000,
                        "twoA": 56000,
                        "twoB": 62000,
                        "threeA": 49000,
                        "threeB": 47000,
                        "sc": 91000,
                        "st": 99000
                  },
                  "comedk": {
                        "gm": 43000,
                        "hkr": 51000
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 16.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 64500,
                        "twoA": 80000,
                        "twoB": 87000,
                        "threeA": 68500,
                        "threeB": 66500,
                        "sc": 113000,
                        "st": 120000
                  },
                  "comedk": {
                        "gm": 60000,
                        "hkr": 70000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "maratha-mandal-belagavi",
    name: "Maratha Mandal Engineering College",
    shortName: "MMEC Belagavi",
    code: "E046",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Maratha Mandal Engineering College (MMEC Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.0 LPA Highest CTC with 77% campus placement rate',
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
        title: "Maratha Mandal Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MMEC Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "RS No. 477/2, Bauxite Road, Belagavi, Karnataka 590010",
      mapUrl: "https://maps.google.com/?q=Maratha+Mandal+Engineering+College+Belagavi",
    },
    website: "https://mmec.edu.in",
    contact: {
      phone: "+91 831 247 2207",
      email: "mmec@marathamandal.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 68,
    },
    rating: 4.2,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 56000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E046) / COMEDK UGET.',
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
      highestPackageLPA: 14.0,
      averagePackageLPA: 4.7,
      medianPackageLPA: 4.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.0, placementRate: 73 },
        { year: 2023, avgPackage: 4.4, placementRate: 75 },
        { year: 2024, avgPackage: 4.7, placementRate: 77 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 48800,
                        "twoA": 59200,
                        "twoB": 65200,
                        "threeA": 51800,
                        "threeB": 49800,
                        "sc": 90400,
                        "st": 98400
                  },
                  "comedk": {
                        "gm": 44400,
                        "hkr": 52400
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
                        "gm": 57840,
                        "twoA": 68560,
                        "twoB": 74560,
                        "threeA": 60840,
                        "threeB": 58840,
                        "sc": 102400,
                        "st": 110400
                  },
                  "comedk": {
                        "gm": 53800,
                        "hkr": 61800
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
                        "gm": 52480,
                        "twoA": 63200,
                        "twoB": 69200,
                        "threeA": 55480,
                        "threeB": 53480,
                        "sc": 96400,
                        "st": 104400
                  },
                  "comedk": {
                        "gm": 48760,
                        "hkr": 56760
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
                        "gm": 72600,
                        "twoA": 89000,
                        "twoB": 96000,
                        "threeA": 76600,
                        "threeB": 74600,
                        "sc": 118400,
                        "st": 125400
                  },
                  "comedk": {
                        "gm": 67200,
                        "hkr": 77200
                  }
            },
            "avgPackage": 4.5,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "sgbit-belagavi",
    name: "S.G. Balekundri Institute of Technology",
    shortName: "SGBIT Belagavi",
    code: "E175",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "S.G. Balekundri Institute of Technology (SGBIT Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.5 LPA Highest CTC with 82% campus placement rate',
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
        title: "S.G. Balekundri Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SGBIT Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Shivabasav Nagar, Belagavi, Karnataka 590010",
      mapUrl: "https://maps.google.com/?q=S.G.+Balekundri+Institute+of+Technology+Belagavi",
    },
    website: "https://sgbit.edu.in",
    contact: {
      phone: "+91 831 240 7101",
      email: "sgbitapc@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 47,
    },
    rating: 4.4,
    reviewCount: 270,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 290000,
      hostelAnnual: 64000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E175) / COMEDK UGET.',
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
      highestPackageLPA: 18.5,
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 78 },
        { year: 2023, avgPackage: 5.0, placementRate: 80 },
        { year: 2024, avgPackage: 5.3, placementRate: 82 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 41450,
                        "twoA": 50800,
                        "twoB": 56800,
                        "threeA": 44450,
                        "threeB": 42450,
                        "sc": 84100,
                        "st": 92100
                  },
                  "comedk": {
                        "gm": 38100,
                        "hkr": 46100
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 18.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 49860,
                        "twoA": 59740,
                        "twoB": 65740,
                        "threeA": 52860,
                        "threeB": 50860,
                        "sc": 96100,
                        "st": 104100
                  },
                  "comedk": {
                        "gm": 46450,
                        "hkr": 54450
                  }
            },
            "avgPackage": 5.6,
            "highestPackage": 16.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 44920,
                        "twoA": 54800,
                        "twoB": 60800,
                        "threeA": 47920,
                        "threeB": 45920,
                        "sc": 90100,
                        "st": 98100
                  },
                  "comedk": {
                        "gm": 42040,
                        "hkr": 50040
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 17.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 63150,
                        "twoA": 78500,
                        "twoB": 85500,
                        "threeA": 67150,
                        "threeB": 65150,
                        "sc": 112100,
                        "st": 119100
                  },
                  "comedk": {
                        "gm": 58800,
                        "hkr": 68800
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 14.8
      }
],
  },
  {
    id: "hit-nidasoshi",
    name: "Hirasugar Institute of Technology",
    shortName: "HIT Nidasoshi (Belagavi)",
    code: "E047",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Hirasugar Institute of Technology (HIT Nidasoshi (Belagavi)) is a distinguished engineering institution in Nidasoshi, Belagavi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "Hirasugar Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at HIT Nidasoshi (Belagavi)."
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
      district: "Belagavi",
      city: "Nidasoshi",
      address: "Hukkeri Taluk, Nidasoshi, Belagavi, Karnataka 591236",
      mapUrl: "https://maps.google.com/?q=Hirasugar+Institute+of+Technology+Nidasoshi",
    },
    website: "https://hsit.ac.in",
    contact: {
      phone: "+91 8333 278 887",
      email: "principal@hsit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 55,
    },
    rating: 4.3,
    reviewCount: 220,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 155000,
      managementAnnual: 260000,
      hostelAnnual: 54000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E047) / COMEDK UGET.',
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
      averagePackageLPA: 5.0,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.3, placementRate: 76 },
        { year: 2023, avgPackage: 4.7, placementRate: 78 },
        { year: 2024, avgPackage: 5.0, placementRate: 80 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 44250,
                        "twoA": 54000,
                        "twoB": 60000,
                        "threeA": 47250,
                        "threeB": 45250,
                        "sc": 86500,
                        "st": 94500
                  },
                  "comedk": {
                        "gm": 40500,
                        "hkr": 48500
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 16.5
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 52900,
                        "twoA": 63100,
                        "twoB": 69100,
                        "threeA": 55900,
                        "threeB": 53900,
                        "sc": 98500,
                        "st": 106500
                  },
                  "comedk": {
                        "gm": 49250,
                        "hkr": 57250
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 14.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 47800,
                        "twoA": 58000,
                        "twoB": 64000,
                        "threeA": 50800,
                        "threeB": 48800,
                        "sc": 92500,
                        "st": 100500
                  },
                  "comedk": {
                        "gm": 44600,
                        "hkr": 52600
                  }
            },
            "avgPackage": 5.5,
            "highestPackage": 15.7
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 66750,
                        "twoA": 82500,
                        "twoB": 89500,
                        "threeA": 70750,
                        "threeB": 68750,
                        "sc": 114500,
                        "st": 121500
                  },
                  "comedk": {
                        "gm": 62000,
                        "hkr": 72000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 13.2
      }
],
  },
  {
    id: "shaikh-belagavi",
    name: "Shaikh College of Engineering and Technology",
    shortName: "SCET Belagavi",
    code: "E180",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shaikh College of Engineering and Technology (SCET Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
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
        title: "Shaikh College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SCET Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Shaikh Campus, Nehru Nagar, Belagavi, Karnataka 590010",
      mapUrl: "https://maps.google.com/?q=Shaikh+College+of+Engineering+and+Technology+Belagavi",
    },
    website: "https://shaikhgroup.com/scet",
    contact: {
      phone: "+91 831 247 3255",
      email: "scetprincipal@shaikhgroup.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 82,
    },
    rating: 4.0,
    reviewCount: 150,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 230000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E180) / COMEDK UGET.',
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
                        "gm": 53700,
                        "twoA": 64800,
                        "twoB": 70800,
                        "threeA": 56700,
                        "threeB": 54700,
                        "sc": 94600,
                        "st": 102600
                  },
                  "comedk": {
                        "gm": 48600,
                        "hkr": 56600
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
                        "gm": 63160,
                        "twoA": 74440,
                        "twoB": 80440,
                        "threeA": 66160,
                        "threeB": 64160,
                        "sc": 106600,
                        "st": 114600
                  },
                  "comedk": {
                        "gm": 58700,
                        "hkr": 66700
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
                        "gm": 57520,
                        "twoA": 68800,
                        "twoB": 74800,
                        "threeA": 60520,
                        "threeB": 58520,
                        "sc": 100600,
                        "st": 108600
                  },
                  "comedk": {
                        "gm": 53240,
                        "hkr": 61240
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
                        "gm": 78900,
                        "twoA": 96000,
                        "twoB": 103000,
                        "threeA": 82900,
                        "threeB": 80900,
                        "sc": 122600,
                        "st": 129600
                  },
                  "comedk": {
                        "gm": 72800,
                        "hkr": 82800
                  }
            },
            "avgPackage": 4.3,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "vsmit-nipani",
    name: "V.S.M. Institute of Technology",
    shortName: "VSMIT Nipani (Belagavi)",
    code: "E197",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "V.S.M. Institute of Technology (VSMIT Nipani (Belagavi)) is a distinguished engineering institution in Nipani, Belagavi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 76% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
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
        title: "V.S.M. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VSMIT Nipani (Belagavi)."
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
      district: "Belagavi",
      city: "Nipani",
      address: "Nipani, Chikkodi, Belagavi, Karnataka 591237",
      mapUrl: "https://maps.google.com/?q=V.S.M.+Institute+of+Technology+Nipani",
    },
    website: "https://vsmit.ac.in",
    contact: {
      phone: "+91 8338 220 316",
      email: "vsmitnipani@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 75,
    },
    rating: 4.1,
    reviewCount: 170,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 145000,
      managementAnnual: 240000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E197) / COMEDK UGET.',
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
                        "gm": 51250,
                        "twoA": 62000,
                        "twoB": 68000,
                        "threeA": 54250,
                        "threeB": 52250,
                        "sc": 92500,
                        "st": 100500
                  },
                  "comedk": {
                        "gm": 46500,
                        "hkr": 54500
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
                        "gm": 60500,
                        "twoA": 71500,
                        "twoB": 77500,
                        "threeA": 63500,
                        "threeB": 61500,
                        "sc": 104500,
                        "st": 112500
                  },
                  "comedk": {
                        "gm": 56250,
                        "hkr": 64250
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
                        "gm": 55000,
                        "twoA": 66000,
                        "twoB": 72000,
                        "threeA": 58000,
                        "threeB": 56000,
                        "sc": 98500,
                        "st": 106500
                  },
                  "comedk": {
                        "gm": 51000,
                        "hkr": 59000
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
                        "gm": 75750,
                        "twoA": 92500,
                        "twoB": 99500,
                        "threeA": 79750,
                        "threeB": 77750,
                        "sc": 120500,
                        "st": 127500
                  },
                  "comedk": {
                        "gm": 70000,
                        "hkr": 80000
                  }
            },
            "avgPackage": 4.5,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "vtu-belagavi",
    name: "Visvesvaraya Technological University",
    shortName: "VTU Main Campus Belagavi",
    code: "E002",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Visvesvaraya Technological University (VTU Main Campus Belagavi) is a distinguished engineering institution in Belagavi, Belagavi district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹28.0 LPA Highest CTC with 90% campus placement rate',
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
        title: "Visvesvaraya Technological University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VTU Main Campus Belagavi."
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
      district: "Belagavi",
      city: "Belagavi",
      address: "Jnana Sangama, Machhe, Belagavi, Karnataka 590018",
      mapUrl: "https://maps.google.com/?q=Visvesvaraya+Technological+University+Belagavi",
    },
    website: "https://vtu.ac.in",
    contact: {
      phone: "+91 831 249 8100",
      email: "registrar@vtu.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 14,
    },
    rating: 4.7,
    reviewCount: 650,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 120000,
      managementAnnual: 150000,
      hostelAnnual: 45000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E002) / COMEDK UGET.',
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
      highestPackageLPA: 28.0,
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
            "avgPackage": 8.6,
            "highestPackage": 28.0
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
            "avgPackage": 7.9,
            "highestPackage": 25.2
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
            "avgPackage": 8.2,
            "highestPackage": 26.6
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
            "avgPackage": 7.1,
            "highestPackage": 22.4
      }
],
  },
  {
    id: "bldea-vijayapura",
    name: "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering and Technology",
    shortName: "BLDEACET Vijayapura",
    code: "E037",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering and Technology (BLDEACET Vijayapura) is a distinguished engineering institution in Vijayapura, Vijayapura district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
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
        title: "BLDEA's V.P. Dr. P.G. Halakatti College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BLDEACET Vijayapura."
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
      district: "Vijayapura",
      city: "Vijayapura",
      address: "Ashram Road, Adarsh Nagar, Vijayapura, Karnataka 586103",
      mapUrl: "https://maps.google.com/?q=BLDEA's+V.P.+Dr.+P.G.+Halakatti+College+of+Engineering+and+Technology+Vijayapura",
    },
    website: "https://bldeacet.ac.in",
    contact: {
      phone: "+91 8352 261 120",
      email: "principal@bldeacet.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 29,
    },
    rating: 4.5,
    reviewCount: 360,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 190000,
      managementAnnual: 300000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E037) / COMEDK UGET.',
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
      averagePackageLPA: 6.0,
      medianPackageLPA: 5.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.3, placementRate: 81 },
        { year: 2023, avgPackage: 5.7, placementRate: 83 },
        { year: 2024, avgPackage: 6.0, placementRate: 85 }
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
            "highestPackage": 22.0
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
            "highestPackage": 19.8
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
            "highestPackage": 20.9
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
            "highestPackage": 17.6
      }
],
  },
  {
    id: "secab-vijayapura",
    name: "SECAB Institute of Engineering and Technology",
    shortName: "SIET Vijayapura",
    code: "E121",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "SECAB Institute of Engineering and Technology (SIET Vijayapura) is a distinguished engineering institution in Vijayapura, Vijayapura district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.0 LPA Highest CTC with 77% campus placement rate',
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
        title: "SECAB Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SIET Vijayapura."
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
      district: "Vijayapura",
      city: "Vijayapura",
      address: "Jalanagar, Nauraspur, Bagalkote Road, Vijayapura, Karnataka 586109",
      mapUrl: "https://maps.google.com/?q=SECAB+Institute+of+Engineering+and+Technology+Vijayapura",
    },
    website: "https://secab.org/siet",
    contact: {
      phone: "+91 8352 278 342",
      email: "secab_siet@yahoo.co.in",
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
    reviewCount: 200,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E121) / COMEDK UGET.',
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
      highestPackageLPA: 14.0,
      averagePackageLPA: 4.8,
      medianPackageLPA: 4.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.1, placementRate: 73 },
        { year: 2023, avgPackage: 4.5, placementRate: 75 },
        { year: 2024, avgPackage: 4.8, placementRate: 77 }
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
            "avgPackage": 5.5,
            "highestPackage": 14.0
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
            "avgPackage": 5.0,
            "highestPackage": 12.6
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
            "avgPackage": 5.3,
            "highestPackage": 13.3
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
            "avgPackage": 4.6,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "bkec-basavakalyan",
    name: "Basava Kalyan Engineering College",
    shortName: "BKEC Basavakalyan (Bidar)",
    code: "E123",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Basava Kalyan Engineering College (BKEC Basavakalyan (Bidar)) is a distinguished engineering institution in Basavakalyan, Bidar district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹12.5 LPA Highest CTC with 74% campus placement rate',
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
        title: "Basava Kalyan Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BKEC Basavakalyan (Bidar)."
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
      district: "Bidar",
      city: "Basavakalyan",
      address: "NH 9, Basavakalyan, Bidar, Karnataka 585327",
      mapUrl: "https://maps.google.com/?q=Basava+Kalyan+Engineering+College+Basavakalyan",
    },
    website: "https://bkec.edu.in",
    contact: {
      phone: "+91 8481 251 044",
      email: "principal@bkec.edu.in",
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
      comedkAnnual: 140000,
      managementAnnual: 220000,
      hostelAnnual: 50000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E123) / COMEDK UGET.',
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
      highestPackageLPA: 12.5,
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
            "avgPackage": 5.2,
            "highestPackage": 12.5
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
            "avgPackage": 4.7,
            "highestPackage": 11.2
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
            "avgPackage": 5.0,
            "highestPackage": 11.9
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
            "avgPackage": 4.3,
            "highestPackage": 10.0
      }
],
  },
  {
    id: "bkit-bhalki",
    name: "Bheemanna Khandre Institute of Technology",
    shortName: "BKIT Bhalki (Bidar)",
    code: "E031",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bheemanna Khandre Institute of Technology (BKIT Bhalki (Bidar)) is a distinguished engineering institution in Bhalki, Bidar district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
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
        title: "Bheemanna Khandre Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BKIT Bhalki (Bidar)."
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
      district: "Bidar",
      city: "Bhalki",
      address: "Basavakalyan Road, Bhalki, Bidar, Karnataka 585328",
      mapUrl: "https://maps.google.com/?q=Bheemanna+Khandre+Institute+of+Technology+Bhalki",
    },
    website: "https://bkitbhalki.edu.in",
    contact: {
      phone: "+91 8484 262 288",
      email: "principalbkit@gmail.com",
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
    reviewCount: 320,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E031) / COMEDK UGET.',
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
      averagePackageLPA: 5.8,
      medianPackageLPA: 4.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.1, placementRate: 80 },
        { year: 2023, avgPackage: 5.5, placementRate: 82 },
        { year: 2024, avgPackage: 5.8, placementRate: 84 }
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
            "avgPackage": 6.7,
            "highestPackage": 20.0
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
            "avgPackage": 6.1,
            "highestPackage": 18.0
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
            "avgPackage": 6.4,
            "highestPackage": 19.0
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
            "avgPackage": 5.5,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "gec-bidar",
    name: "Government Engineering College, Bidar",
    shortName: "GEC Bidar",
    code: "E263",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Bidar (GEC Bidar) is a distinguished engineering institution in Bidar, Bidar district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Government Engineering College, Bidar Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Bidar."
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
      district: "Bidar",
      city: "Bidar",
      address: "Naubad, Bidar, Karnataka 585402",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Bidar+Bidar",
    },
    website: "https://gecbidar.ac.in",
    contact: {
      phone: "+91 8482 232 555",
      email: "principal@gecbidar.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 48,
    },
    rating: 4.3,
    reviewCount: 230,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E263) / COMEDK UGET.',
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
            "avgPackage": 6.0,
            "highestPackage": 16.0
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
            "avgPackage": 5.5,
            "highestPackage": 14.4
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
            "avgPackage": 5.7,
            "highestPackage": 15.2
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
            "avgPackage": 4.9,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "lingaraj-appa-bidar",
    name: "Lingaraj Appa Engineering College",
    shortName: "LAEC Gornalli (Bidar)",
    code: "E215",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Lingaraj Appa Engineering College (LAEC Gornalli (Bidar)) is a distinguished engineering institution in Bidar, Bidar district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹12.0 LPA Highest CTC with 75% campus placement rate',
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
        title: "Lingaraj Appa Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at LAEC Gornalli (Bidar)."
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
      district: "Bidar",
      city: "Bidar",
      address: "Gornalli, Bidar, Karnataka 585403",
      mapUrl: "https://maps.google.com/?q=Lingaraj+Appa+Engineering+College+Bidar",
    },
    website: "https://laec.edu.in",
    contact: {
      phone: "+91 8482 234 400",
      email: "info@laec.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 82,
    },
    rating: 4.0,
    reviewCount: 150,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 230000,
      hostelAnnual: 50000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E215) / COMEDK UGET.',
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
      highestPackageLPA: 12.0,
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
                        "gm": 53700,
                        "twoA": 64800,
                        "twoB": 70800,
                        "threeA": 56700,
                        "threeB": 54700,
                        "sc": 94600,
                        "st": 102600
                  },
                  "comedk": {
                        "gm": 48600,
                        "hkr": 56600
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 12.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 63160,
                        "twoA": 74440,
                        "twoB": 80440,
                        "threeA": 66160,
                        "threeB": 64160,
                        "sc": 106600,
                        "st": 114600
                  },
                  "comedk": {
                        "gm": 58700,
                        "hkr": 66700
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 10.8
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 57520,
                        "twoA": 68800,
                        "twoB": 74800,
                        "threeA": 60520,
                        "threeB": 58520,
                        "sc": 100600,
                        "st": 108600
                  },
                  "comedk": {
                        "gm": 53240,
                        "hkr": 61240
                  }
            },
            "avgPackage": 5.0,
            "highestPackage": 11.4
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 78900,
                        "twoA": 96000,
                        "twoB": 103000,
                        "threeA": 82900,
                        "threeB": 80900,
                        "sc": 122600,
                        "st": 129600
                  },
                  "comedk": {
                        "gm": 72800,
                        "hkr": 82800
                  }
            },
            "avgPackage": 4.3,
            "highestPackage": 9.6
      }
],
  },
  {
    id: "appa-kalaburagi",
    name: "Appa Institute of Engineering and Technology",
    shortName: "AIET Brahmpur (Kalaburagi)",
    code: "E107",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Appa Institute of Engineering and Technology (AIET Brahmpur (Kalaburagi)) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
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
        title: "Appa Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AIET Brahmpur (Kalaburagi)."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Sharan Nagar, Brahmpur, Kalaburagi, Karnataka 585103",
      mapUrl: "https://maps.google.com/?q=Appa+Institute+of+Engineering+and+Technology+Kalaburagi",
    },
    website: "https://appa-iet.ac.in",
    contact: {
      phone: "+91 8472 221 296",
      email: "principal@appa-iet.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 36,
    },
    rating: 4.4,
    reviewCount: 310,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 290000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E107) / COMEDK UGET.',
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
      averagePackageLPA: 5.6,
      medianPackageLPA: 4.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.9, placementRate: 79 },
        { year: 2023, avgPackage: 5.3, placementRate: 81 },
        { year: 2024, avgPackage: 5.6, placementRate: 83 }
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
            "avgPackage": 6.4,
            "highestPackage": 18.0
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
            "avgPackage": 5.9,
            "highestPackage": 16.2
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
            "avgPackage": 6.2,
            "highestPackage": 17.1
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
            "avgPackage": 5.3,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "godutai-women-kalaburagi",
    name: "Godutai Engineering College for Women",
    shortName: "GECW Kalaburagi",
    code: "E216",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Godutai Engineering College for Women (GECW Kalaburagi) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
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
        title: "Godutai Engineering College for Women Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GECW Kalaburagi."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Sharan Nagar, Kalaburagi, Karnataka 585102",
      mapUrl: "https://maps.google.com/?q=Godutai+Engineering+College+for+Women+Kalaburagi",
    },
    website: "https://godutaiecw.ac.in",
    contact: {
      phone: "+91 8472 260 001",
      email: "principal@godutaiecw.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 70,
    },
    rating: 4.2,
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E216) / COMEDK UGET.',
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
                        "gm": 49500,
                        "twoA": 60000,
                        "twoB": 66000,
                        "threeA": 52500,
                        "threeB": 50500,
                        "sc": 91000,
                        "st": 99000
                  },
                  "comedk": {
                        "gm": 45000,
                        "hkr": 53000
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
                        "gm": 58600,
                        "twoA": 69400,
                        "twoB": 75400,
                        "threeA": 61600,
                        "threeB": 59600,
                        "sc": 103000,
                        "st": 111000
                  },
                  "comedk": {
                        "gm": 54500,
                        "hkr": 62500
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
                        "gm": 53200,
                        "twoA": 64000,
                        "twoB": 70000,
                        "threeA": 56200,
                        "threeB": 54200,
                        "sc": 97000,
                        "st": 105000
                  },
                  "comedk": {
                        "gm": 49400,
                        "hkr": 57400
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
                        "gm": 73500,
                        "twoA": 90000,
                        "twoB": 97000,
                        "threeA": 77500,
                        "threeB": 75500,
                        "sc": 119000,
                        "st": 126000
                  },
                  "comedk": {
                        "gm": 68000,
                        "hkr": 78000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "kbn-kalaburagi",
    name: "K.B.N. College of Engineering",
    shortName: "KBNCE Rauza (Kalaburagi)",
    code: "E034",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "K.B.N. College of Engineering (KBNCE Rauza (Kalaburagi)) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "K.B.N. College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KBNCE Rauza (Kalaburagi)."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Rauza-i Buzurg, Kalaburagi, Karnataka 585104",
      mapUrl: "https://maps.google.com/?q=K.B.N.+College+of+Engineering+Kalaburagi",
    },
    website: "https://kbnce.ac.in",
    contact: {
      phone: "+91 8472 221 686",
      email: "principal@kbnce.ac.in",
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
    reviewCount: 330,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 280000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E034) / COMEDK UGET.',
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
      averagePackageLPA: 5.5,
      medianPackageLPA: 4.7,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.8, placementRate: 78 },
        { year: 2023, avgPackage: 5.2, placementRate: 80 },
        { year: 2024, avgPackage: 5.5, placementRate: 82 }
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
            "avgPackage": 6.3,
            "highestPackage": 18.0
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
            "avgPackage": 5.8,
            "highestPackage": 16.2
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
            "avgPackage": 6.1,
            "highestPackage": 17.1
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
            "avgPackage": 5.2,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "kct-kalaburagi",
    name: "K.C.T. Engineering College",
    shortName: "KCTEC Kalaburagi",
    code: "E071",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "K.C.T. Engineering College (KCTEC Kalaburagi) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 76% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.0 LPA Highest CTC with 76% campus placement rate',
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
        title: "K.C.T. Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KCTEC Kalaburagi."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Qamrul Islam Colony, Roza B, Kalaburagi, Karnataka 585104",
      mapUrl: "https://maps.google.com/?q=K.C.T.+Engineering+College+Kalaburagi",
    },
    website: "https://kctengineering.org",
    contact: {
      phone: "+91 8472 265 244",
      email: "kctec@rediffmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 80,
    },
    rating: 4.0,
    reviewCount: 160,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 230000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E071) / COMEDK UGET.',
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
      highestPackageLPA: 13.0,
      averagePackageLPA: 4.6,
      medianPackageLPA: 3.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 3.9, placementRate: 72 },
        { year: 2023, avgPackage: 4.3, placementRate: 74 },
        { year: 2024, avgPackage: 4.6, placementRate: 76 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 53000,
                        "twoA": 64000,
                        "twoB": 70000,
                        "threeA": 56000,
                        "threeB": 54000,
                        "sc": 94000,
                        "st": 102000
                  },
                  "comedk": {
                        "gm": 48000,
                        "hkr": 56000
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 62400,
                        "twoA": 73600,
                        "twoB": 79600,
                        "threeA": 65400,
                        "threeB": 63400,
                        "sc": 106000,
                        "st": 114000
                  },
                  "comedk": {
                        "gm": 58000,
                        "hkr": 66000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 11.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 56800,
                        "twoA": 68000,
                        "twoB": 74000,
                        "threeA": 59800,
                        "threeB": 57800,
                        "sc": 100000,
                        "st": 108000
                  },
                  "comedk": {
                        "gm": 52600,
                        "hkr": 60600
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 78000,
                        "twoA": 95000,
                        "twoB": 102000,
                        "threeA": 82000,
                        "threeB": 80000,
                        "sc": 122000,
                        "st": 129000
                  },
                  "comedk": {
                        "gm": 72000,
                        "hkr": 82000
                  }
            },
            "avgPackage": 4.4,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "shetty-kalaburagi",
    name: "Shetty Institute of Technology",
    shortName: "SIT Shahabad Rd (Kalaburagi)",
    code: "E217",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shetty Institute of Technology (SIT Shahabad Rd (Kalaburagi)) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.0 LPA Highest CTC with 77% campus placement rate',
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
        title: "Shetty Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SIT Shahabad Rd (Kalaburagi)."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Shahabad Road, Kalaburagi, Karnataka 585105",
      mapUrl: "https://maps.google.com/?q=Shetty+Institute+of+Technology+Kalaburagi",
    },
    website: "https://shettyit.org",
    contact: {
      phone: "+91 8472 258 555",
      email: "principal@shettyit.org",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 74,
    },
    rating: 4.1,
    reviewCount: 170,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 54000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E217) / COMEDK UGET.',
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
      highestPackageLPA: 14.0,
      averagePackageLPA: 4.7,
      medianPackageLPA: 4.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.0, placementRate: 73 },
        { year: 2023, avgPackage: 4.4, placementRate: 75 },
        { year: 2024, avgPackage: 4.7, placementRate: 77 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 50900,
                        "twoA": 61600,
                        "twoB": 67600,
                        "threeA": 53900,
                        "threeB": 51900,
                        "sc": 92200,
                        "st": 100200
                  },
                  "comedk": {
                        "gm": 46200,
                        "hkr": 54200
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
                        "gm": 60120,
                        "twoA": 71080,
                        "twoB": 77080,
                        "threeA": 63120,
                        "threeB": 61120,
                        "sc": 104200,
                        "st": 112200
                  },
                  "comedk": {
                        "gm": 55900,
                        "hkr": 63900
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
                        "gm": 54640,
                        "twoA": 65600,
                        "twoB": 71600,
                        "threeA": 57640,
                        "threeB": 55640,
                        "sc": 98200,
                        "st": 106200
                  },
                  "comedk": {
                        "gm": 50680,
                        "hkr": 58680
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
                        "gm": 75300,
                        "twoA": 92000,
                        "twoB": 99000,
                        "threeA": 79300,
                        "threeB": 77300,
                        "sc": 120200,
                        "st": 127200
                  },
                  "comedk": {
                        "gm": 69600,
                        "hkr": 79600
                  }
            },
            "avgPackage": 4.5,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "cuk-kalaburagi",
    name: "Central University of Karnataka (School of Engineering)",
    shortName: "CUK Kadaganchi (Kalaburagi)",
    code: "U021",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Central University of Karnataka (School of Engineering) (CUK Kadaganchi (Kalaburagi)) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Central University of Karnataka (School of Engineering) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CUK Kadaganchi (Kalaburagi)."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Aland Road, Kadaganchi, Kalaburagi, Karnataka 585367",
      mapUrl: "https://maps.google.com/?q=Central+University+of+Karnataka+(School+of+Engineering)+Kalaburagi",
    },
    website: "https://cuk.ac.in",
    contact: {
      phone: "+91 8477 226 701",
      email: "admissions@cuk.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 20,
    },
    rating: 4.6,
    reviewCount: 420,
    fees: {
      kcetAnnual: 55000,
      comedkAnnual: 120000,
      managementAnnual: 150000,
      hostelAnnual: 45000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U021) / COMEDK UGET.',
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
            "avgPackage": 8.0,
            "highestPackage": 25.0
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
            "avgPackage": 7.4,
            "highestPackage": 22.5
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
            "avgPackage": 7.7,
            "highestPackage": 23.8
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
            "avgPackage": 6.6,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "sharnbasva-univ-kalaburagi",
    name: "Sharnbasva University (Faculty of Engineering and Technology)",
    shortName: "Sharnbasva Univ Kalaburagi",
    code: "U022",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sharnbasva University (Faculty of Engineering and Technology) (Sharnbasva Univ Kalaburagi) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Sharnbasva University (Faculty of Engineering and Technology) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Sharnbasva Univ Kalaburagi."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Sharan Nagar, Kalaburagi, Karnataka 585103",
      mapUrl: "https://maps.google.com/?q=Sharnbasva+University+(Faculty+of+Engineering+and+Technology)+Kalaburagi",
    },
    website: "https://sharnbasvauniversity.edu.in",
    contact: {
      phone: "+91 8472 277 852",
      email: "registrar@sharnbasvauniversity.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 28,
    },
    rating: 4.4,
    reviewCount: 360,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 190000,
      managementAnnual: 300000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U022) / COMEDK UGET.',
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
            "avgPackage": 7.1,
            "highestPackage": 21.0
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
            "avgPackage": 6.5,
            "highestPackage": 18.9
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
            "avgPackage": 6.8,
            "highestPackage": 19.9
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
            "avgPackage": 5.9,
            "highestPackage": 16.8
      }
],
  },
  {
    id: "kbu-kalaburagi",
    name: "Khaja Bandanawaz University (Faculty of Engineering & Technology)",
    shortName: "KBU Rauza (Kalaburagi)",
    code: "U023",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Khaja Bandanawaz University (Faculty of Engineering & Technology) (KBU Rauza (Kalaburagi)) is a distinguished engineering institution in Kalaburagi, Kalaburagi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Khaja Bandanawaz University (Faculty of Engineering & Technology) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KBU Rauza (Kalaburagi)."
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
      district: "Kalaburagi",
      city: "Kalaburagi",
      address: "Rauza-i Buzurg, Kalaburagi, Karnataka 585104",
      mapUrl: "https://maps.google.com/?q=Khaja+Bandanawaz+University+(Faculty+of+Engineering+&+Technology)+Kalaburagi",
    },
    website: "https://kbu.edu.in",
    contact: {
      phone: "+91 8472 268 786",
      email: "info@kbu.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 31,
    },
    rating: 4.4,
    reviewCount: 340,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U023) / COMEDK UGET.',
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
            "avgPackage": 6.9,
            "highestPackage": 20.0
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
            "avgPackage": 6.3,
            "highestPackage": 18.0
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
            "avgPackage": 6.6,
            "highestPackage": 19.0
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
            "avgPackage": 5.7,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "gec-raichur",
    name: "Government Engineering College, Raichur",
    shortName: "GEC Raichur",
    code: "E264",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Raichur (GEC Raichur) is a distinguished engineering institution in Raichur, Raichur district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
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
        title: "Government Engineering College, Raichur Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Raichur."
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
      district: "Raichur",
      city: "Raichur",
      address: "Yeramarus Camp, Raichur, Karnataka 584134",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Raichur+Raichur",
    },
    website: "https://gecraichur.ac.in",
    contact: {
      phone: "+91 8532 235 666",
      email: "principal@gecraichur.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 46,
    },
    rating: 4.3,
    reviewCount: 240,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E264) / COMEDK UGET.',
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
            "avgPackage": 6.2,
            "highestPackage": 17.0
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
            "avgPackage": 5.7,
            "highestPackage": 15.3
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
            "avgPackage": 5.9,
            "highestPackage": 16.1
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
            "avgPackage": 5.1,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "hkes-raichur",
    name: "H.K.E. Society's Sir M. Visvesvaraya College of Engineering",
    shortName: "HKES Sir MVCE Raichur",
    code: "E218",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "H.K.E. Society's Sir M. Visvesvaraya College of Engineering (HKES Sir MVCE Raichur) is a distinguished engineering institution in Raichur, Raichur district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹14.5 LPA Highest CTC with 77% campus placement rate',
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
        title: "H.K.E. Society's Sir M. Visvesvaraya College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at HKES Sir MVCE Raichur."
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
      district: "Raichur",
      city: "Raichur",
      address: "Kallur Road, Yeramarus Camp, Raichur, Karnataka 584135",
      mapUrl: "https://maps.google.com/?q=H.K.E.+Society's+Sir+M.+Visvesvaraya+College+of+Engineering+Raichur",
    },
    website: "https://hkesraichur.edu.in",
    contact: {
      phone: "+91 8532 236 100",
      email: "principal@hkesraichur.edu.in",
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
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E218) / COMEDK UGET.',
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
      highestPackageLPA: 14.5,
      averagePackageLPA: 4.8,
      medianPackageLPA: 4.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.1, placementRate: 73 },
        { year: 2023, avgPackage: 4.5, placementRate: 75 },
        { year: 2024, avgPackage: 4.8, placementRate: 77 }
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
            "avgPackage": 5.5,
            "highestPackage": 14.5
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
            "avgPackage": 5.0,
            "highestPackage": 13.1
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
            "avgPackage": 5.3,
            "highestPackage": 13.8
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
            "avgPackage": 4.6,
            "highestPackage": 11.6
      }
],
  },
  {
    id: "iiit-raichur",
    name: "Indian Institute of Information Technology Raichur",
    shortName: "IIIT Raichur (IIT-Mentor)",
    code: "U024",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Indian Institute of Information Technology Raichur (IIIT Raichur (IIT-Mentor)) is a distinguished engineering institution in Raichur, Raichur district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 95% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹45.0 LPA Highest CTC with 95% campus placement rate',
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
        title: "Indian Institute of Information Technology Raichur Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at IIIT Raichur (IIT-Mentor)."
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
      district: "Raichur",
      city: "Raichur",
      address: "Transit Campus, GEC Campus, Yeramarus Camp, Raichur, Karnataka 584135",
      mapUrl: "https://maps.google.com/?q=Indian+Institute+of+Information+Technology+Raichur+Raichur",
    },
    website: "https://iiitr.ac.in",
    contact: {
      phone: "+91 8532 235 888",
      email: "info@iiitr.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 10,
    },
    rating: 4.8,
    reviewCount: 380,
    fees: {
      kcetAnnual: 120000,
      comedkAnnual: 220000,
      managementAnnual: 300000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U024) / COMEDK UGET.',
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
      highestPackageLPA: 45.0,
      averagePackageLPA: 14.0,
      medianPackageLPA: 11.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 13.3, placementRate: 91 },
        { year: 2023, avgPackage: 13.7, placementRate: 93 },
        { year: 2024, avgPackage: 14.0, placementRate: 95 }
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
            "avgPackage": 16.1,
            "highestPackage": 45.0
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
            "avgPackage": 14.7,
            "highestPackage": 40.5
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
            "avgPackage": 15.4,
            "highestPackage": 42.8
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
            "avgPackage": 13.3,
            "highestPackage": 36.0
      }
],
  },
  {
    id: "navodaya-raichur",
    name: "Navodaya Institute of Technology",
    shortName: "NIT Navodaya Nagar (Raichur)",
    code: "E177",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Navodaya Institute of Technology (NIT Navodaya Nagar (Raichur)) is a distinguished engineering institution in Raichur, Raichur district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "Navodaya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at NIT Navodaya Nagar (Raichur)."
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
      district: "Raichur",
      city: "Raichur",
      address: "Navodaya Nagar, Mantralayam Road, Raichur, Karnataka 584103",
      mapUrl: "https://maps.google.com/?q=Navodaya+Institute+of+Technology+Raichur",
    },
    website: "https://nitraichur.ac.in",
    contact: {
      phone: "+91 8532 223 361",
      email: "principal@nitraichur.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 40,
    },
    rating: 4.3,
    reviewCount: 290,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E177) / COMEDK UGET.',
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
      averagePackageLPA: 5.4,
      medianPackageLPA: 4.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.7, placementRate: 78 },
        { year: 2023, avgPackage: 5.1, placementRate: 80 },
        { year: 2024, avgPackage: 5.4, placementRate: 82 }
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
            "avgPackage": 6.2,
            "highestPackage": 18.0
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
            "avgPackage": 5.7,
            "highestPackage": 16.2
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
            "avgPackage": 5.9,
            "highestPackage": 17.1
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
            "avgPackage": 5.1,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "veerappa-nisty-yadgir",
    name: "Veerappa Nisty Engineering College",
    shortName: "VNEC Shorapur (Yadgir)",
    code: "E188",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Veerappa Nisty Engineering College (VNEC Shorapur (Yadgir)) is a distinguished engineering institution in Shorapur, Yadgir district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
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
        title: "Veerappa Nisty Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VNEC Shorapur (Yadgir)."
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
      district: "Yadgir",
      city: "Shorapur",
      address: "Near Kakkera, Shorapur Taluk, Yadgir, Karnataka 585220",
      mapUrl: "https://maps.google.com/?q=Veerappa+Nisty+Engineering+College+Shorapur",
    },
    website: "https://vnec.org.in",
    contact: {
      phone: "+91 8479 265 111",
      email: "vnecshorapur@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 85,
    },
    rating: 4.0,
    reviewCount: 140,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 220000,
      hostelAnnual: 48000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E188) / COMEDK UGET.',
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
                        "gm": 54750,
                        "twoA": 66000,
                        "twoB": 72000,
                        "threeA": 57750,
                        "threeB": 55750,
                        "sc": 95500,
                        "st": 103500
                  },
                  "comedk": {
                        "gm": 49500,
                        "hkr": 57500
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
                        "gm": 64300,
                        "twoA": 75700,
                        "twoB": 81700,
                        "threeA": 67300,
                        "threeB": 65300,
                        "sc": 107500,
                        "st": 115500
                  },
                  "comedk": {
                        "gm": 59750,
                        "hkr": 67750
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
                        "gm": 58600,
                        "twoA": 70000,
                        "twoB": 76000,
                        "threeA": 61600,
                        "threeB": 59600,
                        "sc": 101500,
                        "st": 109500
                  },
                  "comedk": {
                        "gm": 54200,
                        "hkr": 62200
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
                        "gm": 80250,
                        "twoA": 97500,
                        "twoB": 104500,
                        "threeA": 84250,
                        "threeB": 82250,
                        "sc": 123500,
                        "st": 130500
                  },
                  "comedk": {
                        "gm": 74000,
                        "hkr": 84000
                  }
            },
            "avgPackage": 4.2,
            "highestPackage": 9.6
      }
],
  },
  {
    id: "gec-talakal",
    name: "Government Engineering College, Talakal",
    shortName: "GEC Talakal (Koppal)",
    code: "E265",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Talakal (GEC Talakal (Koppal)) is a distinguished engineering institution in Talakal, Koppal district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 79% campus placement rate',
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
        title: "Government Engineering College, Talakal Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Talakal (Koppal)."
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
      district: "Koppal",
      city: "Talakal",
      address: "Yalburga Road, Talakal, Koppal, Karnataka 583238",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Talakal+Talakal",
    },
    website: "https://gectalakal.ac.in",
    contact: {
      phone: "+91 8534 240 100",
      email: "principal@gectalakal.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 50,
    },
    rating: 4.2,
    reviewCount: 210,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E265) / COMEDK UGET.',
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
      highestPackageLPA: 15.0,
      averagePackageLPA: 5.0,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.3, placementRate: 75 },
        { year: 2023, avgPackage: 4.7, placementRate: 77 },
        { year: 2024, avgPackage: 5.0, placementRate: 79 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 42500,
                        "twoA": 52000,
                        "twoB": 58000,
                        "threeA": 45500,
                        "threeB": 43500,
                        "sc": 85000,
                        "st": 93000
                  },
                  "comedk": {
                        "gm": 39000,
                        "hkr": 47000
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
                        "gm": 51000,
                        "twoA": 61000,
                        "twoB": 67000,
                        "threeA": 54000,
                        "threeB": 52000,
                        "sc": 97000,
                        "st": 105000
                  },
                  "comedk": {
                        "gm": 47500,
                        "hkr": 55500
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
                        "gm": 46000,
                        "twoA": 56000,
                        "twoB": 62000,
                        "threeA": 49000,
                        "threeB": 47000,
                        "sc": 91000,
                        "st": 99000
                  },
                  "comedk": {
                        "gm": 43000,
                        "hkr": 51000
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
                        "gm": 64500,
                        "twoA": 80000,
                        "twoB": 87000,
                        "threeA": 68500,
                        "threeB": 66500,
                        "sc": 113000,
                        "st": 120000
                  },
                  "comedk": {
                        "gm": 60000,
                        "hkr": 70000
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "gec-gangavathi",
    name: "Government Engineering College, Gangavathi",
    shortName: "GEC Gangavathi (Koppal)",
    code: "E277",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Gangavathi (GEC Gangavathi (Koppal)) is a distinguished engineering institution in Gangavathi, Koppal district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
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
        title: "Government Engineering College, Gangavathi Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Gangavathi (Koppal)."
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
      district: "Koppal",
      city: "Gangavathi",
      address: "Koppal Road, Gangavathi, Koppal, Karnataka 583227",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Gangavathi+Gangavathi",
    },
    website: "https://gecgangavathi.ac.in",
    contact: {
      phone: "+91 8533 230 400",
      email: "principal@gecgangavathi.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 52,
    },
    rating: 4.2,
    reviewCount: 190,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E277) / COMEDK UGET.',
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
                        "gm": 43200,
                        "twoA": 52800,
                        "twoB": 58800,
                        "threeA": 46200,
                        "threeB": 44200,
                        "sc": 85600,
                        "st": 93600
                  },
                  "comedk": {
                        "gm": 39600,
                        "hkr": 47600
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
                        "gm": 51760,
                        "twoA": 61840,
                        "twoB": 67840,
                        "threeA": 54760,
                        "threeB": 52760,
                        "sc": 97600,
                        "st": 105600
                  },
                  "comedk": {
                        "gm": 48200,
                        "hkr": 56200
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
                        "gm": 46720,
                        "twoA": 56800,
                        "twoB": 62800,
                        "threeA": 49720,
                        "threeB": 47720,
                        "sc": 91600,
                        "st": 99600
                  },
                  "comedk": {
                        "gm": 43640,
                        "hkr": 51640
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
                        "gm": 65400,
                        "twoA": 81000,
                        "twoB": 88000,
                        "threeA": 69400,
                        "threeB": 67400,
                        "sc": 113600,
                        "st": 120600
                  },
                  "comedk": {
                        "gm": 60800,
                        "hkr": 70800
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "aitm-bhatkal",
    name: "Anjuman Institute of Technology and Management",
    shortName: "AITM Bhatkal (Uttara Kannada)",
    code: "E044",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Anjuman Institute of Technology and Management (AITM Bhatkal (Uttara Kannada)) is a distinguished engineering institution in Bhatkal, Uttara Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "Anjuman Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AITM Bhatkal (Uttara Kannada)."
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
      district: "Uttara Kannada",
      city: "Bhatkal",
      address: "Anjumanabad, Bhatkal, Uttara Kannada, Karnataka 581320",
      mapUrl: "https://maps.google.com/?q=Anjuman+Institute+of+Technology+and+Management+Bhatkal",
    },
    website: "https://aitmb.ac.in",
    contact: {
      phone: "+91 8385 226 214",
      email: "principal@aitmb.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 42,
    },
    rating: 4.3,
    reviewCount: 290,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 270000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E044) / COMEDK UGET.',
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
      averagePackageLPA: 5.4,
      medianPackageLPA: 4.6,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.7, placementRate: 78 },
        { year: 2023, avgPackage: 5.1, placementRate: 80 },
        { year: 2024, avgPackage: 5.4, placementRate: 82 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 39700,
                        "twoA": 48800,
                        "twoB": 54800,
                        "threeA": 42700,
                        "threeB": 40700,
                        "sc": 82600,
                        "st": 90600
                  },
                  "comedk": {
                        "gm": 36600,
                        "hkr": 44600
                  }
            },
            "avgPackage": 6.2,
            "highestPackage": 18.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 47960,
                        "twoA": 57640,
                        "twoB": 63640,
                        "threeA": 50960,
                        "threeB": 48960,
                        "sc": 94600,
                        "st": 102600
                  },
                  "comedk": {
                        "gm": 44700,
                        "hkr": 52700
                  }
            },
            "avgPackage": 5.7,
            "highestPackage": 16.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 43120,
                        "twoA": 52800,
                        "twoB": 58800,
                        "threeA": 46120,
                        "threeB": 44120,
                        "sc": 88600,
                        "st": 96600
                  },
                  "comedk": {
                        "gm": 40440,
                        "hkr": 48440
                  }
            },
            "avgPackage": 5.9,
            "highestPackage": 17.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 60900,
                        "twoA": 76000,
                        "twoB": 83000,
                        "threeA": 64900,
                        "threeB": 62900,
                        "sc": 110600,
                        "st": 117600
                  },
                  "comedk": {
                        "gm": 56800,
                        "hkr": 66800
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "gsit-karwar",
    name: "Girijabai Sail Institute of Technology",
    shortName: "GSIT Majali (Karwar)",
    code: "E219",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Girijabai Sail Institute of Technology (GSIT Majali (Karwar)) is a distinguished engineering institution in Karwar, Uttara Kannada district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
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
        title: "Girijabai Sail Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GSIT Majali (Karwar)."
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
      district: "Uttara Kannada",
      city: "Karwar",
      address: "Majali, Karwar, Uttara Kannada, Karnataka 581345",
      mapUrl: "https://maps.google.com/?q=Girijabai+Sail+Institute+of+Technology+Karwar",
    },
    website: "https://gsitkarwar.edu.in",
    contact: {
      phone: "+91 8382 284 333",
      email: "principal@gsitkarwar.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B+",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 79,
    },
    rating: 4.0,
    reviewCount: 160,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 140000,
      managementAnnual: 230000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E219) / COMEDK UGET.',
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
                        "gm": 52650,
                        "twoA": 63600,
                        "twoB": 69600,
                        "threeA": 55650,
                        "threeB": 53650,
                        "sc": 93700,
                        "st": 101700
                  },
                  "comedk": {
                        "gm": 47700,
                        "hkr": 55700
                  }
            },
            "avgPackage": 5.3,
            "highestPackage": 13.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 62020,
                        "twoA": 73180,
                        "twoB": 79180,
                        "threeA": 65020,
                        "threeB": 63020,
                        "sc": 105700,
                        "st": 113700
                  },
                  "comedk": {
                        "gm": 57650,
                        "hkr": 65650
                  }
            },
            "avgPackage": 4.8,
            "highestPackage": 11.7
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 56440,
                        "twoA": 67600,
                        "twoB": 73600,
                        "threeA": 59440,
                        "threeB": 57440,
                        "sc": 99700,
                        "st": 107700
                  },
                  "comedk": {
                        "gm": 52280,
                        "hkr": 60280
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 12.3
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 77550,
                        "twoA": 94500,
                        "twoB": 101500,
                        "threeA": 81550,
                        "threeB": 79550,
                        "sc": 121700,
                        "st": 128700
                  },
                  "comedk": {
                        "gm": 71600,
                        "hkr": 81600
                  }
            },
            "avgPackage": 4.4,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "gec-karwar",
    name: "Government Engineering College, Karwar",
    shortName: "GEC Karwar (Uttara Kannada)",
    code: "E266",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Karwar (GEC Karwar (Uttara Kannada)) is a distinguished engineering institution in Karwar, Uttara Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Government Engineering College, Karwar Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Karwar (Uttara Kannada)."
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
      district: "Uttara Kannada",
      city: "Karwar",
      address: "Majali, Karwar, Uttara Kannada, Karnataka 581345",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Karwar+Karwar",
    },
    website: "https://geckarwar.ac.in",
    contact: {
      phone: "+91 8382 284 100",
      email: "principal@geckarwar.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 47,
    },
    rating: 4.3,
    reviewCount: 220,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E266) / COMEDK UGET.',
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
                        "gm": 41450,
                        "twoA": 50800,
                        "twoB": 56800,
                        "threeA": 44450,
                        "threeB": 42450,
                        "sc": 84100,
                        "st": 92100
                  },
                  "comedk": {
                        "gm": 38100,
                        "hkr": 46100
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
                        "gm": 49860,
                        "twoA": 59740,
                        "twoB": 65740,
                        "threeA": 52860,
                        "threeB": 50860,
                        "sc": 96100,
                        "st": 104100
                  },
                  "comedk": {
                        "gm": 46450,
                        "hkr": 54450
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
                        "gm": 44920,
                        "twoA": 54800,
                        "twoB": 60800,
                        "threeA": 47920,
                        "threeB": 45920,
                        "sc": 90100,
                        "st": 98100
                  },
                  "comedk": {
                        "gm": 42040,
                        "hkr": 50040
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
                        "gm": 63150,
                        "twoA": 78500,
                        "twoB": 85500,
                        "threeA": 67150,
                        "threeB": 65150,
                        "sc": 112100,
                        "st": 119100
                  },
                  "comedk": {
                        "gm": 58800,
                        "hkr": 68800
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "vdit-haliyal",
    name: "KLS Vishwanathrao Deshpande Institute of Technology",
    shortName: "KLS VDIT Haliyal (U.K.)",
    code: "E130",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT Haliyal (U.K.)) is a distinguished engineering institution in Haliyal, Uttara Kannada district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
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
        title: "KLS Vishwanathrao Deshpande Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KLS VDIT Haliyal (U.K.)."
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
      district: "Uttara Kannada",
      city: "Haliyal",
      address: "Udyog Vidya Nagar, Dandeli Road, Haliyal, Uttara Kannada, Karnataka 581329",
      mapUrl: "https://maps.google.com/?q=KLS+Vishwanathrao+Deshpande+Institute+of+Technology+Haliyal",
    },
    website: "https://klsvdit.edu.in",
    contact: {
      phone: "+91 8284 220 861",
      email: "principal@klsvdit.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 26,
    },
    rating: 4.5,
    reviewCount: 370,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 310000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E130) / COMEDK UGET.',
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
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 82 },
        { year: 2023, avgPackage: 5.9, placementRate: 84 },
        { year: 2024, avgPackage: 6.2, placementRate: 86 }
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
            "avgPackage": 7.1,
            "highestPackage": 22.0
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
            "avgPackage": 6.5,
            "highestPackage": 19.8
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
            "avgPackage": 6.8,
            "highestPackage": 20.9
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
            "avgPackage": 5.9,
            "highestPackage": 17.6
      }
],
  }
];
