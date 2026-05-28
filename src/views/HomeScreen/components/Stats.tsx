'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, Award, Globe, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

// Small component for count up animation
const Counter = ({ value }: { value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [value, isInView, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  const { t } = useI18n();

  const stats = [
    { icon: Users, value: 45, suffix: '+', label: t('homeExtra.stats.engineers') },
    { icon: Globe, value: 10, suffix: '+', label: t('homeExtra.stats.partners') },
    { icon: Rocket, value: 100, suffix: '%', label: t('homeExtra.stats.agile') },
    { icon: Award, value: 5, suffix: '+', label: t('homeExtra.stats.experience') },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-24 text-white relative overflow-hidden">

      <div className="relative z-10 w-full lg:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center text-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md hover:border-[#1761b6]/50 hover:bg-white/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-4 bg-white/5 rounded-xl group-hover:bg-[#1761b6]/20 transition-colors">
              <item.icon size={32} className="text-[#4ea5ff] group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <Counter value={item.value} />{item.suffix}
            </span>
            <span className="text-sm text-gray-400 font-light tracking-wide">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
