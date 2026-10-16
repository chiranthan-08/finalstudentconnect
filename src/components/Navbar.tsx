'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
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
  UserCheck
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
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const navLinks = [
    { href: '/colleges', label: 'Colleges', icon: GraduationCap },
    { href: '/predictor', label: 'AI Predictor', icon: Sparkles, badge: 'KCET/COMEDK' },
    { href: '/assistant', label: 'Connect AI', icon: Bot, badge: 'New' },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/mentors', label: 'Tutors', icon: UserCheck },
    { href: '/study-rooms', label: 'Study Rooms', icon: Video, pulse: true },
    { href: '/vtu-tools', label: 'VTU Tools', icon: Calculator },
  ];

  const secondaryLinks = [
    { href: '/study-materials', label: 'Study Material Hub', icon: FileText, desc: 'Notes, PYQs, Lab Manuals' },
    { href: '/placements', label: 'Placement Analytics', icon: Briefcase, desc: 'Packages, Trends, ATS Analyzer' },
    { href: '/internships', label: 'Internship Hub', icon: Briefcase, desc: 'Verified Paid Internships' },
    { href: '/events', label: 'Hackathons & Events', icon: Trophy, desc: 'Student Connect Hackathon 2025' },
    { href: '/advanced', label: 'Advanced Student AI', icon: Layers, desc: 'Career Roadmap, Portfolio & Market' },
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    STUDENT CONNECT
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    KA
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                  Explore. Learn. Connect. Grow.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                      {link.badge}
                    </span>
                  )}
                  {link.pulse && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute top-1 right-1" />
                  )}
                </Link>
              );
            })}

            {/* More Hubs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                <span>Hubs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {moreDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-72 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-in fade-in"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Karnataka Student Ecosystem
                  </div>
                  {secondaryLinks.map((item) => {
                    const SIcon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className="flex items-start gap-2.5 px-3 py-2 text-xs hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                          <SIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800 dark:text-slate-200">{item.label}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Controls: Role Switcher, Admin Button, Notifications, Theme, User */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Admin Badge & Direct Link */}
            {isAdmin && (
              <Link
                href="/admin"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:scale-105 transition-transform"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin Console</span>
              </Link>
            )}

            {/* Role Demo Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-colors"
                title="Switch User Role to test permissions"
              >
                <span className={`w-2 h-2 rounded-full ${user ? (rolesList.find(r => r.role === user.role)?.color || 'bg-blue-500') : 'bg-slate-400'}`} />
                <span className="capitalize">{user ? user.role.replace('_', ' ') : 'Guest'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-50"
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
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 relative transition-colors"
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* User Profile / Login Button */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/community"
                  className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-full border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-slate-50 dark:bg-slate-900 transition-colors"
                >
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                    alt={user.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline max-w-[90px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                </Link>
                <button
                  onClick={logout}
                  className="text-[11px] text-slate-500 hover:text-red-500 font-medium px-1.5 py-1"
                  title="Logout"
                >
                  Exit
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                Log In
              </Link>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg xl:hidden text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-1">
          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white text-xs font-bold mb-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Admin Management Panel</span>
            </Link>
          )}

          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {[...navLinks, ...secondaryLinks].map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  <Icon className="w-4 h-4 text-blue-500" />
                  <span className="truncate">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
