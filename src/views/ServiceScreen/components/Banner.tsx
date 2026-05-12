'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  const { t } = useI18n();

  const slogan = t('serviceExtra.intro').split(' ');
  return (
    <div className="relative mt-2 h-[50vh] w-full overflow-hidden md:mt-0 lg:h-[65vh]">
      {/* Background image */}
      <Image
        src="/images/service.png"
        alt="Service Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

      {/* Content */}
      <div className="w-full lg:w-4/5 mx-auto absolute inset-0 z-10 flex flex-col justify-center gap-5 px-6 md:px-8 text-white">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md"
        >
          {t('menu.service')}
        </motion.h1>

        {/* Slogan */}
        <motion.p
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl lg:text-2xl flex flex-wrap gap-x-2 w-full lg:w-3/5 text-gray-200 leading-relaxed"
        >
          {slogan.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
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
