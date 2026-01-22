'use client';

import en from '@/messages/en';
import ja from '@/messages/ja';
import vi from '@/messages/vi';
import { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'vi' | 'en' | 'ja';

const messages = { vi, en, ja };

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved) setLocale(saved);
  }, []);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem('locale', l);
  };

  const t = (key: string) => {
    return (
      key.split('.').reduce((obj: any, k) => obj?.[k], messages[locale]) ?? key
    );
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale: changeLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
};
