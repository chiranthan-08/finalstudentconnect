import React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, Heart, Shield, CheckCircle2, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                STUDENT CONNECT
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-xs max-w-sm">
              Karnataka’s premier centralized student ecosystem. Helping engineering students discover colleges, predict admissions, learn trending skills, connect with cross-campus peers, and prepare for tier-1 careers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>Bengaluru • Mysuru • Mangaluru • Hubballi • Belagavi</span>
            </div>
            
            {/* Newsletter */}
            <div className="pt-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1.5 text-xs">
                Subscribe to Karnataka Exam & Cutoff Alerts
              </span>
              <div className="flex gap-1.5 max-w-md">
                <input
                  type="email"
                  placeholder="Enter student email..."
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                />
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-colors"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* College Hubs */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Top Colleges
            </h4>
            <ul className="space-y-2">
              <li><Link href="/colleges?q=RVCE" className="hover:text-blue-500 transition-colors">RVCE Bengaluru</Link></li>
              <li><Link href="/colleges?q=BMSCE" className="hover:text-blue-500 transition-colors">BMS College of Engg</Link></li>
              <li><Link href="/colleges?q=MSRIT" className="hover:text-blue-500 transition-colors">MSRIT Ramaiah</Link></li>
              <li><Link href="/colleges?q=PES" className="hover:text-blue-500 transition-colors">PES University (RR)</Link></li>
              <li><Link href="/colleges?q=UVCE" className="hover:text-blue-500 transition-colors">UVCE Bengaluru (Govt)</Link></li>
              <li><Link href="/colleges?q=SJCE" className="hover:text-blue-500 transition-colors">JSS STU (SJCE) Mysuru</Link></li>
            </ul>
          </div>

          {/* Student Tools & Prep */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Academic & Tools
            </h4>
            <ul className="space-y-2">
              <li><Link href="/vtu-tools" className="hover:text-blue-500 transition-colors">VTU SGPA Calculator</Link></li>
              <li><Link href="/vtu-tools" className="hover:text-blue-500 transition-colors">VTU CGPA to Percentage</Link></li>
              <li><Link href="/vtu-tools" className="hover:text-blue-500 transition-colors">Attendance Bunk Calculator</Link></li>
              <li><Link href="/predictor" className="hover:text-blue-500 transition-colors">AI KCET College Predictor</Link></li>
              <li><Link href="/study-materials" className="hover:text-blue-500 transition-colors">VTU Handwritten Notes & PYQs</Link></li>
              <li><Link href="/study-rooms" className="hover:text-blue-500 transition-colors">Virtual Study Rooms</Link></li>
            </ul>
          </div>

          {/* Career & Community */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Ecosystem
            </h4>
            <ul className="space-y-2">
              <li><Link href="/sports" className="hover:text-blue-500 transition-colors flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200"><span>Sports Opportunities Hub</span> <span className="text-[9px] px-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">New</span></Link></li>
              <li><Link href="/feature-implementation" className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-colors flex items-center gap-1"><span>Feature Implementation</span> <span className="text-[9px] px-1 rounded bg-blue-100 dark:bg-blue-950 font-bold">Roadmap</span></Link></li>
              <li><Link href="/courses" className="hover:text-blue-500 transition-colors">3 Free Starter Courses</Link></li>
              <li><Link href="/mentors" className="hover:text-blue-500 transition-colors">Escrow Peer Tutoring</Link></li>
              <li><Link href="/internships" className="hover:text-blue-500 transition-colors">Verified Paid Internships</Link></li>
              <li><Link href="/placements" className="hover:text-blue-500 transition-colors">Placement Trends & ATS</Link></li>
              <li><Link href="/events" className="hover:text-blue-500 transition-colors">Annual Hackathon 2025</Link></li>
              <li><Link href="/admin" className="hover:text-blue-500 transition-colors">Admin Console</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer banner */}
        <div className="p-4 rounded-xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 text-amber-900 dark:text-amber-300 text-[11px] leading-relaxed mb-8 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Official Data Policy & Transparency Note: </span>
            Cutoff figures, placement packages, rankings, and admission predictions provided across Student Connect are compiled for guidance from historical public archives (KEA CET, COMEDK UGET, NIRF, and institution disclosures). All prediction outputs are estimates and do not constitute legal or official admission guarantees. Always refer to official KEA (cetonline.karnataka.gov.in) announcements for seat allotment.
          </div>
        </div>

        {/* Bottom copyright and credentials shortcut */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2025 Student Connect Platform. Built for engineering students across Karnataka.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-blue-500 transition-colors">Login / Portal</Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-blue-500 transition-colors">Admin Portal (admin@studentconnect.edu)</Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Karnataka Students
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
