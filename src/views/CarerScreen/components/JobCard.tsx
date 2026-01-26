'use client';

import { JobCardProps } from '@/types/jobCard';
import { Button, Chip } from '@heroui/react';
import { Briefcase, Users, MapPin, Building2 } from 'lucide-react';

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
  return (
    <div
      className="w-full bg-white rounded-xl p-6 flex flex-col gap-4
  shadow-[0_0_16px_rgba(0,0,0,0.08)]
  ring-1 ring-black/5"
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-orange-600">{title}</h3>

          <div className="flex gap-2 mt-2 flex-wrap">
            {level && (
              <Chip
                variant="bordered"
                className="text-sky-600 border-sky-600 rounded-2xl!"
                size="sm"
              >
                {level}
              </Chip>
            )}

            {status && (
              <Chip
                variant="bordered"
                className="text-green-600 border-green-600 rounded-2xl!"
                size="sm"
              >
                {status}
              </Chip>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            color="warning"
            radius="full"
            size="sm"
            className="text-white font-bold"
            onPress={onViewMore}
          >
            View more
          </Button>
          <div className="text-right text-sm text-gray-500 italic">Posted on {postedDate}</div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
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

export default JobCard;
