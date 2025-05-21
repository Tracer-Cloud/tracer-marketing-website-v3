'use client';

import { DualLeftArrowIcon, MonitorIcon } from "../shared/svgs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DigitalDiscoverySection() {
  return (
    <section id="digitalDiscovery" className="relative overflow-y-clip">
      <div className="container_fluid bg-[url(/images/not-found-page/bg-lines.svg)] bg-contain bg-center bg-repeat-y pb-20 pt-16 md:pt-8 lg:pb-6">
        {/* Intro with animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-[390px]"
        >
          <h3 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-foreground md:text-3xl lg:text-[40px]">
            Science has embraced digital discovery
          </h3>
          <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-foreground md:text-xl">
            But the tools have not caught up with the vision.
          </p>
        </motion.div>

        {/* Subheading */}
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="ml-auto mt-14 max-w-[930px] font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-foreground md:mt-40 md:text-2xl lg:text-[32px]"
        >
          AI and digital tools offer unprecedented potential,
        </motion.h3>

        {/* Panels container */}
        <div className="ml-auto mt-4 max-w-[930px] md:mt-4">
          <div className="flex flex-col gap-4 md:flex-row lg:gap-6">
            {/* Panel 1: wiping up */}
            <motion.div
              initial={{ y: '100%', opacity: 1 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.024, duration: 1.2, ease: [0.6, 0, 0.38, 1] }}
              className="flex flex-col gap-2"
            >
              <p className="md:hidden">from curing cancer</p>
              <Image
                src="/home/curing-cancer-image.webp"
                alt="Curing cancer image"
                width={215}
                height={107}
                className="h-auto w-[152px] sm:w-56 md:w-[215px]"
              />
            </motion.div>

            {/* Panel 2: wiping up */}
            <motion.div
              initial={{ y: '100%', opacity: 1 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.024, duration: 1.2, ease: [0.6, 0, 0.38, 1] }}
              className="flex flex-col gap-2"
            >
              <p className="md:hidden">personalised medicine</p>
              <Image
                src="/home/personalised-medicine-image.webp"
                alt="Personalised medicine image"
                width={215}
                height={107}
                className="h-auto w-[152px] sm:w-56 md:w-[215px]"
              />
            </motion.div>

            {/* Panel 3: wiping up */}
            <motion.div
              initial={{ y: '100%', opacity: 1 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.024, duration: 1.2, ease: [0.6, 0, 0.38, 1] }}
              className="flex flex-col gap-2 md:ml-auto"
            >
              <p className="md:hidden">
                revolutionising human <br />-computer interaction
              </p>
              <Image
                src="/home/revolutionising-image.webp"
                alt="Revolutionising interaction image"
                width={215}
                height={107}
                className="h-auto w-[152px] sm:w-56 md:w-[215px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Black panel sliding from left */}
        <motion.div
          initial={{ x: -1546, y: 0, opacity: 1 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.024, duration: 1.2, ease: [0.6, 0, 0.38, 1] }}
          className="absolute left-0 bottom-0 h-[46px] w-[36.75%] bg-foreground md:h-[70px]"
        />

        {/* Follow-up text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-[34px] font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-foreground md:mt-12 md:max-w-[716px] md:text-2xl lg:text-[32px]"
        >
          Yet, the <span className="inline-flex mx-0.5 w-5 align-middle md:w-8"><MonitorIcon /></span> infrastructure that supports this innovation is lagging by not giving enough information, <span className="inline-flex mx-0.5 w-6 align-middle"><DualLeftArrowIcon /></span> slowing the very progress it aims to support — flexibility and visibility, not no-code shortcuts.
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-14 max-w-[691px] md:ml-auto md:mt-36 lg:mt-[196px]"
        >
          <p className="font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-foreground md:text-xl md:tracking-[-0.02em]">
            We can’t tell where to double down or when we have gone completely off track.
          </p>
          <p className="mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-foreground md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
            This blind spot in scientific computing is costing us breakthroughs.
          </p>
        </motion.div>

        {/* Scroll-down arrow */}
        <span className="absolute -top-px right-0 h-[46px] w-[36.75%] bg-foreground md:h-[70px]">
          <Link href="#digitalDiscovery" className="flex h-full items-center justify-center">
            <Image src="/icons/down-arrow.svg" alt="Down arrow" width={7.5} height={18} />
          </Link>
        </span>
      </div>
    </section>
  );
}



