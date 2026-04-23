'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface TrackVisitorProps {
  onStatsUpdate?: (stats: { totalVisitors: number; todayVisitors: number; totalPageViews: number }) => void;
}

export default function TrackVisitor({ onStatsUpdate }: TrackVisitorProps) {
  const pathname = usePathname();
  const hasTracked = useRef(false);
  const lastPathname = useRef<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Skip tracking for admin pages
    if (pathname.startsWith('/admin')) return;
    
    if (hasTracked.current && lastPathname.current === pathname) return;
    
    hasTracked.current = true;
    lastPathname.current = pathname;

    const trackVisit = async () => {
      try {
        const referrer = document.referrer || '';
        
        const response = await fetch(
          `/api/analytics/track?page=${encodeURIComponent(pathname)}&referrer=${encodeURIComponent(referrer)}`,
          { method: 'POST' }
        );

        const data = await response.json();

        if (data.success && onStatsUpdate && data.stats) {
          onStatsUpdate(data.stats);
        }
      } catch (error) {
        console.error('[TrackVisitor] Error:', error);
      }
    };

    const timer = setTimeout(trackVisit, 1000);
    
    return () => clearTimeout(timer);
  }, [pathname, onStatsUpdate]);

  return null;
}
