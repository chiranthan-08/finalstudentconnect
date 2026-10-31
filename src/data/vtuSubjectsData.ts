export interface VtuSubject {
  id: string;
  code: string;
  name: string;
  credits: number;
  maxMarks?: number;
  isElective?: boolean;
  electiveGroup?: string;
  electiveOptions?: { id: string; code: string; name: string; credits: number }[];
}

export interface VtuBranch {
  id: string;
  code: string;
  name: string;
}

export interface VtuScheme {
  id: string;
  name: string;
  year: number;
}

export interface EvaluatedSubject {
  id: string;
  code: string;
  name: string;
  credits: number;
  marks: number;
  grade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'P' | 'F';
  gradePoint: number;
  creditPoints: number;
  isPassed: boolean;
}

export const VTU_SCHEMES: VtuScheme[] = [
  { id: '2022', name: '2022 Scheme (NEP CBCS)', year: 2022 },
  { id: '2021', name: '2021 Scheme (CBCS)', year: 2021 },
  { id: '2025', name: '2025 Scheme (Revised NEP)', year: 2025 },
];

export const VTU_BRANCHES: VtuBranch[] = [
  { id: 'cse', code: 'CSE', name: 'Computer Science & Engineering' },
  { id: 'ise', code: 'ISE', name: 'Information Science & Engineering' },
  { id: 'aiml', code: 'AIML', name: 'Artificial Intelligence & Machine Learning' },
  { id: 'aids', code: 'AIDS', name: 'Artificial Intelligence & Data Science' },
  { id: 'ece', code: 'ECE', name: 'Electronics & Communication Engineering' },
  { id: 'eee', code: 'EEE', name: 'Electrical & Electronics Engineering' },
  { id: 'me', code: 'ME', name: 'Mechanical Engineering' },
  { id: 'cv', code: 'CV', name: 'Civil Engineering' },
  { id: 'csbs', code: 'CSBS', name: 'Computer Science & Business Systems' },
  { id: 'csd', code: 'CSD', name: 'Computer Science & Design' },
  { id: 'ra', code: 'RA', name: 'Robotics & Automation' },
  { id: 'bt', code: 'BT', name: 'Biotechnology' },
];

export const VTU_SEMESTERS = [
  { id: '1', name: '1st Semester' },
  { id: '2', name: '2nd Semester' },
  { id: '3', name: '3rd Semester' },
  { id: '4', name: '4th Semester' },
  { id: '5', name: '5th Semester' },
  { id: '6', name: '6th Semester' },
  { id: '7', name: '7th Semester' },
  { id: '8', name: '8th Semester' },
];

