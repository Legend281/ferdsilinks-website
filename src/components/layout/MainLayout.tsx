"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Hide header and footer on admin routes and auth routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login');

  return (
    <>
      {!isExcluded && <Header />}
      {children}
      {!isExcluded && <Footer />}
    </>
  );
}
