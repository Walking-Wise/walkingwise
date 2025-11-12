"use client";
import React from "react";
import Image from "next/image";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import {
  robotoItalic,
  roboto,
  robotoopo,
  robotoBold,
  robotoItalicop,
} from "../../public/fonts/Fonts";
import Button from "../ui/Button/Button";

const resourceItems = [
  {
    title: "Online Course",
    description:
      "Take the first module of the Walking Wise online course for adults.",
  },
  {
    title: "Animated Video",
    description:
      "Watch a 3-minute animation that brings key ideas to life.",
  },
  {
    title: "Lesson Plan",
    description:
      "View the Myths & Reality lesson to see how we introduce core concepts.",
  },
  {
    title: "Classroom Presentation",
    description:
      "Preview the Myths & Reality slides to see how we engage parents and students.",
  },
];

const demoContent = [
  {
    title: "Online Course",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Adult_Online_Learning.png",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/DEMO-Myths_Reality_Walking_Wise-Online_Lesson/content/index.html?v=301",
  },
  {
    title: "Animated Video",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Animated_Videos.png",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Videos+-+Website+Animation/Video-Myths_and_Reality-4-1-2025.mp4",
  },
  {
    title: "Lesson Plan",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Education_Guide.png",
    objectClass: "!object-scale-down",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PDFs_Guildes_OtherDocs/DEMO_Lesson-Myths_Reality_Walking-Wise.pdf",
  },
  {
    title: "Class Presentation",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Classroom_Presentations.png",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Classroom+Presentation+Assets/Classroom+PowerPoint+Presentations/DEMO+PowerPoint-Myths%2BReality_WalkingWise-7-1-2025.pptx?v=3",
  },
];

const DemoPage = () => {
  return (
    <>
      <PageBanner
        title="Curriculum Demo"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/DEMO_300dpi_1200x511_TEXT.jpg"
        altText="Walking Wise Education Demo"
      />

      <Section bgColor="white">
        <div className="w-full flex justify-end hidden md:block">
          <div className="bg-[#36c5d8] md:w-[510px] md:h-[510px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-[#303030] mx-auto md:absolute md:right-[7%] z-50 md:mt-[-450px]">
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8 md:mt-12`}
            >
              “The sheep pretend the
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              wolf will never come,
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              but the sheepdog is
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              prepared and waiting
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              for that day.”
            </p>
            <div>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl mt-8`}
              >
                Retired Lieutenant Colonel
              </p>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}
              >
                Dave Grossman,
              </p>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}
              >
                U.S. Army
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeaderText className="mb-4">
            on-demand education
          </SectionHeaderText>
          <BodyText className="md:mt-8">
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

      <Section bgColor="[#00c1d5]" className="md:pb-32">
        <div className="flex justify-between flex-wrap">
          <h1 className="text-4xl sm:text-6xl text-[#303030]">
            explore our materials
          </h1>
        </div>

        <p
          className={`${robotoopo.className} text-base text-base sm:text-xl md:text-2xl lg:text-4xl mt-4 sm:mt-8 sm:mb-10`}
        >
          Become familiar with the program by checking out our educational
          materials:
        </p>

        <ul className="list-disc sm:ms-12">
          {resourceItems.map(({ title, description }, index) => (
            <li
              key={index}
              className={`${robotoopo.className} text-[#303030] text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 ms-6 md:ms-2`}
            >
              <span className={`text-white text-bold ${roboto.className}`}>
                {title}:
              </span>{" "}
              {description}
            </li>
          ))}
        </ul>
      </Section>

      <div className="bg-[#303030] flex justify-center py-4 lg:py-14">
        <SectionHeaderText className={`text-white lg:text-7xl`}>
          Lesson #1: Myths & Reality
        </SectionHeaderText>
      </div>
      <Section bgColor="white" className="lg:py-18 lg:pb-32">
        <div className="relative">
          {/* Demo Badge */}

          {/* Demo Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 md:mt-10">
            {demoContent.map(({ title, image, objectClass = "", link }, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square w-full h-auto max-w-[400px]"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-contain rounded-lg ${objectClass}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                </a>

                <Button
                  onClick={() => window.open(link, "_blank")}
                  bgColor="[#303030]"
                  className="md:mt-4 w-[170px] md:w-[250px] md:w-full max-w-[250px] md:min-h-[70px]"
                >
                  {title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-[#303030] grid grid-cols-1 md:grid-cols-12 items-center justify-center py-5 md:py-4 lg:py-10">
        <div className="text-white md:max-w-[1200px]
        col-span-1 col-start-1 row-span-1
        md:col-span-8 md:col-start-3 md:row-span-1
        text-xl sm:text-2xl md:text-3xl 
        text-left md:text-left
        px-[7vw]
        py-[]
        ">
          <a
            href="https://calendly.com/karla-highman-walkingwise/30min?back=1&amp;month=2025-07"
            target="_blank"
            className="underline"
          >
            Schedule
          </a>{" "}
          a platform tour today to discover how Walking Wise can support your
          organization's education initiatives.
          </div>
          
          <div className="
            col-span-1 col-start-1 row-span-1
            md:col-span-4 md:col-start-3 md:row-span-1
            justify-center items-center h-full ">
          <button
            onClick={() => (window.location.href = "https://learn.walkingwise.com/enroll/3486696?price_id=4408602")}
            className={`bg-[#9d1be3] ${roboto.className} block mx-auto mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-4 text-white flex items-center whitespace-nowrap`}
          >
            {"Start Adult Course"}
          </button>
          </div>
          <div className="

            col-span-1 col-start-1 row-span-1
            md:col-span-4 md:col-start-7 md:row-span-1
            justify-center items-center h-full ">

          <button
            onClick={() => (window.location.href = "/pricing-youth-curriculum")}
            className={`bg-[#9d1be3] ${roboto.className} block mx-auto mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-4 text-white flex items-center whitespace-nowrap`}
          >
            {"Youth Curriculum Enrollment"}
          </button>
        </div>
      </div>

    </>
  );
};

export default DemoPage;
