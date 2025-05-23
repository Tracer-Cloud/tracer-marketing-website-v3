'use client'

import Image from "next/image"
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Monitoring = () => {
    // Refs and controls for scroll-based animation
    const containerRef = useRef(null)
    const endTriggerRef = useRef(null)

    // Detect when cards come into view
    const cardsVisible = useInView(containerRef, {
        amount: 0.1, // Trigger when 10% visible
        margin: "0px 0px 0px 0px"
    })

    // Detect when we scroll past the end
    const pastEnd = useInView(endTriggerRef, {
        amount: 0,
        margin: "0px 0px -200px 0px" // Trigger when 200px past this point
    })

    const containerControls = useAnimation()

    // Animation variants for staggered slide-up effect with slower transitions
    const containerVariants = {
        hidden: {
            transition: {
                staggerChildren: 0.5, // Slower stagger for reverse animation
                staggerDirection: -1, // Reverse the stagger order when going to hidden
            }
        },
        visible: {
            transition: {
                staggerChildren: 0.5, // Slower stagger for forward animation
            }
        }
    }

    // First card has no animation (stays in place as reference point)
    const firstCardVariants = {
        hidden: {},
        visible: {}
    }

    // Second card slides up into place - increased drop distance, slower animation
    const secondCardVariants = {
        hidden: {
            y: 250, // Increased staircase position: +250px down from final position
            transition: {
                duration: 1.5, // Slower reverse animation
                ease: [0.6, 0, 0.38, 1]
            }
        },
        visible: {
            y: 0, // Final aligned position
            transition: {
                duration: 1.5, // Slower forward animation
                ease: [0.6, 0, 0.38, 1]
            }
        }
    }

    // Third card slides up into place - increased drop distance, slower animation
    const thirdCardVariants = {
        hidden: {
            y: 500, // Increased staircase position: +500px down from final position
            transition: {
                duration: 1.5, // Slower reverse animation
                ease: [0.6, 0, 0.38, 1]
            }
        },
        visible: {
            y: 0, // Final aligned position
            transition: {
                duration: 1.5, // Slower forward animation
                ease: [0.6, 0, 0.38, 1]
            }
        }
    }

    // Handle scroll-based animation with reverse functionality
    useEffect(() => {
        console.log('Scroll state:', { cardsVisible, pastEnd })

        if (cardsVisible && !pastEnd) {
            console.log('Cards in view - staying visible (aligned)')
            containerControls.start("visible")
        } else if (pastEnd) {
            console.log('Past end - animating to hidden (staggered)')
            containerControls.start("hidden")
        } else if (!cardsVisible) {
            console.log('Cards out of view - animating to hidden (staggered)')
            containerControls.start("hidden")
        }
    }, [cardsVisible, pastEnd, containerControls])
    return (
        <div ref={containerRef} className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <Image src={"/platform/monitoting-section-img.png"} alt="monitoting-section-img" width={955} height={800} className="absolute right-0 top-0 w-full max-w-[500px] -translate-y-14 translate-x-32 md:translate-x-20 md:translate-y-0 lg:max-w-[800px] lg:translate-x-32 1300:max-w-[955px] 1300:translate-x-40" />
            <div className='z-[10] w-full max-w-[1440px] border-b border-[#E8E8E8]'>
                {/* Header Section - Transparent background to show background image */}
                <div className='pt-30 w-full px-4 pb-4 md:px-6 md:pb-12 md:pt-14'>
                    <div className='w-full max-w-[685px] text-c-off-white'>
                        <h2 className='font-britti-sans text-[32px] font-[400] leading-[0.9] md:text-[40px]'>
                            One platform from monitoring <br className="hidden sm:flex" /> to insights, for scientists to executives
                        </h2>
                        <p className='mt-4 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-off-white md:mt-3 md:text-[16px]'>
                            The Tracer Platform empowers teams across Data Science, Engineering,
                            DevOps, and Machine Learning to monitor and optimize everything they build
                            and run in the cloud.
                        </p>
                        <button className='mt-8 h-[48px] w-full cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-base font-[400] text-c-black sm:w-fit md:mt-10'>
                            Talk to an Expert
                        </button>
                    </div>
                </div>

                {/* Cards Container */}
                <motion.div
                    className='grid lg:grid-cols-3 gap-0 lg:h-auto'
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerControls}
                >
                    {/* First Card - No Animation */}
                    <motion.div className='flex flex-col h-full' variants={firstCardVariants}>
                        <div className='w-full bg-white px-4 pt-4 md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-b border-r border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        01–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER PERFORMANCE
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Predict and optimise <br className="sm:hidden" /> compute requirements
                                    </h2>
                                    <p className='mt-2 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Forecast the exact running time and compute needs of your pipelines. Further optimise your underutilised instances and increase the usage of AI models in a cost-efficient manner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Second Card - Slide Up Animation */}
                    <motion.div className='flex flex-col h-full' variants={secondCardVariants}>
                        <div className='w-full border-l border-[#E8E8E8] bg-[#FCFCFC] px-4 pt-4 text-black md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        02–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER INTELLIGENCE
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Total visibility into computational infrastructure
                                    </h2>
                                    <p className='mt-2 max-w-[560px] text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelised processes across instances
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Third Card - Slide Up Animation */}
                    <motion.div className='flex flex-col h-full' variants={thirdCardVariants}>
                        <div className='w-full border-l border-[#E8E8E8] bg-[#FCFCFC] px-4 pt-4 md:px-3 md:pt-3'>
                            <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                            </div>
                        </div>
                        <div className='w-full flex flex-col bg-[#FCFCFC] text-black flex-1'>
                            <div className='flex flex-col justify-between gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3 h-full'>
                                <div className='flex w-full items-center justify-between'>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        03–03
                                    </p>
                                    <p className='font-chakra-petch text-sm font-[400] text-c-black'>
                                        TRACER DEBUG
                                    </p>
                                </div>
                                <div className="w-full">
                                    <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                        Fix issues instantly
                                    </h2>
                                    <p className='mt-2 max-w-[560px] text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                        Gain deep insights into the root causes of bugs across all analyses, recognise the error type, and solve instantly
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* End trigger for reverse animation */}
                <div ref={endTriggerRef} className='w-full h-0'></div>

                {/* White background for extended area */}
                <div className='w-full h-[430px] lg:h-[574px] bg-[#FCFCFC]'></div>
            </div>
        </div>
    )
}

export default Monitoring
