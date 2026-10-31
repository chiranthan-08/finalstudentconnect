'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Sparkles } from 'lucide-react';

export function FloatingCopilot() {
  const pathname = usePathname();

  // Do not render floating trigger on the assistant page itself
  if (pathname === '/assistant') {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 no-print group">
      {/* Subtle Tooltip on Hover only (Never auto-opens or covers screen elements) */}
      <div className="absolute right-0 bottom-full mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 whitespace-nowrap">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/95 dark:bg-slate-800/95 text-white text-[11px] font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5 border border-slate-700/60">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Connect AI Copilot (24/7)</span>
        </div>
      </div>

      {/* Main Floating Action Button (Compact small icon FAB) */}
      <Link
        href="/assistant"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all duration-200 border border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-400"
        title="Open Connect AI Copilot (24/7 Student Assistant)"
        aria-label="Open Connect AI Copilot"
      >
        {/* Subtle Pulse Glow */}
        <span className="absolute -inset-0.5 rounded-full bg-blue-500/30 blur-sm group-hover:bg-blue-500/50 -z-10 animate-pulse" />

        <Bot className="w-5 h-5 text-white" />

        {/* Online Indicator Status Dot */}
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-sm" />
      </Link>
    </div>
  );
}

