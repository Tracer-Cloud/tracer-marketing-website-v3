import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-white overflow-hidden'>

            <div className='w-full grid relative grid-cols-1 1000:grid-cols-[0.52fr_1fr] grid-rows-[290px_auto] 1000:grid-rows-[380px_187px_auto] mx-auto '>
                <Image src={"/platform/hero-bg.webp"} alt='hero-bg.png' width={800} height={567} className='w-full animate-pulse max-sm:hidden max-w-[480px] sm:max-w-[480px] 1000:max-w-[775px] aspect-[775/567] absolute top-0 left-0' />
                <Image src={"/platform/hero-bg.webp"} alt='hero-bg.png' width={800} height={567} className='w-full sm:hidden animate-pulse max-w-[400px] 400:translate-x-0 -translate-x-14 min-w-[400px] 500:max-w-[400px] aspect-[775/567] absolute top-0 left-0' />
                <div className='w-[80px] h-[62px] bg-white 1000:hidden z-[50] absolute right-0 top-[230px]'>

                </div>
                <div className='col-span-2 bg-main-background 1000:flex hidden' />
                <div className='bg-main-background' />
                <div className='col-span-1 row-span-2 bg-white text-black z-[10] pt-[32px] 800:pt-[69px] px-4 800:pl-[59px] pb-12 800:pb-[66px]'>
                    <p className='font-[400] font-britti-sans text-sm sm:text-base text-c-black uppercase'>
                        _TRACER PLATFORM
                    </p>
                    <h1 className='!font-[400] text-[48px] font-britti-sans sm:text-[70px] 1100:text-[80px] 1300:text-[104px] text-c-black leading-[0.9] mt-4 tracking-tighter'>
                        Actionable insights, optimized workloads
                    </h1>
                    <p className='mt-4 md:mt-8 text-sm sm:text-base font-[400] font-britti-sans text-c-black max-w-[630px]'>
                        Born for the cloud, Tracer Platform gives you deep insights into your AI and computational workloads. From team productivity to cost and performance management. Tracer makes large, expensive analyses a swift, dynamic experimentation.
                    </p>
                </div>
                <div className='bg-white z-[10]' />
            </div>
        </div>

    )
}

export default Hero
