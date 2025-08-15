"use client";
import Image from "next/image";
import React from "react";
import { robotoopo, robotoItalic } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";

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
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/IMPLEMENTATION_300dpi_1200x511_TEXT.jpg"
        altText="Implementation"
      />

      <Section
        bgColor="white"
        className="xl:flex-row items-center md:gap-24 pb-12 md:pb-16 lg:pb-16 py-0 md:py-0 lg:py-0"
      >
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
              curricula often get
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
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PDFs_Guildes_OtherDocs/FIVE_S~1.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-[300px] md:w-[450px]"
            >
              <Image
                src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-5_Step_Process-Implementation_Guide.png"
                alt="5 Step Path to implementation"
                fill
                className={`object-cover`}
              />
            </a>
            <Button
              onClick={() =>
                window.open(
                  "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PDFs_Guildes_OtherDocs/FIVE_S~1.PDF",
                  "_blank"
                )
              }
              className={`mt-2`}
            >
              5 Step Process
            </Button>
          </div>
          <div className="mt-8 md: mt-0">
            <SectionHeaderText className="text-white mb-2 lg:mb-8">
              <span className="text-[#00c1d5]">The 5-step path</span> To
              Implementation
            </SectionHeaderText>
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
        </div>
      </Section>
      <Section bgColor="white">
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-14 items-stretch">
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

          <div className="flex-1 bg-[#00c1d5] min-w-[400px] max-h-[450px] text-black p-6 sm:p-8 md:pt-10 md:ps-10 md:pb-10 md:pe-0 space-y-4 flex flex-col">
            <h1 className="font-bold text-lg sm:text-xl md:text-4xl">
              RESOURCES
            </h1>
            <ul className="list-disc list-inside space-y-1 text-xl">
              <li>Student Benefits</li>
              <li>Protective Factors</li>
              <li>Obstacles to Disclosure</li>
              <li>Five-Step Implementation</li>
              <li>Response Protocol</li>
              <li>Indicator Tool</li>
              <li>Risk Factor Tool</li>
              <li>Needs Assessment</li>
              <li>Self-Reported Assessment</li>
            </ul>
          </div>

          <div className="flex-1 flex justify-center bg-white">
            <div className="relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] h-[450px]">
              <Image
                src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Implementation_Guide.png"
                alt="Guide Resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor="[#00c1d5]">
        {/* flex-col on mobile / flex-row with wrapping on lg+ */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 lg:gap-10 items-start">
          {/* ───────── Left column ───────── */}
          <div className="flex-[2]">
            <SectionHeaderText className="text-white mb-6">
              School Policies &amp; Protocols
            </SectionHeaderText>

            {/* 1st and 2nd paragraphs stay in the left column */}
            <BodyText>
              In 2021, the{" "}
              <a
                href="https://safesupportivelearning.ed.gov/sites/default/files/NCSSLE-2021HumanTraffickingGuide-508.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                U.S. Department of Education
              </a>{" "}
              advised schools to “develop district or schoolwide policies and
              protocols for identifying and supporting trafficked victims.”
            </BodyText>

            <BodyText className="mt-4 md:mt-6">
              Staff within a school system offer different viewpoints into a
              student’s life that can help reveal exploitation. For instance,
              bus drivers may have a neighborhood or front‑door view of
              suspicious activity, while school secretaries may notice patterns
              of unusual early dismissals. Resource officers also may spot an
              inappropriately older boyfriend/girlfriend/partner providing daily
              transportation.
            </BodyText>
          </div>

          {/* ───────── Image ───────── */}
          <div className="order-3 lg:order-2 flex-1 flex justify-center lg:justify-end">
            <div className="relative w-[350px] sm:w-[220px] md:w-full h-[450px]">
              <Image
                src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Protocol_Tool-Implement_Guide.png"
                alt="Protocol Tools"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ───────── 3rd paragraph – full‑width on desktop, above img on mobile ───────── */}
          <BodyText className="order-2 lg:order-3 w-full mt-4 md:mt-6">
            School nurses may take note of increased visits and vague health
            complaints. Attendance officers may notice chronic absenteeism, and
            assistant principals may recognize new or persistent disciplinary
            matters. Coaches may notice deteriorating performance or lack of
            participation. Teachers may observe distress signals and declining
            grades, while parents may see their child’s sudden withdrawal from
            family life. Any one of these indicators may be inconspicuous, but
            together, they raise a red flag that sexual abuse or exploitation
            may be occurring.
          </BodyText>
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
              exploitation education based on various risk factors within the
              student population. It helps uncover hidden risks that may
              otherwise go unnoticed, providing a clearer understanding of the
              challenges within the school community.
            </BodyText>
            <BodyText className={`mt-4 sm:mt-6`}>
              Administering an anonymous Self-Reported Youth Survey at the start
              of a program helps educators tailor content to students'
              knowledge, attitudes, and behaviors. When used as a post-survey,
              this tool can provide valuable insight into the program’s
              effectiveness.
            </BodyText>
          </div>

          {/* Right Section: Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full flex flex-col items-center">
              <div className="relative w-[350px] sm:w-[220px] md:w-full h-[450px]">
                <Image
                  src="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Anonymous_Assessment-Implement_Guide.png"
                  alt="Anonymous Assessments"
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                onClick={() => (window.location.href = "/pricing")}
                className="md:mt-6"
              >
                ENROLL Today!
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ImplementationSection;
