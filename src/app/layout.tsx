import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingCopilot } from '@/components/FloatingCopilot';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';

export const metadata: Metadata = {
  title: 'Student Connect | Explore. Learn. Connect. Grow. - Karnataka Engineering Ecosystem',
  description: 'Karnataka’s centralized web platform for engineering students: discover colleges, check KCET/COMEDK cutoffs, AI college predictor, Coursera-style courses, peer tutoring with escrow, virtual study rooms, and VTU academic tools.',
  keywords: 'Karnataka engineering colleges, KCET cutoff predictor, COMEDK rank, VTU SGPA calculator, RVCE, BMSCE, MSRIT, PESU, Bangalore internships, engineering study rooms, Connect AI',
};

import React, { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white">
        <AuthProvider>
          <Suspense fallback={null}>
            <AnalyticsTracker />
          </Suspense>
          <Suspense fallback={<div className="h-16 border-b border-slate-800 bg-slate-950/80" />}>
            <Navbar />
          </Suspense>
          <main className="flex-1">
            <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading Student Connect...</div>}>
              {children}
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <FloatingCopilot />
          </Suspense>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
