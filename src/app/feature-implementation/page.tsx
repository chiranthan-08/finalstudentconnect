'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Database,
  Shield,
  Bot,
  Award,
  Sparkles,
  UserCheck,
  Briefcase,
  Users,
  Flame,
  Search,
  CheckCircle2,
  Mic,
  Bell,
  LayoutDashboard,
  Lightbulb,
  Calendar,
  CheckSquare,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Check,
  Layers,
  ChevronRight,
  Compass,
  Rocket,
  Target,
  GraduationCap,
  Star,
  ExternalLink,
  Code2,
  Lock,
  Globe2,
  Trophy,
  BookOpen
} from 'lucide-react';

interface FeaturePillar {
  id: number;
  title: string;
  category: 'core' | 'ai' | 'career' | 'community' | 'security';
  icon: any;
  tag: string;
  description: string;
  keyFeatures: string[];
  expectedBenefit: string;
  status: 'In Development' | 'Planned' | 'Phase 1 Active';
}

export default function FeatureImplementationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const pillars: FeaturePillar[] = [
    {
      id: 1,
      title: '1. Website and Mobile Application Development',
      category: 'core',
      icon: Smartphone,
      tag: 'Cross-Platform',
      status: 'In Development',
      description: 'Making our platform accessible through both a high-performance responsive website and dedicated mobile applications for Android and iOS.',
      keyFeatures: [
        'Develop native-grade Android and iOS applications with offline support.',
        'Create a responsive website that works smoothly on mobile phones, tablets, and computers.',
        'Enable students to access their profiles, academic records, achievements, and learning resources anytime.',
        'Introduce push notifications for important updates, competitions, deadlines, and opportunities.',
        'Seamlessly synchronize information in real-time across the website and mobile applications.'
      ],
      expectedBenefit: 'Students can access the platform conveniently from anywhere, improving engagement, responsiveness, and accessibility across Karnataka.'
    },
    {
      id: 2,
      title: '2. Secure Student Database and Privacy Protection',
      category: 'security',
      icon: Shield,
      tag: 'Enterprise Security',
      status: 'Phase 1 Active',
      description: 'Building a secure and reliable database infrastructure for storing student information while preventing unauthorized access and misuse.',
      keyFeatures: [
        'Develop a centralized, encrypted student database architecture.',
        'Implement secure registration, email verification, and multi-factor authentication (MFA).',
        'Use role-based access control (RBAC) ensuring students, teachers, administrators, and recruiters access only authorized information.',
        'Encrypt sensitive information in transit (TLS 1.3) and at rest (AES-256).',
        'Allow students granular control over the visibility of their profiles, projects, and achievements.',
        'Maintain automated audit logs to monitor and track access to sensitive student records.',
        'Provide self-service options to correct, export, or request deletion of personal data under applicable data privacy regulations.',
        'Establish automated secure snapshot backups and disaster recovery mechanisms.'
      ],
      expectedBenefit: 'Students can build their academic profiles with greater confidence that their data is protected, secure, and used responsibly.'
    },
    {
      id: 3,
      title: '3. Next-Generation AI Chatbot',
      category: 'ai',
      icon: Bot,
      tag: 'GenAI & Multi-lingual',
      status: 'Phase 1 Active',
      description: 'An advanced AI-powered chatbot (Connect AI) that acts as a 24/7 personal digital academic assistant and study mentor for students.',
      keyFeatures: [
        'Answer academic, technical, and general educational questions in simple, accessible language.',
        'Support multiple Indian languages, including Kannada, Hindi, Tamil, and Telugu.',
        'Explain difficult STEM concepts using relatable examples, executive summaries, and step-by-step guidance.',
        'Help students prepare for university examinations, interviews, paper presentations, and competitive entrance tests (GATE/PGCET).',
        'Recommend personalized courses and learning resources based on individual goals.',
        'Assist students with resume optimization, AI cover letters, and mock technical interview rehearsals.',
        'Provide voice-based interaction for students who prefer speaking over typing.',
        'Remember relevant learning preferences with explicit user consent and privacy controls.',
        'Provide authoritative source references and clearly identify uncertain answers.'
      ],
      expectedBenefit: 'Students receive personalized assistance whenever they need it, without depending entirely on fixed college schedules or human support.'
    },
    {
      id: 4,
      title: '4. Rewards and Recognition System',
      category: 'community',
      icon: Trophy,
      tag: 'Merit Rewards',
      status: 'In Development',
      description: 'A transparent, merit-first recognition program that motivates students to learn, improve skills, and contribute actively to their peer community.',
      keyFeatures: [
        'Monthly and annual awards celebrating outstanding student academic and technical achievements.',
        'Digital verifiable certificates, achievement badges, digital trophies, and XP points.',
        'Rewards for completing courses, participating in college hackathons, and contributing useful study materials.',
        'Recognition for students who maintain complete, verified, and well-organized academic portfolios.',
        'Special awards for helpful mentors, educators, and student community champions.',
        'Scholarships, educational vouchers, coding books, and learning tool subscriptions through university sponsorships.',
        'A transparent leaderboard recognizing hard work, improvement, and positive peer contributions rather than popularity.'
      ],
      expectedBenefit: 'Students feel continuously motivated to master skills, build consistency, and positively engage with the student ecosystem.'
    },
    {
      id: 5,
      title: '5. Universal Multi-Degree Expansion: All Academic Streams (MBBS, MBA, MCA, BCA, Arts & Sciences)',
      category: 'career',
      icon: GraduationCap,
      tag: 'Universal Degree Hub',
      status: 'In Development',
      description: 'Currently dedicated to Karnataka engineering students, our next phase expands to provide verified academic information, admission predictors, cutoffs, and career roadmaps for each and every degree stream — including Medical (MBBS/BDS), Management (MBA/BBA), Computer Applications (MCA/BCA), Commerce (B.Com/CA), and Arts & Sciences.',
      keyFeatures: [
        'Medical & Healthcare Wing (MBBS, BDS, B.Pharm, Nursing, Allied Health): NEET UG & PG cutoff predictors, KEA Karnataka medical counselling guidance, hospital clinical internship directories, and top medical colleges across Bengaluru, Mysuru & Tumakuru.',
        'Management & Business Studies (MBA, PGDM, BBA): PGCET MBA, KMAT, CAT & MAT cutoffs, top Karnataka business schools, case study hubs, corporate summer internships, and executive leadership roadmaps.',
        'Computer Applications & IT Systems (MCA, BCA, B.Sc CS): PGCET MCA cutoffs, programming masterclasses, software development roadmaps, capstone project showcases, and tech campus hiring drives.',
        'Commerce, Banking & Accounting (B.Com, M.Com, CA, CS, CMA, ACCA): Top commerce colleges, financial modelling bootcamps, chartered accountancy article-ship directories, and corporate banking recruitment guides.',
        'Arts, Humanities & Social Sciences (BA, MA, Journalism, Psychology, Economics, Law): University admissions, civil services (UPSC/KPSC) foundation tracks, media internships, and social science research fellowship resources.',
        'Pure & Applied Sciences (B.Sc, M.Sc, Research Fellowships): IISc, Central University, and IIT-JAM entrance pathways, laboratory research grant directories, and STEM postgraduate scholarships.',
        'Unified Degree Predictor & Syllabus Companion: Extending our signature calculators, semester SGPA/CGPA formulas, and admission chance predictors to state, deemed, and autonomous universities across Karnataka.'
      ],
      expectedBenefit: 'Transforms Student Connect from an engineering-only platform into a universal higher education destination empowering students across every academic degree and discipline in Karnataka.'
    },
    {
      id: 6,
      title: '6. Smart Student Profile and Digital Portfolio',
      category: 'core',
      icon: UserCheck,
      tag: 'Digital Portfolio',
      status: 'Phase 1 Active',
      description: 'Empowering engineering students to create verified, employer-ready digital portfolios documenting their complete academic journey.',
      keyFeatures: [
        'Store verified academic qualifications, mini/major projects, internships, and certifications.',
        'Add rich project media with architecture diagrams, live demo URLs, GitHub repositories, and research abstracts.',
        'Generate ATS-friendly professional resumes in PDF format directly from verified profile data with 1 click.',
        'Create customized, shareable profile URLs (e.g., studentconnect.in/@username) and downloadable digital credentials.',
        'Provide optional proctored skill assessments and verifiable achievement badges.',
        'Grant students granular control over which profile sections are public, private, or visible only to verified recruiters.'
      ],
      expectedBenefit: 'Students can present their skills professionally when applying for internships, placements, scholarships, and higher education.'
    },
    {
      id: 7,
      title: '7. Career Guidance and Smart Job Matching',
      category: 'career',
      icon: Briefcase,
      tag: 'Placements & Jobs',
      status: 'In Development',
      description: 'Bridging higher education with industry by pairing students with curated internships, fresher engineering roles, and mentorship.',
      keyFeatures: [
        'Recommend curated internships, graduate engineering trainee (GET) roles, and startup opportunities across Bengaluru.',
        'Match opportunities accurately based on technical skills, CGPA, branch, location preferences, and career ambitions.',
        'Provide company-specific technical interview questions and interactive mock interview practice.',
        'Deliver automated AI resume scorecards with personalized improvement recommendations.',
        'Send real-time alerts for verified hiring drives, hackathon hiring pipelines, and deadline dates.',
        'Publish industry insights on emerging tech roles, package benchmarks, and in-demand skills.',
        'Enable verified recruiters to search and shortlist student profiles strictly with student consent.'
      ],
      expectedBenefit: 'Students gain seamless access to credible industry opportunities and can prepare effectively for high-paying campus placements.'
    },
    {
      id: 8,
      title: '8. Student Community and Collaboration Hub',
      category: 'community',
      icon: Users,
      tag: 'Peer Collaboration',
      status: 'Phase 1 Active',
      description: 'A vibrant, safe collegiate community where students across all 31 Karnataka districts can connect, collaborate, and exchange knowledge.',
      keyFeatures: [
        'Create specialized study groups based on branches, university schemes, college districts, and technical interests.',
        'Enable collaborative discussion boards to resolve difficult engineering doubts and share lab manuals.',
        'Facilitate student team building for national hackathons (like CIT Buildathon 2K26, SIH, and SIT Halocon).',
        'Organize peer-led webinars, technical paper symposiums, and live coding workshops.',
        'Provide a structured mentorship network linking junior students with alumni working in top tech companies.',
        'Incorporate multi-layered automated moderation, reporting, and anti-harassment safeguards to maintain a respectful space.'
      ],
      expectedBenefit: 'Students build meaningful lifelong academic connections, collaborate across institutions, and elevate each other.'
    },
    {
      id: 9,
      title: '9. Gamification and Learning Challenges',
      category: 'community',
      icon: Flame,
      tag: 'Gamification',
      status: 'Planned',
      description: 'Introducing enjoyable game mechanics and streaks to make mastering technical engineering subjects engaging and habit-forming.',
      keyFeatures: [
        'Daily and weekly coding sprints, engineering math puzzles, and algorithmic challenges.',
        'Subject-based VTU quizzes with instant grading, explanations, and peer percentile ranking.',
        'Award experience points (XP) for continuous daily streaks and completing course milestones.',
        'Unlock tiered achievement levels (e.g., Bronze Coder, Silver Architect, Gold Innovator).',
        'Host inter-college virtual league competitions between department student clubs.',
        'Provide special milestone certificates recognizing consistent effort and measurable academic growth.'
      ],
      expectedBenefit: 'Students cultivate disciplined study habits and problem-solving velocity through enjoyable, interactive challenges.'
    },
    {
      id: 10,
      title: '10. Scholarship and Educational Opportunity Finder',
      category: 'career',
      icon: Search,
      tag: 'Financial Aid',
      status: 'In Development',
      description: 'A dedicated directory matching students with government, institutional, and private scholarship programs so no student is left behind.',
      keyFeatures: [
        'Search verified scholarships filtered by state category, family income, merit rank, and gender criteria.',
        'Comprehensive coverage of Karnataka state scholarships (SSP, Vidyasiri, NSP, Jindal, MHRD, and corporate grants).',
        'Display transparent eligibility rules, required document checklists, and official portal links.',
        'Automated calendar reminders for upcoming scholarship application windows and renewal dates.',
        'Step-by-step guidance on gathering income/caste certificates, Bonafide documents, and university marks cards.',
        'Direct alerts whenever new corporate CSR educational grants are announced.'
      ],
      expectedBenefit: 'Students discover life-changing financial aid opportunities to fund their higher education and eliminate economic barriers.'
    },
    {
      id: 11,
      title: '11. Digital Certificates and Achievement Verification',
      category: 'security',
      icon: ShieldCheck,
      tag: 'Tamper-Proof Credentials',
      status: 'Phase 1 Active',
      description: 'A cryptographically secured verification engine to validate course completions, event participation, and academic achievements.',
      keyFeatures: [
        'Issue tamper-evident digital certificates for approved starter courses, workshops, and hackathons.',
        'Embed unique cryptographic certificate IDs and scannable verification QR codes on every credential.',
        'Provide an open institutional verification portal for colleges and employers to validate certificate authenticity in 1 click.',
        'Maintain an immutable registry of credential issuance dates, scores, and syllabus criteria.',
        'Prevent credential forging, duplicate issuance, and unearned credential claims.'
      ],
      expectedBenefit: 'Students can share trustworthy credentials with universities and global employers that are instantly verifiable.'
    },
    {
      id: 12,
      title: '12. Voice-Based and Multilingual Accessibility',
      category: 'ai',
      icon: Mic,
      tag: 'Accessibility & Kannada',
      status: 'In Development',
      description: 'Breaking down educational barriers by providing voice-first interactions and native Indian language support including Kannada.',
      keyFeatures: [
        'Native language interfaces with comprehensive support for Kannada (ಕನ್ನಡ), Hindi, Tamil, and Telugu.',
        'Voice search and speech-to-text queries for students who prefer speaking over typing.',
        'Text-to-speech audio narration for lecture notes, tutorial guides, and university announcements.',
        'AI simplification mode converting dense academic jargon into clear, plain-language conceptual explanations.',
        'Full adherence to WCAG 2.1 AA accessibility standards (high-contrast modes, screen-reader optimizations, accessible typography).'
      ],
      expectedBenefit: 'Students across all linguistic regions, diverse backgrounds, and accessibility needs can use the platform with ease.'
    },
    {
      id: 13,
      title: '13. Smart Notifications and Personal Dashboard',
      category: 'core',
      icon: Bell,
      tag: 'Mission Control',
      status: 'Phase 1 Active',
      description: 'A unified student dashboard bringing academic trackers, deadlines, and personalized recommendations into a single cohesive interface.',
      keyFeatures: [
        'Display live academic milestones, SGPA trackers, course progress bars, and registered hackathons.',
        'Surface intelligent recommendations for jobs, internships, courses, and scholarships tailored to the student.',
        'Automated deadline radar for semester exam registrations, assignment submissions, and event entries.',
        'Granular notification preference controls across email, in-app alerts, and push notifications.',
        'Weekly activity digests summarizing hours studied, flashcard reviews, and upcoming collegiate fests.'
      ],
      expectedBenefit: 'Students stay organized and focused on their priorities without getting overwhelmed by chaotic or irrelevant noise.'
    },
    {
      id: 14,
      title: '14. Faculty and Institution Dashboard',
      category: 'career',
      icon: LayoutDashboard,
      tag: 'Educator Suite',
      status: 'In Development',
      description: 'Institutional management portals for colleges, professors, and Training & Placement Officers (TPOs) to coordinate student success.',
      keyFeatures: [
        'Role-authorized portal for faculty to share verified lecture notes, lab manuals, and syllabus updates.',
        'Publish official departmental workshops, national hackathons, and placement drives with verified institution badges.',
        'View anonymized, aggregated participation benchmarks and student engagement metrics.',
        'Nominate and recognize high-performing students for prestigious university honors and corporate sponsorships.',
        'Export accredited development reports for NAAC, NBA, and NIRF institutional accreditation audits.'
      ],
      expectedBenefit: 'Institutions can coordinate student development and campus placements efficiently while safeguarding student privacy.'
    },
    {
      id: 15,
      title: '15. Student Project Showcase and Innovation Hub',
      category: 'career',
      icon: Lightbulb,
      tag: 'Showcase & Hackathons',
      status: 'Phase 1 Active',
      description: 'Encouraging students to transform academic theory into real-world solutions by displaying working prototypes and engineering projects.',
      keyFeatures: [
        'Publish project repositories, video demos, research whitepapers, and hardware architecture diagrams.',
        'Host college innovation challenges and virtual project expos with industry judges.',
        'Connect student inventors with experienced mentors, startup incubators, and inter-branch collaborators.',
        'Receive constructive code and design feedback from peer reviews and industry veterans.',
        'Recognize high-impact social, sustainable, and deep-tech inventions with cash grants and perks.',
        'Provide confidentiality flags and IP protection controls for patent-pending or proprietary student inventions.'
      ],
      expectedBenefit: 'Students earn industry visibility for practical work, master real-world execution, and unlock startup and hiring pathways.'
    },
    {
      id: 16,
      title: '16. AI-Powered Study Planner and Productivity Assistant',
      category: 'ai',
      icon: Calendar,
      tag: 'Study Productivity',
      status: 'In Development',
      description: 'An intelligent time-management companion that helps engineering students balance coursework, exams, projects, and personal health.',
      keyFeatures: [
        'Generate dynamic, personalized study schedules calibrated around university exam timetables.',
        'Deconstruct complex semester syllabi into manageable, bite-sized daily learning milestones.',
        'Create spaced-repetition revision schedules to maximize memory retention for theoretical and numerical subjects.',
        'Track daily completed tasks, pending laboratory records, and assignment submission deadlines.',
        'Incorporate Pomodoro focus cycles, virtual collaborative focus rooms, and gentle wellness reminders.'
      ],
      expectedBenefit: 'Students overcome procrastination, reduce examination stress, and achieve consistent academic excellence.'
    },
    {
      id: 17,
      title: '17. Trusted Content and Fake Information Detection',
      category: 'security',
      icon: CheckSquare,
      tag: 'Information Integrity',
      status: 'Phase 1 Active',
      description: 'Rigorous content verification systems ensuring all published cutoffs, notices, and opportunities are accurate and authentic.',
      keyFeatures: [
        'Authenticate official college announcements and KEA/VTU circulars against official university sources.',
        'Automated duplicate detection and scam-job filtering to protect students from misleading recruiters.',
        'Multi-stage community moderation to flag rumors, unverified cutoff leaks, or predatory services.',
        'Mandatory attribution links to official government and university portals on all academic claims.',
        'Human-in-the-loop review for high-impact announcements and verification badge approvals.'
      ],
      expectedBenefit: 'Students can trust the platform implicitly for vital educational decisions without falling prey to misinformation.'
    },
    {
      id: 18,
      title: '18. Platform Analytics and Continuous Improvement',
      category: 'core',
      icon: BarChart3,
      tag: 'Data-Driven Growth',
      status: 'Phase 1 Active',
      description: 'Systematic feedback loops and performance telemetry to continuously refine platform usability, security, and student satisfaction.',
      keyFeatures: [
        'Collect continuous in-app student feedback on tools, calculators, and feature usability.',
        'Analyze anonymized engagement telemetry to identify high-value tools and optimize user flows.',
        'Monitor platform latency, Core Web Vitals, API uptime, and security telemetry 24/7.',
        'Conduct regular student and faculty usability roundtables across engineering colleges.',
        'Publish transparent development roadmaps and feature ship logs based directly on student suggestions.'
      ],
      expectedBenefit: 'The platform evolves dynamically based on real student needs and continuous community feedback.'
    }
  ];

  const filteredPillars = pillars.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyFeatures.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Core Platform & Verified Foundations',
      status: 'Active & Deployed',
      statusColor: 'emerald',
      items: [
        'Responsive web platform with sub-second load times',
        'Secure student authentication with email verification & RBAC',
        'Digital student profiles and verified achievement portfolios',
        'Connect AI Copilot with Google Gemini multi-model intelligence',
        'Interactive KEA Cutoff Predictor and VTU Academic Suite',
        'Discover & Compare 240+ Karnataka engineering colleges'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Learning & Career Development',
      status: 'In Active Development',
      statusColor: 'blue',
      items: [
        'Universal degree expansion: MBBS, MBA, MCA, BCA, Arts, Commerce & Sciences',
        'Smart career guidance, ATS resume scanner & verified internships',
        'Multilingual Kannada (ಕನ್ನಡ) & voice-based accessibility engine',
        'AI-powered study planner and automated exam countdowns',
        'Peer tutoring with secure escrow protection'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Engagement & Recognition',
      status: 'Scheduled',
      statusColor: 'amber',
      items: [
        'Rewards and recognition system with digital trophies & XP points',
        'Karnataka state & corporate scholarship finder with deadline radar',
        'Student project showcase with mentor and incubator matching',
        'Faculty and institutional dashboard for TPOs and college admins',
        'Cross-platform Android & iOS mobile applications'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Advanced Intelligence & Ecosystem Scale',
      status: 'Vision & Expansion',
      statusColor: 'indigo',
      items: [
        'Advanced cryptographic certificate verification registry',
        'Deep conversational multi-modal AI reasoning with live code execution',
        'State-wide partnerships with 200+ colleges and premier recruiters',
        'End-to-end automated campus placement pipeline integration'
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-slate-900/20 p-8 sm:p-12 text-center space-y-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Strategic Masterplan • Next Phase Implementation</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Next Phase of Our Website: <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Building a Smarter, Safer, and More Rewarding Digital Platform for Students
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          The next phase of our website focuses on transforming it into a complete, student-friendly digital ecosystem. Our vision is to empower every student to learn, showcase their achievements, explore career opportunities, interact with intelligent AI, and connect with vibrant collegiate communities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm">
            <Layers className="w-4 h-4 text-blue-600" />
            <span>18 Strategic Pillars</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20">
            <GraduationCap className="w-4 h-4 text-cyan-300" />
            <span>Multi-Degree Expansion (MBBS • MBA • MCA • Arts)</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span>4 Implementation Phases</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Privacy-First Architecture</span>
          </div>
        </div>
      </section>

      {/* 2. VISION STATEMENT CARD */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-extrabold text-xs uppercase tracking-wider">
          <Target className="w-4 h-4" />
          <span>Our Guiding Philosophy</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Beyond a Website: An All-in-One Digital Student Companion
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Our vision is not just to create an informational portal, but to architect a thriving educational infrastructure that accompanies students from their first day of KCET option entry all the way through campus placements and career milestones. To achieve this vision, we introduce cutting-edge AI guidance, personalized skill tracking, robust privacy controls, and transparent reward systems that celebrate real student effort.
        </p>
      </section>

      {/* 3. CATEGORY FILTER & SEARCH BAR */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All 18 Pillars' },
              { id: 'core', label: 'Core Platform' },
              { id: 'ai', label: 'AI & Intelligence' },
              { id: 'security', label: 'Security & Trust' },
              { id: 'career', label: 'Career & Guidance' },
              { id: 'community', label: 'Community & Rewards' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-blue-500/25'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-blue-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features (e.g. Mobile, AI, Rewards)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* 4. FEATURE PILLARS GRID (ALL 18 PILLARS - PERFECT SYMMETRIC ALIGNMENT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-xl flex flex-col justify-between h-full space-y-4 group"
              >
                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Top Header: Icon + Badges */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                        {pillar.tag}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                        pillar.status === 'Phase 1 Active'
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                          : pillar.status === 'In Development'
                          ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                          : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                      }`}>
                        {pillar.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description with balanced vertical heights */}
                  <div className="space-y-1.5">
                    <div className="min-h-[44px] flex items-center">
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[40px]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex-1">
                    <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {pillar.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expected Benefit Pinned at Bottom with identical height */}
                <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-[11px] text-blue-950 dark:text-blue-200 leading-relaxed min-h-[68px] flex items-center">
                    <div>
                      <strong>Expected Benefit:</strong> {pillar.expectedBenefit}
                    </div>
                  </div>
                  {pillar.id === 5 && (
                    <div className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-center gap-1.5 text-center">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>Next Phase: Expanding to All Degree Programs</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. IMPLEMENTATION ROADMAP (PHASES 1 - 4) */}
      <section className="space-y-6 pt-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">
            <Compass className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Phased Execution Plan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Implementation Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Features are systematically rolled out in four structured phases to maintain the highest standards of security, stability, and student trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {phases.map((ph, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {ph.phase}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                    ph.statusColor === 'emerald'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                      : ph.statusColor === 'blue'
                      ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                      : ph.statusColor === 'amber'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                      : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                  }`}>
                    {ph.status}
                  </span>
                </div>

                <div className="min-h-[44px] flex items-center">
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                    {ph.title}
                  </h3>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600 dark:text-slate-300 flex-1">
                  {ph.items.map((it, itIdx) => (
                    <li key={itIdx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                <span>Phase {idx + 1} Milestone</span>
                <span className="font-mono text-[10px] text-blue-500 font-bold">2025–2026</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONCLUSION & VISION BANNER */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-8 sm:p-12 text-white shadow-xl space-y-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          One Platform, Endless Opportunities, Brighter Futures
        </h2>
        <p className="text-xs sm:text-sm max-w-2xl mx-auto opacity-95 leading-relaxed">
          Success will not be measured only by the number of registered users, but also by the value students receive, the skills they develop, the opportunities they discover, and the trust they place in the platform.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/assistant"
            className="px-6 py-2.5 rounded-xl bg-white text-blue-700 font-extrabold text-xs shadow-md hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <Bot className="w-4 h-4 text-blue-600" />
            <span>Try Connect AI Copilot Now</span>
          </Link>
          <Link
            href="/colleges"
            className="px-6 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-extrabold text-xs border border-white/20 transition-colors flex items-center gap-1.5"
          >
            <span>Explore 240+ Colleges</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
