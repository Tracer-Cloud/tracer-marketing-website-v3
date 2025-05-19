import Image from "next/image";

const WhyMonitoringTitleMobile = () => {
  return (
    <>
      <span className="text-[40px] font-normal leading-[0.8em] tracking-[-0.04em] md:hidden">
        Why Monitoring as the Solution?
      </span>
      <div className="mt-2 flex flex-col gap-2 text-base leading-none tracking-normal md:hidden md:text-2xl md:tracking-[-0.01em]">
        <span className="flex items-center gap-1">
          Because you can&apos;t
          <Image
            src={"/home/gear-icon.svg"}
            alt="Gear icon"
            width={24}
            height={24}
            className="h-4 w-auto lg:h-6 lg:w-auto"
          />
          fix
        </span>
        <span className="relative px-1">
          what you can&apos;t see
          <span className="absolute inset-0 left-0 top-0 bg-background/10 backdrop-blur-[2px]"></span>
        </span>
      </div>
    </>
  );
};
export default WhyMonitoringTitleMobile;
