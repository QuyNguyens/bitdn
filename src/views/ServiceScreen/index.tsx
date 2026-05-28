'use client';
import { YOU_MIGHT_LIKE_DATA } from '@/constants/data';
import Service from '../HomeScreen/components/Service';
import Banner from './components/Banner';
import YouMightLikeSlider from './components/YouMightLike';
import WorkProcess from './components/WorkProcess';
import Commitments from './components/Commitments';
import FAQ from './components/FAQ';

const ServiceScreen = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Service />
      <WorkProcess />
      <Commitments />
      <FAQ />
      <YouMightLikeSlider items={YOU_MIGHT_LIKE_DATA}/>
    </div>
  );
};

export default ServiceScreen;
