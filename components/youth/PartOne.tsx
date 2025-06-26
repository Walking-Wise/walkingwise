"use client";
import Image from "next/image";
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";
import { useRouter } from "next/navigation";

const PartOne = () => {
  const router = useRouter();

  return (
    <>
     <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/EUD.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-70 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Youth Curriculum
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl  text-white p-1 bg-black/50">
              Youth Curriculum
            </h1>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="z-[-100] top-[-40px]  bg-[#303030] w-full py-3 flex items-center px-4">
          <h1 className="sm:text-6xl lg:text-5xl text-white">
            curriculum for youth
          </h1>
        </div>
      </div>

      <div className="mt-8 max-w-screen-2xl mx-auto lg:mt-8 mb-10 text-[#303030]">
        <div className="max-sm:px-10">
          <div className="flex justify-between">
            <h1 className="text-4xl sm:text-6xl"> Youth Education </h1>
            <div className=" h-[50px] w-[50px]  pt-[5px] border-[#303030] hidden sm:block text-[#115a64] rounded-full text-xl ps-2 border-5 border-r-transparent">
              11y+
            </div>
          </div>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            The Walking Wise
            <span className="text-sm relative -top-3">&reg;</span> Learning
            Platform offers engaging, easy-to-teach lessons designed for lasting
            impact on middle and high school youth ages 11+. Our curriculum uses
            multisensory teaching to enhance learning, combining technology and
            storytelling through interactive classroom presentations and
            animated explainer videos.
          </p>
        </div>
      </div>

      <div className="bg-[#26b2c4] sm:py-15 py-10  mt-5 text-white w-full ">
        <div className="max-sm:px-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10">
          <div>
            <h1 className="text-4xl sm:text-6xl text-[#303030]">
              Classroom Presentations
            </h1>
            <p
              className={`${robotoopo.className} text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-7 lg:leading-10  mt-4 sm:mt-8`}
            >
              Our classroom presentations are designed for student education,
              school staff meetings, and parent events.
            </p>
            <p
              className={`${robotoopo.className} text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-7 lg:leading-10  mt-4 sm:mt-8`}
            >
              Educators can captivate these diverse audiences using group
              discussions, live polls, word clouds, text responses, interactive
              Q&A, anonymous surveys, and animated videos.
            </p>
            <p
              className={`${robotoopo.className} text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wide leading-7 lg:leading-10  mt-4 sm:mt-8`}
            >
              For most topics, the presentations are typically 45 minutes long.
              Educators are encouraged to modify the presentations to be age
              appropriate, align with school policy, and fit within various
              class time schedules.
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-[200px] sm:w-[250px] md:w-[300px]">
              <Image
                src="/assets/youth-1.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <button
              className={`bg-purple-600 hover:bg-purple-700 text-white  py-2 text-xl mt-6 sm:mt-10 rounded-4xl transition-colors ${robotoopo.className}`}
              onClick={() => router.push("/demo")}
            >
              DEMO Curriculum
            </button>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white  py-2 text-2xl mt-4 sm:mt-10 rounded-4xl transition-colors ${robotoopo.className}`}
              onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
            >
              ENROLL Today!
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;
