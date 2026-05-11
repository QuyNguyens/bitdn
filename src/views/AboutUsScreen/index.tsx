'use client';
import AboutUs from '../HomeScreen/components/AboutUs';
import Banner from './components/Banner';
import CompanyInfoCard from './components/CompanyInfo';
import CoreValues from './components/CoreValues';
import CoreTeam from './components/CoreTeam';

type Props = {};

const AboutUsScreen = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <Banner />
      <CoreValues />
      <CompanyInfoCard />
      <CoreTeam />
      <AboutUs />
    </div>
  );
};

export default AboutUsScreen;
