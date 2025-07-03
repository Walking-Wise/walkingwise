"use client";
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";

const PartTwo = () => {
  return (
    <>
      {/* Wrapper for full width background sections */}
      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Section - Prevention Strategy */}
        <div className="w-full lg:w-1/2 bg-white text-[#303030]">
          <div className="max-w-[1800px] mx-auto p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <h1 className="text-4xl sm:text-6xl">prevention strategy</h1>
            </div>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6`}
            >
              Education is one of the most powerful tools for prevention, and
              everyone, especially adolescents, should have access to it.
            </p>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6`}
            >
              Organizations that equip adults and youth with knowledge naturally
              create safer environments, as predators are less likely to see the
              children they serve as vulnerable targets.
            </p>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6`}
            >
              Walking Wise education is designed for flexible use in one-on-one
              mentoring, small group discussions, or full-scale workshops.
            </p>
          </div>
        </div>

        {/* Right Section - Anti-Exploitation Advocates */}
        <div className="w-full lg:w-1/2 bg-[#3ab6c7] text-black">
          <div className="max-w-[1800px] mx-auto p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <h1 className="text-4xl sm:text-6xl">
                anti-exploitation advocates
              </h1>
            </div>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6`}
            >
              Our education is designed to complement the vital work of
              anti-trafficking organizations by streamlining the delivery of
              impactful prevention education.
            </p>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6`}
            >
              Walking Wise trauma-sensitive and expert-reviewed resources free
              advocacy groups from the costly and time-consuming task of content
              development, allowing them to focus on what they do best—building
              strong community relationships and offering direct support.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-action buttons */}
      <div className="max-w-[1800px] mx-auto mt-10 px-6 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full justify-center">
        <button
          className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
          onClick={() =>
            (window.location.href =
              "https://www.walkingwise.com/contact-us-v2/")
          }
        >
          DEMO Curriculum
        </button>
        <button
          className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
          onClick={() =>
            (window.location.href =
              "https://www.walkingwise.com/contact-us-v2/")
          }
        >
          ENROLL Today!
        </button>
      </div>
    </>
  );
};

export default PartTwo;
