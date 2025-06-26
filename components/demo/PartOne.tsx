'use client'
import React from "react";
import { robotoItalic, roboto, robotoopo } from "../../public/fonts/Fonts";
import { useRouter } from "next/navigation";

const resourceItems = [
  {
    title: "Implementation",
    description: "Download the five steps for integrating Walking Wise into youth education.",
  },
  {
    title: "Contributors",
    description:
      "Learn about the survivor leaders and advocacy experts behind our online course.",
  },
  {
    title: "Handout",
    description:
      "Access the resource for adults on the risk factors and indicators of exploitation.",
  },
  {
    title: "Lesson Plan",
    description:
      "Review the Myths & Reality lesson to understand our education approach.",
  },
  {
    title: "Classroom Presentation",
    description:
      "Click through Myths & Reality slides to see how we engage students.",
  },
  {
    title: "Animated Video",
    description:
      "Watch our 3-minute Myths & Reality video to demo our animated explanations.",
  },
];

const PartOne = () => {
  const router = useRouter();
  return (
    <>
      {/* Hero Image Section */}
     <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/DEMO.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-80 left-30">
            <h1 className="text-8xl p-1  text-white bg-black/50">
              DEMO
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-8xl p-1 bg-black/50  text-white">  DEMO</h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[100px] sm:h-[120px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl text-white">
            curriculum DEMO
          </h1>
        </div>
      </div>

      {/* Quote & Description Section */}
      <div className="flex max-w-screen-2xl mx-auto flex-col xl:flex-row justify-between items-center gap-8 px-4 py-5 mt-30 lg:mt-40 xl:mt-20 relative">
        <div className="w-full xl:w-auto text-[#303030] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 lg:text-left xl:mt-40">
          <h1 className="text-4xl sm:text-6xl mb-4">on-demand education</h1>
          <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 `}>
            Walking Wise<span className="text-sm relative -top-3">&reg;</span>helps adults navigate conversations about sexual
            exploitation with clarity and confidence. To kickstart the learning
            process, we offer a comprehensive 12-topic course for adults. In
            addition, we provide a classroom-style lesson on the myths and
            reality of sexual exploitation—structured like the lessons designed
            for students. This allows staff members and parents to experience
            the program firsthand while gaining a clear understanding of the
            remaining 11 lessons provided in the youth curriculum.
          </p>
        </div>

        <div className="bg-[#36c5d8] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-black mx-auto xl:absolute xl:right-0 xl:top-[-250px] z-50">
          <p
            className={`${robotoItalic.className} text-sm sm:text-2xl xl:text-4xl px-4 sm:px-8`}
          >
            “THE SHEEP PRETEND THE WOLF WILL NEVER COME, BUT THE SHEEPDOG IS
            PREPARED AND WAITING FOR THAT DAY.”
          </p>
          <span
            className={`${robotoItalic.className} text-white px-9 text-sm sm:text-xl xl:text-2xl mt-4`}
          >
            Retired Lieutenant Colonel Dave Grossman, U.S. Army
          </span>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-[#00c1d5] z-[200] py-10 w-full">
        <div className="p-10 max-w-screen-2xl mx-auto">
          <div className="flex justify-between flex-wrap">
            <h1 className="text-4xl sm:text-6xl text-[#303030]">
              explore Walking Wise materials
            </h1>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
              onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
            >
              ENROLL Today!
            </button>
          </div>

          <p
            className={`${robotoopo.className} text-black text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
          >
            Become familiar with the program by checking out our educational
            materials:
          </p>

          <ul className="list-disc sm:ms-20">
            {resourceItems.map(({ title, description }, index) => (
              <li
                key={index}
                className={`${robotoopo .className} text-white text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
              >
                <span className={`text-[#303030] ${roboto.className}`} >{title}:</span> {description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PartOne;
