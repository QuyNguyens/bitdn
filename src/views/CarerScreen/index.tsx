'use client';

import { useState } from 'react';
import Banner from './components/Banner';
import JobItems from './components/JobItems';
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
    </div>
  );
};

export default CarerScreen;
