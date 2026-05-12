'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User } from 'lucide-react';

const CoreTeam = () => {
  const { t } = useI18n();

  const members = [
    { name: 'Phạm Văn Nam', role: 'CEO & Founder', image: '/images/avatar_placeholder.png' },
    { name: 'Nguyễn Văn A', role: 'Technical Lead', image: '/images/avatar_placeholder.png' },
    { name: 'Trần Thị B', role: 'Project Manager', image: '/images/avatar_placeholder.png' },
    { name: 'Lê Văn C', role: 'Senior Developer', image: '/images/avatar_placeholder.png' },
  ];

  return (
    <div className="w-full py-20 bg-gray-50">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">{t('aboutExtra.team.badge')}</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            {t('aboutExtra.team.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('aboutExtra.team.subtitle')}
          </p>
          <div className="divider-gradient mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#1761b6]/20 transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:border-[#1761b6]/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <User size={48} className="text-gray-300 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1761b6] transition-colors">{member.name}</h3>
              <p className="text-sm text-[#1761b6] font-medium mt-1">{member.role}</p>
              <div className="w-12 h-0.5 bg-gray-100 mt-4 group-hover:w-20 group-hover:bg-[#1761b6]/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
