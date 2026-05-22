'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const GlobalLoading = () => {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  // Hiện loading khi ứng dụng lần đầu load
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 0);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 400);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Logo loader */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
          <div className="absolute inset-0 rounded-full border-4 border-t-[#1761b6] animate-spin" />
          <span className="text-[#1761b6] font-bold text-xs tracking-widest">BIT</span>
        </div>
        <p className="text-sm text-gray-400 font-light tracking-wide animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;
