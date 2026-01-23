'use client';
import AboutUs from '../HomeScreen/components/AboutUs';
import CompanyInfoCard from './components/CompanyInfo';

type Props = {};

const AboutUsScreen = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <AboutUs />
      <CompanyInfoCard />
    </div>
  );
};

export default AboutUsScreen;
