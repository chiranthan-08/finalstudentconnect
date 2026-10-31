'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';
import { INITIAL_USERS } from '@/data/mockData';
import { 
  GraduationCap, 
  ShieldCheck, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  ArrowRight,
  UserCheck,
  Building2,
  Briefcase,
  Trophy,
  Zap,
  Eye,
  EyeOff,
  User,
  KeyRound,
  FileCheck,
  Check,
  School,
  BookOpen,
  X,
  RefreshCw,
  Copy
} from 'lucide-react';

interface RoleConfig {
  role: UserRole;
  title: string;
  badge: string;
  color: string;
  activeBg: string;
  borderColor: string;
  icon: React.ElementType;
  description: string;
  capabilities: string[];
  demoUser: {
    name: string;
    email: string;
    password: string;
    institution: string;
    designationOrBio: string;
  };
}

const ROLES_CONFIG: RoleConfig[] = [
  {
    role: 'student',
    title: 'Student',
    badge: 'Undergraduate / VTU',
    color: 'text-blue-600 dark:text-blue-400',
    activeBg: 'bg-blue-50 dark:bg-blue-950/60',
    borderColor: 'border-blue-500',
    icon: GraduationCap,
    description: 'Engineering students in Karnataka exploring colleges, calculating SGPA, and connecting with peers.',
    capabilities: [
      'KCET & COMEDK AI Rank Predictor with category odds',
      'VTU SGPA, CGPA & 75% Attendance bunk forecaster',
      'Instant access to 3 free certified starter courses',
      'Join real-time Discord-style virtual study rooms',
      'Book 1-on-1 tutoring sessions with senior mentors'
    ],
    demoUser: {
      name: 'Prajwal Kulkarni',
      email: 'student@rvce.edu.in',
      password: 'Student@123',
      institution: 'R.V. College of Engineering (RVCE)',
      designationOrBio: '3rd Year Computer Science • USN: 1RV22CS104'
    }
  },
  {
    role: 'mentor',
    title: 'Mentor / Tutor',
    badge: 'Escrow Peer Tutoring',
    color: 'text-emerald-600 dark:text-emerald-400',
    activeBg: 'bg-emerald-50 dark:bg-emerald-950/60',
    borderColor: 'border-emerald-500',
    icon: UserCheck,
    description: 'High-performing senior students & toppers earning money by teaching junior peers safely.',
    capabilities: [
      'Earn ₹300 – ₹1,200/hr via secure payment escrow lock',
      'Interactive collaborative whiteboard & live coding room',
      'TAM/TPO recognized peer mentorship certification',
      'Publish verified VTU handwritten notes & solutions'
    ],
    demoUser: {
      name: 'Ananya Sharma',
      email: 'mentor@bmsce.ac.in',
      password: 'Mentor@123',
      institution: 'BMS College of Engineering (BMSCE)',
      designationOrBio: '4th Year ISE • Placed @ Cisco (₹24 LPA)'
    }
  },
  {
    role: 'college_rep',
    title: 'College Rep',
    badge: 'Official Institution',
    color: 'text-purple-600 dark:text-purple-400',
    activeBg: 'bg-purple-50 dark:bg-purple-950/60',
    borderColor: 'border-purple-500',
    icon: Building2,
    description: 'Admissions deans, HODs, and TPO coordinators representing Karnataka engineering colleges.',
    capabilities: [
      'Publish verified previous year KCET & COMEDK cutoffs',
      'Manage official college profile, fees, & NIRF rank data',
      'Broadcast departmental campus drives and placements',
      'Direct recruitment pipeline with verified students'
    ],
    demoUser: {
      name: 'Dr. Suresh N. Rao',
      email: 'admissions@msrit.edu',
      password: 'College@123',
      institution: 'Ramaiah Institute of Technology (MSRIT)',
      designationOrBio: 'Dean of Admissions & Institutional Relations'
    }
  },
  {
    role: 'recruiter',
    title: 'HR / Recruiter',
    badge: 'Bangalore Tech Talent',
    color: 'text-amber-600 dark:text-amber-400',
    activeBg: 'bg-amber-50 dark:bg-amber-950/60',
    borderColor: 'border-amber-500',
    icon: Briefcase,
    description: 'Corporate recruiters & tech startups hiring top engineering talent from 240+ campuses.',
    capabilities: [
      'Post verified paid internships & fresher job openings',
      'AI-powered ATS screening matching Karnataka candidates',
      'Filter candidates by verified VTU CGPA & technical skills',
      'Schedule 1-on-1 direct video interviews through rooms'
    ],
    demoUser: {
      name: 'Vikram Hegde',
      email: 'hr@techrecruiting.com',
      password: 'Recruiter@123',
      institution: 'CloudScale Tech Bangalore',
      designationOrBio: 'Lead University Talent Acquisition Specialist'
    }
  },
  {
    role: 'event_organizer',
    title: 'Event Organizer',
    badge: 'Hackathons & Fests',
    color: 'text-rose-600 dark:text-rose-400',
    activeBg: 'bg-rose-50 dark:bg-rose-950/60',
    borderColor: 'border-rose-500',
    icon: Trophy,
    description: 'GDSC leads, IEEE student chairs, and technical club heads hosting state-wide events.',
    capabilities: [
      'Host inter-college hackathons with escrow prize pool',
      'Manage team registrations and cross-college matching',
      'Issue automated verifiable digital certificates',
      'Student Connect Hackathon 2025 host rights'
    ],
    demoUser: {
      name: 'Rohan Deshmukh',
      email: 'organizer@studentconnect.edu',
      password: 'Organizer@123',
      institution: 'Karnataka Student Tech Guild / GDSC',
      designationOrBio: 'President & Lead Hackathon Coordinator'
    }
  },
  {
    role: 'admin',
    title: 'Admin',
    badge: 'State Platform Moderator',
    color: 'text-indigo-600 dark:text-indigo-400',
    activeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    borderColor: 'border-indigo-500',
    icon: ShieldCheck,
    description: 'Designated Platform Administrators overseeing college datasets, cutoff verifications, and disputes.',
    capabilities: [
      'Verify institutional badges and college representative IDs',
      'Resolve escrow tutoring disputes and guarantee student refunds',
      'Moderate community discussions and academic broadcasts',
      'Manage statewide college database and placement updates'
    ],
    demoUser: {
      name: 'Platform Administrator',
      email: 'admin@studentconnect.edu',
      password: 'StudentConnect#Admin2025!',
      institution: 'Karnataka Engineering Central Administration',
      designationOrBio: 'Lead Governance & Security Administrator'
    }
  },
  {
    role: 'super_admin',
    title: 'Super Admin',
    badge: 'Root Ecosystem Clearance',
    color: 'text-red-600 dark:text-red-400',
    activeBg: 'bg-red-50 dark:bg-red-950/60',
    borderColor: 'border-red-500',
    icon: Zap,
    description: 'Higher Education Technical Cell executive governance with complete root platform authorization.',
    capabilities: [
      'Full root administrative access across all modules',
      'Real-time ecosystem database management & audit logs',
      'Manage platform transaction fees and escrow payouts',
      'Global security and Role-Based Access Control settings'
    ],
    demoUser: {
      name: 'Super Admin Authority',
      email: 'superadmin@studentconnect.edu',
      password: 'SuperAdmin#Karnataka2025!',
      institution: 'Higher Education Technical Cell, Karnataka',
      designationOrBio: 'Executive Director & Chief Platform Authority'
    }
  }
];

