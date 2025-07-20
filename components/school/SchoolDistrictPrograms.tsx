"use client";

import React from "react";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Image from "next/image";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";

const cardData = [
  {
    title: "THE GROOMERS",
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
    title: "THE VULNERABLE",
    topics: [
      "Sextortion Scheme",
      "Male Victims",
      "Runaways as Targets",
      "Rural Risks",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
  {
    title: "THE PREDATORS",
    topics: [
      "Human Traffickers",
      "Female Recruiters",
      "Family Secret",
      "Hidden Buyers",
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
        image="/assets/SCHOOL.jpg"
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

      {/* District Rollout Section */}
      <Section
        bgColor="[#00C1D5]"
        className="text-[#303030] flex flex-col lg:flex-row gap-10"
      >
        {/* Left Content */}
        <div className="flex-1">
          <SectionHeaderText>District Rollout</SectionHeaderText>
          <BodyText className={`mt-4 `}>
            Introducing essential topics gradually throughout students’ academic
            journey fosters consistent and impactful learning.
          </BodyText>
          <BodyText className={`mt-4`}>
            The Walking Wise curriculum is designed for flexibility, enabling
            educators to tailor materials to align with school policies and
            protocols, age appropriateness, teaching styles, and available class
            time.
          </BodyText>
          <div className="flex gap-4 mt-12">
            <Button onClick={() => (window.location.href = "/demo")}>
              DEMO Curriculum
            </Button>
            <Button onClick={() => (window.location.href = "/pricing")}>
              ENROLL Today!
            </Button>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-[#303030] md:max-h-[400px] text-white p-6 sm:p-8 relative">
          <h3 className="text-xl sm:text-3xl font-semibold mb-4">
            DISTRICT WIDE PROGRAM
          </h3>
          <ul
            className={`${robotoopo.className} text-md md:text-2xl space-y-2`}
          >
            <li>
              <strong>Parent Awareness:</strong> #1 Myths & Reality
            </li>
            <li>
              <strong>5th Grade:</strong> #2 Trustworthy vs. Unsafe Adult
            </li>
            <li>
              <strong>6th Grade:</strong> #3 Grooming Process & #4 Pornography
              Link
            </li>
            <li>
              <strong>7th Grade:</strong> #5 Sextortion Scheme & #6 Male Victims
            </li>
            <li>
              <strong>8th Grade:</strong> #7 Runaways as Targets & #8 Rural
              Risks
            </li>
            <li>
              <strong>9th Grade:</strong> #9 Human Traffickers & #10 Female
              Recruiters
            </li>
            <li>
              <strong>10th Grade:</strong> #11 Family Secret & #12 Hidden Buyers
            </li>
          </ul>
        </div>
      </Section>

      {/* School Program Rollout */}
      <Section bgColor="white">
        <div className="flex justify-between items-center">
          <SectionHeaderText className="text-4xl sm:text-6xl">
            School Program Rollout
          </SectionHeaderText>
          <Image
            src="/assets/11+.png"
            alt="Ages 11 plus"
            width={100}
            height={100}
          />
        </div>
        <BodyText className={`mt-4 sm:mt-6`}>
          For a smooth and sustainable rollout, we recommend teaching one
          segment per grade level over three consecutive years. This flexible
          approach works well for both middle schools (6th–8th grades) and high
          schools (9th–11th grades), allowing educators to build knowledge
          gradually without overwhelming students or staff.
        </BodyText>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 my-10 gap-6 md:gap-10 items-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#00c1d5] mx-auto w-full max-w-[400px] flex px-0 pb-8 pt-0 items-center flex-col"
            >
              <div className="flex justify-between px-4 sm:px-6 py-4 mb-6 md:px-2 xl:px-8 w-full bg-[#303030]">
                <div className="flex flex-col items-center">
                  <p
                    className={`${roboto.className} text-sm sm:text-base md:text-md xl:text-xl text-white`}
                  >
                    Middle Schools
                  </p>
                  <p
                    className={`${roboto.className} text-white text-lg xl:text-2xl`}
                  >
                    {card.middle}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p
                    className={`${roboto.className} text-sm sm:text-base md:text-md xl:text-xl text-white`}
                  >
                    High Schools
                  </p>
                  <p
                    className={`${roboto.className} text-white text-lg xl:text-2xl`}
                  >
                    {card.high}
                  </p>
                </div>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1
                  className={`${roboto.className} text-white text-2xl sm:text-3xl md:text-2xl xl:text-3xl`}
                >
                  {card.title}
                </h1>
                {card.topics.map((topic, i) => (
                  <p
                    key={i}
                    className={`${robotoopo.className} text-xl sm:text-2xl md:text-xl xl:text-xl`}
                  >
                    {topic}
                  </p>
                ))}
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
          well-equipped to provide staff training and educate parents and
          students.
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
