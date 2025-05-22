import { unifiedCardDataLg } from "./data/unifiedPlatformData";
import Image from "next/image";

const UnifiedPlatformCardLg = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="pt-[280px]">
        <div className="relative z-10 hidden w-full md:h-[320px] lg:block xl:h-[400px]">
          <Image
            src="/home/unified-bg-bottom.png"
            alt="unified-bg-bottom"
            fill
            className="xl:object-center"
            priority
          />
        </div>
      </div>

      {/* Dynamic Cards */}
      {unifiedCardDataLg.map((card) => (
        <div key={card.id} className={card.containerStyle}>
          <div className="relative h-fit max-w-[280px] space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4 xl:max-w-[330px]">
            <span
              className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-[#202020] md:text-base"
              style={{ letterSpacing: "-0.01em" }}
            >
              {card.tag}
            </span>
            <div className="space-y-2">
              <p
                className="max-w-[550px] font-britti-sans text-base font-normal leading-4 text-[#202020] md:text-2xl md:leading-[24px] xl:max-w-max"
                style={{ letterSpacing: "-0.01em" }}
              >
                {card.title}
              </p>
              <p className="max-w-[550px] font-britti-sans text-sm font-normal leading-[17px] text-[#202020] md:text-base xl:max-w-max">
                {card.description}
              </p>
            </div>
            <div className={card.lineImageStyle}>
              <Image
                src={card.lineImage}
                alt={card.id}
                width={323}
                height={104}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnifiedPlatformCardLg;
