'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import PrimaryButton from "../ui/primary-button";

const HowTracerWorks = () => {
  // Create ref for the section to detect when it's in view
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="bg-[#FCFCFC]">
      <div className="relative overflow-y-clip border-b border-grey-100">
        <div className="container_fluid relative flex flex-col bg-[url(/home/bg-lines.svg)] bg-contain bg-center bg-repeat-y pb-7 md:pb-[72px]">
          <h2 className="sr-only">How Tracer Works</h2>
          <motion.div
            className="relative mt-24 font-chakra-petch text-5xl font-normal leading-none tracking-[-0.04em] text-[#202020] md:mt-10 md:text-7xl md:leading-[0.8em] lg:text-[120px]"
            initial={{ y: 30 }} // Start from below and pan up (no opacity change)
            whileInView={{
              y: 0,
              transition: {
                duration: 1.5,
                ease: [0.6, 0, 0.38, 1]
              }
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="hidden md:block">
              <span>How Tracer</span>
              <motion.span
                className="absolute right-0 top-[calc(100%+36px)]"
                initial={{ y: 30 }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 1.5,
                    delay: 0.3, // Slight delay for staggered effect
                    ease: [0.6, 0, 0.38, 1]
                  }
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                Works
              </motion.span>
            </div>
            <div className="block md:hidden">
              <motion.span
                initial={{ y: 30 }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.6, 0, 0.38, 1]
                  }
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                How Tracer Works
              </motion.span>
            </div>
          </motion.div>
          <div className="mt-6 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end">
            <motion.div
              className="w-full md:h-auto lg:w-[589px] overflow-hidden"
              initial={{ x: "-25%" }}
              whileInView={{
                x: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.6, 0, 0.38, 1]
                }
              }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Image
                src={"/home/computing-system-image.webp"}
                alt="Computing System Image"
                width={589}
                height={493}
                priority={false}
                className="w-full md:h-auto"
              />
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 lg:max-w-[533px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.2,
                  delay: 0.5, // Adjusted delay to match the image animation
                  ease: [0.6, 0, 0.38, 1]
                }
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] lg:text-4xl xl:text-5xl">
                Built for the most complex computing systems
              </h4>
              <p className="font-britti-sans text-base font-normal leading-none tracking-[-0.02em] text-[#202020] lg:text-lg xl:text-xl">
                Tracer uses eBPF-powered operating-system (OS) level extraction
                technologies to reach actionable insights. What others canʼt
                see, we extract, transform, and explain.
              </p>
              <div className="mt-4 xl:mt-6">
                <Link href={"/technology"}>
                  <PrimaryButton
                    title="See our Technology"
                    className="bg-[#E8E8E8] text-[#202020] border-none hover:bg-[#e0e0e0] whitespace-nowrap w-full md:w-auto"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Mobile rectangle */}
        <motion.div
          className="absolute -top-px right-0 h-11 bg-[#202020] origin-right md:hidden"
          initial={{ width: "45%" }}
          whileInView={{
            width: "37%",
            transition: {
              duration: 1.5, // Match image animation duration
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.1 }}
        />

        {/* Medium screens rectangle */}
        <motion.div
          className="absolute -top-px right-0 hidden md:block md:h-24 bg-[#202020] origin-right lg:hidden"
          initial={{ width: "45%" }}
          whileInView={{
            width: "33.913%",
            transition: {
              duration: 1.5, // Match image animation duration
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.1 }}
        />

        {/* Large screens rectangle */}
        <motion.div
          className="absolute -top-px right-0 hidden lg:block lg:h-[134px] bg-[#202020] origin-right"
          initial={{ width: "45%" }}
          whileInView={{
            width: "37%",
            transition: {
              duration: 1.5, // Match image animation duration
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.1 }}
        />
      </div>
    </section>
  );
};
export default HowTracerWorks;
