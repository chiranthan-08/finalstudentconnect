import { College } from '@/types';

export const SOUTH_KARNATAKA_COLLEGES: College[] = [
  {
    id: "atme-mysore",
    name: "ATME College of Engineering",
    shortName: "ATME Bannur Rd (Mysuru)",
    code: "E196",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "ATME College of Engineering (ATME Bannur Rd (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 87% annual placement conversion.",
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
        title: "ATME College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at ATME Bannur Rd (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "13th KM Stone, Bannur Road, Mysuru, Karnataka 570028",
      mapUrl: "https://maps.google.com/?q=ATME+College+of+Engineering+Mysuru",
    },
    website: "https://atme.in",
    contact: {
      phone: "+91 821 295 4081",
      email: "principal@atme.in",
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
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E196) / COMEDK UGET.',
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
            "highestPackage": 24.0
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
            "highestPackage": 21.6
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
            "highestPackage": 22.8
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
            "highestPackage": 19.2
      }
],
  },
  {
    id: "gsss-women-mysore",
    name: "GSSS Institute of Engineering and Technology for Women",
    shortName: "GSSSIETW KRS Rd (Mysuru)",
    code: "E100",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "GSSS Institute of Engineering and Technology for Women (GSSSIETW KRS Rd (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 90% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
      '₹26.0 LPA Highest CTC with 90% campus placement rate',
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
        title: "GSSS Institute of Engineering and Technology for Women Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GSSSIETW KRS Rd (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "KRS Road, Metagalli, Mysuru, Karnataka 570016",
      mapUrl: "https://maps.google.com/?q=GSSS+Institute+of+Engineering+and+Technology+for+Women+Mysuru",
    },
    website: "https://gecgssst.ac.in",
    contact: {
      phone: "+91 821 258 8304",
      email: "gsssietw@gsss.edu.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
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
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E100) / COMEDK UGET.',
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
      highestPackageLPA: 26.0,
      averagePackageLPA: 7.0,
      medianPackageLPA: 6.0,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 6.3, placementRate: 86 },
        { year: 2023, avgPackage: 6.7, placementRate: 88 },
        { year: 2024, avgPackage: 7.0, placementRate: 90 }
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
            "avgPackage": 8.0,
            "highestPackage": 26.0
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
            "avgPackage": 7.4,
            "highestPackage": 23.4
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
            "avgPackage": 7.7,
            "highestPackage": 24.7
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
            "avgPackage": 6.6,
            "highestPackage": 20.8
      }
],
  },
  {
    id: "mit-thandavapura",
    name: "Maharaja Institute of Technology, Thandavapura",
    shortName: "MIT Thandavapura (Nanjangud)",
    code: "E223",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Maharaja Institute of Technology, Thandavapura (MIT Thandavapura (Nanjangud)) is a distinguished engineering institution in Nanjangud, Mysuru district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "Maharaja Institute of Technology, Thandavapura Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MIT Thandavapura (Nanjangud)."
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
      district: "Mysuru",
      city: "Nanjangud",
      address: "Thandavapura, Nanjangud Taluk, Mysuru, Karnataka 571302",
      mapUrl: "https://maps.google.com/?q=Maharaja+Institute+of+Technology,+Thandavapura+Nanjangud",
    },
    website: "https://mitt.edu.in",
    contact: {
      phone: "+91 8221 226 261",
      email: "principal@mitt.edu.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 45,
    },
    rating: 4.3,
    reviewCount: 270,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E223) / COMEDK UGET.',
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
            "highestPackage": 18.0
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
            "highestPackage": 16.2
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
            "highestPackage": 17.1
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
            "highestPackage": 14.4
      }
],
  },
  {
    id: "mycem-mysore",
    name: "Mysore College of Engineering and Management",
    shortName: "MYCEM Chikkanahalli (Mysuru)",
    code: "E224",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Mysore College of Engineering and Management (MYCEM Chikkanahalli (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "Mysore College of Engineering and Management Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MYCEM Chikkanahalli (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "Chikkanahalli, Varuna Hobli, Mysuru, Karnataka 570010",
      mapUrl: "https://maps.google.com/?q=Mysore+College+of+Engineering+and+Management+Mysuru",
    },
    website: "https://mycem.edu.in",
    contact: {
      phone: "+91 821 259 8899",
      email: "info@mycem.edu.in",
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
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 150000,
      managementAnnual: 250000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E224) / COMEDK UGET.',
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
            "avgPackage": 5.5,
            "highestPackage": 14.0
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
            "avgPackage": 5.0,
            "highestPackage": 12.6
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
            "avgPackage": 5.3,
            "highestPackage": 13.3
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
            "avgPackage": 4.6,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "nieit-mysore",
    name: "NIE Institute of Technology",
    shortName: "NIEIT Koorgalli (Mysuru)",
    code: "E166",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "NIE Institute of Technology (NIEIT Koorgalli (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
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
        title: "NIE Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at NIEIT Koorgalli (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "Koorgalli Industrial Area, Hootagalli, Mysuru, Karnataka 570018",
      mapUrl: "https://maps.google.com/?q=NIE+Institute+of+Technology+Mysuru",
    },
    website: "https://nieit.ac.in",
    contact: {
      phone: "+91 821 240 3733",
      email: "principal@nieit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 29,
    },
    rating: 4.5,
    reviewCount: 370,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E166) / COMEDK UGET.',
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
            "avgPackage": 7.8,
            "highestPackage": 25.0
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
            "avgPackage": 7.1,
            "highestPackage": 22.5
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
            "avgPackage": 7.5,
            "highestPackage": 23.8
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
            "avgPackage": 6.5,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "sit-hebbal-mysore",
    name: "Seshadripuram Institute of Technology",
    shortName: "SIT Hebbal Indl (Mysuru)",
    code: "E225",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Seshadripuram Institute of Technology (SIT Hebbal Indl (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
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
        title: "Seshadripuram Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SIT Hebbal Indl (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "Hebbal Industrial Area, Mysuru, Karnataka 570016",
      mapUrl: "https://maps.google.com/?q=Seshadripuram+Institute+of+Technology+Mysuru",
    },
    website: "https://sitmysore.edu.in",
    contact: {
      phone: "+91 821 241 1234",
      email: "info@sitmysore.edu.in",
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
    reviewCount: 210,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 270000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E225) / COMEDK UGET.',
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
            "avgPackage": 5.9,
            "highestPackage": 16.0
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
            "avgPackage": 5.4,
            "highestPackage": 14.4
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
            "avgPackage": 5.6,
            "highestPackage": 15.2
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
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "vviet-mysore",
    name: "Vidya Vikas Institute of Engineering and Technology",
    shortName: "VVIET Alanahalli (Mysuru)",
    code: "E052",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Vidya Vikas Institute of Engineering and Technology (VVIET Alanahalli (Mysuru)) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
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
        title: "Vidya Vikas Institute of Engineering and Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at VVIET Alanahalli (Mysuru)."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "#127-128, Bannur Road, Alanahalli, Mysuru, Karnataka 570028",
      mapUrl: "https://maps.google.com/?q=Vidya+Vikas+Institute+of+Engineering+and+Technology+Mysuru",
    },
    website: "https://vidyavikas.edu.in/vviet",
    contact: {
      phone: "+91 821 247 1232",
      email: "principal@vidyavikas.edu.in",
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
    reviewCount: 360,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E052) / COMEDK UGET.',
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
            "avgPackage": 7.1,
            "highestPackage": 21.0
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
            "avgPackage": 6.5,
            "highestPackage": 18.9
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
            "avgPackage": 6.8,
            "highestPackage": 19.9
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
            "avgPackage": 5.9,
            "highestPackage": 16.8
      }
],
  },
  {
    id: "uom-engineering-mysore",
    name: "University of Mysore (School of Engineering)",
    shortName: "Univ of Mysore Engg",
    code: "U028",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "University of Mysore (School of Engineering) (Univ of Mysore Engg) is a distinguished engineering institution in Mysuru, Mysuru district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 91% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹30.0 LPA Highest CTC with 91% campus placement rate',
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
        title: "University of Mysore (School of Engineering) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Univ of Mysore Engg."
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
      district: "Mysuru",
      city: "Mysuru",
      address: "Manasagangotri Campus, Mysuru, Karnataka 570006",
      mapUrl: "https://maps.google.com/?q=University+of+Mysore+(School+of+Engineering)+Mysuru",
    },
    website: "https://uni-mysore.ac.in",
    contact: {
      phone: "+91 821 241 9301",
      email: "registrar@uni-mysore.ac.in",
    },
    collegeType: "Government",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 12,
    },
    rating: 4.7,
    reviewCount: 530,
    fees: {
      kcetAnnual: 50000,
      comedkAnnual: 140000,
      managementAnnual: 180000,
      hostelAnnual: 50000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U028) / COMEDK UGET.',
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
      highestPackageLPA: 30.0,
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
            "avgPackage": 9.2,
            "highestPackage": 30.0
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
            "avgPackage": 8.4,
            "highestPackage": 27.0
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
            "avgPackage": 8.8,
            "highestPackage": 28.5
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
            "avgPackage": 7.6,
            "highestPackage": 24.0
      }
],
  },
  {
    id: "bgsit-mandya",
    name: "B.G.S. Institute of Technology",
    shortName: "BGSIT BG Nagar (Mandya)",
    code: "E138",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "B.G.S. Institute of Technology (BGSIT BG Nagar (Mandya)) is a distinguished engineering institution in BG Nagar, Mandya district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
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
        title: "B.G.S. Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BGSIT BG Nagar (Mandya)."
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
      district: "Mandya",
      city: "BG Nagar",
      address: "BG Nagar, Bellur Cross, Nagamangala Taluk, Mandya, Karnataka 571448",
      mapUrl: "https://maps.google.com/?q=B.G.S.+Institute+of+Technology+BG+Nagar",
    },
    website: "https://bgsit.ac.in",
    contact: {
      phone: "+91 8234 288 418",
      email: "principalbgsit@rediffmail.com",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 28,
    },
    rating: 4.4,
    reviewCount: 380,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 195000,
      managementAnnual: 310000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E138) / COMEDK UGET.',
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
            "avgPackage": 7.0,
            "highestPackage": 20.0
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
            "avgPackage": 6.4,
            "highestPackage": 18.0
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
            "avgPackage": 6.7,
            "highestPackage": 19.0
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
            "avgPackage": 5.8,
            "highestPackage": 16.0
      }
],
  },
  {
    id: "cauvery-it-mandya",
    name: "Cauvery Institute of Technology",
    shortName: "CIT Sundahalli (Mandya)",
    code: "E226",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Cauvery Institute of Technology (CIT Sundahalli (Mandya)) is a distinguished engineering institution in Mandya, Mandya district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "Cauvery Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CIT Sundahalli (Mandya)."
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
      district: "Mandya",
      city: "Mandya",
      address: "Sundahalli, Mandya Taluk, Mandya, Karnataka 571402",
      mapUrl: "https://maps.google.com/?q=Cauvery+Institute+of+Technology+Mandya",
    },
    website: "https://cauveryit.edu.in",
    contact: {
      phone: "+91 8232 235 600",
      email: "info@cauveryit.edu.in",
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
      comedkAnnual: 150000,
      managementAnnual: 240000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E226) / COMEDK UGET.',
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
            "avgPackage": 5.4,
            "highestPackage": 14.0
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
            "avgPackage": 4.9,
            "highestPackage": 12.6
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
            "avgPackage": 5.2,
            "highestPackage": 13.3
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
            "avgPackage": 4.5,
            "highestPackage": 11.2
      }
],
  },
  {
    id: "gmit-maddur",
    name: "G. Madegowda Institute of Technology",
    shortName: "GMIT Maddur (Mandya)",
    code: "E192",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "G. Madegowda Institute of Technology (GMIT Maddur (Mandya)) is a distinguished engineering institution in Maddur, Mandya district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
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
        title: "G. Madegowda Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GMIT Maddur (Mandya)."
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
      district: "Mandya",
      city: "Maddur",
      address: "Bharathinagar, Maddur Taluk, Mandya, Karnataka 571422",
      mapUrl: "https://maps.google.com/?q=G.+Madegowda+Institute+of+Technology+Maddur",
    },
    website: "https://gmitmaddur.org",
    contact: {
      phone: "+91 8232 245 422",
      email: "gmitprincipal@gmail.com",
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
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E192) / COMEDK UGET.',
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
            "avgPackage": 5.8,
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
            "avgPackage": 5.2,
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
            "avgPackage": 5.5,
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
            "avgPackage": 4.8,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "gec-krpete",
    name: "Government Engineering College, Krishnarajapete",
    shortName: "GEC KR Pete (Mandya)",
    code: "E227",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Krishnarajapete (GEC KR Pete (Mandya)) is a distinguished engineering institution in Krishnarajapete, Mandya district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹16.5 LPA Highest CTC with 81% campus placement rate',
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
        title: "Government Engineering College, Krishnarajapete Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC KR Pete (Mandya)."
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
      district: "Mandya",
      city: "Krishnarajapete",
      address: "GEC Campus, Krishnarajapete, Mandya, Karnataka 571426",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Krishnarajapete+Krishnarajapete",
    },
    website: "https://geckrpete.ac.in",
    contact: {
      phone: "+91 8230 262 001",
      email: "principal@geckrpete.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 44,
    },
    rating: 4.3,
    reviewCount: 250,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E227) / COMEDK UGET.',
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
      highestPackageLPA: 16.5,
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 77 },
        { year: 2023, avgPackage: 5.0, placementRate: 79 },
        { year: 2024, avgPackage: 5.3, placementRate: 81 }
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
            "avgPackage": 6.1,
            "highestPackage": 16.5
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
            "avgPackage": 5.6,
            "highestPackage": 14.8
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
            "avgPackage": 5.8,
            "highestPackage": 15.7
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
            "avgPackage": 5.0,
            "highestPackage": 13.2
      }
],
  },
  {
    id: "mit-mysore-belagola",
    name: "Maharaja Institute of Technology, Mysore",
    shortName: "MITM Belagola (Srirangapatna)",
    code: "E151",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Maharaja Institute of Technology, Mysore (MITM Belagola (Srirangapatna)) is a distinguished engineering institution in Srirangapatna, Mandya district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 88% annual placement conversion.",
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
        title: "Maharaja Institute of Technology, Mysore Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MITM Belagola (Srirangapatna)."
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
      district: "Mandya",
      city: "Srirangapatna",
      address: "Belawadi, PB No. 28, Belagola, Srirangapatna Taluk, Mandya, Karnataka 571438",
      mapUrl: "https://maps.google.com/?q=Maharaja+Institute+of+Technology,+Mysore+Srirangapatna",
    },
    website: "https://mitmysore.in",
    contact: {
      phone: "+91 8236 292 601",
      email: "principal@mitmysore.in",
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
    reviewCount: 440,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 210000,
      managementAnnual: 340000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E151) / COMEDK UGET.',
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
            "avgPackage": 7.8,
            "highestPackage": 25.0
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
            "avgPackage": 7.1,
            "highestPackage": 22.5
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
            "avgPackage": 7.5,
            "highestPackage": 23.8
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
            "avgPackage": 6.5,
            "highestPackage": 20.0
      }
],
  },
  {
    id: "mrit-mandya",
    name: "Mysuru Royal Institute of Technology",
    shortName: "MRIT Palahalli (Mandya)",
    code: "E228",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Mysuru Royal Institute of Technology (MRIT Palahalli (Mandya)) is a distinguished engineering institution in Mandya, Mandya district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "Mysuru Royal Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at MRIT Palahalli (Mandya)."
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
      district: "Mandya",
      city: "Mandya",
      address: "Palahalli, Srirangapatna Taluk, Mandya, Karnataka 571438",
      mapUrl: "https://maps.google.com/?q=Mysuru+Royal+Institute+of+Technology+Mandya",
    },
    website: "https://mrit.ac.in",
    contact: {
      phone: "+91 8236 250 111",
      email: "info@mrit.ac.in",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 68,
    },
    rating: 4.1,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 155000,
      managementAnnual: 250000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E228) / COMEDK UGET.',
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
            "avgPackage": 5.5,
            "highestPackage": 14.5
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
            "avgPackage": 5.0,
            "highestPackage": 13.1
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
            "avgPackage": 5.3,
            "highestPackage": 13.8
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
            "avgPackage": 4.6,
            "highestPackage": 11.6
      }
],
  },
  {
    id: "adichunchanagiri-univ",
    name: "Adichunchanagiri University",
    shortName: "ACU BG Nagar (Mandya)",
    code: "U029",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Adichunchanagiri University (ACU BG Nagar (Mandya)) is a distinguished engineering institution in BG Nagar, Mandya district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 89% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A+ & Approved by AICTE New Delhi',
      'Affiliated to State University with robust industry partnerships',
      '₹26.0 LPA Highest CTC with 89% campus placement rate',
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
        title: "Adichunchanagiri University Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at ACU BG Nagar (Mandya)."
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
      district: "Mandya",
      city: "BG Nagar",
      address: "NH 75, BG Nagar, Nagamangala Taluk, Mandya, Karnataka 571448",
      mapUrl: "https://maps.google.com/?q=Adichunchanagiri+University+BG+Nagar",
    },
    website: "https://acu.edu.in",
    contact: {
      phone: "+91 8234 287 285",
      email: "registrar@acu.edu.in",
    },
    collegeType: "Private",
    affiliation: "State University",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 22,
    },
    rating: 4.6,
    reviewCount: 450,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 220000,
      managementAnnual: 350000,
      hostelAnnual: 75000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U029) / COMEDK UGET.',
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
      highestPackageLPA: 26.0,
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
            "avgPackage": 8.0,
            "highestPackage": 26.0
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
            "avgPackage": 7.4,
            "highestPackage": 23.4
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
            "avgPackage": 7.7,
            "highestPackage": 24.7
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
            "avgPackage": 6.6,
            "highestPackage": 20.8
      }
],
  },
  {
    id: "bce-shravanabelagola",
    name: "Bahubali College of Engineering",
    shortName: "BCE Shravanabelagola (Hassan)",
    code: "E055",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Bahubali College of Engineering (BCE Shravanabelagola (Hassan)) is a distinguished engineering institution in Shravanabelagola, Hassan district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B++ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹15.5 LPA Highest CTC with 79% campus placement rate',
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
        title: "Bahubali College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at BCE Shravanabelagola (Hassan)."
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
      district: "Hassan",
      city: "Shravanabelagola",
      address: "Shravanabelagola, Channarayapatna Taluk, Hassan, Karnataka 573135",
      mapUrl: "https://maps.google.com/?q=Bahubali+College+of+Engineering+Shravanabelagola",
    },
    website: "https://bceengg.org",
    contact: {
      phone: "+91 8176 257 275",
      email: "principal@bceengg.org",
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
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E055) / COMEDK UGET.',
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
      highestPackageLPA: 15.5,
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
            "highestPackage": 15.5
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
            "highestPackage": 14.0
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
            "highestPackage": 14.7
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
            "highestPackage": 12.4
      }
],
  },
  {
    id: "gec-arsikere",
    name: "Government Engineering College, Arsikere",
    shortName: "GEC Arsikere (Hassan)",
    code: "E272",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Arsikere (GEC Arsikere (Hassan)) is a distinguished engineering institution in Arsikere, Hassan district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Government Engineering College, Arsikere Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Arsikere (Hassan)."
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
      district: "Hassan",
      city: "Arsikere",
      address: "Hassan Road, Arsikere, Hassan, Karnataka 573103",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Arsikere+Arsikere",
    },
    website: "https://gecarsikere.ac.in",
    contact: {
      phone: "+91 8174 233 400",
      email: "principal@gecarsikere.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 45,
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
      process: 'KEA CET Single Window Allotment (Code: E272) / COMEDK UGET.',
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
            "avgPackage": 6.0,
            "highestPackage": 16.0
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
            "avgPackage": 5.5,
            "highestPackage": 14.4
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
            "avgPackage": 5.7,
            "highestPackage": 15.2
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
            "avgPackage": 4.9,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "gec-hassan",
    name: "Government Engineering College, Hassan",
    shortName: "GEC Dairy Circle (Hassan)",
    code: "E115",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Hassan (GEC Dairy Circle (Hassan)) is a distinguished engineering institution in Hassan, Hassan district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 84% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹18.0 LPA Highest CTC with 84% campus placement rate',
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
        title: "Government Engineering College, Hassan Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Dairy Circle (Hassan)."
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
      district: "Hassan",
      city: "Hassan",
      address: "Dairy Circle, B.M. Road, Hassan, Karnataka 573201",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Hassan+Hassan",
    },
    website: "https://gechassan.ac.in",
    contact: {
      phone: "+91 8172 240 444",
      email: "principal@gechassan.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 33,
    },
    rating: 4.5,
    reviewCount: 340,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 38000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E115) / COMEDK UGET.',
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
      highestPackageLPA: 18.0,
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
            "avgPackage": 6.7,
            "highestPackage": 18.0
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
            "avgPackage": 6.1,
            "highestPackage": 16.2
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
            "avgPackage": 6.4,
            "highestPackage": 17.1
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
            "avgPackage": 5.5,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "navkis-hassan",
    name: "Navkis College of Engineering",
    shortName: "Navkis CE KIADB (Hassan)",
    code: "E190",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Navkis College of Engineering (Navkis CE KIADB (Hassan)) is a distinguished engineering institution in Hassan, Hassan district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
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
        title: "Navkis College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Navkis CE KIADB (Hassan)."
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
      district: "Hassan",
      city: "Hassan",
      address: "KIADB Industrial Area, Behind Old Sanjeevini Hospital, Hassan, Karnataka 573201",
      mapUrl: "https://maps.google.com/?q=Navkis+College+of+Engineering+Hassan",
    },
    website: "https://navkisengineering.org",
    contact: {
      phone: "+91 8172 268 701",
      email: "principal@navkisengineering.org",
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
      comedkAnnual: 155000,
      managementAnnual: 250000,
      hostelAnnual: 58000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E190) / COMEDK UGET.',
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
            "avgPackage": 5.6,
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
            "avgPackage": 5.1,
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
            "avgPackage": 5.4,
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
            "avgPackage": 4.7,
            "highestPackage": 11.6
      }
],
  },
  {
    id: "rajeev-it-hassan",
    name: "Rajeev Institute of Technology",
    shortName: "RIT Growth Center (Hassan)",
    code: "E160",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Rajeev Institute of Technology (RIT Growth Center (Hassan)) is a distinguished engineering institution in Hassan, Hassan district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A & Approved by AICTE New Delhi',
      'Affiliated to Autonomous with robust industry partnerships',
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
        title: "Rajeev Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at RIT Growth Center (Hassan)."
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
      district: "Hassan",
      city: "Hassan",
      address: "Plot No 1-D, Growth Center, Industrial Area, B-M Bypass Road, Hassan, Karnataka 573201",
      mapUrl: "https://maps.google.com/?q=Rajeev+Institute+of+Technology+Hassan",
    },
    website: "https://rithassan.ac.in",
    contact: {
      phone: "+91 8172 243 180",
      email: "principal@rithassan.ac.in",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 35,
    },
    rating: 4.4,
    reviewCount: 320,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 185000,
      managementAnnual: 290000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E160) / COMEDK UGET.',
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
            "avgPackage": 6.4,
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
            "avgPackage": 5.9,
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
            "avgPackage": 6.2,
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
            "avgPackage": 5.3,
            "highestPackage": 15.2
      }
],
  },
  {
    id: "akshaya-it-tumkur",
    name: "Akshaya Institute of Technology",
    shortName: "Akshaya IT Lingapura (Tumakuru)",
    code: "E182",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Akshaya Institute of Technology (Akshaya IT Lingapura (Tumakuru)) is a distinguished engineering institution in Tumakuru, Tumakuru district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 78% annual placement conversion.",
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
        title: "Akshaya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Akshaya IT Lingapura (Tumakuru)."
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
      district: "Tumakuru",
      city: "Tumakuru",
      address: "Lingapura, Obalapura Post, Koratagere Road, Tumakuru, Karnataka 572106",
      mapUrl: "https://maps.google.com/?q=Akshaya+Institute+of+Technology+Tumakuru",
    },
    website: "https://ait-tumkur.ac.in",
    contact: {
      phone: "+91 816 229 0787",
      email: "info@ait-tumkur.ac.in",
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
      comedkAnnual: 160000,
      managementAnnual: 260000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E182) / COMEDK UGET.',
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
            "avgPackage": 5.6,
            "highestPackage": 15.0
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
            "avgPackage": 5.1,
            "highestPackage": 13.5
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
            "avgPackage": 5.4,
            "highestPackage": 14.2
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
            "avgPackage": 4.7,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "kit-tiptur",
    name: "Kalpataru Institute of Technology",
    shortName: "KIT Tiptur (Tumakuru)",
    code: "E045",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Kalpataru Institute of Technology (KIT Tiptur (Tumakuru)) is a distinguished engineering institution in Tiptur, Tumakuru district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 85% annual placement conversion.",
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
        title: "Kalpataru Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at KIT Tiptur (Tumakuru)."
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
      district: "Tumakuru",
      city: "Tiptur",
      address: "NH 206, B.H. Road, Tiptur, Tumakuru, Karnataka 572202",
      mapUrl: "https://maps.google.com/?q=Kalpataru+Institute+of+Technology+Tiptur",
    },
    website: "https://kittiptur.ac.in",
    contact: {
      phone: "+91 8166 251 067",
      email: "principal@kittiptur.ac.in",
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
      process: 'KEA CET Single Window Allotment (Code: E045) / COMEDK UGET.',
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
            "highestPackage": 21.0
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
            "highestPackage": 18.9
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
            "highestPackage": 19.9
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
            "highestPackage": 16.8
      }
],
  },
  {
    id: "sbit-tumkur",
    name: "Sri Basaveshwara Institute of Technology",
    shortName: "SBIT Tumakuru",
    code: "E229",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Basaveshwara Institute of Technology (SBIT Tumakuru) is a distinguished engineering institution in Tumakuru, Tumakuru district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
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
        title: "Sri Basaveshwara Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SBIT Tumakuru."
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
      district: "Tumakuru",
      city: "Tumakuru",
      address: "Near Gubbi Gate, Tumakuru, Karnataka 572102",
      mapUrl: "https://maps.google.com/?q=Sri+Basaveshwara+Institute+of+Technology+Tumakuru",
    },
    website: "https://sbit.ac.in",
    contact: {
      phone: "+91 816 227 8899",
      email: "info@sbit.ac.in",
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
      process: 'KEA CET Single Window Allotment (Code: E229) / COMEDK UGET.',
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
    id: "ssse-tumkur",
    name: "Sri Siddhartha School of Engineering",
    shortName: "SSSE Maralur (Tumakuru)",
    code: "E230",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sri Siddhartha School of Engineering (SSSE Maralur (Tumakuru)) is a distinguished engineering institution in Tumakuru, Tumakuru district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "Sri Siddhartha School of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SSSE Maralur (Tumakuru)."
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
      district: "Tumakuru",
      city: "Tumakuru",
      address: "Maralur, Tumakuru, Karnataka 572105",
      mapUrl: "https://maps.google.com/?q=Sri+Siddhartha+School+of+Engineering+Tumakuru",
    },
    website: "https://sahe.ac.in/ssse",
    contact: {
      phone: "+91 816 220 1061",
      email: "info@sahe.ac.in",
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
      comedkAnnual: 155000,
      managementAnnual: 250000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E230) / COMEDK UGET.',
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
            "avgPackage": 5.0,
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
            "avgPackage": 5.3,
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
            "avgPackage": 4.6,
            "highestPackage": 12.0
      }
],
  },
  {
    id: "ekalavya-chamarajanagar",
    name: "Ekalavya Institute of Technology",
    shortName: "EIT Chamarajanagar",
    code: "E231",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Ekalavya Institute of Technology (EIT Chamarajanagar) is a distinguished engineering institution in Chamarajanagar, Chamarajanagar district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 74% annual placement conversion.",
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
        title: "Ekalavya Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at EIT Chamarajanagar."
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
      district: "Chamarajanagar",
      city: "Chamarajanagar",
      address: "Ummathur, Santhemarahalli Hobli, Chamarajanagar, Karnataka 571115",
      mapUrl: "https://maps.google.com/?q=Ekalavya+Institute+of+Technology+Chamarajanagar",
    },
    website: "https://eitchamarajanagar.org",
    contact: {
      phone: "+91 8226 235 111",
      email: "principal@eitchamarajanagar.org",
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
      hostelAnnual: 48000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E231) / COMEDK UGET.',
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
    id: "shah-shib-chikkaballapur",
    name: "Shah-Shib College of Engineering",
    shortName: "Shah-Shib CE (Chikkaballapura)",
    code: "E232",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shah-Shib College of Engineering (Shah-Shib CE (Chikkaballapura)) is a distinguished engineering institution in Chikkaballapura, Chikkaballapura district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Shah-Shib College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Shah-Shib CE (Chikkaballapura)."
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
      district: "Chikkaballapura",
      city: "Chikkaballapura",
      address: "NH 7, BB Road, Near Airport, Chikkaballapura, Karnataka 562101",
      mapUrl: "https://maps.google.com/?q=Shah-Shib+College+of+Engineering+Chikkaballapura",
    },
    website: "https://shahshibengg.org",
    contact: {
      phone: "+91 8156 270 555",
      email: "info@shahshibengg.org",
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
      comedkAnnual: 170000,
      managementAnnual: 280000,
      hostelAnnual: 70000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E232) / COMEDK UGET.',
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
            "highestPackage": 16.0
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
            "highestPackage": 14.4
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
            "highestPackage": 15.2
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
            "highestPackage": 12.8
      }
],
  },
  {
    id: "cbit-kolar",
    name: "C. Bairegouda Institute of Technology",
    shortName: "CBIT Thoradevandahalli (Kolar)",
    code: "E185",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "C. Bairegouda Institute of Technology (CBIT Thoradevandahalli (Kolar)) is a distinguished engineering institution in Kolar, Kolar district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 77% annual placement conversion.",
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
        title: "C. Bairegouda Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CBIT Thoradevandahalli (Kolar)."
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
      district: "Kolar",
      city: "Kolar",
      address: "Thoradevandahalli, Srinivaspur Road, Kolar, Karnataka 563101",
      mapUrl: "https://maps.google.com/?q=C.+Bairegouda+Institute+of+Technology+Kolar",
    },
    website: "https://cbitkolar.edu.in",
    contact: {
      phone: "+91 8152 232 020",
      email: "cbitkolar@gmail.com",
    },
    collegeType: "Private",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 68,
    },
    rating: 4.1,
    reviewCount: 190,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 155000,
      managementAnnual: 250000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E185) / COMEDK UGET.',
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
            "avgPackage": 5.5,
            "highestPackage": 14.5
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
            "avgPackage": 5.0,
            "highestPackage": 13.1
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
            "avgPackage": 5.3,
            "highestPackage": 13.8
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
            "avgPackage": 4.6,
            "highestPackage": 11.6
      }
],
  },
  {
    id: "vinayaka-it-kgf",
    name: "Shree Vinayaka Institute of Technology",
    shortName: "SVIT Coromandel (KGF Kolar)",
    code: "E234",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Shree Vinayaka Institute of Technology (SVIT Coromandel (KGF Kolar)) is a distinguished engineering institution in Kolar Gold Fields, Kolar district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 75% annual placement conversion.",
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
        title: "Shree Vinayaka Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SVIT Coromandel (KGF Kolar)."
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
      district: "Kolar",
      city: "Kolar Gold Fields",
      address: "Coromandel Post, Kolar Gold Fields, Kolar, Karnataka 563118",
      mapUrl: "https://maps.google.com/?q=Shree+Vinayaka+Institute+of+Technology+Kolar+Gold+Fields",
    },
    website: "https://svitkgf.org",
    contact: {
      phone: "+91 8153 275 111",
      email: "info@svitkgf.org",
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
      process: 'KEA CET Single Window Allotment (Code: E234) / COMEDK UGET.',
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
            "avgPackage": 5.2,
            "highestPackage": 13.0
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
            "avgPackage": 4.7,
            "highestPackage": 11.7
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
            "avgPackage": 5.0,
            "highestPackage": 12.3
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
            "avgPackage": 4.3,
            "highestPackage": 10.4
      }
],
  },
  {
    id: "coorg-it-ponnampet",
    name: "Coorg Institute of Technology",
    shortName: "CIT Ponnampet (Kodagu)",
    code: "E064",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Coorg Institute of Technology (CIT Ponnampet (Kodagu)) is a distinguished engineering institution in Ponnampet, Kodagu district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 82% annual placement conversion.",
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
        title: "Coorg Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at CIT Ponnampet (Kodagu)."
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
      district: "Kodagu",
      city: "Ponnampet",
      address: "Halligattu, Ponnampet, South Kodagu, Karnataka 571216",
      mapUrl: "https://maps.google.com/?q=Coorg+Institute+of+Technology+Ponnampet",
    },
    website: "https://citcoorg.edu.in",
    contact: {
      phone: "+91 8274 249 771",
      email: "principal@citcoorg.edu.in",
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
    reviewCount: 310,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 175000,
      managementAnnual: 280000,
      hostelAnnual: 60000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E064) / COMEDK UGET.',
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
            "avgPackage": 6.3,
            "highestPackage": 18.0
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
            "avgPackage": 5.8,
            "highestPackage": 16.2
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
            "avgPackage": 6.1,
            "highestPackage": 17.1
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
            "avgPackage": 5.2,
            "highestPackage": 14.4
      }
],
  },
  {
    id: "gec-kushalanagar",
    name: "Government Engineering College, Kushalanagar",
    shortName: "GEC Kushalanagar (Kodagu)",
    code: "E114",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Kushalanagar (GEC Kushalanagar (Kodagu)) is a distinguished engineering institution in Kushalanagar, Kodagu district. Accredited by NAAC with Grade A and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 83% annual placement conversion.",
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
        title: "Government Engineering College, Kushalanagar Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Kushalanagar (Kodagu)."
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
      district: "Kodagu",
      city: "Kushalanagar",
      address: "GEC Campus, Kushalanagar, Somwarpet Taluk, Kodagu, Karnataka 571234",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Kushalanagar+Kushalanagar",
    },
    website: "https://geckushalanagar.ac.in",
    contact: {
      phone: "+91 8276 274 000",
      email: "principal@geckushalanagar.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "A",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 34,
    },
    rating: 4.4,
    reviewCount: 330,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E114) / COMEDK UGET.',
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
      averagePackageLPA: 5.7,
      medianPackageLPA: 4.8,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 5.0, placementRate: 79 },
        { year: 2023, avgPackage: 5.4, placementRate: 81 },
        { year: 2024, avgPackage: 5.7, placementRate: 83 }
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
            "avgPackage": 6.6,
            "highestPackage": 18.5
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
            "avgPackage": 6.0,
            "highestPackage": 16.7
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
            "avgPackage": 6.3,
            "highestPackage": 17.6
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
            "avgPackage": 5.4,
            "highestPackage": 14.8
      }
],
  },
  {
    id: "aiems-bidadi",
    name: "Amrutha Institute of Engineering and Management Sciences",
    shortName: "AIEMS Bidadi (Ramanagara)",
    code: "E183",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Amrutha Institute of Engineering and Management Sciences (AIEMS Bidadi (Ramanagara)) is a distinguished engineering institution in Bidadi, Ramanagara district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 79% annual placement conversion.",
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
        title: "Amrutha Institute of Engineering and Management Sciences Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at AIEMS Bidadi (Ramanagara)."
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
      district: "Ramanagara",
      city: "Bidadi",
      address: "Bidadi Industrial Area, Kenchanakuppe, Ramanagara, Karnataka 562109",
      mapUrl: "https://maps.google.com/?q=Amrutha+Institute+of+Engineering+and+Management+Sciences+Bidadi",
    },
    website: "https://aiems.in",
    contact: {
      phone: "+91 80 2728 2999",
      email: "info@aiems.in",
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
      comedkAnnual: 165000,
      managementAnnual: 270000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E183) / COMEDK UGET.',
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
            "avgPackage": 5.9,
            "highestPackage": 16.0
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
            "avgPackage": 5.4,
            "highestPackage": 14.4
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
            "avgPackage": 5.6,
            "highestPackage": 15.2
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
            "avgPackage": 4.8,
            "highestPackage": 12.8
      }
],
  },
  {
    id: "ghousia-ramanagara",
    name: "Ghousia College of Engineering",
    shortName: "GCE Ramanagara",
    code: "E033",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Ghousia College of Engineering (GCE Ramanagara) is a distinguished engineering institution in Ramanagara, Ramanagara district. Accredited by NAAC with Grade A+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 86% annual placement conversion.",
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
        title: "Ghousia College of Engineering Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GCE Ramanagara."
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
      district: "Ramanagara",
      city: "Ramanagara",
      address: "Bengaluru-Mysuru Highway, Ramanagara, Karnataka 562159",
      mapUrl: "https://maps.google.com/?q=Ghousia+College+of+Engineering+Ramanagara",
    },
    website: "https://ghousiaedu.org",
    contact: {
      phone: "+91 80 2727 3476",
      email: "principal_gce@hotmail.com",
    },
    collegeType: "Private",
    affiliation: "Autonomous",
    accreditations: {
      naacGrade: "A+",
      nbaAccredited: true,
      nirfRank: undefined,
      karnatakaRank: 27,
    },
    rating: 4.5,
    reviewCount: 400,
    fees: {
      kcetAnnual: 105000,
      comedkAnnual: 200000,
      managementAnnual: 320000,
      hostelAnnual: 65000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E033) / COMEDK UGET.',
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
            "avgPackage": 7.2,
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
            "avgPackage": 6.6,
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
            "avgPackage": 6.9,
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
            "avgPackage": 6.0,
            "highestPackage": 17.6
      }
],
  },
  {
    id: "gec-ramanagara",
    name: "Government Engineering College, Ramanagara",
    shortName: "GEC Ramanagara",
    code: "E116",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Government Engineering College, Ramanagara (GEC Ramanagara) is a distinguished engineering institution in Ramanagara, Ramanagara district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 81% annual placement conversion.",
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
        title: "Government Engineering College, Ramanagara Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at GEC Ramanagara."
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
      district: "Ramanagara",
      city: "Ramanagara",
      address: "B.M. Road, Ramanagara, Karnataka 562159",
      mapUrl: "https://maps.google.com/?q=Government+Engineering+College,+Ramanagara+Ramanagara",
    },
    website: "https://gecramanagara.ac.in",
    contact: {
      phone: "+91 80 2727 1234",
      email: "principal@gecramanagara.ac.in",
    },
    collegeType: "Government",
    affiliation: "VTU Affiliated",
    accreditations: {
      naacGrade: "B++",
      nbaAccredited: false,
      nirfRank: undefined,
      karnatakaRank: 43,
    },
    rating: 4.3,
    reviewCount: 260,
    fees: {
      kcetAnnual: 45000,
      comedkAnnual: 98196,
      managementAnnual: 120000,
      hostelAnnual: 35000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E116) / COMEDK UGET.',
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
      averagePackageLPA: 5.3,
      medianPackageLPA: 4.5,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'Capgemini', 'Cognizant', 'HCL'],
      historicalTrend: [
        { year: 2022, avgPackage: 4.6, placementRate: 77 },
        { year: 2023, avgPackage: 5.0, placementRate: 79 },
        { year: 2024, avgPackage: 5.3, placementRate: 81 }
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
            "avgPackage": 6.1,
            "highestPackage": 17.0
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
            "avgPackage": 5.6,
            "highestPackage": 15.3
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
            "avgPackage": 5.8,
            "highestPackage": 16.1
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
            "avgPackage": 5.0,
            "highestPackage": 13.6
      }
],
  },
  {
    id: "jvit-bidadi",
    name: "Jnana Vikas Institute of Technology",
    shortName: "JVIT Bidadi (Ramanagara)",
    code: "E099_R",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jnana Vikas Institute of Technology (JVIT Bidadi (Ramanagara)) is a distinguished engineering institution in Bidadi, Ramanagara district. Accredited by NAAC with Grade B++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 80% annual placement conversion.",
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
        title: "Jnana Vikas Institute of Technology Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at JVIT Bidadi (Ramanagara)."
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
      district: "Ramanagara",
      city: "Bidadi",
      address: "Vidyanagar, Padrahalli, Bangalore-Mysore Highway, Bidadi, Ramanagara, Karnataka 562109",
      mapUrl: "https://maps.google.com/?q=Jnana+Vikas+Institute+of+Technology+Bidadi",
    },
    website: "https://jvit.ac.in",
    contact: {
      phone: "+91 80 2728 2993",
      email: "principal@jvit.ac.in",
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
    reviewCount: 230,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 165000,
      managementAnnual: 270000,
      hostelAnnual: 68000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E099_R) / COMEDK UGET.',
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
    id: "sampoorna-channapatna",
    name: "Sampoorna Institute of Technology and Research",
    shortName: "SITR Channapatna (Ramanagara)",
    code: "E235",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Sampoorna Institute of Technology and Research (SITR Channapatna (Ramanagara)) is a distinguished engineering institution in Channapatna, Ramanagara district. Accredited by NAAC with Grade B+ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 76% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade B+ & Approved by AICTE New Delhi',
      'Affiliated to VTU Affiliated with robust industry partnerships',
      '₹13.5 LPA Highest CTC with 76% campus placement rate',
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
        title: "Sampoorna Institute of Technology and Research Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at SITR Channapatna (Ramanagara)."
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
      district: "Ramanagara",
      city: "Channapatna",
      address: "Belekere, Channapatna Taluk, Ramanagara, Karnataka 562160",
      mapUrl: "https://maps.google.com/?q=Sampoorna+Institute+of+Technology+and+Research+Channapatna",
    },
    website: "https://sampoornainstitutions.org",
    contact: {
      phone: "+91 80 2725 4321",
      email: "info@sampoornainstitutions.org",
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
    reviewCount: 160,
    fees: {
      kcetAnnual: 98196,
      comedkAnnual: 145000,
      managementAnnual: 230000,
      hostelAnnual: 55000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: E235) / COMEDK UGET.',
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
      highestPackageLPA: 13.5,
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
            "avgPackage": 5.3,
            "highestPackage": 13.5
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
            "avgPackage": 4.8,
            "highestPackage": 12.2
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
            "avgPackage": 5.1,
            "highestPackage": 12.8
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
            "avgPackage": 4.4,
            "highestPackage": 10.8
      }
],
  },
  {
    id: "jain-univ-kanakapura",
    name: "Jain University (Faculty of Engineering and Technology)",
    shortName: "Jain Univ JGI Global Campus",
    code: "U030",
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    description: "Jain University (Faculty of Engineering and Technology) (Jain Univ JGI Global Campus) is a distinguished engineering institution in Kanakapura, Ramanagara district. Accredited by NAAC with Grade A++ and recognized by AICTE, the institution offers comprehensive undergraduate programs with modern laboratories, proactive career guidance, and a 94% annual placement conversion.",
    highlights: [
      'Accredited with NAAC Grade A++ & Approved by AICTE New Delhi',
      'Affiliated to Deemed with robust industry partnerships',
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
        title: "Jain University (Faculty of Engineering and Technology) Main Campus",
        category: 'Campus Architecture',
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
        caption: "Central academic buildings and student facilities at Jain Univ JGI Global Campus."
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
      district: "Ramanagara",
      city: "Kanakapura",
      address: "JGI Global Campus, 45th km, NH 209, Jakkasandra Post, Kanakapura Taluk, Ramanagara, Karnataka 562112",
      mapUrl: "https://maps.google.com/?q=Jain+University+(Faculty+of+Engineering+and+Technology)+Kanakapura",
    },
    website: "https://jainuniversity.ac.in",
    contact: {
      phone: "+91 80 4665 7777",
      email: "fet@jainuniversity.ac.in",
    },
    collegeType: "Private",
    affiliation: "Deemed",
    accreditations: {
      naacGrade: "A++",
      nbaAccredited: true,
      nirfRank: 85,
      karnatakaRank: 8,
    },
    rating: 4.7,
    reviewCount: 620,
    fees: {
      kcetAnnual: 110000,
      comedkAnnual: 280000,
      managementAnnual: 480000,
      hostelAnnual: 110000,
    },
    hostelAvailable: true,
    admissionInfo: {
      eligibility: '45% in 10+2 with Physics & Mathematics. KCET/COMEDK required.',
      process: 'KEA CET Single Window Allotment (Code: U030) / COMEDK UGET.',
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
            "avgPackage": 10.6,
            "highestPackage": 42.0
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
            "avgPackage": 9.7,
            "highestPackage": 37.8
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
            "avgPackage": 10.1,
            "highestPackage": 39.9
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
            "avgPackage": 8.7,
            "highestPackage": 33.6
      }
],
  }
];
