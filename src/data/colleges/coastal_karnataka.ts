import { College } from '@/types';

export const COASTAL_KARNATAKA_COLLEGES: College[] = [
  {
    id: "mit-manipal",
    name: "Manipal Institute of Technology",
    shortName: "MIT Manipal",
    code: "U009",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Manipal Institute of Technology (MIT Manipal) is a distinguished engineering institution in Manipal, Udupi district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 96% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹54.7 LPA Highest CTC with 96% campus placement rate',
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
        title: "Manipal Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MIT Manipal."
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
      district: "Udupi",
      city: "Manipal",
      address: "Udupi-Karkala Road, Eshwar Nagar, Manipal, Udupi, Karnataka 576104",
      mapUrl: "https://maps.google.com/?q=Manipal+Institute+of+Technology+Manipal",
    },
    website: "https://manipal.edu/mit",
    contact: {
      phone: "+91 820 292 4000",
      email: "admissions@manipal.edu",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 61,
      karnatakaRank: 3,
    },
    rating: 4.9,
    reviewCount: 750,
    fees: {
      kcetAnnual: 120000,
      comedkAnnual: 380000,
      managementAnnual: 600000,
      hostelAnnual: 125000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U009) / COMEDK UGET.',
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
      highestPackageLPA: 54.7,
      averagePackageLPA: 13.5,
      medianPackageLPA: 11.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 12.8, placementRate: 92 },
        { year: 2023, avgPackage: 13.2, placementRate: 94 },
        { year: 2024, avgPackage: 13.5, placementRate: 96 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 26050,
                        "twoA": 33200,
                        "twoB": 39200,
                        "threeA": 29050,
                        "threeB": 27050,
                        "sc": 70900,
                        "st": 78900
                  },
                  "comedk": {
                        "gm": 24900,
                        "hkr": 32900
                  }
            },
            "avgPackage": 15.5,
            "highestPackage": 54.7
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 33140,
                        "twoA": 41260,
                        "twoB": 47260,
                        "threeA": 36140,
                        "threeB": 34140,
                        "sc": 82900,
                        "st": 90900
                  },
                  "comedk": {
                        "gm": 31050,
                        "hkr": 39050
                  }
            },
            "avgPackage": 14.2,
            "highestPackage": 49.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 29080,
                        "twoA": 37200,
                        "twoB": 43200,
                        "threeA": 32080,
                        "threeB": 30080,
                        "sc": 76900,
                        "st": 84900
                  },
                  "comedk": {
                        "gm": 27960,
                        "hkr": 35960
                  }
            },
            "avgPackage": 14.9,
            "highestPackage": 52.0
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 43350,
                        "twoA": 56500,
                        "twoB": 63500,
                        "threeA": 47350,
                        "threeB": 45350,
                        "sc": 98900,
                        "st": 105900
                  },
                  "comedk": {
                        "gm": 41200,
                        "hkr": 51200
                  }
            },
            "avgPackage": 12.8,
            "highestPackage": 43.8
      }
],
  },
  {
    id: "mite-moodbidri",
    name: "Mangalore Institute of Technology and Engineering",
    shortName: "MITE Moodbidri (Mangaluru)",
    code: "E150",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Mangalore Institute of Technology and Engineering (MITE Moodbidri (Mangaluru)) is a distinguished engineering institution in Moodbidri, Dakshina Kannada district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
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
        title: "Mangalore Institute of Technology and Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MITE Moodbidri (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Moodbidri",
      address: "Badaga Mijar, Near Moodbidri, Dakshina Kannada, Karnataka 574225",
      mapUrl: "https://maps.google.com/?q=Mangalore+Institute+of+Technology+and+Engineering+Moodbidri",
    },
    website: "https://mite.ac.in",
    contact: {
      phone: "+91 8258 262 695",
      email: "info@mite.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 19,
    },
    rating: 4.6,
    reviewCount: 460,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 220000,
      managementAnnual: 350000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E150) / COMEDK UGET.',
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
            "avgPackage": 8.3,
            "highestPackage": 28.0
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
            "avgPackage": 7.6,
            "highestPackage": 25.2
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
            "avgPackage": 7.9,
            "highestPackage": 26.6
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
            "avgPackage": 6.8,
            "highestPackage": 22.4
      }
],
  },
  {
    id: "canara-eng-mangalore",
    name: "Canara Engineering College",
    shortName: "Canara EC Benjanapadavu",
    code: "E070",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Canara Engineering College (Canara EC Benjanapadavu) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
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
        title: "Canara Engineering College Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Canara EC Benjanapadavu."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Benjanapadavu, Bantwal Taluk, Mangaluru, Dakshina Kannada, Karnataka 574219",
      mapUrl: "https://maps.google.com/?q=Canara+Engineering+College+Mangaluru",
    },
    website: "https://canaraengineering.in",
    contact: {
      phone: "+91 824 227 8666",
      email: "principal@canaraengineering.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 21,
    },
    rating: 4.5,
    reviewCount: 410,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 330000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E070) / COMEDK UGET.',
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
    id: "alvas-moodbidri",
    name: "Alva's Institute of Engineering and Technology",
    shortName: "Alva's AIET Moodbidri",
    code: "E170",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Alva's Institute of Engineering and Technology (Alva's AIET Moodbidri) is a distinguished engineering institution in Moodbidri, Dakshina Kannada district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
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
        title: "Alva's Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Alva's AIET Moodbidri."
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
      district: "Dakshina Kannada",
      city: "Moodbidri",
      address: "Shobhavana Campus, Mijar, Moodbidri, Dakshina Kannada, Karnataka 574225",
      mapUrl: "https://maps.google.com/?q=Alva's+Institute+of+Engineering+and+Technology+Moodbidri",
    },
    website: "https://aiet.org.in",
    contact: {
      phone: "+91 8258 262 725",
      email: "principalaiet08@gmail.com",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 23,
    },
    rating: 4.5,
    reviewCount: 430,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E170) / COMEDK UGET.',
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
    id: "ajiet-mangalore",
    name: "A.J. Institute of Engineering and Technology",
    shortName: "AJIET Kottara Chowki (Mangaluru)",
    code: "E262",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "A.J. Institute of Engineering and Technology (AJIET Kottara Chowki (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹19.5 LPA Highest CTC with 84% campus placement rate',
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
        title: "A.J. Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AJIET Kottara Chowki (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "NH 66, Kottara Chowki, Mangaluru, Dakshina Kannada, Karnataka 575006",
      mapUrl: "https://maps.google.com/?q=A.J.+Institute+of+Engineering+and+Technology+Mangaluru",
    },
    website: "https://ajiet.edu.in",
    contact: {
      phone: "+91 824 245 5048",
      email: "ajietmangalore@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 36,
    },
    rating: 4.4,
    reviewCount: 310,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 190000,
      managementAnnual: 300000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E262) / COMEDK UGET.',
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
      highestPackageLPA: 19.5,
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
            "avgPackage": 6.9,
            "highestPackage": 19.5
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
            "avgPackage": 6.3,
            "highestPackage": 17.6
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
            "avgPackage": 6.6,
            "highestPackage": 18.5
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
            "avgPackage": 5.7,
            "highestPackage": 15.6
      }
],
  },
  {
    id: "bearys-mangalore",
    name: "Bearys Institute of Technology",
    shortName: "BIT Innoli (Mangaluru)",
    code: "E172",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bearys Institute of Technology (BIT Innoli (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Bearys Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BIT Innoli (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Near Mangalore University, Innoli, Pavoor, Mangaluru, Dakshina Kannada, Karnataka 574199",
      mapUrl: "https://maps.google.com/?q=Bearys+Institute+of+Technology+Mangaluru",
    },
    website: "https://bitmangalore.edu.in",
    contact: {
      phone: "+91 824 223 5100",
      email: "principal@bitmangalore.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 55,
    },
    rating: 4.2,
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 270000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E172) / COMEDK UGET.',
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
            "avgPackage": 6.0,
            "highestPackage": 16.0
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
            "avgPackage": 5.5,
            "highestPackage": 14.4
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
            "avgPackage": 5.7,
            "highestPackage": 15.2
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
            "avgPackage": 4.9,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "kvg-sullia",
    name: "KVG College of Engineering",
    shortName: "KVGCE Sullia (D.K.)",
    code: "E040",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "KVG College of Engineering (KVGCE Sullia (D.K.)) is a distinguished engineering institution in Sullia, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "KVG College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KVGCE Sullia (D.K.)."
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
      district: "Dakshina Kannada",
      city: "Sullia",
      address: "Kurunjibhag, Sullia, Dakshina Kannada, Karnataka 574327",
      mapUrl: "https://maps.google.com/?q=KVG+College+of+Engineering+Sullia",
    },
    website: "https://kvgengg.com",
    contact: {
      phone: "+91 8257 231 148",
      email: "principal@kvgengg.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 41,
    },
    rating: 4.3,
    reviewCount: 280,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 180000,
      managementAnnual: 280000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E040) / COMEDK UGET.',
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
                        "gm": 39350,
                        "twoA": 48400,
                        "twoB": 54400,
                        "threeA": 42350,
                        "threeB": 40350,
                        "sc": 82300,
                        "st": 90300
                  },
                  "comedk": {
                        "gm": 36300,
                        "hkr": 44300
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
                        "gm": 47580,
                        "twoA": 57220,
                        "twoB": 63220,
                        "threeA": 50580,
                        "threeB": 48580,
                        "sc": 94300,
                        "st": 102300
                  },
                  "comedk": {
                        "gm": 44350,
                        "hkr": 52350
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
                        "gm": 42760,
                        "twoA": 52400,
                        "twoB": 58400,
                        "threeA": 45760,
                        "threeB": 43760,
                        "sc": 88300,
                        "st": 96300
                  },
                  "comedk": {
                        "gm": 40120,
                        "hkr": 48120
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
                        "gm": 60450,
                        "twoA": 75500,
                        "twoB": 82500,
                        "threeA": 64450,
                        "threeB": 62450,
                        "sc": 110300,
                        "st": 117300
                  },
                  "comedk": {
                        "gm": 56400,
                        "hkr": 66400
                  }
            },
            "avgPackage": 5.2,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "karavali-mangalore",
    name: "Karavali Institute of Technology",
    shortName: "KIT Neermarga (Mangaluru)",
    code: "E146",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Karavali Institute of Technology (KIT Neermarga (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
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
        title: "Karavali Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KIT Neermarga (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Karavali Gardens, Mangaluru-Neermarga Road, Mangaluru, Dakshina Kannada, Karnataka 575029",
      mapUrl: "https://maps.google.com/?q=Karavali+Institute+of+Technology+Mangaluru",
    },
    website: "https://karavali.edu.in",
    contact: {
      phone: "+91 824 227 2405",
      email: "info@karavali.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 61,
    },
    rating: 4.1,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E146) / COMEDK UGET.',
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
            "avgPackage": 5.8,
            "highestPackage": 15.0
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
            "avgPackage": 5.2,
            "highestPackage": 13.5
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
            "avgPackage": 5.5,
            "highestPackage": 14.2
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
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "marine-mangalore",
    name: "Mangalore Marine College and Technology",
    shortName: "MMCT Mangaluru (Marine)",
    code: "E214",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Mangalore Marine College and Technology (MMCT Mangaluru (Marine)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
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
        title: "Mangalore Marine College and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MMCT Mangaluru (Marine)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Ballalbagh / Padil, Mangaluru, Dakshina Kannada, Karnataka 575003",
      mapUrl: "https://maps.google.com/?q=Mangalore+Marine+College+and+Technology+Mangaluru",
    },
    website: "https://mmct.edu.in",
    contact: {
      phone: "+91 824 245 4224",
      email: "info@mmct.edu.in",
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
    reviewCount: 180,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 80000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E214) / COMEDK UGET.',
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
      averagePackageLPA: 6.2,
      medianPackageLPA: 5.3,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.5, placementRate: 78 },
        { year: 2023, avgPackage: 5.9, placementRate: 80 },
        { year: 2024, avgPackage: 6.2, placementRate: 82 }
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
            "avgPackage": 7.1,
            "highestPackage": 18.0
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
            "avgPackage": 6.5,
            "highestPackage": 16.2
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
            "avgPackage": 6.8,
            "highestPackage": 17.1
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
            "avgPackage": 5.9,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "pace-mangalore",
    name: "P.A. College of Engineering",
    shortName: "PACE Nadupadav (Mangaluru)",
    code: "E061",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "P.A. College of Engineering (PACE Nadupadav (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
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
        title: "P.A. College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at PACE Nadupadav (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Nadupadav, Montepadav Post, Kairangala, Mangaluru, Dakshina Kannada, Karnataka 574153",
      mapUrl: "https://maps.google.com/?q=P.A.+College+of+Engineering+Mangaluru",
    },
    website: "https://pace.edu.in",
    contact: {
      phone: "+91 824 228 4701",
      email: "principal@pace.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 30,
    },
    rating: 4.4,
    reviewCount: 360,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 195000,
      managementAnnual: 300000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E061) / COMEDK UGET.',
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
            "avgPackage": 6.9,
            "highestPackage": 20.0
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
            "avgPackage": 6.3,
            "highestPackage": 18.0
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
            "avgPackage": 6.6,
            "highestPackage": 19.0
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
            "avgPackage": 5.7,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "sdmit-ujire",
    name: "SDM Institute of Technology",
    shortName: "SDMIT Ujire (D.K.)",
    code: "E159",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "SDM Institute of Technology (SDMIT Ujire (D.K.)) is a distinguished engineering institution in Ujire, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
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
        title: "SDM Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SDMIT Ujire (D.K.)."
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
      district: "Dakshina Kannada",
      city: "Ujire",
      address: "SDM Campus, Dharmasthala Road, Ujire, Belthangady Taluk, Dakshina Kannada, Karnataka 574240",
      mapUrl: "https://maps.google.com/?q=SDM+Institute+of+Technology+Ujire",
    },
    website: "https://sdmit.in",
    contact: {
      phone: "+91 8256 236 970",
      email: "principal@sdmit.in",
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
      comedkAnnual: 180000,
      managementAnnual: 280000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E159) / COMEDK UGET.',
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
            "highestPackage": 19.0
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
            "highestPackage": 17.1
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
            "highestPackage": 18.1
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
            "highestPackage": 15.2
      }
],
  },
  {
    id: "sdit-kenjar",
    name: "Shree Devi Institute of Technology",
    shortName: "SDIT Kenjar (Mangaluru)",
    code: "E142",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shree Devi Institute of Technology (SDIT Kenjar (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
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
        title: "Shree Devi Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SDIT Kenjar (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Airport Road, Kenjar, Mangaluru, Dakshina Kannada, Karnataka 574142",
      mapUrl: "https://maps.google.com/?q=Shree+Devi+Institute+of+Technology+Mangaluru",
    },
    website: "https://sdc.ac.in/sdit",
    contact: {
      phone: "+91 824 225 4104",
      email: "sdit@sdc.ac.in",
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
    reviewCount: 240,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 170000,
      managementAnnual: 270000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E142) / COMEDK UGET.',
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
      averagePackageLPA: 5.2,
      medianPackageLPA: 4.4,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.5, placementRate: 75 },
        { year: 2023, avgPackage: 4.9, placementRate: 77 },
        { year: 2024, avgPackage: 5.2, placementRate: 79 }
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
            "avgPackage": 6.0,
            "highestPackage": 16.5
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
            "avgPackage": 5.5,
            "highestPackage": 14.8
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
            "avgPackage": 5.7,
            "highestPackage": 15.7
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
            "avgPackage": 4.9,
            "highestPackage": 13.2
      }
],
  },
  {
    id: "sit-valachil",
    name: "Srinivas Institute of Technology",
    shortName: "SIT Valachil (Mangaluru)",
    code: "E148",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Srinivas Institute of Technology (SIT Valachil (Mangaluru)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
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
        title: "Srinivas Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SIT Valachil (Mangaluru)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Valachil, Merlapadavu, Farangipete Post, Mangaluru, Dakshina Kannada, Karnataka 574143",
      mapUrl: "https://maps.google.com/?q=Srinivas+Institute+of+Technology+Mangaluru",
    },
    website: "https://sitmng.ac.in",
    contact: {
      phone: "+91 824 227 4730",
      email: "principalsit@srinivasgroup.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 38,
    },
    rating: 4.3,
    reviewCount: 330,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 185000,
      managementAnnual: 290000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E148) / COMEDK UGET.',
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
      averagePackageLPA: 5.9,
      medianPackageLPA: 5.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.2, placementRate: 80 },
        { year: 2023, avgPackage: 5.6, placementRate: 82 },
        { year: 2024, avgPackage: 5.9, placementRate: 84 }
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
            "avgPackage": 6.8,
            "highestPackage": 20.0
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
            "avgPackage": 6.2,
            "highestPackage": 18.0
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
            "avgPackage": 6.5,
            "highestPackage": 19.0
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
            "avgPackage": 5.6,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "sse-mukka",
    name: "Srinivas School of Engineering",
    shortName: "SSE Mukka (Surathkal)",
    code: "E198",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Srinivas School of Engineering (SSE Mukka (Surathkal)) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
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
        title: "Srinivas School of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SSE Mukka (Surathkal)."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Srinivas Integrated Campus, Mukka, Surathkal, Mangaluru, Dakshina Kannada, Karnataka 574146",
      mapUrl: "https://maps.google.com/?q=Srinivas+School+of+Engineering+Mangaluru",
    },
    website: "https://srinivasgroup.com/sse",
    contact: {
      phone: "+91 824 247 7456",
      email: "info@srinivasgroup.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 52,
    },
    rating: 4.2,
    reviewCount: 250,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E198) / COMEDK UGET.',
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
            "avgPackage": 6.2,
            "highestPackage": 17.5
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
            "avgPackage": 5.7,
            "highestPackage": 15.8
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
            "avgPackage": 5.9,
            "highestPackage": 16.6
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
            "avgPackage": 5.1,
            "highestPackage": 14.0
      }
],
  },
  {
    id: "srinivas-univ-mangalore",
    name: "Srinivas University (College of Engineering and Technology)",
    shortName: "Srinivas Univ Mukka",
    code: "U017",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Srinivas University (College of Engineering and Technology) (Srinivas Univ Mukka) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
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
        title: "Srinivas University (College of Engineering and Technology) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Srinivas Univ Mukka."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Mukka, Surathkal, Mangaluru, Dakshina Kannada, Karnataka 574146",
      mapUrl: "https://maps.google.com/?q=Srinivas+University+(College+of+Engineering+and+Technology)+Mangaluru",
    },
    website: "https://srinivasuniversity.edu.in",
    contact: {
      phone: "+91 824 247 7455",
      email: "admissions@srinivasuniversity.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 29,
    },
    rating: 4.4,
    reviewCount: 350,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U017) / COMEDK UGET.',
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
            "avgPackage": 7.2,
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
            "avgPackage": 6.6,
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
            "avgPackage": 6.9,
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
            "avgPackage": 6.0,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "st-aloysius-mangalore",
    name: "St. Aloysius (Deemed to be University)",
    shortName: "St. Aloysius Univ Mangaluru",
    code: "U019",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "St. Aloysius (Deemed to be University) (St. Aloysius Univ Mangaluru) is a distinguished engineering institution in Mangaluru, Dakshina Kannada district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
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
        title: "St. Aloysius (Deemed to be University) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at St. Aloysius Univ Mangaluru."
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
      district: "Dakshina Kannada",
      city: "Mangaluru",
      address: "Light House Hill, Kodialbail, Mangaluru, Dakshina Kannada, Karnataka 575003",
      mapUrl: "https://maps.google.com/?q=St.+Aloysius+(Deemed+to+be+University)+Mangaluru",
    },
    website: "https://staloysius.edu.in",
    contact: {
      phone: "+91 824 244 9700",
      email: "registrar@staloysius.edu.in",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 15,
    },
    rating: 4.7,
    reviewCount: 510,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 240000,
      managementAnnual: 380000,
      hostelAnnual: 85000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U019) / COMEDK UGET.',
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
            "highestPackage": 28.0
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
            "highestPackage": 25.2
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
            "highestPackage": 26.6
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
            "highestPackage": 22.4
      }
],
  },
  {
    id: "vcet-puttur",
    name: "Vivekananda College of Engineering and Technology",
    shortName: "VCET Puttur (D.K.)",
    code: "E085",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Vivekananda College of Engineering and Technology (VCET Puttur (D.K.)) is a distinguished engineering institution in Puttur, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
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
        title: "Vivekananda College of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VCET Puttur (D.K.)."
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
      district: "Dakshina Kannada",
      city: "Puttur",
      address: "Nehru Nagar, Puttur, Dakshina Kannada, Karnataka 574203",
      mapUrl: "https://maps.google.com/?q=Vivekananda+College+of+Engineering+and+Technology+Puttur",
    },
    website: "https://vcetputtur.ac.in",
    contact: {
      phone: "+91 8251 234 555",
      email: "principal@vcetputtur.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 33,
    },
    rating: 4.4,
    reviewCount: 340,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 190000,
      managementAnnual: 300000,
      hostelAnnual: 65000,
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
            "avgPackage": 7.0,
            "highestPackage": 20.0
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
            "avgPackage": 6.4,
            "highestPackage": 18.0
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
            "avgPackage": 6.7,
            "highestPackage": 19.0
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
            "avgPackage": 5.8,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "yit-moodbidri",
    name: "Yenepoya Institute of Technology",
    shortName: "YIT Moodbidri (D.K.)",
    code: "E173",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Yenepoya Institute of Technology (YIT Moodbidri (D.K.)) is a distinguished engineering institution in Moodbidri, Dakshina Kannada district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹19.0 LPA Highest CTC with 84% campus placement rate',
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
        title: "Yenepoya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at YIT Moodbidri (D.K.)."
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
      district: "Dakshina Kannada",
      city: "Moodbidri",
      address: "N.H. 169, Thodar, Mijar Post, Moodbidri, Dakshina Kannada, Karnataka 574225",
      mapUrl: "https://maps.google.com/?q=Yenepoya+Institute+of+Technology+Moodbidri",
    },
    website: "https://yit.edu.in",
    contact: {
      phone: "+91 8258 262 713",
      email: "principal@yit.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 37,
    },
    rating: 4.4,
    reviewCount: 320,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 185000,
      managementAnnual: 290000,
      hostelAnnual: 72000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E173) / COMEDK UGET.',
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
      highestPackageLPA: 19.0,
      averagePackageLPA: 5.9,
      medianPackageLPA: 5.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.2, placementRate: 80 },
        { year: 2023, avgPackage: 5.6, placementRate: 82 },
        { year: 2024, avgPackage: 5.9, placementRate: 84 }
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
            "avgPackage": 6.8,
            "highestPackage": 19.0
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
            "avgPackage": 6.2,
            "highestPackage": 17.1
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
            "avgPackage": 6.5,
            "highestPackage": 18.1
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
            "avgPackage": 5.6,
            "highestPackage": 15.2
      }
],
  },
  {
    id: "mitk-kundapura",
    name: "Moodlakatte Institute of Technology",
    shortName: "MITK Kundapura (Udupi)",
    code: "E139",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Moodlakatte Institute of Technology (MITK Kundapura (Udupi)) is a distinguished engineering institution in Kundapura, Udupi district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.0 LPA Highest CTC with 79% campus placement rate',
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
        title: "Moodlakatte Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MITK Kundapura (Udupi)."
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
      district: "Udupi",
      city: "Kundapura",
      address: "Moodlakatte, Golihole Post, Kundapura Taluk, Udupi, Karnataka 576217",
      mapUrl: "https://maps.google.com/?q=Moodlakatte+Institute+of+Technology+Kundapura",
    },
    website: "https://mitkundapura.com",
    contact: {
      phone: "+91 8254 237 258",
      email: "principal@mitkundapura.com",
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
    reviewCount: 210,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 260000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E139) / COMEDK UGET.',
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
      highestPackageLPA: 16.0,
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
            "avgPackage": 5.9,
            "highestPackage": 16.0
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
            "avgPackage": 5.4,
            "highestPackage": 14.4
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
            "avgPackage": 5.6,
            "highestPackage": 15.2
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
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "smvitm-bantakal",
    name: "Shri Madhwa Vadiraja Institute of Technology and Management",
    shortName: "SMVITM Bantakal (Udupi)",
    code: "E199",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM Bantakal (Udupi)) is a distinguished engineering institution in Bantakal, Udupi district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹21.0 LPA Highest CTC with 86% campus placement rate',
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
        title: "Shri Madhwa Vadiraja Institute of Technology and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SMVITM Bantakal (Udupi)."
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
      district: "Udupi",
      city: "Bantakal",
      address: "Vishwothama Nagar, Bantakal, Udupi, Karnataka 574115",
      mapUrl: "https://maps.google.com/?q=Shri+Madhwa+Vadiraja+Institute+of+Technology+and+Management+Bantakal",
    },
    website: "https://sode-edu.in",
    contact: {
      phone: "+91 820 258 9182",
      email: "principal@sode-edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 32,
    },
    rating: 4.5,
    reviewCount: 340,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E199) / COMEDK UGET.',
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
      highestPackageLPA: 21.0,
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
            "highestPackage": 21.0
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
            "highestPackage": 18.9
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
            "highestPackage": 19.9
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
            "highestPackage": 16.8
      }
],
  },
  {
    id: "mahe-manipal",
    name: "Manipal Academy of Higher Education",
    shortName: "MAHE Manipal Main Campus",
    code: "U020",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Manipal Academy of Higher Education (MAHE Manipal Main Campus) is a distinguished engineering institution in Manipal, Udupi district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 97% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
      '₹58.0 LPA Highest CTC with 97% campus placement rate',
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
        title: "Manipal Academy of Higher Education Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MAHE Manipal Main Campus."
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
      district: "Udupi",
      city: "Manipal",
      address: "Madhav Nagar, Manipal, Udupi, Karnataka 576104",
      mapUrl: "https://maps.google.com/?q=Manipal+Academy+of+Higher+Education+Manipal",
    },
    website: "https://manipal.edu",
    contact: {
      phone: "+91 820 292 2400",
      email: "admissions@manipal.edu",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 6,
      karnatakaRank: 1,
    },
    rating: 4.9,
    reviewCount: 890,
    fees: {
      kcetAnnual: 120000,
      comedkAnnual: 380000,
      managementAnnual: 600000,
      hostelAnnual: 130000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U020) / COMEDK UGET.',
      managementQuotaDetails: 'Direct institutional admission quota available through college office.',
    },
    sourceInfo: {
      source: 'KEA CET Official Allotment Matrix & Institutional Placement Records',
      lastUpdated: '2024-2025',
      verificationStatus: 'Verified',
    },
    placements: {
      year: 2024,
      placementPercentage: 97,
      totalEligible: 480,
      studentsPlaced: 465,
      highestPackageLPA: 58.0,
      averagePackageLPA: 14.2,
      medianPackageLPA: 12.1,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 13.5, placementRate: 93 },
        { year: 2023, avgPackage: 13.9, placementRate: 95 },
        { year: 2024, avgPackage: 14.2, placementRate: 97 }
      ],
    },
    branches: [
      {
            "branchCode": "CSE",
            "branchName": "Computer Science & Engineering",
            "intakeSeats": 180,
            "cutoffs": {
                  "kcet": {
                        "gm": 25350,
                        "twoA": 32400,
                        "twoB": 38400,
                        "threeA": 28350,
                        "threeB": 26350,
                        "sc": 70300,
                        "st": 78300
                  },
                  "comedk": {
                        "gm": 24300,
                        "hkr": 32300
                  }
            },
            "avgPackage": 16.3,
            "highestPackage": 58.0
      },
      {
            "branchCode": "ISE",
            "branchName": "Information Science & Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 32380,
                        "twoA": 40420,
                        "twoB": 46420,
                        "threeA": 35380,
                        "threeB": 33380,
                        "sc": 82300,
                        "st": 90300
                  },
                  "comedk": {
                        "gm": 30350,
                        "hkr": 38350
                  }
            },
            "avgPackage": 14.9,
            "highestPackage": 52.2
      },
      {
            "branchCode": "AIML",
            "branchName": "Artificial Intelligence & Machine Learning",
            "intakeSeats": 60,
            "cutoffs": {
                  "kcet": {
                        "gm": 28360,
                        "twoA": 36400,
                        "twoB": 42400,
                        "threeA": 31360,
                        "threeB": 29360,
                        "sc": 76300,
                        "st": 84300
                  },
                  "comedk": {
                        "gm": 27320,
                        "hkr": 35320
                  }
            },
            "avgPackage": 15.6,
            "highestPackage": 55.1
      },
      {
            "branchCode": "ECE",
            "branchName": "Electronics & Communication Engineering",
            "intakeSeats": 120,
            "cutoffs": {
                  "kcet": {
                        "gm": 42450,
                        "twoA": 55500,
                        "twoB": 62500,
                        "threeA": 46450,
                        "threeB": 44450,
                        "sc": 98300,
                        "st": 105300
                  },
                  "comedk": {
                        "gm": 40400,
                        "hkr": 50400
                  }
            },
            "avgPackage": 13.5,
            "highestPackage": 46.4
      }
],
  }
];
