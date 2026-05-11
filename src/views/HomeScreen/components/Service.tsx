'use client';

import CardServiceItem from '@/components/molicular/CardServiceItem';
import WrapComponent from '@/components/molicular/WrapComponent';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Service = () => {
  const { t } = useI18n();

  // Accessing arrays from translation files
  const services = [
    {
      key: 'software',
      image: '/images/service_1.png',
      features: t('serviceExtra.features.software') as unknown as string[],
    },
    {
      key: 'website',
      image: '/images/service_2.png',
      features: t('serviceExtra.features.website') as unknown as string[],
    },
    {
      key: 'mobile',
      image: '/images/service_3.png',
      features: t('serviceExtra.features.mobile') as unknown as string[],
    },
  ];

  return (
    <WrapComponent>
      <motion.div
        className="w-full lg:w-4/5 px-4 md:px-0 flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Title & Intro */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">Our Services</span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mt-2">
            {t('services.title')}
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {t('serviceExtra.intro')}
          </p>
        </motion.div>

        {/* Service list */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((item) => (
            <motion.div key={item.key} variants={itemVariants} className="h-full">
              <CardServiceItem
                image={item.image}
                title={t(`services.${item.key}.title`)}
                description={t(`services.${item.key}.description`)}
                features={item.features}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </WrapComponent>
  );
};

export default Service;
