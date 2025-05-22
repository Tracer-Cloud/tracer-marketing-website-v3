import Image from 'next/image'
import React from 'react'

const GainVisibility = () => {
    return (
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FCFCFC] pt-[56px] text-black md:pt-[127px]'>
            <div className='absolute grid h-full w-full grid-cols-3 px-4 md:hidden'>
                <div className='border-l border-[#E8E8E8]' />
                <div className='border-x-[1px] border-[#E8E8E8]' />
                <div className='border-r border-[#E8E8E8]' />
            </div>
            <div className='z-[10] w-full max-w-[1440px] px-4'>
                <h1 className='mb-10 hidden max-w-[1000px] font-britti-sans text-[40px] font-[400] leading-[1] tracking-tight md:mb-[-20px] md:block md:text-[70px] md:leading-[88px] 1300:max-w-none 1300:text-[96px]'>
                    Gain full visibility into pipeline performance, cost, usage and <br className='hidden 1300:flex' /> turn insights into better decisions.
                </h1>
                <h1 className='mb-10 max-w-[1000px] font-britti-sans text-[40px] font-[400] leading-[.9] tracking-tight md:mb-[-20px] md:hidden md:text-[70px] md:leading-[80px] 1300:max-w-none 1300:text-[96px]'>
                    Gain full visibility into pipeline performance, cost, and usage — and turn insights into better decisions.
                </h1>
                <div className='grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[48px]'>
                        <Image src={"/platform/icons/monitor.svg"} alt='monitor' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                Compute Requirement <br /> Predictor
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Accurately predict how much CPU, RAM, and memory <br /> any pipeline needs for any file size and tools
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[48px]'>
                        <Image src={"/platform/icons/monitor-2.svg"} alt='monitor-2' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                Bottleneck Center
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Review the compute bottlenecks across your organisation, recognizing underutlized instances, slow tools, <br /> and low performance
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[48px]'>
                        <Image src={"/platform/icons/eye.svg"} alt='eye' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                Democratize Pipeline <br /> Knowledge
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Share real-time pipeline status with all team member <br /> for ultimate visibility
                            </p>
                        </div>
                    </div>
                    <div className='hidden md:flex' />
                    <div className='hidden md:flex' />
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[65px]'>
                        <Image src={"/platform/icons/phone.svg"} alt='phone' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                Runtime Calculator
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Review when your pipeline will finish
                            </p>
                        </div>
                    </div>
                    <div className='hidden md:flex' />
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[48px]'>
                        <Image src={"/platform/icons/cloude.svg"} alt='cloude' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                Cloud Cost Dashboard
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Review where your cloud costs are coming from - across department to sub-tool level and everything in between
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start justify-between gap-8 border border-[#E8E8E8] bg-off-white p-4 md:gap-[48px]'>
                        <Image src={"/platform/icons/camera.svg"} alt='camera' width={65} height={65} className='aspect-square w-full max-w-[40px] shrink-0 sm:max-w-[56px]' />
                        <div className=''>
                            <h3 className='font-britti-sans text-[24px] font-[400] leading-[1] tracking-tighter text-c-black md:text-[32px]'>
                                System Of Record
                            </h3>
                            <p className='mt-2 font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:text-[16px]'>
                                Know what analysis you did, yesterday, last month,  <br />and years back
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[216px] w-full md:h-[346px]'>
                <Image src={"/platform/engine-shape.webp"} alt='engine-shape.webp' width={600} height={600} className='absolute bottom-[-60px] left-[-180px] w-full max-w-[350px] shrink-0 md:bottom-[-105px] md:left-[-35px] md:max-w-[550px]' />
                <div className='absolute bottom-0 right-0 flex w-[133px] flex-col items-end justify-center md:w-[529px]'>
                    <div className='h-[45px] w-[90%] bg-main-background md:h-[54px]' />
                    <div className='h-[55px] w-full bg-main-background md:h-[103px]' />

                </div>
            </div>
        </div>
    )
}

export default GainVisibility