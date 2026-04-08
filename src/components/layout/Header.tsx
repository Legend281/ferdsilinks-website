"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { language, t, toggleLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.training, path: '/training' },
    { name: t.nav.careers, path: '/careers' },
    { name: t.nav.blog, path: '/blog' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,33,71,0.04)] min-h-20 flex items-center">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 w-full relative py-4 lg:py-0">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tighter font-headline">
          Ferdsilinks
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-headline font-bold tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`transition-colors ${
                  isActive 
                    ? 'text-on-tertiary-container border-b-2 border-on-tertiary-container pb-1' 
                    : 'text-primary hover:text-on-tertiary-container'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* CTA & Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          {mounted && (
            <div className="flex items-center gap-1 bg-surface-container-high rounded-lg p-1">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                  language === 'fr' 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                FR
              </button>
            </div>
          )}

          <Link href="/contact" className="hidden sm:inline-block bg-on-tertiary-container text-white px-6 py-2.5 rounded-lg font-bold hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
            {t.nav.getAQuote}
          </Link>

          <button 
            className="lg:hidden p-2 text-primary rounded-lg hover:bg-surface-container transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-[#e7e8e9] to-transparent h-[1px]"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 w-full bg-white shadow-2xl border-t border-surface-container lg:hidden py-6 px-6 z-40"
          >
            <div className="flex flex-col gap-6 font-headline font-bold text-lg text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full py-2 ${
                      isActive 
                        ? 'text-on-tertiary-container border-b-2 border-on-tertiary-container inline-block w-max mx-auto' 
                        : 'text-primary hover:text-on-tertiary-container'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Language Switcher Mobile */}
              <div className="flex justify-center gap-2 py-4 border-t border-b border-surface-container">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    language === 'en' 
                      ? 'bg-on-tertiary-container text-white' 
                      : 'bg-surface-container-high text-primary'
                  }`}
                >
                  English
                </button>
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    language === 'fr' 
                      ? 'bg-on-tertiary-container text-white' 
                      : 'bg-surface-container-high text-primary'
                  }`}
                >
                  Français
                </button>
              </div>
              
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold w-full mx-auto max-w-[200px]"
              >
                {t.nav.getAQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
