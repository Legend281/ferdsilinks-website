"use client";

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function FloatingLanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="fixed bottom-24 right-8 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0302cb] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Change language"
      >
        <span className="text-xl font-bold">{language.toUpperCase()}</span>
      </button>

      <div
        className={`absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-200 ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={() => { toggleLanguage(); setIsOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors w-full text-left"
        >
          <span className="text-lg">🇬🇧</span>
          <span className="text-sm font-medium text-slate-700">English</span>
        </button>
        <button
          onClick={() => { toggleLanguage(); setIsOpen(false); }}
          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors w-full text-left border-t"
        >
          <span className="text-lg">🇫🇷</span>
          <span className="text-sm font-medium text-slate-700">Français</span>
        </button>
      </div>
    </div>
  );
}