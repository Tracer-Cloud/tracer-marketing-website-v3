import Image from "next/image";

const PersonalizedDemoHome = () => {
  return (
    <section className="bg-[#FCFCFC]">
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-6 sm:pt-16">
          <div className="px-4">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end sm:gap-2 xl:gap-0">
              <div className="space-y-2 md:space-y-4">
                <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] tracking-[-1%] text-background md:text-base">
                  get a personalized demo
                </span>
                <h3 className="font-britti-sans text-[32px] font-normal leading-[30px] tracking-[-2%] text-background lg:text-[56px] lg:leading-[56px]">
                  Ready to see Tracer in action?
                </h3>
              </div>
              <button className="flex h-[48px] w-full cursor-pointer items-center justify-center bg-[#E8E8E8] px-8 py-3 font-britti-sans text-sm font-normal text-[#202020] hover:bg-[#E8E8E8]/80 sm:w-auto md:h-[49px] md:text-base">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-8 h-[200px] w-full xl:h-[316px]">
        <Image
          src="/home/demo-home-car.png"
          alt="demo-car"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute right-0 top-0 h-[45px] w-[31%] bg-[#FCFCFC] md:h-[54px]"></div>
      </div>
    </section>
  );
};

export default PersonalizedDemoHome;
