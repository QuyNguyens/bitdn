import CardServiceItem from '@/components/molicular/CardServiceItem';
import WrapComponent from '@/components/molicular/WrapComponent';
import { SERVICE_ITEMS } from '@/constants/routes';
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

  return (
    <WrapComponent>
      <motion.div
        className="w-full lg:w-4/5 px-2 md:px-0 flex flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h3
          variants={itemVariants}
          className="text-3xl text-center font-bold"
        >
          {t('services.title')}
        </motion.h3>

        {/* Service list */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICE_ITEMS.map(item => (
            <motion.div key={item.key} variants={itemVariants}>
              <CardServiceItem
                image={item.image}
                title={t(`services.${item.key}.title`)}
                description={t(`services.${item.key}.description`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </WrapComponent>
  );
};

export default Service;
