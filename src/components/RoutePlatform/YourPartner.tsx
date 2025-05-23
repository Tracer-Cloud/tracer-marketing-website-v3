import Image from 'next/image'
import React from 'react'

const YourPartner = () => {
    return (
        <div className='relative flex w-full items-center justify-center'>
            {/* shape black  */}
            <div className='absolute left-0 top-full z-[20] h-[45px] w-[112px] bg-c-black sm:h-[54px] sm:w-[448px]' />
            <div className='w-full max-w-[1440px] px-4 pb-3 pt-4 md:p-4'>
                <div className='md:gap-30 flex w-full flex-col items-center justify-center gap-12 border border-[#404040]'>
                    <div className='flex w-full flex-col items-start justify-between px-4 pt-6 md:px-6 lg:flex-row'>
                        <div className='w-full max-w-[800px]'>
                            <h2 className='font-britti-sans text-[32px] font-[400] leading-[1] tracking-tight text-c-off-white md:text-[56px] md:leading-[0.85] md:tracking-tighter'>
                                Your partner <br className='md:hidden' /> in every step  <br className='hidden md:flex' /> of <br className='md:hidden' /> your infrastructure journey
                            </h2>
                            <p className='mt-5 font-britti-sans text-sm font-[400] text-c-off-white md:text-base'>
                                From your first steps building new computational pipelines to optimizing existing <br className='hidden md:flex' /> AI models in the cloud, Tracer is your partner for your shift to digital and AI.
                            </p>
                        </div>
                        <button className='mt-8 h-[48px] w-full cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-base font-[400] text-c-black transition-all hover:opacity-80 md:mt-0 md:w-fit'>
                            See our Technology
                        </button>
                        <div className='mt-12 md:hidden'>
                            <ul className='space-y-4 text-sm font-[400] text-c-off-white'>
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
                    <div className='w-full overflow-hidden border-[#404040] md:border-t 1200:h-[360px]'>
                        <Image src={"/platform/partner-img.png"} alt='partner-img.png' width={1400} height={380} className='hidden w-full max-w-[1480px] shrink-0 md:flex' />
                        <Image src={"/platform/partner-img-mb.png"} alt='partner-img.png' width={1400} height={380} className='w-full max-w-[1480px] shrink-0 md:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourPartner
