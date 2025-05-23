import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='overflow-hidden bg-white'>

            <div className='relative mx-auto grid w-full grid-cols-1 grid-rows-[290px_auto] 1000:grid-cols-[0.52fr_1fr] 1000:grid-rows-[380px_187px_auto]'>
                <Image src={"/platform/hero-bg.webp"} alt='hero-bg.png' width={800} height={567} className='absolute left-0 top-0 aspect-[775/567] w-full max-w-[480px] max-sm:hidden sm:max-w-[480px] 1000:max-w-[775px]' />
                <Image src={"/platform/hero-bg.webp"} alt='hero-bg.png' width={800} height={567} className='absolute left-0 top-0 aspect-[775/567] w-full min-w-[400px] max-w-[400px] -translate-x-14 400:translate-x-0 500:max-w-[400px] sm:hidden' />
                <div className='absolute right-0 top-[230px] z-[50] h-[62px] w-[80px] bg-white 1000:hidden'>

                </div>
                <div className='col-span-2 hidden bg-main-background 1000:flex' />
                <div className='bg-main-background' />
                <div className='z-[10] col-span-1 row-span-2 bg-white px-4 pb-12 pt-[32px] text-black 800:pb-[66px] 800:pl-[59px] 800:pt-[69px]'>
                    <p className='font-chakra-petch text-sm font-[400] uppercase text-c-black sm:text-base'>
                        _TRACER PLATFORM
                    </p>
                    <h1 className='mt-4 font-britti-sans text-[48px] !font-[400] leading-[0.9] tracking-tighter text-c-black sm:text-[70px] 1100:text-[80px] 1300:text-[104px]'>
                        Actionable insights, optimized workloads
                    </h1>
                    <p className='mt-4 max-w-[630px] font-britti-sans text-sm font-[400] text-c-black sm:text-base md:mt-8'>
                        Born for the cloud, Tracer Platform gives you deep insights into your AI and computational workloads. From team productivity to cost and performance management. Tracer makes large, expensive analyses a swift, dynamic experimentation.
                    </p>
                </div>
                <div className='z-[10] bg-white' />
            </div>
        </div>

    )
}

export default Hero
