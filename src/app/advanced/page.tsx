'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { 
  Sparkles, 
  Layers, 
  MapPin, 
  ShoppingBag, 
  HelpCircle, 
  Share2, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight,
  User,
  Plus
} from 'lucide-react';

export default function AdvancedStudentSuitePage() {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'skillgap' | 'marketplace' | 'portfolio'>('roadmap');

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Roadmap Generator State
  const [careerGoal, setCareerGoal] = useState('Full-Stack Distributed Systems Engineer');
  const [currentSkillsInput, setCurrentSkillsInput] = useState('HTML, CSS, JavaScript, Basic C++');
  const [generatedRoadmap, setGeneratedRoadmap] = useState<any | null>({
    goal: 'Full-Stack Distributed Systems Engineer',
    threeMonth: [
      'Month 1: Advanced TypeScript & React 19 / Next.js App Router architectures',
      'Month 2: Node.js, Express, MongoDB schemas, and REST/GraphQL API design',
      'Month 3: Containerization with Docker, Redis caching, and building 2 capstone fullstack apps',
    ],
    sixMonth: [
      'Month 4: Microservices patterns, message queues (Kafka / RabbitMQ), and PostgreSQL',
      'Month 5: System design principles: load balancers, rate limiters, database sharding',
      'Month 6: Mock interviews on LeetCode Mediums and applying to Bangalore Tier-1 tech startups',
    ],
  });

  // 2. Skill Gap Analyzer State
  const [targetIndustryRole, setTargetIndustryRole] = useState('AI & Machine Learning Engineer');
  const roleSkillRequirements: { [role: string]: string[] } = {
    'AI & Machine Learning Engineer': ['Python', 'PyTorch', 'Linear Algebra', 'Transformers & LLMs', 'Docker', 'FastAPI'],
    'Full-Stack Cloud Developer': ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'AWS S3/EC2', 'Redis'],
    'Cybersecurity Analyst': ['Network Protocols (TCP/IP)', 'Linux Shell Scripting', 'Wireshark', 'Burp Suite', 'Cryptography'],
  };

  // 3. Marketplace & Lost and Found State
  const [marketplaceItems, setMarketplaceItems] = useState([
    {
      id: 'm1',
      title: 'Casio Scientific Calculator fx-991EX (VTU Approved)',
      category: 'Calculators',
      price: '₹750 (Original ₹1,450)',
      college: 'RVCE Bangalore',
      contact: 'Prajwal (3rd Year CSE)',
      type: 'Marketplace',
    },
    {
      id: 'm2',
      title: 'Engineering Graphics Drafter & Drawing Board Set',
      category: 'Equipment',
      price: '₹350',
      college: 'BMSCE Basavanagudi',
      contact: 'Karthik (2nd Year MECH)',
      type: 'Marketplace',
    },
    {
      id: 'm3',
      title: 'FOUND: Black Fastrack Smartwatch near Mech Lab 3',
      category: 'Lost & Found',
      price: 'Free Claim with ID verification',
      college: 'MSRIT Bangalore',
      contact: 'Campus Security / Student Council',
      type: 'Lost & Found',
    },
  ]);

  const handleGenerateRoadmap = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedRoadmap({
      goal: careerGoal,
      threeMonth: [
        `Month 1: Fundamentals of ${careerGoal} & deep-dive into practical hands-on labs`,
        `Month 2: Core toolchain mastery & building production-grade projects`,
        `Month 3: Open-source contribution and technical interview problem solving`,
      ],
      sixMonth: [
        `Month 4: Advanced industry patterns and distributed architectures`,
        `Month 5: Portfolio deployment and resume ATS optimization`,
        `Month 6: Campus placement drives & off-campus referrals in Bangalore`,
      ],
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Advanced Student Ecosystem Modules</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          AI Career Roadmap, Skill Gap & Campus Exchange
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Everything Karnataka engineering students need to bridge university curriculum with industry demands.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
        {[
          { id: 'roadmap', label: 'AI Career Roadmap (3 & 6 Mo)' },
          { id: 'skillgap', label: 'Skill Gap Analyzer' },
          { id: 'marketplace', label: 'Student Exchange & Lost/Found' },
          { id: 'portfolio', label: 'Digital Student Portfolio' },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2 rounded-2xl transition-all whitespace-nowrap ${
              activeTab === t.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 1. AI CAREER ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Generate Tailored Engineering Roadmap
            </h3>
            <form onSubmit={handleGenerateRoadmap} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Target Career Goal</label>
                <input
                  type="text"
                  required
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  placeholder="e.g. AI / ML Engineer, Fullstack Dev, Cloud Architect..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Your Current Skills</label>
                <textarea
                  rows={3}
                  value={currentSkillsInput}
                  onChange={(e) => setCurrentSkillsInput(e.target.value)}
                  placeholder="List skills you know (e.g. C, Python, Basic HTML)..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Step-by-Step Roadmap</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-indigo-600">Personalized Milestone Plan</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{generatedRoadmap.goal}</h3>
              </div>
            </div>

            {/* 3-Month Plan */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Phase 1: 3-Month Fast-Track (Core Foundations)
              </span>
              <div className="space-y-2">
                {generatedRoadmap.threeMonth.map((step: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-Month Plan */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Phase 2: 6-Month Advanced (Industry Deployment & Hiring)
              </span>
              <div className="space-y-2">
                {generatedRoadmap.sixMonth.map((step: string, idx: number) => (
                  <div key={idx} className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. SKILL GAP ANALYZER */}
      {activeTab === 'skillgap' && (
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
              Skill Gap Analyzer vs Industry Standards
            </h3>
            <p className="text-xs text-slate-500">
              Compares what is taught in academic syllabus versus what Bangalore tech recruiters require.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <label className="block font-bold text-slate-700 dark:text-slate-300">Select Industry Target Track</label>
            <select
              value={targetIndustryRole}
              onChange={(e) => setTargetIndustryRole(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold"
            >
              {Object.keys(roleSkillRequirements).map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              Required Industry Skill Matrix:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {(roleSkillRequirements[targetIndustryRole] || []).map((skill, idx) => {
                const userHasSkill = (user?.skills || []).some(s => s.toLowerCase().includes(skill.toLowerCase()));
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center justify-between ${
                      userHasSkill
                        ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                        : 'bg-rose-50 dark:bg-rose-950/30 border-rose-500/40 text-rose-800 dark:text-rose-300'
                    }`}
                  >
                    <span className="font-bold">{skill}</span>
                    <span className="text-[10px] font-black uppercase">
                      {userHasSkill ? 'Acquired ✓' : 'Gap to Learn ⚠️'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. STUDENT MARKETPLACE & LOST AND FOUND */}
      {activeTab === 'marketplace' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Campus Exchange & Lost/Found Community
              </h3>
              <p className="text-xs text-slate-500">
                Buy, sell, or donate engineering books, scientific calculators, drafters, or report lost campus items.
              </p>
            </div>

            <button
              onClick={() => alert('Post listing modal: allows students to list books or report found items with moderation.')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Post Item</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketplaceItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-3xl p-5 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      item.type === 'Lost & Found' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-[10px] text-slate-400">{item.college}</span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h4>
                  <div className="text-xs font-black text-blue-600 dark:text-blue-400">{item.price}</div>
                  <div className="text-[11px] text-slate-500">Contact: {item.contact}</div>
                </div>

                <button
                  onClick={() => alert(`Connect with ${item.contact} via verified college chat.`)}
                  className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                >
                  Contact Student
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. DIGITAL STUDENT PORTFOLIO */}
      {activeTab === 'portfolio' && (
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 max-w-3xl mx-auto space-y-6" suppressHydrationWarning>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <img
                src={mounted && user?.avatar ? user.avatar : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'}
                alt="user"
                className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                suppressHydrationWarning
              />
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2" suppressHydrationWarning>
                  <span>{mounted && user?.name ? user.name : 'Prajwal Kulkarni'}</span>
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </h2>
                <div className="text-xs text-slate-500" suppressHydrationWarning>{mounted && user?.college ? user.college : 'RV College of Engineering, Bengaluru'}</div>
                <div className="text-xs font-bold text-blue-600" suppressHydrationWarning>{mounted && user?.branch ? user.branch : 'Computer Science & Engineering'} • USN: 1RV22CS104</div>
              </div>
            </div>

            <button
              onClick={() => alert('Sharable Portfolio Link copied to clipboard: https://studentconnect.ka/portfolio/prajwalk')}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Portfolio</span>
            </button>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="font-bold text-slate-700 dark:text-slate-300 block mb-1">About Me:</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {user?.bio || 'Passionate software builder and pre-final year engineering student. Built distributed systems, drone AI vision applications, and open-source tooling for campus dev communities.'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-slate-700 dark:text-slate-300 block">Verified Student Achievements:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/40 text-amber-900 dark:text-amber-200">
                  <div className="font-bold">🏆 1st Place - Inter-College Hackathon 2024</div>
                  <div className="text-[11px] text-slate-500">AgriVision AI Project</div>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/40 text-emerald-900 dark:text-emerald-200">
                  <div className="font-bold">⭐ Top 1% Peer Mentor Rating</div>
                  <div className="text-[11px] text-slate-500">140+ sessions completed on Escrow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
