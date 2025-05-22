"use client";

import { useState } from "react";
import { faqData, FaqItem } from "./data/faqData";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[##202020] px-4">
      <div className="container_fluid">
        <div className="py-10 md:py-8">
          <h2 className="font-chakra-petch text-[48px] font-normal leading-[40px] tracking-[-4%] text-foreground xl:text-[120px] xl:leading-[98px]">
            FAQ
          </h2>
          <div className="mt-10 md:mt-14">
            {faqData.map((item: FaqItem, index: number) => (
              <div
                key={item.id}
                className={`cursor-pointer border-b border-[#404040] py-3 md:py-5 md:pr-3 xl:pr-6 ${index === 0 ? "border-t" : ""
                  }`}
                onClick={() => toggleIndex(index)}
              >
                <div className="flex justify-between gap-5">
                  <div className="flex gap-10 xl:gap-[100px]">
                    <span className="font-chakra-petch text-base font-normal uppercase leading-[19px] tracking-[-1%] text-[#FCFCFC] md:pt-1.5">
                      {item.id}
                    </span>
                    <div className="hidden md:block">
                      <p className="font-britti-sans text-[24px] font-normal leading-[24px] tracking-[-1%] text-foreground md:pt-1">
                        {item.question}
                      </p>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "mt-4 max-h-[500px]" : "max-h-0"
                          }`}
                      >
                        <p className="max-w-[763px] font-britti-sans text-base font-normal leading-[17px] text-foreground">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    {openIndex === index ? (
                      <>
                        {/* <Image
                         src={"/icons/down-arrow-faq.svg"}
                         alt="down-arrow"
                         width={24}
                         height={24}
                       /> */}
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.8486 8.42383L12.4242 19.8483L0.99976 8.42383" stroke="#FCFCFC" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg width="25" height="24" className="rotate-[-90deg]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.8486 8.42383L12.4242 19.8483L0.99976 8.42383" stroke="#FCFCFC" />
                        </svg>
                        {/* <Image
                          src={"/icons/right-arrow-faq.svg"}
                          alt="down-arrow"
                          width={24}
                          height={24}
                        /> */}
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-6 w-[88%] md:hidden">
                  <p className="font-britti-sans text-base font-normal leading-[16px] text-foreground">
                    {item.question}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "mt-3 max-h-[500px]" : "max-h-0"
                      }`}
                  >
                    <p className="font-britti-sans text-sm font-normal leading-[16px] text-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
