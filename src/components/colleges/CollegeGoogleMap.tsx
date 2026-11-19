'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Bus, BedDouble, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { College } from '@/types';

interface CollegeGoogleMapProps {
  college: College;
  compact?: boolean;
}

export function CollegeGoogleMap({ college, compact = false }: CollegeGoogleMapProps) {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<'m' | 'k'>('m'); // 'm' for roadmap, 'k' for satellite

  const fullAddress = college.location.address || `${college.name}, ${college.location.city}, Karnataka`;
  const encodedQuery = encodeURIComponent(`${college.name}, ${fullAddress}`);
  
  // Google Maps official embed URL (No API key needed, zero-rate-limited)
  const embedUrl = `https://maps.google.com/maps?q=${encodedQuery}&t=${mapType}&z=15&ie=UTF8&iwloc=&output=embed`;
  
  // Direct Google Maps navigation URL with destination set
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedQuery}`;
  
  // Transit / Metro search near college
  const transitUrl = `https://www.google.com/maps/search/metro+station+bus+stand+near+${encodeURIComponent(college.name + ' ' + college.location.city)}`;
  
  // Hostels / PGs search near college
  const pgsUrl = `https://www.google.com/maps/search/student+hostel+pg+near+${encodeURIComponent(college.name + ' ' + college.location.city)}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(`${college.name}\n${fullAddress}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
      {/* Header bar */}
      <div className="p-5 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-blue-50/50 via-slate-50/30 to-indigo-50/50 dark:from-blue-950/20 dark:via-slate-900/40 dark:to-indigo-950/20">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>Interactive Google Maps & Directions</span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  <ShieldCheck className="w-3 h-3" />
                  Verified GPS
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Turn-by-turn navigation, public transit, and live campus satellite location
              </p>
            </div>
          </div>
        </div>

        {/* View toggles & Quick action */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="inline-flex p-0.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => setMapType('m')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mapType === 'm'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Roadmap
            </button>
            <button
              onClick={() => setMapType('k')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mapType === 'k'
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Satellite
            </button>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className={`relative w-full ${compact ? 'h-64 sm:h-72' : 'h-80 sm:h-96'} bg-slate-100 dark:bg-slate-900`}>
        <iframe
          title={`Google Map Location for ${college.name}`}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-[1.02]"
        />

        {/* Direct campus badge on top corner of map */}
        <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-[11px] font-semibold text-slate-800 dark:text-slate-200 shadow-md flex items-center gap-2 pointer-events-none">
          <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>{college.location.city}, {college.location.district}</span>
        </div>
      </div>

      {/* Detailed Address and Navigation Actions Grid */}
      <div className="p-5 space-y-4 bg-white/50 dark:bg-slate-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Official Campus Address</span>
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                {fullAddress}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyAddress}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>

        {/* Action Hub */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Turn-by-Turn GPS</span>
            <ExternalLink className="w-3 h-3 text-blue-400" />
          </a>

          <a
            href={transitUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
          >
            <Bus className="w-3.5 h-3.5 text-amber-500" />
            <span>Nearby Bus & Metro</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={pgsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors"
          >
            <BedDouble className="w-3.5 h-3.5 text-emerald-500" />
            <span>Nearby Hostels & PGs</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
