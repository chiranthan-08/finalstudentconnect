'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return 'session_ssr';
  let sId = sessionStorage.getItem('sc_analytics_session_id');
  if (!sId) {
    sId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    sessionStorage.setItem('sc_analytics_session_id', sId);
  }
  return sId;
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const { user } = useAuth();
  const lastRecordedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || pathname === lastRecordedPath.current) return;
    lastRecordedPath.current = pathname;

    const sessionId = getOrCreateSessionId();

    // Map path to friendly category
    let category = 'General';
    let pageName = 'Portal Home';

    if (pathname === '/') {
      category = 'Home';
      pageName = 'Student Connect Portal';
    } else if (pathname.startsWith('/admin')) {
      category = 'Administration';
      pageName = 'Admin Analytics Dashboard';
    } else if (pathname.startsWith('/colleges')) {
      category = 'Colleges';
      pageName = 'Karnataka Colleges Directory';
    } else if (pathname.startsWith('/courses')) {
      category = 'Courses';
      pageName = 'Engineering Courses Hub';
    } else if (pathname.startsWith('/sports')) {
      category = 'Sports';
      pageName = 'Sports Opportunities Hub';
    } else if (pathname.startsWith('/assistant')) {
      category = 'Assistant';
      pageName = 'Connect AI Student Copilot';
    } else if (pathname.startsWith('/login')) {
      category = 'Authentication';
      pageName = 'Access & Registration Portal';
    } else if (pathname.startsWith('/community')) {
      category = 'Community';
      pageName = 'Student Community Network';
    } else if (pathname.startsWith('/vtu-tools')) {
      category = 'Academic Tools';
      pageName = 'VTU SGPA / CGPA Calculators';
    }

    // Send page_view event asynchronously without blocking UI
    fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        userId: user?.id || undefined,
        userRole: user?.role || 'guest',
        eventType: 'page_view',
        pageUrl: pathname,
        pageName,
        category,
        metadata: {
          referrer: typeof document !== 'undefined' ? document.referrer : '',
          screen: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '',
        },
      }),
    }).catch(() => {
      // Fail silently to never disrupt student user experience
    });
  }, [pathname, user]);

  return null;
}
