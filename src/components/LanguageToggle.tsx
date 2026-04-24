"use client";

import { useState, useEffect } from 'react';

type Language = 'en' | 'fr';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved === 'en' || saved === 'fr') {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-24 right-8 z-[100]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#0302cb] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Change language"
      >
        <span className="text-xl font-bold">{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[140px]">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors w-full text-left"
          >
            <span className="text-lg">🇬🇧</span>
            <span className="text-sm font-medium text-slate-700">English</span>
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors w-full text-left border-t"
          >
            <span className="text-lg">🇫🇷</span>
            <span className="text-sm font-medium text-slate-700">Français</span>
          </button>
        </div>
      )}
    </div>
  );
}