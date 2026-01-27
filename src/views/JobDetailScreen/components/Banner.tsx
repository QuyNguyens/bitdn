'use client';

import Image from 'next/image';
type BannerProps = {
  title: string;
};

const Banner = ({ title }: BannerProps) => {
  return (
    <div className="relative mt-2 h-[20vh] w-full md:mt-0">
      {/* Background image */}
      <Image
        src="/images/job_banner.png"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="w-full md:w-4/5 lg:w-3/5 absolute inset-0 z-10 pb-3 flex flex-col items-center justify-end gap-4 px-4 text-white">
        {/* Slogan – xuất hiện từng từ */}
        <div className="flex gap-2">
          <span className="bg-primary pl-px py-0.5 pr-2">Jobs</span>
          <span className="bg-primary pl-px py-0.5 pr-2">/</span>
          <span className="bg-primary pl-px py-0.5 pr-2 font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
