'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  GraduationCap, 
  DollarSign, 
  AlertTriangle, 
  Database, 
  Megaphone, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Trash2, 
  Search,
  Building2,
  BookOpen,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  Eye,
  EyeOff,
  Copy,
  Check,
  Download,
  Filter,
  UserCheck,
  ExternalLink,
  Mail,
  Key,
  Shield,
  Clock,
  MapPin,
  Laptop,
  X,
  Crown
} from 'lucide-react';
import { COLLEGES_DATA, ADVERTISEMENTS } from '@/data/mockData';
import { College, Advertisement, PortalCredentialAccount, PortalVisitorLog, UserRole } from '@/types';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import LiveUsersTable from '@/components/admin/LiveUsersTable';
import SubscriptionsTable from '@/components/admin/SubscriptionsTable';
import AdminCoursesTable from '@/components/admin/AdminCoursesTable';
import AuditLogsTable from '@/components/admin/AuditLogsTable';
import DatabaseHealthCard from '@/components/admin/DatabaseHealthCard';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { 
    user, 
    isAdmin, 
    login,
    visitorLogs, 
    registeredCredentials, 
    impersonateUser, 
    deleteRegisteredCredential, 
    addRegisteredCredential,
    clearVisitorLogs 
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'analytics' | 'users' | 'subscriptions' | 'courses' | 'audit' | 'colleges' | 'escrow' | 'ads' | 'broadcast' | 'database'>('analytics');
  
  // Users and Visitor Credentials Management state
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<'all' | UserRole>('all');
  const [selectedAuthFilter, setSelectedAuthFilter] = useState<'all' | 'CREDENTIALS' | 'GOOGLE_OAUTH'>('all');
  const [revealedPasswords, setRevealedPasswords] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUserDetail, setSelectedUserDetail] = useState<PortalCredentialAccount | null>(null);
  const [impersonateToast, setImpersonateToast] = useState('');

  // Add User Form State
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<UserRole>('student');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserCollege, setNewUserCollege] = useState('R.V. College of Engineering (RVCE), Bengaluru');

  // Colleges management state
  const [colleges, setColleges] = useState<College[]>(COLLEGES_DATA);
  const [showAddCollegeModal, setShowAddCollegeModal] = useState(false);
  const [newCollegeName, setNewCollegeName] = useState('');
  const [newCollegeCode, setNewCollegeCode] = useState('');
  const [newCollegeCity, setNewCollegeCity] = useState('Bengaluru');
  const [newCollegeRank, setNewCollegeRank] = useState<number>(15);

  // Escrow transactions state
  const [escrowTransactions, setEscrowTransactions] = useState([
    { id: 'tx-801', student: 'Prajwal K. (RVCE)', mentor: 'Ananya Sharma (BMSCE)', amount: 249, status: 'HELD_IN_ESCROW', topic: 'Data Structures' },
    { id: 'tx-802', student: 'Naveen K. (UVCE)', mentor: 'Tejas N. (RVCE)', amount: 349, status: 'HELD_IN_ESCROW', topic: 'LeetCode Dynamic Programming' },
    { id: 'tx-803', student: 'Kavya M. (DSCE)', mentor: 'Sneha Hegde (MSRIT)', amount: 199, status: 'RELEASED', topic: 'Applied Statistics' },
  ]);

  // Advertisements state
  const [adsList, setAdsList] = useState<Advertisement[]>(ADVERTISEMENTS);

  // Broadcast Notification state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  // Secure admin login form state
  const [adminAuthEmail, setAdminAuthEmail] = useState('admin@studentconnect.edu');
  const [adminAuthPassword, setAdminAuthPassword] = useState('');
  const [adminAuthError, setAdminAuthError] = useState('');
  const [adminAuthLoading, setAdminAuthLoading] = useState(false);

  const handleAdminAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminAuthError('');
    setAdminAuthLoading(true);
    try {
      const res = await login(adminAuthEmail, adminAuthPassword, 'admin');
      if (!res.success) {
        setAdminAuthError(res.message || 'Access Denied: Invalid administrator credentials.');
      }
    } catch {
      setAdminAuthError('An authentication error occurred.');
    } finally {
      setAdminAuthLoading(false);
    }
  };

  // User and Credential Actions
  const toggleRevealPassword = (id: string) => {
    setRevealedPasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCredentials = (account: PortalCredentialAccount) => {
    const textToCopy = `Student Connect Portal Credentials:\nName: ${account.name}\nEmail: ${account.email}\nPassword: ${account.passwordDisplay}\nRole: ${account.role.toUpperCase()}\nInstitution: ${account.college}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(account.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleImpersonate = (account: PortalCredentialAccount) => {
    impersonateUser(account);
    setImpersonateToast(`Switched session to ${account.name} (${account.role.toUpperCase()})`);
    setTimeout(() => {
      setImpersonateToast('');
      router.push('/');
    }, 1000);
  };

  const handleCreateNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newUserEmail.trim() || !newUserPassword.trim()) return;

    addRegisteredCredential({
      name: newUserName.trim(),
      email: newUserEmail.trim().toLowerCase(),
      role: newUserRole,
      passwordDisplay: newUserPassword.trim(),
      authType: 'CREDENTIALS',
      college: newUserCollege,
      status: 'VERIFIED',
      avatar: newUserRole === 'mentor'
        ? 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      bio: `${newUserRole.toUpperCase()} provisioned directly by Platform Administration`,
      phoneOrContact: '+91 80 2200 9000',
      googleVerified: false,
    });

    setShowAddUserModal(false);
    setNewUserName('');
    setNewUserEmail('');
    setNewUserPassword('');
  };

  const handleExportCredentialsCSV = () => {
    const headers = 'ID,Name,Email,Role,Password / Access Method,Auth Type,College,Status,Registered Date\n';
    const rows = registeredCredentials.map(c => 
      `"${c.id}","${c.name}","${c.email}","${c.role}","${c.passwordDisplay}","${c.authType}","${c.college}","${c.status}","${c.registeredDate}"`
    ).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StudentConnect_Registered_Credentials_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  // Filtered Users computation
  const filteredUsers = registeredCredentials.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      c.college.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(userSearchQuery.toLowerCase());
    
    const matchesRole = selectedRoleFilter === 'all' || c.role === selectedRoleFilter;
    const matchesAuth = selectedAuthFilter === 'all' || c.authType === selectedAuthFilter;

    return matchesSearch && matchesRole && matchesAuth;
  });

  const handleAddCollege = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollegeName.trim() || !newCollegeCode.trim()) return;

    const newCol: College = {
      id: 'col-' + Date.now(),
      name: newCollegeName,
      shortName: newCollegeName.split(' ')[0],
      code: newCollegeCode,
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
      heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
      location: {
        district: newCollegeCity === 'Bengaluru' ? 'Bengaluru Urban' : newCollegeCity,
        city: newCollegeCity,
        address: `${newCollegeCity}, Karnataka`,
        mapUrl: 'https://maps.google.com',
      },
      website: 'https://karnataka.gov.in',
      contact: { phone: '+91 80 2200 0000', email: 'admissions@college.edu' },
      collegeType: 'Private',
      affiliation: 'Autonomous',
      accreditations: { naacGrade: 'A+', nbaAccredited: true, karnatakaRank: newCollegeRank },
      rating: 4.5,
      reviewCount: 45,
      fees: { kcetAnnual: 98196, comedkAnnual: 240000, hostelAnnual: 90000 },
      hostelAvailable: true,
      branches: [
        {
          branchCode: 'CSE',
          branchName: 'Computer Science & Engineering',
          intakeSeats: 120,
          cutoffs: { kcet: { gm: 8500 } },
          avgPackage: 9.5,
          highestPackage: 32.0,
        },
      ],
      placements: {
        year: 2024,
        placementPercentage: 88,
        totalEligible: 600,
        studentsPlaced: 528,
        highestPackageLPA: 32.0,
        averagePackageLPA: 9.5,
        medianPackageLPA: 7.5,
        topRecruiters: ['Infosys', 'TCS', 'Capgemini'],
        historicalTrend: [{ year: 2024, avgPackage: 9.5, placementRate: 88 }],
      },
      admissionInfo: { eligibility: '10+2 PCM 45%', process: 'KEA CET Counselling' },
      sourceInfo: { source: 'Admin Portal Entry', lastUpdated: 'Today', verificationStatus: 'Verified' },
    };

    setColleges([newCol, ...colleges]);
    setShowAddCollegeModal(false);
    setNewCollegeName('');
    setNewCollegeCode('');
  };

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle.trim() || !broadcastMessage.trim()) return;
    setBroadcastSuccess(true);
    setTimeout(() => {
      setBroadcastSuccess(false);
      setBroadcastTitle('');
      setBroadcastMessage('');
    }, 3000);
  };

  const handleReleaseEscrowAdmin = (id: string) => {
    setEscrowTransactions(prev => prev.map(t => t.id === id ? { ...t, status: 'RELEASED' } : t));
  };

  const handleRefundEscrowAdmin = (id: string) => {
    setEscrowTransactions(prev => prev.map(t => t.id === id ? { ...t, status: 'REFUNDED' } : t));
  };

  // Guard: If not admin, show secure credentials gate
  if (!isAdmin) {
    return (
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center p-4">
        <div className="glass-card rounded-3xl max-w-md w-full p-8 text-center space-y-6 border border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 mx-auto flex items-center justify-center shadow-md">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Restricted Security Clearance</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Administrator Access Only
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              This portal is strictly restricted to authorized platform administrators. Please enter your administrator email and password to proceed.
            </p>
          </div>

          {adminAuthError && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs font-medium text-left flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{adminAuthError}</span>
            </div>
          )}

          <form onSubmit={handleAdminAuthSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Admin Email Address
              </label>
              <input
                type="email"
                required
                value={adminAuthEmail}
                onChange={(e) => setAdminAuthEmail(e.target.value)}
                placeholder="admin@studentconnect.edu"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={adminAuthPassword}
                onChange={(e) => setAdminAuthPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              disabled={adminAuthLoading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{adminAuthLoading ? 'Authenticating...' : 'Sign In as Administrator'}</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/"
              className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              ← Return to Student Connect Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">
                Platform Admin Command Console
              </h1>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-extrabold">
                SUPER ADMIN ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Authenticated as: <strong>{user?.email}</strong>
            </p>
          </div>
        </div>

        {/* MongoDB Indicator */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-500" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block text-[11px]">Database Layer:</span>
              <span className="text-[10px] text-emerald-500 font-semibold">MongoDB Mongoose Active & Synced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Impersonation Session Switch Toast */}
      {impersonateToast && (
        <div className="fixed top-20 right-4 z-50 p-4 rounded-2xl bg-emerald-600 text-white shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{impersonateToast}</span>
        </div>
      )}

      {/* Admin Tab Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold scrollbar-none">
        {[
          { id: 'analytics', label: 'Platform Analytics (20 KPIs)', icon: TrendingUp },
          { id: 'users', label: 'Registered Users & Identity Registry', icon: Users, badge: `${registeredCredentials.length}` },
          { id: 'subscriptions', label: 'Subscriptions & Revenue', icon: Crown },
          { id: 'courses', label: 'Courses & Enrolments', icon: BookOpen },
          { id: 'audit', label: 'Administrator Audit Logs', icon: ShieldCheck },
          { id: 'colleges', label: 'Manage Colleges & Cutoffs', icon: Building2 },
          { id: 'escrow', label: 'Escrow Transactions', icon: DollarSign },
          { id: 'ads', label: 'Advertisements', icon: Megaphone },
          { id: 'broadcast', label: 'Statewide Broadcast', icon: Sparkles },
          { id: 'database', label: 'MongoDB Health', icon: Database },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl transition-all whitespace-nowrap ${
                activeTab === t.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{t.label}</span>
              {t.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === t.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                }`}>
                  {t.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* 0. REGISTERED USERS & VISITOR CREDENTIALS DIRECTORY TAB  */}
      {/* ======================================================== */}
      {activeTab === 'users' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Real-Time MongoDB User Management with Suspend/Restore & Role Control */}
          <LiveUsersTable />

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800" />
          
          {/* Section Header with Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
                <span>Central Authentication & Identity Registry</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-slate-500">Live Synchronized</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Registered Users & Visitor Access Credentials
              </h2>
              <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
                Complete directory of every user persona, registered visitor, and Google-verified student on Student Connect Karnataka, including their active credentials and 1-click test sign-in.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={handleExportCredentialsCSV}
                className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>Export CSV</span>
              </button>

              <button
                type="button"
                onClick={() => setShowAddUserModal(true)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Provision Account</span>
              </button>
            </div>
          </div>

          {/* 4 Summary Stat Widgets */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Registered Accounts</span>
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{registeredCredentials.length}</div>
              <div className="text-[11px] text-slate-500">Across 7 RBAC roles</div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Google 2-Step Verified</span>
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                {registeredCredentials.filter(c => c.googleVerified || c.authType === 'GOOGLE_OAUTH').length}
              </div>
              <div className="text-[11px] text-emerald-500 font-semibold">Strict Domain & OTP Passed</div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tracked Visitor Sessions</span>
              <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{visitorLogs.length}</div>
              <div className="text-[11px] text-slate-500">Live Inbound Audit Log</div>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Governance Clearances</span>
              <div className="text-3xl font-black text-red-600 dark:text-red-400">
                {registeredCredentials.filter(c => c.role === 'admin' || c.role === 'super_admin').length}
              </div>
              <div className="text-[11px] text-red-500 font-semibold">Protected Super & State Admin</div>
            </div>
          </div>

          {/* Search Bar & Filters */}
          <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={userSearchQuery}
                  onChange={(e) => setUserSearchQuery(e.target.value)}
                  placeholder="Search user by name, email, institution, credentials, or role persona..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Auth Method Selector */}
              <div className="flex items-center gap-1.5 shrink-0 w-full sm:w-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0">Auth:</span>
                <select
                  value={selectedAuthFilter}
                  onChange={(e) => setSelectedAuthFilter(e.target.value as any)}
                  className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
                >
                  <option value="all">All Auth Types</option>
                  <option value="CREDENTIALS">Password Protected</option>
                  <option value="GOOGLE_OAUTH">Google 2-Step Verified</option>
                </select>
              </div>
            </div>

            {/* Role Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase shrink-0 mr-1">Filter Role:</span>
              {[
                { id: 'all', label: 'All Roles' },
                { id: 'student', label: 'Students' },
                { id: 'mentor', label: 'Mentors' },
                { id: 'college_rep', label: 'College Reps' },
                { id: 'recruiter', label: 'HR / Recruiters' },
                { id: 'event_organizer', label: 'Organizers' },
                { id: 'admin', label: 'Platform Admins' },
                { id: 'super_admin', label: 'Super Admins' },
              ].map(rf => (
                <button
                  key={rf.id}
                  type="button"
                  onClick={() => setSelectedRoleFilter(rf.id as any)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                    selectedRoleFilter === rf.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {rf.label}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CREDENTIALS TABLE */}
          <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl">
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  Registered User Credentials Directory ({filteredUsers.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Authorized email addresses, passwords, Google OAuth status, and 1-click test login for each portal persona.
                </p>
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                Live Synced with Portal
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 bg-slate-50/50 dark:bg-slate-850/50">
                    <th className="p-3.5">Persona / User</th>
                    <th className="p-3.5">Role</th>
                    <th className="p-3.5">Email (Username)</th>
                    <th className="p-3.5">Login Password / Method</th>
                    <th className="p-3.5">Institution / Org</th>
                    <th className="p-3.5">Verification</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-slate-400 text-xs">
                        No registered users match your search criteria. Try clearing filters or search query.
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((acc) => {
                      const isRevealed = revealedPasswords[acc.id];
                      const isCopied = copiedId === acc.id;

                      const roleBadgeStyles: Record<UserRole, string> = {
                        student: 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900',
                        mentor: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900',
                        college_rep: 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900',
                        recruiter: 'bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-900',
                        event_organizer: 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900',
                        admin: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900',
                        super_admin: 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900',
                      };

                      return (
                        <tr key={acc.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                          
                          {/* User Persona */}
                          <td className="p-3.5">
                            <div className="flex items-center gap-3">
                              <img
                                src={acc.avatar}
                                alt={acc.name}
                                className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                              />
                              <div className="min-w-0">
                                <div className="font-extrabold text-slate-900 dark:text-white truncate">
                                  {acc.name}
                                </div>
                                <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                                  {acc.bio || `${acc.role} profile`}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Role */}
                          <td className="p-3.5">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border ${roleBadgeStyles[acc.role] || 'bg-slate-100 text-slate-700'}`}>
                              {acc.role.replace('_', ' ')}
                            </span>
                          </td>

                          {/* Email */}
                          <td className="p-3.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs text-slate-900 dark:text-slate-100 select-all font-semibold">
                                {acc.email}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  navigator.clipboard.writeText(acc.email);
                                  setCopiedId(acc.id + '-email');
                                  setTimeout(() => setCopiedId(null), 2000);
                                }}
                                title="Copy Email"
                                className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              >
                                {copiedId === acc.id + '-email' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </td>

                          {/* Password / Access Method */}
                          <td className="p-3.5">
                            {acc.authType === 'GOOGLE_OAUTH' ? (
                              <div className="flex items-center gap-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">
                                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"/>
                                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                                  </svg>
                                  <span>Google 2-Step OTP</span>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-xs px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold tracking-wide">
                                  {isRevealed ? acc.passwordDisplay : '••••••••••••'}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleRevealPassword(acc.id)}
                                  title={isRevealed ? 'Hide Password' : 'Show Password'}
                                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                  {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCopyCredentials(acc)}
                                  title="Copy Login Credentials"
                                  className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                </button>
                              </div>
                            )}
                          </td>

                          {/* Institution / College */}
                          <td className="p-3.5">
                            <span className="font-medium text-slate-700 dark:text-slate-300 text-xs block truncate max-w-[220px]" title={acc.college}>
                              {acc.college}
                            </span>
                          </td>

                          {/* Verification Status */}
                          <td className="p-3.5">
                            {acc.googleVerified ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Verified</span>
                              </span>
                            ) : acc.status === 'PROTECTED_ADMIN' ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400">
                                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                                <span>State Clearance</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                <span>Active Portal User</span>
                              </span>
                            )}
                          </td>

                          {/* Action Buttons */}
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleImpersonate(acc)}
                                title={`1-Click Test Sign-In as ${acc.name}`}
                                className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[11px] font-bold shadow-sm transition-all flex items-center gap-1 active:scale-95"
                              >
                                <UserCheck className="w-3.5 h-3.5" />
                                <span>Sign In as</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => setSelectedUserDetail(acc)}
                                title="View Full Account Record"
                                className="p-1.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>

                              {acc.status !== 'PROTECTED_ADMIN' && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (confirm(`Are you sure you want to delete credentials for ${acc.name} (${acc.email})?`)) {
                                      deleteRegisteredCredential(acc.id);
                                    }
                                  }}
                                  title="Delete Account"
                                  className="p-1.5 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </td>

                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ======================================================== */}
          {/* LIVE VISITOR ACCESS & SESSION AUDIT STREAM               */}
          {/* ======================================================== */}
          <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl space-y-4 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Live Portal Visitor Access & Session Stream</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                      Real-Time Inbound Logs ({visitorLogs.length})
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Live chronological audit of users logging into Student Connect via Google OAuth, credentials, or public registration.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearVisitorLogs}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-400 text-slate-500 hover:text-red-600 text-xs font-semibold transition-all flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Logs</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 bg-slate-50/50 dark:bg-slate-850/50">
                    <th className="p-3">Time</th>
                    <th className="p-3">Visitor Name</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Auth Method</th>
                    <th className="p-3">Clearance Status</th>
                    <th className="p-3">Location / Node</th>
                    <th className="p-3">Client Device</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {visitorLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{log.timestamp}</span>
                        </div>
                      </td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <span>{log.userName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase font-semibold">
                            {log.role.replace('_', ' ')}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 font-mono text-slate-700 dark:text-slate-300">
                        {log.email}
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          log.authMethod.includes('Google')
                            ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900'
                            : log.authMethod.includes('Admin')
                            ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-900'
                            : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900'
                        }`}>
                          {log.authMethod}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{log.status}</span>
                        </span>
                      </td>
                      <td className="p-3 text-[11px] text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[200px]" title={log.location}>{log.location}</span>
                        </div>
                      </td>
                      <td className="p-3 text-[11px] text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Laptop className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[150px]">{log.device}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* 1. ANALYTICS OVERVIEW (20 KPI CARDS & REALTIME TREND CHARTS) */}
      {activeTab === 'analytics' && (
        <AnalyticsDashboard />
      )}

      {/* 1B. VERIFIED SUBSCRIPTIONS & REVENUE LEDGER */}
      {activeTab === 'subscriptions' && (
        <SubscriptionsTable />
      )}

      {/* 1C. COURSES & ENROLMENT ENGAGEMENT */}
      {activeTab === 'courses' && (
        <AdminCoursesTable />
      )}

      {/* 1D. IMMUTABLE SECURITY AUDIT TRAIL */}
      {activeTab === 'audit' && (
        <AuditLogsTable />
      )}

      {/* 2. MANAGE COLLEGES & CUTOFFS */}
      {activeTab === 'colleges' && (
        <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Karnataka Engineering College Directory Records ({colleges.length})
              </h3>
              <p className="text-xs text-slate-500">
                Update historical cutoffs, add new institutions, or verify accreditation records.
              </p>
            </div>

            <button
              onClick={() => setShowAddCollegeModal(true)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add College</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400">
                  <th className="p-3">Code</th>
                  <th className="p-3">College Name</th>
                  <th className="p-3">City</th>
                  <th className="p-3">Rank</th>
                  <th className="p-3">NAAC</th>
                  <th className="p-3">Highest CTC</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {colleges.map(c => (
                  <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-mono font-bold text-blue-600">{c.code}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{c.name}</td>
                    <td className="p-3">{c.location.city}</td>
                    <td className="p-3 font-bold text-indigo-500">#{c.accreditations.karnatakaRank}</td>
                    <td className="p-3 font-semibold text-emerald-600">{c.accreditations.naacGrade}</td>
                    <td className="p-3 font-bold">₹{c.placements.highestPackageLPA} LPA</td>
                    <td className="p-3 text-right">
                      <Link href={`/colleges/${c.id}`} className="text-blue-500 font-bold hover:underline">
                        Audit →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. ESCROW TRANSACTIONS MONITOR */}
      {activeTab === 'escrow' && (
        <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Escrow Vault Transaction Monitor
              </h3>
              <p className="text-xs text-slate-500">
                Oversee student tutoring transactions, handle disputes, and release tutor payouts.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400">
                  <th className="p-3">Tx ID</th>
                  <th className="p-3">Student</th>
                  <th className="p-3">Tutor / Mentor</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Escrow Status</th>
                  <th className="p-3 text-right">Admin Override</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {escrowTransactions.map(tx => (
                  <tr key={tx.id} className="hover:bg-slate-50 dark:hover:bg-slate-850">
                    <td className="p-3 font-mono font-bold text-slate-400">{tx.id}</td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">{tx.student}</td>
                    <td className="p-3">{tx.mentor}</td>
                    <td className="p-3 text-slate-500">{tx.topic}</td>
                    <td className="p-3 font-extrabold text-emerald-600">₹{tx.amount}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        tx.status === 'HELD_IN_ESCROW' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="p-3 text-right space-x-2">
                      {tx.status === 'HELD_IN_ESCROW' && (
                        <>
                          <button
                            onClick={() => handleReleaseEscrowAdmin(tx.id)}
                            className="text-xs font-bold text-emerald-600 hover:underline"
                          >
                            Release
                          </button>
                          <button
                            onClick={() => handleRefundEscrowAdmin(tx.id)}
                            className="text-xs font-bold text-rose-500 hover:underline"
                          >
                            Refund
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. ADVERTISEMENTS DASHBOARD */}
      {activeTab === 'ads' && (
        <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Sponsor Advertisement Management
              </h3>
              <p className="text-xs text-slate-500">
                Controlled non-intrusive banners with impression and click tracking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adsList.map(ad => (
              <div key={ad.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                    {ad.placement}
                  </span>
                  <span className="text-emerald-500 font-bold">Active Campaign</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">{ad.title}</h4>
                <div className="text-[11px] text-slate-500">Sponsor: {ad.sponsorName}</div>
                <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700 text-slate-500 font-semibold">
                  <span>Impressions: {ad.impressions.toLocaleString()}</span>
                  <span>Clicks: {ad.clicks} (CTR: {((ad.clicks / ad.impressions) * 100).toFixed(1)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. STATEWIDE BROADCAST */}
      {activeTab === 'broadcast' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto space-y-5">
          <div>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Statewide Student Notification Broadcast
            </h3>
            <p className="text-xs text-slate-500">
              Instantly push critical alerts (KCET option entry, VTU exam schedules) to all students.
            </p>
          </div>

          {broadcastSuccess && (
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Broadcast dispatched to all 48,500+ registered students!</span>
            </div>
          )}

          <form onSubmit={handleSendBroadcast} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Alert Headline</label>
              <input
                type="text"
                required
                value={broadcastTitle}
                onChange={(e) => setBroadcastTitle(e.target.value)}
                placeholder="e.g. KEA CET 2025 Round 1 Choice Entry Commenced"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Notification Body</label>
              <textarea
                rows={4}
                required
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
                placeholder="Detailed instructions or link for students..."
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
            >
              Broadcast Notification
            </button>
          </form>
        </div>
      )}

      {/* 6. MONGODB ATLAS CLUSTER HEALTH */}
      {activeTab === 'database' && (
        <DatabaseHealthCard />
      )}

      {/* Add College Modal */}
      {showAddCollegeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Add New Engineering College</h3>
            
            <form onSubmit={handleAddCollege} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">College Name</label>
                <input
                  type="text"
                  required
                  value={newCollegeName}
                  onChange={(e) => setNewCollegeName(e.target.value)}
                  placeholder="e.g. Sahyadri College of Engineering & Management"
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">College Code</label>
                  <input
                    type="text"
                    required
                    value={newCollegeCode}
                    onChange={(e) => setNewCollegeCode(e.target.value)}
                    placeholder="e.g. E045"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={newCollegeCity}
                    onChange={(e) => setNewCollegeCity(e.target.value)}
                    placeholder="e.g. Mangaluru"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Karnataka Rank</label>
                <input
                  type="number"
                  value={newCollegeRank}
                  onChange={(e) => setNewCollegeRank(parseInt(e.target.value) || 20)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddCollegeModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 1: PROVISION NEW USER ACCOUNT                      */}
      {/* ======================================================== */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    Provision Portal Account
                  </h3>
                  <p className="text-xs text-slate-500">
                    Create verified credentials for a student, mentor, or recruiter
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAddUserModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewUser} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="e.g. Rohith Varma"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="e.g. rohith@rvce.edu.in"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Role Persona *</label>
                  <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <option value="student">Student</option>
                    <option value="mentor">Mentor / Peer Tutor</option>
                    <option value="college_rep">College Representative</option>
                    <option value="recruiter">HR / Campus Recruiter</option>
                    <option value="event_organizer">Event Organizer</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Designated Password *</label>
                  <input
                    type="text"
                    required
                    value={newUserPassword}
                    onChange={(e) => setNewUserPassword(e.target.value)}
                    placeholder="e.g. Student@123"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-mono text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">College or Institution *</label>
                <input
                  type="text"
                  required
                  value={newUserCollege}
                  onChange={(e) => setNewUserCollege(e.target.value)}
                  placeholder="e.g. R.V. College of Engineering (RVCE), Bengaluru"
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowAddUserModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-md shadow-indigo-500/20"
                >
                  Provision & Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL 2: USER ACCOUNT & SECURITY DOSSIER                 */}
      {/* ======================================================== */}
      {selectedUserDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  User Security Profile Dossier
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedUserDetail(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* User Profile Header */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <img
                src={selectedUserDetail.avatar}
                alt={selectedUserDetail.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 shadow-sm shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-black text-base text-slate-900 dark:text-white">
                    {selectedUserDetail.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold uppercase">
                    {selectedUserDetail.role.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{selectedUserDetail.bio}</p>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Username / Email</span>
                <div className="font-mono font-bold text-slate-900 dark:text-white break-all">{selectedUserDetail.email}</div>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Authorized Password</span>
                <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{selectedUserDetail.passwordDisplay}</div>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Institution / Node</span>
                <div className="font-semibold text-slate-800 dark:text-slate-200">{selectedUserDetail.college}</div>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-0.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Authentication Mode</span>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {selectedUserDetail.authType === 'GOOGLE_OAUTH' ? 'Google 2-Step OTP Verified' : 'Standard Encrypted Password'}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => handleCopyCredentials(selectedUserDetail)}
                className="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Credentials</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedUserDetail(null);
                  handleImpersonate(selectedUserDetail);
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Log In as this Persona</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
