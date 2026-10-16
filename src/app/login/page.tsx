'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { 
  GraduationCap, 
  ShieldCheck, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  ArrowRight,
  UserCheck
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithGoogle, user } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        if (email.toLowerCase().includes('admin')) {
          router.push('/admin');
        } else {
          router.push('/community');
        }
      } else {
        setErrorMessage(res.message || 'Login failed. Please check your credentials.');
      }
    } catch {
      setErrorMessage('An unexpected error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    setErrorMessage('');
    try {
      await loginWithGoogle();
      router.push('/community');
    } catch {
      setErrorMessage('Google verification failed.');
    } finally {
      setGoogleLoading(false);
    }
  };

  const fillAdminCredentials = () => {
    setEmail('admin@studentconnect.edu');
    setPassword('Admin@SC2025!');
    setErrorMessage('');
  };

  const fillStudentCredentials = () => {
    setEmail('student@rvce.edu.in');
    setPassword('Student@123');
    setErrorMessage('');
  };

  const fillMentorCredentials = () => {
    setEmail('mentor@bmsce.ac.in');
    setPassword('Mentor@123');
    setErrorMessage('');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-md w-full space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-1">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sign in to Student Connect
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Karnataka's Centralized Engineering & Mentorship Ecosystem
          </p>
        </div>

        {/* Admin Credentials Alert Card */}
        <div className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/80 dark:bg-indigo-950/40 text-xs shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-indigo-300">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Admin & Evaluator Credentials</span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
              Super Admin
            </span>
          </div>
          <div className="space-y-1 font-mono text-[11px] text-slate-700 dark:text-slate-300">
            <div><span className="text-slate-500">Email:</span> <strong className="text-indigo-600 dark:text-indigo-400">admin@studentconnect.edu</strong></div>
            <div><span className="text-slate-500">Pass:</span> <strong className="text-indigo-600 dark:text-indigo-400">Admin@SC2025!</strong></div>
          </div>
          <button
            type="button"
            onClick={fillAdminCredentials}
            className="mt-2.5 w-full py-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>1-Click Auto-Fill Admin Credentials</span>
          </button>
        </div>

        {/* Main Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
          
          {/* Google Verification Login */}
          <div>
            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all shadow-sm active:scale-[0.99]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{googleLoading ? 'Verifying with Google...' : 'Continue with Google Verification'}</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
            <span className="bg-white dark:bg-slate-900 px-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider shrink-0">
              or with password
            </span>
            <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@studentconnect.edu or student@rvce.edu.in"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick 1-Click Fill Demo accounts */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
              Try Other Verified Personas:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={fillStudentCredentials}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-blue-500 text-[11px] text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                <span>RVCE Student</span>
              </button>
              <button
                type="button"
                onClick={fillMentorCredentials}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-emerald-500 text-[11px] text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1"
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>BMSCE Mentor</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-6 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-bit Encrypted</span>
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>RBAC Verified</span>
          </div>
        </div>

      </div>
    </div>
  );
}
