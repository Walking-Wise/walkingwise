"use client";

import React from "react";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";

const blueBoxContent = [
  { id: 1, text: "#1 Myths & Reality" },
  { id: 2, text: "#2 Trustworthy vs. Unsafe Adults" },
  { id: 3, text: "#3 Grooming Process" },
  { id: 4, text: "#4 Pornography Link" },
];

const objectives = [
  "Examine common sex trafficking myths and understand how these misconceptions enable society to overlook the tactics of force, fraud, and coercion that predators use to exploit victims in the commercial sex trade.",
  "Discuss how young people can recognize inappropriate behaviors of unsafe adults to identify the key traits of trustworthy adults.",
  "Describe the grooming techniques used by sexual predators and traffickers to manipulate their targets.",
  "Examine how viewing pornography can harm young brains, normalize sexual exploitation, and contribute to the expansion of the commercial sex trade.",
];

const PartOne = () => {

  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/ADULT.jpg')" }}
        >
          <div className="hidden md:block absolute bottom-20 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Online course
            </h1>
          </div>
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl text-white p-1 bg-black/50">Online course</h1>
          </div>
        </div>

        {/* Course Header */}
        <div className="w-full bg-[#303030] px-4 py-3 text-white mt-[-4px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            <span className="text-[#ff3131]">ADULT </span>COURSE DESCRIPTION
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10 text-[#303030]">
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase">
          WALKING WISE: SEXUAL EXPLOITATION EDUCATION
        </h1>

        <p className={`text-[#ff3131] text-lg sm:text-2xl italic mt-4 mb-6 ${robotoopo.className}`}>
          Our 12-part course provides twelve contact hours, divided into three sections: <span className="italic font-medium">The Groomers, The Vulnerable, and The Predators</span>—each containing four lessons. Participants will review course content, watch interviews with survivor leaders and advocacy experts, and respond to 10 questions to earn CE/CME credit upon the completion of each lesson.
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold mt-10">
          <span className="text-[#00c1d5]">PART 1:</span> THE GROOMERS
        </h2>

        <p className={`mt-4 text-base sm:text-xl leading-7 ${robotoopo.className}`}>
          The four lessons involve four contact hours. To complete this session, participants will review the content, watch interviews featuring survivor leaders and advocacy experts, and respond to questions.
        </p>

        <h2 className="text-2xl sm:text-4xl font-bold mt-10">
          <span className="text-[#00c1d5]">1st SESSION</span> DESCRIPTION
        </h2>

        <p className={`mt-4 text-base sm:text-xl leading-7 ${robotoopo.className}`}>
          Groomers possess the skills to deceive victims, their families, and entire communities. The process is subtle and involves forming a relationship with a vulnerable person with the intention of future sexual assault or inducing the victim to participate in a crime. Grooming is an illegal act, but prosecuting such cases is challenging due to the difficulty of proving criminal intent without a sexual assault occurring. Education for adults, adolescents, and youth will empower communities to recognize forms of manipulation and report grooming before offenders have the chance to commit sexual crimes.
        </p>

        {/* Blue Box */}
        <div className="bg-[#00c1d5] p-6 sm:p-10 mt-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">PART 1: LESSONS</h3>
          <ul className="space-y-2 text-[#303030]">
            {blueBoxContent.map((item) => (
              <li key={item.id} className="text-base sm:text-lg">
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Objectives */}
        <h3 className="text-xl font-bold uppercase mt-10 mb-4">Learning Objectives</h3>
        <ul className="list-disc pl-6 space-y-4">
          {objectives.map((item, idx) => (
            <li
              key={idx}
              className={`text-base sm:text-lg ${robotoopo.className}`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="bg-[#6B4EFF] text-white text-sm sm:text-base px-5 py-2 rounded-full">
            CME Accreditation
          </button>
          <button
            className="bg-[#6B4EFF] text-white text-sm sm:text-base px-5 py-2 rounded-full"
            onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
          >
            Start Course
          </button>
        </div>
      </div>
    </>
  );
};

export default PartOne;
