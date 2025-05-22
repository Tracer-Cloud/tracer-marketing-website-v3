'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

// Animation configuration
const animationConfig = { delay: 0.001, duration: 1.8, ease: [0.6, 0, 0.38, 1] };

// Animation variants
const headingVariant: Variants = {
  hidden: { x: -50, y: -50 },
  visible: { x: 0, y: 0, transition: animationConfig },
};

const subheadingVariant = headingVariant;
const paragraphVariant = headingVariant;

// Slide diagonally from top-left into place
const imageVariant: Variants = {
  hidden: { x: -200, y: -250 },
  visible: { x: 0, y: -55, transition: { ...animationConfig, duration: 2.2 } },
};

const linesVariant: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: animationConfig },
};

export default function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const [refreshKey, setRefreshKey] = useState(Date.now());

  // This effect runs on component mount and handles the animation
  useEffect(() => {
    setAnimate(true);

    // This is the key part: add an event listener for page visibility changes
    // This will detect when the user refreshes the page or returns to it
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Reset animation state
        setAnimate(false);
        // Force remount by changing the key
        setRefreshKey(Date.now());
        // Small timeout to ensure animation reset
        setTimeout(() => setAnimate(true), 50);
      }
    };

    // Add event listener for page visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Also handle page refresh using beforeunload
    const handleBeforeUnload = () => {
      setAnimate(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <section
      key={refreshKey}
      className="h-[640px] bg-black text-white lg:h-[800px]"
    >
      <motion.div
        className="relative flex h-full flex-col items-center justify-center overflow-hidden lg:block bg-[url(/home/hero-bg-lines.svg)] bg-contain bg-center bg-repeat-y mx-auto max-w-[1440px] w-full"
        variants={linesVariant}
        initial="hidden"
        animate={animate ? 'visible' : 'hidden'}
      >

        {/* HEADINGS */}
        <motion.h1
          variants={headingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-none
                     md:-translate-y-1/2 md:leading-normal
                     lg:absolute lg:left-4 lg:top-1/2 lg:font-normal lg:-tracking-[9px]"
        >
          Accelerating
        </motion.h1>

        <motion.h2
          variants={subheadingVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-none
                     md:-translate-y-1/2
                     lg:absolute lg:bottom-0 lg:right-4 lg:text-right lg:font-normal lg:leading-[104px] lg:-tracking-[10px]"
        >
          the New Dawn <br className="hidden md:block" /> of AI in Science
        </motion.h2>

        <motion.div
          variants={paragraphVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="relative z-10 font-chakra-petch text-base lg:absolute lg:bottom-40 lg:left-4"
        >
          <p className="mt-4 text-sm md:max-w-[453px] md:text-base">
            Tracer combines cutting-edge technological advances with the deep
            understanding of scientific industries to give insights into
            enterprises&apos; digital and AI acceleration.
          </p>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="absolute left-0 top-[70px] z-[2] w-full md:bottom-auto md:left-auto md:right-auto md:top-[50px]"
        >
          <Image
            src="/home/hero.png"
            alt="hero"
            width={1416}
            height={808}
            className="h-full w-full scale-[3.5] md:scale-100"
          />
        </motion.div>




      </motion.div>
    </section>
  );
}
