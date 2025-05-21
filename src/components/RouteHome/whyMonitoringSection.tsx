import { DoubleArrowIcon, EyeIcon } from "@/components/shared/svgs";
import Image from "next/image";
import WhyMonitoringTitleLarger from "./whyMonitoringTitleLarger";
import WhyMonitoringTitleMobile from "./whyMonitoringTitleMobile";

const WhyMonitoringSection = () => {
  return (
    <section className="relative overflow-y-clip pb-4 md:pb-[86px]">
      <div className="border-y border-grey-100">
        <div className="container_fluid flex w-full items-center gap-14 bg-background py-3 md:gap-24 md:py-2.5">
          <Image
            src={"/home/tracer-icon.svg"}
            alt="Tracer icon"
            width={123}
            height={29}
            className="h-3 w-auto shrink-0"
          />
          <div className="flex w-full justify-between gap-2 font-chakra-petch text-sm font-normal uppercase tracking-[-0.01em] text-foreground">
            <span>the</span>
            <span className="sm:ml-[12%]">tracer</span>
            <span>difference</span>
          </div>
        </div>
      </div>
      <div className="container_fluid pt-10">
        <h2 className="sr-only">Why Monitoring as the Solution</h2>
        <div className="relative font-britti-sans text-6xl font-normal leading-[0.8em] tracking-[-0.04em] text-foreground lg:text-8xl">
          {/* Title for larger screens */}
          <WhyMonitoringTitleLarger />
          {/* Title for smaller screens */}
          <WhyMonitoringTitleMobile />
        </div>
        <div className="flex flex-col gap-14 pt-10 md:pt-[220px] lg:gap-[72px] lg:pt-[330px]">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-20">
            <div className="font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-foreground md:max-w-[520px] md:text-2xl lg:text-[32px]">
              Modern science is going software-first. With AI and digital tools,
              researchers are moving fast — and becoming one of the largest
              developer communities. They want
              <span className="mx-0.5 inline-flex items-center align-middle">
                <DoubleArrowIcon />
              </span>
              flexibility and
              <span className="mx-0.5 inline-flex items-center align-middle">
                <EyeIcon />
              </span>
              visibility, not no-code shortcuts.
            </div>
            <Image
              src={"/home/monitoring-solution.webp"}
              alt="Monitoring solution"
              width={1416}
              height={520}
              className="h-auto w-full md:w-1/2 md:max-w-[708px] xl:w-full"
            />
          </div>

          <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between lg:gap-20">
            <Image
              src={"/home/better-information-image.webp"}
              alt="Better information"
              width={453}
              height={382}
              className="h-auto w-full md:w-2/5 lg:w-[453px]"
            />
            <div className="w-full max-w-[700px] flex-1">
              <span className="font-britti-sans text-2xl font-normal tracking-[-0.02em] text-foreground md:text-3xl lg:text-[40px]">
                Science needs
              </span>
              <h3 className="mt-1.5 font-britti-sans text-[40px] font-normal leading-[0.8em] tracking-[-0.04em] text-foreground md:text-6xl lg:text-6xl xl:text-8xl">
                better information
              </h3>
              <div className="my-6 flex flex-col space-y-2 text-sm font-normal text-foreground md:w-full md:text-base lg:my-10 xl:w-3/5">
                <span>Clearer signals.</span>
                <span className="md:mr-[15%] md:self-center">
                  Real-time visibility.
                </span>
                <span className="md:self-end">Context they can act on.</span>
              </div>
              <p className="font-britti-sans text-sm font-normal leading-none text-foreground md:text-base">
                Because in high-stakes decision making, every wrong assumption
                costs time, money, and opportunity. Generic monitoring tools
                weren&apos;t built for this. They miss the nuance, ignore the
                workflows, and fail to meet the security and data demands of
                scientific environments.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute -bottom-px left-0 hidden h-[62px] w-[33%] bg-foreground md:block"></span>
    </section>
  );
};
export default WhyMonitoringSection;
