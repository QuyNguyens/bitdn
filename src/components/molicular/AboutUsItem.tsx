'use client';

import Image from 'next/image';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type AboutUsItemProps = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

const AboutUsItem = ({ image, title, description, href }: AboutUsItemProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow duration-300 group"
    >
      {/* Image */}
      <motion.div
        className="relative h-48 w-full overflow-hidden"
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6 relative">
        <h3 className="line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-[#1761b6] transition-colors">{title}</h3>

        <p className="line-clamp-3 text-sm text-gray-600 leading-relaxed">{description}</p>

        <motion.div className="mt-auto flex justify-end">
          <Button 
            as={Link}
            href={href || '#'}
            size="sm" 
            variant="light"
            className="w-fit text-[#1761b6] font-semibold hover:bg-blue-50 group/btn"
            endContent={<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />}
          >
            {t('common.readMore')}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUsItem;
