import { unifiedPlatformData } from "./data/unifiedPlatformData";

const UnifiedPlatformCard = () => {
  return (
    <div className="mt-10 grid gap-10 px-4 md:mt-14 lg:grid-cols-3 lg:gap-[120px]">
      {unifiedPlatformData.map((item) => (
        <div
          key={item.id}
          className={`relative h-fit space-y-6 border-l border-[#E8E8E8] pl-3 md:pl-4 xl:max-w-[330px] ${
            item.marginTop || ""
          }`}
        >
          <span
            className="font-chakra-petch text-sm font-normal uppercase leading-[19px] text-foreground md:text-base"
            style={{ letterSpacing: "-0.01em" }}
          >
            {item.label}
          </span>
          <div className="space-y-2">
            <p
              className="max-w-[550px] font-britti-sans text-base font-normal leading-4 text-foreground md:text-2xl md:leading-[24px] xl:max-w-max"
              style={{ letterSpacing: "-0.01em" }}
            >
              {item.title}
            </p>
            <p className="max-w-[550px] font-britti-sans text-sm font-normal leading-[17px] text-foreground md:text-base xl:max-w-max">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnifiedPlatformCard;
