'use client';
import AboutUs from '../HomeScreen/components/AboutUs';
import Banner from './components/Banner';
import CompanyInfoCard from './components/CompanyInfo';

type Props = {};

const AboutUsScreen = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <Banner />
      <CompanyInfoCard />
      <AboutUs />
    </div>
  );
};

export default AboutUsScreen;
