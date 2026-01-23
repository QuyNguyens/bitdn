import AboutUsItem from '@/components/molicular/AboutUsItem';
import { ABOUT_US_ITEMS } from '@/constants/routes';
import { useI18n } from '@/i18n/I18nProvider';
import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  const { t } = useI18n();

  return (
    <motion.div
      className="w-full py-10 flex flex-col gap-10 justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Title + description */}
      <motion.div variants={fadeUp}>
        <div className="w-full flex gap-6 items-center justify-center">
          <Divider className="my-4 w-20 h-0.5" />
          <h3 className="text-3xl font-bold">{t('about.title')}</h3>
          <Divider className="my-4 w-20 h-0.5" />
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full lg:w-4/5 px-2 lg:px-0 space-y-2">
            <p>{t('about.description.0')}</p>
            <p>{t('about.description.1')}</p>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div className="w-full lg:w-4/5 flex gap-10 px-2 lg:px-0" variants={containerVariants}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          {ABOUT_US_ITEMS.map((item) => (
            <motion.div key={item.key} variants={fadeUp}>
              <AboutUsItem
                image={item.image}
                title={t(`features.${item.key}.title`)}
                description={t(`features.${item.key}.description`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
