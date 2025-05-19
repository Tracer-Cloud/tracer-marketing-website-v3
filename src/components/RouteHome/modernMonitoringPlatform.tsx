import Image from "next/image";

const ModernMonitoringPlatform = () => {
  return (
    <section className="flex h-[358px] items-center justify-center bg-black md:h-[447px]">
      <div className="container_fluid text-white">
        <div className="flex items-center">
          <span className="">
            <Image
              src={"/home/square-bracket-left.svg"}
              alt="Bracket"
              width={10}
              height={60}
              className="flex h-auto w-6 shrink-0 object-fill sm:w-1.5"
            />
          </span>{" "}
          <span className="text-center text-base uppercase leading-none tracking-[-0.01em] md:text-xl">
            meet the{" "}
            <span className="bg-modernMonitoringBg bg-clip-text text-transparent">
              modern monitoring platform
            </span>{" "}
            for scientific enterprises
          </span>{" "}
          <span className="">
            <Image
              src={"/home/square-bracket-right.svg"}
              alt="Bracket"
              width={10}
              height={60}
              className="flex h-auto w-6 shrink-0 object-fill sm:w-1.5"
            />
          </span>
        </div>
      </div>
    </section>
  );
};
export default ModernMonitoringPlatform;
