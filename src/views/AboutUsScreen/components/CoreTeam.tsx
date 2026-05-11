'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <span className="text-sm font-bold text-[#1761b6] uppercase tracking-widest">Our People</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            {t('aboutExtra.team.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {t('aboutExtra.team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-50">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-xs">Avatar</div>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
              <p className="text-sm text-[#1761b6] font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
