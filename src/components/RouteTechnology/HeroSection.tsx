import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className="relative h-screen mx-auto flex flex-col justify-between pt-8">
      <h1 className="text-[55px] text-white sm:text-[80px] xl:text-[90px] font-britti-sans font-[800] md:font-[600] z-30 absolute bottom-10 md:static md:bottom-auto tracking-[-2px] leading-[55px] sm:leading-[65px]  md:leading-[78px] xl:leading-[88px] lg:leading-[88px] pt-16 pl-4 text-[#202020]">
        Extraordinary HPC Performance
        for Extraordinary Science
      </h1>

      {/* Text box positioned on middle-right of RectangleBox image */}
      <div className="hidden md:block absolute bottom-[4rem] left-[4rem] lg:left-[10rem] xl:left-[15rem] w-[25rem] border border-gray-300 p-2 bg-white z-10">
        <span className="text-md text-[#202020]">
          Understanding highly parallelised workloads running on distributed
          supercomputers is very difficult. Tracer combines cutting-edge
          technological advances with the deep understanding of scientific
          industries to go from a black box to insights.
        </span>
      </div>
      <div className="absolute top-20 sm:top-44 inset-0 flex items-center justify-center md:hidden">
        <Image src="/technology/traver_foto_mobile.png" alt="traverMobile" width={500} height={400} />
      </div>

      {/* Bottom-left image container */}
      <div className="hidden md:flex flex-col">
        <div
          className="w-[80%] md:w-[250px] xl:w-[309px] h-10 lg:h-20 bg-[#1f1f1f]"
        />
        <div
          className="w-full md:w-[320px] xl:w-[393px] h-80 bg-[#1f1f1f]"
        />
      </div>

      {/* Bottom-right image container */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Image src="/technology/traver_foto.png" alt="Traver" width={800} height={600} className="w-[35rem] lg:w-[45rem] xl:w-[60rem] h-auto" />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
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
