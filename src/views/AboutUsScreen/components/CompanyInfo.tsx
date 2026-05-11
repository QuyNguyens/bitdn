'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CompanyInfoCard = () => {
  const { t } = useI18n();

  return (
    <section className="w-full lg:w-4/5 mx-auto px-4 md:px-6 py-6">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-12 w-full flex justify-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gradient">
          {t('company.profile')}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] shadow-lg group"
        >
          <Image
            src="/images/companyInfo.png"
            alt="Bit Da Nang Office"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-md flex items-center"
        >
          <ul className="space-y-5 text-sm md:text-base text-gray-800 w-full">
            <li className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="font-bold text-gray-900 shrink-0 min-w-[140px]">{t('company.name')}：</span>
              <span>{t('company.nameValue')}</span>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="font-bold text-gray-900 shrink-0 min-w-[140px]">{t('company.ceo')}：</span>
              <span>{t('company.ceoValue')}</span>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="font-bold text-gray-900 shrink-0 min-w-[140px]">{t('company.founded')}：</span>
              <span>{t('company.foundedValue')}</span>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-start gap-1">
              <span className="font-bold text-gray-900 shrink-0 min-w-[140px]">{t('company.employees')}：</span>
              <span>
                {t('company.employeesValue')}
                <span className="text-gray-500 ml-1">{t('company.employeesNote')}</span>
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfoCard;
