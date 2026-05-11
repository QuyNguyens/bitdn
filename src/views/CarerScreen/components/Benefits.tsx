'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { Heart, Coffee, Shield, LineChart, Smile, Zap } from 'lucide-react';

const Benefits = () => {
  const { t } = useI18n();

  const benefits = [
    { icon: Heart, title: t('careerExtra.benefits.items.insurance.title'), desc: t('careerExtra.benefits.items.insurance.desc') },
    { icon: Coffee, title: t('careerExtra.benefits.items.environment.title'), desc: t('careerExtra.benefits.items.environment.desc') },
    { icon: Shield, title: t('careerExtra.benefits.items.income.title'), desc: t('careerExtra.benefits.items.income.desc') },
    { icon: LineChart, title: t('careerExtra.benefits.items.growth.title'), desc: t('careerExtra.benefits.items.growth.desc') },
    { icon: Smile, title: t('careerExtra.benefits.items.culture.title'), desc: t('careerExtra.benefits.items.culture.desc') },
    { icon: Zap, title: t('careerExtra.benefits.items.time.title'), desc: t('careerExtra.benefits.items.time.desc') },
  ];

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            {t('careerExtra.benefits.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('careerExtra.benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="p-3 bg-blue-50 rounded-xl h-fit text-[#1761b6]">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
