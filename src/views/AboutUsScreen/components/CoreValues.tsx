'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { Eye, Target, Heart } from 'lucide-react';

const CoreValues = () => {
  const { t } = useI18n();

  const values = [
    { icon: Target, title: t('aboutExtra.coreValues.items.mission.title'), desc: t('aboutExtra.coreValues.items.mission.desc'), gradient: 'from-[#1761b6] to-[#4ea5ff]' },
    { icon: Eye, title: t('aboutExtra.coreValues.items.vision.title'), desc: t('aboutExtra.coreValues.items.vision.desc'), gradient: 'from-emerald-500 to-teal-400' },
    { icon: Heart, title: t('aboutExtra.coreValues.items.values.title'), desc: t('aboutExtra.coreValues.items.values.desc'), gradient: 'from-purple-500 to-pink-400' },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-badge">{t('aboutExtra.coreValues.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            {t('aboutExtra.coreValues.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('aboutExtra.coreValues.subtitle')}
          </p>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#1761b6]/20 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center gap-5 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={`p-5 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-gray-900 text-xl">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
