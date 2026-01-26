'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  const { t } = useI18n();

  const slogan = t('contact.description').split(' ');
  return (
    <div className="relative mt-2 h-[60vh] w-full md:mt-0 lg:h-[75vh]">
      {/* Background image */}
      <Image
        src="/images/service_banner.png"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="w-full lg:w-4/5 mx-auto absolute inset-0 z-10 flex flex-col justify-center gap-4 px-4 text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold"
        >
          {t('common.contact')}
        </motion.h1>

        {/* Slogan – xuất hiện từng từ */}
        <motion.p
          initial="hidden"
          animate="visible"
          className="text-3xl flex flex-wrap gap-x-2 w-full lg:w-3/5"
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
