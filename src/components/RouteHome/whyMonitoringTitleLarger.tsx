import Image from "next/image";

const WhyMonitoringTitleLarger = () => {
  return (
    <div className="hidden md:block">
      <span>Why Monitoring</span>
      <span className="absolute left-[24%] top-[calc(100%+12px)]">
        as the Solution?
        <div className="flex items-center justify-between text-base leading-none tracking-normal md:text-lg md:tracking-[-0.01em] lg:text-2xl">
          <span className="flex items-center gap-1">
            Because you can&apos;t
            <Image
              src={"/home/gear-icon.svg"}
              alt="Gear icon"
              width={24}
              height={24}
            />
            fix
          </span>
          <span className="relative px-1">
            what you can&apos;t see
            <span className="absolute inset-0 left-0 top-0 bg-background/10 backdrop-blur-[2px]"></span>
          </span>
        </div>
      </span>
    </div>
  );
};
export default WhyMonitoringTitleLarger;
