import { SportsOpportunity } from '@/types/sports';

export const SPORTS_OPPORTUNITIES: SportsOpportunity[] = [
  {
    id: 'sp-1',
    title: 'VTU Central Zone Inter-Collegiate Cricket Championship 2026',
    sport: 'Cricket',
    level: 'University',
    category: 'Men',
    participationType: 'Team',
    organizer: 'VTU Directorate of Physical Education & Sports',
    collegeName: 'Visvesvaraya Technological University',
    city: 'Belagavi',
    state: 'Karnataka',
    venue: 'VTU Central Cricket Grounds, Jnana Sangama, Belagavi',
    description: 'The premier inter-collegiate cricket tournament for VTU affiliated and autonomous engineering institutions. Top 4 teams qualify directly for the VTU Inter-Zone Championship and university team selection trials.',
    registrationOpenDate: '2026-10-10',
    registrationDeadline: '2026-11-08T23:59:59',
    trialDate: '2026-11-12',
    eventStartDate: '2026-11-15',
    eventEndDate: '2026-11-22',
    isFree: false,
    entryFee: '₹1,500 per team (VTU Institutional Affiliation Subsidized)',
    eligibility: {
      ageLimit: 'Under 25 years as of July 1, 2026',
      scheme: 'Enrolled B.E / B.Tech / M.Tech / MCA student of VTU affiliated/autonomous colleges',
      rules: [
        'Must possess official college ID and current semester registration slip',
        'Team roster must consist of maximum 16 players + 1 coach/manager',
        'White cricket uniform and standard BCCI specification leather balls required',
        'Physical Director endorsement signature and college seal mandatory on entry form'
      ],
      requiredDocuments: ['VTU ID Card', 'College Bonafide Certificate', 'Eligibility Proforma signed by Principal', 'Aadhaar Card copy']
    },
    links: {
      registerUrl: 'https://vtu.ac.in/sports-registration-cricket',
      brochureUrl: 'https://vtu.ac.in/wp-content/uploads/2026/09/VTU_Cricket_Circular_2026.pdf',
      officialWebsite: 'https://vtu.ac.in/physical-education-sports/'
    },
    contact: {
      name: 'Dr. G. S. Venkatesh',
      role: 'Director of Physical Education, VTU Belagavi',
      phone: '+91 831 2498172',
      email: 'sports@vtu.ac.in',
      department: 'Department of Physical Education & Youth Welfare'
    },
    prizes: {
      cashPool: '₹1,00,000 Total Cash Pool',
      trophies: 'VTU Rolling Chancellor Trophy + Gold & Silver Medals',
      certificates: 'University Sports Certificate eligible for Academic Grace Marks',
      perks: ['Accommodation at VTU Sports Hostel', 'DA allowance for players as per VTU norms', 'Scouting for AIU North-South Zone squads']
    },
    status: 'Open',
    isVerified: true,
    badge: 'VTU Official',
    tags: ['VTU', 'Cricket', 'University Level', 'Grace Marks', 'State Selection'],
    bannerImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-2',
    title: "SIT Tumakuru 'Spardha 2026' National Invitational Sports Fest",
    sport: 'Basketball',
    level: 'National',
    category: 'Mixed',
    participationType: 'Team',
    organizer: 'Siddaganga Institute of Technology Sports Department',
    collegeName: 'Siddaganga Institute of Technology (SIT)',
    city: 'Tumakuru',
    state: 'Karnataka',
    venue: 'SIT Indoor Sports Complex & Floodlit Basketball Courts, B.H. Road, Tumakuru',
    description: "Karnataka's largest collegiate basketball tournament featuring premier teams from across South India and national technical institutes. Held under FIBA rules on high-grade synthetic courts.",
    registrationOpenDate: '2026-10-01',
    registrationDeadline: '2026-10-31T18:00:00',
    trialDate: '2026-11-03',
    eventStartDate: '2026-11-06',
    eventEndDate: '2026-11-09',
    isFree: false,
    entryFee: '₹1,000 per team',
    eligibility: {
      ageLimit: 'Under 24 years',
      rules: [
        'Open to registered collegiate engineering and degree students across India',
        'Maximum 12 players per squad (5 active, 7 bench)',
        'Standard FIBA match rules apply; professional referees officiating',
        'College identity card verification at registration desk before captain briefing'
      ],
      requiredDocuments: ['Valid Student College ID', 'Letter of Permission from Physical Education Director']
    },
    links: {
      registerUrl: 'https://sit.ac.in/spardha2026/register-basketball',
      brochureUrl: 'https://sit.ac.in/downloads/Spardha2026_Brochure.pdf',
      officialWebsite: 'https://sit.ac.in/sports'
    },
    contact: {
      name: 'Prof. Raghavendra Murthy',
      role: 'Convenor & Sports Secretary, SIT Tumakuru',
      phone: '+91 816 2282696',
      email: 'sports@sit.ac.in',
      department: 'Department of Physical Education, SIT'
    },
    prizes: {
      cashPool: '₹75,000 Cash Prizes (₹45,000 Winners + ₹30,000 Runners-up)',
      trophies: 'Siddaganga Rolling Championship Trophy',
      certificates: 'National Invitational Merit & Participation Certificates',
      perks: ['Complimentary boarding for outstation teams', 'Live YouTube streaming of semi-finals & finals']
    },
    status: 'Closing Soon',
    isVerified: true,
    badge: 'National Level',
    tags: ['Basketball', 'Tumakuru', 'National Fest', 'FIBA Court', 'Cash Prizes'],
    bannerImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-3',
    title: 'CIT Tumkur State Inter-Collegiate Volleyball & Kabaddi Trophy',
    sport: 'Volleyball',
    level: 'State',
    category: 'Men',
    participationType: 'Team',
    organizer: 'Channabasaveshwara Institute of Technology Sports Club',
    collegeName: 'Channabasaveshwara Institute of Technology (CIT)',
    city: 'Tumakuru',
    state: 'Karnataka',
    venue: 'CIT Sports Arena & Outdoor Stadium, NH 206, B.H. Road, Gubbi, Tumakuru',
    description: 'State-wide prestigious volleyball and mat kabaddi tournament hosting 40+ engineering colleges from Bengaluru, Tumakuru, Mysuru, and Hassan. Known for intense rivalry and pro-level court setups.',
    registrationOpenDate: '2026-10-05',
    registrationDeadline: '2026-11-10T23:59:59',
    trialDate: '2026-11-13',
    eventStartDate: '2026-11-17',
    eventEndDate: '2026-11-19',
    isFree: true,
    entryFee: 'Free Registration (Sponsored by CIT Management Trust)',
    eligibility: {
      ageLimit: 'Enrolled students aged 18 to 24',
      rules: [
        'Inter-college teams only (no combined club teams allowed)',
        'Volleyball matches will follow best of 3 sets format up to quarter-finals; best of 5 thereafter',
        'Official VFI (Volleyball Federation of India) rules and refereeing panel',
        'Players must bring team jerseys with clear front/back numbers'
      ],
      requiredDocuments: ['College Photo ID Card', 'Principal Authorization Letter with Seal']
    },
    links: {
      registerUrl: 'https://cittumkur.org/sports/volleyball-trophy-2026',
      brochureUrl: 'https://cittumkur.org/pdf/CIT_State_Sports_Trophy_2026.pdf',
      officialWebsite: 'https://cittumkur.org/campus-life/sports'
    },
    contact: {
      name: 'Mr. Chandrashekar B. R.',
      role: 'Director of Physical Education, CIT Gubbi',
      phone: '+91 94488 56321',
      email: 'ped@cittumkur.org',
      department: 'CIT Sports & Athletics Board'
    },
    prizes: {
      cashPool: '₹50,000 (Winners ₹30,000, Runners-up ₹20,000)',
      trophies: 'CIT Grand Rolling Trophy & Individual Player of the Tournament awards',
      certificates: 'State Level Merit Certificates & Medals',
      perks: ['Free lunch & refreshment kit for all team players', 'Bus pick-up from Tumakuru Railway Station']
    },
    status: 'Open',
    isVerified: true,
    badge: 'Free Entry',
    tags: ['Volleyball', 'CIT Gubbi', 'Tumakuru', 'State Level', 'Free Registration'],
    bannerImage: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-4',
    title: 'Khelo India University Games 2026 - Karnataka State Selection Trials',
    sport: 'Athletics',
    level: 'State',
    category: 'Mixed',
    participationType: 'Individual',
    organizer: 'Sports Authority of Karnataka (SAK) & AIU',
    city: 'Bengaluru',
    state: 'Karnataka',
    venue: 'Sree Kanteerava Outdoor Stadium, Kasturba Road, Bengaluru',
    description: 'Official state trials to shortlist Karnataka university athletes for the upcoming Khelo India University Games (KIUG) 2026. Events include 100m, 200m, 400m, 800m, 1500m, 5000m, Long Jump, High Jump, and Shot Put.',
    registrationOpenDate: '2026-10-15',
    registrationDeadline: '2026-11-04T17:00:00',
    trialDate: '2026-11-07',
    eventStartDate: '2026-11-07',
    eventEndDate: '2026-11-08',
    isFree: true,
    entryFee: 'Nil (Government of Karnataka & SAI Sponsored)',
    eligibility: {
      ageLimit: 'Born on or after July 1, 2001 (Under 25)',
      rules: [
        'Must be a regular enrolled student at any recognized University or Affiliated College in Karnataka',
        'Individual athletes must register online on the Khelo India Portal using their KI Athlete ID or Aadhaar',
        'Electronic timing gates (FAT) will be used for all track heats and finals',
        'Spikes permitted as per World Athletics technical regulations (max 9mm for track, 12mm for high jump)'
      ],
      requiredDocuments: ['Aadhaar Card', 'University Enrolment Certificate', 'Physical Fitness Medical Certificate', 'Recent Passport Photos (4)']
    },
    links: {
      registerUrl: 'https://kheloindia.gov.in/university-trials-karnataka-2026',
      brochureUrl: 'https://kheloindia.gov.in/docs/KIUG_2026_Athletics_Selection_Criteria.pdf',
      officialWebsite: 'https://kheloindia.gov.in'
    },
    contact: {
      name: 'Shri Manjunath K.',
      role: 'Selection Committee Secretary, Sports Authority of Karnataka',
      phone: '+91 80 22212356',
      email: 'kiug.karnataka@gov.in',
      department: 'Department of Youth Empowerment and Sports (DYES)'
    },
    prizes: {
      cashPool: 'State Sports Stipend & Government Kit Allowance for Selectees',
      trophies: 'Gold, Silver, Bronze State Medals',
      certificates: 'Government of Karnataka Official State Trial Certificate',
      perks: ['Direct entry into National Khelo India University Games camp', 'Full travel and lodging sponsorship for National Finals', 'Eligible for Karnataka Sports Quota government marks']
    },
    status: 'Trials Active',
    isVerified: true,
    badge: 'Govt Selection',
    tags: ['Khelo India', 'Athletics', 'Trials', 'Kanteerava', 'Government Sponsored', 'Olympic Track'],
    bannerImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-5',
    title: 'RVCE Momenta 2026 All-India Inter-Collegiate Badminton Cup',
    sport: 'Badminton',
    level: 'College',
    category: 'Mixed',
    participationType: 'Both',
    organizer: 'RV College of Engineering Sports Council',
    collegeName: 'RV College of Engineering (RVCE)',
    city: 'Bengaluru',
    state: 'Karnataka',
    venue: 'RVCE Indoor Sports Auditorium, Mysuru Road, Bengaluru',
    description: "South India's most prestigious collegiate badminton tournament featuring Men's Singles, Women's Singles, Men's Doubles, and Mixed Doubles categories played on Yonex synthetic wooden courts.",
    registrationOpenDate: '2026-10-08',
    registrationDeadline: '2026-11-06T20:00:00',
    trialDate: '2026-11-09',
    eventStartDate: '2026-11-13',
    eventEndDate: '2026-11-15',
    isFree: false,
    entryFee: '₹400 for Singles / ₹700 for Doubles',
    eligibility: {
      ageLimit: 'Under 25 years',
      rules: [
        'Open to verified engineering, medical, management, and arts college students',
        'Yonex AS-30 feather shuttlecocks used throughout the tournament',
        'Non-marking badminton shoes strictly required inside the auditorium',
        'BWF (Badminton World Federation) 21-point rally scoring system'
      ],
      requiredDocuments: ['Valid College Photo ID Card', 'Aadhaar Card for age verification']
    },
    links: {
      registerUrl: 'https://rvce.edu.in/momenta-badminton-2026',
      brochureUrl: 'https://rvce.edu.in/sites/default/files/Momenta2026_Badminton_Rulebook.pdf',
      officialWebsite: 'https://rvce.edu.in/sports-activities'
    },
    contact: {
      name: 'Dr. Srinivas Rao',
      role: 'Head of Physical Education, RVCE Bengaluru',
      phone: '+91 80 68188145',
      email: 'momenta.sports@rvce.edu.in',
      department: 'RVCE Department of Sports'
    },
    prizes: {
      cashPool: '₹60,000 Total Prize Purse',
      trophies: 'RVCE Momenta Champion Trophy & Crystal Mementos',
      certificates: 'National Invitational Certificates signed by Arjuna Awardee guest',
      perks: ['Yonex kit bags for finalists', 'Complimentary energy drinks and physiotherapy booth']
    },
    status: 'Open',
    isVerified: true,
    badge: 'BWF Standard',
    tags: ['Badminton', 'RVCE', 'Bengaluru', 'Singles', 'Doubles', 'Yonex Courts'],
    bannerImage: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-6',
    title: 'Karnataka State Inter-University Kabaddi Championship & Trials 2026',
    sport: 'Kabaddi',
    level: 'State',
    category: 'Men',
    participationType: 'Team',
    organizer: 'Karnataka State Amateur Kabaddi Association (KSAKA)',
    city: 'Mysuru',
    state: 'Karnataka',
    venue: 'Chamundi Vihar Indoor Stadium, Nazarbad, Mysuru',
    description: 'The definitive state championship for collegiate kabaddi players. Scouts from Pro Kabaddi League (PKL) franchises and Karnataka state teams will be in attendance for talent identification.',
    registrationOpenDate: '2026-10-12',
    registrationDeadline: '2026-11-18T23:59:59',
    trialDate: '2026-11-20',
    eventStartDate: '2026-11-24',
    eventEndDate: '2026-11-27',
    isFree: true,
    entryFee: 'Free (KSAKA Affiliated College Teams)',
    eligibility: {
      ageLimit: 'Below 22 years as of Dec 31, 2026; Body Weight limit: Maximum 80 kg at official weigh-in',
      rules: [
        'Electronic weigh-in conducted 24 hours prior to first fixture',
        'Pro Kabaddi standard Taraflex synthetic mat courts',
        'Bonus line, Super Tackle, and Do-or-Die raid rules strictly enforced',
        'Jersey numbers must be clearly printed in contrasting colors'
      ],
      requiredDocuments: ['College Bonafide Certificate with USN', 'Birth Certificate / 10th Marks Card', 'Medical Fitness Clearance']
    },
    links: {
      registerUrl: 'https://ksaka.karnataka.gov.in/inter-college-kabaddi-2026',
      brochureUrl: 'https://ksaka.karnataka.gov.in/circulars/Kabaddi_Championship_2026_Schedule.pdf',
      officialWebsite: 'https://ksaka.karnataka.gov.in'
    },
    contact: {
      name: 'Shri Basavaraj H. M.',
      role: 'General Secretary, KSAKA Mysuru Zone',
      phone: '+91 821 2435678',
      email: 'kabaddi.karnataka@gmail.com',
      department: 'Karnataka State Amateur Kabaddi Association'
    },
    prizes: {
      cashPool: '₹1,50,000 (Winners: ₹80,000, Runners: ₹50,000, 3rd: ₹20,000)',
      trophies: 'KSAKA Golden Shield & Best Raider / Best Defender Titles',
      certificates: 'State Championship Certified Merit Cards',
      perks: ['PKL Talent Scout Trials invite for top 10 standout players', 'State sports quota certificates for public service recruitments']
    },
    status: 'Open',
    isVerified: true,
    badge: 'PKL Scouting',
    tags: ['Kabaddi', 'Mysuru', 'State Level', 'PKL Scouts', 'Mat Kabaddi', 'Free Entry'],
    bannerImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-7',
    title: 'BMSCE Kreeda 2026 Inter-College Rapid & Classical Chess Festival',
    sport: 'Chess',
    level: 'College',
    category: 'Open',
    participationType: 'Individual',
    organizer: 'BMS College of Engineering Department of Physical Education',
    collegeName: 'BMS College of Engineering (BMSCE)',
    city: 'Bengaluru',
    state: 'Karnataka',
    venue: 'BMSCE Auditorium & Indoor Hall, Bull Temple Road, Basavanagudi, Bengaluru',
    description: 'FIDE rated collegiate chess competition with Classical (60 mins + 30 sec increment) and Rapid (15 mins + 10 sec increment) formats. Featuring grandmasters and international arbiters.',
    registrationOpenDate: '2026-10-01',
    registrationDeadline: '2026-10-28T18:00:00',
    trialDate: '2026-11-01',
    eventStartDate: '2026-11-01',
    eventEndDate: '2026-11-03',
    isFree: false,
    entryFee: '₹350 per player',
    eligibility: {
      ageLimit: 'Open to all enrolled undergraduate and postgraduate students',
      rules: [
        'Swiss League format with 7 rounds; FIDE tie-break rules apply (Buchholz, Sonneborn-Berger)',
        'FIDE ID required for rated players (Unrated players can register on-spot for AICF registration)',
        'Strict anti-cheating guidelines; electronic devices completely prohibited in playing hall'
      ],
      requiredDocuments: ['College Identity Card', 'AICF / FIDE ID card (if already registered)']
    },
    links: {
      registerUrl: 'https://bmsce.ac.in/kreeda-chess-2026',
      brochureUrl: 'https://bmsce.ac.in/pdf/BMSCE_Chess_Kreeda_2026_Rules.pdf',
      officialWebsite: 'https://bmsce.ac.in/home/Sports'
    },
    contact: {
      name: 'Dr. Savitha Prakash',
      role: 'Chief International Arbiter & Sports Officer, BMSCE',
      phone: '+91 80 26622130',
      email: 'chess.kreeda@bmsce.ac.in',
      department: 'Department of Physical Education, BMSCE'
    },
    prizes: {
      cashPool: '₹40,000 Total Cash Prizes + 25 Category Board Prizes',
      trophies: 'BMSCE Kreeda Grandmaster Trophy',
      certificates: 'FIDE Rated Official Tournament Certificates',
      perks: ['Rating points updated on official FIDE server', 'Free lunch for all participants']
    },
    status: 'Closing Soon',
    isVerified: true,
    badge: 'FIDE Rated',
    tags: ['Chess', 'BMSCE', 'Bengaluru', 'FIDE Rated', 'Swiss League', 'Mind Sports'],
    bannerImage: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-8',
    title: 'PES University Infinia 2026 State Inter-Collegiate Football League',
    sport: 'Football',
    level: 'College',
    category: 'Men',
    participationType: 'Team',
    organizer: 'PES University Department of Student Affairs & Sports',
    collegeName: 'PES University',
    city: 'Bengaluru',
    state: 'Karnataka',
    venue: 'PES University FIFA-Standard Turf Stadium, 100 Feet Ring Road, BSK III Stage, Bengaluru',
    description: "11-a-side full field inter-collegiate football tournament played under AIFF rules under the lights on PES's FIFA certified turf pitch. 32 top engineering and university teams competing.",
    registrationOpenDate: '2026-10-14',
    registrationDeadline: '2026-11-14T23:59:59',
    trialDate: '2026-11-17',
    eventStartDate: '2026-11-20',
    eventEndDate: '2026-11-25',
    isFree: false,
    entryFee: '₹2,000 per team',
    eligibility: {
      ageLimit: 'Under 25 years',
      rules: [
        'Team of maximum 18 players (11 starting + 7 rolling substitutes)',
        'Standard 90-minute matches (45 mins per half) with professional AIFF qualified referees',
        'Shin guards and turf studs mandatory for all outfield players',
        'Yellow and red card suspension policies strictly enforced per FIFA disciplinary code'
      ],
      requiredDocuments: ['College Student ID', 'Principal No-Objection Certificate']
    },
    links: {
      registerUrl: 'https://pes.edu/infinia-football-2026',
      brochureUrl: 'https://pes.edu/downloads/Infinia_Football_2026_Rulebook.pdf',
      officialWebsite: 'https://pes.edu/sports'
    },
    contact: {
      name: 'Coach Pradeep Kumar',
      role: 'Director of Athletics, PES University',
      phone: '+91 80 26721983',
      email: 'football@pes.edu',
      department: 'PES Athletics & Physical Education'
    },
    prizes: {
      cashPool: '₹1,20,000 (Champions: ₹75,000, Runners-up: ₹45,000)',
      trophies: 'PES Infinia Gold Cup + Golden Boot & Golden Glove Trophies',
      certificates: 'State Level Merit Certificates',
      perks: ['Full match highlight video reels provided to every team', 'Hydration & sports injury clinic on-site']
    },
    status: 'Open',
    isVerified: true,
    badge: 'FIFA Turf',
    tags: ['Football', 'PES University', 'Bengaluru', '11-a-side', 'Night Matches', 'Cash Prize'],
    bannerImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-9',
    title: 'AIU All-India Inter-University National Swimming Championship 2026',
    sport: 'Swimming',
    level: 'National',
    category: 'Mixed',
    participationType: 'Individual',
    organizer: 'Association of Indian Universities (AIU)',
    city: 'Bengaluru',
    state: 'Karnataka',
    venue: 'Kensington Swimming Pool & Olympic Aquatic Center, Ulsoor, Bengaluru',
    description: 'The pinnacle of university swimming in India. Events across 50m, 100m, 200m Freestyle, Backstroke, Breaststroke, Butterfly, 400m Individual Medley, and 4x100m Relays under World Aquatics standards.',
    registrationOpenDate: '2026-09-20',
    registrationDeadline: '2026-10-25T17:00:00',
    trialDate: '2026-10-29',
    eventStartDate: '2026-11-05',
    eventEndDate: '2026-11-09',
    isFree: false,
    entryFee: '₹250 per event (Endorsed through University Registrar)',
    eligibility: {
      ageLimit: 'Age 17 to 25 years',
      rules: [
        'Must represent an AIU member university or autonomous institute',
        'OMEGA touchpads and electronic timing systems will govern all heats',
        'Swimmers must have clocked minimum state qualifying time (SQT) within past 12 months',
        'FINA approved competition swimwear mandatory'
      ],
      requiredDocuments: ['AIU Eligibility Proforma', 'Birth Certificate', 'Previous Year State/National Timing Certificate', 'University Enrolment Card']
    },
    links: {
      registerUrl: 'https://aiu.ac.in/sports/national-swimming-2026',
      brochureUrl: 'https://aiu.ac.in/circulars/AIU_Swimming_Rulebook_2026.pdf',
      officialWebsite: 'https://aiu.ac.in/sports'
    },
    contact: {
      name: 'Dr. Baljit Singh Sekhon',
      role: 'Joint Secretary (Sports), AIU',
      phone: '+91 11 23230059',
      email: 'sports@aiu.ac.in',
      department: 'AIU Inter-University Sports Board'
    },
    prizes: {
      cashPool: 'National Sports Scholarships for Gold Medalists',
      trophies: 'All-India University Overall Championship Shield',
      certificates: 'AIU National Sports Certificate (Grade A - highest university honor)',
      perks: ['Qualification for World University Games (Universiade)', 'National Camp Selection by Swimming Federation of India']
    },
    status: 'Closing Soon',
    isVerified: true,
    badge: 'AIU National',
    tags: ['Swimming', 'AIU', 'National Championship', 'Olympic Pool', 'World University Games'],
    bannerImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-10',
    title: 'VTU Annual Inter-Collegiate Powerlifting & Weightlifting Meet 2026',
    sport: 'Powerlifting',
    level: 'University',
    category: 'Mixed',
    participationType: 'Individual',
    organizer: 'VTU Sports Directorate & Malnad College of Engineering (MCE)',
    collegeName: 'Malnad College of Engineering (MCE)',
    city: 'Hassan',
    state: 'Karnataka',
    venue: 'MCE Hassan Indoor Gymnasium & Sports Complex, Hassan',
    description: 'VTU annual bench press, squat, and deadlift powerlifting championship across standard IPF weight categories. Medals awarded for individual lifts and total aggregated weight.',
    registrationOpenDate: '2026-10-18',
    registrationDeadline: '2026-11-25T23:59:59',
    trialDate: '2026-11-28',
    eventStartDate: '2026-12-02',
    eventEndDate: '2026-12-04',
    isFree: true,
    entryFee: 'Free (Subsidized by VTU Sports Fund)',
    eligibility: {
      ageLimit: 'Under 25 years',
      rules: [
        'Body weight categories: Men (59kg, 66kg, 74kg, 83kg, 93kg, 105kg, 120kg, 120kg+); Women (47kg, 52kg, 57kg, 63kg, 69kg, 76kg, 84kg, 84kg+)',
        'Approved powerlifting singlet and belt must comply with IPF technical handbook',
        'Official weigh-in conducted precisely 2 hours prior to flight commencement'
      ],
      requiredDocuments: ['VTU Student ID Card', 'Medical Certificate certifying fitness for heavy lifting', 'College Identity Proforma']
    },
    links: {
      registerUrl: 'https://vtu.ac.in/sports/powerlifting-2026',
      brochureUrl: 'https://vtu.ac.in/circulars/Powerlifting_Meet_2026_Schedule.pdf',
      officialWebsite: 'https://vtu.ac.in'
    },
    contact: {
      name: 'Prof. Naveen Kumar',
      role: 'Organizing Secretary & Physical Director, MCE Hassan',
      phone: '+91 8172 245317',
      email: 'sports@mcehassan.ac.in',
      department: 'MCE Hassan Sports Department'
    },
    prizes: {
      cashPool: '₹45,000 Cash awards for Strongman & Strongwoman of VTU',
      trophies: 'Gold, Silver, Bronze VTU University Medals',
      certificates: 'Official VTU Inter-Collegiate Merit Certificate',
      perks: ['Free accommodation at MCE campus', 'VTU University Team Selection for All India Inter-University']
    },
    status: 'Open',
    isVerified: true,
    badge: 'VTU Official',
    tags: ['Powerlifting', 'Hassan', 'VTU', 'IPF Rules', 'Weightlifting', 'Free Entry'],
    bannerImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  }
];

export const SPORTS_CATEGORIES_LIST = [
  'All Sports',
  'Cricket',
  'Football',
  'Volleyball',
  'Basketball',
  'Badminton',
  'Kabaddi',
  'Athletics',
  'Chess',
  'Swimming',
  'Powerlifting'
];

export const SPORTS_LEVELS_LIST = [
  'All Levels',
  'College',
  'University',
  'State',
  'National'
];

export const KARNATAKA_SPORTS_CITIES = [
  'All Cities',
  'Tumakuru',
  'Bengaluru',
  'Mysuru',
  'Belagavi',
  'Hassan',
  'Mangaluru',
  'Hubballi'
];
