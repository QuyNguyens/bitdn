'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { Eye, Target, Heart } from 'lucide-react';

const CoreValues = () => {
  const { t } = useI18n();

  const values = [
    { icon: Target, title: t('aboutExtra.coreValues.items.mission.title'), desc: t('aboutExtra.coreValues.items.mission.desc') },
    { icon: Eye, title: t('aboutExtra.coreValues.items.vision.title'), desc: t('aboutExtra.coreValues.items.vision.desc') },
    { icon: Heart, title: t('aboutExtra.coreValues.items.values.title'), desc: t('aboutExtra.coreValues.items.values.desc') },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {t('aboutExtra.coreValues.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('aboutExtra.coreValues.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#1761b6]/20 transition-all duration-300 flex flex-col items-center text-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-4 bg-[#1761b6]/10 rounded-full text-[#1761b6]">
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
