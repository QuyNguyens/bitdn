'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import WhyChooseCard from '@/components/molicular/WhyChooseCard';
import WrapComponent from '@/components/molicular/WrapComponent';
import { WHY_CHOOSE_US } from '@/constants/routes';
import { useI18n } from '@/i18n/I18nProvider';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const WhyChooseUs = () => {
  const { t } = useI18n();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 my-10">
      {/* Background image with Parallax */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 h-[140%] w-full top-[-20%]">
        <Image
          src="/images/banner_home.png"
          alt="Why choose us background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Modern Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      {/* Content */}
      <WrapComponent>
        <div className="relative z-10 w-full lg:w-5/6 mx-auto">
          {/* Title animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
              {t('whyChooseUs.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1761b6] to-[#4ea5ff] mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <WhyChooseCard
                  key={item.key}
                  icon={Icon}
                  title={t(`whyChooseUs.items.${item.key}.title`)}
                  desc={t(`whyChooseUs.items.${item.key}.desc`)}
                />
              );
            })}
          </motion.div>
        </div>
      </WrapComponent>
    </section>
  );
};

export default WhyChooseUs;
