import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <div className='flex w-full flex-col items-center justify-center gap-6 bg-[#FCFCFC] text-c-black md:gap-8'>
            <div className='flex w-full max-w-[1440px] flex-col items-start justify-between px-4 pt-6 md:flex-row md:items-end md:pt-[64px]'>
                <div className='flex flex-col items-start'>
                    <p className='font-chakra-petch text-[14px] font-[400] uppercase leading-[1] text-c-black sm:text-[16px]'>
                        get a personalised demo
                    </p>
                    <h2 className='mt-4 font-britti-sans text-[32px] font-[400] leading-[0.9] tracking-tighter text-c-black sm:leading-[0.8] md:text-[56px]'>
                        Ready to see Tracer <br className='sm:hidden' /> in action?
                    </h2>
                </div>
                <button className='mt-6 h-[48px] w-full shrink-0 cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-sm font-[400] text-c-black transition-all hover:opacity-80 sm:text-base md:mt-0 md:w-fit'>
                    Talk to an Expert
                </button>
            </div>
            <div className='relative h-[200px] w-full sm:h-[330px]'>
                <div className='absolute right-0 top-0 h-[45px] w-[112px] bg-[#FCFCFC] sm:h-[54px] sm:w-[458px]' />

                <Image src={"/platform/car.webp"} alt='car' width={1500} height={400} className='h-full w-full object-cover' />
            </div>
        </div>
    )
}

export default Cta
