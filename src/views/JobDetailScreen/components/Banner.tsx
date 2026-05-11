'use client';

import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

type BannerProps = {
  title: string;
};

const Banner = ({ title }: BannerProps) => {
  const { t } = useI18n();
  return (
    <div className="relative mt-2 h-[20vh] md:h-[25vh] w-full overflow-hidden md:mt-0">
      {/* Background image */}
      <Image
        src="/images/job_banner.png"
        alt="Job Detail Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
    </div>
  );
};

export default Banner;
