'use client';
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import { JobDetail as JobDetailData } from '@/types/jobCard';
import { useParams } from 'next/navigation';
import { JOBS } from '@/constants/data';
import JobDetailTitle from './components/JobDetailTitle';
import JobDetail from './components/JobDetail';

const JobDetailScreen = () => {
  const [jobDetail, setJobDetail] = useState<JobDetailData | undefined>();
  const params = useParams();
  const slug = params.slug as string;

  const generateJobSlug = (title: string, id: string) => {
    return title.toLowerCase().replaceAll(' ', '-') + '-' + id;
  };

  useEffect(() => {
    const job = JOBS.filter((j) => generateJobSlug(j.title, j.id) === slug)[0];
    setJobDetail(job);
  }, [slug]);

  return (
    <div className="flex flex-col gap-10">
      <Banner title={jobDetail?.title || ''} />
      <JobDetail jobDetail={jobDetail}/>
    </div>
  );
};

export default JobDetailScreen;
