'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Banner from './components/Banner';
import ContactFormSection from './components/ContactFormSection';
import ContactHeader from './components/Header';
import ContactInfoCards from './components/ContactInfoCards';

const ContactScreen = () => {
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
      <ContactHeader />
      <ContactInfoCards />
      <ContactFormSection />
    </div>
  );
};

export default ContactScreen;
