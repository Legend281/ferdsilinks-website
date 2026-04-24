'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/supabase-browser-client';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const defaultNavigation: NavSection[] = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', href: '/admin', icon: 'dashboard' },
    ],
  },
  {
    title: 'Leads & Enquiries',
    items: [
      { name: 'Leads', href: '/admin/leads', icon: 'inbox' },
      { name: 'Enrollments', href: '/admin/enrollments', icon: 'school' },
      { name: 'Applications', href: '/admin/applications', icon: 'person_search' },
    ],
  },
  {
    title: 'Content',
    items: [
      { name: 'Courses', href: '/admin/courses', icon: 'menu_book' },
      { name: 'Services', href: '/admin/services', icon: 'handyman' },
      { name: 'Portfolio', href: '/admin/portfolio', icon: 'folder_special' },
      { name: 'Podcasts', href: '/admin/podcasts', icon: 'podcasts' },
      { name: 'Blog Posts', href: '/admin/content/blog', icon: 'article' },
      { name: 'Team Members', href: '/admin/content/team', icon: 'groups' },
      { name: 'Job Listings', href: '/admin/jobs', icon: 'work' },
    ],
  },
  {
    title: 'Engagement',
    items: [
      { name: 'Newsletter', href: '/admin/newsletter', icon: 'mail' },
    ],
  },
  {
    title: 'System',
    items: [
      { name: 'Settings', href: '/admin/settings', icon: 'settings' },
      { name: 'Analytics', href: '/admin/analytics', icon: 'analytics' },
    ],
  },
];

export default function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string; avatar_url?: string } } | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [counts, setCounts] = useState({ leads: 0, enrollments: 0, applications: 0, newsletter: 0 });

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      const supabase = createClient();
      const [leadsRes, enrollmentsRes, appsRes, newsletterRes] = await Promise.all([
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('enrollments').select('id', { count: 'exact', head: true }),
        supabase.from('job_applications').select('id', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }),
      ]);
      setCounts({
        leads: leadsRes.count || 0,
        enrollments: enrollmentsRes.count || 0,
        applications: appsRes.count || 0,
        newsletter: newsletterRes.count || 0,
      });
    };
    fetchCounts();
  }, []);

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={`fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-slate-50 to-white border-r border-slate-200/60 flex flex-col z-50 shadow-2xl shadow-slate-900/5 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="relative h-20 flex-shrink-0 flex items-center px-6">
          <Link href="/admin" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="font-headline font-bold text-xl text-slate-900 tracking-tight">Ferdsilinks</span>
              <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Control Center</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col px-4 py-2">
          <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent py-2">
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl mb-4 transition-all duration-200 ${
                isActive('/admin') && pathname === '/admin'
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/30'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${isActive('/admin') && pathname === '/admin' ? 'text-white' : 'text-slate-400'}`}>dashboard</span>
              <span className="font-semibold text-sm">Dashboard Overview</span>
            </Link>

            {defaultNavigation.filter(s => s.title !== 'Main').map((section) => (
              <div key={section.title} className="mb-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2.5 mb-1.5 hover:bg-slate-100/50 rounded-xl transition-colors"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {section.title}
                  </span>
                  <span className={`material-symbols-outlined text-slate-300 text-xl transition-all duration-200 ${activeSection === section.title ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                
                <div className={`space-y-0.5 overflow-hidden transition-all duration-200 ${activeSection === section.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {section.items.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-150 group ${
                          active
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-500 hover:bg-slate-100/80 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`material-symbols-outlined text-xl ${
                            active ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                          }`}>{item.icon}</span>
                          <span className="font-medium text-sm">{item.name}</span>
                        </div>
                        {item.name === 'Leads' && counts.leads > 0 ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                            {counts.leads}
                          </span>
                        ) : item.name === 'Enrollments' && counts.enrollments > 0 ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                            {counts.enrollments}
                          </span>
                        ) : item.name === 'Applications' && counts.applications > 0 ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                            {counts.applications}
                          </span>
                        ) : item.name === 'Newsletter' && counts.newsletter > 0 ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                            {counts.newsletter}
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}