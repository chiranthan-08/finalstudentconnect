'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { CommandPalette } from './CommandPalette';
import { 
  Home,
  GraduationCap, 
  Search, 
  Bot, 
  BookOpen, 
  Users, 
  Video, 
  Calculator, 
  Briefcase, 
  Trophy, 
  Bell, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Layers, 
  FileText, 
  UserCheck, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';
import { UserRole } from '@/types';

export function Navbar() {
  const pathname = usePathname();
  const { 
    user, 
    isAdmin, 
    switchRoleDemo, 
    logout, 
    notifications, 
    markNotificationAsRead, 
    theme, 
    toggleTheme 
  } = useAuth();
  
  const [mounted, setMounted] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [hubsDropdownOpen, setHubsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setHubsDropdownOpen(false);
    setNotifDropdownOpen(false);
    setRoleDropdownOpen(false);
  }, [pathname]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Primary curated desktop links (compact & high priority)
  const primaryLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/colleges', label: 'Colleges', icon: GraduationCap },
    { href: '/predictor', label: 'Predictor', icon: Sparkles, badge: 'KCET' },
    { href: '/vtu-tools', label: 'VTU Tools', icon: Calculator },
    { href: '/courses', label: 'Courses', icon: BookOpen, badge: 'Free' },
    { href: '/community', label: 'Community', icon: Users },
  ];

  // Secondary ecosystem items in Hubs dropdown
  const ecosystemHubs = [
    { href: '/assistant', label: 'Connect AI Copilot', desc: 'KEA cutoffs, VTU syllabi & career roadmaps', icon: Bot, badge: 'AI' },
    { href: '/mentors', label: 'Escrow Peer Tutors', desc: '1-on-1 tutoring with verified senior toppers', icon: UserCheck },
    { href: '/study-rooms', label: 'Virtual Study Rooms', desc: 'Realtime whiteboard, code pad & video grid', icon: Video, pulse: true },
    { href: '/placements', label: 'Placement & ATS Hub', desc: 'CTC trends, packages & AI Resume ATS scanner', icon: Briefcase },
    { href: '/internships', label: 'Verified Internships', desc: 'Paid Bangalore tech & startup opportunities', icon: Briefcase },
    { href: '/events', label: 'Hackathons & Events', desc: 'Student Connect Hackathon 2025 (₹2.5L pool)', icon: Trophy, badge: '₹2.5L' },
    { href: '/study-materials', label: 'Study Material Hub', desc: 'VTU scheme notes, PYQs & lab manuals', icon: FileText },
    { href: '/advanced', label: 'Advanced Student AI', desc: 'Career roadmap, skills gap & portfolio', icon: Layers },
  ];

  const rolesList: { role: UserRole; label: string; color: string }[] = [
    { role: 'student', label: 'Student', color: 'bg-blue-500' },
    { role: 'mentor', label: 'Mentor / Tutor', color: 'bg-emerald-500' },
    { role: 'college_rep', label: 'College Rep', color: 'bg-purple-500' },
    { role: 'recruiter', label: 'HR / Recruiter', color: 'bg-amber-500' },
    { role: 'event_organizer', label: 'Event Organizer', color: 'bg-rose-500' },
    { role: 'admin', label: 'Admin', color: 'bg-indigo-600' },
    { role: 'super_admin', label: 'Super Admin', color: 'bg-red-600' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* 1. BRAND LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    STUDENT CONNECT
                  </span>
                  <span className="text-[9px] uppercase font-bold tracking-wider px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    KA
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide mt-0.5 hidden sm:inline">
                  Explore. Learn. Connect. Grow.
                </span>
              </div>
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION (Visible on lg and above: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/70 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* Hubs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setHubsDropdownOpen(!hubsDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  hubsDropdownOpen 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <span>Hubs</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {hubsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in"
                  onMouseLeave={() => setHubsDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
                    Karnataka Student Ecosystem
                  </div>
                  <div className="max-h-[360px] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50">
                    {ecosystemHubs.map((item) => {
                      const SIcon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setHubsDropdownOpen(false)}
                          className="flex items-start gap-2.5 px-3 py-2 text-xs hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                        >
                          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                            <SIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 truncate">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</span>
                              {item.badge && (
                                <span className="text-[9px] px-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                                  {item.badge}
                                </span>
                              )}
                              {item.pulse && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">{item.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* 3. RIGHT CONTROLS: SEARCH, ADMIN, ROLE, NOTIFS, THEME, USER */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Quick Search Trigger */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs hover:border-blue-500/60 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
              title="Quick Search (Ctrl + K / Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline text-[11px] font-medium">Search</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 rounded text-[10px] bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono font-semibold">
                Ctrl K
              </kbd>
            </button>

            {/* Admin Badge (only when Admin) */}
            {isAdmin && (
              <Link
                href="/admin"
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:scale-105 transition-transform shrink-0"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>
            )}

            {/* Role Demo Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors shrink-0"
                title="Switch User Role to test permissions"
                suppressHydrationWarning
              >
                <span 
                  className={`w-2 h-2 rounded-full ${user ? (rolesList.find(r => r.role === user.role)?.color || 'bg-blue-500') : 'bg-blue-500'} shrink-0`} 
                  suppressHydrationWarning
                />
                <span className="capitalize hidden sm:inline" suppressHydrationWarning>
                  {user ? user.role.replace('_', ' ') : 'Student'}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50 animate-in fade-in"
                  onMouseLeave={() => setRoleDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800 mb-1">
                    Demo Role Switcher (1-Click)
                  </div>
                  {rolesList.map((r) => (
                    <button
                      key={r.role}
                      onClick={() => {
                        switchRoleDemo(r.role);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/80 ${
                        user?.role === r.role ? 'font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${r.color}`} />
                        <span>{r.label}</span>
                      </div>
                      {user?.role === r.role && <span className="text-[10px] text-blue-600 font-bold">Active</span>}
                    </button>
                  ))}
                  <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-800 px-1">
                    <Link
                      href="/login"
                      onClick={() => setRoleDropdownOpen(false)}
                      className="px-2.5 py-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 flex items-center justify-between rounded-lg transition-colors"
                    >
                      <span>Role Login & Register Portal</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 relative transition-colors"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                )}
              </button>

              {notifDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-3 z-50 animate-in fade-in"
                  onMouseLeave={() => setNotifDropdownOpen(false)}
                >
                  <div className="px-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Academic Notifications</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {unreadCount} new
                    </span>
                  </div>
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationAsRead(n.id)}
                        className={`p-3 text-xs cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors ${
                          !n.isRead ? 'bg-blue-50/40 dark:bg-blue-950/20' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">{n.title}</span>
                          <span className="text-[9px] px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                            {n.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {n.message}
                        </p>
                        <span className="text-[9px] text-slate-400 mt-1 block">{n.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* User Profile / Login */}
            {user ? (
              <div className="flex items-center gap-1.5">
                <Link
                  href="/community"
                  className="flex items-center gap-1.5 p-1 pl-1 pr-2 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-slate-50 dark:bg-slate-900 transition-colors"
                  title="View Profile in Community"
                >
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                    alt={user.name}
                    className="w-6 h-6 rounded-full object-cover shrink-0"
                    style={{ width: '24px', height: '24px', minWidth: '24px', maxWidth: '24px', borderRadius: '9999px', objectFit: 'cover' }}
                  />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hidden md:inline max-w-[80px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Link
                  href="/login"
                  className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/login?tab=register"
                  className="px-2.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors hidden sm:inline-block"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle Button (Visible on < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl lg:hidden text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. RESPONSIVE MOBILE DRAWER (Full screen modal for tablets & phones) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-4 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in duration-200">
          
          {/* Mobile Instant Search Bar */}
          <div 
            onClick={() => {
              setMobileMenuOpen(false);
              setIsCommandPaletteOpen(true);
            }}
            className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs cursor-pointer"
          >
            <Search className="w-4 h-4 text-blue-500" />
            <span>Search colleges, cutoffs, tools (Ctrl + K)...</span>
          </div>

          {/* Admin Banner on Mobile */}
          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 text-white text-xs font-bold shadow-md"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Management Console</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}

          {/* Section 1: Academics & Admissions */}
          <div className="space-y-1">
            <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Academics & Admissions
            </div>
            <div className="grid grid-cols-1 gap-1">
              {[
                { href: '/', label: 'Home Dashboard', desc: 'Central landing page, simulator & rankings', icon: Home },
                { href: '/colleges', label: 'Karnataka Engineering Colleges', desc: 'Cutoffs, fees & NIRF ranks', icon: GraduationCap },
                { href: '/predictor', label: 'AI KCET & COMEDK Predictor', desc: 'Calculate odds based on rank', icon: Sparkles, badge: 'Popular' },
                { href: '/vtu-tools', label: 'VTU Academic Tools Suite', desc: 'SGPA, CGPA & attendance calc', icon: Calculator },
                { href: '/study-materials', label: 'VTU Study Material Hub', desc: 'Notes, question papers & lab manuals', icon: FileText },
                { href: '/assistant', label: 'Connect AI Copilot', desc: 'Karnataka engineering assistant', icon: Bot, badge: 'AI' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 2: Learning & Peer Community */}
          <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Learning & Community
            </div>
            <div className="grid grid-cols-1 gap-1">
              {[
                { href: '/courses', label: 'Trending Technical Courses', desc: '3 free starter courses with certificate', icon: BookOpen, badge: 'Free' },
                { href: '/community', label: 'Student Community Feed', desc: 'Cross-college discussion & updates', icon: Users },
                { href: '/mentors', label: 'Escrow Peer Tutoring', desc: '1-on-1 tutoring sessions with seniors', icon: UserCheck },
                { href: '/study-rooms', label: 'Virtual Study Rooms', desc: 'Live whiteboard & shared code runner', icon: Video },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 3: Career & Innovation */}
          <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Careers & Innovation
            </div>
            <div className="grid grid-cols-1 gap-1">
              {[
                { href: '/placements', label: 'Placements & AI Resume ATS', desc: 'College CTC trends & resume scanner', icon: Briefcase },
                { href: '/internships', label: 'Verified Paid Internships', desc: 'Bangalore tech & startup roles', icon: Briefcase },
                { href: '/events', label: 'Student Connect Hackathon 2025', desc: '₹2,50,000 statewide hybrid hackathon', icon: Trophy, badge: '₹2.5L' },
                { href: '/advanced', label: 'Advanced Student AI Suite', desc: 'Career roadmap & digital portfolio', icon: Layers },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-200">{item.label}</div>
                        <div className="text-[11px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    {item.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section 4: Role Authentication & Access */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <div>
                  <div>Login & Registration Portal</div>
                  <div className="text-[10px] font-normal text-blue-100">Access by Role (Student, Mentor, College Rep, HR, Organizer, Admin)</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

        </div>
      )}

      {/* Global Command Palette Modal */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />
    </header>
  );
}
