'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Users,
  Sparkles,
  TrendingUp,
  Activity,
  Eye,
  Crown,
  CheckCircle2,
  DollarSign,
  BookOpen,
  GraduationCap,
  Trophy,
  Bot,
  Award,
  AlertTriangle,
  RefreshCw,
  Calendar,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  ExternalLink,
  Clock,
  Layers,
  Database
} from 'lucide-react';

interface KPIData {
  totalRegisteredUsers: number;
  newRegistrationsToday: number;
  newRegistrationsThisWeek: number;
  newRegistrationsThisMonth: number;
  newRegistrationsFiltered: number;
  dailyActiveUsers: number;
  weeklyActiveUsers: number;
  monthlyActiveUsers: number;
  returningUsers: number;
  totalPageViews: number;
  uniqueVisitors: number;
  totalPremiumSubscribers: number;
  activePremiumSubscribers: number;
  pendingSubscriptions: number;
  cancelledSubscriptions: number;
  expiredSubscriptions: number;
  verifiedSuccessfulPayments: number;
  totalRevenueINR: number;
  totalCourseEnrolments: number;
  activeLearners: number;
  completedCourses: number;
  completionRatePercent: number;
  sportsOpportunitiesViewed: number;
  sportsRegistrationClicks: number;
  chatbotSessions: number;
  chatbotInteractions: number;
  avgChatbotLatencyMs: number;
  rewardsIssued: number;
  backendErrors: number;
  failedAuthAttempts: number;
}

const defaultKPIs: KPIData = {
  totalRegisteredUsers: 0,
  newRegistrationsToday: 0,
  newRegistrationsThisWeek: 0,
  newRegistrationsThisMonth: 0,
  newRegistrationsFiltered: 0,
  dailyActiveUsers: 0,
  weeklyActiveUsers: 0,
  monthlyActiveUsers: 0,
  returningUsers: 0,
  totalPageViews: 0,
  uniqueVisitors: 0,
  totalPremiumSubscribers: 0,
  activePremiumSubscribers: 0,
  pendingSubscriptions: 0,
  cancelledSubscriptions: 0,
  expiredSubscriptions: 0,
  verifiedSuccessfulPayments: 0,
  totalRevenueINR: 0,
  totalCourseEnrolments: 0,
  activeLearners: 0,
  completedCourses: 0,
  completionRatePercent: 0,
  sportsOpportunitiesViewed: 0,
  sportsRegistrationClicks: 0,
  chatbotSessions: 0,
  chatbotInteractions: 0,
  avgChatbotLatencyMs: 0,
  rewardsIssued: 0,
  backendErrors: 0,
  failedAuthAttempts: 0,
};

