"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    google: typeof google;
    gtElement: HTMLElement | null;
  }
}

type GoogleTranslateCallback = () => void;

interface TranslateContextType {
  language: string;
  setLanguage: (lang: string) => void;
  isLoaded: boolean;
}

const TranslateContext = createContext<TranslateContextType | undefined>(undefined);

const GOOGLE_TRANSLATE_ELEMENT_ID = 'google_translate_element';

export function GoogleTranslateProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const loadGoogleTranslate = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      if (window.google?.visualization) {
        resolve();
        return;
      }

      const existingScript = document.getElementById('google-translate-script');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve());
        return;
      }

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      window.googleTranslateElementInit = () => {
        setIsLoaded(true);
        resolve();
      };

      script.onerror = () => reject(new Error('Failed to load Google Translate'));
      document.head.appendChild(script);
    });
  }, []);

  useEffect(() => {
    loadGoogleTranslate().catch(console.error);
  }, [loadGoogleTranslate]);

  const setLanguage = useCallback((lang: string) => {
    setLanguageState(lang);
    
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      const translateFrame = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
      if (translateFrame) {
        translateFrame.style.display = 'none';
      }
      
      setTimeout(() => {
        const newCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (newCombo) {
          newCombo.value = lang;
          newCombo.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 500);
    }

    localStorage.setItem('website_language', lang);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('website_language');
    if (saved) {
      setLanguageState(saved);
    }
  }, []);

  return (
    <TranslateContext.Provider value={{ language, setLanguage, isLoaded }}>
      {children}
      <div id={GOOGLE_TRANSLATE_ELEMENT_ID} style={{ display: 'none' }} />
    </TranslateContext.Provider>
  );
}

export function useTranslate() {
  const context = useContext(TranslateContext);
  if (context === undefined) {
    throw new Error('useTranslate must be used within a GoogleTranslateProvider');
  }
  return context;
}

export function LanguageSwitcher() {
  const { setLanguage, language } = useTranslate();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="appearance-none bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </div>
  );
}