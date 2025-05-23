'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, Variants, useInView } from 'framer-motion'

// Animation configuration - more visible for testing
const animationConfig = { delay: 0.1, duration: 2.0, ease: [0.25, 0.1, 0.25, 1] }

// Image animation variant - slides in from the left (no fade)
const imageVariant: Variants = {
    hidden: { x: -300 },
    visible: { x: 0, transition: animationConfig },
}

// Rectangle animation variant - starts larger and shrinks into place
const rectangleVariant: Variants = {
    hidden: { scale: 1.15 },
    visible: { scale: 1, transition: animationConfig },
}

const Hero = () => {
    const ref = useRef(null)
    const [imageAnimated, setImageAnimated] = useState(false)

    // Rectangle animation resets on scroll
    const isInView = useInView(ref, {
        once: false, // Allow animation to reset when out of view
        amount: 0.3 // Trigger when 30% of element is visible
    })

    // Image animation only plays once
    useEffect(() => {
        if (!imageAnimated) {
            setImageAnimated(true)
        }
    }, [imageAnimated])

    useEffect(() => {
        console.log('Hero in view:', isInView)
    }, [isInView])

    return (
        <div className='overflow-hidden bg-white' ref={ref}>

            <div className='relative mx-auto grid w-full grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[0.52fr_1fr] 1000:grid-rows-[380px_187px_auto]'>
                <motion.img
                    src="/platform/hero-bg.webp"
                    alt="hero-bg.png"
                    width={800}
                    height={567}
                    className='absolute left-0 top-0 aspect-[775/567] w-full max-w-[480px] max-sm:hidden sm:max-w-[480px] 1000:max-w-[775px]'
                    variants={imageVariant}
                    initial="hidden"
                    animate={imageAnimated ? 'visible' : 'hidden'}
                />
                <motion.img
                    src="/platform/hero-bg.webp"
                    alt="hero-bg.png"
                    width={800}
                    height={567}
                    className='absolute left-0 top-0 aspect-[775/567] w-full min-w-[400px] max-w-[400px] -translate-x-14 400:translate-x-0 500:max-w-[400px] sm:hidden'
                    variants={imageVariant}
                    initial="hidden"
                    animate={imageAnimated ? 'visible' : 'hidden'}
                />
                <div className='absolute right-0 top-[230px] z-[50] h-[62px] w-[80px] bg-white 1000:hidden'>

                </div>
                <div className='col-span-2 hidden bg-main-background 1000:flex' />
                <div className='bg-main-background' />
                <div className='z-[10] col-span-1 row-span-2 relative px-4 pb-12 pt-[32px] text-black 800:pb-[66px] 800:pl-[59px] 800:pt-[69px]'>
                    {/* Animated white background rectangle */}
                    <motion.div
                        className='absolute inset-0 bg-white'
                        variants={rectangleVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    />
                    {/* Static text content */}
                    <div className='relative z-10'>
                        <p className='font-chakra-petch text-sm font-[400] uppercase text-c-black sm:text-base'>
                            _TRACER PLATFORM
                        </p>
                        <h1 className='mt-4 font-britti-sans text-[48px] !font-[400] leading-[0.9] tracking-tighter text-c-black sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
                            Actionable insights, optimised workloads
                        </h1>
                        <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-c-black sm:text-base md:mt-8'>
                            Born for the cloud, Tracer provides deep insights into your AI and computational workloads. From team productivity to cost and performance management. Tracer makes large, expensive analyses swift and dynamic.
                        </p>
                    </div>
                </div>
                <div className='z-[10] bg-white' />
            </div>
        </div>

    )
}

export default Hero
