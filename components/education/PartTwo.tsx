import React from "react";
import { robotoItalicop, robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";

const cardData = [
  {
    title: "THE GROOMERS",
    topics: [
      "Myths & Reality",
      "Trustworthy vs. Adult",
      "Grooming Process",
      "Pornography Link",
    ],
  },
  {
    title: "THE VULNERABLE",
    topics: [
      "Sextortion Scheme",
      "Male Victims",
      "Runaways as Targets",
      "Rural Risks",
    ],
  },
  {
    title: "THE PREDATORS",
    topics: [
      "Human Traffickers",
      "Recruiters",
      "Familial Traffickers",
      "Hidden Buyers",
    ],
  },
];

const disclosureContent = {
  title: "disclosure of abuse",
  paragraphs: [
    `The American Academy of Pediatrics (AAP) instructs parents to "Always affirm that you believe your child and will do everything you can to protect them from harm." If your child discloses sexual abuse, parents should take action, such as contacting the child's pediatrician, a local child advocacy center, or a child protection service agency.`,
    `For more information, visit the AAP's website at `,
    `In addition, if there are any suspicions of child sex trafficking, contact the National Human Trafficking Hotline at 1-888-373-7888 or visit `,
    `You may also contact Rescue America at 833-599-FREE (3733).`,
  ],
};

const PartTwo = () => {
  return (
    <>
      {/* Education Topics Header */}
      <div className="text-[#303030]  max-w-screen-2xl mx-auto mt-4 p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center gap-4 sm:gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Education Topics
          </h1>
          <button
            className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-2 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-2xl`}
          >
            Demo Curriculum
          </button>
        </div>
        <p
          className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-5`}
        >
          Walking Wise education is recommended for adolescents 11+, with
          parental guidance for younger children.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid  max-w-screen-2xl mx-auto grid-cols-1 text-[#303030] justify-center md:grid-cols-2 lg:grid-cols-3 my-6 sm:my-8 md:my-10 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-[400px] mx-auto flex justify-evenly p-4 items-center flex-col"
          >
            <div className="text-center flex flex-col gap-1 sm:gap-2">
              <h2
                className={`${robotoItalicop.className} text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
              >
                {card.title}
              </h2>
              {card.topics.map((topic, i) => (
                <p
                  key={i}
                  className={`${robotoopo.className} text-lg sm:text-xl md:text-2xl lg:text-3xl`}
                >
                  {topic}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disclosure Section */}
      <div className="bg-[#36c5d8] py-10 w-full">
        <div className="p-10  max-w-screen-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#303030] font-bold">
            {disclosureContent.title}
          </h1>
          <p className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}>
            {disclosureContent.paragraphs[0]}
          </p>
          <p className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}>
            {disclosureContent.paragraphs[1]}
            <a 
              href="https://www.healthychildren.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              HealthyChildren.org
            </a>
          </p>
          <p className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}>
            {disclosureContent.paragraphs[2]}
            <Link   
              href="https://www.humantraffickinghotline.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-800"
            >
              HumanTraffickingHotline.org
            </Link>
          </p>
          <p className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}>
            {disclosureContent.paragraphs[3]}
          </p>
        </div>
      </div>
    </>
  );
};

export default PartTwo;