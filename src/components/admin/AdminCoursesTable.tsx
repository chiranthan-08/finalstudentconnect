'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Star, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

interface CourseRecord {
  id: string;
  title: string;
  instructor: {
    name: string;
    role: string;
  };
  category: string;
  priceINR: number;
  enrolledCount: number;
  rating: number;
}

export default function AdminCoursesTable() {
  const [courses, setCourses] = useState<CourseRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchCourses = async (targetPage = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/courses?page=${targetPage}&limit=10`);
      const data = await res.json();
      if (data.success && data.courses) {
        setCourses(data.courses);
        setPage(data.pagination.page);
        setTotalPages(data.pagination.totalPages || 1);
        setTotalCount(data.pagination.total || 0);
      }
    } catch (e: any) {
      console.warn('Error fetching admin courses:', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses(1);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span>Academic Course Registry &amp; Enrolment Analytics</span>
          </h3>
          <p className="text-xs text-slate-500">
            Monitor curriculum engagement, instructor delivery, and active student enrolment tallies.
          </p>
        </div>

        <button
          onClick={() => fetchCourses(page)}
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
                <th className="p-3.5">Course Title</th>
                <th className="p-3.5">Instructor</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Price</th>
                <th className="p-3.5">Enrolled Students</th>
                <th className="p-3.5">Student Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400">
                    <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-indigo-500" />
                    Querying CourseModel collections...
                  </td>
                </tr>
              ) : courses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-xs text-slate-400 font-medium">
                    No courses found in database.
                  </td>
                </tr>
              ) : (
                courses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-850/60 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white max-w-[280px]">
                      {c.title}
                    </td>
                    <td className="p-3.5">
                      <div className="font-semibold text-slate-700 dark:text-slate-300">{c.instructor?.name || 'Academic Lead'}</div>
                      <div className="text-[10px] text-slate-400">{c.instructor?.role || 'VTU Faculty'}</div>
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 font-bold text-[10px]">
                        {c.category}
                      </span>
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      {c.priceINR === 0 ? <span className="text-emerald-500">FREE STARTER</span> : `₹${c.priceINR}`}
                    </td>
                    <td className="p-3.5 font-bold text-indigo-600 dark:text-indigo-400">
                      {c.enrolledCount} learners
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{c.rating?.toFixed(1) || '4.8'}</span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>
            Page <strong>{page}</strong> of <strong>{totalPages}</strong> ({totalCount} courses)
          </span>

          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1 || loading}
              onClick={() => fetchCourses(page - 1)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={page >= totalPages || loading}
              onClick={() => fetchCourses(page + 1)}
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
