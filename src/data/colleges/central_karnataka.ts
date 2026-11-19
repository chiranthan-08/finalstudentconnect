import { College } from '@/types';

export const CENTRAL_KARNATAKA_COLLEGES: College[] = [
  {
    id: "iit-dharwad",
    name: "Indian Institute of Technology Dharwad",
    shortName: "IIT Dharwad",
    code: "U025",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Indian Institute of Technology Dharwad (IIT Dharwad) is a distinguished engineering institution in Dharwad, Dharwad district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 98% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹58.0 LPA Highest CTC with 98% campus placement rate',
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
        title: "Indian Institute of Technology Dharwad Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at IIT Dharwad."
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
      district: "Dharwad",
      city: "Dharwad",
      address: "Permanent Campus, Chikkamalligawad, Dharwad, Karnataka 580007",
      mapUrl: "https://maps.google.com/?q=Indian+Institute+of+Technology+Dharwad+Dharwad",
    },
    website: "https://iitdh.ac.in",
    contact: {
      phone: "+91 836 221 2838",
      email: "pro@iitdh.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 93,
      karnatakaRank: 2,
    },
    rating: 4.9,
    reviewCount: 680,
    fees: {
      kcetAnnual: 120000,
      comedkAnnual: 250000,
      managementAnnual: 350000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U025) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 98,
      totalEligible: 480,
      studentsPlaced: 470,
      highestPackageLPA: 58.0,
      averagePackageLPA: 18.5,
      medianPackageLPA: 15.7,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 17.8, placementRate: 94 },
        { year: 2023, avgPackage: 18.2, placementRate: 96 },
        { year: 2024, avgPackage: 18.5, placementRate: 98 }
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
            "avgPackage": 21.3,
            "highestPackage": 58.0
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
            "avgPackage": 19.4,
            "highestPackage": 52.2
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
            "avgPackage": 20.4,
            "highestPackage": 55.1
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
            "avgPackage": 17.6,
            "highestPackage": 46.4
      }
],
  },
  {
    id: "iiit-dharwad",
    name: "Indian Institute of Information Technology Dharwad",
    shortName: "IIIT Dharwad",
    code: "U026",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Indian Institute of Information Technology Dharwad (IIIT Dharwad) is a distinguished engineering institution in Dharwad, Dharwad district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 95% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Indian Institute of Information Technology Dharwad Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at IIIT Dharwad."
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
      district: "Dharwad",
      city: "Dharwad",
      address: "Ittigatti Road, Near Sattur Colony, Dharwad, Karnataka 580009",
      mapUrl: "https://maps.google.com/?q=Indian+Institute+of+Information+Technology+Dharwad+Dharwad",
    },
    website: "https://iiitdwd.ac.in",
    contact: {
      phone: "+91 836 225 0879",
      email: "contact@iiitdwd.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 5,
    },
    rating: 4.8,
    reviewCount: 520,
    fees: {
      kcetAnnual: 130000,
      comedkAnnual: 280000,
      managementAnnual: 400000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U026) / COMEDK UGET.',
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
      averagePackageLPA: 13.5,
      medianPackageLPA: 11.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 12.8, placementRate: 91 },
        { year: 2023, avgPackage: 13.2, placementRate: 93 },
        { year: 2024, avgPackage: 13.5, placementRate: 95 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 26750,
                        "twoA": 34000,
                        "twoB": 40000,
                        "threeA": 29750,
                        "threeB": 27750,
                        "sc": 71500,
                        "st": 79500
                  },
                  "comedk": {
                        "gm": 25500,
                        "hkr": 33500
                  }
            },
            "avgPackage": 15.5,
            "highestPackage": 48.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 33900,
                        "twoA": 42100,
                        "twoB": 48100,
                        "threeA": 36900,
                        "threeB": 34900,
                        "sc": 83500,
                        "st": 91500
                  },
                  "comedk": {
                        "gm": 31750,
                        "hkr": 39750
                  }
            },
            "avgPackage": 14.2,
            "highestPackage": 43.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 29800,
                        "twoA": 38000,
                        "twoB": 44000,
                        "threeA": 32800,
                        "threeB": 30800,
                        "sc": 77500,
                        "st": 85500
                  },
                  "comedk": {
                        "gm": 28600,
                        "hkr": 36600
                  }
            },
            "avgPackage": 14.9,
            "highestPackage": 45.6
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 44250,
                        "twoA": 57500,
                        "twoB": 64500,
                        "threeA": 48250,
                        "threeB": 46250,
                        "sc": 99500,
                        "st": 106500
                  },
                  "comedk": {
                        "gm": 42000,
                        "hkr": 52000
                  }
            },
            "avgPackage": 12.8,
            "highestPackage": 38.4
      }
],
  },
  {
    id: "kleit-hubballi",
    name: "KLE Institute of Technology",
    shortName: "KLEIT Gokul Rd (Hubballi)",
    code: "E171",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "KLE Institute of Technology (KLEIT Gokul Rd (Hubballi)) is a distinguished engineering institution in Hubballi, Dharwad district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹24.0 LPA Highest CTC with 88% campus placement rate',
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
        title: "KLE Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KLEIT Gokul Rd (Hubballi)."
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
      district: "Dharwad",
      city: "Hubballi",
      address: "Airport Road, Gokul, Hubballi, Dharwad, Karnataka 580027",
      mapUrl: "https://maps.google.com/?q=KLE+Institute+of+Technology+Hubballi",
    },
    website: "https://kleit.ac.in",
    contact: {
      phone: "+91 836 223 2681",
      email: "principal@kleit.ac.in",
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
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 68000,
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
      placementPercentage: 88,
      totalEligible: 480,
      studentsPlaced: 422,
      highestPackageLPA: 24.0,
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
            "highestPackage": 24.0
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
            "highestPackage": 21.6
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
            "highestPackage": 22.8
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
            "highestPackage": 19.2
      }
],
  },
  {
    id: "jain-hubballi",
    name: "Jain College of Engineering and Technology, Hubballi",
    shortName: "JCET Tarihal (Hubballi)",
    code: "E267",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain College of Engineering and Technology, Hubballi (JCET Tarihal (Hubballi)) is a distinguished engineering institution in Hubballi, Dharwad district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "Jain College of Engineering and Technology, Hubballi Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JCET Tarihal (Hubballi)."
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
      district: "Dharwad",
      city: "Hubballi",
      address: "Tarihal Road, Near Hubballi Airport, Hubballi, Dharwad, Karnataka 580026",
      mapUrl: "https://maps.google.com/?q=Jain+College+of+Engineering+and+Technology,+Hubballi+Hubballi",
    },
    website: "https://jcet.ac.in",
    contact: {
      phone: "+91 836 231 1611",
      email: "principal@jcet.ac.in",
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
      process: 'KEA CET Single Window Allotment (Code: E267) / COMEDK UGET.',
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
            "avgPackage": 6.2,
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
            "avgPackage": 5.7,
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
            "avgPackage": 5.9,
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
            "avgPackage": 5.1,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "agmr-varur",
    name: "A.G.M. Rural College of Engineering and Technology",
    shortName: "AGMR Varur (Hubballi)",
    code: "E220",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "A.G.M. Rural College of Engineering and Technology (AGMR Varur (Hubballi)) is a distinguished engineering institution in Hubballi, Dharwad district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "A.G.M. Rural College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AGMR Varur (Hubballi)."
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
      district: "Dharwad",
      city: "Hubballi",
      address: "NH 4, Pune-Bengaluru Highway, Varur, Hubballi Taluk, Dharwad, Karnataka 581207",
      mapUrl: "https://maps.google.com/?q=A.G.M.+Rural+College+of+Engineering+and+Technology+Hubballi",
    },
    website: "https://agmrce.org",
    contact: {
      phone: "+91 836 220 0111",
      email: "principal@agmrce.org",
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
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E220) / COMEDK UGET.',
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
            "avgPackage": 5.5,
            "highestPackage": 14.0
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
            "avgPackage": 5.0,
            "highestPackage": 12.6
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
            "avgPackage": 5.3,
            "highestPackage": 13.3
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
            "avgPackage": 4.6,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "gec-nargund",
    name: "Government Engineering College, Nargund",
    shortName: "GEC Nargund (Gadag)",
    code: "E268",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Nargund (GEC Nargund (Gadag)) is a distinguished engineering institution in Nargund, Gadag district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.0 LPA Highest CTC with 80% campus placement rate',
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
        title: "Government Engineering College, Nargund Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Nargund (Gadag)."
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
      district: "Gadag",
      city: "Nargund",
      address: "Gadag Road, Nargund, Gadag, Karnataka 582207",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Nargund+Nargund",
    },
    website: "https://gecnargund.ac.in",
    contact: {
      phone: "+91 8377 245 100",
      email: "principal@gecnargund.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 49,
    },
    rating: 4.3,
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
      process: 'KEA CET Single Window Allotment (Code: E268) / COMEDK UGET.',
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
      highestPackageLPA: 15.0,
      averagePackageLPA: 5.1,
      medianPackageLPA: 4.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.4, placementRate: 76 },
        { year: 2023, avgPackage: 4.8, placementRate: 78 },
        { year: 2024, avgPackage: 5.1, placementRate: 80 }
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
            "avgPackage": 5.9,
            "highestPackage": 15.0
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
            "avgPackage": 5.4,
            "highestPackage": 13.5
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
            "avgPackage": 5.6,
            "highestPackage": 14.2
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
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "rec-hulkoti",
    name: "Rural Engineering College, Hulkoti",
    shortName: "REC Hulkoti (Gadag)",
    code: "E038",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Rural Engineering College, Hulkoti (REC Hulkoti (Gadag)) is a distinguished engineering institution in Hulkoti, Gadag district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.5 LPA Highest CTC with 78% campus placement rate',
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
        title: "Rural Engineering College, Hulkoti Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at REC Hulkoti (Gadag)."
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
      district: "Gadag",
      city: "Hulkoti",
      address: "Hulkoti Post, Gadag Taluk, Gadag, Karnataka 582205",
      mapUrl: "https://maps.google.com/?q=Rural+Engineering+College,+Hulkoti+Hulkoti",
    },
    website: "https://rechulkoti.edu.in",
    contact: {
      phone: "+91 8372 289 027",
      email: "principal@rechulkoti.edu.in",
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
    reviewCount: 220,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 155000,
      managementAnnual: 250000,
      hostelAnnual: 52000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E038) / COMEDK UGET.',
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
      highestPackageLPA: 15.5,
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
            "avgPackage": 5.6,
            "highestPackage": 15.5
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
            "avgPackage": 5.1,
            "highestPackage": 14.0
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
            "avgPackage": 5.4,
            "highestPackage": 14.7
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
            "avgPackage": 4.7,
            "highestPackage": 12.4
      }
],
  },
  {
    id: "skadagi-laxmeshwar",
    name: "Smt. Kamala and Venkappa M. Agadi College of Engineering and Technology",
    shortName: "SKSVMACET Laxmeshwar (Gadag)",
    code: "E149",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Smt. Kamala and Venkappa M. Agadi College of Engineering and Technology (SKSVMACET Laxmeshwar (Gadag)) is a distinguished engineering institution in Laxmeshwar, Gadag district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
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
        title: "Smt. Kamala and Venkappa M. Agadi College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SKSVMACET Laxmeshwar (Gadag)."
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
      district: "Gadag",
      city: "Laxmeshwar",
      address: "Shri Sevadhama Campus, Laxmeshwar, Gadag, Karnataka 582116",
      mapUrl: "https://maps.google.com/?q=Smt.+Kamala+and+Venkappa+M.+Agadi+College+of+Engineering+and+Technology+Laxmeshwar",
    },
    website: "https://agadiengcollege.com",
    contact: {
      phone: "+91 8378 287 888",
      email: "principal@agadiengcollege.com",
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
    reviewCount: 270,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 270000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E149) / COMEDK UGET.',
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
            "avgPackage": 6.0,
            "highestPackage": 17.0
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
            "avgPackage": 5.5,
            "highestPackage": 15.3
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
            "avgPackage": 5.7,
            "highestPackage": 16.1
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
            "avgPackage": 4.9,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "tce-gadag",
    name: "Tontadarya College of Engineering",
    shortName: "TCE Mundargi Rd (Gadag)",
    code: "E056",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Tontadarya College of Engineering (TCE Mundargi Rd (Gadag)) is a distinguished engineering institution in Gadag, Gadag district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
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
        title: "Tontadarya College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at TCE Mundargi Rd (Gadag)."
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
      district: "Gadag",
      city: "Gadag",
      address: "Mundargi Road, Gadag, Karnataka 582101",
      mapUrl: "https://maps.google.com/?q=Tontadarya+College+of+Engineering+Gadag",
    },
    website: "https://tcegadag.ac.in",
    contact: {
      phone: "+91 8372 235 341",
      email: "principal@tcegadag.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 40,
    },
    rating: 4.4,
    reviewCount: 310,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 56000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E056) / COMEDK UGET.',
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
    id: "gec-haveri",
    name: "Government Engineering College, Haveri",
    shortName: "GEC Haveri",
    code: "E269",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Haveri (GEC Haveri) is a distinguished engineering institution in Haveri, Haveri district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Government Engineering College, Haveri Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Haveri."
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
      district: "Haveri",
      city: "Haveri",
      address: "Devagiri, Haveri, Karnataka 581110",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Haveri+Haveri",
    },
    website: "https://gechaveri.ac.in",
    contact: {
      phone: "+91 8375 233 400",
      email: "principal@gechaveri.ac.in",
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
      process: 'KEA CET Single Window Allotment (Code: E269) / COMEDK UGET.',
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
    id: "stjit-ranebennur",
    name: "S.T.J. Institute of Technology",
    shortName: "STJIT Ranebennur (Haveri)",
    code: "E039",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "S.T.J. Institute of Technology (STJIT Ranebennur (Haveri)) is a distinguished engineering institution in Ranebennur, Haveri district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.5 LPA Highest CTC with 83% campus placement rate',
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
        title: "S.T.J. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at STJIT Ranebennur (Haveri)."
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
      district: "Haveri",
      city: "Ranebennur",
      address: "PB Road, Ranebennur, Haveri, Karnataka 581115",
      mapUrl: "https://maps.google.com/?q=S.T.J.+Institute+of+Technology+Ranebennur",
    },
    website: "https://stjit.ac.in",
    contact: {
      phone: "+91 8373 266 343",
      email: "principal@stjit.ac.in",
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
    reviewCount: 320,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E039) / COMEDK UGET.',
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
      highestPackageLPA: 18.5,
      averagePackageLPA: 5.5,
      medianPackageLPA: 4.7,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.8, placementRate: 79 },
        { year: 2023, avgPackage: 5.2, placementRate: 81 },
        { year: 2024, avgPackage: 5.5, placementRate: 83 }
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
            "highestPackage": 18.5
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
            "highestPackage": 16.7
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
            "highestPackage": 17.6
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
            "highestPackage": 14.8
      }
],
  },
  {
    id: "bitm-ballari",
    name: "Ballari Institute of Technology and Management",
    shortName: "BITM Ballari",
    code: "E041",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Ballari Institute of Technology and Management (BITM Ballari) is a distinguished engineering institution in Ballari, Ballari district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
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
        title: "Ballari Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BITM Ballari."
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
      district: "Ballari",
      city: "Ballari",
      address: "Jnana Gangotri Campus, Hospet Road, Allipur, Ballari, Karnataka 583104",
      mapUrl: "https://maps.google.com/?q=Ballari+Institute+of+Technology+and+Management+Ballari",
    },
    website: "https://bitm.edu.in",
    contact: {
      phone: "+91 8392 237 150",
      email: "principal@bitm.edu.in",
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
    reviewCount: 360,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 320000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E041) / COMEDK UGET.',
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
      averagePackageLPA: 5.8,
      medianPackageLPA: 4.9,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.1, placementRate: 81 },
        { year: 2023, avgPackage: 5.5, placementRate: 83 },
        { year: 2024, avgPackage: 5.8, placementRate: 85 }
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
            "avgPackage": 6.7,
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
            "avgPackage": 6.1,
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
            "avgPackage": 6.4,
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
            "avgPackage": 5.5,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "pdit-hosapete",
    name: "Proudhadevaraya Institute of Technology",
    shortName: "PDIT Hosapete",
    code: "E042",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Proudhadevaraya Institute of Technology (PDIT Hosapete) is a distinguished engineering institution in Hosapete, Vijayanagara district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
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
        title: "Proudhadevaraya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at PDIT Hosapete."
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
      district: "Vijayanagara",
      city: "Hosapete",
      address: "TB Dam Road, Hosapete, Vijayanagara, Karnataka 583225",
      mapUrl: "https://maps.google.com/?q=Proudhadevaraya+Institute+of+Technology+Hosapete",
    },
    website: "https://pdit.ac.in",
    contact: {
      phone: "+91 8394 258 051",
      email: "principal@pdit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 64,
    },
    rating: 4.2,
    reviewCount: 210,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 260000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E042) / COMEDK UGET.',
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
      averagePackageLPA: 4.9,
      medianPackageLPA: 4.2,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.2, placementRate: 75 },
        { year: 2023, avgPackage: 4.6, placementRate: 77 },
        { year: 2024, avgPackage: 4.9, placementRate: 79 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 47400,
                        "twoA": 57600,
                        "twoB": 63600,
                        "threeA": 50400,
                        "threeB": 48400,
                        "sc": 89200,
                        "st": 97200
                  },
                  "comedk": {
                        "gm": 43200,
                        "hkr": 51200
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
                        "gm": 56320,
                        "twoA": 66880,
                        "twoB": 72880,
                        "threeA": 59320,
                        "threeB": 57320,
                        "sc": 101200,
                        "st": 109200
                  },
                  "comedk": {
                        "gm": 52400,
                        "hkr": 60400
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
                        "gm": 51040,
                        "twoA": 61600,
                        "twoB": 67600,
                        "threeA": 54040,
                        "threeB": 52040,
                        "sc": 95200,
                        "st": 103200
                  },
                  "comedk": {
                        "gm": 47480,
                        "hkr": 55480
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
                        "gm": 70800,
                        "twoA": 87000,
                        "twoB": 94000,
                        "threeA": 74800,
                        "threeB": 72800,
                        "sc": 117200,
                        "st": 124200
                  },
                  "comedk": {
                        "gm": 65600,
                        "hkr": 75600
                  }
            },
            "avgPackage": 4.7,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "kishkinda-univ-ballari",
    name: "Kishkinda University",
    shortName: "Kishkinda Univ Ballari",
    code: "U018",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Kishkinda University (Kishkinda Univ Ballari) is a distinguished engineering institution in Ballari, Ballari district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹20.0 LPA Highest CTC with 82% campus placement rate',
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
        title: "Kishkinda University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Kishkinda Univ Ballari."
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
      district: "Ballari",
      city: "Ballari",
      address: "Hospet Road, Allipur, Ballari, Karnataka 583104",
      mapUrl: "https://maps.google.com/?q=Kishkinda+University+Ballari",
    },
    website: "https://kishkindauniversity.edu.in",
    contact: {
      phone: "+91 8392 237 160",
      email: "admissions@kishkindauniversity.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 48,
    },
    rating: 4.3,
    reviewCount: 190,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 300000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U018) / COMEDK UGET.',
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
      highestPackageLPA: 20.0,
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
            "avgPackage": 6.3,
            "highestPackage": 20.0
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
            "avgPackage": 5.8,
            "highestPackage": 18.0
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
            "avgPackage": 6.1,
            "highestPackage": 19.0
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
            "avgPackage": 5.2,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "gmit-davanagere",
    name: "G.M. Institute of Technology",
    shortName: "GMIT PB Road (Davanagere)",
    code: "E063",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "G.M. Institute of Technology (GMIT PB Road (Davanagere)) is a distinguished engineering institution in Davanagere, Davanagere district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
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
        title: "G.M. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GMIT PB Road (Davanagere)."
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
      district: "Davanagere",
      city: "Davanagere",
      address: "Post Box No. 4, P.B. Road, Davanagere, Karnataka 577006",
      mapUrl: "https://maps.google.com/?q=G.M.+Institute+of+Technology+Davanagere",
    },
    website: "https://gmit.ac.in",
    contact: {
      phone: "+91 8192 233 377",
      email: "principal@gmit.ac.in",
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
    reviewCount: 400,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 330000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E063) / COMEDK UGET.',
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
      averagePackageLPA: 6.5,
      medianPackageLPA: 5.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.8, placementRate: 83 },
        { year: 2023, avgPackage: 6.2, placementRate: 85 },
        { year: 2024, avgPackage: 6.5, placementRate: 87 }
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
            "avgPackage": 7.5,
            "highestPackage": 24.0
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
            "avgPackage": 6.8,
            "highestPackage": 21.6
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
            "avgPackage": 7.2,
            "highestPackage": 22.8
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
            "avgPackage": 6.2,
            "highestPackage": 19.2
      }
],
  },
  {
    id: "jit-davanagere",
    name: "Jain Institute of Technology",
    shortName: "JIT Avaragere (Davanagere)",
    code: "E211",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain Institute of Technology (JIT Avaragere (Davanagere)) is a distinguished engineering institution in Davanagere, Davanagere district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹19.0 LPA Highest CTC with 83% campus placement rate',
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
        title: "Jain Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JIT Avaragere (Davanagere)."
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
      district: "Davanagere",
      city: "Davanagere",
      address: "Avargere, Near Shamanur, Davanagere, Karnataka 577004",
      mapUrl: "https://maps.google.com/?q=Jain+Institute+of+Technology+Davanagere",
    },
    website: "https://jitd.in",
    contact: {
      phone: "+91 8192 297 002",
      email: "principal@jitd.in",
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
    reviewCount: 310,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 290000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E211) / COMEDK UGET.',
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
      highestPackageLPA: 19.0,
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
            "avgPackage": 6.7,
            "highestPackage": 19.0
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
            "avgPackage": 6.1,
            "highestPackage": 17.1
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
            "avgPackage": 6.4,
            "highestPackage": 18.1
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
            "avgPackage": 5.5,
            "highestPackage": 15.2
      }
],
  },
  {
    id: "gm-univ-davanagere",
    name: "GM University",
    shortName: "GM University Davanagere",
    code: "U027",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "GM University (GM University Davanagere) is a distinguished engineering institution in Davanagere, Davanagere district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹28.0 LPA Highest CTC with 89% campus placement rate',
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
        title: "GM University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GM University Davanagere."
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
      district: "Davanagere",
      city: "Davanagere",
      address: "PB Road, Davanagere, Karnataka 577006",
      mapUrl: "https://maps.google.com/?q=GM+University+Davanagere",
    },
    website: "https://gmu.ac.in",
    contact: {
      phone: "+91 8192 233 388",
      email: "admissions@gmu.ac.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 21,
    },
    rating: 4.6,
    reviewCount: 420,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 230000,
      managementAnnual: 360000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U027) / COMEDK UGET.',
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
      highestPackageLPA: 28.0,
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
            "avgPackage": 8.3,
            "highestPackage": 28.0
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
            "avgPackage": 7.6,
            "highestPackage": 25.2
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
            "avgPackage": 7.9,
            "highestPackage": 26.6
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
            "avgPackage": 6.8,
            "highestPackage": 22.4
      }
],
  },
  {
    id: "pesitm-shivamogga",
    name: "PES Institute of Technology and Management",
    shortName: "PESITM Sagar Rd (Shivamogga)",
    code: "E158",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "PES Institute of Technology and Management (PESITM Sagar Rd (Shivamogga)) is a distinguished engineering institution in Shivamogga, Shivamogga district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "PES Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at PESITM Sagar Rd (Shivamogga)."
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
      district: "Shivamogga",
      city: "Shivamogga",
      address: "NH 206, Sagar Road, Shivamogga, Karnataka 577204",
      mapUrl: "https://maps.google.com/?q=PES+Institute+of+Technology+and+Management+Shivamogga",
    },
    website: "https://pestrust.edu.in/pesitm",
    contact: {
      phone: "+91 8182 640 833",
      email: "principal_pesitm@pestrust.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 27,
    },
    rating: 4.5,
    reviewCount: 390,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E158) / COMEDK UGET.',
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
            "highestPackage": 22.0
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
            "highestPackage": 19.8
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
            "highestPackage": 20.9
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
            "highestPackage": 17.6
      }
],
  },
  {
    id: "gec-challakere",
    name: "Government Engineering College, Challakere",
    shortName: "GEC Challakere (Chitradurga)",
    code: "E271",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Challakere (GEC Challakere (Chitradurga)) is a distinguished engineering institution in Challakere, Chitradurga district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Government Engineering College, Challakere Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Challakere (Chitradurga)."
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
      district: "Chitradurga",
      city: "Challakere",
      address: "Near Science City, Challakere, Chitradurga, Karnataka 577522",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Challakere+Challakere",
    },
    website: "https://gecchallakere.ac.in",
    contact: {
      phone: "+91 8195 250 200",
      email: "principal@gecchallakere.ac.in",
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
      process: 'KEA CET Single Window Allotment (Code: E271) / COMEDK UGET.',
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
  }
];
