'use client';

import { Spinner } from '@heroui/react';
import { useEffect, useState } from 'react';

const MIN_LOADING_TIME = 300; // 1s

const GlobalLoading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, MIN_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="lg" color="primary" label="Loading..." labelColor="primary" />
      </div>
    </div>
  );
};

export default GlobalLoading;
