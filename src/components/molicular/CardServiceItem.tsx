'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type CardServiceItemProps = {
  image: string;
  title: string;
  description: string;
  features?: string[];
};

const CardServiceItem = ({ image, title, description, features }: CardServiceItemProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="flex flex-col h-full items-center text-center gap-6 px-6 py-8 md:px-8 md:py-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1761b6]/20 transition-all duration-500 group"
    >
      {/* Image wrapper with glow */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
        <motion.div
          className="relative h-28 w-28 md:h-32 md:w-32 ring-4 ring-white shadow-lg rounded-full z-10 bg-white"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: 'spring' }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-full object-cover p-1"
          />
        </motion.div>
      </div>

      {/* Title */}
      <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-[#1761b6] transition-colors">{title}</h4>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">{description}</p>

      {/* Features List (Added to make it more detailed) */}
      {features && (
        <ul className="w-full mt-2 space-y-2 text-left border-t border-gray-50 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={14} className="text-[#1761b6] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default CardServiceItem;
