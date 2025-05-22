import PrimaryButton from "../ui/primary-button";
import { infraData, InfraItem } from "./data/infraData";
import Image from "next/image";

const InfrastructureReview = () => {
  return (
    <section className="bg-[#FCFCFC] text-[#202020]">
      <div className="mx-auto max-w-[1440px]">
        {infraData.map((item: InfraItem, index: number) => (
          <div
            key={item.id}
            className="grid grid-cols-1 border-[#E8E8E8] xl:grid-cols-2 xl:border-t"
          >
            <div className={`${index === 0 ? "p-4" : ""}`}>
              {index === 0 && (
                <h4 className="mb-10 max-w-[580px] font-britti-sans text-[24px] font-normal leading-[22px] tracking-[-2%] text-background md:text-[40px] md:leading-[38px] xl:mb-0">
                  Infrastructure & Failure Prevention Services: Review the
                  efficiency of your current setup and discover any actionable
                  bottlenecks
                </h4>
              )}
            </div>

            <div className="px-4 xl:px-0">
              {/* heading */}
              <div className="border-b border-l border-r border-[#E8E8E8] xl:border-b-0">
                <div className="grid grid-cols-2 items-center justify-between border-b border-t border-[#E8E8E8] px-2 py-2 md:grid-cols-3 md:px-4 md:py-[11px] xl:border-t-0">
                  <div className="col-span-1 md:col-span-2">
                    <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] tracking-[-1%]">
                      {item.id}
                    </span>
                  </div>
                  <div className="col-span-1 flex items-center justify-between">
                    <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] tracking-[-1%]">
                      tracer
                    </span>
                    <span className="font-chakra-petch text-sm font-normal uppercase leading-[19px] tracking-[-1%]">
                      services
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="p-2 md:p-4">
                  <div className="relative h-[124px] w-full border border-[#E8E8E8] lg:h-[307px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-4 pb-0 pt-4 md:flex-row md:gap-0 md:pb-4">
                    <div className="space-y-2">
                      <h4 className="max-w-[490px] font-britti-sans text-[24px] font-normal leading-[22px] tracking-[-2%] text-[#202020] md:text-[40px] md:leading-[38px]">
                        {item.title}
                      </h4>
                      <p className="max-w-[490px] font-britti-sans text-sm font-normal leading-[17px] text-[#202020] md:text-base">
                        {item.description}.
                      </p>
                    </div>
                    <div className="w-[136px] md:w-[147px]">
                      <PrimaryButton title="Get a Demo" className="text-[#202020]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureReview;
