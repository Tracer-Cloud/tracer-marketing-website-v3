import Image from "next/image"

const Monitoring = () => {
    return (
        <div className='w-full flex items-center relative  justify-center flex-col overflow-hidden'>
            <Image src={"/home/monitoting-section-img.png"} alt="monitoting-section-img" width={955} height={800} className="w-full animate-pulse md:translate-x-0 translate-x-20 md:translate-y-0 -translate-y-14 max-w-[500px] lg:max-w-[800px] 1300:max-w-[955px] absolute top-0 right-0" />
            <div className='w-full max-w-[1440px] grid lg:grid-cols-3  lg:grid-rows-[auto_auto_auto_auto_auto] border-b border-[#E8E8E8] z-[10]'>
                <div className='w-full lg:col-span-3 pt-30 md:pt-14 pb-4 md:pb-12 px-4 md:px-6'>
                    <div className='w-full max-w-[685px] text-c-off-white'>
                        <h2 className='font-[400] text-[32px] md:text-[40px] font-britti-sans leading-[0.9]'>
                            One platform from monitoring <br className="sm:flex hidden" /> to insights, for scientists to executives
                        </h2>
                        <p className='mt-4 md:mt-3 text-c-off-white font-britti-sans font-[400] text-sm md:text-[16px] leading-[1.1] max-w-[560px]'>
                            The Tracer Platform empowers teams across Data Science, Engineering,
                            DevOps, and Machine Learning to monitor and optimize everything they build
                            and run in the cloud.
                        </p>
                        <button className='bg-[#E8E8E8] font-britti-sans h-[48px] px-8 text-c-black font-[400] sm:w-fit w-full text-base cursor-pointer mt-8 md:mt-10'>
                            Talk to an Expert
                        </button>
                    </div>
                </div>
                <div className='w-full bg-white md:pt-3 px-4 pt-4 md:px-3'>
                    <div className='w-full  bg-main-background h-[215px] lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full lg:col-span-2' />
                <div className='w-full bg-white text-black  flex-col  '>
                    <div className='flex items-center justify-center gap-12 md:gap-20 flex-col px-4 py-3 md:p-3  border-r border-b border-[#E8E8E8]'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='font-[400] text-sm text-c-black font-britti-sans'>
                                01–03
                            </p>
                            <p className='font-[400] text-sm text-c-black font-britti-sans'>
                                TRACER PERFORMANCE
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-[400] text-[24px] md:text-[32px] leading-[0.9] font-britti-sans'>
                                Predict and optimize <br className="sm:hidden" /> compute requirements
                            </h2>
                            <p className='mt-2 md:mt-3 text-c-black font-[400] text-sm md:text-[16px] leading-[1.1] max-w-[560px]'>
                                Forecast the exact running time and compute needs of your pipelines. Further optimize your underutilized instances and increase the usage of AI models in a cost-efficient manner
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full  bg-white text-black md:pt-3 px-4 pt-4 md:px-3 border-l border-[#E8E8E8]'>
                    <div className='w-full  bg-main-background h-[215px] lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full ' />
                <div className='w-full bg-white' />
                <div className='w-full bg-white text-black  flex-col'>
                    <div className='flex items-center justify-center gap-12 md:gap-20 flex-col px-4 py-3 md:p-3  border-x border-b border-[#E8E8E8]'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='font-[400] font-britti-sans text-sm text-c-black'>
                                02–03
                            </p>
                            <p className='font-[400] font-britti-sans text-sm text-c-black'>
                                TRACER INTELLIGENCE
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[0.9]'>
                                Total Visibility into Computational Infrastructure
                            </h2>
                            <p className='mt-2 md:mt-3 font-britti-sans text-c-black font-[400] text-sm md:text-[16px] leading-[1.1] max-w-[560px]'>
                                Gain real-time, highly granular insights into every workload and process, independent of coding language or framework, including highly parallelized processes across instances
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white md:pt-3 px-4 pt-4 md:px-3 border-l border-[#E8E8E8]'>
                    <div className='w-full bg-main-background h-[215px] lg:h-[287px]'>

                    </div>
                </div>
                <div className='w-full bg-white' />
                <div className='w-full bg-white' />
                <div className='w-full bg-white text-black  flex-col'>
                    <div className='flex items-center justify-center gap-12 md:gap-31 flex-col px-4 py-3 md:p-3  border-x border-b border-[#E8E8E8]'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='font-[400] text-sm font-britti-sans text-c-black'>
                                03–03
                            </p>
                            <p className='font-[400] text-sm font-britti-sans text-c-black'>
                                TRACER DEBUG
                            </p>
                        </div>
                        <div className="w-full">
                            <h2 className='font-[400] font-britti-sans text-[24px] md:text-[32px] leading-[0.9]'>
                                Fix issues instantly
                            </h2>
                            <p className='mt-2 md:mt-2 text-c-black font-britti-sans font-[400] text-sm md:text-[16px] leading-[1.1] max-w-[560px]'>
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
