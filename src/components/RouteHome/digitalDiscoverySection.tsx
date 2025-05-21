'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { DualLeftArrowIcon, MonitorIcon } from '../shared/svgs';

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

// Image reveal animation
const imageRevealVariants: Variants = {
  hidden: {
    clipPath: 'inset(0% 0% 75% 0%)',
    opacity: 0.9
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      clipPath: {
        duration: 0.8, // Faster animation
        ease: [0.6, 0, 0.38, 1],
        delay: 0.1 // Reduced delay
      },
      opacity: {
        duration: 0.7, // Faster opacity transition
        ease: [0.6, 0, 0.38, 1],
      }
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

export default function DigitalDiscoverySection() {
  return (
    <section id="digitalDiscovery" className="relative overflow-hidden bg-[#202020]">
      <div
        className="
          container_fluid
          bg-[url(/images/not-found-page/bg-lines.svg)]
          bg-contain bg-center bg-repeat-y
          pb-20 pt-4 md:pt-2 lg:pb-6
          relative
        "
      >
        {/* Intro text animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[390px] relative z-20 mt-0 md:mt-0"
        >
          <h3 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-foreground md:text-3xl lg:text-[40px]">
            Science has embraced digital discovery
          </h3>
          <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-foreground md:text-xl">
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
              bg-[#202020]
              bg-[url(/images/not-found-page/bg-lines.svg)]
              bg-contain bg-center bg-repeat-y
              origin-top
            "
            variants={maskVariants}
          />

          {/* Subheading slides up */}
          <motion.h3
            variants={panelVariants}
            className="font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-foreground md:text-2xl lg:text-[32px]"
          >
            AI and digital tools offer unprecedented potential,
          </motion.h3>

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
                src: '/home/revolutionising-image.webp',
                caption: 'revolutionising human computer interaction',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={panelVariants}
                className={`flex flex-col gap-2 ${i === 2 ? 'md:ml-auto' : ''}`}
              >
                <p className="md:hidden">{item.caption}</p>
                <div className="relative overflow-hidden bg-transparent border-0 outline-none" style={{ border: 'none' }}>
                  {/* Background block that blends with the background */}
                  <div className="absolute inset-0 bg-[#202020] z-10"></div>

                  {/* Image with reveal animation */}
                  <motion.div
                    variants={imageRevealVariants}
                    className="relative z-20 border-0 outline-none"
                    style={{ border: 'none' }}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={215}
                      height={107}
                      className="h-auto w-[152px] sm:w-56 md:w-[215px] border-none outline-none"
                      style={{ border: 'none', outline: 'none' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infra text pulls down */}
          <motion.p
            variants={infraVariants}
            className="mt-8 font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-foreground md:mt-12 md:text-2xl lg:text-[32px]"
          >
            Yet, the{' '}
            <span className="inline-flex mx-0.5 w-5 align-middle md:w-8">
              <MonitorIcon />
            </span>{' '}
            infrastructure that supports this innovation is lagging by not giving enough information,{' '}
            <span className="inline-flex mx-0.5 w-6 align-middle">
              <DualLeftArrowIcon />
            </span>{' '}
            slowing the very progress it aims to support.
          </motion.p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 max-w-[691px] md:ml-auto md:mt-36 lg:mt-[196px]"
        >
          <p className="font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-foreground md:text-xl md:tracking-[-0.02em]">
            We can&apos;t tell where to double down or when we have gone completely off track.
          </p>
          <p className="mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-foreground md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
            This blind spot in scientific computing is costing us breakthroughs.
          </p>
        </motion.div>

        {/* Scroll-down arrow - white rectangle in the bottom left that expands on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 h-[46px] md:h-[70px] bg-white origin-left"
          initial={{ width: "10%" }}
          whileInView={{
            width: "36.75%",
            transition: {
              duration: 0.8,
              ease: [0.6, 0, 0.38, 1]
            }
          }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link href="#digitalDiscovery" className="flex h-full items-center justify-end pr-8">
            <Image src="/icons/down-arrow.svg" alt="Down arrow" width={7.5} height={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
