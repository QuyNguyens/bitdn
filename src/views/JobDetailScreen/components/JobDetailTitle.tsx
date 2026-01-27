'use client';

import { JobCardProps } from '@/types/jobCard';
import { Briefcase, Users, MapPin, Building2 } from 'lucide-react';
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
    <div className="w-full flex flex-col gap-4 px-2">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-3xl font-semibold">{title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>{employmentType}</span>
        </div>

        <div className="flex items-center gap-2">
          <Building2 size={16} />
          <span>{workType}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>{category}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetailTitle;