// Common 1st & 2nd Semester (Physics & Chemistry Cycles) for 2022 Scheme
const FIRST_YEAR_2022_P_CYCLE: VtuSubject[] = [
  { id: 'bmat101', code: 'BMATS101', name: 'Mathematics-I for CSE/Engg Stream', credits: 4, maxMarks: 100 },
  { id: 'bphy102', code: 'BPHYS102', name: 'Applied Physics for Engineers', credits: 4, maxMarks: 100 },
  { id: 'bpop103', code: 'BPOPS103', name: 'Principles of Programming using C', credits: 3, maxMarks: 100 },
  { id: 'bbee104', code: 'BBEE103', name: 'Basic Electrical Engineering', credits: 3, maxMarks: 100 },
  { id: 'beng106', code: 'BENGK106', name: 'Communicative English', credits: 1, maxMarks: 100 },
  { id: 'bkan107', code: 'BKSKK107', name: 'Balake / Samskruthika Kannada', credits: 1, maxMarks: 100 },
  { id: 'bidt158', code: 'BIDTK158', name: 'Innovation and Design Thinking', credits: 1, maxMarks: 100 },
  {
    id: 'aec1',
    code: 'BAEC108',
    name: 'Ability Enhancement Course - I',
    credits: 1,
    maxMarks: 100,
    isElective: true,
    electiveGroup: 'Ability Enhancement Course',
    electiveOptions: [
      { id: 'aec1_1', code: 'BAEC108A', name: 'Digital Fluency & Productivity Tools', credits: 1 },
      { id: 'aec1_2', code: 'BAEC108B', name: 'Spreadsheet for Problem Solving', credits: 1 },
      { id: 'aec1_3', code: 'BAEC108C', name: 'Technical Presentation Skills', credits: 1 },
      { id: 'aec1_x', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
    ],
  },
];

const FIRST_YEAR_2022_C_CYCLE: VtuSubject[] = [
  { id: 'bmat201', code: 'BMATS201', name: 'Mathematics-II for CSE/Engg Stream', credits: 4, maxMarks: 100 },
  { id: 'bche202', code: 'BCHEM202', name: 'Applied Chemistry for Engineers', credits: 4, maxMarks: 100 },
  { id: 'bced203', code: 'BCEDK203', name: 'Computer Aided Engineering Drawing (CAED)', credits: 3, maxMarks: 100 },
  { id: 'bbec204', code: 'BBECK204', name: 'Basic Electronics & Communication', credits: 3, maxMarks: 100 },
  { id: 'bpwe206', code: 'BPWEK206', name: 'Professional Writing Skills in English', credits: 1, maxMarks: 100 },
  { id: 'bsfh207', code: 'BSFHK207', name: 'Scientific Foundations of Health', credits: 1, maxMarks: 100 },
  {
    id: 'aec2',
    code: 'BAEC208',
    name: 'Ability Enhancement Course - II',
    credits: 1,
    maxMarks: 100,
    isElective: true,
    electiveGroup: 'Ability Enhancement Course',
    electiveOptions: [
      { id: 'aec2_1', code: 'BAEC208A', name: 'Technical Report Writing', credits: 1 },
      { id: 'aec2_2', code: 'BAEC208B', name: 'Basics of Python Scripting', credits: 1 },
      { id: 'aec2_3', code: 'BAEC208C', name: 'Cyber Hygiene Practices', credits: 1 },
      { id: 'aec2_x', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
    ],
  },
];

// Branch Specific Semester Syllabi Repository
const SCHEME_SUBJECTS_MAP: Record<string, Record<string, Record<string, VtuSubject[]>>> = {
  '2022': {
    cse: {
      '1': FIRST_YEAR_2022_P_CYCLE,
      '2': FIRST_YEAR_2022_C_CYCLE,
      '3': [
        { id: 'bcs301', code: 'BCS301', name: 'Mathematics for Computer Science', credits: 4, maxMarks: 100 },
        { id: 'bcs302', code: 'BCS302', name: 'Digital Design and Computer Organization', credits: 4, maxMarks: 100 },
        { id: 'bcs303', code: 'BCS303', name: 'Operating Systems', credits: 4, maxMarks: 100 },
        { id: 'bcs304', code: 'BCS304', name: 'Data Structures and Applications', credits: 3, maxMarks: 100 },
        { id: 'bcsl305', code: 'BCSL305', name: 'Data Structures Laboratory', credits: 1.5, maxMarks: 100 },
        { id: 'bsck307', code: 'BSCK307', name: 'Social Connect & Responsibility', credits: 1, maxMarks: 100 },
        {
          id: 'aec3',
          code: 'BCS358',
          name: 'Ability Enhancement Course - III',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec3_1', code: 'BCS358A', name: 'Object Oriented Programming with Java', credits: 1 },
            { id: 'aec3_2', code: 'BCS358B', name: 'Object Oriented Programming with C++', credits: 1 },
            { id: 'aec3_3', code: 'BCS358C', name: 'Web Programming & Modern JavaScript', credits: 1 },
            { id: 'aec3_x', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
      '4': [
        { id: 'bcs401', code: 'BCS401', name: 'Analysis & Design of Algorithms', credits: 4, maxMarks: 100 },
        { id: 'bcs402', code: 'BCS402', name: 'Microcontrollers & Embedded Systems', credits: 4, maxMarks: 100 },
        { id: 'bcs403', code: 'BCS403', name: 'Database Management Systems', credits: 4, maxMarks: 100 },
        { id: 'bcs404', code: 'BCS404', name: 'Artificial Intelligence & Machine Learning', credits: 3, maxMarks: 100 },
        { id: 'bcsl405', code: 'BCSL405', name: 'DBMS and Algorithms Laboratory', credits: 1.5, maxMarks: 100 },
        { id: 'bcik406', code: 'BCIK406', name: 'Constitution of India & Cyber Law', credits: 1, maxMarks: 100 },
        { id: 'bbok407', code: 'BBOK407', name: 'Biology for Engineers', credits: 2, maxMarks: 100 },
        {
          id: 'aec4',
          code: 'BCS458',
          name: 'Ability Enhancement Course - IV',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec4_1', code: 'BCS458A', name: 'Python Programming Essentials', credits: 1 },
            { id: 'aec4_2', code: 'BCS458B', name: 'Unix Shell Scripting & Tools', credits: 1 },
            { id: 'aec4_3', code: 'BCS458C', name: 'R Programming for Data Analytics', credits: 1 },
            { id: 'aec4_x', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
      '5': [
        { id: '22cs51', code: '22CS51', name: 'Software Engineering & Agile Methodology', credits: 3, maxMarks: 100 },
        { id: '22cs52', code: '22CS52', name: 'Computer Networks', credits: 4, maxMarks: 100 },
        { id: '22cs53', code: '22CS53', name: 'Theory of Computation & Automata', credits: 3, maxMarks: 100 },
        { id: '22cs54', code: '22CS54', name: 'Cloud Computing & Virtualization', credits: 3, maxMarks: 100 },
        { id: '22csl55', code: '22CSL55', name: 'Computer Networks Laboratory', credits: 1.5, maxMarks: 100 },
        { id: '22evs57', code: '22EVS57', name: 'Environmental Studies & Sustainability', credits: 1, maxMarks: 100 },
        {
          id: 'pe1',
          code: '22CS51X',
          name: 'Professional Elective Course - 1',
          credits: 3,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Professional Elective 1',
          electiveOptions: [
            { id: 'pe1_1', code: '22CS511', name: 'Cyber Security & Forensics', credits: 3 },
            { id: 'pe1_2', code: '22CS512', name: 'Data Mining & Data Warehousing', credits: 3 },
            { id: 'pe1_3', code: '22CS513', name: 'Advanced Java Programming', credits: 3 },
            { id: 'pe1_x', code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
          ],
        },
      ],
      '6': [
        { id: '22cs61', code: '22CS61', name: 'Compiler Design', credits: 4, maxMarks: 100 },
        { id: '22cs62', code: '22CS62', name: 'Cryptography & Network Security', credits: 4, maxMarks: 100 },
        { id: '22cs63', code: '22CS63', name: 'Full Stack Web Development', credits: 3, maxMarks: 100 },
        { id: '22csl64', code: '22CSL64', name: 'Full Stack Development Lab', credits: 1.5, maxMarks: 100 },
        { id: '22csmp66', code: '22CSMP66', name: 'Mini Project Phase', credits: 2, maxMarks: 100 },
        {
          id: 'pe2',
          code: '22CS61X',
          name: 'Professional Elective Course - 2',
          credits: 3,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Professional Elective 2',
          electiveOptions: [
            { id: 'pe2_1', code: '22CS611', name: 'Machine Learning Techniques', credits: 3 },
            { id: 'pe2_2', code: '22CS612', name: 'Internet of Things (IoT)', credits: 3 },
            { id: 'pe2_3', code: '22CS613', name: 'Big Data Analytics', credits: 3 },
            { id: 'pe2_x', code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
          ],
        },
        {
          id: 'oe1',
          code: '22CS64X',
          name: 'Open Elective Course - 1',
          credits: 3,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Open Elective 1',
          electiveOptions: [
            { id: 'oe1_1', code: '22CS641', name: 'Introduction to Data Science', credits: 3 },
            { id: 'oe1_2', code: '22CS642', name: 'Cyber Laws & Ethics', credits: 3 },
            { id: 'oe1_x', code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
          ],
        },
      ],
      '7': [
        { id: '22cs71', code: '22CS71', name: 'Deep Learning & Neural Networks', credits: 4, maxMarks: 100 },
        { id: '22cs72', code: '22CS72', name: 'Distributed Systems & Microservices', credits: 3, maxMarks: 100 },
        { id: '22csp73', code: '22CSP73', name: 'Major Project Work - Phase 1', credits: 3, maxMarks: 100 },
        {
          id: 'pe3',
          code: '22CS71X',
          name: 'Professional Elective Course - 3',
          credits: 3,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Professional Elective 3',
          electiveOptions: [
            { id: 'pe3_1', code: '22CS711', name: 'Blockchain Technology', credits: 3 },
            { id: 'pe3_2', code: '22CS712', name: 'Natural Language Processing', credits: 3 },
            { id: 'pe3_3', code: '22CS713', name: 'Computer Vision & Pattern Recognition', credits: 3 },
            { id: 'pe3_x', code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
          ],
        },
        {
          id: 'oe2',
          code: '22CS74X',
          name: 'Open Elective Course - 2',
          credits: 3,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Open Elective 2',
          electiveOptions: [
            { id: 'oe2_1', code: '22CS741', name: 'Renewable Energy Systems', credits: 3 },
            { id: 'oe2_2', code: '22CS742', name: 'Industrial Project Management', credits: 3 },
            { id: 'oe2_x', code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
          ],
        },
      ],
      '8': [
        { id: '22csp81', code: '22CSP81', name: 'Major Project Work - Phase 2', credits: 10, maxMarks: 100 },
        { id: '22csi82', code: '22CSI82', name: 'Technical Seminar / Research Study', credits: 1, maxMarks: 100 },
        { id: '22int83', code: '22INT83', name: 'Industry Internship / Capstone', credits: 3, maxMarks: 100 },
      ],
    },
    aiml: {
      '1': FIRST_YEAR_2022_P_CYCLE,
      '2': FIRST_YEAR_2022_C_CYCLE,
      '3': [
        { id: 'bai301', code: 'BAI301', name: 'Mathematics for AI and Machine Learning', credits: 4, maxMarks: 100 },
        { id: 'bai302', code: 'BAI302', name: 'Digital Design & Computer Architecture', credits: 4, maxMarks: 100 },
        { id: 'bai303', code: 'BAI303', name: 'Operating Systems & System Software', credits: 4, maxMarks: 100 },
        { id: 'bai304', code: 'BAI304', name: 'Data Structures and Applications', credits: 3, maxMarks: 100 },
        { id: 'bail305', code: 'BAIL305', name: 'Data Structures Laboratory', credits: 1.5, maxMarks: 100 },
        { id: 'bsck307', code: 'BSCK307', name: 'Social Connect & Responsibility', credits: 1, maxMarks: 100 },
        {
          id: 'aec3_ai',
          code: 'BAI358',
          name: 'Ability Enhancement Course - III',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec3_ai1', code: 'BAI358A', name: 'Python for Artificial Intelligence', credits: 1 },
            { id: 'aec3_ai2', code: 'BAI358B', name: 'Java Programming Basics', credits: 1 },
            { id: 'aec3_aix', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
      '4': [
        { id: 'bai401', code: 'BAI401', name: 'Design and Analysis of Algorithms', credits: 4, maxMarks: 100 },
        { id: 'bai402', code: 'BAI402', name: 'Artificial Intelligence: Search & Logic', credits: 4, maxMarks: 100 },
        { id: 'bai403', code: 'BAI403', name: 'Database Management Systems', credits: 4, maxMarks: 100 },
        { id: 'bai404', code: 'BAI404', name: 'Microcontrollers & IoT Architecture', credits: 3, maxMarks: 100 },
        { id: 'bail405', code: 'BAIL405', name: 'AI & DBMS Laboratory', credits: 1.5, maxMarks: 100 },
        { id: 'bcik406', code: 'BCIK406', name: 'Constitution of India & Cyber Law', credits: 1, maxMarks: 100 },
        { id: 'bbok407', code: 'BBOK407', name: 'Biology for Engineers', credits: 2, maxMarks: 100 },
        {
          id: 'aec4_ai',
          code: 'BAI458',
          name: 'Ability Enhancement Course - IV',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec4_ai1', code: 'BAI458A', name: 'Data Visualization using Python', credits: 1 },
            { id: 'aec4_ai2', code: 'BAI458B', name: 'R for Statistical Learning', credits: 1 },
            { id: 'aec4_aix', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
    },
    ece: {
      '1': FIRST_YEAR_2022_P_CYCLE,
      '2': FIRST_YEAR_2022_C_CYCLE,
      '3': [
        { id: 'bec301', code: 'BEC301', name: 'Engineering Mathematics-III for EC', credits: 4, maxMarks: 100 },
        { id: 'bec302', code: 'BEC302', name: 'Digital System Design using Verilog', credits: 4, maxMarks: 100 },
        { id: 'bec303', code: 'BEC303', name: 'Electronic Principles and Circuits', credits: 4, maxMarks: 100 },
        { id: 'bec304', code: 'BEC304', name: 'Network Analysis and Synthesis', credits: 3, maxMarks: 100 },
        { id: 'becl305', code: 'BECL305', name: 'Analog Electronic Circuits Lab', credits: 1.5, maxMarks: 100 },
        { id: 'bsck307', code: 'BSCK307', name: 'Social Connect & Responsibility', credits: 1, maxMarks: 100 },
        {
          id: 'aec3_ec',
          code: 'BEC358',
          name: 'Ability Enhancement Course - III',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec3_ec1', code: 'BEC358A', name: 'MATLAB / Octave for Engineers', credits: 1 },
            { id: 'aec3_ec2', code: 'BEC358B', name: 'PCB Design & Prototyping', credits: 1 },
            { id: 'aec3_ecx', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
      '4': [
        { id: 'bec401', code: 'BEC401', name: 'Electromagnetic Waves and Transmission', credits: 4, maxMarks: 100 },
        { id: 'bec402', code: 'BEC402', name: 'Microcontrollers (ARM Cortex)', credits: 4, maxMarks: 100 },
        { id: 'bec403', code: 'BEC403', name: 'Analog & Digital Communication', credits: 4, maxMarks: 100 },
        { id: 'bec404', code: 'BEC404', name: 'Control Systems Engineering', credits: 3, maxMarks: 100 },
        { id: 'becl405', code: 'BECL405', name: 'Microcontrollers and HDL Lab', credits: 1.5, maxMarks: 100 },
        { id: 'bcik406', code: 'BCIK406', name: 'Constitution of India & Cyber Law', credits: 1, maxMarks: 100 },
        { id: 'bbok407', code: 'BBOK407', name: 'Biology for Engineers', credits: 2, maxMarks: 100 },
      ],
    },
  },
  '2021': {
    cse: {
      '1': [
        { id: '21mat11', code: '21MAT11', name: 'Calculus and Linear Algebra', credits: 3, maxMarks: 100 },
        { id: '21phy12', code: '21PHY12', name: 'Engineering Physics', credits: 3, maxMarks: 100 },
        { id: '21ele13', code: '21ELE13', name: 'Basic Electrical Engineering', credits: 3, maxMarks: 100 },
        { id: '21civ14', code: '21CIV14', name: 'Elements of Civil Engineering', credits: 3, maxMarks: 100 },
        { id: '21evn15', code: '21EVN15', name: 'Environmental Studies', credits: 1, maxMarks: 100 },
        { id: '21phyl16', code: '21PHYL16', name: 'Engineering Physics Laboratory', credits: 1, maxMarks: 100 },
        { id: '21elel17', code: '21ELEL17', name: 'Basic Electrical Lab', credits: 1, maxMarks: 100 },
        { id: '21egh18', code: '21EGH18', name: 'Communicative English', credits: 1, maxMarks: 100 },
      ],
      '2': [
        { id: '21mat21', code: '21MAT21', name: 'Advanced Calculus & Numerical Methods', credits: 3, maxMarks: 100 },
        { id: '21che22', code: '21CHE22', name: 'Engineering Chemistry', credits: 3, maxMarks: 100 },
        { id: '21psp23', code: '21PSP23', name: 'Problem Solving through C Programming', credits: 3, maxMarks: 100 },
        { id: '21eln24', code: '21ELN24', name: 'Basic Electronics', credits: 3, maxMarks: 100 },
        { id: '21ced25', code: '21CED25', name: 'Computer Aided Engineering Drawing', credits: 3, maxMarks: 100 },
        { id: '21chel26', code: '21CHEL26', name: 'Engineering Chemistry Laboratory', credits: 1, maxMarks: 100 },
        { id: '21cpl27', code: '21CPL27', name: 'C Programming Laboratory', credits: 1, maxMarks: 100 },
        { id: '21egh28', code: '21EGH28', name: 'Professional Writing Skills in English', credits: 1, maxMarks: 100 },
      ],
      '3': [
        { id: '21mat31', code: '21MAT31', name: 'Transform Calculus, Fourier & Numerical Tech', credits: 3, maxMarks: 100 },
        { id: '21cs32', code: '21CS32', name: 'Data Structures and Applications', credits: 4, maxMarks: 100 },
        { id: '21cs33', code: '21CS33', name: 'Analog and Digital Electronics', credits: 4, maxMarks: 100 },
        { id: '21cs34', code: '21CS34', name: 'Computer Organization and Architecture', credits: 3, maxMarks: 100 },
        { id: '21csl35', code: '21CSL35', name: 'Data Structures Laboratory', credits: 1, maxMarks: 100 },
        { id: '21cip37', code: '21CIP37', name: 'Constitution of India & Prof. Ethics', credits: 1, maxMarks: 100 },
        { id: '21ksk39', code: '21KSK39', name: 'Samskruthika / Balake Kannada', credits: 1, maxMarks: 100 },
        {
          id: 'aec_21_3',
          code: '21CS38X',
          name: 'Ability Enhancement Course',
          credits: 1,
          maxMarks: 100,
          isElective: true,
          electiveGroup: 'Ability Enhancement Course',
          electiveOptions: [
            { id: 'aec_21_3a', code: '21CS381', name: 'Object Oriented Programming with Java', credits: 1 },
            { id: 'aec_21_3b', code: '21CS382', name: 'Web Technology Laboratory', credits: 1 },
            { id: 'aec_21_3x', code: 'X', name: 'X - Other Subject / Elective', credits: 1 },
          ],
        },
      ],
      '4': [
        { id: '21mat41', code: '21MAT41', name: 'Mathematical Foundations for Computing', credits: 3, maxMarks: 100 },
        { id: '21cs42', code: '21CS42', name: 'Design and Analysis of Algorithms', credits: 4, maxMarks: 100 },
        { id: '21cs43', code: '21CS43', name: 'Microcontrollers & Embedded Systems', credits: 4, maxMarks: 100 },
        { id: '21cs44', code: '21CS44', name: 'Operating Systems', credits: 3, maxMarks: 100 },
        { id: '21csl45', code: '21CSL45', name: 'Algorithms Laboratory', credits: 1, maxMarks: 100 },
        { id: '21uhv49', code: '21UHV49', name: 'Universal Human Values', credits: 1, maxMarks: 100 },
      ],
    },
  },
};

/**
 * Returns subjects for any scheme, branch, and semester.
 * Falls back dynamically to realistic VTU courses if an exact mapping is not in the dictionary.
 */
export function getVtuSubjects(schemeId: string, branchId: string, semesterId: string): VtuSubject[] {
  const normScheme = schemeId || '2022';
  const normBranch = (branchId || 'cse').toLowerCase();
  const normSem = semesterId || '3';

  // 1. Check exact table match
  const schemeDict = SCHEME_SUBJECTS_MAP[normScheme];
  if (schemeDict && schemeDict[normBranch] && schemeDict[normBranch][normSem]) {
    return schemeDict[normBranch][normSem];
  }

  // 2. Check CSE fallback for similar branch in same scheme
  if (schemeDict && schemeDict['cse'] && schemeDict['cse'][normSem]) {
    // Generate specialized subjects tailored with branch code
    const cseSubs = schemeDict['cse'][normSem];
    const prefix = normScheme === '2022' ? 'B' + normBranch.toUpperCase().slice(0, 2) : '21' + normBranch.toUpperCase().slice(0, 2);
    return cseSubs.map((sub, i) => ({
      ...sub,
      id: `${normScheme}_${normBranch}_${normSem}_${i}`,
      code: sub.code.replace(/^(BCS|22CS|21CS)/, prefix),
      name: sub.name,
    }));
  }

  // 3. Robust dynamic generation for higher semesters (5, 6, 7, 8) or other combinations
  const semNum = parseInt(normSem, 10) || 3;
  const prefix = normScheme === '2022' ? `B${normBranch.toUpperCase().slice(0, 2)}${semNum}` : `21${normBranch.toUpperCase().slice(0, 2)}${semNum}`;

  return [
    { id: `${normBranch}_${semNum}_1`, code: `${prefix}01`, name: `Core Engineering Subject ${semNum}.1`, credits: 4, maxMarks: 100 },
    { id: `${normBranch}_${semNum}_2`, code: `${prefix}02`, name: `Advanced Core Theory ${semNum}.2`, credits: 4, maxMarks: 100 },
    { id: `${normBranch}_${semNum}_3`, code: `${prefix}03`, name: `Applied Domain Technology ${semNum}.3`, credits: 3, maxMarks: 100 },
    { id: `${normBranch}_${semNum}_4`, code: `${prefix}04`, name: `System Design & Applications ${semNum}.4`, credits: 3, maxMarks: 100 },
    { id: `${normBranch}_${semNum}_5`, code: `${prefix}L05`, name: `Specialized Domain Laboratory`, credits: 1.5, maxMarks: 100 },
    {
      id: `${normBranch}_${semNum}_pe`,
      code: `${prefix}PE`,
      name: `Professional Elective Course`,
      credits: 3,
      maxMarks: 100,
      isElective: true,
      electiveGroup: 'Professional Elective Group',
      electiveOptions: [
        { id: `opt_1`, code: `${prefix}11`, name: `Advanced Specialized Track A`, credits: 3 },
        { id: `opt_2`, code: `${prefix}12`, name: `Industry Cloud & Automation Track B`, credits: 3 },
        { id: `opt_3`, code: `${prefix}13`, name: `Intelligent Systems & Security Track C`, credits: 3 },
        { id: `opt_x`, code: 'X', name: 'X - Other Subject / Elective', credits: 3 },
      ],
    },
    { id: `${normBranch}_${semNum}_mp`, code: `${prefix}MP07`, name: semNum >= 7 ? 'Major Project Phase' : 'Mini Project / Innovation Lab', credits: semNum >= 7 ? 6 : 2, maxMarks: 100 },
  ];
}

/**
 * Official VTU CBCS / NEP Grading Scale
 * Marks Range (0 - 100) -> Letter Grade and Grade Point (0 - 10)
 */
export function getGradeAndPoints(
  marks: number,
  isPassed: boolean = true
): { grade: EvaluatedSubject['grade']; gradePoint: number; description: string } {
  // If student failed or marked as fail toggle
  if (!isPassed || marks < 40) {
    return { grade: 'F', gradePoint: 0, description: 'Fail / Arrear' };
  }

  if (marks >= 90) return { grade: 'O', gradePoint: 10, description: 'Outstanding' };
  if (marks >= 80) return { grade: 'A+', gradePoint: 9, description: 'Excellent' };
  if (marks >= 70) return { grade: 'A', gradePoint: 8, description: 'Very Good' };
  if (marks >= 60) return { grade: 'B+', gradePoint: 7, description: 'Good' };
  if (marks >= 55) return { grade: 'B', gradePoint: 6, description: 'Above Average' };
  if (marks >= 50) return { grade: 'C', gradePoint: 5, description: 'Average' };
  if (marks >= 40) return { grade: 'P', gradePoint: 4, description: 'Pass' };

  return { grade: 'F', gradePoint: 0, description: 'Fail' };
}

/**
 * Official VTU SGPA Formula:
 * SGPA = Σ (Credits_i * GradePoint_i) / Σ (Credits_i)
 * (Where credits > 0. Courses with 0 credits are excluded from denominator).
 */
export function calculateSgpa(subjects: EvaluatedSubject[]): {
  sgpa: number;
  totalCredits: number;
  earnedCredits: number;
  totalCreditPoints: number;
  percentage: number;
  classAward: string;
  hasBacklogs: boolean;
} {
  let totalCredits = 0;
  let earnedCredits = 0;
  let totalCreditPoints = 0;
  let hasBacklogs = false;

  subjects.forEach(sub => {
    if (sub.credits > 0) {
      totalCredits += sub.credits;
      totalCreditPoints += sub.credits * sub.gradePoint;
      if (sub.gradePoint > 0 && sub.isPassed) {
        earnedCredits += sub.credits;
      } else {
        hasBacklogs = true;
      }
    }
  });

  const sgpa = totalCredits > 0 ? parseFloat((totalCreditPoints / totalCredits).toFixed(2)) : 0;
  // Official VTU Percentage Conversion: (SGPA - 0.75) * 10
  const percentage = sgpa >= 0.75 ? parseFloat(((sgpa - 0.75) * 10).toFixed(2)) : 0;

  // Class Distinction
  let classAward = 'Pass Class';
  if (hasBacklogs) {
    classAward = 'Failed (Backlogs in Semester)';
  } else if (sgpa >= 7.75) {
    classAward = 'First Class with Distinction (FCD)';
  } else if (sgpa >= 6.75) {
    classAward = 'First Class (FC)';
  } else if (sgpa >= 5.75) {
    classAward = 'Second Class (SC)';
  } else if (sgpa >= 4.0) {
    classAward = 'Pass Class';
  } else {
    classAward = 'Failed';
  }

  return {
    sgpa,
    totalCredits,
    earnedCredits,
    totalCreditPoints,
    percentage,
    classAward,
    hasBacklogs,
  };
}

/**
 * Validates VTU 10-character USN format
 * Pattern: ^[1-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$ (e.g. 1ME21CS017, 1CG22CS045)
 */
export function validateVtuUsn(usn: string): {
  isValid: boolean;
  normalized: string;
  parsed?: {
    region: string;
    collegeCode: string;
    year: string;
    branchCode: string;
    rollNumber: string;
  };
} {
  const normalized = (usn || '').trim().toUpperCase();
  const vtuRegex = /^([1-9])([A-Z]{2})(\d{2})([A-Z]{2})(\d{3})$/;
  const match = normalized.match(vtuRegex);

  if (!match) {
    return { isValid: false, normalized };
  }

  return {
    isValid: true,
    normalized,
    parsed: {
      region: match[1],
      collegeCode: match[2],
      year: match[3],
      branchCode: match[4],
      rollNumber: match[5],
    },
  };
}
