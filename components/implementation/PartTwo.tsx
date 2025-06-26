"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";

const implementationItems = [
  "Student Benefits",
  "Protective Factors",
  "Obstacles to Youth Disclosure",
  "Five-step Implementation Model",
  "Response Protocol – Suspicion of Sexual Exploitation",
  "Indicator Tool – Assessment of Sexual Exploitation",
  "Risk Factor Tool – Assessment of Sexual Exploitation",
  "Needs Assessment – Anonymous Youth Survey",
  "Self-Reported Assessment – Anonymous Youth Survey",
];

const PartTwo = () => {
  const router = useRouter();

  const handleDemoRedirect = () => {
    () => (window.location.href = "https://www.walkingwise.com/contact-us-v2/");
  };

  return (
    <>
      {/* Implementation Guide Section */}
      <div className="py-15 mt-5  max-w-screen-2xl mx-auto text-[#303030] w-full">
        <div className="px-10 flex flex-col items-center xl:flex-row gap-10">
          {/* Left Text */}
          <div className="lg:w-5xl">
            <h1 className="text-4xl px-10 sm:text-5xl md:text-6xl">
              Implementation Guide & Toolkit
            </h1>
            <ul className="list-disc ms-5 sm:ms-25 mt-4 sm:mt-8">
              {implementationItems.map((item, index) => (
                <li
                  key={index}
                  className={`${robotoopo.className} text-base sm:text-2xl mt-2`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center items-center sm:gap-15">
              <button
                onClick={handleDemoRedirect}
                className={`bg-purple-600 hover:bg-purple-700 text-white px-10 py-2 text-xl mt-4 rounded-4xl transition-colors ${robotoopo.className}`}
              >
                DEMO Curriculum
              </button>
              <button
                onClick={handleDemoRedirect}
                className={`bg-purple-600 hover:bg-purple-700 text-white px-10 py-2 text-xl mt-4 rounded-4xl transition-colors ${robotoopo.className}`}
              >
                ENROLL Today!
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[600px] w-[200px] sm:w-[250px] md:w-[600px]">
              <Image
                src="/assets/imp-5.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* School Policies Section */}
      <div className="bg-[#26b2c4] py-10 w-full">
        <div className="p-10 max-w-screen-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white lg:text-6xl font-bold">
            <span className="text-[#303030]">SCHOOL</span> POLIcies & Protocols
          </h1>
          <p
            className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            In 2021, the{" "}
            <span className="underline me-2">U.S. Department of Education</span>
            advised schools to “develop district or schoolwide policies and
            protocols for identifying and supporting trafficked victims.”
          </p>
          <p
            className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            In alignment with this guidance, Walking Wise collaborated with law
            enforcement and survivor leaders to provide safety teams with
            essential tools to support the development of school policies and
            protocols, assess students risk of being targeted, and recognize
            warning signs of exploitation by sexual predators, online groomers,
            and child traffickers.
          </p>
        </div>
      </div>

      {/* Anonymous Assessments Section */}
      <div className="py-10 w-full max-w-screen-2xl mx-auto">
        <div className="p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#303030] lg:text-6xl font-bold">
            anonymous assessments
          </h1>
          <p
            className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            An anonymous Needs Assessment Youth Survey is an optional schoolwide
            screening tool designed to identify the need for education on sexual
            exploitation based on various risk factors within the student
            population. It helps uncover hidden risks that may otherwise go
            unnoticed, providing a clearer understanding of the challenges
            within the school community.
          </p>
          <p
            className={`${robotoopo.className} text-[#303030] tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            Administering an anonymous Self-Reported Youth Survey at the start
            of a program helps educators tailor content to students knowledge,
            attitudes, and behaviors, assisting them in meeting students’
            educational needs. When used as a post-survey, this tool can provide
            valuable insight into the program’s effectiveness.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
