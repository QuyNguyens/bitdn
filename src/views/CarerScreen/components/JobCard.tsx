'use client';

import { JobCardProps } from '@/types/jobCard';
import { Button, Chip } from '@heroui/react';
import { Briefcase, Users, MapPin, Building2, ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

const JobCard = ({
  title,
  level,
  status,
  employmentType,
  category,
  workType,
  location,
  postedDate,
  onViewMore,
}: JobCardProps) => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-2xl p-5 md:p-6 flex flex-col gap-4
        border border-gray-200 shadow-md
        transition-all duration-300
        hover:shadow-lg hover:border-[#1761b6]/30 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-[#1761b6]">{title}</h3>

          <div className="flex gap-2 mt-3 flex-wrap">
            {level && (
              <Chip
                variant="flat"
                className="text-sky-700 bg-sky-50"
                size="sm"
              >
                {level}
              </Chip>
            )}

            {status && (
              <Chip
                variant="flat"
                className="text-green-700 bg-green-50"
                size="sm"
              >
                {status}
              </Chip>
            )}
          </div>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3">
          <Button
            color="primary"
            radius="full"
            size="sm"
            className="font-medium"
            endContent={<ArrowRight size={14} />}
            onPress={onViewMore}
          >
            {t('career.jobCard.viewMore')}
          </Button>
          <div className="text-xs text-gray-400 italic">{t('career.jobCard.postedOn')} {postedDate}</div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Briefcase size={15} className="text-gray-400" />
          <span>{employmentType}</span>
        </div>

        <div className="flex items-center gap-2">
          <Building2 size={15} className="text-gray-400" />
          <span>{workType}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={15} className="text-gray-400" />
          <span>{category}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={15} className="text-gray-400" />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
