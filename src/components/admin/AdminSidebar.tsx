'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const navigation: NavSection[] = [
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
  );
}
