"use client";
import React from "react";
import { robotoItalicop, robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";

const cardData = [
  {
    title: "THE GROOMERS",
    topics: [
      "Myths & Reality",
      "Trustworthy vs. Unsafe",
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
      "Female Recruiters",
      "Family Secret",
      "Hidden Buyers",
    ],
  },
];

const disclosureContent = {
  title: "disclosure of abuse",
  paragraphs: [
    `The American Academy of Pediatrics (AAP) instructs parents to “Always affirm that you believe your child and will do everything you can to protect them from harm.” If your child discloses sexual abuse, parents should take action, such as contacting the child’s pediatrician, a local child advocacy center, or a child protection service agency.`,
    `For more information, visit the AAP's website at `,
    `In addition, if there are any suspicions of child sex trafficking, contact the National Human Trafficking Hotline at 1-888-373-7888 or visit `,
    `You may also contact Rescue America at 833-599-FREE (3733).`,
  ],
};

const PartTwo = () => {
  return (
    <>
      <Section bgColor="white" className="md:pb-14">
        <SectionHeaderText className="text-center lg:text-7xl md:mt-8">
          RECOMMENDENDED FOR ADOLESCENTS (Ages 11+)
        </SectionHeaderText>
        

        {/* Education Cards */}
        <div className="grid max-w-screen-2xl mx-auto grid-cols-1 text-[#303030] justify-center md:grid-cols-2 lg:grid-cols-3 my-6 sm:my-8 md:my-10 gap-4 sm:gap-6 md:gap-8 lg:gap-2 px-4 sm:px-6 md:px-8 lg:px-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`
        bg-white w-full max-w-[400px] mx-auto flex justify-evenly py-6 px-6 items-center flex-col
        ${index === 1 ? "" : ""}
      `}
            >
              <div className="text-center flex flex-col gap-1 sm:gap-2">
                <h1
                  className={`text-[#00c1d5] text-4xl sm:text-2xl md:text-3xl lg:text-5xl mb-2`}
                >
                  {card.title}
                </h1>
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
        <div className="flex justify-center items-center flex-col">
          <Button
            onClick={() => (window.location.href = "/pricing")}
            className={`mt-8`}
          >
            {"Enroll Today"}
          </Button>
        </div>
      </Section>


      
      {/* Disclosure Section */}
      <Section bgColor="[#00c1d5]">
        <SectionHeaderText className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#303030] font-bold">
          {disclosureContent.title}
        </SectionHeaderText>
        <BodyText
          className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          {disclosureContent.paragraphs[0]}
        </BodyText>
        <BodyText
          className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          {disclosureContent.paragraphs[1]}
          <a
            href="https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Sexual-Abuse.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800"
          >
            HealthyChildren.org
          </a>
        </BodyText>
        <BodyText
          className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          {disclosureContent.paragraphs[2]}
          <Link
            href="https://www.humantraffickinghotline.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800"
          >
            HumanTraffickingHotline.org
          </Link>
        </BodyText>
        <BodyText
          className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          {disclosureContent.paragraphs[3]}
        </BodyText>
      </Section>
    </>
  );
};

export default PartTwo;
