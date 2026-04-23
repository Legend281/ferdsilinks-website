'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/supabase-browser-client';
import { usePathname } from 'next/navigation';

interface User {
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

const pageTitles: Record<string, { title: string; description: string }> = {
  '/admin': { title: 'Dashboard', description: 'Your overview at a glance' },
  '/admin/leads': { title: 'Leads', description: 'Manage incoming inquiries' },
  '/admin/enrollments': { title: 'Enrollments', description: 'Course enrollment tracking' },
  '/admin/applications': { title: 'Applications', description: 'Job applications received' },
  '/admin/courses': { title: 'Courses', description: 'Manage training programs' },
  '/admin/services': { title: 'Services', description: 'Service offerings' },
  '/admin/portfolio': { title: 'Portfolio', description: 'Project showcase' },
  '/admin/podcasts': { title: 'Podcasts', description: 'Podcast episodes management' },
  '/admin/content/blog': { title: 'Blog Posts', description: 'Articles and insights' },
  '/admin/content/team': { title: 'Team Members', description: 'Team profiles' },
  '/admin/jobs': { title: 'Job Listings', description: 'Career opportunities' },
  '/admin/newsletter': { title: 'Newsletter', description: 'Subscriber management' },
  '/admin/settings': { title: 'Settings', description: 'System configuration' },
};

export default function AdminHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const getUser = async () => {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Auth error:', error);
        setUser(null);
      }
    };
    getUser();
    
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getPageInfo = () => {
    for (const [path, info] of Object.entries(pageTitles)) {
      if (pathname === path || (path !== '/admin' && pathname.startsWith(path))) {
        return info;
      }
    }
    return { title: 'Dashboard', description: 'Your overview at a glance' };
  };

  const pageInfo = getPageInfo();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-8 py-5">
        <div className="flex items-center gap-5">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2.5 -ml-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl lg:text-3xl font-headline font-bold text-slate-900">
                {pageInfo.title}
              </h1>
              <span className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                Live
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-0.5">{pageInfo.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Time Display */}
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-xs text-slate-400 font-medium">{getGreeting()}</span>
            <span className="text-sm font-semibold text-slate-700">{formatTime(currentTime)}</span>
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-slate-200"></div>

          {/* Quick Actions */}
          <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all">
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl hover:bg-slate-100 transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">
                  {user?.user_metadata?.full_name?.charAt(0) || 'A'}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-900 leading-tight">
                  {user?.user_metadata?.full_name || 'Admin User'}
                </p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
              <span className="material-symbols-outlined text-slate-400">expand_more</span>
            </button>

            {showDropdown && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100/80 overflow-hidden z-50">
                  <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100/60">
                    <p className="font-semibold text-slate-900">{user?.user_metadata?.full_name || 'Admin User'}</p>
                    <p className="text-sm text-slate-500 mt-0.5">{user?.email}</p>
                  </div>
                  <div className="p-2">
                    <Link
                      href="/admin/settings"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg text-slate-400">settings</span>
                      Settings & Preferences
                    </Link>
                    <Link
                      href="/"
                      target="_blank"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg text-slate-400">open_in_new</span>
                      View Website
                    </Link>
                    <div className="my-2 border-t border-slate-100"></div>
                    <button
                      onClick={async () => {
                        const supabase = createClient();
                        await supabase.auth.signOut();
                        window.location.href = '/admin/login';
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
