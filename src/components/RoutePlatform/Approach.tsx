'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Approach = () => {
    // Animation variants for staggered slide-up effect
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // 0.2s delay between each card
            }
        }
    }

    const cardVariants = {
        hidden: {
            y: 200, // Start 200px below final position (outside of view)
        },
        visible: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0, 0.38, 1], // Custom easing for smooth animation
            }
        }
    }

    return (
        <div className='bg-white pt-10 pb-4 md:py-[72px] w-full text-black border-t border-[#E8E8E8] flex items-center relative justify-center flex-col'>
            <div className='w-full h-full max-w-[1800px] grid grid-cols-3 absolute top-0 900:px-8 px-6'>
                <div className='flex justify-center'>
                    <div className='border-l border-[#E8E8E8] h-full' />
                </div>
                <div className='flex justify-center'>
                    <div className='border-l border-[#E8E8E8] h-full' />
                </div>
                <div className='flex justify-center'>
                    <div className='border-l border-[#E8E8E8] h-full' />
                </div>
            </div>
            <div className='w-full flex z-[10]  flex-col items-center justify-center max-w-[1800px] 900:px-8 px-6'>
                <div className='w-full  pb-8 md:pb-12 font-[400] font-britti-sans text-[32px] md:text-[40px] text-[#202020] leading-[0.9]'>
                    The dawn of AI <br className='sm:hidden ' /> in science <br className='sm:flex hidden' /> requires <br className='sm:hidden ' />a new approach
                </div>
                <motion.div
                    className='grid 900:grid-cols-3 bg-white min-h-[120px] w-full gap-4 md:gap-6'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        className='border border-[#E8E8E8] p-4 flex flex-col gap-4 md:gap-[20px] items-start justify-between'
                        variants={cardVariants}
                    >
                        <Image src={"/platform/icons/setting-icon.svg"} alt='setting-icon' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[40px] leading-[1.1]'>
                                New Opportunities
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                AI’s full potential relies on fast experimentation, achievable only through optimized tooling and precise information
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='border border-[#E8E8E8] p-4 flex flex-col gap-4 md:gap-[20px] items-start justify-between'
                        variants={cardVariants}
                    >
                        <Image src={"/platform/icons/currency-dollar.svg"} alt='currency-dollar' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] text-[24px] font-britti-sans md:text-[40px] leading-[1.1]'>
                                New Costs
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                AI supercomputing costs are skyrocketing, making efficiency crucial to sustain scientific progress
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='border border-[#E8E8E8] p-4 flex flex-col gap-4 md:gap-[20px] items-start justify-between'
                        variants={cardVariants}
                    >
                        <Image src={"/platform/icons/arrows-pointing-out.svg"} alt='arrows-pointing-out' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[40px] leading-[1.1]'>
                                New Scale
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Computational advancements require managing increasingly complex and dynamic computing architectures
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}

export default Approach
