import Image from "next/image";
import React from "react";
import { robotoopo, robotoop, roboto } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const steps = [
  "Gain program approval among leadership.",
  "Establish a safety team to own and operate the program.",
  "Educate staff members on identifying risk factors and indicators of exploitation.",
  "Engage parents to foster awareness & program support.",
  "Deliver student education to increase knowledge and develop life skills.",
];

const implementationImages = [
  "/assets/imp-1.png",
  "/assets/imp-2.png",
  "/assets/imp-3.png",
  "/assets/imp-4.png",
];

const PartOne = () => {
  return (
    <section className="w-full">
      <PageBanner
        title="PROGRAM INTRODUCTION"
        image="/assets/IMPLEMENTATION.jpg"
        altText="Implementation"
      />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-24 md:pb-16">
        {/* Left Side – Text */}
        <div className="mt-12">
          <h1 className="text-4xl sm:text-5xl">getting started</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-12  mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            The Walking Wise Implementation Guide breaks down barriers to establishing sexual exploitation education programs in school systems. It outlines the five key steps to establishing and maintaining a successful district-wide or school-wide safety education initiative.
          </p>
        </div>

        {/* Right Side – Quote Box */}
        <div className="bg-[#00c1d5] w-[250px] sm:min-w-[400px] lg:min-w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] me-0 sm:me-10 p-4 border-4 xl:mt-[-30] border-white rounded-full flex flex-col justify-evenly items-center text-center text-white z-50">
          <p
            className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-4xl mt-6 px-4 sm:px-9`}
          >
            “While other
            curricula often gets
            bogged down in theory, Walking Wise provides clear and targeted education.”
          </p>
          <span
            className={`${robotoopo.className} text-[#303030] block text-sm sm:text-xl lg:text-2xl px-4 sm:px-20`}
          >
            Seth W. Boughton Anti-Human Trafficking Applied Data Analyst
          </span>
        </div>
      </div>

      {/* 5-Step Framework */}
      <div className="bg-[#303030]">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 md:py-26">
          <div className="flex flex-row justify-between mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
              The 5-step path <span className="text-[#00c1d5]">to implementation</span>
            </h1>
            <button className={`bg-[#9d1be3] ${robotoopo.className} rounded-full text-lg uppercase px-8 text-white text-center flex items-center justify-center whitespace-nowrap`}>
              5 Step Process
            </button>
          </div>
          <ol className="list-decimal pl-6">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`${robotoopo.className} text-white sm:text-lg md:text-xl lg:text-3xl mt-4`}
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Our Toolkit */}
      <div className="bg-white">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#303030] mb-6">
            Implementation Guide & Toolkit
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-18 items-stretch">
            {/* Left: Description */}
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-[#303030] text-sm sm:text-xl lg:text-2xl mt-6 md:max-w-[670px]`}
            >
              Walking Wise provides safety teams with essential tools to support the
              development of school policies and protocols, assess students' risk of
              being targeted, and recognize warning signs of exploitation by sexual
              predators, online groomers, and child traffickers.
            </p>

            {/* Middle: Resources */}
            <div className="flex-1 bg-[#00c1d5] text-black p-6 sm:p-8 md:p-10 space-y-4 flex flex-col">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                RESOURCES
              </h1>
              <ul className="list-disc list-inside space-y-1">
                <li>Student Benefits</li>
                <li>Protective Factors</li>
                <li>Obstacles to Youth Disclosure</li>
                <li>Five-Step Implementation Model</li>
                <li>Response Protocol</li>
                <li>Indicator Tool</li>
                <li>Risk Factor Tool</li>
                <li>Needs Assessment</li>
                <li>Self-Reported Assessment</li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center bg-white">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/imp-1.png"
                  alt="Implementation Toolkit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00c1d5]">
        <div className="md:py-32 w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            {/* Left Section: Text */}
            <div className="flex-[2]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white lg:text-5xl font-bold mb-6">
                School Policies & Protocols
              </h1>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-[#303030] text-sm sm:text-lg md:text-2xl`}
              >
                In 2021, the{" "}
                <a
                  href="https://www.justice.gov/archives/opa/pr/justice-department-observes-national-missing-children-s-day-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  U.S. Department of Education
                </a>{" "}
                advised schools to “develop district or schoolwide policies and protocols for identifying and supporting trafficked victims.”
              </p>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-[#303030] text-sm sm:text-lg md:text-2xl mt-6`}
              >
                In alignment with this guidance, Walking Wise collaborated with law enforcement and survivor leaders to provide safety teams with essential tools to support the development of school policies and protocols, assess students' risk of being targeted, and recognize warning signs of exploitation by sexual predators, online groomers, and child traffickers.
              </p>
            </div>

            {/* Right Section: Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[180px] sm:w-[220px] md:w-full h-[450px]">
                <Image
                  src="/assets/imp-3.png"
                  alt="Anonymous Assessments"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-32 w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left Section: Text */}
          <div className="flex-[2]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#303030] lg:text-5xl font-bold mb-6">
              Anonymous Assessments
            </h1>
            <p
              className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl mt-4 sm:mt-6`}
            >
              An anonymous Needs Assessment Youth Survey is an optional schoolwide
              screening tool designed to identify the need for education on sexual
              exploitation based on various risk factors within the student
              population. It helps uncover hidden risks that may otherwise go
              unnoticed, providing a clearer understanding of the challenges
              within the school community.
            </p>
            <p
              className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl mt-4 sm:mt-6`}
            >
              Administering an anonymous Self-Reported Youth Survey at the start
              of a program helps educators tailor content to students' knowledge,
              attitudes, and behaviors, assisting them in meeting students’
              educational needs. When used as a post-survey, this tool can provide
              valuable insight into the program’s effectiveness.
            </p>

            {/* Button */}
            <button className="mt-6 bg-[#9d1be3] text-white px-6 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold">
              ENROLL Today!
            </button>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[180px] sm:w-[220px] md:w-full h-[450px]">
              <Image
                src="/assets/imp-4.png"
                alt="Anonymous Assessments"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PartOne;
