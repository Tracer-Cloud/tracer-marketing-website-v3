'use client';

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

const AboutTracer = () => {
  const sectionRef = useRef(null);
  const [yPosition, setYPosition] = useState(0);
  const lastScrollY = useRef(0);

  // Get scroll position
  const { scrollY } = useScroll();

  // Directly track scroll changes and update position
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Determine scroll direction
    const direction = latest > lastScrollY.current ? 1 : -1;
    lastScrollY.current = latest;

    // Update position based on direction (move up to 20px)
    setYPosition(prev => {
      // Move in the direction of scroll, but limit the range
      const newPos = prev + (direction * 3); // Very subtle movement per scroll event
      return Math.max(-20, Math.min(20, newPos)); // Smaller range for subtlety
    });
  });

  return (
    <section ref={sectionRef} className="bg-foreground pt-16 pb-8 md:pt-24 md:pb-16 relative overflow-hidden">
      <div className="container_fluid flex items-center justify-center">
        <div className="w-full max-w-[398px] relative mt-[-40px] flex items-center justify-center min-h-[200px]">
          <motion.p
            className="w-full text-center font-britti-sans text-sm font-normal text-background md:text-base"
            style={{ y: yPosition }} // Apply scroll-based movement using state
        >
          Tracer combines cutting-edge technological advances with the deep
          understanding of scientific industries to give insights into
          enterprises&apos; digital and AI acceleration.
          <br />
          <br />
          To generate more cancer treatments faster. To advance space
          exploration through faster rocket design. And to make science fiction
          reality.
        </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutTracer;
