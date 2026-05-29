'use client';

import { motion } from 'framer-motion';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Service from './components/Service';
import Solution from './components/Solution';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import TechStack from './components/TechStack';

const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col">
      
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
