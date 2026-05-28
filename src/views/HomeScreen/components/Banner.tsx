'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Banner = () => {
  const { t } = useI18n();
  const bannerRef = useRef(null);

  const slogan = t('banner.slogan').split(' ');

  return (
    <div ref={bannerRef} className="relative mt-2 h-[80vh] w-full overflow-hidden md:mt-0 lg:h-[90vh]">
      {/* Background image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/banner_home.png"
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/50 z-0" />



      {/* Content */}
      <div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-4 text-white"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 shadow-md"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/90">{t('banner.subtitle')}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center pb-2"
        >
          BIT DA NANG
        </motion.h1>

        {/* Slogan – animated word by word */}
        <motion.p
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl lg:text-3xl text-center flex flex-wrap justify-center gap-x-3 font-medium text-white/90 max-w-4xl"
        >
          {slogan.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Link
            href="/contact"
            className="btn-primary text-base px-8 py-4 shadow-[0_4px_20px_rgba(23,97,182,0.5)]"
          >
            {t('banner.cta')}
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/service"
            className="flex items-center justify-center text-base px-8 py-4 text-[#1761b6] bg-white rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            {t('banner.ctaSecondary')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
