"use client";

import React from "react";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

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
      <PageBanner
        title="ADULT COURSE DESCRIPTION"
        image="/assets/COURSE.jpg"
        altText="Online Course for Adults"
      />
      {/* Content Section */}
      <div className="bg-white md:py-18">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
          <h1 className="text-3xl text-[#303030] sm:text-5xl font-extrabold uppercase">
            WALKING WISE: SEXUAL EXPLOITATION EDUCATION
          </h1>

          <p
            className={`text-[#303030] text-xl sm:text-3xl italic mt-4 mb-6 ${robotoopo.className}`}
          >
            Our 12-part course provides twelve contact hours, divided into three
            sections:{" "}
            <span className="italic font-medium">
              The Groomers, The Vulnerable, and The Predators
            </span>
            —each containing four lessons. Participants will review course
            content, watch interviews with survivor leaders and advocacy
            experts, and respond to 10 questions to earn CE/CME credit upon the
            completion of each lesson.
          </p>
          <div className="w-full max-w-[1600px] py-2 pe-12">
            {/* Headings */}
            <h1 className="text-3xl sm:text-5xl font-bold mt-10 mb-8 text-[#303030]">
              <span className="text-[#00c1d5]">PART 1:</span> THE GROOMERS
            </h1>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#303030]">
              Course Description
            </h1>

            {/* Description & Blue Box side-by-side */}
            <div className="relative flex flex-col lg:flex-row gap-8">
              {/* First paragraph */}
              <div>
                <p
                  className={`mt-2 text-xl sm:text-2xl text-[#303030] ${robotoopo.className}`}
                >
                  Groomers possess the skills to deceive victims, their
                  families, and entire communities. The process is subtle and
                  involves forming a relationship with a vulnerable person with
                  the intention of future sexual assault or inducing the victim
                  to participate in a crime.
                </p>
              </div>

              {/* Blue box floated on the right */}
              <div className="w-full lg:w-[500px] xl:w-[500px] shrink-0 bg-[#00c1d5] p-6 self-start">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#303030] mb-2">
                  PART 1: LESSONS
                </h1>
                <ul className="space-y-2 text-[#303030]">
                  {blueBoxContent.map((item) => (
                    <li key={item.id} className="text-base sm:text-xl">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second paragraph below both */}
            <div className="mt-6">
              <p
                className={`text-xl sm:text-2xl text-[#303030] ${robotoopo.className}`}
              >
                Grooming is an illegal act, but prosecuting such cases is
                challenging due to the difficulty of proving criminal intent
                without a sexual assault occurring. Education for adults,
                adolescents, and youth will empower communities to recognize
                forms of manipulation and report grooming before offenders have
                the chance to commit sexual crimes.
              </p>
            </div>
          </div>

          {/* Learning Objectives */}
          <h1 className="text-2xl text-[#303030] sm:text-4xl font-bold uppercase mt-10 mb-4">
            Learning Objectives
          </h1>
          <ul className="list-disc pl-6 space-y-4 text-[#303030]">
            {objectives.map((item, idx) => (
              <li
                key={idx}
                className={`text-base text-xl sm:text-2xl ${robotoopo.className}`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() =>
                (window.location.href =
                  "https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/PIM+Accreditation+Info-Walking-Wise-eLearning/content/index.html")
              }
              className={`bg-[#9d1be3] ${roboto.className} mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-6 text-white flex items-center whitespace-nowrap underline`}
            >
              CME Accreditation
            </button>
            <button
              className={`bg-[#9d1be3] ${roboto.className} mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-6 text-white flex items-center whitespace-nowrap`}
              onClick={() =>
                (window.location.href =
                  "https://www.walkingwise.com/contact-us-v2/")
              }
            >
              Start Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;
