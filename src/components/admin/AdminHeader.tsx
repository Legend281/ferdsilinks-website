'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/supabase-browser-client';
import { usePathname } from 'next/navigation';
import { Bell, UserPlus, BookOpen, Briefcase, Mail, CheckCircle, X, Inbox, Search } from 'lucide-react';

interface User {
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

interface Notification {
  id: string;
  type: 'lead' | 'enrollment' | 'application';
  title: string;
  message: string;
  created_at: string;
  is_read: boolean;
  viewed?: boolean;
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

const notificationIcons = {
  lead: Mail,
  enrollment: BookOpen,
  application: Briefcase,
};

const notificationColors = {
  lead: 'bg-blue-100 text-blue-600',
  enrollment: 'bg-emerald-100 text-emerald-600',
  application: 'bg-purple-100 text-purple-600',
};

const getStorageKey = () => 'ferdsilinks_viewed_notifications';
const getLastClearKey = () => 'ferdsilinks_notifications_last_cleared';

const getViewedIds = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(getStorageKey());
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveViewedIds = (ids: string[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(getStorageKey(), JSON.stringify(ids));
};

const getLastCleared = (): number => {
  if (typeof window === 'undefined') return 0;
  const stored = localStorage.getItem(getLastClearKey());
  return stored ? parseInt(stored, 10) : 0;
};

const saveLastCleared = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(getLastClearKey(), Date.now().toString());
};

export default function AdminHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ label: string; href: string; category: string }[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [viewedIds, setViewedIds] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setViewedIds(getViewedIds());
  }, []);

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

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const supabase = createClient();
        const [leadsRes, enrollmentsRes] = await Promise.all([
          supabase.from('leads').select('id, name, email, created_at').order('created_at', { ascending: false }).limit(3),
          supabase.from('enrollments').select('id, full_name, email, created_at').order('created_at', { ascending: false }).limit(3),
        ]);

        const notifs: Notification[] = [];

        if (leadsRes.data && leadsRes.data.length > 0) {
          leadsRes.data.forEach((lead: { id: string; name: string; email: string; created_at: string }) => {
            notifs.push({
              id: `lead-${lead.id}`,
              type: 'lead',
              title: 'New Lead',
              message: `${lead.name} (${lead.email})`,
              created_at: lead.created_at,
              is_read: false,
            });
          });
        }

        if (enrollmentsRes.data && enrollmentsRes.data.length > 0) {
          enrollmentsRes.data.forEach((enrollment: { id: string; full_name: string; email: string; created_at: string }) => {
            notifs.push({
              id: `enrollment-${enrollment.id}`,
              type: 'enrollment',
              title: 'New Enrollment',
              message: `${enrollment.full_name} (${enrollment.email})`,
              created_at: enrollment.created_at,
              is_read: false,
            });
          });
        }

        notifs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        const lastCleared = getLastCleared();
        const filteredNotifs = lastCleared > 0
          ? notifs.filter(n => new Date(n.created_at).getTime() > lastCleared)
          : notifs;
        setNotifications(filteredNotifs.slice(0, 10));
      } catch (error: any) {
        // Ignore rate limit errors silently
        if (error?.status === 429) {
          console.log('Rate limited, will retry later');
          return;
        }
        console.error('Failed to fetch notifications:', error);
      }
    };

    // Only fetch on mount, not on interval to avoid rate limits
    fetchNotifications();
  }, []);

  // After notifications are set, if no previous clear timestamp exists,
  // mark all notifications as viewed (they are from before the user first logged in)
  useEffect(() => {
    if (notifications.length > 0 && viewedIds.length === 0) {
      const allIds = notifications.map(n => n.id);
      setViewedIds(allIds);
      saveViewedIds(allIds);
    }
  }, [notifications, viewedIds.length]);

  const unreadCount = notifications.filter(n => !viewedIds.includes(n.id)).length;

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

  const searchMenuItems = [
    { label: 'Dashboard', href: '/admin', category: 'Main' },
    { label: 'Leads', href: '/admin/leads', category: 'Engagement' },
    { label: 'Enrollments', href: '/admin/enrollments', category: 'Engagement' },
    { label: 'Applications', href: '/admin/applications', category: 'Engagement' },
    { label: 'Newsletter', href: '/admin/newsletter', category: 'Engagement' },
    { label: 'Courses', href: '/admin/courses', category: 'Content' },
    { label: 'Services', href: '/admin/services', category: 'Content' },
    { label: 'Portfolio', href: '/admin/portfolio', category: 'Content' },
    { label: 'Podcasts', href: '/admin/podcasts', category: 'Content' },
    { label: 'Blog Posts', href: '/admin/content/blog', category: 'Content' },
    { label: 'Team Members', href: '/admin/content/team', category: 'Content' },
    { label: 'Job Listings', href: '/admin/jobs', category: 'System' },
    { label: 'Settings', href: '/admin/settings', category: 'System' },
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = searchMenuItems.filter(
      item => item.label.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery]);

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

          {/* Search */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSearch(true);
                setSearchQuery('');
              }}
              className="p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all"
            >
              <Search className="text-2xl" />
            </button>

            {showSearch && (
              <>
                <div
                  className="fixed inset-0 z-[60]"
                  onClick={() => setShowSearch(false)}
                />
                <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-[70]">
                  <div className="p-4 border-b border-slate-100">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search pages, features..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {searchQuery.trim() === '' ? (
                      <div className="p-6 text-center text-slate-400">
                        <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Type to search...</p>
                      </div>
                    ) : searchResults.length === 0 ? (
                      <div className="p-6 text-center text-slate-400">
                        <p className="text-sm">No results found</p>
                      </div>
                    ) : (
                      <div className="p-2">
                        {searchResults.map((result) => (
                          <Link
                            key={result.href}
                            href={result.href}
                            onClick={() => setShowSearch(false)}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
                          >
                            <div>
                              <p className="text-sm font-medium text-slate-900">{result.label}</p>
                              <p className="text-xs text-slate-500">{result.category}</p>
                            </div>
                            <Search className="w-4 h-4 text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all"
            >
              <Bell className="text-2xl" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100/80 overflow-hidden z-50">
                  <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100/60 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">Notifications</h3>
                    <span className="text-xs text-slate-400 font-medium">{notifications.length} recent</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-slate-400">
                        <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No new notifications</p>
                      </div>
                    ) : (
                      <div className="p-2">
                        {notifications.map((notif) => {
                          const Icon = notificationIcons[notif.type];
                          return (
                            <div
                              key={notif.id}
onClick={() => {
                                const newViewedIds = [...viewedIds, notif.id];
                                setViewedIds(newViewedIds);
                                saveViewedIds(newViewedIds);
                                setShowNotifications(false);
                              }}
                              className={`flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors ${viewedIds.includes(notif.id) ? 'opacity-60' : ''}`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notificationColors[notif.type]}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-900">{notif.title}</p>
                                <p className="text-xs text-slate-500 truncate">{notif.message}</p>
                                <p className="text-xs text-slate-400 mt-1">
                                  {new Date(notif.created_at).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: '2-digit',
                                  })}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="p-3 border-t border-slate-100/60 bg-slate-50/50">
                    <button
                      onClick={() => {
                        setShowNotifications(false);
                        setShowAllNotifications(true);
                      }}
                      className="block text-center text-sm text-primary font-semibold hover:underline"
                    >
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

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

        {/* All Notifications Modal */}
        {showAllNotifications && (
<div className="fixed inset-0 z-[60] flex items-start justify-end pr-8 pt-20" onClick={() => setShowAllNotifications(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200" onClick={e => e.stopPropagation()}>
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-slate-900">Notifications</h3>
                  <p className="text-xs text-slate-500">{unreadCount} unread</p>
                </div>
              </div>
              <button
                onClick={() => setShowAllNotifications(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-12 text-center text-slate-400">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Inbox className="w-8 h-8" />
                  </div>
                  <p className="font-medium text-slate-600">No notifications yet</p>
                  <p className="text-sm mt-1">You're all caught up!</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-50">
                  {notifications.map((notif) => {
                    const Icon = notificationIcons[notif.type];
                    const isViewed = viewedIds.includes(notif.id);
                    return (
                      <div
                        key={notif.id}
                        onClick={() => notif.type === 'lead' ? window.location.href = '/admin/leads' : window.location.href = '/admin/enrollments'}
                        className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer ${isViewed ? 'bg-slate-50/50' : 'bg-white'}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notificationColors[notif.type]}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold text-slate-900">{notif.title}</p>
                              {!isViewed && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">{notif.message}</p>
                            <p className="text-xs text-slate-400 mt-1">
                              {new Date(notif.created_at).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                              })}
                            </p>
                          </div>
                        </div>
                        {!isViewed && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const newViewedIds = [...viewedIds, notif.id];
                              setViewedIds(newViewedIds);
                              saveViewedIds(newViewedIds);
                            }}
                            className="mt-2 text-xs text-primary hover:text-primary/70 font-medium"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <button
                onClick={() => {
                  setNotifications([]);
                  setViewedIds([]);
                  saveViewedIds([]);
                  saveLastCleared();
                  setShowAllNotifications(false);
                }}
                className="w-full text-center text-sm text-slate-500 hover:text-slate-700 font-medium"
              >
                Clear all notifications
              </button>
            </div>
          </div>
        </div>
        )}
      </header>
    );
  }
