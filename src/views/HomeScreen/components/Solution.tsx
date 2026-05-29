'use client';

import WrapComponent from '@/components/molicular/WrapComponent';
import { Button } from '@heroui/react';
import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const Solution = () => {
  const { t } = useI18n();

  return (
    <WrapComponent>
      <div className="relative flex flex-col lg:flex-row p-6 lg:p-12 w-full gap-12 lg:w-5/6 items-center glassmorphism rounded-3xl mt-12 mb-8 shadow-xl overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 blur-[120px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full z-0 pointer-events-none" />

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative shrink-0 z-10 w-full lg:w-1/2"
        >
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/work_image.png"
              alt="work image"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="flex flex-col justify-center gap-6 z-10 lg:w-1/2"
        >
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-gradient">
            {t('solution.title')}
          </h3>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>{t('solution.description1')}</p>
            <p>{t('solution.description2')}</p>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="mt-4"
          >
            <Button 
              className="w-fit px-8 py-6 text-white font-medium bg-gradient-to-r from-[#1761b6] to-[#4ea5ff] border-none shadow-[0_4px_14px_0_rgba(23,97,182,0.39)] hover:shadow-[0_6px_20px_rgba(23,97,182,0.23)] hover:bg-[rgba(23,97,182,0.9)] rounded-full" 
              endContent={<CircleArrowRight className="ml-2" />}
            >
              {t('common.readMore')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </WrapComponent>
  );
};

export default Solution;
