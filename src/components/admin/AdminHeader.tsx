'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/supabase-browser-client';

interface User {
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
}

export default function AdminHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

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
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-headline font-bold text-[#002147]">
            Admin Dashboard
          </h1>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <div className="w-8 h-8 bg-[#cf7000] rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">person</span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-gray-900">
                {user?.user_metadata?.full_name || 'Admin'}
              </p>
              <p className="text-xs text-gray-500">{user?.email || 'admin@ferdsilinks.com'}</p>
            </div>
            <span className="material-symbols-outlined text-gray-400">expand_more</span>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
              <button
                onClick={async () => {
                  const supabase = createClient();
                  await supabase.auth.signOut();
                  window.location.href = '/admin/login';
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <span className="material-symbols-outlined text-gray-400">logout</span>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
