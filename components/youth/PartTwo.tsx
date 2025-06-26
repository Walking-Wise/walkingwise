"use client";
import Image from "next/image";
import React from "react";
import { robotoopo, roboto } from "../../public/fonts/Fonts";

const guideResources = [
  "Risk Factors & Indicators",
  "Classroom Teaching Tips",
  "11 Lesson Plan Q&A",
  "Vocabulary Lists",
  "How to Ask for Help",
  "Animated Video Scripts",
  "Pre-and Post Surveys",
  "Other Resources",
  "Master Vocabulary List",
];

const executionSteps = [
  {
    label: "LEARN",
    description:
      "Strengthen your knowledge to teach any one of the twelve topics about exploitation by completing the lesson from our Online Course for Adults.",
  },
  {
    label: "PREPARE",
    description:
      "Use our Education Guide’s corresponding lesson plan to prepare for classroom Q&A discussions.",
  },
  {
    label: "EXECUTE",
    description:
      "Download and customize the coordinating Walking Wise classroom presentation—select age-appropriate content for audiences, add personalized or local information, and integrate electronic polling for an interactive audience experience.",
  },
];

const PartTwo = () => {
  return (
    <>
      <div className="py-10 max-w-screen-2xl mx-auto">
        <div className="max-sm:px-10 text-[#303030]">
          <h1 className="text-4xl sm:text-6xl">education guide</h1>
          <p
            className={`${robotoopo.className} mt-4 tracking-wide leading-7 lg:leading-10  text-xl sm:text-3xl`}
          >
            Statistics indicate it is likely that a significant percentage of
            students will experience sexual abuse or exploitation during
            childhood. Walking Wise Education Guide provides classroom teaching
            tips for supporting victimized students in seeking immediate help
            from a school social worker, nurse, or trusted school staff member.
          </p>

          <div className="w-full py-10 px-4 sm:px-6 md:mt-10 md:px-12 bg-white">
            <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-16">
              <div className="w-full xl:w-1/3 flex flex-col items-center xl:items-start xl:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#303030] mb-6">
                  Guide Resources
                </h1>
                <ul className="list-disc text-gray-700">
                  {guideResources.map((item, index) => (
                    <li
                      key={index}
                      className={`${robotoopo.className} mt-4 tracking-wide leading-7 lg:leading-10  text-xl sm:text-3xl`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full xl:w-1/2 flex justify-center items-center">
                <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[600px]">
                  <Image
                    src="/assets/youth-2.png"
                    alt="Guide Resources"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#303030] py-10 sm:py-15 mt-5 text-white w-full ">
        <div className="max-sm:px-10 max-w-screen-2xl mx-auto flex flex-col justify-center items-center xl:flex-row gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl">
              streamlined execution
            </h1>
            <ul className="list-disc ms-5 lg:ms-15 mt-4 sm:mt-8">
              {executionSteps.map((step, index) => (
                <li
                  key={index}
                  className={`${robotoopo.className} text-base sm:text-xl tracking-wide leading-7 lg:leading-10  md:text-2xl lg:text-4xl mt-4`}
                >
                  <strong className="text-[#00c1d5]">{step.label}</strong>{" "}
                  {step.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px]">
              <Image
                src="/assets/youth-3.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <p
              className={`${robotoopo.className} text-xl text-center text-[#00c1d5] mt-4`}
            >
              Earn Continuing Education Credits
            </p>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 mt-4 rounded-4xl transition-colors ${roboto.className}`}
              onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
            >
              ENROLL Today!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
