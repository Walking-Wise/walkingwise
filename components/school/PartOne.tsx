// import Image from "next/image";
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";
import PartTwo from "./PartTwo";
const PartOne = () => {
  return (
    <>
      {/* Hero Image Section */}
       <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/SCHOOL.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 1024px */}
          <div className="hidden md:block absolute bottom-2 sm:bottom-5 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/70">
              school programs
            </h1>
          </div>

          {/* Centered version - shows on screens < 1024px */}
          <div className="md:hidden flex h-full justify-center items-end">
            <h1 className=" text-5xl  text-white sm:text-6xl p-1 bg-black/70">
              school programs
            </h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            School & District Programs
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center mt-30 sm:mt-60 max-w-screen-2xl mx-auto text-[#303030]">
        <div className="px-10 mt-10">
          <h1 className="text-4xl sm:text-6xl">Sustainable Education</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            {" "}
            Many schools invite guest speakers—subject matter experts (SMEs)—to
            present on sex trafficking for staff, parents, and students. While
            valuable, these one-time presentations often fade from memory.
            Today, Walking
            <span className="relative text-sm -left-15 -top-6">&reg;</span>Wise
            partners with SMEs to provide a long-term, sustainable approach to
            child exploitation education, ensuring that critical knowledge gets
            reinforced over time.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            {" "}
            Walking Wise’s Learning Platform enables schools and youth
            organizations to take ownership of their child safety programs. By
            integrating ongoing prevention education throughout middle and high
            school, students (ages 11+) develop lasting awareness, critical
            thinking skills, and the knowledge to respond to coercive tactics
            frequently used to victimize young people.
          </p>
        </div>
      </div>

      {/* other box  */}
      <PartTwo />

      <div className="flex justify-center items-center py-10 bg-[#303030] text-white">
        <div className="px-10 max-w-screen-2xl mx-auto mt-10">
          <h1 className="text-4xl sm:text-7xl"> School Safety TeamS</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            {" "}
            In 2021, the U.S. Department of Education provided guidelines for
            implementing human trafficking education and suggested empowering a
            ‘safety team’ to develop and oversee school education as well as
            policies and response protocols for reporting suspected child
            trafficking.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            {" "}
            It is recommended that safety teams include school social workers,
            nurses, resource officers, psychologists, counselors, principals,
            wellness-focused educators, and members of their local anti-human
            trafficking coalition. With this diverse expertise, these teams are
            well-equipped to provide staff training and educate parents and
            students.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10   text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            {" "}
            For more information, please review guidelines written for the U.S.
            Department of Education, Office of Safe and Supportive Schools,
            called{" "}
            <span className="underline">
              Human Trafficking in AMERICA’S SCHOOLS
            </span>
            .{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default PartOne;
