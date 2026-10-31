'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Users,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  Mail,
  Building2
} from 'lucide-react';

interface MongoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  college: string;
  branch?: string;
  usn?: string;
  reputationScore?: number;
  accountStatus: 'active' | 'suspended';
  subscriptionStatus: 'free' | 'premium' | 'pro';
  isVerified: boolean;
  createdAt: string;
  lastLoginAt?: string;
}

export default function LiveUsersTable() {
  const [users, setUsers] = useState<MongoUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [actionToast, setActionToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  const fetchUsers = useCallback(async (targetPage = page) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: targetPage.toString(),
        limit: '10',
      });
      if (search.trim()) params.append('search', search.trim());
      if (roleFilter !== 'all') params.append('role', roleFilter);
      if (statusFilter !== 'all') params.append('status', statusFilter);

      const res = await fetch(`/api/admin/users?${params.toString()}`);
      const data = await res.json();

      if (data.success && data.users) {
        setUsers(data.users);
        setPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch (err: any) {
      console.warn('Failed to fetch MongoDB users:', err.message);
    } finally {
      setLoading(false);
    }
  }, [page, search, roleFilter, statusFilter]);

  useEffect(() => {
    fetchUsers(1);
  }, [roleFilter, statusFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers(1);
  };

  const handleToggleStatus = async (user: MongoUser) => {
    const nextStatus = user.accountStatus === 'active' ? 'suspended' : 'active';
    const confirmMsg = nextStatus === 'suspended'
      ? `Are you sure you want to suspend "${user.name}" (${user.email})? They will be locked out immediately.`
      : `Restore account access for "${user.name}"?`;

    if (!window.confirm(confirmMsg)) return;

    try {
      setActionLoadingId(user.id);
      const res = await fetch(`/api/admin/users/${user.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });
      const data = await res.json();

      if (data.success) {
        setActionToast({
          msg: `Account "${user.name}" marked as ${nextStatus.toUpperCase()} & logged in audit trail.`,
          type: 'success',
        });
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, accountStatus: nextStatus } : u))
        );
      } else {
        setActionToast({ msg: data.message || 'Status update failed', type: 'error' });
      }
    } catch {
      setActionToast({ msg: 'Network error updating user status', type: 'error' });
    } finally {
      setActionLoadingId(null);
      setTimeout(() => setActionToast(null), 3500);
    }
  };

  const handleChangeRole = async (user: MongoUser, newRole: string) => {
    if (newRole === user.role) return;

    try {
      setActionLoadingId(user.id);
      const res = await fetch(`/api/admin/users/${user.id}/role`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      });
      const data = await res.json();

      if (data.success) {
        setActionToast({
          msg: `Role for ${user.email} updated to ${newRole.toUpperCase()} & recorded in audit log.`,
          type: 'success',
        });
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, role: newRole } : u))
        );
      } else {
        setActionToast({ msg: data.message || 'Role update failed', type: 'error' });
      }
    } catch {
      setActionToast({ msg: 'Network error updating role', type: 'error' });
    } finally {
      setActionLoadingId(null);
      setTimeout(() => setActionToast(null), 3500);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Toast */}
      {actionToast && (
        <div
          className={`p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg ${
            actionToast.type === 'success'
              ? 'bg-emerald-600 text-white'
              : 'bg-rose-600 text-white'
          }`}
        >
          {actionToast.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : (
            <AlertTriangle className="w-4 h-4 shrink-0" />
          )}
          <span>{actionToast.msg}</span>
        </div>
      )}

      {/* Control Bar: Search & Filters */}
      <div className="glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-indigo-500" />
              <span>MongoDB User Identity Management</span>
            </h3>
            <p className="text-xs text-slate-500">
              Search, audit, update roles, and suspend/restore accounts in real-time.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Total in Database: <strong className="text-indigo-600 dark:text-indigo-400 font-mono">{totalCount}</strong>
          </div>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by student name, email, college, or USN..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Roles</option>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
              <option value="recruiter">Recruiter</option>
              <option value="college_rep">College Rep</option>
              <option value="admin">Admin</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
            </select>

            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Users Table */}
      <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase font-bold text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
                <th className="p-3.5">User</th>
                <th className="p-3.5">Institution &amp; Branch</th>
                <th className="p-3.5">Role (RBAC)</th>
                <th className="p-3.5">Plan</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Joined</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-xs text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-indigo-500" />
                    Querying MongoDB user collections...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-xs text-slate-400 font-medium">
                    No users found matching current filters.
                  </td>
                </tr>
              ) : (
                users.map((u) => {
                  const isActionLoading = actionLoadingId === u.id;
                  const isSuspended = u.accountStatus === 'suspended';

                  return (
                    <tr key={u.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-850/60 transition-colors">
                      <td className="p-3.5">
                        <div className="font-bold text-slate-900 dark:text-white">{u.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          <span>{u.email}</span>
                        </div>
                      </td>

                      <td className="p-3.5">
                        <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate max-w-[200px]" title={u.college}>{u.college}</span>
                        </div>
                        {u.branch && <div className="text-[11px] text-slate-400 truncate max-w-[200px]">{u.branch}</div>}
                      </td>

                      <td className="p-3.5">
                        <select
                          value={u.role}
                          disabled={isActionLoading}
                          onChange={(e) => handleChangeRole(u, e.target.value)}
                          className="px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[11px] font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                        >
                          <option value="student">Student</option>
                          <option value="mentor">Mentor</option>
                          <option value="recruiter">Recruiter</option>
                          <option value="college_rep">College Rep</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>

                      <td className="p-3.5">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            u.subscriptionStatus === 'premium' || u.subscriptionStatus === 'pro'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          }`}
                        >
                          {u.subscriptionStatus?.toUpperCase() || 'FREE'}
                        </span>
                      </td>

                      <td className="p-3.5">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            isSuspended
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                              : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          }`}
                        >
                          {isSuspended ? (
                            <>
                              <ShieldAlert className="w-3 h-3 text-rose-600" />
                              <span>SUSPENDED</span>
                            </>
                          ) : (
                            <>
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>ACTIVE</span>
                            </>
                          )}
                        </span>
                      </td>

                      <td className="p-3.5 text-[11px] text-slate-400 font-mono">
                        {new Date(u.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </td>

                      <td className="p-3.5 text-right">
                        <button
                          type="button"
                          disabled={isActionLoading}
                          onClick={() => handleToggleStatus(u)}
                          className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                            isSuspended
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                              : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100'
                          }`}
                        >
                          {isActionLoading ? 'Saving...' : isSuspended ? 'Restore Access' : 'Suspend'}
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing Page <strong>{page}</strong> of <strong>{totalPages}</strong> ({totalCount} total)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1 || loading}
              onClick={() => fetchUsers(page - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={page >= totalPages || loading}
              onClick={() => fetchUsers(page + 1)}
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
