"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { robotoopo, robotoItalic } from "../../public/fonts/Fonts";

const PartOne = () => {
  const router = useRouter();

  const handleRedirect = () => {
    () => (window.location.href = "https://www.walkingwise.com/contact-us-v2/");
  };

  const buttons = ["  DEMO Curriculum", "ENROLL Today!"];

  return (
    <>
      {/* Hero Image Section */}
      <div className="w-full bg-[#303030]">
        <div className="w-full max-h-[700px] overflow-hidden">
          <Image
            src="/assets/video.png"
            alt="Online Course for Adults"
            width={1920}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Title Overlay */}
      <div className="relative z-10">
        <div className=" z-[-100] top-[-30px] 2xl:top-0 bg-[#303030] w-full py-4 flex items-center px-4">
          <h1 className="sm:text-6xl lg:text-5xl text-white">
            Animated Video Series
          </h1>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="mt-8 mb-20 px-10 text-[#303030] !bg-white">
        <h1 className="text-4xl  max-w-screen-2xl mx-auto sm:text-6xl">
          Explanation Animation
        </h1>
        <p
          className={`${robotoopo.className} tracking-wide max-w-screen-2xl mx-auto leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          Storytelling creates a strong connection with audiences, while visual
          learning enhances comprehension and retention. By combining these
          elements, explainer-style animation becomes a powerful educational
          tool that resonates with both children and adults. Walking Wise®
          subscribers receive full access to an animated video series that
          covers 12 key issues related to child exploitation
        </p>
      </div>

      {/* Empowerment Section */}
      <div className=" bg-[#303030]">
        <div className="mt-20  max-w-screen-2xl mx-auto flex flex-col gap-10 xl:flex-row justify-between items-center xl:items-start">
          <div className="lg:w-4xl py-10 max-sm:px-10 text-white mt-10">
            <h1 className="text-4xl text-[#36c5d8] sm:text-5xl md:text-6xl">
              Empowerment through Animation
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
            >
              Walking Wise empowers young people with critical skills to
              evaluate who is trustworthy, swiftly identify a potential online
              threat, and judge when to end something as basic as a conversation
              or as powerful as a relationship.
            </p>
            <h1 className="text-4xl text-[#36c5d8] mt-10 sm:text-5xl md:text-6xl">
              Strategic Tactics of Sexual Predators
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
            >
              Understanding that many children experience sexual abuse and
              exploitation, we worked diligently with survivors and advocacy
              experts to produce animated explanations that are sensitive to
              those who have experienced trauma. Each 3-minute video illustrates
              the many tactics predators use to groom and exploit vulnerable
              children.
            </p>
          </div>

          {/* Quote Box and Buttons */}
          <div>
            <div className="bg-[#36c5d8] w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] border-4 border-white rounded-full flex flex-col justify-evenly items-center text-center text-white p-4 xl:mt-10">
              <p
                className={`${robotoItalic.className} text-sm sm:text-xl lg:text-4xl px-10 sm:mt-10`}
              >
                “THE ANIMATED VIDEOS ARE VALUABLE LESSONS & NON-TRIGGERING FOR
                AT-RISK YOUTH. IT’S A GREAT CONCEPT & EASY TO TEACH!”
              </p>
              <span
                className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-2xl px-4 sm:px-20 mt-4`}
              >
                Abby, Advocate ZOE International
              </span>
            </div>

            <div className="flex w-full  flex-col justify-center items-center mb-10 gap-4">
              {buttons.map((label, idx) => (
                <button
                  key={idx}
                  onClick={handleRedirect}
                  className={`bg-purple-600 hover:bg-purple-700 text-white text-sm sm:px-10 py-2 w-1/2 sm:text-xl  mt-4 rounded-4xl transition-colors ${robotoopo.className}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="bg-[#36c5d8]">
        <div className="max-sm:px-10 py-10 text-[#303030] max-w-screen-2xl mx-auto">
          <div className="flex justify-between  items-center">
            <h1 className="text-4xl sm:text-6xl">
              Walking Wise Animated Video Series
            </h1>
            <div className=" h-[50px] w-[50px]  pt-[5px] border-[#303030] hidden sm:block text-[#115a64] rounded-full text-xl ps-2 border-5 border-r-transparent">
              11y+
            </div>
          </div>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            Watch our 12 video trailers or view our sample video: The Myths of
            Child Sex Trafficking.
          </p>
          <p
            className={`${robotoopo.className} text-white text-base sm:text-xl lg:text-2xl mt-4 sm:mt-6`}
          >
            NOTE: Adults are encouraged to accompany young children throughout
            the learning process.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartOne;
