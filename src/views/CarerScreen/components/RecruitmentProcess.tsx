'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Briefcase, CheckCircle } from 'lucide-react';

const RecruitmentProcess = () => {
  const { t } = useI18n();

  const steps = [
    { icon: FileText, title: t('careerExtra.process.items.apply.title'), desc: t('careerExtra.process.items.apply.desc') },
    { icon: MessageSquare, title: t('careerExtra.process.items.interview.title'), desc: t('careerExtra.process.items.interview.desc') },
    { icon: Briefcase, title: t('careerExtra.process.items.probation.title'), desc: t('careerExtra.process.items.probation.desc') },
    { icon: CheckCircle, title: t('careerExtra.process.items.official.title'), desc: t('careerExtra.process.items.official.desc') },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">{t('careerExtra.process.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            {t('careerExtra.process.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('careerExtra.process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-100 z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-5 bg-white rounded-full border-4 border-gray-50 shadow-sm text-[#1761b6] mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed px-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
