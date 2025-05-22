import React from 'react'
import Image from 'next/image'

function ReadyToSee() {
  return (
    <div className='bg-[#FCFCFC] pt-20'>
      <div className='px-4 text-[#202020] sm:px-6 lg:px-2'>
        <div>
          <span className='font-chakra-petch uppercase'>get a personalized demo</span>
          <div className='flex w-full flex-col justify-between pt-0 md:pt-6 lg:flex-row'>
            <h2 className='text-[32px] leading-[48px] tracking-tight md:text-[56px]'>Ready to see Tracer in action?</h2>
            <button className='mt-6 h-[48px] w-full shrink-0 cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-sm font-[400] text-c-black transition-all hover:opacity-80 sm:text-base md:mt-0 md:w-fit'>
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      <div className='relative mt-8 w-full'>
        <div className='absolute right-0 top-0 z-10 hidden h-12 w-96 bg-white md:block'></div>
        <Image src="/technology/ready-to-seeeee.png" alt='ReadyToSee' width={1200} height={600} className='hidden w-full md:block' />
        <Image src="/technology/readyToSee-mobile.png" alt="ReadyToSeeMobile" width={600} height={400} className='block w-full md:hidden' />
      </div>
    </div>
  )
}

export default ReadyToSee
