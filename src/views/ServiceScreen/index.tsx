'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { YOU_MIGHT_LIKE_DATA } from '@/constants/data';
import Service from '../HomeScreen/components/Service';
import Banner from './components/Banner';
import YouMightLikeSlider from './components/YouMightLike';
import WorkProcess from './components/WorkProcess';
import Commitments from './components/Commitments';
import FAQ from './components/FAQ';

type Props = {};

const ServiceScreen = (props: Props) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col gap-10">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />
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
