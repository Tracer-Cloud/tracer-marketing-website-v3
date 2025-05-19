import PrimaryButton from "../ui/primary-button";
import Image from "next/image";

const PersonalizedDemoHome = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px]">
        <div className="pt-6 sm:pt-16">
          <div className="px-4">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end sm:gap-2 xl:gap-0">
              <div className="space-y-2 md:space-y-4">
                <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] tracking-[-1%] text-foreground md:text-base">
                  get a personalized demo
                </span>
                <h3 className="font-britti-sans text-[32px] font-normal leading-[30px] tracking-[-2%] text-foreground lg:text-[56px] lg:leading-[56px]">
                  Ready to see Tracer in action?
                </h3>
              </div>
              <PrimaryButton title="Talk to an Expert" />
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
        </div>
      </div>
    </section>
  );
};

export default PersonalizedDemoHome;
