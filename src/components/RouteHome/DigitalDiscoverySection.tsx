'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { DualLeftArrowIcon, MonitorIcon } from '../shared/Svgs';

// Variants for coordinated reveal
const revealVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

// Mask slides away to reveal content
const maskVariants: Variants = {
  hidden: {
    scaleY: 1,
    transformOrigin: 'top',
  },
  visible: {
    scaleY: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Panels slide up from below
const panelVariants: Variants = {
  hidden: { y: '100%' },
  visible: {
    y: '0%',
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Infra text pulls down
const infraVariants: Variants = {
  hidden: { y: -20 },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, 0, 0.38, 1],
    },
  },
};

// Custom component for image panels with controlled animation
const ImagePanel = ({ src, caption, index }: { src: string; caption: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.01 }); // Very small threshold for reset detection
  const maskControls = useAnimation();
  const imageControls = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (isInView && !animationTriggered) {
      setAnimationTriggered(true);

      // Start mask animation - will complete regardless of scroll
      maskControls.start({
        scaleY: 0,
        transition: {
          duration: 0.8,
          ease: [0.6, 0, 0.38, 1]
        }
      });

      // Start image animation - will complete regardless of scroll
      imageControls.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.6, 0, 0.38, 1]
        }
      });
    } else if (!isInView && animationTriggered) {
      // Reset animation when completely out of view
      setAnimationTriggered(false);
      maskControls.start({ scaleY: 1 });
      imageControls.start({ opacity: 0.9 });
    }
  }, [isInView, animationTriggered, maskControls, imageControls]);

  return (
    <motion.div
      ref={ref}
      variants={panelVariants}
      className={`flex flex-col gap-2 ${index === 2 ? 'md:ml-auto md:pr-20' : ''}`}
    >
      <p className="md:hidden">{caption}</p>
      <div className="relative overflow-hidden bg-transparent border-0 outline-none h-[107px] sm:h-[140px] md:h-[107px]">
        {/* Background block */}
        <div className="absolute inset-0 bg-[#FCFCFC] z-10"></div>
        {/* Mask reveal */}
        <motion.div
          className="absolute inset-0 bg-[#FCFCFC] z-30 origin-bottom"
          initial={{ scaleY: 1 }}
          animate={maskControls}
        />
        {/* Image */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0.9 }}
          animate={imageControls}
        >
          <Image
            src={src}
            alt={caption}
            width={215}
            height={107}
            className="h-auto w-[152px] sm:w-56 md:w-[215px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function DigitalDiscoverySection() {
  return (
    <section id="digitalDiscovery" className="relative overflow-hidden bg-[#FCFCFC]">
      {/* Dark grey rectangle in the top right */}
      <motion.div
        className="absolute top-0 right-0 h-[46px] md:h-[70px] bg-black origin-right z-10"
        initial={{ width: "50%" }}
        whileInView={{
          width: "35%",
          transition: {
            duration: 1.0,
            ease: [0.6, 0, 0.38, 1]
          }
        }}
        viewport={{ once: false, amount: 0.8 }}
      />

      <div
        className="
          bg-[url(/home/bg-lines.svg)]
          bg-contain bg-center bg-repeat-y
          pb-20 pt-12 md:pt-16 lg:pb-6
          relative
          mx-auto max-w-[1440px] w-full
        "
      >
        {/* Intro text animation - appears once and stays */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[500px] relative z-20 mt-0 md:mt-0 pl-5 md:pl-10"
        >
          <h3 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:text-3xl lg:text-[40px]">
            Science has embraced <br />digital discovery
          </h3>
          <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-[#202020] md:text-xl whitespace-nowrap">
            But the tools have not caught up with the vision.
          </p>
        </motion.div>

        {/* Swipe-reveal group for subheading, panels, infra-text */}
        <motion.div
          className="relative ml-auto mt-14 max-w-[930px] overflow-hidden md:mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "-200px 0px" }}
          variants={revealVariants}
        >
          {/* Mask matching parent background */}
          <motion.div
            className="
              absolute inset-0
              bg-[#FCFCFC]
              bg-[url(/home/bg-lines.svg)]
              bg-contain bg-center bg-repeat-y
              origin-top
            "
            variants={maskVariants}
          />

          {/* Subheading slides up */}
          <motion.h3
            variants={panelVariants}
            className="font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-[#202020] md:text-2xl lg:text-[32px]"
          >
            AI and digital tools offer unprecedented potential,
          </motion.h3>

          {/* Captions with connecting lines */}
          <motion.div
            variants={panelVariants}
            className="mt-4 hidden md:flex items-center gap-4 lg:gap-6"
          >
            {[
              'from curing cancer',
              'personalised medicine',
              'revolutionising human computer interaction'
            ].map((caption, i) => (
              <React.Fragment key={i}>
                <p className="font-britti-sans text-sm font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-base text-center whitespace-nowrap">
                  {caption}
                </p>
                {i < 2 && (
                  <div className={`h-px bg-[#202020] flex-shrink-0 ${i === 1 ? 'w-32' : 'w-16'}`}></div>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Panels */}
          <div className="mt-4 flex flex-col gap-4 md:flex-row lg:gap-6">
            {[
              {
                src: '/home/curing-cancer-image.webp',
                caption: 'from curing cancer',
              },
              {
                src: '/home/personalised-medicine-image.webp',
                caption: 'personalised medicine',
              },
              {
                src: '/home/robot-image.webp',
                caption: 'revolutionising human computer interaction',
              },
            ].map((item, i) => (
              <ImagePanel
                key={i}
                src={item.src}
                caption={item.caption}
                index={i}
              />
            ))}
          </div>

          {/* Infra text pulls down */}
          <motion.p
            variants={infraVariants}
            className="mt-8 font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-[#202020] md:mt-12 md:text-2xl lg:text-[32px] md:pr-48"
          >
            Yet, the{' '}
            <span className="inline-flex mx-0.5 w-5 align-middle md:w-8">
              <MonitorIcon />
            </span>{' '}
            infrastructure that supports this innovation <br />
            is lagging by not giving enough information,{' '}
            <span className="inline-flex mx-0.5 w-6 align-middle">
              <DualLeftArrowIcon />
            </span>{' '}
            slowing <br />
            the very progress it aims to support. <br />
          </motion.p>
        </motion.div>

        {/* Conclusion - appears once and stays */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 max-w-[691px] md:ml-auto md:mr-16 md:mt-36 lg:mt-[196px]"
        >
          <p className="font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-xl md:tracking-[-0.02em]">
            We can&apos;t tell where to double down or when we have gone completely off track.
          </p>
          <p className="mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
            This blind spot in scientific <br />computing is costing us breakthroughs.
          </p>
        </motion.div>
      </div>

      {/* Bottom-left reveal bar (full-width section, no side margin) */}
      <motion.div
        className="absolute bottom-0 left-0 bg-[#202020] origin-left h-[60px] md:h-[90px] z-10"
        initial={{ width: "20vw" }}
        whileInView={{
          width: "36.75vw",
          transition: {
            duration: 0.8,
            ease: [0.6, 0, 0.38, 1]
          }
        }}
        viewport={{ once: false, amount: 0.8 }}
      />
    </section>
);
}
