import React from 'react'
import Image from 'next/image'

function ReadyToSee() {
  return (
    <div className='pt-20'>
      <div className='px-4 sm:px-6 lg:px-2'>
        <div>
          <span className='chakra-petch uppercase'>get a personalized demo</span>
          <div className='flex w-full flex-col justify-between pt-0 md:pt-6 lg:flex-row'>
            <h2 className='text-[32px] leading-[48px] md:text-[56px]'>Ready to see Tracer in action?</h2>
            <button className='w-full self-center rounded-sm bg-[#e8e8e8] px-8 py-2 text-black lg:w-auto'>Talk to an Expert</button>
          </div>
        </div>
      </div>

      <div className='relative mt-8 w-fit'>
        <div className='absolute right-0 top-0 z-10 hidden h-12 w-96 bg-white md:block'></div>
        <Image src="/technology/readyToSee.png" alt='ReadyToSee' width={1200} height={600} className='hidden md:block' />
        <Image src="/technology/readyToSee-mobile.png" alt="ReadyToSeeMobile" width={600} height={400} className='block md:hidden' />
      </div>
    </div>
  )
}

export default ReadyToSee
