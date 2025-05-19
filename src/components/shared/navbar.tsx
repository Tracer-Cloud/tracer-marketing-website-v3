"use client"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const NavigationBar = () => {
    const router = useRouter();

    const handleDemoClick = () => {
        router.push('/demo');
    };

    return (
        <div className='w-full flex items-center px-4 pt-4 justify-center fixed top-0 left-0 z-[200] text-black'>
            <div className='w-full max-w-[1408px] bg-[#FCFCFC1A] backdrop-blur-[12px] flex items-center justify-between h-[65px] p-2'>
                <Link href={"/"}>
                    <Image src={"/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full shrink-0 max-w-[123px]' />
                </Link>
                <div className='h-full hidden 800:flex items-center justify-center gap-10'>
                    <div className='flex items-center justify-center h-full gap-8 font-[400] font-britti-sans text-base text-[#FCFCFC]'>
                        <Link href={"/technology"} className='hover:text-white/60 transition-all'>
                            Technology
                        </Link>
                        <Link href={"/platform"} className='hover:text-white/60 transition-all'>
                            Platform
                        </Link>
                        <Link href={"/about"} className='hover:text-white/60 transition-all'>
                            About
                        </Link>
                        <Link href={"/blog"} className='hover:text-white/60 transition-all'>
                            Blog
                        </Link>
                        <Link href={"/resources"} className='hover:text-white/60 transition-all'>
                            Resources
                        </Link>
                    </div>
                    <button
                        onClick={handleDemoClick}
                        className='h-full font-britti-sans text-base !font-[400] cursor-pointer bg-[#E8E8E8] flex items-center justify-center text-black px-8'
                    >
                        Get a Demo
                    </button>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='800:hidden flex items-center justify-center cursor-pointer shrink-0'>
                            <Image src={"/icons/menu-icon.svg"} alt='icons/menu-icon.svg' width={40} height={30} className='w-full shrink-0 max-w-[36px]' />
                        </div>
                    </SheetTrigger>
                    <SheetContent className="z-[1000] bg-white">
                        <SheetHeader>
                            <SheetTitle>
                                <Image src={"/tracker-logo-black.png"} alt="tracker-logo-black" width={140} height={30} className="w-full max-w-[114px]" />
                            </SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4 px-4">
                            <div className='flex items-start justify-center font-britti-sans h-full flex-col gap-4 font-[400] text-base text-c-black'>
                                <Link href={"/technology"} className='hover:text-c-black/40 transition-all'>
                                    Technology
                                </Link>
                                <Link href={"/platform"} className='hover:text-c-black/40 transition-all'>
                                    Platform
                                </Link>
                                <Link href={"/about"} className='hover:text-c-black/40 transition-all'>
                                    About
                                </Link>
                                <Link href={"/blog"} className='hover:text-c-black/40 transition-all'>
                                    Blog
                                </Link>
                                <Link href={"/resources"} className='hover:text-c-black/40 transition-all'>
                                    Resources
                                </Link>
                            </div>
                        </div>
                        <SheetFooter>
                            <button
                                onClick={handleDemoClick}
                                className='h-[49px] font-britti-sans !font-[400] cursor-pointer bg-c-black flex items-center justify-center text-off-white px-8'
                            >
                                Get a Demo
                            </button>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>

            </div>
        </div>

    )
}

export default NavigationBar;
