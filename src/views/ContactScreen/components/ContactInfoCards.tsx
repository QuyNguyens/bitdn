'use client';

import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfoCards = () => {
  const { t } = useI18n();

  const info = [
    { icon: MapPin, title: t('contactExtra.address'), desc: '37 Thanh Vinh 10, Liên Chiểu, Đà Nẵng' },
    { icon: Phone, title: t('contactExtra.phone'), desc: '(+84) 934 845 393' },
    { icon: Mail, title: t('contactExtra.email'), desc: 'info@bitdanang.com' },
    { icon: Clock, title: t('contactExtra.hours'), desc: t('contactExtra.hoursValue') },
  ];

  return (
    <div className="w-full py-10 bg-white">
      <div className="w-full lg:w-4/5 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#1761b6]/20 transition-all duration-300 flex flex-col items-center text-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="p-3 bg-[#1761b6]/10 rounded-full text-[#1761b6]">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
