"use client";

import { DoubleArrowIcon, EyeIcon } from "@/components/shared/svgs";
import Image from "next/image";
import WhyMonitoringTitleLarger from "./whyMonitoringTitleLarger";
import WhyMonitoringTitleMobile from "./whyMonitoringTitleMobile";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const WhyMonitoringSection = () => {
  const titleRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  const titleControls = useAnimation();
  const firstImageControls = useAnimation();
  const secondImageControls = useAnimation();
  const textLinesControls = useAnimation();

  // Using a very small amount (0.01) means the element must be almost completely out of view
  // before inView becomes false
  const titleInView = useInView(titleRef, { amount: 0.01 });
  const firstImageInView = useInView(firstImageRef, { amount: 0.01 });
  const secondImageInView = useInView(secondImageRef, { amount: 0.01 });

  // For text lines, we use once: true to ensure it only triggers once
  const textLinesRef = useRef(null);
  const textLinesInView = useInView(textLinesRef, { amount: 0.5, once: true });

  // Control title animation
  useEffect(() => {
    if (titleInView) {
      titleControls.start({
        y: -4,
        transition: {
          duration: 2.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      });
    } else {
      // Reset animation when completely out of view
      titleControls.start({ y: 0 });
    }
  }, [titleInView, titleControls]);

  // Control first image animation
  useEffect(() => {
    if (firstImageInView) {
      firstImageControls.start({
        x: 0,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      });
    } else {
      // Reset animation when completely out of view
      firstImageControls.start({ x: "25%" });
    }
  }, [firstImageInView, firstImageControls]);

  // Control second image animation
  useEffect(() => {
    if (secondImageInView) {
      secondImageControls.start({
        x: 0,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      });
    } else {
      // Reset animation when completely out of view
      secondImageControls.start({ x: "-25%" });
    }
  }, [secondImageInView, secondImageControls]);

  // Control text lines animation - only triggers once
  useEffect(() => {
    if (textLinesInView) {
      textLinesControls.start(i => ({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: i * 0.2, // Stagger each line
          ease: [0.25, 0.1, 0.25, 1]
        }
      }));
    }
  }, [textLinesInView, textLinesControls]);

  return (
    <section className="relative overflow-y-clip pb-4 md:pb-[86px] bg-[#FCFCFC]">
      <div className="border-y border-[#E8E8E8]">
        <div className="container_fluid flex w-full items-center gap-14 bg-[#FCFCFC] py-3 md:gap-24 md:py-2.5 pl-6">
          <Image
            src={"/home/tracer-icon.svg"}
            alt="Tracer icon"
            width={123}
            height={29}
            className="h-3 w-auto shrink-0"
          />
          <div className="flex w-full justify-between gap-2 font-chakra-petch text-sm font-normal uppercase tracking-[-0.01em] text-[#202020]">
            <span>the</span>
            <span className="sm:ml-[12%]">tracer</span>
            <span className="pr-6">difference</span>
          </div>
        </div>
      </div>

      <div className="container_fluid pt-10">
        <h2 className="sr-only">Why Monitoring as the Solution</h2>
        <motion.div
          ref={titleRef}
          className="relative font-britti-sans text-6xl font-normal leading-[0.8em] tracking-[-0.04em] text-[#202020] lg:text-8xl px-6"
          initial={{ y: 0 }}
          animate={titleControls}
        >
          {/* Title for larger screens */}
          <WhyMonitoringTitleLarger />
          {/* Title for smaller screens */}
          <WhyMonitoringTitleMobile />
        </motion.div>

        <div className="flex flex-col gap-14 pt-10 md:pt-[220px] lg:gap-[72px] lg:pt-[330px]">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-20">
            <div className="font-britti-sans text-xl font-medium leading-[0.9em] tracking-[-0.02em] text-[#202020] md:max-w-[520px] md:text-2xl lg:text-[32px] px-6">
              <p className="mb-4">
                Modern science is going software-first. With AI and digital tools, researchers are moving fast — and becoming one of the largest developer communities.
              </p>
              <p>
                They want
                <span className="mx-0.5 inline-flex items-center align-middle">
                  <DoubleArrowIcon />
                </span>
                flexibility and
                <span className="mx-0.5 inline-flex items-center align-middle">
                  <EyeIcon />
                </span>
                visibility, not no-code shortcuts.
              </p>
            </div>

            <motion.div
              ref={firstImageRef}
              className="md:w-1/2 md:max-w-[708px] xl:w-full overflow-hidden"
              initial={{ x: "25%" }}
              animate={firstImageControls}
            >
              <Image
                src={"/home/monitoring-solution.webp"}
                alt="Monitoring solution"
                width={1416}
                height={520}
                className="h-auto w-full"
              />
            </motion.div>
          </div>

          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between lg:gap-20">
            <motion.div
              ref={secondImageRef}
              className="md:w-2/5 lg:w-[453px] overflow-hidden -mt-8"
              initial={{ x: "-25%" }}
              animate={secondImageControls}
            >
              <Image
                src={"/home/better-information-image.webp"}
                alt="Better information"
                width={453}
                height={382}
                className="h-auto w-full"
              />
            </motion.div>

            <div className="w-full max-w-[700px] flex-1 px-6">
              <span className="font-britti-sans text-2xl font-normal tracking-[-0.02em] text-[#202020] md:text-3xl lg:text-[40px]">
                Science needs
              </span>
              <h3 className="mt-1.5 font-britti-sans text-[40px] font-normal leading-[0.8em] tracking-[-0.04em] text-[#202020] md:text-6xl lg:text-6xl xl:text-8xl">
                better information
              </h3>
              <motion.div
                ref={textLinesRef}
                className="my-6 flex flex-col space-y-2 text-sm font-normal text-[#202020] md:w-full md:text-base lg:my-10 xl:w-3/5"
              >
                <motion.span
                  custom={0}
                  initial={{ x: -50, opacity: 0 }}
                  animate={textLinesControls}
                >
                  Clearer signals.
                </motion.span>
                <motion.span
                  custom={1}
                  initial={{ x: -50, opacity: 0 }}
                  animate={textLinesControls}
                  className="md:mr-[15%] md:self-center"
                >
                  Real-time visibility.
                </motion.span>
                <motion.span
                  custom={2}
                  initial={{ x: -50, opacity: 0 }}
                  animate={textLinesControls}
                  className="md:self-end"
                >
                  Context they can act on.
                </motion.span>
              </motion.div>
              <p className="font-britti-sans text-sm font-normal leading-none text-[#202020] md:text-base">
                Because in high-stakes decision making, every wrong assumption
                costs time, money, and opportunity. Generic monitoring tools
                weren&apos;t built for this. They miss the nuance, ignore the
                workflows, and fail to meet the security and data demands of
                scientific environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-1 left-0 hidden w-[33%] bg-[#202020] md:block origin-bottom"
        initial={{ height: "50px" }}
        whileInView={{
          height: "60px",
          transition: {
            duration: 0.8,
            ease: [0.6, 0, 0.38, 1]
          }
        }}
        viewport={{ once: false, amount: 0.3 }}
      ></motion.div>
    </section>
  );
};

export default WhyMonitoringSection;
