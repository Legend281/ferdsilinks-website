'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
  fetchCount?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const defaultNavigation: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/admin', icon: 'dashboard' },
    ],
  },
  {
    title: 'Management',
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
    title: 'Communication',
    items: [
      { name: 'Newsletter', href: '/admin/newsletter', icon: 'mail' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { name: 'Settings', href: '/admin/settings', icon: 'settings' },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes

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

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-[#002147] text-white flex flex-col z-50">
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#cf7000] rounded-lg flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white text-xl">hub</span>
          </div>
          <div>
            <span className="font-headline font-bold text-lg tracking-tight">Ferdsilinks</span>
            <span className="block text-[10px] text-white/50 uppercase tracking-widest">Admin</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {navigation.map((section) => (
          <div key={section.title} className="mb-4">
            <div className="px-5 py-2">
              <span className="text-[10px] font-label uppercase tracking-widest text-white/40">
                {section.title}
              </span>
            </div>
            <div className="px-3 space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      active
                        ? 'bg-[#cf7000] text-white shadow-md shadow-[#cf7000]/20'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                    </div>
                    {item.badge && item.badge > 0 && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        active ? 'bg-white/20' : 'bg-[#cf7000]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

<<<<<<< Updated upstream
      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined text-xl">open_in_new</span>
          <span className="font-medium text-sm">View Website</span>
        </Link>
        <button
          onClick={async () => {
            try {
              const { createClient } = await import('@/lib/supabase/supabase-browser-client');
              const supabase = createClient();
              await supabase.auth.signOut();
              window.location.href = '/admin/login';
            } catch (error) {
              console.error('Sign out error:', error);
              window.location.href = '/admin/login';
            }
          }}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="font-medium text-sm">Sign Out</span>
        </button>
      </div>
    </aside>
=======
        {/* Navigation Container */}
        <div className="flex-1 overflow-hidden flex flex-col px-4 py-2">
          
          {/* Main Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent py-2">
            
            {/* Dashboard Link - Prominent */}
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

            {/* Section Headers & Items */}
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
                          <span className={`material-symbols-outlined text-xl transition-colors ${
                            active ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600'
                          }`}>{item.icon}</span>
                          <span className="font-medium text-sm">{item.name}</span>
                        </div>
                        {item.badge !== undefined ? (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            active ? 'bg-primary text-white' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {item.badge}
                          </span>
                        ) : item.name === 'Leads' && counts.leads > 0 ? (
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
>>>>>>> Stashed changes
  );
}
