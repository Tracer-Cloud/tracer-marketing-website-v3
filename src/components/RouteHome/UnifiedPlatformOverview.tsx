'use client';

import { motion } from 'framer-motion';
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import UnifiedPlatformCard from "./UnifiedPlatformCard";
import UnifiedPlatformCardLg from "./UnifiedPlatformCardLg";

const UnifiedPlatformOverview = () => {
  // Animation variant for the mobile background image rising into place
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.6, 0, 0.38, 1],
        delay: 0.8 // Delay to let cards animate first
      }
    }
  };

  return (
    <section className="bg-[#FCFCFC] text-[#202020]">
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-[88px] md:pt-16">
          <div>
            {/* heading part */}
            <div className="space-y-6 px-4 md:space-y-12">
              <div className="space-y-6">
                <p
                  className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] md:text-base"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  _A Unified Platform
                </p>
                <div className="space-y-2 md:space-y-4">
                  <h3
                    className="max-w-[658px] font-britti-sans text-[32px] font-normal leading-[30px] text-[#202020] md:text-[56px] md:leading-[48px]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Observability for AI-driven Scientific Discovery
                  </h3>
                  <h6
                    className="max-w-[500px] font-britti-sans text-base font-normal leading-4 text-[#202020] md:text-xl md:leading-[22px]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    The infrastructure that unifies science and engineering teams
                    and powers the next generation of AI-driven breakthroughs
                  </h6>
                </div>
              </div>
              <div className="hidden sm:block">
                <PrimaryButton title="Talk to an Expert" className="text-[#202020]" />
              </div>
            </div>

            <div className="relative">
              <div className="hidden lg:block">
                <UnifiedPlatformCardLg />
              </div>

              <div className="lg:hidden">
                <UnifiedPlatformCard />
                <motion.div
                  className="relative h-[280px] w-full lg:hidden [@media(min-width:375px)]:h-[300px]"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image
                    src="/home/unified-bg-bottom-sm.png"
                    alt="unified-bg-bottom"
                    fill
                    className=""
                    priority
                  />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
                <PrimaryButton title="Talk to an Expert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatformOverview;
