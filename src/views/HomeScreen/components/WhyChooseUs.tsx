import Image from 'next/image';
import { motion } from 'framer-motion';
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

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/banner_home.png"
        alt="Why choose us background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <WrapComponent>
        <div className="relative z-10 w-full lg:w-4/5">
          {/* Title animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center text-3xl font-bold text-white"
          >
            {t('whyChooseUs.title')}
          </motion.h2>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3"
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
