'use client';

import React, { useState, useEffect } from 'react';
import { Crown, DollarSign, CheckCircle2, Clock, AlertTriangle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

interface SubscriptionRecord {
  id: string;
  userId: string;
  userEmail: string;
  plan: string;
  planName: string;
  status: 'active' | 'pending' | 'cancelled' | 'expired';
  priceINR: number;
  startDate: string;
  endDate: string;
  paymentId?: string;
}

export default function SubscriptionsTable() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchSubscriptions = async (targetPage = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/subscriptions?page=${targetPage}&limit=10`);
      const data = await res.json();
      if (data.success && data.subscriptions) {
        setSubscriptions(data.subscriptions);
        setPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch (e: any) {
      console.warn('Error fetching subscriptions:', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions(1);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-500" />
            <span>Verified Premium Subscriptions &amp; Payments Ledger</span>
          </h3>
          <p className="text-xs text-slate-500">
            Audit-safe records of verified payment provider webhooks, subscription tiers, and validity windows.
          </p>
        </div>

        <button
          onClick={() => fetchSubscriptions(page)}
          className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5 text-indigo-500" />
          <span>Refresh</span>
        </button>
      </div>

      <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
                <th className="p-3.5">Student Email</th>
                <th className="p-3.5">Plan Name</th>
                <th className="p-3.5">Amount (INR)</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Valid Window</th>
                <th className="p-3.5">Payment Reference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-indigo-500" />
                    Loading verified subscription ledger...
                  </td>
                </tr>
              ) : subscriptions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400 font-medium">
                    No verified subscriptions recorded yet in MongoDB.
                  </td>
                </tr>
              ) : (
                subscriptions.map((s) => {
                  const statusColors = {
                    active: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
                    pending: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
                    cancelled: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300',
                    expired: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
                  };

                  return (
                    <tr key={s.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-850/60 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900 dark:text-white">{s.userEmail}</td>
                      <td className="p-3.5 font-semibold text-indigo-600 dark:text-indigo-400">{s.planName}</td>
                      <td className="p-3.5 font-black text-emerald-600">₹{s.priceINR.toLocaleString()}</td>
                      <td className="p-3.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[s.status] || statusColors.active}`}>
                          {s.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-[11px] text-slate-500">
                        {new Date(s.startDate).toLocaleDateString()} - {new Date(s.endDate).toLocaleDateString()}
                      </td>
                      <td className="p-3.5 text-[11px] font-mono text-slate-400 truncate max-w-[150px]">
                        {s.paymentId || 'UPI_PROV_AUTO'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong> ({totalCount} subscriptions)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1 || loading}
              onClick={() => fetchSubscriptions(page - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={page >= totalPages || loading}
              onClick={() => fetchSubscriptions(page + 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
