'use client';

import AboutUs from '../HomeScreen/components/AboutUs';
import Banner from './components/Banner';
import CompanyInfoCard from './components/CompanyInfo';
import CoreValues from './components/CoreValues';
import CoreTeam from './components/CoreTeam';
import History from './components/History';

const AboutUsScreen = () => {

  return (
    <div className="flex flex-col min-h-screen">
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
