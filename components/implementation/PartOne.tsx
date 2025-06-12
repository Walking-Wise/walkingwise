import Image from "next/image";
import React from "react";
import { robotoopo, robotoop } from "../../public/fonts/Fonts";

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
    <>
      {/* Hero Image Section */}
       <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/IMP.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-80 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Implementation
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center  text-white items-center">
            <h1 className="text-5xl p-1 bg-black/50"> Implementation</h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            program introduction
          </h1>
        </div>
      </div>

      <div className="mt-40  max-w-screen-2xl mx-auto sm:mt-60 flex flex-col gap-10 xl:flex-row justify-between items-center xl:items-start">
        {/* Left Side – Text */}
        <div className="lg:w-4xl px-10 text-[#303030] mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">getting started</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  mb-6 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            The Walking Wise
            <span className="text-sm relative -top-3">&reg;</span>{" "}
            Implementation Guide breaks down barriers to establishing sexual
            exploitation education programs in school systems. It outlines the
            five key steps to establishing and maintaining a successful
            district-wide or school-wide safety education initiative.
          </p>
        </div>

        {/* Right Side – Quote Box */}
        <div className="bg-[#303030] w-[250px] sm:min-w-[400px] lg:min-w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] me-0 sm:me-10 p-4 border-b-4 xl:mt-10 border-white rounded-full flex flex-col justify-evenly items-center text-center text-white z-50">
          <p
            className={`${robotoop.className} text-sm sm:text-xl lg:text-4xl mt-6 px-4 sm:px-9`}
          >
            “WHILE OTHER CURRICULA OFTEN GETS BOGGED DOWN IN THEORY, WALKING
            WISE PROVIDES CLEAR AND TARGETED EDUCATION.”
          </p>
          <span
            className={`${robotoopo.className} text-[#00c1d5] block text-sm sm:text-xl lg:text-2xl px-4 sm:px-20 mt-4`}
          >
            Seth W. Boughton Anti-Human Trafficking Applied Data Analyst
          </span>
        </div>
      </div>

      {/* 5-Step Framework */}
      <div className="bg-[#00c1d5] relative xl:-top-24  py-10 w-full">
        <div className="px-4 sm:px-10 max-w-screen-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#303030] font-bold">
            5-Step Framework Provides a Clear Roadmap
          </h1>
          <ol className="list-decimal pl-6 sm:pl-10 md:pl-20 mt-6">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`${robotoopo.className} text-base sm:text-lg md:text-xl lg:text-2xl mt-4`}
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Our Toolkit */}
      <div className="text-[#303030] px-10  max-w-screen-2xl mx-auto my-20 xl:mt-0">
        <h1 className="text-4xl sm:text-6xl">our Toolkit</h1>
        <p
          className={`${robotoopo.className} text-lg tracking-wide leading-7 lg:leading-10  md:text-2xl lg:text-3xl mt-4`}
        >
          Walking Wise provides safety teams with essential tools to support the
          development of school policies and protocols, assess students risk of
          being targeted, and recognize warning signs of exploitation by sexual
          predators, online groomers, and child traffickers.
        </p>
      </div>

      {/* Implementation Tools */}
      <div className="bg-[#303030] mt-10">
        <div className="px-4 max-w-screen-2xl mx-auto sm:px-6 md:px-10 py-8 md:py-10">
          <h1 className="text-[#26b2c4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Implementation tools
          </h1>
          <div className="flex flex-wrap justify-center gap-10 lg:justify-between items-center p-10">
            {implementationImages.map((src, idx) => (
              <div
                key={idx}
                className="relative h-[200px] w-[150px] sm:h-[250px] sm:w-[180px] md:h-[280px] md:w-[210px] lg:h-[350px] lg:w-[270px]"
              >
                <Image
                  src={src}
                  alt={`Implementation tool ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;
