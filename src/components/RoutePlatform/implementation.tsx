import Image from 'next/image'
import React from 'react'

const Implementation = () => {
    return (
        <div className='w-full flex items-center justify-center border-b border-[#E8E8E8] flex-col relative text-black bg-c-off-white'>
            <div className='w-full h-full max-w-[1140px] grid grid-cols-3 absolute top-0 900:px-0 px-4'>
                <div className='border-l border-[#E8E8E8]' />
                <div className='border-x-[1px] border-[#E8E8E8]' />
                <div className='border-r border-[#E8E8E8]' />
            </div>
            <div className='w-full max-w-[1440px]  text-black z-[10] px-4 flex gap-6 md:gap-[82px] pt-24 md:pt-[162px] pb-4 flex-col items-center justify-center'>
                <div className='w-full flex items-start lg:gap-0 gap-4 lg:items-end lg:flex-row flex-col justify-between'>
                    <h2 className='font-[400] font-britti-sans text-[70px] md:block hidden xl:text-[96px] leading-[0.9] text-c-black tracking-tight'>
                        Our Implementation <br /> takes 1 line of code
                    </h2>
                    <h2 className='font-[400] text-[40px] md:hidden font-britti-sans  leading-[0.85] text-c-black tracking-tighter'>
                        Our Implemen- <br /> tation takes 1 line <br /> of code
                    </h2>
                    <div className='max-w-[450px] text-c-black'>
                        <p className='font-[400] text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
                            Tracer connects through 1 line of code straight with your kernel-level system. It works instantly once copied into your Docker file or outside the file.
                        </p>
                        <p className='font-[400] mt-2 text-sm sm:text-[16px] font-britti-sans leading-[1.15] tracking-tight'>
                            Our integration platform enables real-time sharing of DevOps findings across all your systems, apps, and services, to fasten AI adoption and to enable a new dawn of science.
                        </p>
                    </div>
                </div>
                <div className='md:gap-6 grid grid-cols-3 lg:grid-cols-6 w-full'>
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/bash.svg"} alt='bash' width={200} height={80} className='w-full max-w-[59px] md:max-w-[111px]' />
                    </div>
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/box-split.svg"} alt='box-split' width={200} height={80} className='w-full max-w-[47px] md:max-w-[76px]' />
                    </div>
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/air-flow.svg"} alt='air-flow' width={200} height={80} className='w-full max-w-[59px] md:max-w-[126px]' />
                    </div>
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/aws-sv.svg"} alt='aws-sv' width={200} height={80} className='w-full max-w-[45px] md:max-w-[88px]' />
                    </div>
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/next-flow.svg"} alt='next-flow' width={200} height={80} className='w-full max-w-[64px] md:max-w-[124px]' />
                    </div>
                    <div className='lg:flex hidden' />
                    <div className='lg:flex hidden' />
                    <div className='aspect-square border border-[#E8E8E8] bg-[#FCFCFC] flex items-center justify-center'>
                        <Image src={"/ununto.svg"} alt='ununto' width={200} height={80} className='w-full max-w-[60px] md:max-w-[113px]' />
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1440px] px-4 pt-10 md:pt-12 pb-10 md:pb-24 z-[10]'>
                <h2 className='font-[400] text-[20px] md:text-[32px] text-c-black font-britti-sans text-start md:text-end w-full leading-[1] tracking-tight'>
                    Monitoring insights for the worldʼs most complex industries
                </h2>
                <div className='w-full mt-6 md:mt-[18px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[0.16fr_0.21fr_0.27fr_0.36fr] gap-4 md:gap-2'>
                    <div>
                        <Image src={"/m-1.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Automotive</h3>
                    </div>
                    <div>
                        <Image src={"/m-2.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Computational Fluid Dynamic</h3>
                    </div>
                    <div>
                        <Image src={"/m-3.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Pharma & Biotech</h3>
                    </div>
                    <div>
                        <Image src={"/m-4.webp"} alt='' width={500} height={500} className='w-full sm:h-auto h-[136px] md:object-fill object-cover' />
                        <h3 className='mt-2 text-[24px] md:text-[40px] fobt-[400] tracking-tighter text-c-black leading-[1] font-britti-sans'>Aerospace</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Implementation
