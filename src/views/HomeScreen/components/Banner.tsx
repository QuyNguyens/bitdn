'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Banner = () => {
  const { t } = useI18n();
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const slogan = t('banner.slogan').split(' ');

  return (
    <div ref={bannerRef} className="relative mt-2 h-[80vh] w-full overflow-hidden md:mt-0 lg:h-[90vh]">
      {/* Background image with parallax */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 h-[120%] w-full">
        <Image
          src="/images/banner_home.png"
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/50 z-0" />

      {/* Content */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-white"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] text-center pb-2"
        >
          BIT DA NANG
        </motion.h1>

        {/* Slogan – animated word by word */}
        <motion.p
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl lg:text-4xl text-center flex flex-wrap justify-center gap-x-3 font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {slogan.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + 0.5,
                ease: 'easeOut',
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Banner;
