'use client';

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ModernMonitoringPlatform = () => {
  // Create ref for the section to detect when it's in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  // Animation controls
  const bracketsControls = useAnimation();
  const textControls = useAnimation();

  // Animation sequence triggered when section comes into view
  useEffect(() => {
    const sequence = async () => {
      if (isInView) {
        // Reset to initial state (blank section)
        await Promise.all([
          bracketsControls.start({
            opacity: 0,
            scale: 0.1,
            width: "20px", // Start with brackets close together
            transition: { duration: 0 }
          }),
          textControls.start({
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0 }
          })
        ]);

        // Step 1: Zoom animation to show just "[]" - brackets appear from center with zoom effect
        await bracketsControls.start({
          opacity: 1,
          scale: 1,
          width: "20px", // Keep brackets close together
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] // Consistent easing curve
          }
        });

        // Step 2: Expand brackets and show text simultaneously
        await Promise.all([
          bracketsControls.start({
            width: "auto", // Expand to fit text
            transition: {
              duration: 0.8, // Same duration as zoom for consistent pace
              ease: [0.25, 0.1, 0.25, 1] // Same easing curve for consistent pace
            }
          }),
          textControls.start({
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.2, // Slower text zoom animation
              ease: [0.25, 0.1, 0.25, 1] // Same easing curve for consistent style
            }
          })
        ]);
      } else {
        // Reset animation when completely out of view
        bracketsControls.start({
          opacity: 0,
          scale: 0.1,
          width: "20px",
          transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }
        });
        textControls.start({
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }
        });
      }
    };

    sequence();
  }, [isInView, bracketsControls, textControls]);

  return (
    <section
      ref={sectionRef}
      className="flex h-[358px] items-center justify-center bg-black md:h-[447px]"
    >
      <div className="container_fluid text-white">
        <div className="flex items-center justify-center">
          <motion.div
            animate={bracketsControls}
            initial={{ opacity: 0, scale: 0.1, width: "20px" }}
            className="relative flex items-center justify-center min-h-[40px]"
          >
            <span className="text-white text-2xl absolute left-0 flex items-center h-full font-normal">
              [
            </span>

            <motion.span
              animate={textControls}
              initial={{ opacity: 0, scale: 0.8 }}
              className="text-center text-base uppercase leading-none tracking-[-0.01em] md:text-xl whitespace-nowrap mx-4"
            >
              MEET <span className="text-purple-500">THE MODERN MONITORING PLATFORM</span> FOR SCIENTIFIC ENTERPRISES
            </motion.span>

            <span className="text-white text-2xl absolute right-0 flex items-center h-full font-normal">
              ]
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernMonitoringPlatform;
