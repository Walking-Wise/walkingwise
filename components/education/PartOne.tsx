'use client'
import React from "react";
import { useRouter } from "next/navigation";
import {
  robotoopo,
  robotoItalic,
  robotoItalicop,
} from "../../public/fonts/Fonts";

const PartOne = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/videos");
  
  };

  return (
    <>
      {/* Hero Image Section */}
       <div className="w-full bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/HME.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-80 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl sm:text-5xl  text-white md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Home education
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl  text-white p-1 bg-black/50">  Home education</h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            Parent Guide
          </h1>
        </div>
      </div>

      {/* Parent Engagement Section */}
      <section className="flex  max-w-screen-2xl mx-auto flex-col xl:flex-row justify-between mt-40 lg:mt-70 items-center gap-8 px-4 py-5">
        <div className="w-full max-w-4xl text-black text-base sm:text-lg md:text-3xl lg:text-left px-4">
          <h1 className="text-4xl sm:text-6xl">Parent & Caregiver Engagement</h1>
          <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  mt-5`}>
            Walking Wise<span className="text-sm relative -top-3">&reg;</span> encourages parents, grandparents, and other caregivers to take charge of their child’s education. It’s Walking Wise’s mission to help you hold candid conversations about sexual exploitation and abuse. The goal is for your child to recognize unsafe adult behaviors and come to you for guidance and protection.
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-[#36c5d8] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] p-4 z-50 border-t-3 border-white relative xl:-top-20 rounded-full flex flex-col justify-center items-center text-center text-black">
          <p className={`${robotoItalic.className} text-md sm:text-3xl mt-5 px-12`}>
            “Upon completing the Unsafe Adult, Grooming, and Sextortion lessons, my granddaughter said,
          </p>
          <p className={`${robotoItalicop.className} capitalize text-md mt-3 sm:text-3xl px-15`}>
            ‘I bet I’m the only kid who knows this stuff in my entire school!’”
          </p>
          <span className={`${robotoItalic.className} text-white block mt-4 sm:text-2xl`}>
            Engaged Grandmother
          </span>
        </div>
      </section>

      {/* Curriculum Info Section */}
      <section className="bg-[#303030] text-white">
        <div className="p-6 sm:p-8 md:p-10  max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#36c5d8]">
              Moving Beyond Stranger Danger
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full sm:w-auto">
              {["Animated Videos", " ENROLL Today! "].map((label, index) => (
                <button
                  key={index}
                  onClick={handleRedirect}
                  className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-2  rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-2xl`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 space-y-10">
            <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
              The concept of Stranger Danger is no longer widely promoted because it can create a false sense of security and does not reflect the modern realities of child exploitation and abuse. Research shows that most perpetrators are not strangers but rather individuals the child knows and trusts—such as family members, friends, and authority figures.
            </p>

            <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
              Today’s approach focuses on empowerment through education, teaching children to recognize unsafe behaviors rather than simply fearing unfamiliar faces. By fostering open conversations, developing critical thinking skills, and encouraging children to trust their instincts, we help them identify and respond to potential dangers more confidently.
            </p>

            <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
              This shift ensures that children feel empowered to speak up, seek help, and understand that everyone—not just strangers—must respect their boundaries.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartOne;
