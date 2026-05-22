'use client';

import { useI18n } from '@/i18n/I18nProvider';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Globe } from 'lucide-react';

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
        className="mb-8 md:mb-12 text-center"
      >
        <span className="section-badge">{t('company.globalPresence')}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mt-4">
          {t('company.profile')}
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          {t('company.globalDesc')}
        </p>
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
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Vietnam Office Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#1761b6]/10 flex items-center justify-center text-[#1761b6]">
                <Building2 size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{t('company.headquarters')}</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-gray-800">
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('company.name')}：</span>
                <span>{t('company.nameValue')}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('company.ceo')}：</span>
                <span>{t('company.ceoValue')}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('company.founded')}：</span>
                <span>{t('company.foundedValue')}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('company.employees')}：</span>
                <span>
                  {t('company.employeesValue')}
                  <span className="text-gray-500 ml-1">({t('company.employeesNote')})</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Japan Office Card */}
          <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-white to-red-50/30 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Globe size={22} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{t('company.japanBranch')}</h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-gray-800">
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('company.name')}：</span>
                <span>{t('company.japanName')}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-1">
                <span className="font-bold text-gray-900 shrink-0 min-w-[130px]">{t('contactExtra.address')}：</span>
                <span>{t('company.japanAddress')}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">{t('company.japanDesc')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfoCard;
