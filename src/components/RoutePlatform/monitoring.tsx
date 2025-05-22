import Image from "next/image"

const Monitoring = () => {
    return (
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
            <Image src={"/platform/monitoting-section-img.png"} alt="monitoting-section-img" width={955} height={800} className="absolute right-0 top-0 w-full max-w-[500px] -translate-y-14 translate-x-20 animate-pulse md:translate-x-0 md:translate-y-0 lg:max-w-[800px] 1300:max-w-[955px]" />
            <div className='z-[10] grid w-full max-w-[1440px] border-b border-[#E8E8E8] lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto_auto]'>
                <div className='pt-30 w-full px-4 pb-4 md:px-6 md:pb-12 md:pt-14 lg:col-span-3'>
                    <div className='w-full max-w-[685px] text-c-off-white'>
                        <h2 className='font-britti-sans text-[32px] font-[400] leading-[0.9] md:text-[40px]'>
                            One platform from monitoring <br className="hidden sm:flex" /> to insights, for scientists to executives
                        </h2>
                        <p className='mt-4 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-off-white md:mt-3 md:text-[16px]'>
                            The Tracer Platform empowers teams across Data Science, Engineering,
                            DevOps, and Machine Learning to monitor and optimize everything they build
                            and run in the cloud.
                        </p>
                        <button className='mt-8 h-[48px] w-full cursor-pointer bg-[#E8E8E8] px-8 font-britti-sans text-base font-[400] text-c-black sm:w-fit md:mt-10'>
                            Talk to an Expert
                        </button>
                    </div>
                </div>
                <div className='w-full bg-white px-4 pt-4 md:px-3 md:pt-3'>
                    <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full lg:col-span-2' />
                <div className='w-full flex-col bg-white text-black'>
                    <div className='flex flex-col items-center justify-center gap-12 border-b border-r border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3'>
                        <div className='flex w-full items-center justify-between'>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                01–03
                            </p>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                TRACER PERFORMANCE
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                Predict and optimize <br className="sm:hidden" /> compute requirements
                            </h2>
                            <p className='mt-2 max-w-[560px] text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                Forecast the exact running time and compute needs of your pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full border-l border-[#E8E8E8] bg-white px-4 pt-4 text-black md:px-3 md:pt-3'>
                    <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full' />
                <div className='w-full bg-white' />
                <div className='w-full flex-col bg-white text-black'>
                    <div className='flex flex-col items-center justify-center gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:gap-20 md:p-3'>
                        <div className='flex w-full items-center justify-between'>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                02–03
                            </p>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                TRACER INTELLIGENCE
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                Total Visibility into Computational Infrastructure
                            </h2>
                            <p className='mt-2 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:mt-3 md:text-[16px]'>
                                Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelized processes across instances
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full border-l border-[#E8E8E8] bg-white px-4 pt-4 md:px-3 md:pt-3'>
                    <div className='h-[215px] w-full bg-main-background lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full bg-white' />
                <div className='w-full bg-white' />
                <div className='w-full flex-col bg-white text-black'>
                    <div className='md:gap-31 flex flex-col items-center justify-center gap-12 border-x border-b border-[#E8E8E8] px-4 py-3 md:p-3'>
                        <div className='flex w-full items-center justify-between'>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                03–03
                            </p>
                            <p className='font-britti-sans text-sm font-[400] text-c-black'>
                                TRACER DEBUG
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-britti-sans text-[24px] font-[400] leading-[0.9] md:text-[32px]'>
                                Fix issues instantly
                            </h2>
                            <p className='mt-2 max-w-[560px] font-britti-sans text-sm font-[400] leading-[1.1] text-c-black md:mt-2 md:text-[16px]'>
                                Gain deep insights into the root causes of bugs acrossall analyses, recognise the error type, and solve instantly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monitoring
