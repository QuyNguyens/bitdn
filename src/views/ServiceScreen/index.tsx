'use client';
import { YOU_MIGHT_LIKE_DATA } from '@/constants/data';
import Service from '../HomeScreen/components/Service';
import Banner from './components/Banner';
import YouMightLikeSlider from './components/YouMightLike';

type Props = {};

const ServiceScreen = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Service />
      <YouMightLikeSlider items={YOU_MIGHT_LIKE_DATA}/>
    </div>
  );
};

export default ServiceScreen;
