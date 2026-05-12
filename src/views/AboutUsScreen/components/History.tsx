'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const History = () => {
  const { t } = useI18n();

  const milestones = [
    { key: 'founded', year: '2024' },
    { key: 'growth', year: '2024' },
    { key: 'japan', year: '2025' },
    { key: 'future', year: '2026' },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t('aboutExtra.history.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
            {t('aboutExtra.history.title')}
          </h2>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="relative">
          {/* Vertical line - centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-100 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content side - full width on mobile, 5/12 on desktop */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 group ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#1761b6]/20 hover:shadow-xl transition-all duration-500 group-hover:bg-white relative">
                    {/* Triangle pointer - hidden on mobile, visible on desktop */}
                    <div className={`hidden md:block absolute top-6 w-3 h-3 bg-gray-50 group-hover:bg-white transform rotate-45 border-gray-100 ${
                      index % 2 === 0 ? '-right-1.5 border-r border-t' : '-left-1.5 border-l border-b'
                    }`} />
                    
                    <span className="text-[#1761b6] font-bold text-xl">{item.year}</span>
                    <h3 className="font-bold text-gray-900 text-lg mt-1">{t(`aboutExtra.history.items.${item.key}.title`)}</h3>
                    <p className="text-sm text-gray-600 mt-2 font-light leading-relaxed">{t(`aboutExtra.history.items.${item.key}.desc`)}</p>
                  </div>
                </div>

                {/* Center dot - absolute positioned */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#1761b6] to-[#4ea5ff] flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <Calendar size={14} className="md:hidden" />
                    <Calendar size={16} className="hidden md:block" />
                  </div>
                </div>

                {/* Empty side for layout on desktop */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
