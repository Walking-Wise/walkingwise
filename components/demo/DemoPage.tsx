"use client";
import React from "react";
import Image from "next/image";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import { robotoItalic, roboto, robotoopo, robotoBold } from "../../public/fonts/Fonts";

const resourceItems = [
  {
    title: "Implementation",
    description:
      "Download the five simple steps to integrate Walking Wise into youth education.",
  },
  {
    title: "Online Course",
    description:
      "Meet the survivor leaders and advocacy experts who shaped our online course.",
  },
  {
    title: "Handout",
    description:
      "Access a quick reference on risk factors and warning signs of exploitation.",
  },
  {
    title: "Lesson Plan",
    description:
      "View the Myths & Reality lesson to see how we introduce core concepts to students.",
  },
  {
    title: "Classroom Presentation",
    description:
      "Preview the Myths & Reality slides to see how we engage parents and students.",
  },
  {
    title: "Animated Video",
    description:
      "Watch a 3-minute animation that brings key ideas from Myths & Reality to life.",
  },
];

const demoContent = [
  {
    title: "Lesson Plan",
    subtitle: "#1 Myths & Reality",
    image: "Education_guide.png",
    objectClass: "!object-scale-down",
  },
  {
    title: "Presentation",
    subtitle: "#1 Myths & Reality",
    image: "demo-5.png",
  },
  {
    title: "Animated Video",
    subtitle: "#1 Myths & Reality",
    image: "demo-6.png",
  },
];

const DemoPage = () => {
  return (
    <>
      <PageBanner
        title="Curriculum Demo"
        image="/assets/DEMO.jpg"
        altText="Walking Wise Education Demo"
      />

      <Section bgColor="white">
        <div className="w-full flex justify-end hidden md:block">
          <div className="bg-[#36c5d8] md:w-[500px] md:h-[500px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-[#303030] mx-auto md:absolute md:right-[7%] z-50 md:mt-[-450px]">
            <p className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}>
              “The sheep pretend the
            </p>
            <p className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}>
              wolf will never come,
            </p>
            <p className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}>
              but the sheepdog is
            </p>
            <p className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}>
              prepared and waiting
            </p>
            <p className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}>
              for that day.”
            </p>
            <div>
              <p className={`${robotoItalic.className} text-white px-9 text-sm sm:text-xl md:text-2xl mt-4`}>
                Retired Lieutenant Colonel
              </p>
              <p className={`${robotoItalic.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}>
                Dave Grossman,
              </p>
              <p className={`${robotoItalic.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}>
                U.S. Army
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeaderText className="mb-4">
            on-demand education
          </SectionHeaderText>
          <BodyText>
            Walking Wise equips adults to talk about sexual exploitation with
            clarity and confidence. To begin the learning journey, we offer a
            comprehensive 12-topic online course specifically designed for
            adults. We also provide a classroom-style lesson on the “Myths &
            Reality” of sexual exploitation, modeled after the lessons used with
            students. This provides adults with a firsthand look at the youth
            curriculum, helping them understand how key topics are presented in
            middle and high school settings.
          </BodyText>
        </div>
      </Section>

      <Section bgColor="[#00c1d5]">
        <div className="flex justify-between flex-wrap">
          <h1 className="text-4xl sm:text-6xl text-[#303030]">
            explore our materials
          </h1>
        </div>

        <p className={`${robotoopo.className} text-base text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}>
          Become familiar with the program by checking out our educational
          materials:
        </p>

        <ul className="list-disc sm:ms-12">
          {resourceItems.map(({ title, description }, index) => (
            <li
              key={index}
              className={`${robotoopo.className} text-white text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
            >
              <span className={`text-[#303030] ${roboto.className}`}>
                {title}:
              </span>{" "}
              {description}
            </li>
          ))}
        </ul>
      </Section>

      <Section bgColor="white" className="lg:py-18 lg:pb-32">
        <div className="relative">
          {/* Demo Badge */}
          <div className="absolute top-0 left-0 sm:top-0 sm:left-6 md:top-0 md:left-8 bg-purple-500 w-[100px] sm:w-[120px] md:w-[150px] h-[100px] sm:h-[120px] md:h-[150px] flex items-center justify-center text-center text-xl sm:text-2xl md:text-3xl z-50 rounded-full shadow-lg">
            <BodyText className={`text-white ${robotoBold.className}`}>DEMO</BodyText>
          </div>

          {/* Demo Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 mt-16 md:mt-32">
            {demoContent.map(
              ({ title, subtitle, image, objectClass = "" }, i) => (
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
                  <div className="bg-[#303033] rounded-4xl px-4 py-3 sm:px-6 sm:py-2 w-[250px] md:w-full max-w-[300px] text-center cursor-pointer">
                    <p
                      className={`${robotoBold.className} text-md sm:text-white md:text-lg`}
                    >
                      {title}
                    </p>
                    <p className={`${robotoBold.className} text-md text-white`}>
                      {subtitle}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default DemoPage;
