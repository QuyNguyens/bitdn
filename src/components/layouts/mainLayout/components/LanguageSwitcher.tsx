'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

type Lang = {
  key: 'vi' | 'en' | 'ja';
  code: string;
  label: string;
  flag: string;
};

const LANGS: Lang[] = [
  { key: 'vi', code: 'VN', label: 'VIE', flag: '/icons/vietnam.png' },
  { key: 'en', code: 'GB', label: 'ENG', flag: '/icons/united-kingdom.png' },
  { key: 'ja', code: 'JP', label: 'JPN', flag: '/icons/japan.png' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const [current, setCurrent] = useState<Lang>(LANGS[0]);
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Sync current language từ locale
  useEffect(() => {
    const lang = LANGS.find((l) => l.key === locale);
    if (lang) setCurrent(lang);
  }, [locale]);

  // Click outside → đóng popup
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Lang) => {
    setLocale(lang.key);
    setCurrent(lang);
    setOpen(false); // 👈 đóng popup khi chọn
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          rounded-full
          bg-white/90 px-4 py-2
          text-sm font-semibold text-primary
          shadow-sm
          hover:bg-white
          transition
        "
      >
        <Image src={current.flag} alt={current.code} width={22} height={22} />
        <span>{current.label}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2">
          <div className="min-w-30 rounded-2xl bg-white p-2 shadow-xl">
            {LANGS.map((lang) => (
              <button
                key={lang.key}
                type="button"
                onClick={() => handleSelect(lang)}
                className={`
                  flex w-full items-center gap-3
                  rounded-xl px-3 py-2
                  text-sm font-semibold
                  transition
                  ${
                    current.key === lang.key
                      ? 'bg-gray-100 text-primary'
                      : 'text-primary hover:bg-gray-100'
                  }
                `}
              >
                <Image src={lang.flag} alt={lang.code} width={22} height={22} />
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
