'use client';

import { motion } from 'framer-motion';
import { unifiedCardDataLg } from "./data/unifiedPlatformData";
import Image from "next/image";

const UnifiedPlatformCardLg = () => {
  // Animation variants for staggered fade-in from left
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // Delay between each card animation
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0, 0.38, 1]
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0, 0.38, 1],
        delay: 0.2 // Lines appear slightly after the card
      }
    }
  };

  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image */}
      <div className="pt-[280px]">
        <div className="relative z-10 hidden w-full md:h-[320px] lg:block xl:h-[400px]">
          <Image
            src="/unified-bg-bottom.png"
            alt="unified-bg-bottom"
            fill
            className="xl:object-center"
            priority
          />
        </div>
      </div>

      {/* Dynamic Cards */}
      {unifiedCardDataLg.map((card) => (
        <motion.div
          key={card.id}
          className={card.containerStyle}
          variants={cardVariants}
        >
          <div className="relative h-fit max-w-[280px] space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4 xl:max-w-[330px]">
            <span
              className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-foreground md:text-base"
              style={{ letterSpacing: "-0.01em" }}
            >
              {card.tag}
            </span>
            <div className="space-y-2">
              <p
                className="max-w-[550px] font-britti-sans text-base font-normal leading-4 text-foreground md:text-2xl md:leading-[24px] xl:max-w-max"
                style={{ letterSpacing: "-0.01em" }}
              >
                {card.title}
              </p>
              <p className="max-w-[550px] font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base xl:max-w-max">
                {card.description}
              </p>
            </div>
            <motion.div
              className={card.lineImageStyle}
              variants={lineVariants}
            >
              <Image
                src={card.lineImage}
                alt={card.id}
                width={323}
                height={104}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UnifiedPlatformCardLg;
