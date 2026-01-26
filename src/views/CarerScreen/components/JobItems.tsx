'use client';

import { useMemo } from 'react';
import { JOBS } from '@/constants/data';
import JobCard from './JobCard';
import { useRouter } from 'next/navigation';
import { JobFilterValues } from '..';

type Props = {
  filter: JobFilterValues;
};

const JobItems = ({ filter }: Props) => {
  const router = useRouter();

  const generateJobSlug = (title: string, id: string) => {
    return title.toLowerCase().replaceAll(' ', '-') + '-' + id;
  };

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const keyword = filter.keyword?.toLowerCase().trim();

      const keywordMatch = !keyword || job.title.toLowerCase().includes(keyword);

      const positionMatch =
        !filter.position || job.title.toLowerCase() === filter.position.toLowerCase();

      const locationMatch =
        !filter.location || job.locationMatch.toLowerCase() === filter.location.toLowerCase();

      const levelMatch = !filter.level || job.level.toLowerCase() === filter.level.toLowerCase();

      return keywordMatch && positionMatch && locationMatch && levelMatch;
    });
  }, [filter]);
  console.log('filter: ', filter);
  return (
    <div className="w-full lg:w-4/5 mx-auto">
      <h1 className="text-4xl font-medium">Vị trí đang tuyển dụng</h1>
      <p className="mt-6">Hành trình đáng nhớ bắt đầu từ những cơ hội tuyệt vời!</p>

      <div className="mt-6 flex flex-col gap-4">
        {filteredJobs.length === 0 && (
          <p className="text-gray-500">Không tìm thấy vị trí phù hợp.</p>
        )}

        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            level={job.level}
            status={job.status}
            employmentType={job.employmentType}
            category={job.category}
            workType={job.workType}
            location={job.location}
            postedDate={job.postedDate}
            onViewMore={() => router.push(`/career/${generateJobSlug(job.title, job.id)}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobItems;
