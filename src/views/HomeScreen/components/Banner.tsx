'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  const { t } = useI18n();

  const slogan = t('banner.slogan').split(' ');

  return (
    <div className="relative mt-2 h-[80vh] w-full md:mt-0 lg:h-[90vh]">
      {/* Background image */}
      <Image
        src="/images/banner_home.png"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold"
        >
          BIT DA NANG
        </motion.h1>

        {/* Slogan – xuất hiện từng từ */}
        <motion.p
          initial="hidden"
          animate="visible"
          className="text-3xl text-center flex flex-wrap justify-center gap-x-2"
        >
          {slogan.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