const KARNATAKA_COLLEGES = [
  'R.V. College of Engineering (RVCE), Bengaluru',
  'B.M.S. College of Engineering (BMSCE), Bengaluru',
  'Ramaiah Institute of Technology (MSRIT), Bengaluru',
  'PES University, Ring Road Campus, Bengaluru',
  'University Visvesvaraya College of Engineering (UVCE)',
  'Bangalore Institute of Technology (BIT), Bengaluru',
  'The National Institute of Engineering (NIE), Mysuru',
  'Sri Jayachamarajendra College of Engineering (SJCE), JSS STU',
  'Dayananda Sagar College of Engineering (DSCE), Bengaluru',
  'Siddaganga Institute of Technology (SIT), Tumakuru',
  'Other Karnataka Engineering College'
];

const ENGINEERING_BRANCHES = [
  'Computer Science & Engineering (CSE)',
  'Information Science & Engineering (ISE)',
  'Artificial Intelligence & Machine Learning (AIML)',
  'Electronics & Communication Engineering (ECE)',
  'Data Science & Cybersecurity',
  'Mechanical Engineering',
  'Electrical & Electronics Engineering (EEE)',
  'Biotechnology Engineering',
  'Civil Engineering'
];

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, register, user, switchRoleDemo } = useAuth();

  // Mode: 'login' | 'register'
  const initialTab = searchParams.get('tab') === 'register' ? 'register' : 'login';
  const initialRoleParam = searchParams.get('role') as UserRole | null;
  
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(initialTab);
  const [selectedRole, setSelectedRole] = useState<UserRole>(
    initialRoleParam && ROLES_CONFIG.some(r => r.role === initialRoleParam)
      ? initialRoleParam
      : (user?.role || 'student')
  );

  // Form states - Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successToast, setSuccessToast] = useState('');

  // Security & Verification States
  const [otpTimer, setOtpTimer] = useState(60);
  const [simulatedNotification, setSimulatedNotification] = useState<string | null>(null);
  const [copiedOtp, setCopiedOtp] = useState(false);
  const [emailDeliveryInfo, setEmailDeliveryInfo] = useState<{
    sending: boolean;
    delivered: 'REAL_EMAIL' | 'LOCAL_CODE' | 'IDLE';
    message: string;
  }>({
    sending: false,
    delivered: 'IDLE',
    message: ''
  });

  // Standard Registration Email OTP Modal State
  const [showRegisterVerifyModal, setShowRegisterVerifyModal] = useState(false);
  const [regOtp, setRegOtp] = useState('');
  const [expectedRegOtp, setExpectedRegOtp] = useState('');
  const [regOtpError, setRegOtpError] = useState('');
  const [pendingRegisterData, setPendingRegisterData] = useState<any | null>(null);

  // Helper to trigger backend email dispatch
  const dispatchVerificationEmail = async (email: string, code: string, _type?: string, name?: string) => {
    setEmailDeliveryInfo({
      sending: true,
      delivered: 'IDLE',
      message: 'Validating email & contacting verification service...'
    });
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          type: 'email_registration',
          name
        })
      });
      const data = await res.json();
      if (data.success) {
        setExpectedRegOtp(data.cleanOtp || code);
        setSimulatedNotification(`Student Connect Karnataka: Verification code ${data.code} dispatched for ${email}`);

        setEmailDeliveryInfo({
          sending: false,
          delivered: data.emailSent ? 'REAL_EMAIL' : 'LOCAL_CODE',
          message: data.message
        });
      } else {
        setRegOtpError(data.message);
        setEmailDeliveryInfo({
          sending: false,
          delivered: 'LOCAL_CODE',
          message: data.message || 'Error dispatching verification code'
        });
      }
    } catch {
      setEmailDeliveryInfo({
        sending: false,
        delivered: 'LOCAL_CODE',
        message: `Local Mode: Verification code generated on screen.`
      });
    }
  };

  // Countdown timer for OTP expiry
  useEffect(() => {
    let interval: any;
    if (showRegisterVerifyModal) {
      if (otpTimer > 0) {
        interval = setInterval(() => {
          setOtpTimer(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
      }
    }
    return () => clearInterval(interval);
  }, [showRegisterVerifyModal, otpTimer]);

  // Form states - Register
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  
  // Role-specific Register fields
  const [regCollege, setRegCollege] = useState(KARNATAKA_COLLEGES[0]);
  const [regBranch, setRegBranch] = useState(ENGINEERING_BRANCHES[0]);
  const [regYear, setRegYear] = useState('3rd Year (6th Sem)');
  const [regUsn, setRegUsn] = useState('');
  
  // Mentor fields
  const [regMentorSubjects, setRegMentorSubjects] = useState('Data Structures, VTU Math 18MAT21, Java');
  const [regMentorRate, setRegMentorRate] = useState('350');
  const [regMentorCgpa, setRegMentorCgpa] = useState('9.1');

  // College Rep fields
  const [regRepDesignation, setRegRepDesignation] = useState('Dean of Admissions');
  const [regRepDepartment, setRegRepDepartment] = useState('Admissions & Academic Affairs');

  // Recruiter fields
  const [regCompanyName, setRegCompanyName] = useState('CloudScale Tech Bangalore');
  const [regRecruiterDesignation, setRegRecruiterDesignation] = useState('University Talent Lead');

  // Organizer fields
  const [regClubName, setRegClubName] = useState('GDSC & Tech Guild');
  const [regEventTitle, setRegEventTitle] = useState('Student Connect Hackathon 2025');

  // Admin clearance code
  const [regAdminCode, setRegAdminCode] = useState('');

  const currentRoleConfig = ROLES_CONFIG.find(r => r.role === selectedRole) || ROLES_CONFIG[0];

  // Auto populate login fields when role is selected in login mode for convenience
  useEffect(() => {
    if (activeTab === 'login') {
      setLoginEmail(currentRoleConfig.demoUser.email);
      // Security Policy: Never auto-fill passwords for Administrator accounts
      if (selectedRole === 'admin' || selectedRole === 'super_admin') {
        setLoginPassword('');
      } else {
        setLoginPassword(currentRoleConfig.demoUser.password);
      }
      setErrorMessage('');
    }
  }, [selectedRole, activeTab]);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setErrorMessage('');
  };

  const redirectAfterAuth = (role: UserRole) => {
    if (role === 'admin' || role === 'super_admin') {
      router.push('/admin');
    } else if (role === 'mentor') {
      router.push('/mentors');
    } else if (role === 'recruiter') {
      router.push('/internships');
    } else if (role === 'event_organizer') {
      router.push('/events');
    } else if (role === 'college_rep') {
      router.push('/colleges');
    } else {
      router.push('/community');
    }
  };

  // 1-Click Fast Persona Switch & Sign-In (Strictly restricted to non-admin roles)
  const handleQuickPersonaLogin = (roleConfig: RoleConfig) => {
    if (roleConfig.role === 'admin' || roleConfig.role === 'super_admin') {
      setErrorMessage('Access Denied: Administrator accounts require entering authorized credentials. 1-Click bypass is disabled for security.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    try {
      switchRoleDemo(roleConfig.role);
      setSuccessToast(`Logged in successfully as ${roleConfig.demoUser.name} (${roleConfig.title})!`);
      setTimeout(() => {
        redirectAfterAuth(roleConfig.role);
      }, 700);
    } catch {
      setErrorMessage('Failed to authenticate persona.');
      setLoading(false);
    }
  };

  // Standard Login Submit
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await login(loginEmail, loginPassword, selectedRole);
      if (res.success) {
        setSuccessToast(`Signed in successfully as ${selectedRole.replace('_', ' ').toUpperCase()}!`);
        setTimeout(() => {
          redirectAfterAuth(selectedRole);
        }, 700);
      } else {
        setErrorMessage(res.message || 'Login failed. Please check credentials or use the 1-Click login below.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };


  // Register Submit -> Trigger Verification Modal
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!regName.trim() || !regEmail.trim() || !regPassword) {
      setErrorMessage('Please fill in all mandatory account fields.');
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    if (regPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    // Role specific validation: Public registration disallowed for admin roles
    if (selectedRole === 'admin' || selectedRole === 'super_admin') {
      setErrorMessage('Access Denied: Administrative accounts cannot be registered through the public portal. Please switch to the Sign In tab and authenticate using your designated administrator credentials.');
      return;
    }

    let roleBio = `${currentRoleConfig.title} on Student Connect Karnataka`;
    let collegeName = regCollege;
    let skills = ['Karnataka Academic Ecosystem'];

    if (selectedRole === 'student') {
      roleBio = `${regYear} in ${regBranch} at ${regCollege}`;
      skills = ['Engineering Student', regBranch.split(' ')[0]];
    } else if (selectedRole === 'mentor') {
      roleBio = `Escrow Peer Tutor • Subjects: ${regMentorSubjects} • CGPA: ${regMentorCgpa}`;
      skills = regMentorSubjects.split(',').map(s => s.trim());
    } else if (selectedRole === 'college_rep') {
      roleBio = `${regRepDesignation} at ${regCollege}`;
      skills = ['Institutional Representative', 'Admissions', 'Placement'];
    } else if (selectedRole === 'recruiter') {
      roleBio = `${regRecruiterDesignation} @ ${regCompanyName}`;
      collegeName = regCompanyName;
      skills = ['Talent Acquisition', 'Campus Hiring', 'Bangalore Tech'];
    } else if (selectedRole === 'event_organizer') {
      roleBio = `Organizer @ ${regClubName} • Hosting ${regEventTitle}`;
      skills = ['Hackathons', 'Tech Events', 'Student Guild'];
    }

    const payload = {
      name: regName,
      email: regEmail,
      role: selectedRole,
      password: regPassword,
      college: collegeName,
      branch: selectedRole === 'student' ? regBranch : undefined,
      year: selectedRole === 'student' ? regYear : undefined,
      usn: selectedRole === 'student' ? regUsn : undefined,
      bio: roleBio,
      skills,
      hourlyRate: selectedRole === 'mentor' ? parseInt(regMentorRate) || 300 : undefined,
      designation: selectedRole === 'college_rep' ? regRepDesignation : selectedRole === 'recruiter' ? regRecruiterDesignation : undefined,
      organization: selectedRole === 'recruiter' ? regCompanyName : selectedRole === 'event_organizer' ? regClubName : undefined
    };

    // Trigger Email Verification Code step
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setPendingRegisterData(payload);
    setExpectedRegOtp(code);
    setRegOtp('');
    setRegOtpError('');
    setOtpTimer(60);
    setShowRegisterVerifyModal(true);

    // Trigger backend email dispatch (supports real Gmail/SMTP if configured)
    dispatchVerificationEmail(regEmail, code, 'register', regName);

    setSimulatedNotification(`Student Connect Karnataka: Verification code SC-${code} dispatched for ${regEmail}`);
    setTimeout(() => {
      setSimulatedNotification(null);
    }, 45000);
  };

  // 1-Click Auto-Fill & Immediate Account Activation
  const handleAutoFillAndVerifyRegister = async () => {
    if (!expectedRegOtp || !pendingRegisterData) return;
    setRegOtp(expectedRegOtp);
    setRegOtpError('');
    setLoading(true);
    try {
      // 1. Verify with backend OTP API
      const verifyRes = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: pendingRegisterData.email,
          otp: expectedRegOtp,
          type: 'email_registration',
          name: pendingRegisterData.name,
          role: pendingRegisterData.role,
          college: pendingRegisterData.college,
          branch: pendingRegisterData.branch,
          year: pendingRegisterData.year,
          usn: pendingRegisterData.usn
        })
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setRegOtpError(verifyData.message || 'Verification failed.');
        setLoading(false);
        return;
      }

      // 2. Activate user
      const success = await register(pendingRegisterData);
      if (success) {
        setShowRegisterVerifyModal(false);
        setSuccessToast(`Email Verified! Welcome to Student Connect, ${pendingRegisterData.name}!`);
        setTimeout(() => {
          redirectAfterAuth(pendingRegisterData.role);
        }, 700);
      } else {
        setRegOtpError('Registration could not be completed.');
      }
    } catch {
      setRegOtpError('An error occurred during account verification.');
    } finally {
      setLoading(false);
    }
  };

  // Complete Registration with OTP Verification
  const handleVerifyRegisterOtp = async () => {
    setRegOtpError('');
    if (!regOtp.trim()) {
      setRegOtpError('Please enter the 6-digit verification code.');
      return;
    }

    if (!pendingRegisterData) return;

    setLoading(true);
    try {
      // 1. Verify with backend OTP API
      const verifyRes = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: pendingRegisterData.email,
          otp: regOtp,
          type: 'email_registration',
          name: pendingRegisterData.name,
          role: pendingRegisterData.role,
          college: pendingRegisterData.college,
          branch: pendingRegisterData.branch,
          year: pendingRegisterData.year,
          usn: pendingRegisterData.usn
        })
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        setRegOtpError(verifyData.message || 'Incorrect verification code.');
        setLoading(false);
        return;
      }

      // 2. Activate user
      const success = await register(pendingRegisterData);
      if (success) {
        setShowRegisterVerifyModal(false);
        setSuccessToast(`Email Verified! Welcome to Student Connect, ${pendingRegisterData.name}!`);
        setTimeout(() => {
          redirectAfterAuth(pendingRegisterData.role);
        }, 700);
      } else {
        setRegOtpError('Registration could not be completed.');
      }
    } catch {
      setRegOtpError('An error occurred during account verification.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendRegisterOtp = () => {
    if (!pendingRegisterData) return;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setExpectedRegOtp(code);
    setRegOtp('');
    setRegOtpError('');
    setOtpTimer(60);
    dispatchVerificationEmail(pendingRegisterData.email, code, 'register', pendingRegisterData.name);
    setSimulatedNotification(`New Verification Code: SC-${code} dispatched for ${pendingRegisterData.email}`);
    setTimeout(() => {
      setSimulatedNotification(null);
    }, 45000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Toast Alert */}
        {successToast && (
          <div className="fixed top-20 right-4 z-50 p-4 rounded-2xl bg-emerald-600 text-white shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-xs sm:text-sm font-bold">{successToast}</span>
          </div>
        )}

        {/* Floating Inbound Security Notification (High Z-Index so it stays on top) */}
        {simulatedNotification && (
          <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[70] w-full max-w-lg p-4 mx-4 rounded-2xl bg-slate-900/95 dark:bg-slate-950/95 text-white shadow-2xl border-2 border-blue-500/80 backdrop-blur-xl animate-in slide-in-from-top-4 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/30 text-blue-400 shrink-0">
              <Mail className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {emailDeliveryInfo.delivered === 'REAL_EMAIL' ? 'Official Verification Email Dispatched' : 'Security Verification Code Generated'}
                </span>
                <button
                  type="button"
                  onClick={() => setSimulatedNotification(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                  aria-label="Dismiss notification"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-200 mt-1 font-mono break-all font-bold">{simulatedNotification}</p>
              
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const matchSC = simulatedNotification.match(/SC-(\d{6})/);
                    if (matchSC) {
                      setRegOtp(matchSC[1]);
                      setRegOtpError('');
                      handleAutoFillAndVerifyRegister();
                    }
                  }}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>⚡ 1-Click Auto-Fill & Verify</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const match = simulatedNotification.match(/(SC-)?(\d{6})/);
                    if (match) {
                      navigator.clipboard.writeText(match[2]);
                      setCopiedOtp(true);
                      setTimeout(() => setCopiedOtp(false), 2000);
                    }
                  }}
                  className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedOtp ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <span className="text-[11px] text-slate-400">Valid for {otpTimer}s</span>
              </div>
            </div>
          </div>
        )}

        {/* 1. PORTAL HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Role-Based Access Control (RBAC) System</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] text-slate-500 font-mono">Karnataka Ecosystem</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Student Connect Access Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Sign in or create a role-tailored account to access engineering cutoffs, escrow peer tutoring, institutional tools, and Bangalore tech placements.
          </p>

          {/* Mode Segmented Controls: Sign In vs Create Account */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 shadow-inner mt-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setErrorMessage('');
              }}
              className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'login'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Sign In (7 Roles)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('register');
                setErrorMessage('');
              }}
              className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'register'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-md scale-[1.02]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Register / Create Account
            </button>
          </div>
        </div>

        {/* 2. THE 7 ROLES SEGMENTED SELECTOR */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {activeTab === 'login' ? 'Step 1: Choose Your Active Role Persona' : 'Step 1: Select Your Registration Category'}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                7 Roles Available
              </span>
            </div>
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              Click any role to load tailored permissions & credentials
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ROLES_CONFIG.map((rc) => {
              const Icon = rc.icon;
              const isSelected = selectedRole === rc.role;
              return (
                <button
                  key={rc.role}
                  type="button"
                  onClick={() => handleRoleSelect(rc.role)}
                  className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? `${rc.borderColor} ${rc.activeBg} ring-2 ring-blue-500/30 shadow-md scale-[1.02]`
                      : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-1.5 rounded-xl ${isSelected ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-slate-100 dark:bg-slate-800'} ${rc.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      )}
                    </div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white line-clamp-1">
                      {rc.title}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block line-clamp-1">
                      {rc.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. ACTIVE ROLE SUMMARY CALLOUT */}
        <div className={`p-4 sm:p-5 rounded-3xl border ${currentRoleConfig.borderColor} ${currentRoleConfig.activeBg} backdrop-blur-md space-y-3 transition-all`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-2xl bg-white dark:bg-slate-900 shadow-md ${currentRoleConfig.color}`}>
                <currentRoleConfig.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                    {currentRoleConfig.title} Category
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                    {currentRoleConfig.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {currentRoleConfig.description}
                </p>
              </div>
            </div>

            {/* 1-Click Fast Instant Login Button (Restricted to non-admin roles) */}
            {(currentRoleConfig.role === 'admin' || currentRoleConfig.role === 'super_admin') ? (
              <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-semibold text-xs">
                <Lock className="w-4 h-4 shrink-0 text-amber-500" />
                <span>Restricted: Manual Credentials Required</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => handleQuickPersonaLogin(currentRoleConfig)}
                disabled={loading}
                className="shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>1-Click Test as {currentRoleConfig.demoUser.name}</span>
              </button>
            )}
          </div>

          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Verified Capabilities Granted for {currentRoleConfig.title}:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {currentRoleConfig.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. MAIN FORM CARD */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          {/* Error notification */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* TAB 1: SIGN IN MODE */}
          {activeTab === 'login' && (
            <div className="space-y-6">
              

              {/* Persona Credentials Auto-Fill Banner */}
              {(currentRoleConfig.role === 'admin' || currentRoleConfig.role === 'super_admin') ? (
                <div className="p-3.5 rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/60 dark:bg-red-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">
                        Authorized Administrator Clearance Required
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Admin Email: <strong className="font-mono text-indigo-600 dark:text-indigo-400">{currentRoleConfig.demoUser.email}</strong> • Enter your designated admin password below
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold uppercase shrink-0">
                    Protected Role
                  </span>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      Official Persona: <span className="text-blue-600 dark:text-blue-400 font-bold">{currentRoleConfig.demoUser.name}</span> ({currentRoleConfig.demoUser.institution})
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      Email: <strong>{currentRoleConfig.demoUser.email}</strong> • Pass: <strong>{currentRoleConfig.demoUser.password}</strong>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail(currentRoleConfig.demoUser.email);
                      setLoginPassword(currentRoleConfig.demoUser.password);
                    }}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                  >
                    Auto-Fill
                  </button>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {currentRoleConfig.title} Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder={currentRoleConfig.demoUser.email}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <span 
                      onClick={() => alert(`Demo password for ${currentRoleConfig.title}: ${currentRoleConfig.demoUser.password}`)}
                      className="text-[11px] text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                    >
                      Forgot Password?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Authenticating...' : `Sign In as ${currentRoleConfig.title}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Persona Launchpad */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1-Click Instant Login as Any Verified Persona:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {ROLES_CONFIG.map((rc) => {
                    const SIcon = rc.icon;
                    return (
                      <button
                        key={rc.role}
                        type="button"
                        onClick={() => handleQuickPersonaLogin(rc)}
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 text-left transition-all"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800 dark:text-slate-200 truncate">
                          <SIcon className={`w-3.5 h-3.5 ${rc.color} shrink-0`} />
                          <span className="truncate">{rc.title}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 truncate mt-0.5">{rc.demoUser.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: REGISTER / CREATE ACCOUNT MODE */}
          {activeTab === 'register' && (
            (selectedRole === 'admin' || selectedRole === 'super_admin') ? (
              <div className="p-8 text-center space-y-5 max-w-md mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center shadow-md">
                  <Lock className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Administrator Registration Restricted
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Administrator and Super Admin accounts cannot be created via public registration. Platform governance provisions administrative credentials directly to authorized state officers.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('login');
                      setErrorMessage('');
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Switch to Sign In with Official Admin Credentials
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                    Register as a Verified {currentRoleConfig.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Create your official Student Connect Karnataka profile
                  </p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  Role: {currentRoleConfig.title}
                </span>
              </div>


              {/* Basic Account Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="e.g. Prajwal Kulkarni"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="e.g. student@rvce.edu.in"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Create Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      placeholder="Min 6 characters"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* DYNAMIC ROLE-SPECIFIC ONBOARDING FIELDS */}
              <div className="p-4 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 space-y-4">
                <div className="text-xs font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>Step 2: Role Profile Specifics for {currentRoleConfig.title}</span>
                </div>

                {/* 1. STUDENT SPECIFICS */}
                {selectedRole === 'student' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Select Karnataka Engineering College *
                      </label>
                      <select
                        value={regCollege}
                        onChange={(e) => setRegCollege(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        {KARNATAKA_COLLEGES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Engineering Branch / Department *
                      </label>
                      <select
                        value={regBranch}
                        onChange={(e) => setRegBranch(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        {ENGINEERING_BRANCHES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Academic Year & Semester *
                      </label>
                      <select
                        value={regYear}
                        onChange={(e) => setRegYear(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        <option>1st Year (1st & 2nd Sem)</option>
                        <option>2nd Year (3rd & 4th Sem)</option>
                        <option>3rd Year (5th & 6th Sem)</option>
                        <option>4th Year (7th & 8th Sem)</option>
                        <option>Alumni / Graduate</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        University Seat Number (USN)
                      </label>
                      <input
                        type="text"
                        value={regUsn}
                        onChange={(e) => setRegUsn(e.target.value)}
                        placeholder="e.g. 1RV22CS104"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                      </input>
                    </div>
                  </div>
                )}

                {/* 2. MENTOR / TUTOR SPECIFICS */}
                {selectedRole === 'mentor' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Teaching Subjects / Expertise *
                      </label>
                      <input
                        type="text"
                        value={regMentorSubjects}
                        onChange={(e) => setRegMentorSubjects(e.target.value)}
                        placeholder="e.g. Data Structures, VTU Math, Python, System Design"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Hourly Tutoring Rate (₹/hr) *
                      </label>
                      <input
                        type="number"
                        value={regMentorRate}
                        onChange={(e) => setRegMentorRate(e.target.value)}
                        placeholder="350"
                        min="150"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Academic CGPA / VTU Percentage *
                      </label>
                      <input
                        type="text"
                        value={regMentorCgpa}
                        onChange={(e) => setRegMentorCgpa(e.target.value)}
                        placeholder="e.g. 9.1 CGPA"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Alma Mater / Engineering College *
                      </label>
                      <input
                        type="text"
                        value={regCollege}
                        onChange={(e) => setRegCollege(e.target.value)}
                        placeholder="e.g. BMSCE, RVCE, MSRIT"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* 3. COLLEGE REP SPECIFICS */}
                {selectedRole === 'college_rep' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Official College / University Name *
                      </label>
                      <select
                        value={regCollege}
                        onChange={(e) => setRegCollege(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        {KARNATAKA_COLLEGES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Institutional Designation *
                      </label>
                      <input
                        type="text"
                        value={regRepDesignation}
                        onChange={(e) => setRegRepDesignation(e.target.value)}
                        placeholder="e.g. Dean of Admissions, HOD, Placement Director"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Administrative Department *
                      </label>
                      <input
                        type="text"
                        value={regRepDepartment}
                        onChange={(e) => setRegRepDepartment(e.target.value)}
                        placeholder="e.g. Admissions & Academic Directorate"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* 4. HR / RECRUITER SPECIFICS */}
                {selectedRole === 'recruiter' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Hiring Company / Tech Startup Name *
                      </label>
                      <input
                        type="text"
                        value={regCompanyName}
                        onChange={(e) => setRegCompanyName(e.target.value)}
                        placeholder="e.g. CloudScale Tech Bangalore"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Talent Acquisition Designation *
                      </label>
                      <input
                        type="text"
                        value={regRecruiterDesignation}
                        onChange={(e) => setRegRecruiterDesignation(e.target.value)}
                        placeholder="e.g. Lead Campus Recruiter, Technical Sourcing Partner"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

                {/* 5. EVENT ORGANIZER SPECIFICS */}
                {selectedRole === 'event_organizer' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Organizing Student Club / Society *
                      </label>
                      <input
                        type="text"
                        value={regClubName}
                        onChange={(e) => setRegClubName(e.target.value)}
                        placeholder="e.g. GDSC, IEEE Student Branch, ACM"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Featured Event or Hackathon Name *
                      </label>
                      <input
                        type="text"
                        value={regEventTitle}
                        onChange={(e) => setRegEventTitle(e.target.value)}
                        placeholder="e.g. Student Connect Hackathon 2025"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                )}

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>{loading ? 'Creating Verified Account...' : `Register as Verified ${currentRoleConfig.title}`}</span>
                <Check className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-500">
                By registering, you agree to Student Connect’s Karnataka Academic Guidelines and Community Code of Conduct.
              </p>
            </form>
          ))}

        </div>

        {/* 5. FOOTER ASSURANCE */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>256-bit Encrypted Session</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Karnataka Engineering RBAC Verified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <School className="w-4 h-4 text-purple-500" />
            <span>KEA / VTU Academic Aligned</span>
          </div>
        </div>


        {/* ========================================================= */}
        {/* REGISTRATION EMAIL VERIFICATION MODAL                     */}
        {/* ========================================================= */}
        {showRegisterVerifyModal && pendingRegisterData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 p-6 space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white">Verify Your Email Address</span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRegisterVerifyModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Enter Verification Code
                </h3>
                <p className="text-xs text-slate-500">
                  We sent a 6-digit confirmation code to activate your <strong className="text-blue-600 dark:text-blue-400 capitalize">{pendingRegisterData.role.replace('_', ' ')}</strong> account.
                </p>
                <div className="inline-block mt-1 font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  {pendingRegisterData.email}
                </div>
              </div>

              {regOtpError && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{regOtpError}</span>
                </div>
              )}

              {/* UNMISSABLE OFFICIAL REGISTRATION CODE HERO CARD */}
              {expectedRegOtp && (
                <div className="rounded-2xl border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50/20 dark:from-blue-950/60 dark:via-indigo-950/40 dark:to-slate-900 p-4 shadow-xl shadow-blue-500/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-blue-200/60 dark:border-blue-800/60">
                    <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Registration Activation Code</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      emailDeliveryInfo.delivered === 'REAL_EMAIL'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300'
                    }`}>
                      {emailDeliveryInfo.delivered === 'REAL_EMAIL' ? 'Sent to Inbox' : 'Instant Display'}
                    </span>
                  </div>

                  {/* Giant Monospace Code Display */}
                  <div className="text-center py-1">
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                      Activation code for: <strong className="text-slate-900 dark:text-white font-mono">{pendingRegisterData.email}</strong>
                    </div>
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-400 dark:border-blue-500 shadow-md">
                      <span className="font-mono text-2xl sm:text-3xl font-black tracking-[0.25em] text-blue-600 dark:text-blue-400 select-all">
                        SC-{expectedRegOtp}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(expectedRegOtp);
                          setCopiedOtp(true);
                          setTimeout(() => setCopiedOtp(false), 2000);
                        }}
                        title="Copy code"
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1 text-[11px] font-bold"
                      >
                        {copiedOtp ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* 1-Click Fast Activate Button */}
                  <button
                    type="button"
                    onClick={handleAutoFillAndVerifyRegister}
                    disabled={loading}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-extrabold shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all disabled:opacity-50"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>{loading ? 'Activating...' : '⚡ 1-Click Auto-Fill & Activate Immediately'}</span>
                  </button>

                  {/* Explanation regarding Email vs Local Mode */}
                  <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-blue-200/60 dark:border-blue-800/60 text-[11px] text-slate-600 dark:text-slate-300">
                    {emailDeliveryInfo.delivered === 'REAL_EMAIL' ? (
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Verification email dispatched to your inbox: <strong>{pendingRegisterData.email}</strong>!</span>
                      </p>
                    ) : (
                      <div className="flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800 dark:text-white">Why is the code displayed here?</strong>
                          <p className="mt-0.5 text-slate-500 dark:text-slate-400">
                            In local development without external SMTP credentials, your code is <strong>generated right above on this card</strong> for instant account activation without waiting. (To enable real email dispatch to your Gmail inbox, add <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">GMAIL_APP_PASSWORD</code> in <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[10px]">.env.local</code>).
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Manual Code Input fallback */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">
                  Or manually type the 6-digit code:
                </label>
                <div className="relative max-w-xs mx-auto">
                  <div className="absolute left-3.5 top-2.5 text-xs font-mono font-bold text-slate-400">
                    SC-
                  </div>
                  <input
                    type="text"
                    maxLength={6}
                    value={regOtp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                      setRegOtp(val);
                      setRegOtpError('');
                    }}
                    placeholder="••••••"
                    className="w-full pl-10 pr-3 py-2 text-center font-mono text-lg tracking-[0.35em] font-extrabold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-inner"
                  />
                </div>
              </div>

              {/* Timer / Resend */}
              <div className="text-center text-xs">
                {otpTimer > 0 ? (
                  <span className="text-slate-500">
                    Resend code in <strong className="font-mono text-blue-600">{otpTimer}s</strong>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendRegisterOtp}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Resend Verification Code</span>
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowRegisterVerifyModal(false)}
                  className="w-1/3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleVerifyRegisterOtp}
                  disabled={loading || regOtp.length !== 6}
                  className="w-2/3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Activating...' : 'Verify & Activate Account'}</span>
                  <Check className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-500">Loading Access Portal...</p>
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
}
