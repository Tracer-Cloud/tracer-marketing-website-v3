"use client";

import { cloudFeatures } from "./data/cloudFeaturesData";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const DataPrivacyNotice = () => {
  // Animation controls
  const textElementsControls = useAnimation();
  const featuresControls = useAnimation();

  // Refs for detecting when elements come into view
  const textElementsRef = useRef(null);
  const featuresRef = useRef(null);

  // InView hooks - reset when elements go out of view
  const textElementsInView = useInView(textElementsRef, { amount: 0.01 });
  const featuresInView = useInView(featuresRef, { amount: 0.01 });

  // Control text elements animation - staggered fade-in with upward motion
  useEffect(() => {
    if (textElementsInView) {
      textElementsControls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: i * 0.2, // Stagger each element by 0.2 seconds
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    } else {
      // Reset animation when completely out of view
      textElementsControls.start({ y: 30, opacity: 0 });
    }
  }, [textElementsInView, textElementsControls]);

  // Control features animation - staggered fade-in with upward motion
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: i * 0.2, // Stagger each feature card
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    } else {
      // Reset animation when completely out of view
      featuresControls.start({ y: 30, opacity: 0 });
    }
  }, [featuresInView, featuresControls]);

  return (
    <section className="bg-[#202020] px-4">
      <div className="container_fluid">
        <div className="py-4 md:py-[88px]">
          <div className="flex flex-col xl:flex-row xl:gap-12">
            <motion.h3
              ref={textElementsRef}
              custom={0}
              initial={{ y: 30, opacity: 0 }}
              animate={textElementsControls}
              className="font-chakra-petch hidden whitespace-nowrap text-[112px] font-normal leading-[104px] text-foreground md:block"
              style={{ letterSpacing: "-0.09em" }}
            >
              Your data
            </motion.h3>
            <div>
              <div>
                <div className="hidden md:block">
                  <motion.h3
                    custom={1}
                    initial={{ y: 30, opacity: 0 }}
                    animate={textElementsControls}
                    className="font-chakra-petch mt-[-20px] text-[112px] font-normal leading-[104px] text-foreground xl:mt-0"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    never leaves
                  </motion.h3>
                  <motion.h3
                    custom={2}
                    initial={{ y: 30, opacity: 0 }}
                    animate={textElementsControls}
                    className="font-chakra-petch mt-[-24px] text-[112px] font-normal leading-[104px] tracking-[-9%] text-foreground"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    your systems
                  </motion.h3>
                </div>
                <div className="md:hidden">
                  <motion.h3
                    custom={0}
                    initial={{ y: 30, opacity: 0 }}
                    animate={textElementsControls}
                    className="font-chakra-petch text-[40px] font-normal leading-[40px] text-foreground"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    Your data never leaves your systems
                  </motion.h3>
                </div>
                <motion.p
                  custom={3}
                  initial={{ y: 30, opacity: 0 }}
                  animate={textElementsControls}
                  className="mt-4 max-w-[453px] font-britti-sans text-base font-normal leading-[16px] text-foreground md:text-xl md:leading-[22px] md:tracking-[2%]"
                >
                  We don’t want to just pass your security checks: Tracer is
                  built with security-by-design
                </motion.p>

                <motion.div
                  ref={featuresRef}
                  className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2"
                >
                  {cloudFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.id}
                      custom={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={featuresControls}
                      className="space-y-8 border border-[#404040] p-4"
                    >
                      <div className="flex items-center md:justify-end">
                        <Image
                          src={feature.icon}
                          alt={`${feature.title.toLowerCase()}-img`}
                          width={48}
                          height={48}
                          className="object-contain md:h-[72px] md:w-[72px]"
                          priority
                        />
                      </div>
                      <div className="space-y-2">
                        <h5
                          className="font-britti-sans text-xl font-normal leading-[20px] text-foreground md:text-[32px] md:leading-[30px]"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {feature.title}
                        </h5>
                        <p className="font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacyNotice;
