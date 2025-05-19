import { cloudFeatures } from "./data/cloudFeaturesData";
import Image from "next/image";

const DataPrivacyNotice = () => {
  return (
    <section className="bg-foreground">
      <div className="container_fluid">
        <div className="py-4 md:py-[88px]">
          <div className="flex flex-col xl:flex-row xl:gap-12">
            <h3
              className="hidden whitespace-nowrap font-chakra-petch text-[112px] font-normal leading-[104px] text-background md:block"
              style={{ letterSpacing: "-0.09em" }}
            >
              Your data
            </h3>
            <div>
              <div>
                <div className="hidden md:block">
                  <h3
                    className="mt-[-20px] font-chakra-petch text-[112px] font-normal leading-[104px] text-background xl:mt-0"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    never leaves
                  </h3>
                  <h3
                    className="mt-[-24px] font-chakra-petch text-[112px] font-normal leading-[104px] tracking-[-9%] text-background"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    your systems
                  </h3>
                </div>
                <div className="md:hidden">
                  <h3
                    className="font-chakra-petch text-[40px] font-normal leading-[40px] text-background"
                    style={{ letterSpacing: "-0.09em" }}
                  >
                    Your data never leaves your systems
                  </h3>
                </div>
                <p className="mt-4 max-w-[453px] font-britti-sans text-base font-normal leading-[16px] text-background md:text-xl md:leading-[22px] md:tracking-[2%]">
                  We don’t want to just pass your security checks: Tracer is
                  built with security-by-design
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2">
                  {cloudFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="space-y-8 border border-[#404040] p-4"
                    >
                      <div className="flex items-center md:justify-end">
                        <Image
                          src={feature.icon}
                          alt={`${feature.title.toLowerCase()}-img`}
                          width={48}
                          height={48}
                          className="object-contain md:h-[72px] md:w-[72px]"
                          priority
                        />
                      </div>
                      <div className="space-y-2">
                        <h5
                          className="font-britti-sans text-xl font-normal leading-[20px] text-background md:text-[32px] md:leading-[30px]"
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {feature.title}
                        </h5>
                        <p className="font-britti-sans text-sm font-normal leading-[17px] text-background md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPrivacyNotice;
