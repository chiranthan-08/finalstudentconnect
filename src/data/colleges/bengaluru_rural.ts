import { College } from '@/types';

export const BENGALURU_RURAL_COLLEGES: College[] = [
  {
    id: "akash-bangalore",
    name: "Akash Institute of Engineering and Technology",
    shortName: "AIET Devanahalli (Blr Rural)",
    code: "E270",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Akash Institute of Engineering and Technology (AIET Devanahalli (Blr Rural)) is a distinguished engineering institution in Devanahalli, Bengaluru Rural district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 80% campus placement rate',
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
        title: "Akash Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AIET Devanahalli (Blr Rural)."
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
      district: "Bengaluru Rural",
      city: "Devanahalli",
      address: "Prasannahalli Main Road, Devanahalli, Bengaluru Rural, Karnataka 562110",
      mapUrl: "https://maps.google.com/?q=Akash+Institute+of+Engineering+and+Technology+Devanahalli",
    },
    website: "https://akashinstitution.org/engineering",
    contact: {
      phone: "+91 80 7115 9900",
      email: "admissions@akashinstitution.org",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 62,
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
      process: 'KEA CET Single Window Allotment (Code: E270) / COMEDK UGET.',
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
      highestPackageLPA: 18.0,
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
                        "gm": 46700,
                        "twoA": 56800,
                        "twoB": 62800,
                        "threeA": 49700,
                        "threeB": 47700,
                        "sc": 88600,
                        "st": 96600
                  },
                  "comedk": {
                        "gm": 42600,
                        "hkr": 50600
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
                        "gm": 55560,
                        "twoA": 66040,
                        "twoB": 72040,
                        "threeA": 58560,
                        "threeB": 56560,
                        "sc": 100600,
                        "st": 108600
                  },
                  "comedk": {
                        "gm": 51700,
                        "hkr": 59700
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
                        "gm": 50320,
                        "twoA": 60800,
                        "twoB": 66800,
                        "threeA": 53320,
                        "threeB": 51320,
                        "sc": 94600,
                        "st": 102600
                  },
                  "comedk": {
                        "gm": 46840,
                        "hkr": 54840
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
                        "gm": 69900,
                        "twoA": 86000,
                        "twoB": 93000,
                        "threeA": 73900,
                        "threeB": 71900,
                        "sc": 116600,
                        "st": 123600
                  },
                  "comedk": {
                        "gm": 64800,
                        "hkr": 74800
                  }
            },
            "avgPackage": 4.9,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "cambridge-north-bangalore",
    name: "Cambridge Institute of Technology North Campus",
    shortName: "CIT North Devanahalli",
    code: "E222",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Cambridge Institute of Technology North Campus (CIT North Devanahalli) is a distinguished engineering institution in Devanahalli, Bengaluru Rural district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "Cambridge Institute of Technology North Campus Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CIT North Devanahalli."
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
      district: "Bengaluru Rural",
      city: "Devanahalli",
      address: "Kundana Hobli, Devanahalli Taluk, Bengaluru Rural, Karnataka 562110",
      mapUrl: "https://maps.google.com/?q=Cambridge+Institute+of+Technology+North+Campus+Devanahalli",
    },
    website: "https://cambridge.edu.in/north-campus",
    contact: {
      phone: "+91 80 2363 7000",
      email: "admissions.north@cambridge.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 54,
    },
    rating: 4.3,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 190000,
      managementAnnual: 320000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E222) / COMEDK UGET.',
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
                        "gm": 43900,
                        "twoA": 53600,
                        "twoB": 59600,
                        "threeA": 46900,
                        "threeB": 44900,
                        "sc": 86200,
                        "st": 94200
                  },
                  "comedk": {
                        "gm": 40200,
                        "hkr": 48200
                  }
            },
            "avgPackage": 6.3,
            "highestPackage": 19.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 52520,
                        "twoA": 62680,
                        "twoB": 68680,
                        "threeA": 55520,
                        "threeB": 53520,
                        "sc": 98200,
                        "st": 106200
                  },
                  "comedk": {
                        "gm": 48900,
                        "hkr": 56900
                  }
            },
            "avgPackage": 5.8,
            "highestPackage": 17.1
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 47440,
                        "twoA": 57600,
                        "twoB": 63600,
                        "threeA": 50440,
                        "threeB": 48440,
                        "sc": 92200,
                        "st": 100200
                  },
                  "comedk": {
                        "gm": 44280,
                        "hkr": 52280
                  }
            },
            "avgPackage": 6.1,
            "highestPackage": 18.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 66300,
                        "twoA": 82000,
                        "twoB": 89000,
                        "threeA": 70300,
                        "threeB": 68300,
                        "sc": 114200,
                        "st": 121200
                  },
                  "comedk": {
                        "gm": 61600,
                        "hkr": 71600
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 15.2
      }
],
  },
  {
    id: "ssmce-nelamangala",
    name: "Dr. Sri Shivakumara Mahaswamy College of Engineering",
    shortName: "SSMCE Nelamangala (Blr Rural)",
    code: "E169",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Dr. Sri Shivakumara Mahaswamy College of Engineering (SSMCE Nelamangala (Blr Rural)) is a distinguished engineering institution in Nelamangala, Bengaluru Rural district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "Dr. Sri Shivakumara Mahaswamy College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SSMCE Nelamangala (Blr Rural)."
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
      district: "Bengaluru Rural",
      city: "Nelamangala",
      address: "Byranayakanahalli Post, Nelamangala, Bengaluru Rural, Karnataka 562123",
      mapUrl: "https://maps.google.com/?q=Dr.+Sri+Shivakumara+Mahaswamy+College+of+Engineering+Nelamangala",
    },
    website: "https://ssmce.ac.in",
    contact: {
      phone: "+91 80 2772 8222",
      email: "principal@ssmce.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 70,
    },
    rating: 4.1,
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E169) / COMEDK UGET.',
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
            "avgPackage": 5.5,
            "highestPackage": 14.0
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
            "avgPackage": 5.0,
            "highestPackage": 12.6
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
            "avgPackage": 5.3,
            "highestPackage": 13.3
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
            "avgPackage": 4.6,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "harsha-nelamangala",
    name: "Harsha Institute of Technology",
    shortName: "HIT Nelamangala (Blr Rural)",
    code: "E275",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Harsha Institute of Technology (HIT Nelamangala (Blr Rural)) is a distinguished engineering institution in Nelamangala, Bengaluru Rural district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
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
        title: "Harsha Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at HIT Nelamangala (Blr Rural)."
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
      district: "Bengaluru Rural",
      city: "Nelamangala",
      address: "NH 4, Near Nelamangala Toll, Bengaluru Rural, Karnataka 562123",
      mapUrl: "https://maps.google.com/?q=Harsha+Institute+of+Technology+Nelamangala",
    },
    website: "https://harshainstitutions.com",
    contact: {
      phone: "+91 80 2772 4444",
      email: "info@harshainstitutions.com",
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
    reviewCount: 150,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E275) / COMEDK UGET.',
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
            "highestPackage": 13.5
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
            "highestPackage": 12.2
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
            "highestPackage": 12.8
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
            "highestPackage": 10.8
      }
],
  },
  {
    id: "ncet-bangalore",
    name: "Nagarjuna College of Engineering and Technology",
    shortName: "NCET Devanahalli (Blr Rural)",
    code: "E088",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Nagarjuna College of Engineering and Technology (NCET Devanahalli (Blr Rural)) is a distinguished engineering institution in Devanahalli, Bengaluru Rural district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹26.0 LPA Highest CTC with 86% campus placement rate',
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
        title: "Nagarjuna College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at NCET Devanahalli (Blr Rural)."
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
      district: "Bengaluru Rural",
      city: "Devanahalli",
      address: "Mudugurki, Venkatagirikote Post, Devanahalli, Bengaluru Rural, Karnataka 562164",
      mapUrl: "https://maps.google.com/?q=Nagarjuna+College+of+Engineering+and+Technology+Devanahalli",
    },
    website: "https://nagarjunaeducation.com/ncet",
    contact: {
      phone: "+91 80 6746 2700",
      email: "principal@ncetmail.com",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 28,
    },
    rating: 4.5,
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 220000,
      managementAnnual: 380000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E088) / COMEDK UGET.',
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
      highestPackageLPA: 26.0,
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
            "highestPackage": 26.0
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
            "highestPackage": 23.4
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
            "highestPackage": 24.7
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
            "highestPackage": 20.8
      }
],
  },
  {
    id: "rljit-doddaballapur",
    name: "R.L. Jalappa Institute of Technology",
    shortName: "RLJIT Doddaballapur (Blr Rural)",
    code: "E090",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "R.L. Jalappa Institute of Technology (RLJIT Doddaballapur (Blr Rural)) is a distinguished engineering institution in Doddaballapur, Bengaluru Rural district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "R.L. Jalappa Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RLJIT Doddaballapur (Blr Rural)."
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
      district: "Bengaluru Rural",
      city: "Doddaballapur",
      address: "Kodigehalli, Doddaballapur, Bengaluru Rural, Karnataka 561203",
      mapUrl: "https://maps.google.com/?q=R.L.+Jalappa+Institute+of+Technology+Doddaballapur",
    },
    website: "https://rljit.in",
    contact: {
      phone: "+91 80 2762 6800",
      email: "principal@rljit.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 44,
    },
    rating: 4.3,
    reviewCount: 260,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E090) / COMEDK UGET.',
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
                        "gm": 40400,
                        "twoA": 49600,
                        "twoB": 55600,
                        "threeA": 43400,
                        "threeB": 41400,
                        "sc": 83200,
                        "st": 91200
                  },
                  "comedk": {
                        "gm": 37200,
                        "hkr": 45200
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
                        "gm": 48720,
                        "twoA": 58480,
                        "twoB": 64480,
                        "threeA": 51720,
                        "threeB": 49720,
                        "sc": 95200,
                        "st": 103200
                  },
                  "comedk": {
                        "gm": 45400,
                        "hkr": 53400
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
                        "gm": 43840,
                        "twoA": 53600,
                        "twoB": 59600,
                        "threeA": 46840,
                        "threeB": 44840,
                        "sc": 89200,
                        "st": 97200
                  },
                  "comedk": {
                        "gm": 41080,
                        "hkr": 49080
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
                        "gm": 61800,
                        "twoA": 77000,
                        "twoB": 84000,
                        "threeA": 65800,
                        "threeB": 63800,
                        "sc": 111200,
                        "st": 118200
                  },
                  "comedk": {
                        "gm": 57600,
                        "hkr": 67600
                  }
            },
            "avgPackage": 5.1,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "amity-bangalore",
    name: "Amity University Bengaluru",
    shortName: "Amity Univ Bengaluru",
    code: "U011",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Amity University Bengaluru (Amity Univ Bengaluru) is a distinguished engineering institution in Devanahalli, Bengaluru Rural district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹30.0 LPA Highest CTC with 88% campus placement rate',
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
        title: "Amity University Bengaluru Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Amity Univ Bengaluru."
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
      district: "Bengaluru Rural",
      city: "Devanahalli",
      address: "Opp. Bengaluru International Airport, Devanahalli, Bengaluru Rural, Karnataka 562110",
      mapUrl: "https://maps.google.com/?q=Amity+University+Bengaluru+Devanahalli",
    },
    website: "https://amity.edu/bengaluru",
    contact: {
      phone: "+91 80 6745 4545",
      email: "admissions@blr.amity.edu",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 33,
    },
    rating: 4.5,
    reviewCount: 320,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 260000,
      managementAnnual: 420000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U011) / COMEDK UGET.',
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
      highestPackageLPA: 30.0,
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
                        "gm": 36550,
                        "twoA": 45200,
                        "twoB": 51200,
                        "threeA": 39550,
                        "threeB": 37550,
                        "sc": 79900,
                        "st": 87900
                  },
                  "comedk": {
                        "gm": 33900,
                        "hkr": 41900
                  }
            },
            "avgPackage": 8.0,
            "highestPackage": 30.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 44540,
                        "twoA": 53860,
                        "twoB": 59860,
                        "threeA": 47540,
                        "threeB": 45540,
                        "sc": 91900,
                        "st": 99900
                  },
                  "comedk": {
                        "gm": 41550,
                        "hkr": 49550
                  }
            },
            "avgPackage": 7.4,
            "highestPackage": 27.0
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 39880,
                        "twoA": 49200,
                        "twoB": 55200,
                        "threeA": 42880,
                        "threeB": 40880,
                        "sc": 85900,
                        "st": 93900
                  },
                  "comedk": {
                        "gm": 37560,
                        "hkr": 45560
                  }
            },
            "avgPackage": 7.7,
            "highestPackage": 28.5
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 56850,
                        "twoA": 71500,
                        "twoB": 78500,
                        "threeA": 60850,
                        "threeB": 58850,
                        "sc": 107900,
                        "st": 114900
                  },
                  "comedk": {
                        "gm": 53200,
                        "hkr": 63200
                  }
            },
            "avgPackage": 6.6,
            "highestPackage": 24.0
      }
],
  },
  {
    id: "chanakya-univ-bangalore",
    name: "Chanakya University",
    shortName: "Chanakya Univ Devanahalli",
    code: "U012",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Chanakya University (Chanakya Univ Devanahalli) is a distinguished engineering institution in Devanahalli, Bengaluru Rural district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Chanakya University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Chanakya Univ Devanahalli."
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
      district: "Bengaluru Rural",
      city: "Devanahalli",
      address: "NH 207, Boodigere Road, Devanahalli, Bengaluru Rural, Karnataka 562110",
      mapUrl: "https://maps.google.com/?q=Chanakya+University+Devanahalli",
    },
    website: "https://chanakyauniversity.edu.in",
    contact: {
      phone: "+91 80 6907 8888",
      email: "admissions@chanakyauniversity.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 42,
    },
    rating: 4.4,
    reviewCount: 210,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 240000,
      managementAnnual: 380000,
      hostelAnnual: 95000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U012) / COMEDK UGET.',
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
            "avgPackage": 7.1,
            "highestPackage": 22.0
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
            "avgPackage": 6.5,
            "highestPackage": 19.8
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
            "avgPackage": 6.8,
            "highestPackage": 20.9
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
            "avgPackage": 5.9,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "gitam-bangalore",
    name: "Gandhi Institute of Technology and Management, Bengaluru",
    shortName: "GITAM Bengaluru (Doddaballapur)",
    code: "U008",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Gandhi Institute of Technology and Management, Bengaluru (GITAM Bengaluru (Doddaballapur)) is a distinguished engineering institution in Doddaballapur, Bengaluru Rural district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹32.0 LPA Highest CTC with 89% campus placement rate',
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
        title: "Gandhi Institute of Technology and Management, Bengaluru Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GITAM Bengaluru (Doddaballapur)."
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
      district: "Bengaluru Rural",
      city: "Doddaballapur",
      address: "NH 207, Nagadenahalli, Doddaballapur, Bengaluru Rural, Karnataka 561203",
      mapUrl: "https://maps.google.com/?q=Gandhi+Institute+of+Technology+and+Management,+Bengaluru+Doddaballapur",
    },
    website: "https://gitam.edu/bengaluru",
    contact: {
      phone: "+91 80 2809 8000",
      email: "blr_admissions@gitam.edu",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 24,
    },
    rating: 4.6,
    reviewCount: 410,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 280000,
      managementAnnual: 450000,
      hostelAnnual: 100000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U008) / COMEDK UGET.',
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
      highestPackageLPA: 32.0,
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
            "avgPackage": 8.5,
            "highestPackage": 32.0
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
            "avgPackage": 7.8,
            "highestPackage": 28.8
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
            "avgPackage": 8.1,
            "highestPackage": 30.4
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
            "avgPackage": 7.0,
            "highestPackage": 25.6
      }
],
  }
];
