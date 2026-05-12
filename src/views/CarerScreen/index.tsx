'use client';

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Banner filter={filter} setFilter={setFilter} handleSubmit={handleSubmit} />
      <JobItems filter={appliedFilter} />
      <RecruitmentProcess />
      <Benefits />
    </div>
  );
};

export default CarerScreen;
