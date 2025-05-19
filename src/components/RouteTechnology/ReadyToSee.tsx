import React from 'react'
import Image from 'next/image'

function ReadyToSee() {
  return (
    <div className='pt-20'>
      <div className='px-4 sm:px-6 lg:px-2'>
        <div>
          <span className='uppercase chakra-petch'>get a personalized demo</span>
          <div className='flex flex-col lg:flex-row justify-between w-full pt-0 md:pt-6'>
            <h2 className='text-[32px] md:text-[56px] leading-[48px]'>Ready to see Tracer in action?</h2>
            <button className='bg-[#e8e8e8] self-center rounded-sm py-2 px-8 w-full lg:w-auto'>Talk to an Expert</button>
          </div>
        </div>
      </div>

      <div className='relative mt-8 w-fit'>
        <div className='absolute top-0 right-0 bg-white w-96 h-12 z-10 hidden md:block'></div>
        <Image src="/technology/readyToSee.png" alt='ReadyToSee' width={1200} height={600} className='hidden md:block' />
        <Image src="/technology/readyToSee-mobile.png" alt="ReadyToSeeMobile" width={600} height={400} className='md:hidden block' />
      </div>
    </div>
  )
}

export default ReadyToSee
