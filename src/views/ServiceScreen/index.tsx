'use client';
import Service from '../HomeScreen/components/Service';
import Banner from './components/Banner';

type Props = {};

const ServiceScreen = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Service />
    </div>
  );
};

export default ServiceScreen;
