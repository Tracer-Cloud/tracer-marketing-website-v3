import Image from "next/image";
import Link from "next/link";

const HowTracerWorks = () => {
  return (
    <section>
      <div className="relative overflow-y-clip border-b border-grey-100">
        <div className="container_fluid relative flex flex-col bg-[url('/images/not-found-page/bg-lines.svg')] bg-contain bg-center bg-repeat-y pb-7 md:pb-[72px]">
          <h2 className="sr-only">How Tracer Works</h2>
          <div className="relative mt-24 font-chakra-petch text-5xl font-normal leading-none tracking-[-0.04em] text-foreground md:mt-10 md:text-7xl md:leading-[0.8em] lg:text-[120px]">
            <div className="hidden md:block">
              <span>How Tracer</span>
              <span className="absolute right-0 top-[calc(100%+36px)]">
                Works
              </span>
            </div>
            <div className="block md:hidden">
              <span>How Tracer Works</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end">
            <Image
              src={"/home/computing-system-image.webp"}
              alt="Computing System Image"
              width={589}
              height={493}
              priority={false}
              className="w-full md:h-auto lg:w-[589px]"
            />
            <div className="flex flex-col gap-4 lg:max-w-[533px]">
              <h4 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-foreground lg:text-4xl xl:text-5xl">
                Built for the most complex computing systems
              </h4>
              <p className="font-britti-sans text-base font-normal leading-none tracking-[-0.02em] text-foreground lg:text-lg xl:text-xl">
                Tracer uses eBPF-powered operating-system (OS) level extraction
                technologies to reach actionable insights. What others canʼt
                see, we extract, transform, and explain
              </p>
              <Link
                href={"/technology"}
                className="mt-4 flex h-12 w-full items-center justify-center bg-grey-100 px-8 font-britti-sans text-sm font-normal text-foreground md:w-fit lg:text-base xl:mt-6"
              >
                See our Technology
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -top-px right-0 h-11 w-[37%] bg-foreground md:h-24 md:w-[33.913%] lg:h-[134px]"></div>
      </div>
    </section>
  );
};
export default HowTracerWorks;
