import Image from 'next/image'
import React from 'react'

const YourPartner = () => {
    return (
        <div className='w-full flex items-center justify-center relative'>
            {/* shape black  */}
            <div className='w-[112px] sm:w-[448px] h-[45px] sm:h-[54px] z-[20] bg-c-black absolute left-0 top-full' />
            <div className='w-full max-w-[1440px] px-4 pt-4 pb-3 md:p-4'>
                <div className='w-full gap-12 md:gap-30 border border-[#404040] flex flex-col items-center justify-center'>
                    <div className='w-full flex items-start justify-between lg:flex-row flex-col px-4 md:px-6 pt-6'>
                        <div className='w-full max-w-[800px]'>
                            <h2 className='text-c-off-white font-[400] font-britti-sans text-[32px] md:text-[56px] leading-[1] md:leading-[0.85] tracking-tight md:tracking-tighter'>
                                Your partner <br className='md:hidden ' /> in every step  <br className='md:flex hidden' /> of <br className='md:hidden ' /> your infrastructure journey
                            </h2>
                            <p className='text-c-off-white font-[400] font-britti-sans text-sm md:text-base mt-5'>
                                From your first steps building new computational pipelines to optimizing existing <br className='md:flex hidden' /> AI models in the cloud, Tracer is your partner for your shift to digital and AI.
                            </p>
                        </div>
                        <button className='cursor-pointer font-britti-sans md:w-fit w-full md:mt-0 mt-8 text-c-black text-base font-[400] hover:opacity-80 transition-all bg-[#E8E8E8] px-8 h-[48px]'>
                            See our Technology
                        </button>
                        <div className='md:hidden mt-12'>
                            <ul className='text-c-off-white space-y-4 font-[400] text-sm'>
                                <li className='space-x-2.5'>
                                    <span>{`[01]`}</span>
                                    <span> {`[Gain visibility]`}</span>
                                </li>
                                <li className='space-x-2.5'>
                                    <span>{`[02]`}</span>
                                    <span> {`[Review existing pipelines]`}</span>
                                </li>
                                <li className='space-x-2.5'>
                                    <span>{`[03]`}</span>
                                    <span> {`[Develop new analyses]`}</span>
                                </li>
                                <li className='space-x-2.5'>
                                    <span>{`[04]`}</span>
                                    <span> {`[Recognise bottlenecks]`}</span>
                                </li>
                                <li className='space-x-2.5'>
                                    <span>{`[05]`}</span>
                                    <span> {`[Optimize for speed, costs, and quality]`}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full 1200:h-[360px] overflow-hidden md:border-t border-[#404040]'>
                        <Image src={"/partner-img.png"} alt='partner-img.png' width={1400} height={380} className='shrink-0 md:flex hidden w-full max-w-[1480px]' />
                        <Image src={"/partner-img-mb.png"} alt='partner-img.png' width={1400} height={380} className='shrink-0 md:hidden w-full max-w-[1480px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourPartner
