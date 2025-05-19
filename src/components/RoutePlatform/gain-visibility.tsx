import Image from 'next/image'
import React from 'react'

const GainVisibility = () => {
    return (
        <div className='w-full pt-[56px] md:pt-[127px] relative text-black flex items-center overflow-hidden flex-col justify-center bg-[#FCFCFC]'>
            <div className='w-full h-full grid grid-cols-3 absolute px-4 md:hidden'>
                <div className='border-l border-[#E8E8E8]' />
                <div className='border-x-[1px] border-[#E8E8E8]' />
                <div className='border-r border-[#E8E8E8]' />
            </div>
            <div className='w-full max-w-[1440px] px-4 z-[10]'>
                <h1 className='font-[400] font-britti-sans md:block hidden text-[40px] md:text-[70px] 1300:text-[96px] md:mb-[-20px] mb-10 leading-[1] md:leading-[88px] tracking-tight 1300:max-w-none max-w-[1000px]'>
                    Gain full visibility into pipeline performance, cost, usage and <br className='1300:flex hidden' /> turn insights into better decisions.
                </h1>
                <h1 className='font-[400] font-britti-sans md:hidden text-[40px] md:text-[70px] 1300:text-[96px] md:mb-[-20px] mb-10 leading-[.9] md:leading-[80px] tracking-tight  1300:max-w-none max-w-[1000px]'>
                    Gain full visibility into pipeline performance, cost, and usage — and turn insights into better decisions.
                </h1>
                <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 '>
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[48px] items-start justify-between'>
                        <Image src={"/platform/icons/monitor.svg"} alt='monitor' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-britti-sans font-[400] text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                Compute Requirement <br /> Predictor
                            </h3>
                            <p className='mt-2 text-c-black font-britti-sans font-[400] text-sm md:text-[16px] leading-[1.1]'>
                                Accurately predict how much CPU, RAM, and memory <br /> any pipeline needs for any file size and tools
                            </p>
                        </div>
                    </div>
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[48px] items-start justify-between'>
                        <Image src={"/platform/icons/monitor-2.svg"} alt='monitor-2' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                Bottleneck center
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Review the compute bottlenecks across your organisation, recognizing underutlized instances, slow tools, <br /> and low performance
                            </p>
                        </div>
                    </div>
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[48px] items-start justify-between'>
                        <Image src={"/platform/icons/eye.svg"} alt='eye' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                Democratize pipeline <br /> knowledge
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Share real-time pipeline status with all team member <br /> for ultimate visibility
                            </p>
                        </div>
                    </div>
                    <div className='md:flex hidden' />
                    <div className='md:flex hidden' />
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[65px] items-start justify-between'>
                        <Image src={"/platform/icons/phone.svg"} alt='phone' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                Runtime Calculator
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Review when your pipeline will finish
                            </p>
                        </div>
                    </div>
                    <div className='md:flex hidden' />
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[48px] items-start justify-between'>
                        <Image src={"/platform/icons/cloude.svg"} alt='cloude' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                Cloud Cost Dashboard
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Review where your cloud costs are coming from - across department to sub-tool level and everything in between
                            </p>
                        </div>
                    </div>
                    <div className='border border-[#E8E8E8] bg-off-white p-4 flex flex-col gap-8 md:gap-[48px] items-start justify-between'>
                        <Image src={"/platform/icons/camera.svg"} alt='camera' width={65} height={65} className='shrink-0 aspect-square w-full max-w-[40px] sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='text-c-black font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[1] tracking-tighter'>
                                System of record
                            </h3>
                            <p className='mt-2 text-c-black font-[400] font-britti-sans text-sm md:text-[16px] leading-[1.1]'>
                                Know what analysis you did, yesterday, last month,  <br />and years back
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full relative h-[216px] md:h-[346px]'>
                <Image src={"/platform/engine-shape.webp"} alt='engine-shape.webp' width={600} height={600} className='shrink-0 animate-pulse max-w-[350px] md:max-w-[550px] absolute bottom-[-60px] md:bottom-[-105px] left-[-180px] md:left-[-35px]  w-full ' />
                <div className='w-[133px] md:w-[529px] flex items-end justify-center flex-col absolute bottom-0 right-0'>
                    <div className='w-[90%] h-[45px] md:h-[54px] bg-main-background' />
                    <div className='w-full h-[55px] md:h-[103px] bg-main-background' />

                </div>
            </div>
        </div>
    )
}

export default GainVisibility