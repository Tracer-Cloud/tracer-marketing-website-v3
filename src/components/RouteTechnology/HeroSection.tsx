import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className="relative mx-auto flex min-h-screen flex-col justify-between bg-[#202020] pt-8">
      <h1 className="absolute bottom-10 z-30 pl-4 pt-16 font-britti-sans text-[55px] !font-[400] leading-[55px] tracking-[-2px] text-[white] sm:text-[80px] sm:leading-[65px] md:static md:bottom-auto md:font-[600] md:leading-[78px] lg:leading-[88px] xl:text-[90px] xl:leading-[88px]">
        Extraordinary HPC Performance
        for Extraordinary Science
      </h1>

      {/* Text box positioned on middle-right of RectangleBox image */}
      <div className="absolute bottom-[4rem] left-[4rem] z-10 hidden w-[25rem] border border-gray-300 bg-white p-2 md:block lg:left-[10rem] xl:left-[15rem]">
        <span className="text-md text-[#202020]">
          Understanding highly parallelised workloads running on distributed
          supercomputers is very difficult. Tracer combines cutting-edge
          technological advances with the deep understanding of scientific
          industries to go from a black box to insights.
        </span>
      </div>
      <div className="absolute inset-0 top-20 flex items-center justify-center sm:top-44 md:hidden">
        <Image src="/technology/traver_foto_mobile.png" alt="traverMobile" width={500} height={400} />
      </div>

      {/* Bottom-left image container */}
      <div className="hidden flex-col md:flex">
        <div
          className="h-10 w-[80%] bg-[white] md:w-[250px] lg:h-20 xl:w-[309px]"
        />
        <div
          className="h-80 w-full bg-[white] md:w-[320px] xl:w-[393px]"
        />
      </div>

      {/* Bottom-right image container */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image src="/technology/traver_foto.png" alt="Traver" width={800} height={600} className="h-auto w-[35rem] lg:w-[45rem] xl:w-[60rem]" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[12, 37, 62, 87].map((percent, index) => (
          <div
            key={index}
            className="absolute top-0 h-full w-[0.5px] bg-[#e8e8e8]"
            style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
          />
        ))}
      </div>


    </div>
  )
}

export default HeroSection
