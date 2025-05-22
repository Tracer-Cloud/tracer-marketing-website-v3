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
        <div className='fixed left-0 top-0 z-[200] flex w-full items-center justify-center px-4 pt-4 text-black'>
            <div className='flex h-[65px] w-full max-w-[1408px] items-center justify-between bg-[#FCFCFC1A] p-2 backdrop-blur-[12px]'>
                {/* <div className='flex h-[65px] w-full max-w-[1408px] items-center justify-between bg-[#DEDEDE] p-2 backdrop-blur-[12px]'> */}
                <Link href={"/"}>
                    <Image src={"/tracer-logo.png"} alt='tracer-logo.png' width={150} height={50} className='w-full max-w-[123px] shrink-0' />
                </Link>
                <div className='hidden h-full items-center justify-center gap-10 800:flex'>
                    <div className='flex h-full items-center justify-center gap-8 font-britti-sans text-base font-[400] text-[#FCFCFC]'>
                        <Link href={"/technology"} className='transition-all hover:text-white/60'>
                            Technology
                        </Link>
                        <Link href={"/platform"} className='transition-all hover:text-white/60'>
                            Platform
                        </Link>
                        <Link href={"/about"} className='transition-all hover:text-white/60'>
                            About
                        </Link>
                        <Link href={"/blog"} className='transition-all hover:text-white/60'>
                            Blog
                        </Link>
                        <Link href={"/resources"} className='transition-all hover:text-white/60'>
                            Resources
                        </Link>
                    </div>
                    <button
                        onClick={handleDemoClick}
                        className='flex h-full cursor-pointer items-center justify-center bg-[#E8E8E8] px-8 font-britti-sans text-base !font-[400] text-black'
                    >
                        Get a Demo
                    </button>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='flex shrink-0 cursor-pointer items-center justify-center 800:hidden'>
                            <Image src={"/icons/menu-icon.svg"} alt='icons/menu-icon.svg' width={40} height={30} className='w-full max-w-[36px] shrink-0' />
                        </div>
                    </SheetTrigger>
                    <SheetContent className="z-[1000] bg-white">
                        <SheetHeader>
                            <SheetTitle>
                                <Image src={"/tracker-logo-black.png"} alt="tracker-logo-black" width={140} height={30} className="w-full max-w-[114px]" />
                            </SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4 px-4">
                            <div className='flex h-full flex-col items-start justify-center gap-4 font-britti-sans text-base font-[400] text-c-black'>
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
                                className='flex h-[49px] cursor-pointer items-center justify-center bg-c-black px-8 font-britti-sans !font-[400] text-off-white'
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
