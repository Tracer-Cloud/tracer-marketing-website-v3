"use client"
import Image from "next/image"

const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className='w-full bg-[#FCFCFC] flex items-center justify-center flex-col'>
            <div className="w-full max-w-[1440px] px-4">
                <div className="w-full flex items-end md:items-start md:gap-0 gap-[72px] justify-between md:flex-row flex-col pt-[32px] pb-3 md:pb-[168px]">
                    <div className="grid grid-cols-2 md:grid-cols-[240px_224px_144px] md:gap-0 gap-12 text-c-black md:w-fit w-full">
                        <div className="col-span-2 md:col-span-1">
                            <Image src={"/tracker-logo-black.png"} alt="tracker-logo-black" width={140} height={30} className="w-full max-w-[114px]" />
                        </div>
                        <div>
                            <h4 className="font-[400] font-britti-sans text-sm text-[#868686] leading-[1] uppercase">
                                Company
                            </h4>
                            <ul className="mt-4 md:mt-10 font-britti-sans text-c-black space-y-2 font-[400] text-[16px] md:text-[20px] leading-[1]">
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    About
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Blog
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Resources
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Terms & Conditions
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Cookies Policy
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-[400] font-britti-sans text-sm text-[#868686] leading-[1] uppercase">
                                Product
                            </h4>
                            <ul className="mt-4 md:mt-10 font-britti-sans text-c-black space-y-2 font-[400] text-[16px] md:text-[20px] leading-[1]">
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Platform
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Changelog
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Technology
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Performance
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Intelligence
                                </li>
                                <li className="hover:opacity-80 transition-all cursor-pointer">
                                    Debug
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div onClick={scrollToTop} className="flex hover:opacity-70 hover:scale-[1.05] transition-all items-center gap-1 justify-center cursor-pointer">
                        <p className="leading-[1.3] font-britti-sans text-sm font-[400] text-c-black">
                            BACK TO TOP
                        </p>
                        <Image src={"/arrow-tt.svg"} alt="arrow-tt" width={10} height={10} className="w-full max-w-[7.5px]" />
                    </div>
                </div>
                <div className="w-full py-3 md:h-[32px]  border-y-[1px] flex items-center justify-start border-[#E8E8E8]">
                    <p className="leading-[1.3] font-britti-sans font-[400] text-sm text-[#868686]">
                        2025 Tracer.cloud Inc | A US Delaware Corporation, registered at 9 Wall Street, Suite 168 New York, NY 10005
                    </p>
                </div>
            </div>
            <div className="w-full h-[48px]">
                <Image src={"/footer-b.png"} alt="footer-b" width={1600} height={60} className="w-full object-fill md:object-cover h-full" />
            </div>
        </div>
    )
}

export default Footer
