'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Service from './components/Service';
import Solution from './components/Solution';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import TechStack from './components/TechStack';

const HomeScreen = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full flex flex-col">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Banner />
      <Solution />
      <Stats />
      <div className="py-10">
        <Service />
      </div>
      <AboutUs />
      <TechStack />
      <WhyChooseUs/>
    </div>
  );
};

export default HomeScreen;
