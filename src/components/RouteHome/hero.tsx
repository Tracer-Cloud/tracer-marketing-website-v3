import { LinePath } from "../shared/svgs";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[643px] bg-[#202020] text-[#FCFCFC] lg:h-[808px]">
      <div className="container_fluid relative flex h-full flex-col items-center justify-center overflow-hidden lg:block">
        <div className="">
          <h1 className="font-chakra-petch relative z-10 text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-none md:-translate-y-1/2 md:leading-normal lg:absolute lg:left-4 lg:top-1/2 lg:font-normal lg:-tracking-[9px]">
            Accelerating
          </h1>
          <h2 className="font-chakra-petch relative z-10 text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-none md:-translate-y-1/2 lg:absolute lg:bottom-0 lg:right-4 lg:text-right lg:font-normal lg:leading-[104px] lg:-tracking-[10px]">
            the New Dawn <br className="hidden md:block" /> of AI in Science
          </h2>
          <div className="font-chakra-petch relative z-10 text-base lg:absolute lg:bottom-40 lg:left-4">
            <p className="mt-4 text-sm md:max-w-[453px] md:text-base">
              Tracer combines cutting-edge technological advances with the deep
              understanding of scientific industries to give insights into
              enterprises’ digital and AI acceleration.
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-4 z-[2] w-full md:bottom-auto md:left-auto md:right-auto md:top-auto">
          <Image
            src="/home/hero.png"
            alt="hero"
            className="h-full w-full scale-[3.5] md:scale-100"
            width={1416}
            height={808}
          />
        </div>
        <div className="absolute left-0 top-0 z-0 flex h-full w-full justify-around">
          <LinePath />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
