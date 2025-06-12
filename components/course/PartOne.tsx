"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";

// Static data
const blueBoxContent = [
  { id: 1, text: "#1 Myths & Reality" },
  { id: 2, text: "#2 Trustworthy vs. Unsafe Adult" },
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
  const router = useRouter();

  return (
    <>
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/ADULT.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-70 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Online course
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl  text-white p-1 bg-black/50">
              Online course
            </h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            coure description
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-50 sm:mt-80 mb-10 md:mb-20  max-w-screen-2xl mx-auto flex justify-center text-[#303030] px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h1 className="text-4xl sm:text-6xl">
            Walking Wise: Sexual Exploitation Education
          </h1>
          <div className="flex justify-end">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="hidden xl:block mt-4 sm:mt-0">
                <div className="flex justify-center items-center gap-4 sm:gap-7">
                  <button
                    className={`bg-[#1C4675] text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 lg:px-10 py-1 sm:py-2 rounded-4xl ${robotoop.className} text-white`}
                  >
                    CME Accreditation
                  </button>
                  <div className="relative h-[80px] sm:h-[100px] lg:h-[150px] w-[80px] sm:w-[100px] lg:w-[150px]">
                    <Image
                      src="/assets/home-1.png"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[#303030] text-4xl sm:text-6xl mt-8 md:mt-10">
            <span className="text-[#00c1d5] me-3">part 1</span> the groomers
          </h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-3xl mt-4`}
          >
            The four lessons involve four contact hours. To complete this
            session, participants will review the content, watch interviews
            featuring survivor leaders and advocacy experts, and respond to
            questions.
          </p>

          <h1 className="text-[#303030] text-4xl sm:text-6xl mt-8 md:mt-10">
            <span className="text-[#00c1d5] me-3">1st SESSION</span> Description
          </h1>

          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-3xl mt-4`}
          >
            Groomers possess the skills to deceive victims, their families, and
            entire communities. The process is subtle and involves forming a
            relationship with a vulnerable person with the intention of future
            sexual assault or inducing the victim to participate in a crime.
            Grooming is an illegal act, but prosecuting such cases is
            challenging due to the difficulty of proving criminal intent without
            a sexual assault occurring. Education for adults, adolescents, and
            youth will empower communities to recognize forms of manipulation
            and report grooming before offenders have the chance to commit
            sexual crimes.
          </p>

          {/* Blue Box */}
          <div className="bg-[#00c1d5] w-full max-w-7xl min-h-[200px] ps-2 py-5 pb-15 sm:px-6 md:px-10 lg:px-20 mx-auto my-10 sm:my-12 md:my-16 lg:my-20">
            <h1
              className={`${roboto.className} text-4xl sm:text-5xl mt-4 sm:mt-10 sm:pt-5 md:pt-0 text-center sm:text-left`}
            >
              THE GROOMERS
            </h1>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 mt-6">
              <div className="w-full sm:w-1/2">
                {blueBoxContent
                  .filter((_, i) => i % 2 === 0)
                  .map((item) => (
                    <p
                      key={item.id}
                      className={`${roboto.className}  text-base sm:text-lg md:text-xl lg:text-4xl mt-4`}
                    >
                      {item.text}
                    </p>
                  ))}
              </div>
              <div className="w-full sm:w-1/2">
                {blueBoxContent
                  .filter((_, i) => i % 2 === 1)
                  .map((item) => (
                    <p
                      key={item.id}
                      className={`${roboto.className} text-base sm:text-lg md:text-xl lg:text-4xl mt-4`}
                    >
                      {item.text}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-10 md:mb-10">
            <h1 className="text-[#303030] text-4xl sm:text-6xl">
              <span className="text-[#00c1d5] me-3">1st SESSION</span>{" "}
              objectives
            </h1>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-4xl transition-colors ${robotoopo.className} text-lg sm:text-xl`}
              onClick={() => router.push("/course")}
            >
              Start Course
            </button>
          </div>

          <ul className="list-disc pl-6 sm:pl-10 md:pl-16">
            {objectives.map((item, idx) => (
              <li
                key={idx}
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-lg md:text-xl lg:text-3xl mt-4 mb-6 sm:mb-8 md:mb-10`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PartOne;
