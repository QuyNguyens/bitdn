'use client';

import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Service from './components/Service';
import Solution from './components/Solution';
import WhyChooseUs from './components/WhyChooseUs';

const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Banner />
      <Solution />
      <Service />
      <AboutUs />
      <WhyChooseUs/>
    </div>
  );
};

export default HomeScreen;
