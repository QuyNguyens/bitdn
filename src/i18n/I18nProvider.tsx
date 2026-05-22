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
  t: (key: string, values?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved) {
      requestAnimationFrame(() => {
        setLocale(saved);
      });
    }
  }, []);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem('locale', l);
  };

  const t = (key: string, values?: Record<string, string | number>): string => {
    const message: unknown = key.split('.').reduce<unknown>(
      (obj, k) => (obj && typeof obj === 'object' ? (obj as Record<string, unknown>)[k] : undefined),
      messages[locale]
    );

    if (message === undefined) {
      return key;
    }

    if (typeof message === 'string') {
      let messageStr = message;
      if (values) {
        Object.entries(values).forEach(([k, v]) => {
          messageStr = messageStr.replace(`{${k}}`, String(v));
        });
      }
      return messageStr;
    }

    return message as unknown as string;
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