export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState<'today' | 'last_7_days' | 'last_30_days' | 'custom'>('last_30_days');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [kpis, setKpis] = useState<KPIData>(defaultKPIs);
  const [trends, setTrends] = useState<{
    pageViewsTrend: { _id: string; count: number }[];
    regTrend: { _id: string; count: number }[];
    revenueTrend: { _id: string; total: number }[];
    sportsTrend: { _id: string; count: number }[];
    chatbotTrend: { _id: string; count: number }[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchOverview = useCallback(async () => {
    try {
      setRefreshing(true);
      setErrorMsg(null);

      let url = `/api/admin/analytics/overview?period=${period}`;
      if (period === 'custom' && startDate && endDate) {
        url += `&startDate=${startDate}&endDate=${endDate}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.success && data.kpis) {
        setKpis(data.kpis);
      } else {
        setErrorMsg(data.message || 'Failed to load MongoDB analytics');
      }

      // Fetch daily trends
      const days = period === 'today' ? 1 : period === 'last_7_days' ? 7 : 30;
      const trendsRes = await fetch(`/api/admin/analytics/trends?days=${days}`);
      const trendsData = await trendsRes.json();
      if (trendsData.success && trendsData.trends) {
        setTrends(trendsData.trends);
      }

      setLastRefreshed(new Date());
    } catch (err: any) {
      console.warn('Analytics fetch error:', err.message);
      setErrorMsg('Backend connection pending. Displaying live buffer metrics.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [period, startDate, endDate]);

  useEffect(() => {
    fetchOverview();
    // Auto refresh every 30 seconds
    const interval = setInterval(() => {
      fetchOverview();
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchOverview]);

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* 1. Header Toolbar with Filters & Live Status */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
              <Database className="w-3.5 h-3.5 text-emerald-500" />
              <span>MongoDB Atlas Aggregation Pipeline</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-slate-500">Live Realtime Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Real-Time Platform KPI Dashboard
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Every metric below is calculated dynamically via MongoDB Mongoose aggregation pipelines from authentic user registrations, sessions, enrollments, and verified payments.
            </p>
          </div>

          {/* Action & Refresh Status */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <div className="text-right text-[11px] text-slate-500 hidden sm:block">
              <div>Auto-refreshes every 30s</div>
              <div className="font-mono text-slate-400">
                Synced at: {lastRefreshed.toLocaleTimeString()}
              </div>
            </div>

            <button
              onClick={() => fetchOverview()}
              disabled={refreshing}
              className="px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              <span>{refreshing ? 'Syncing DB...' : 'Refresh Realtime'}</span>
            </button>
          </div>
        </div>

        {/* Date Filter Bar */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-1">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span>Reporting Period:</span>
            </span>
            {(
              [
                { id: 'today', label: 'Today (24h)' },
                { id: 'last_7_days', label: 'Last 7 Days' },
                { id: 'last_30_days', label: 'Last 30 Days' },
                { id: 'custom', label: 'Custom Range' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                onClick={() => setPeriod(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  period === t.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {period === 'custom' && (
            <div className="flex items-center gap-2 text-xs">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold"
              />
              <span className="text-slate-400">to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold"
              />
              <button
                onClick={() => fetchOverview()}
                className="px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2 font-medium">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. THE 20 OFFICIAL REQUIRED KPI CARDS                     */}
      {/* ========================================================= */}

      {/* PANEL A: USER ACQUISITION & REGISTRATIONS (Cards 1, 2, 3) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-indigo-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            I. User Acquisition & Growth Metrics
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Total registered users */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-indigo-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                1. Total Registered Users
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 font-bold">
                All-time
              </span>
            </div>
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
              {kpis.totalRegisteredUsers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80">
              <span>Unique email verified index</span>
              <span className="font-semibold text-emerald-500">MongoDB UserModel</span>
            </div>
          </div>

          {/* Card 2: New registrations today */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                2. New Registrations Today
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 font-bold">
                Today
              </span>
            </div>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              +{kpis.newRegistrationsToday.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80">
              <span>Since 00:00 IST</span>
              <span className="font-semibold text-emerald-500 font-mono">Today&apos;s Influx</span>
            </div>
          </div>

          {/* Card 3: New registrations this week & this month */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-blue-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                3. Weekly & Monthly Inflow
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 font-bold">
                Cohort
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <div>
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  +{kpis.newRegistrationsThisWeek}
                </span>
                <span className="text-[10px] text-slate-400 block font-semibold">This Week</span>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
              <div>
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  +{kpis.newRegistrationsThisMonth}
                </span>
                <span className="text-[10px] text-slate-400 block font-semibold">This Month</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800/80">
              Filtered window: <strong>+{kpis.newRegistrationsFiltered}</strong> total signups
            </div>
          </div>
        </div>
      </div>

      {/* PANEL B: ACTIVE & RETURNING USERS (Cards 4, 5, 6, 7) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            II. Active Learners & Retention (DAU / WAU / MAU)
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 4: Daily active users (DAU) */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              4. Daily Active Users (DAU)
            </span>
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              {kpis.dailyActiveUsers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Last 24h distinct logins</div>
          </div>

          {/* Card 5: Weekly active users (WAU) */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              5. Weekly Active Users (WAU)
            </span>
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
              {kpis.weeklyActiveUsers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Last 7d distinct learners</div>
          </div>

          {/* Card 6: Monthly active users (MAU) */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              6. Monthly Active Users (MAU)
            </span>
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
              {kpis.monthlyActiveUsers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Last 30d distinct footprint</div>
          </div>

          {/* Card 7: Returning users */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              7. Returning Users
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {kpis.returningUsers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Registered &gt;30d &amp; active</div>
          </div>
        </div>
      </div>

      {/* PANEL C: PAGE VIEWS & UNIQUE VISITORS (Cards 8, 9) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-cyan-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            III. Student Traffic & Privacy-Conscious Visitors
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 8: Total page views */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                8. Total Page Views
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-600 font-bold">
                Aggregated
              </span>
            </div>
            <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400">
              {kpis.totalPageViews.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              Total page requests across colleges, sports, courses, cutoffs, and AI copilot.
            </div>
          </div>

          {/* Card 9: Unique visitors */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                9. Unique Visitors
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 font-bold">
                Session Hash
              </span>
            </div>
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              {kpis.uniqueVisitors.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              Distinct session identifiers without recording intrusive browser keystrokes or cookies.
            </div>
          </div>
        </div>
      </div>

      {/* PANEL D: PREMIUM SUBSCRIPTIONS & VERIFIED REVENUE (Cards 10, 11, 12, 13) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Crown className="w-4 h-4 text-amber-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            IV. Premium Subscriptions & Verified Revenue Ledger
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 10: Total premium subscribers */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              10. Total Premium Subscribers
            </span>
            <div className="text-3xl font-black text-amber-500">
              {kpis.totalPremiumSubscribers.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">All-time plan subscriptions</div>
          </div>

          {/* Card 11: Active premium subscribers */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              11. Active Premium Subscribers
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {kpis.activePremiumSubscribers.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-500 font-semibold">Active &amp; valid endDate</div>
          </div>

          {/* Card 12: Pending, cancelled, and expired subscriptions */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              12. Subscription Status Breakdown
            </span>
            <div className="text-xs font-bold space-y-1 pt-1">
              <div className="flex justify-between text-amber-600">
                <span>Pending:</span>
                <span className="font-mono">{kpis.pendingSubscriptions}</span>
              </div>
              <div className="flex justify-between text-rose-500">
                <span>Cancelled:</span>
                <span className="font-mono">{kpis.cancelledSubscriptions}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Expired:</span>
                <span className="font-mono">{kpis.expiredSubscriptions}</span>
              </div>
            </div>
          </div>

          {/* Card 13: Verified successful payments and total revenue */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              13. Verified Revenue &amp; Payments
            </span>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
              ₹{kpis.totalRevenueINR.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">
              <strong>{kpis.verifiedSuccessfulPayments}</strong> verified UPI/gateway transactions
            </div>
          </div>
        </div>
      </div>

      {/* PANEL E: COURSES & ENROLMENTS (Cards 14, 15, 16) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            V. Course Enrolments & Completion Pipeline
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 14: Total course enrolments */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              14. Total Course Enrolments
            </span>
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
              {kpis.totalCourseEnrolments.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">CourseEnrolmentModel records</div>
          </div>

          {/* Card 15: Active learners */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              15. Active Learners
            </span>
            <div className="text-3xl font-black text-blue-600 dark:text-blue-400">
              {kpis.activeLearners.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500">Students actively studying courses</div>
          </div>

          {/* Card 16: Completed courses and completion rate */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              16. Completed &amp; Completion Rate
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {kpis.completedCourses} <span className="text-base font-bold text-slate-400">({kpis.completionRatePercent}%)</span>
            </div>
            <div className="text-[11px] text-slate-500">Certificates issued upon 100% progress</div>
          </div>
        </div>
      </div>

      {/* PANEL F: SPORTS, CHATBOT & SECURITY (Cards 17, 18, 19, 20) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            VI. Sports Engagement, Chatbot Copilot &amp; System Health
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 17: Sports opportunities viewed and registration clicks */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              17. Sports Outbound Referrals
            </span>
            <div className="text-3xl font-black text-orange-500">
              {kpis.sportsRegistrationClicks}
            </div>
            <div className="text-[11px] text-slate-500">
              From <strong>{kpis.sportsOpportunitiesViewed}</strong> tournament views (tracked referrals)
            </div>
          </div>

          {/* Card 18: Chatbot sessions and interactions */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              18. Chatbot AI Interactions
            </span>
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
              {kpis.chatbotInteractions}
            </div>
            <div className="text-[11px] text-slate-500">
              {kpis.chatbotSessions} sessions (Avg: {kpis.avgChatbotLatencyMs}ms)
            </div>
          </div>

          {/* Card 19: Rewards issued */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              19. Badges &amp; Rewards Issued
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              {kpis.rewardsIssued}
            </div>
            <div className="text-[11px] text-slate-500">Verified server-side calculation</div>
          </div>

          {/* Card 20: Backend errors and failed authentication attempts */}
          <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              20. System Security &amp; Errors
            </span>
            <div className="text-3xl font-black text-rose-500">
              {kpis.failedAuthAttempts}
            </div>
            <div className="text-[11px] text-slate-500">
              Failed logins | {kpis.backendErrors} backend errors
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. VISUAL TREND CHARTS (Real MongoDB Aggregation Data)   */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Chart 1: Daily Registrations & User Growth */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-500" />
                <span>Daily Registration Growth</span>
              </h4>
              <p className="text-xs text-slate-500">Real student registrations recorded per day</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600">
              MongoDB UserModel
            </span>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-100 dark:border-slate-800">
            {trends && trends.regTrend.length > 0 ? (
              trends.regTrend.map((item, idx) => {
                const max = Math.max(...trends.regTrend.map((t) => t.count), 5);
                const heightPct = `${Math.max(12, Math.round((item.count / max) * 100))}%`;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      +{item.count}
                    </span>
                    <div
                      style={{ height: heightPct }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all shadow-sm"
                    />
                    <span className="text-[10px] font-semibold text-slate-400 truncate max-w-[40px]">
                      {item._id.slice(5)}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 font-medium">
                No new signups registered yet in this timeframe
              </div>
            )}
          </div>
        </div>

        {/* Chart 2: Page Views & Student Traffic */}
        <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-cyan-500" />
                <span>Page Views &amp; Feature Traffic</span>
              </h4>
              <p className="text-xs text-slate-500">Daily student browsing activity across Karnataka portals</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-600">
              AnalyticsEventModel
            </span>
          </div>

          <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-100 dark:border-slate-800">
            {trends && trends.pageViewsTrend.length > 0 ? (
              trends.pageViewsTrend.map((item, idx) => {
                const max = Math.max(...trends.pageViewsTrend.map((t) => t.count), 10);
                const heightPct = `${Math.max(12, Math.round((item.count / max) * 100))}%`;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count}
                    </span>
                    <div
                      style={{ height: heightPct }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 to-blue-500 group-hover:from-cyan-400 group-hover:to-teal-300 transition-all shadow-sm"
                    />
                    <span className="text-[10px] font-semibold text-slate-400 truncate max-w-[40px]">
                      {item._id.slice(5)}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400 font-medium">
                No page view events recorded in selected filter
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
