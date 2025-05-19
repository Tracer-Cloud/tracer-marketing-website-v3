import { challenges, CoreChallenge } from "./data/core-challenges";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Challenge Card Component
const ChallengeCard = ({
  challenge,
  index,
}: {
  challenge: CoreChallenge;
  index: number;
}) => {
  return (
    <div className="md:flex">
      <div className="traking-[-9px] border border-b-0 border-[#404040] font-chakra-petch text-[40px] md:w-44 md:border-0 md:text-center md:text-[112px]">
        <span className="inline-block w-20 border-r border-[#404040] p-2 text-center md:hidden">
          {challenge.number}
        </span>
        <span
          className={cn(
            "hidden md:inline-block",
            index === 1 && "mt-20",
            index === 3 && "mt-20",
          )}
        >
          {challenge.number}
        </span>
      </div>
      <div
        className={cn(
          "flex-1 border-x border-b border-t border-[#404040] lg:border-b-0",
          index === 0 && "lg:border-t-0",
          index === 1 && "lg:border-t-0",
          index === 3 && "lg:border-t-0",
        )}
      >
        {index === 1 && (
          <div className="hidden h-20 w-full border-b border-[#404040] lg:block"></div>
        )}{" "}
        {index === 3 && (
          <div className="hidden h-20 w-full border-b border-[#404040] lg:block"></div>
        )}
        <div className="m-4 border border-[#404040]">
          <Image
            width={477}
            height={259}
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full"
          />
        </div>
        <div className="space-y-2 border-t border-[#404040] px-4 pb-16 pt-4">
          <h2 className="text-[clamp(1.25rem,5vw,2rem)] leading-none">
            {challenge.title}
          </h2>
          <p>{challenge.description}</p>
        </div>
      </div>
    </div>
  );
};

const CoreChallengeSection = () => {
  return (
    <section className="bg-foreground py-6 text-background">
      <h2 className="mx-auto mb-4 max-w-[1440px] pl-4 text-[clamp(1.25rem,5vw,2rem)] leading-none lg:pl-0">
        Most organizations face <br className="block lg:hidden" /> the same core
        challenges
      </h2>
      <div className="relative mx-auto max-w-[1440px] border-[#404040] px-4 lg:border-y lg:border-l 1440:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-0">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreChallengeSection;
