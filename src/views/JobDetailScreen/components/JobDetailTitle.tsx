'use client';

import { Briefcase, Users, MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

type JobDetailTitleProps = {
  title: string;
  employmentType: string;
  category: string;
  workType: string;
  location: string;
};

const JobDetailTitle = ({
  title,
  employmentType,
  category,
  workType,
  location,
}: JobDetailTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col gap-5 px-4 md:px-6"
    >
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h1>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2.5">
          <Briefcase size={16} className="text-gray-400 shrink-0" />
          <span>{employmentType}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <Building2 size={16} className="text-gray-400 shrink-0" />
          <span>{workType}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <Users size={16} className="text-gray-400 shrink-0" />
          <span>{category}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <MapPin size={16} className="text-gray-400 shrink-0" />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetailTitle;
