"use client"
import Image from "next/image"

const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className='flex w-full flex-col items-center justify-center bg-[#FCFCFC]'>
            <div className="w-full max-w-[1440px] px-4">
                <div className="flex w-full flex-col items-end justify-between gap-[72px] pb-3 pt-[32px] md:flex-row md:items-start md:gap-0 md:pb-[168px]">
                    <div className="grid w-full grid-cols-2 gap-12 text-c-black md:w-fit md:grid-cols-[240px_224px_144px] md:gap-0">
                        <div className="col-span-2 md:col-span-1">
                            <Image src={"/shared/tracer-logo-black.png"} alt="tracer-logo-black" width={140} height={30} className="w-full max-w-[114px]" />
                        </div>
                        <div>
                            <h4 className="font-chakra-petch text-sm font-[400] uppercase leading-[1] text-[#868686]">
                                Company
                            </h4>
                            <ul className="mt-4 space-y-2 font-britti-sans text-[16px] font-[400] leading-[1] text-c-black md:mt-10 md:text-[20px]">
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    About
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Blog
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Resources
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Terms & Conditions
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Cookies Policy
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-chakra-petch text-sm font-[400] uppercase leading-[1] text-[#868686]">
                                Product
                            </h4>
                            <ul className="mt-4 space-y-2 font-britti-sans text-[16px] font-[400] leading-[1] text-c-black md:mt-10 md:text-[20px]">
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Platform
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Changelog
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Technology
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Performance
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Intelligence
                                </li>
                                <li className="cursor-pointer transition-all hover:opacity-80">
                                    Debug
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div onClick={scrollToTop} className="flex shrink-0 cursor-pointer items-center justify-center gap-1 transition-all hover:scale-[1.05] hover:opacity-70">
                        <p className="font-chakra-petch text-sm font-[400] leading-[1.3] text-c-black">
                            BACK TO TOP
                        </p>
                        <Image src={"/platform/arrow-tt.svg"} alt="arrow-tt" width={10} height={10} className="w-full max-w-[7.5px] translate-y-[-1px]" />
                    </div>
                </div>
                <div className="flex w-full items-center justify-start border-y-[1px] border-[#E8E8E8] py-3 md:h-[32px]">
                    <p className="font-britti-sans text-sm font-[400] leading-[1.3] text-[#868686]">
                        2025 Tracer.cloud Inc | A US Delaware Corporation, registered at 9 Wall Street, Suite 168 New York, NY 10005
                    </p>
                </div>
            </div>
            <div className="h-[48px] w-full">
                <Image src={"/platform/footer-b.png"} alt="footer-b" width={1600} height={60} className="h-full w-full object-fill md:object-cover" />
            </div>
        </div>
    )
}

export default Footer
