'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import JobSearchFilter from './JobSearchFilter';
import { JobFilterValues } from '..';
import { JOB_LEVELS, JOB_POSITIONS, VIETNAM_LOCATIONS } from '@/constants/data';

type BannerProps = {
  filter: JobFilterValues;
  setFilter: (value: JobFilterValues) => void;
  handleSubmit: () => void;
};
const Banner = ({ filter, setFilter, handleSubmit }: BannerProps) => {
  const { t } = useI18n();

  return (
    <div className="relative mt-2 h-[60vh] w-full md:mt-0">
      {/* Background image */}
      <Image
        src="/images/career-banner.png"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="w-full lg:w-4/5 mt-10 lg:mt-0 mx-auto absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-white">
        <JobSearchFilter
          value={filter}
          onChange={setFilter}
          onSubmit={handleSubmit}
          positions={JOB_POSITIONS}
          locations={VIETNAM_LOCATIONS}
          levels={JOB_LEVELS}
        />
        ;
      </div>
    </div>
  );
};

export default Banner;
