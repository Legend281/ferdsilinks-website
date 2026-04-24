"use client";

import { useState, useCallback } from 'react';
import { useTranslate, GoogleTranslateProvider } from './GoogleTranslateProvider';
import { LanguageSwitcher } from './GoogleTranslateProvider';

export { GoogleTranslateProvider, useTranslate, LanguageSwitcher };

declare global {
  interface Window {
    google: typeof google;
    googleTranslateElementInit: () => void;
  }
}

interface TranslateButtonProps {
  className?: string;
}

export function TranslateWidget({ className }: TranslateButtonProps) {
  const { isLoaded, setLanguage, language } = useTranslate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.598 3.013A9.001 9.001 0 008 21a9.001 9.001 0 002-5.87M15 9a3 3 0 11-6 0 3 3 0 016 0" />
        </svg>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Translate
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
          <LanguageSwitcher />
        </div>
      )}
    </div>
  );
}

export default function FloatingTranslateButton() {
  const { setLanguage } = useTranslate();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'zh-CN', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'ar', name: 'العربية' },
    { code: 'ru', name: 'Русский' },
    { code: 'hi', name: 'हिन्दी' },
  ];

  const handleTranslate = (langCode: string) => {
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      const element = document.createElement('div');
      element.id = 'google_translate_element';
      element.style.display = 'none';
      document.body.appendChild(element);
      
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      window.googleTranslateElementInit = () => {
        const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (combo) {
          combo.value = langCode;
          combo.dispatchEvent(new Event('change', { bubbles: true }));
        }
      };
      
      document.head.appendChild(script);
    }
    
    localStorage.setItem('website_language', langCode);
    setShowDropdown(false);
  };

  return (
    <div className="fixed bottom-32 right-8 z-40">
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all"
          aria-label="Translate page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.598 3.013A9.001 9.001 0 008 21a9.001 9.001 0 002-5.87M15 9a3 3 0 11-6 0 3 3 0 016 0" />
          </svg>
          <span className="font-medium">Translate</span>
        </button>
        
        {showDropdown && (
          <div className="absolute bottom-full right-0 mb-2 w-48 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleTranslate(lang.code)}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}