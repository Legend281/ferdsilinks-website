"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training Hub', path: '/training' },
    { name: 'Blog', path: '/blog' },
    { name: 'Podcast', path: '/podcast' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#000a1e]/80 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,33,71,0.04)] min-h-20 flex items-center">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 w-full relative py-4 lg:py-0">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-[#000a1e] dark:text-white tracking-tighter font-headline">
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
                    : 'text-primary dark:text-[#f8f9fa] hover:text-on-tertiary-container'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button 
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-primary dark:text-white rounded-lg hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {resolvedTheme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          <Link href="/contact" className="hidden sm:inline-block bg-on-tertiary-container text-white px-6 py-2.5 rounded-lg font-bold hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
            Get a Quote
          </Link>

          <button 
            className="lg:hidden p-2 text-primary dark:text-white rounded-lg hover:bg-surface-container transition-colors"
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
            className="absolute top-[80px] left-0 w-full bg-white dark:bg-[#000a1e] shadow-2xl border-t border-surface-container lg:hidden py-6 px-6 z-40"
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
                        : 'text-primary dark:text-[#f8f9fa] hover:text-on-tertiary-container'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold w-full mx-auto max-w-[200px]"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
