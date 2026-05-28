'use client';

import { useState } from 'react';
import Banner from './components/Banner';
import JobItems from './components/JobItems';
import Benefits from './components/Benefits';
import RecruitmentProcess from './components/RecruitmentProcess';

export type JobFilterValues = {
  keyword: string;
  position?: string;
  location?: string;
  level?: string;
};

const CarerScreen = () => {
  const [filter, setFilter] = useState<JobFilterValues>({
    keyword: '',
    position: '',
    location: '',
    level: '',
  });

  const [appliedFilter, setAppliedFilter] = useState<JobFilterValues>(filter);

  const handleSubmit = () => {
    setAppliedFilter(filter);
  };

  return (
    <div className="flex flex-col gap-10">
      <Banner filter={filter} setFilter={setFilter} handleSubmit={handleSubmit} />
      <JobItems filter={appliedFilter} />
      <RecruitmentProcess />
      <Benefits />
    </div>
  );
};

export default CarerScreen;
