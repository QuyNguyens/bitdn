'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const WorkProcess = () => {
  const { t } = useI18n();

  const steps = [
    { icon: MessageSquare, title: t('serviceExtra.process.items.consult.title'), desc: t('serviceExtra.process.items.consult.desc'), color: 'from-blue-500 to-cyan-400' },
    { icon: PenTool, title: t('serviceExtra.process.items.design.title'), desc: t('serviceExtra.process.items.design.desc'), color: 'from-purple-500 to-pink-400' },
    { icon: Code, title: t('serviceExtra.process.items.develop.title'), desc: t('serviceExtra.process.items.develop.desc'), color: 'from-emerald-500 to-teal-400' },
    { icon: Rocket, title: t('serviceExtra.process.items.deliver.title'), desc: t('serviceExtra.process.items.deliver.desc'), color: 'from-orange-500 to-amber-400' },
  ];

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t('serviceExtra.process.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            {t('serviceExtra.process.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('serviceExtra.process.subtitle')}
          </p>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-orange-200 z-0" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
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

export default WorkProcess;
