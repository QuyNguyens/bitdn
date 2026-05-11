'use client';

import { useMemo } from 'react';
import { JOBS } from '@/constants/data';
import JobCard from './JobCard';
import { useRouter } from 'next/navigation';
import { JobFilterValues } from '..';
import { useI18n } from '@/i18n/I18nProvider';
import { motion } from 'framer-motion';

type Props = {
  filter: JobFilterValues;
};

const JobItems = ({ filter }: Props) => {
  const router = useRouter();
  const { t } = useI18n();

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

  return (
    <section className="w-full lg:w-4/5 mx-auto px-4 md:px-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          {t('career.jobItems.openPositions')}
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
          {t('career.jobItems.slogan')}
        </p>
      </motion.div>

      <div className="mt-8 flex flex-col gap-4">
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">{t('career.jobItems.noJobsFound')}</p>
          </div>
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
    </section>
  );
};

export default JobItems;
