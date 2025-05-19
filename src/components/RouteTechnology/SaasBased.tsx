import Image from 'next/image'

function SaasBased() {
    return (
        <div className=' bg-white text-black'>
            <div className='flex flex-col-reverse md:flex-row justify-between'>
                <h2 className='text-[32px] md:text-[56px] max-w-3xl tracking-[-2px] leading-[48px] py-4 pl-4'>Data stays in your hands: Unlike SaaS-based solutions, Tracer never exports data </h2>
                <div className='flex flex-col items-end'>
                    <div className='w-[133px] md:w-96 h-[55px] md:h-[100px] bg-[#1F1F1F]'></div>
                    <div className='w-[110px] md:w-80 h-[45px] md:h-[54px] bg-[#1F1F1F]'></div>
                </div>
            </div>
            <div className='mt-20 border-t border-b border-gray-200 h-auto lg:h-20 flex flex-col lg:flex-row justify-start items-center px-6'>
                <div className='border-l border-r h-auto lg:h-20  border-gray-200 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-4 lg:py-0 px-4 w-full lg:flex-1'>
                    <Image src="/technology/folder-interface.png" alt='Folder' width={30} height={30} className='w-[30px] h-[30px]' />
                    <div className='mt-3.5'>
                        <p className='text-2xl pb-1 font-medium leading-tight lg:leading-[10px]'>Data stays in your hands</p>
                        <span className='text-xs'>Unlike SaaS-based solutions, Tracer never exports data</span>
                    </div>
                </div>
                <div className='w-full lg:w-20 border-t lg:border-r h-10 lg:h-20'></div>
                <div className='hidden lg:block w-full lg:w-40 border-t lg:border-r h-20'></div>
                <div className='flex-1 border-r h-20'></div>
            </div>
            <div className='border-b border-gray-200 h-auto lg:h-20 flex flex-col lg:flex-row justify-start items-center px-6'>
                <div className='border-l border-r h-20  border-gray-200 flex items-center gap-4 px-4 flex-1'>

                </div>
                <div className='hidden lg:block w-20 border-r h-20'></div>
                <div className='hidden lg:block w-40 border-r h-20'></div>
                <div className="w-full lg:flex-1 border-r border-l lg:border-l-0 h-auto lg:h-20">
                    <div className='h-auto lg:h-20 py-4 lg:py-0  border-gray-200 flex flex-col lg:flex-row items-start lg:items-center gap-4 px-4 w-full lg:flex-1'>
                        <Image src="/technology/chip-cpu.png" alt='Chip' width={30} height={30} className='w-[30px] h-[30px]' />
                        <div className=''>
                            <p className='text-2xl pb-1 font-medium leading-tight lg:leading-[10px]'>Designed for regulated industries</p>
                            <span className='text-xs'>Engineered with US DoD, HIPAA, GxP, and GDPR-compliant technologies from the ground up </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////// */}
            <div className='border-b border-gray-200 h-auto lg:h-20 flex flex-col lg:flex-row justify-start items-center lg:px-6'>
            <div className="border-l border-b lg:border-b-0 border-r lg:border-r-0 h-auto lg:h-20 border-gray-200 flex items-center gap-4 px-6 lg:px-4 w-full lg:flex-1">
                    <div className='hidden lg:block w-20 border-r h-20'></div>
                    <div className='lg:h-20 h-auto border-r lg:border-r-0 border-l lg:border-l-0 border-gray-200 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-6 lg:py-0 px-6 flex-1'>
                        <Image src="/technology/setting.png" alt='Setting' width={30} height={30} className='w-[30px] h-[30px]' />
                        <div className=''>
                            <p className='text-2xl pb-1 font-medium leading-[10px]'>Open Source</p>
                            <span className='text-xs'>Transparency and extensibility at every layer </span>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-20 border-l lg:border-l-0 border-r h-10 lg:h-20'></div>
                <div className='hidden lg:block w-40 border-r h-20'></div>
                <div className='w-full border-t lg:border-t-0 lg:flex-1 border-r h-20 flex items-center px-6 lg:px-0'>
                    <div className='w-full lg:w-24 lg:border-l-0 border-l border-r h-20 flex justify-center items-center'><Image src="/technology/hipaa.png" alt='HIPAA' width={82} height={42} className='w-[82px] h-[42px]'/></div>
                    <div className='w-full lg:w-20 border-r h-20 flex justify-center items-center'><Image src="/technology/gdpr.png" alt='GDPR' width={48} height={48} className='w-[48px] h-[48px]'/></div>
                    <div className='w-full lg:w-20 border-r h-20 flex justify-center items-center'><Image src="/technology/dod.png" alt='DOD' width={48} height={48} className='w-[48px] h-[48px]'/></div>
                    </div>
                </div>
                <div className='border-b border-gray-200 h-auto lg:h-20 flex flex-col lg:flex-row justify-normal lg:justify-start items-center px-0 lg:px-6'>
                <div className='border-l border-r h-20  border-gray-200 flex items-center gap-4 px-4 flex-1'>

                </div>
                <div className='w-full border-b lg:border-b-0 lg:w-20 border-r-0 lg:border-r h-10 lg:h-20'></div>
                <div className='w-full border-r border-l lg:border-r-0 lg:border-l-0 lg:flex-1 h-auto lg:h-20 px-6'>
                    <div className='h-auto lg:h-20 border-r lg:border-r-0 border-l lg:border-l-0 border-gray-200 flex flex-col lg:flex-row items-start lg:items-center gap-4 py-4 lg:py-0 px-6 w-full lg:flex-1'>
                        <Image src="/technology/lock.png" alt='Lock' width={30} height={30} className='w-[30px] h-[30px]' />
                        <div className=''>
                            <p className='text-2xl pb-1 font-medium leading-[10px]'>Engineered in Rust</p>
                            <span className='text-xs'>The safest, most performant systems language ever built</span>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block w-40 border-r h-20'></div>

            </div>
        </div>
    )
}

export default SaasBased