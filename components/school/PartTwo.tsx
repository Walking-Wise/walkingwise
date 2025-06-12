import React from "react";
import { roboto, robotoopo } from "../../public/fonts/Fonts";

const cardData = [
  {
    title: "THE GROOMERS",
    topics: [
      "Myths & Reality",
      "Trustworthy vs. Unsafe Adult",
      "Grooming Process",
      "Pornography Link",
    ],
    middle: "6th Grade",
    high: "9th Grade",
  },
  {
    title: "THE VULNERABLE",
    topics: [
      "Sextortion Scheme",
      "Male Victims",
      "Runaways as Targets",
      "Rural Risks",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
  {
    title: "THE PREDATORS",
    topics: [
      "Human Traffickers",
      "Recruiters",
      "Familial Traffickers",
      "Hidden Buyers",
    ],
    middle: "8th Grade",
    high: "11th Grade",
  },
];

const PartTwo = () => {
  return (
    <>
      <div className="py-10 mt-5 bg-[#00C1D5]">
        <div className="p-10 max-w-screen-2xl mx-auto text-[#303030]">
          <div className="flex justify-between">
            <h1 className="text-4xl sm:text-6xl">School program rollout</h1>
            <div className=" h-[50px] w-[50px]  pt-[5px] border-[#303030] hidden sm:block text-[#115a64] rounded-full text-xl ps-2 border-5 border-r-transparent">
              11y+
            </div>
          </div>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            While any adult can utilize the training and tools to educate about
            child exploitation, Walking Wise strongly encourages school social
            workers, resource officers, nurses, and wellness-focused teachers to
            leverage their expertise in leading this safety initiative on 12
            critical issues:
          </p>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1  justify-center mx-auto sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 my-8 sm:my-10 gap-6 sm:gap-8 md:gap-10 items-center">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white h-[300px] mx-auto sm:h-[350px] md:h-[400px] w-full max-w-[400px] flex justify-evenly p-4 items-center flex-col"
              >
                <div className="text-center flex flex-col gap-2">
                  <h1
                    className={`${roboto.className} text-[#00778B] text-2xl sm:text-3xl md:text-4xl`}
                  >
                    {card.title}
                  </h1>

                  {card.topics.map((topic, i) => (
                    <p
                      key={i}
                      className={`${robotoopo.className} text-xl sm:text-2xl md:text-3xl`}
                    >
                      {topic}
                    </p>
                  ))}
                </div>

                <div className="flex justify-between px-4 sm:px-6 md:px-10 w-full">
                  <div>
                    <p
                      className={`${roboto.className} text-sm sm:text-base md:text-lg`}
                    >
                      Middle Schools
                    </p>
                    <p
                      className={`${roboto.className} text-[#00778B] text-sm sm:text-2xl`}
                    >
                      {card.middle}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${roboto.className} text-sm sm:text-base md:text-lg`}
                    >
                      High Schools
                    </p>
                    <p
                      className={`${roboto.className} text-[#00778B] text-sm sm:text-2xl`}
                    >
                      {card.high}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
