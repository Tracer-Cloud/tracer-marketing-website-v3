'use client';

import { motion } from 'framer-motion';
import { unifiedPlatformData } from "./data/unifiedPlatformData";

const UnifiedPlatformCard = () => {
  // Animation variants for staggered fade-in from left
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay between each card animation
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

  return (
    <motion.div
      className="mt-10 grid gap-10 px-4 md:mt-14 lg:grid-cols-3 lg:gap-[120px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {unifiedPlatformData.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          className={`relative h-fit space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4 xl:max-w-[330px] ${
            item.marginTop || ""
          }`}
        >
          <span
            className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-foreground md:text-base"
            style={{ letterSpacing: "-0.01em" }}
          >
            {item.label}
          </span>
          <div className="space-y-2">
            <p
              className="max-w-[550px] font-britti-sans text-base font-normal leading-4 text-foreground md:text-2xl md:leading-[24px] xl:max-w-max"
              style={{ letterSpacing: "-0.01em" }}
            >
              {item.title}
            </p>
            <p className="max-w-[550px] font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base xl:max-w-max">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UnifiedPlatformCard;
