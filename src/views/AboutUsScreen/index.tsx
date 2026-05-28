'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import AboutUs from '../HomeScreen/components/AboutUs';
import Banner from './components/Banner';
import CompanyInfoCard from './components/CompanyInfo';
import CoreValues from './components/CoreValues';
import CoreTeam from './components/CoreTeam';
import History from './components/History';

const AboutUsScreen = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Banner />
      <CoreValues />
      <CompanyInfoCard />
      <History />
      <CoreTeam />
      <AboutUs />
    </div>
  );
};

export default AboutUsScreen;
