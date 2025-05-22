import { DualLeftArrowIcon, MonitorIcon } from "../shared/svgs"
import Image from "next/image";
import Link from "next/link";

const DigitalDiscoverySection = () => {
  return (
    <section id="digitalDiscovery" className="relative overflow-y-clip bg-[#FCFCFC] text-[#202020]">
      <div className="container_fluid bg-[url(/home/bg-lines.svg)] bg-contain bg-center bg-repeat-y pb-20 pt-16 md:pt-8 lg:pb-6">
        <div className="w-full max-w-[390px]">
          <h3 className="font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:text-3xl lg:text-[40px]">
            Science has embraced digital discovery
          </h3>
          <p className="mt-2 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.02em] text-[#202020] md:text-xl">
            But the tools have not caught up with the vision.
          </p>
        </div>
        <div className="ml-auto mt-14 max-w-[930px] md:mt-40">
          <h3 className="font-britti-sans text-xl font-normal leading-none tracking-[-0.01em] text-[#202020] md:text-2xl lg:text-[32px]">
            AI and digital tools offer unprecedented potential,
          </h3>
          <div className="mt-4">
            <div className="flex flex-col gap-4">
              <div className="hidden items-center gap-4 font-britti-sans font-normal leading-[1.12em] tracking-[-0.02em] text-[#202020] md:flex md:text-lg lg:text-xl">
                <p className="inline-flex">from curing cancer</p>
                <span className="flex h-px max-w-[52px] flex-1 bg-black"></span>
                <p className="inline-flex">personalised medicine</p>
                <span className="flex h-px flex-1 bg-black"></span>
                <p className="inline-flex">
                  revolutionising human -computer interaction
                </p>
              </div>
              <div className="flex flex-col gap-4 font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:flex-row lg:gap-6">
                <div className="flex flex-col gap-2">
                  <p className="md:hidden">from curing cancer</p>
                  <Image
                    src={"/home/curing-cancer-image.webp"}
                    alt="Curing cancer image"
                    width={215}
                    height={107}
                    className="h-auto w-[152px] sm:w-56 md:w-[215px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="md:hidden">personalised medicine</p>
                  <Image
                    src={"/home/personalised-medicine-image.webp"}
                    alt="Curing cancer image"
                    width={215}
                    height={107}
                    className="h-auto w-[152px] sm:w-56 md:w-[215px]"
                  />
                </div>
                <div className="flex flex-col gap-2 md:ml-auto">
                  <p className="md:hidden">
                    revolutionising human <br />
                    -computer interaction
                  </p>
                  <Image
                    src={"/home/curing-cancer-image.webp"}
                    alt="Curing cancer image"
                    width={215}
                    height={107}
                    className="h-auto w-[152px] sm:w-56 md:w-[215px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[34px] font-britti-sans text-xl font-normal leading-none tracking-[-0.02em] text-[#202020] md:mt-12 md:max-w-[716px] md:text-2xl lg:text-[32px]">
            Yet, the{" "}
            <span className="mx-0.5 inline-flex w-5 align-middle md:w-8">
              <MonitorIcon />
            </span>{" "}
            infrastructure that supports this innovation is lagging by not
            giving enough information,{""}
            <span className="mx-0.5 inline-flex w-6 align-middle">
              <DualLeftArrowIcon />
            </span>{" "}
            slowing the very progress it aims to support. flexibility and
            visibility, not no-code shortcuts.
          </div>
        </div>
        <div className="mt-14 max-w-[691px] md:ml-auto md:mt-36 lg:mt-[196px]">
          <p className="font-britti-sans text-base font-normal leading-[1.12em] tracking-[-0.01em] text-[#202020] md:text-xl md:tracking-[-0.02em]">
            We canʼt tell where to double down or when we have gone completely
            off track.
          </p>
          <p className="mt-2 font-britti-sans text-2xl font-normal leading-[0.9em] tracking-[-0.02em] text-[#202020] md:mt-4 md:pr-12 md:text-3xl lg:text-[40px]">
            This blind spot in scientific computing is costing us breakthroughs.
          </p>
        </div>
      </div>

      <span className="absolute -top-px right-0 h-[46px] w-[36.75%] bg-[#202020] md:h-[70px]">
        <Link
          href={"#digitalDiscovery"}
          className="ml-2 flex h-9 w-6 items-center justify-center bg-[#FCFCFC] md:ml-4 md:h-14"
        >
          <Image
            src={"/home/d-arr.svg"}
            alt="Down arrow"
            width={7.5}
            height={18}
          />
        </Link>
      </span>

      <span className="absolute -bottom-px left-0 h-[46px] w-1/3 bg-[#202020] sm:w-1/4 lg:h-[95px] xl:w-1/3 min-[1440px]:w-[49%]"></span>
    </section>
  );
};
export default DigitalDiscoverySection;
