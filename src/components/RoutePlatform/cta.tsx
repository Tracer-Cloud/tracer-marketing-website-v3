import Image from 'next/image'
import React from 'react'

const Cta = () => {
    return (
        <div className='bg-[#FCFCFC] w-full flex text-c-black flex-col items-center justify-center gap-6 md:gap-8'>
            <div className='w-full max-w-[1440px] px-4 pt-6 md:pt-[64px] md:flex-row flex-col flex items-start md:items-end justify-between'>
                <div className='flex flex-col items-start'>
                    <p className='font-[400] font-britti-sans uppercase leading-[1] text-[14px] sm:text-[16px] text-c-black'>
                        get a personalized demo
                    </p>
                    <h2 className='mt-4 leading-[0.9] sm:leading-[0.8] font-britti-sans font-[400] text-[32px] md:text-[56px] tracking-tighter text-c-black'>
                        Ready to see Tracer <br className='sm:hidden' /> in action?
                    </h2>
                </div>
                <button className='cursor-pointer w-full font-britti-sans md:mt-0 mt-6 md:w-fit shrink-0  text-c-black text-sm sm:text-base font-[400] hover:opacity-80 transition-all bg-[#E8E8E8] px-8 h-[48px]'>
                    Talk to an Expert
                </button>
            </div>
            <div className='w-full relative h-[200px] sm:h-[330px]'>
                <div className='bg-[#FCFCFC] h-[45px] sm:h-[54px] w-[112px] sm:w-[458px] absolute top-0 right-0' />

                <Image src={"/car.webp"} alt='car' width={1500} height={400} className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default Cta
