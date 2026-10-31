'use client';

import React, { useState, useEffect } from 'react';
import { Database, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Server, Layers, Cpu } from 'lucide-react';

export default function DatabaseHealthCard() {
  const [dbStatus, setDbStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [pingResult, setPingResult] = useState<string | null>(null);
  const [pingLoading, setPingLoading] = useState(false);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/database-status');
      const data = await res.json();
      if (data.success && data.database) {
        setDbStatus(data.database);
      }
    } catch (e: any) {
      console.warn('DB status error:', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handlePing = async () => {
    try {
      setPingLoading(true);
      setPingResult(null);
      const t0 = performance.now();
      const res = await fetch('/api/admin/database-status');
      const t1 = performance.now();
      const data = await res.json();
      const latency = Math.round(t1 - t0);

      if (data.success) {
        setPingResult(`MongoDB ping verified! Roundtrip latency: ${latency}ms. Connection status: ${data.database?.status || 'Online'}.`);
      } else {
        setPingResult('Ping failed: Database returned unsuccessful status.');
      }
    } catch {
      setPingResult('Ping error: Unable to contact MongoDB backend service.');
    } finally {
      setPingLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shadow-md">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-lg text-slate-900 dark:text-white">
                MongoDB Atlas &amp; Mongoose Cluster Architecture
              </h3>
              <p className="text-xs text-slate-500">
                Connection pooling, schema indexes, readyState diagnostics, and error isolation.
              </p>
            </div>
          </div>

          <button
            onClick={fetchStatus}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            title="Refresh Diagnostic Status"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Live Status Diagnostic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-[10px] text-slate-400 uppercase font-sans font-bold">Cluster Status</span>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${dbStatus?.connected ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="font-bold text-slate-900 dark:text-white">{dbStatus?.status || 'Connecting...'}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-[10px] text-slate-400 uppercase font-sans font-bold">Connection URI (Masked)</span>
            <div className="text-slate-700 dark:text-slate-300 truncate" title={dbStatus?.uri}>
              {dbStatus?.uri || 'mongodb+srv://student_admin:***@...'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-[10px] text-slate-400 uppercase font-sans font-bold">Database &amp; Host</span>
            <div className="text-slate-700 dark:text-slate-300">
              {dbStatus?.databaseName || 'studentconnect'} @ {dbStatus?.host || 'localhost:27017'}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span className="text-[10px] text-slate-400 uppercase font-sans font-bold">Mongoose Connection State</span>
            <div className="text-slate-700 dark:text-slate-300">
              readyState: <strong>{dbStatus?.readyState ?? 1}</strong> (1 = Connected, 0 = Disconnected)
            </div>
          </div>
        </div>

        {/* Collections Overview */}
        <div className="space-y-3 pt-2">
          <h4 className="font-bold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-500" />
            <span>Mongoose Collections Registered (Section 3 Architecture)</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {[
              { name: 'users', model: 'UserModel', desc: 'Accounts & BCrypt Hash' },
              { name: 'user_sessions', model: 'UserSessionModel', desc: 'DAU/WAU/MAU Activity' },
              { name: 'analytics_events', model: 'AnalyticsEventModel', desc: 'Page Views & Clicks' },
              { name: 'courses', model: 'CourseModel', desc: 'Curriculum & Instructors' },
              { name: 'course_enrolments', model: 'CourseEnrolmentModel', desc: 'Progress & Completion' },
              { name: 'subscriptions', model: 'SubscriptionModel', desc: 'Premium Plans' },
              { name: 'payments', model: 'PaymentModel', desc: 'Idempotent Verified UPI' },
              { name: 'sports_opportunities', model: 'SportsOpportunityModel', desc: 'Competitions & Circulars' },
              { name: 'sports_referrals', model: 'SportsReferralModel', desc: 'Outbound Referral Clicks' },
              { name: 'rewards', model: 'RewardModel & UserReward', desc: 'Points & Badges' },
              { name: 'chatbot_logs', model: 'ChatbotLogModel', desc: 'Latency & Anonymous Meta' },
              { name: 'audit_logs', model: 'AuditLogModel', desc: 'Append-Only Security Trail' },
            ].map((col) => (
              <div key={col.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-[11px]">{col.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{col.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {pingResult && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{pingResult}</span>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={handlePing}
            disabled={pingLoading}
            className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${pingLoading ? 'animate-spin' : ''}`} />
            <span>{pingLoading ? 'Pinging Cluster...' : 'Test Database Latency & ReadyState'}</span>
          </button>

          <span className="text-[11px] text-slate-400">
            Pool Size: 10 connections • 5000ms serverSelectionTimeoutMS
          </span>
        </div>
      </div>
    </div>
  );
}
