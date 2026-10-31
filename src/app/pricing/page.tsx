'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  GraduationCap,
  HelpCircle,
  CreditCard,
  Lock,
  ChevronRight,
  CheckCircle2,
  Smartphone
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRazorpayCheckout } from '@/lib/useRazorpayCheckout';
import { RazorpaySimulatorModal } from '@/components/payment/RazorpaySimulatorModal';

export default function PricingPage() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const {
    initiatePayment,
    loading,
    simulatedModal,
    handleSimulatedSuccess,
    closeSimulatedModal,
  } = useRazorpayCheckout();

  const handleSubscribe = (planId: string, planName: string, amountINR: number) => {
    setErrorNotice(null);
    setSuccessNotice(null);

    initiatePayment({
      plan: planId,
      planName,
      amountINR,
      itemType: 'subscription',
      user: user
        ? {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        : {
            id: 'guest_student',
            name: 'Karnataka Student',
            email: 'student@rvce.edu.in',
          },
      onSuccess: (result) => {
        setSuccessNotice(
          `🎉 Payment of ₹${amountINR} confirmed via Razorpay! Your ${planName} is now active.`
        );
      },
      onError: (err) => {
        setErrorNotice(err.message || 'Payment processing was cancelled or failed.');
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
          <span>Secured by Razorpay Payment Gateway</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Invest in Your Engineering Future
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Transparent, student-friendly pricing with instant activation. Built specifically for Karnataka engineering undergraduates across VTU, Autonomous, and Government colleges.
        </p>

        {/* Success / Error Banners */}
        {successNotice && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successNotice}</span>
            </div>
            <Link
              href="/admin"
              className="text-emerald-700 dark:text-emerald-300 underline font-bold"
            >
              View in Ledger
            </Link>
          </div>
        )}

        {errorNotice && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-500 text-rose-800 dark:text-rose-200 text-xs font-semibold flex items-center gap-2 shadow-sm animate-in fade-in">
            <span>⚠️ {errorNotice}</span>
          </div>
        )}
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
        
        {/* Plan 1: Free Starter */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Basic Access
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                Karnataka Starter
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Essential tools to navigate your semester and college choices.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-4xl font-black text-slate-900 dark:text-white">₹0</span>
              <span className="text-xs text-slate-500 ml-1">/ forever free</span>
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>AI KCET & COMEDK College Predictor</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>3 Free Starter Video Academy Courses</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Virtual Study Rooms (Google Meet Style)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>VTU SGPA / CGPA Calculators</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Check className="w-4 h-4 text-slate-300 dark:text-slate-700 shrink-0" />
                <span>Standard Community Access</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <Link
              href="/predictor"
              className="w-full py-3 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Current Free Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Plan 2: Pro Student (Featured) */}
        <div className="rounded-3xl border-2 border-emerald-500 bg-gradient-to-b from-emerald-50/50 via-white to-white dark:from-emerald-950/20 dark:via-slate-900 dark:to-slate-900 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
            Most Popular
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                Full Power
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                Karnataka Student Pro
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Everything you need to top university exams and land off-campus internships.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-4xl font-black text-slate-900 dark:text-white">₹499</span>
              <span className="text-xs text-slate-500 ml-1">/ year (~₹41/mo)</span>
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-slate-700 dark:text-slate-300 border-t border-emerald-100 dark:border-emerald-950">
              <li className="flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>All 50+ Video Academy Technical Courses</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Shareable Course Certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Uncapped AI Study Copilot Queries</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Downloadable VTU Question Banks & Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ad-Free Experience Across Tools</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Pro Student Badge</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => handleSubscribe('pro_student', 'Karnataka Student Pro Plan', 499)}
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Smartphone className="w-4 h-4" />
              <span>Pay ₹499 with Razorpay</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-slate-400">
              <Lock className="w-3 h-3 text-emerald-500" />
              <span>Instant UPI, GPay, PhonePe, Cards</span>
            </div>
          </div>
        </div>

        {/* Plan 3: Placement Pass */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                Career Accelerator
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                Placement & Mentor Pass
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tailored for 3rd & 4th year students targeting ₹12LPA+ Bangalore tech placements.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-4xl font-black text-slate-900 dark:text-white">₹999</span>
              <span className="text-xs text-slate-500 ml-1">/ year</span>
            </div>

            <ul className="space-y-2.5 pt-4 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Everything in Student Pro</span>
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>2 Free 1-on-1 Escrow Mock Interview Sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>ATS Resume Review with Bangalore Recruiter Feedback</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Direct HR & Recruiter Verified Referral Priority</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Competitive Coding & System Design Labs</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => handleSubscribe('placement_pass', 'Placement & Mentor Pass', 999)}
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Smartphone className="w-4 h-4" />
              <span>Pay ₹999 with Razorpay</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-slate-400">
              <Lock className="w-3 h-3 text-indigo-500" />
              <span>Instant UPI, GPay, PhonePe, Cards</span>
            </div>
          </div>
        </div>

      </div>

      {/* Razorpay Trust Banner */}
      <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0c2340] text-cyan-400 flex items-center justify-center font-black text-xl shadow-sm border border-blue-400/30">
            ₹
          </div>
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
              Secured by Razorpay Payments India
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Supports Google Pay, PhonePe, Paytm, BHIM UPI, NetBanking (50+ Indian Banks), RuPay, Visa & Mastercard.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>PCI-DSS Level 1 Compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-blue-500" />
            <span>256-Bit Bank Encryption</span>
          </div>
        </div>
      </div>

      {/* Simulator Modal (Opens in sandbox/dev mode) */}
      <RazorpaySimulatorModal
        isOpen={Boolean(simulatedModal?.isOpen)}
        orderData={simulatedModal?.orderData}
        options={simulatedModal?.options}
        onClose={closeSimulatedModal}
        onSuccess={handleSimulatedSuccess}
        loading={loading}
      />

    </div>
  );
}
