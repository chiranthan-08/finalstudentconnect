'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, Search, RefreshCw, ChevronLeft, ChevronRight, Clock, Laptop } from 'lucide-react';

interface AuditRecord {
  id: string;
  adminId: string;
  adminEmail: string;
  action: string;
  affectedResource: string;
  affectedId?: string;
  outcome: 'SUCCESS' | 'FAILURE';
  metadata?: Record<string, any>;
  ipAddress?: string;
  createdAt: string;
}

export default function AuditLogsTable() {
  const [logs, setLogs] = useState<AuditRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchAuditLogs = async (targetPage = 1, searchQuery = search) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: targetPage.toString(),
        limit: '15',
      });
      if (searchQuery.trim()) params.append('search', searchQuery.trim());

      const res = await fetch(`/api/admin/audit-logs?${params.toString()}`);
      const data = await res.json();
      if (data.success && data.auditLogs) {
        setLogs(data.auditLogs);
        setPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch (e: any) {
      console.warn('Error fetching audit logs:', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuditLogs(1);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAuditLogs(1, search);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Immutable Administrator Audit Trail</span>
            </h3>
            <p className="text-xs text-slate-500">
              Cryptographically timestamped, append-only security logs of admin access, user suspensions, role alterations, and settings changes.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Total Log Entries: <strong className="text-indigo-600 dark:text-indigo-400 font-mono">{totalCount}</strong>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search audit trail by admin email, action (e.g. USER_SUSPEND, ROLE_CHANGE), or resource..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm"
          >
            Filter Logs
          </button>
        </form>
      </div>

      <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
                <th className="p-3.5">Timestamp</th>
                <th className="p-3.5">Acting Administrator</th>
                <th className="p-3.5">Action Code</th>
                <th className="p-3.5">Target Resource</th>
                <th className="p-3.5">Outcome</th>
                <th className="p-3.5">Audit Metadata</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400 font-sans">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-indigo-500" />
                    Querying AuditLogModel records...
                  </td>
                </tr>
              ) : logs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400 font-sans font-medium">
                    No audit records found matching query.
                  </td>
                </tr>
              ) : (
                logs.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-850/60 transition-colors">
                    <td className="p-3.5 text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{new Date(l.createdAt).toLocaleString('en-IN')}</span>
                      </div>
                    </td>

                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      {l.adminEmail}
                    </td>

                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded font-black text-[10px] bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                        {l.action}
                      </span>
                    </td>

                    <td className="p-3.5 font-semibold text-slate-700 dark:text-slate-300">
                      {l.affectedResource} {l.affectedId && <span className="text-slate-400 text-[10px]">({l.affectedId.slice(-6)})</span>}
                    </td>

                    <td className="p-3.5">
                      <span className={`inline-flex items-center gap-1 font-bold text-[10px] ${
                        l.outcome === 'SUCCESS' ? 'text-emerald-500' : 'text-rose-500'
                      }`}>
                        {l.outcome === 'SUCCESS' ? (
                          <ShieldCheck className="w-3.5 h-3.5" />
                        ) : (
                          <ShieldAlert className="w-3.5 h-3.5" />
                        )}
                        <span>{l.outcome}</span>
                      </span>
                    </td>

                    <td className="p-3.5 text-[10px] text-slate-500 max-w-[260px] truncate" title={JSON.stringify(l.metadata)}>
                      {l.metadata ? JSON.stringify(l.metadata) : 'None'}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-sans">
          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong> ({totalCount} entries)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1 || loading}
              onClick={() => fetchAuditLogs(page - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={page >= totalPages || loading}
              onClick={() => fetchAuditLogs(page + 1)}
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
