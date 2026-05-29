'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Footer from './components/Footer';
import HeaderBottom from './components/HeaderBottom';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="flex flex-col relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1761b6] to-[#4ea5ff] origin-left z-50"
        style={{ scaleX }}
      />
      {/* <HeaderBottom /> */}
      {children}
      <Footer />
    </main>
  );
}
