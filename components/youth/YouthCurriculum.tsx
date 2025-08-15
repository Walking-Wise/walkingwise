"use client";

import Image from "next/image";
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";

const guideResources = [
  "Risk Factors & Indicators",
  "Classroom Teaching Tips",
  "11 Lesson Plan Q&A",
  "Vocabulary Lists",
  "How to Ask for Help",
  "Animated Video Scripts",
  "Pre-and Post Surveys",
  "Other Resources",
  "Master Vocabulary List",
];

const executionSteps = [
  {
    label: "LEARN",
    description:
      "Strengthen your knowledge to teach any one of the twelve topics about exploitation by completing the lesson from our Online Course for Adults.",
  },
  {
    label: "PREPARE",
    description:
      "Use our Education Guide’s corresponding lesson plan to prepare for classroom Q&A discussions.",
  },
  {
    label: "EXECUTE",
    description:
      "Download and customize the coordinating Walking Wise classroom presentation—select age-appropriate content for audiences, add personalized or local information, and integrate electronic polling for an interactive audience experience.",
  },
];

const YouthCurriculum = () => {
  return (
    <>
      <PageBanner
        title="Curriculum for Youth"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/YOUTHCURRICULUM_300dpi_1200x511_TEXT.jpg"
        altText="Youth Curriculum"
      />

      <Section bgColor="white">
        <SectionHeaderText> Youth Education </SectionHeaderText>
        <BodyText className="mt-3 sm:mt-6">
          The Walking Wise Learning Platform offers engaging, easy-to-teach
          lessons designed for lasting impact for middle and high school youth
          ages 11+. Our curriculum uses multisensory teaching to enhance
          learning, combining technology and storytelling through interactive
          classroom presentations and animated explainer videos.
        </BodyText>
      </Section>

      <Section bgColor="[#00C1D5]" className="lg:flex-row">
        <div className="w-full flex flex-col items-center">
          <div className="relative h-[400px] sm:h-[400px] md:h-[425px] w-[310px] sm:w-[310px] md:w-[325px] mb-6">
            <Image
              src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Classroom_Presentations.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <Button onClick={() => (window.location.href = "/demo")}>
            DEMO Curriculum
          </Button>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="flex justify-between items-center md:pe-12">
            <SectionHeaderText className="text-white">
              Classroom Presentations
            </SectionHeaderText>
            <Image
              src="/assets/11+.png"
              alt="Ages 11 plus"
              width={75}
              height={75}
            />
          </div>
          <BodyText className="mt-4 sm:mt-8">
            Our classroom presentations are designed for student education,
            school staff meetings, and parent events.
          </BodyText>
          <BodyText className="mt-4 sm:mt-8">
            Educators can captivate these diverse audiences using group
            discussions, live polls, word clouds, text responses, interactive
            Q&A, anonymous surveys, and animated videos.
          </BodyText>
          <BodyText className="mt-4 sm:mt-8">
            The presentation topics are typically 45 minutes. Educators are
            encouraged to modify the presentations to be age-appropriate, align
            with school policy, and fit within time schedules.
          </BodyText>
        </div>
      </Section>

      <Section bgColor="white">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">
          <div>
            <SectionHeaderText className="mb-6">
              Education Guide
            </SectionHeaderText>
            <BodyText className={`md:max-w-[670px]`}>
              Statistics indicate it is likely that a significant percentage of
              students will experience sexual abuse or exploitation during
              childhood. Walking Wise Education Guide provides classroom
              teaching tips for supporting victimized students in seeking
              immediate help from a school social worker, nurse, or trusted
              school staff member.
            </BodyText>
          </div>

          <div className="flex-1 bg-[#00c1d5] min-w-[400px] max-h-[450px] text-black p-6 sm:p-8 md:pt-10 md:ps-10 md:pb-10 md:pe-0 space-y-4 flex flex-col">
            <h1 className="font-bold text-lg sm:text-xl md:text-4xl">
              RESOURCES
            </h1>
            <ul className="list-disc text-[#303030]">
              {guideResources.map((item, index) => (
                <li
                  key={index}
                  className="list-disc list-inside space-y-1 text-md md:text-2xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-center bg-white">
            <div className="relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] h-[450px]">
              <Image
                src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Education_Guide.png"
                alt="Guide Resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        bgColor="[#303030]"
        className="justify-center items-center xl:flex-row gap-10 lg:py-36"
      >
        <div>
          <SectionHeaderText className="text-white">
            streamlined execution
          </SectionHeaderText>
          <ul className="list-disc ms-5 lg:ms-15 mt-4 sm:mt-8">
            {executionSteps.map((step, index) => (
              <li
                key={index}
                className={`${robotoopo.className} text-white text-lg tracking-wide leading-7 lg:leading-10  md:text-2xl lg:text-3xl mt-8`}
              >
                <strong className="text-[#00c1d5]">{step.label}</strong>{" "}
                {step.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="relative h-[400px] sm:h-[400px] md:h-[425px] w-[310px] sm:w-[310px] md:w-[325px]">
            <Image
              src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Adult_Online_Learning.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <a
            href="/adult-education"
            className={`${robotoopo.className} text-xl text-center text-[#00c1d5] mt-4`}
          >
            Earn Continuing Education Credits
          </a>
          <Button
            className="mt-8"
            onClick={() => (window.location.href = "/pricing#courseCard")}
          >
            ENROLL Today!
          </Button>
        </div>
      </Section>
    </>
  );
};

export default YouthCurriculum;
