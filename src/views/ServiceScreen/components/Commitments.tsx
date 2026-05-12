'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { Shield, Clock, Award } from 'lucide-react';

const Commitments = () => {
  const { t } = useI18n();

  const items = [
    { key: 'security', icon: Shield, gradient: 'from-blue-500 to-cyan-500' },
    { key: 'timeline', icon: Clock, gradient: 'from-purple-500 to-pink-500' },
    { key: 'quality', icon: Award, gradient: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">{t('serviceExtra.commitments.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            {t('serviceExtra.commitments.title')}
          </h2>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#1761b6]/20 hover:shadow-xl transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-[#1761b6] transition-colors">
                  {t(`serviceExtra.commitments.items.${item.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {t(`serviceExtra.commitments.items.${item.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Commitments;
