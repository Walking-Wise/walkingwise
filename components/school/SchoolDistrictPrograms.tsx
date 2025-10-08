"use client";

import React from "react";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Image from "next/image";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";

const cardDataTop = [
  {
    title: "3-YEAR TRACK",
    bg: "bg-[#030303]",
    topics: [
      "Myths & Reality",
      "Trustworthy vs. Unsafe Adult",
      "Grooming Process",
      "Pornography Link",
    ],
    middle: "6th Grade",
    high: "9th Grade",
  },
  {
    title: "5-YEAR TRACK",
    bg: "bg-[#00c1d5]",
    topics: [
      "Sextortion Scheme",
      "Male Victims",
      "Runaways as Targets",
      "Rural Risks",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
];
const cardData = [
  {
    title: "THE GROOMERS",
    topics: [
      "#1 Myths & Reality: Parents & Staff",
      "#2 Trustworthy vs. Unsafe Adult: 6th grade",
      "#3 Grooming Process: 6th grade",
      "#4 Pornography Link: 6th grade",
    ],
    middle: "6th Grade",
    high: "9th Grade",
  },
  {
    title: "THE VULNERABLE",
    topics: [
      "#5 Sextortion Scheme: 7th grade",
      "#6 Male Victims: 7th grade",
      "#7 Runaways as Targets: 7th grade",
      "#8 Rural Risks: 7th grade",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
  {
    title: "THE PREDATORS",
    topics: [
      "#9 Human Traffickers: 8th grade",
      "#10 Female Recruiters: 8th grade",
      "#11 Family Secret: 8th grade",
      "#12 Hidden Buyers: 8th grade",
    ],
    middle: "8th Grade",
    high: "11th Grade",
  },
];

const SchoolDistrictPrograms = () => {
  return (
    <>
      <PageBanner
        title="SCHOOL & DISTRICT PROGRAMS"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/SCHOOLPROGRAMS_300dpi_1200x511_TEXT.jpg"
        altText="School and district programs"
      />

      {/* Testimonial + Intro Section */}
      <Section
        bgColor="white"
        className="=flex flex-col xl:flex-row items-center gap-10 md:gap-24"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-[#303030] border-2 border-white w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <p
              className={`${robotoItalic.className} px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              “Walking Wise
            </p>
            <p
              className={`${robotoItalic.className} px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              offers the best tools I’ve
            </p>
            <p
              className={`${robotoItalic.className} mb-8 px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              seen for teaching students about sexual exploitation and
              sextortion—without being scary or lewd.”
            </p>
            <span
              className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
            >
              Nigel Hunter, Deputy
            </span>
            <span
              className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
            >
              School Resource Officer
            </span>
          </div>
        </div>

        <div className="max-w-[800px] text-[#303030]">
          <SectionHeaderText className="text-4xl sm:text-6xl">
            Sustainable Education
          </SectionHeaderText>
          <BodyText className={`mt-4 sm:mt-6`}>
            Many schools invite guest speakers to address sex trafficking with
            staff, parents, and students. While a presentation can raise
            important awareness, its impact is often short-lived. Walking Wise
            offers a sustainable, school-led solution—empowering school safety
            teams to integrate prevention education into their middle and high
            school curricula over time.
          </BodyText>
          <BodyText className={`mt-4 sm:mt-6`}>
            This ongoing approach helps students build lasting awareness,
            strengthen critical thinking, and develop the skills to recognize
            and resist the manipulative tactics commonly used by sexual
            predators.
          </BodyText>
        </div>
      </Section>

      {/* District Rollout Section is now Adaptable Curriculum*/}
      <Section
        bgColor="[#00C1D5]"
        className="text-[#303030] flex flex-col lg:flex-row gap-10"
      >
        {/* Left Content */}
        <div className="flex-1">
           <SectionHeaderText>Adaptable Curriculum</SectionHeaderText>
          <BodyText className={`mt-4 `}>
            Our curriculum is designed for flexibility, enabling educators to tailor materials to align with school policies and protocols, age appropriateness, teaching styles, and available class time. 
          </BodyText>
          
        </div>

        {/* Right Box */}
        <div className=" md:max-h-[400px]  p-6 sm:p-8 relative">
          
          <ul
            className={`${robotoopo.className} text-md md:text-2xl space-y-2`}
          >
            <li>&nbsp;</li>
            <li>
              <Button onClick={() => (window.location.href = "/demo")}>
              DEMO Curriculum
            </Button>
            </li>
            <li>&nbsp;</li>
            <li>
            <Button onClick={() => (window.location.href = "/pricing")}>
              ENROLL Today!
            </Button>
            </li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </Section>

     {/* School Program Rollout is now Learning Journey*/}
      <Section bgColor="white">
        <div className="flex justify-between items-center">
          <SectionHeaderText className="text-4xl sm:text-6xl">
            Learning Journey
          </SectionHeaderText>
          <Image
            src="/assets/11+.png"
            alt="Ages 11 plus"
            width={100}
            height={100}
          />
        </div>
        <BodyText className={`mt-4 sm:mt-6`}>
          Meaningful learning takes time. By introducing topics gradually over several years, schools can create steady growth in awareness and understanding. Our three- to five-year teaching plan offers a flexible path for middle and high school students to build knowledge and confidence. Download our Teaching Track.
        </BodyText>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 my-10 gap-6 md:gap-10 items-center">
          {cardDataTop.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} mx-auto w-full max-w-[400px] flex px-0 pb-8 pt-0 items-center flex-col`}
            >
              <div className="flex justify-between px-4 sm:px-6 py-4 mb-6 md:px-2 xl:px-8 w-full bg-[#303030]">
                <div className="flex flex-col items-center">
                  <h1
                    className="text-4xl sm:text-6xl text-white"
                  >
                    {card.title}
                    </h1>
                </div>
              </div>

             
            </div>
          ))}
        </div>
      </Section>

      {/* Safety Teams Section */}
      <Section bgColor="[#303030]" className="text-white">
        <SectionHeaderText color="white">School Safety Teams</SectionHeaderText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          In 2021, the U.S. Department of Education provided guidelines for
          implementing human trafficking education and suggested empowering a
          ‘safety team’ to develop and oversee school education as well as
          policies and response protocols for reporting suspected child
          trafficking.
        </BodyText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          Safety teams are recommended to include school social workers, nurses,
          resource officers, psychologists, counselors, principals,
          wellness-focused educators, and members of their local anti-human
          trafficking coalition. With this diverse expertise, these teams are
          well-equipped to provide staff training, raise awareness among parents, and educate students.
        </BodyText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          For more information, please review the guidelines written for the
          U.S. Department of Education, Office of Safe and Supportive Schools,
          called{" "}
          <a
            href="https://safesupportivelearning.ed.gov/sites/default/files/NCSSLE-2021HumanTraffickingGuide-508.pdf"
            target="_blank"
            className="underline"
          >
            Human Trafficking in AMERICA’S SCHOOLS
          </a>
          .
        </BodyText>
      </Section>
    </>
  );
};

export default SchoolDistrictPrograms;
