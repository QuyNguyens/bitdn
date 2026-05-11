'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 py-6 md:py-16 text-center"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
        {t('contact.header1')}{' '}
        <span className="text-gradient">{t('contact.header2')}</span>
      </h2>

      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {t('contact.title')}
      </p>
    </motion.div>
  );
};

export default ContactHeader;
