import Image from "next/image";
import React from "react";
import {  robotoopo, robotoItalicop } from "../../public/fonts/Fonts";

// Card section for demo images
const demoContent = [
  {
    title: "Implementation",
    subtitle: "Five Step Process",
    image: "demo-1.png",
  },
  {
    title: "Online Course",
    subtitle: "Introductions & Biographies",
    image: "demo-2.png",
  },
  {
    title: "Handout",
    subtitle: "Indicators & Risk Factors",
    image: "demo-3.png",
  },
  {
    title: "Lesson Plan #1",
    subtitle: "Myths & Reality",
    image: "demo-4.png",
    objectClass: "!object-scale-down",
  },
  {
    title: "Presentation #1",
    subtitle: "Myths & Reality",
    image: "demo-5.png",
  },
  {
    title: "Video #1",
    subtitle: "Myths & Reality",
    image: "demo-6.png",
  },
];

// Education topic cards
const cardData = [
  {
    title: "THE GROOMERS",
    topics: ["Myths & Reality", "Trustworthy vs. Adult", "Grooming Process", "Pornography Link"],
  },
  {
    title: "THE VULNERABLE",
    topics: ["Sextortion Scheme", "Male Victims", "Runaways as Targets", "Rural Risks"],
  },
  {
    title: "THE PREDATORS",
    topics: ["Human Traffickers", "Recruiters", "Familial Traffickers", "Hidden Buyers"],
  },
];

const PartTwo = () => {
  return (
    <>
      {/* DEMO Ribbon */}
      <div className="relative py-20 overflow-hidden max-w-screen-2xl mx-auto text-white   ">
        <div className="bg-purple-500 w-[200px] sm:w-[250px] md:w-[350px] text-center text-xl sm:text-2xl md:text-3xl -z-50 py-1 rotate-[-45deg] absolute top-10 sm:top-16 md:top-20 left-[-50px] sm:left-[-75px] md:left-[-100px]">
          DEMO
        </div>

        {/* Demo Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-30 px-4 sm:px-6 md:px-8">
          {demoContent.map(({ title, subtitle, image, objectClass = "" }, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="relative aspect-square w-full h-auto max-w-[400px]">
                <Image
                  src={`/assets/${image}`}
                  alt={title}
                  fill
                  className={`object-contain rounded-lg ${objectClass}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                />
              </div>
              <div className="bg-[#303033] rounded-4xl px-4 py-3 sm:px-6 sm:py-2 w-full max-w-[300px] text-center">
                <p className={`${robotoopo.className} text-sm sm:text-base md:text-lg`}>
                  {title}
                </p>
                <p className={`${robotoopo.className} text-sm`}>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Topics Section */}
      <div className="bg-[#303030] mt-10">
        <div className="px-4 sm:px-6 md:px-10 py-8 md:py-10 max-w-screen-2xl mx-auto">
          <h1 className="text-[#00c1d5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            12 education topics
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 sm:my-8 md:my-10 gap-4  px-4 sm:px-6 md:px-8 lg:px-10 text-black">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white h-[200px] md:h-[250px] lg:h-[300px] w-full max-w-[400px] mx-auto flex flex-col justify-evenly p-4 items-center"
              >
                <div className="text-center flex flex-col gap-1 sm:gap-2">
                  <h1 className={`${robotoItalicop.className} text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
                    {card.title}
                  </h1>
                  {card.topics.map((topic, i) => (
                    <p key={i} className={`${robotoopo.className} text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
                      {topic}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
