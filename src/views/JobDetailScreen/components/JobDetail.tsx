import { JobDetail as JobDetailData } from '@/types/jobCard';
import React from 'react';
import JobDetailTitle from './JobDetailTitle';
import JobTabs from './JobTabs';

type JobDetailProps = {
  jobDetail: JobDetailData | undefined;
};

const JobDetail = ({ jobDetail }: JobDetailProps) => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-5">
      {jobDetail && (
        <JobDetailTitle
          title={jobDetail.title}
          employmentType={jobDetail.employmentType}
          category={jobDetail.category}
          workType={jobDetail.workType}
          location={jobDetail.location}
        />
      )}
      {jobDetail && <JobTabs jobDetail={jobDetail} />}
    </div>
  );
};

export default JobDetail;
