import Image from "next/image";
import React from "react";
import {
  robotoopo,
  robotoItalic,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";

const steps = [
  "Gain program approval among leadership.",
  "Establish a safety team to own and operate the program.",
  "Educate staff members on identifying risk factors and indicators of exploitation.",
  "Engage parents to foster awareness & program support.",
  "Deliver student education to increase knowledge and develop life skills.",
];

const ImplementationSection = () => {
  return (
    <>
      <PageBanner
        title="PROGRAM INTRODUCTION"
        image="/assets/IMPLEMENTATION.jpg"
        altText="Implementation"
      />

      <Section bgColor="white" className="xl:flex-row items-center md:gap-24 pb-12 md:pb-16 lg:pb-16 py-0 md:py-0 lg:py-0">
        <div className="md:mt-12">
          <SectionHeaderText>getting started</SectionHeaderText>
          <BodyText className={`mb-6 mt-4 sm:mt-6 lg:leading-12`}>
            The Walking Wise Implementation Guide breaks down barriers to
            establishing sexual exploitation education programs in school
            systems. It outlines the five key steps to establishing and
            maintaining a successful district-wide or school-wide safety
            education initiative.
          </BodyText>
        </div>
        <div className="bg-[#00c1d5] w-[350px] sm:min-w-[400px] lg:min-w-[500px] h-[350px] sm:h-[400px] lg:h-[500px] me-0 sm:me-10 p-4 border-4 xl:mt-[-30] border-white rounded-full flex flex-col justify-center items-center text-center text-white z-50">
          <div>
            <p
              className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-6`}
            >
              “While other
            </p>
            <p
              className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-6`}
            >
              curricula often gets
            </p>
            <p
              className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-6`}
            >
              bogged down in theory,
            </p>
            <p
              className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-6`}
            >
              Walking Wise provides clear
            </p>
            <p
              className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-6`}
            >
              and targeted education.”
            </p>
          </div>
          <div className="mt-6">
            <p
              className={`${robotoopo.className} text-white block text-sm lg:text-2xl px-4 sm:px-20`}
            >
              Seth W. Boughton
            </p>
            <p
              className={`${robotoopo.className} text-white block text-sm lg:text-2xl px-4 sm:px-20`}
            >
              Anti-Human Trafficking
            </p>
            <p
              className={`${robotoopo.className} text-white block text-sm lg:text-2xl px-4 sm:px-20`}
            >
              Applied Data Analyst
            </p>
          </div>
        </div>
      </Section>

      {/* 5-Step Framework */}
      <Section bgColor="[#303030]">
        <div className="w-full md:px-32">
          <div className="flex flex-row justify-between mb-12">
            <SectionHeaderText className="text-white">
              <span className="text-[#00c1d5]">The 5-step path</span> To
              Implementation
            </SectionHeaderText>

            <button
              className={`bg-[#9d1be3] ${robotoopo.className} md:me-24 rounded-full text-sm md:text-lg uppercase h-[50px] px-4 md:px-8 text-white text-center flex items-center justify-center whitespace-nowrap`}
            >
              5 Step Process
            </button>
          </div>
          <ol className="list-decimal pl-6">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className={`${robotoopo.className} text-white text-lg sm:text-xl md:text-3xl mt-2 md:mt-4`}
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section bgColor="white">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">
          <div>
            <SectionHeaderText className="mb-6">
              Implementation Guide & Toolkit
            </SectionHeaderText>
            <BodyText className={`md:max-w-[670px]`}>
              Walking Wise provides safety teams with essential tools to support
              the development of school policies and protocols, assess students'
              risk of being targeted, and recognize warning signs of
              exploitation by sexual predators, online groomers, and child
              traffickers.
            </BodyText>
          </div>

          <div className="flex-1 bg-[#00c1d5] text-black p-6 sm:p-8 md:pt-10 md:ps-10 md:pb-10 md:pe-0 space-y-4 flex flex-col">
            <h1 className="font-bold text-lg sm:text-xl md:text-3xl">
              RESOURCES
            </h1>
            <ul className="list-disc list-inside space-y-1 text-lg">
              <li>Student Benefits</li>
              <li>Protective Factors</li>
              <li>Obstacles to Youth Disclosure</li>
              <li>Five-Step Implementation Model</li>
              <li>Response Protocol</li>
              <li>Indicator Tool</li>
              <li>Risk Factor Tool</li>
              <li>Needs Assessment</li>
              <li>Self-Reported Assessment</li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center bg-white">
            <div className="relative w-[350px] sm:w-[220px] md:w-full h-[450px]">
              <Image
                src="/assets/imp-1.png"
                alt="Implementation Toolkit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="[#00c1d5]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left Section: Text */}
          <div className="flex-[2]">
            <SectionHeaderText className="text-white mb-6">
              School Policies & Protocols
            </SectionHeaderText>
            <BodyText>
              In 2021, the{" "}
              <a
                href="https://www.justice.gov/archives/opa/pr/justice-department-observes-national-missing-children-s-day-4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                U.S. Department of Education
              </a>{" "}
              advised schools to “develop district or schoolwide policies and
              protocols for identifying and supporting trafficked victims.”
            </BodyText>
            <BodyText className={`mt-4 md:mt-6`}>
              In alignment with this guidance, Walking Wise collaborated with
              law enforcement and survivor leaders to provide safety teams with
              essential tools to support the development of school policies and
              protocols, assess students' risk of being targeted, and recognize
              warning signs of exploitation by sexual predators, online
              groomers, and child traffickers.
            </BodyText>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[350px] sm:w-[220px] md:w-full h-[450px]">
              <Image
                src="/assets/imp-3.png"
                alt="Protocol Tools"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="white" className="md:py-32">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left Section: Text */}
          <div className="flex-[2]">
            <SectionHeaderText className="mb-6">
              Anonymous Assessments
            </SectionHeaderText>
            <BodyText className={`mt-4 sm:mt-6`}>
              An anonymous Needs Assessment Youth Survey is an optional
              schoolwide screening tool designed to identify the need for
              education on sexual exploitation based on various risk factors
              within the student population. It helps uncover hidden risks that
              may otherwise go unnoticed, providing a clearer understanding of
              the challenges within the school community.
            </BodyText>
            <BodyText className={`mt-4 sm:mt-6`}>
              Administering an anonymous Self-Reported Youth Survey at the start
              of a program helps educators tailor content to students'
              knowledge, attitudes, and behaviors, assisting them in meeting
              students’ educational needs. When used as a post-survey, this tool
              can provide valuable insight into the program’s effectiveness.
            </BodyText>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full flex flex-col items-center">
              <div className="relative w-[350px] sm:w-[220px] md:w-full h-[450px]">
                <Image
                  src="/assets/imp-4.png"
                  alt="Anonymous Assessments"
                  fill
                  className="object-contain"
                />
              </div>
              <button className="md:mt-6 bg-[#9d1be3] text-white px-6 py-2 rounded-full text-lg md:text-lg font-semibold">
                ENROLL Today!
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ImplementationSection;
