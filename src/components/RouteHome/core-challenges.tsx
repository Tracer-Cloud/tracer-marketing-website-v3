'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { challenges, CoreChallenge } from "./data/core-challenges";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Challenge Card Component
const ChallengeCard = ({ challenge, index }: { challenge: CoreChallenge; index: number }) => {
  // Animation controls
  const controls = useAnimation();

  // Reference to track when element is in view
  const ref = React.useRef<HTMLDivElement>(null);

  // Set up intersection observer to trigger animation
  React.useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable to use in cleanup

    const observer = new IntersectionObserver(
      (entries) => {
        // When element enters viewport
        if (entries[0].isIntersecting) {
          // Start the animation
          controls.start({
            height: '0%',
            transition: {
              duration: 0.8,
              ease: [0.6, 0, 0.38, 1],
              type: "tween" // Ensures animation completes
            }
          });
        }
        // When element leaves viewport
        else {
          // Reset the animation state for when we scroll back
          controls.set({ height: '85%' });
        }
      },
      {
        threshold: 0.1, // Lower threshold to detect earlier
        rootMargin: "-10% 0px" // Slightly offset to ensure proper triggering
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <div className="md:flex">
      <div className="tracking-[-9px] border border-b-0 border-[#404040] font-chakra-petch text-[40px] md:w-44 md:border-0 md:text-center md:text-[112px] text-[#FCFCFC]">
        <span className="inline-block w-20 border-r border-[#404040] p-2 text-center md:hidden">
          {challenge.number}
        </span>
        <span className={cn("hidden md:inline-block", index === 1 && "mt-20", index === 3 && "mt-20")}>
          {challenge.number}
        </span>
      </div>
      <div className={cn(
          "flex-1 border-x border-b border-t border-[#404040] lg:border-b-0",
          (index === 0 || index === 1 || index === 3) && "lg:border-t-0"
        )}
      >
        {(index === 1 || index === 3) && <div className="hidden h-20 w-full border-b border-[#404040] lg:block" />}
        <div ref={ref} className="m-4 overflow-hidden border border-[#404040] relative">
          {/* Image container */}
          <div className="relative overflow-hidden">
            {/* The actual image */}
            <Image
              width={477}
              height={259}
              src={challenge.imageUrl}
              alt={challenge.title}
              className="block w-full"
            />

            {/* Mask that covers the bottom portion of the image */}
            <motion.div
              className="absolute left-0 right-0 bottom-0 bg-c-black"
              initial={{ height: '85%' }}
              animate={controls}
            />
          </div>
        </div>
        <div className="space-y-2 border-t border-[#404040] px-4 pb-16 pt-4">
          <h2 className="text-[clamp(1.25rem,5vw,2rem)] leading-none text-[#FCFCFC]">
            {challenge.title}
          </h2>
          <p className="text-[#FCFCFC]">{challenge.description}</p>
        </div>
      </div>
    </div>
  );
};

const CoreChallengeSection = () => {
  return (
    <section className="bg-c-black py-6 overflow-hidden">
      <h2 className="mx-auto mb-4 max-w-[1440px] pl-6 text-[clamp(1.25rem,5vw,2rem)] leading-none lg:pl-6 text-[#FCFCFC]">
        Most organisations face <br className="block lg:hidden" /> the same core challenges
      </h2>
      <div className="relative mx-auto max-w-[1440px] border-[#404040] px-4 lg:border-y lg:border-l 1440:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreChallengeSection;