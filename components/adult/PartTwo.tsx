"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";

const PartTwo = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const sessionData = [
    {
      part: "PART 1:",
      title: "THE GROOMERS",
      color: "#00c1d5",
      headerColor: "#303030",
      textColor: "text-[#303030]",
      boxColor: "bg-[#303030]",
      boxTextColor: "#ffffff",
      highlightColor: "#ffffff",
      description: {
        intro:
          "Groomers possess the skills to deceive victims, their families, and entire communities. The process is subtle and involves forming a relationship with a vulnerable person with the intention of future sexual assault or inducing the victim to participate in a crime. ",
        boxTitle: "PART 1: THE GROOMERS",
        lessons: [
          "#1 Myths & Reality",
          "#2 Trustworthy vs. Unsafe Adults",
          "#3 Grooming Process",
          "#4 Pornography Link",
        ],
        additional:
          "",
      },
      objectives: [
        "Myths & Reality: Examine common sex trafficking myths and understand how these misconceptions enable society to overlook the tactics of force, fraud, and coercion that predators use to exploit victims in the commercial sex trade.",
        "Trustworthy vs. Unsafe Adults: Discuss how young people can recognize inappropriate behaviors of unsafe adults and identify the key traits of trustworthy adults.",
        "Grooming Process: Describe the grooming techniques used by sexual predators and traffickers to manipulate their targets.",
        "Pornography Link: Examine how viewing pornography can harm young brains, normalize sexual exploitation, and contribute to the expansion of the commercial sex trade.",
      ],
    },
    {
      part: "PART 2:",
      title: "THE VULNERABLE",
      color: "#ffffff",
      headerColor: "#303030",
      textColor: "text-[#303030]",
      boxColor: "bg-[#00c1d5]",
      boxTextColor: "#303030",
      highlightColor: "#00c1d5",
      description: {
        intro:
          "A youth’s inherent obedience and financial dependence on adults can also make them easy targets when living with or in proximity to a sexual predator. Particularly vulnerable populations include individuals from marginalized communities, such as LGBTQ+ youth, undocumented immigrants, and those with a history of trauma or abuse. Providing education enables adults and adolescents to understand how human traffickers prey on at-risk populations and empowers them to recognize and respond to manipulation, intimidation, and coercion.",
        boxTitle: "PART 2: THE VULNERABLE",
        lessons: [
          "#5  Sextortion Scheme",
          "#6 Male Victims",
          "#7 Runaways as Targets",
          "#8 Rural Risks",
        ],
        additional:
          "",
      },
      objectives: [
        "5  Sextortion Scheme: Discuss how the use of electronic devices and online platforms can increase an individual's vulnerability to sexual predators and traffickers in the commercial sex trade.",
        "6 Male Victims: Examine how societal factors contribute to the overlooked sexual exploitation of young males and understand the barriers that may discourage them from seeking help.",
        "7 Runaways as Targets: Identify the reasons young and marginalized populations are at heightened risk of being victimized by sexual predators and traffickers in the commercial sex trade.",
        "8 Rural Risks: Appraise how living in rural or sparsely populated communities presents unique conditions that enable sexual predators or human traffickers to prey on vulnerable individuals.",
      ],
    },
    {
      part: "PART 3:",
      title: "THE PREDATORS",
      color: "#303030",
      headerColor: "#00c1d5",
      textColor: "text-[#ffffff]",
      boxColor: "bg-[#00c1d5]",
      boxTextColor: "#303030",
      highlightColor: "#ffffff",
      description: {
        intro:
          "Human traffickers and sexual predators often use love bonds, debt bonds, drug bonds, and family bonds to maintain control over their victims. These perpetrators commit emotionally and physically harmful acts against vulnerable populations, commonly persuading victims to believe they are responsible for the crimes inflicted upon them. ",
        boxTitle: "PART 3: THE PREDATORS",
        lessons: [
          "#9 Human Traffickers",
          "#10 Recruiters",
          "#11 Familial Traffickers",
          "#12 Hidden Buyers",
        ],
        additional:
          "",
      },
      objectives: [
        "9 Human Traffickers: Describe the various personas human traffickers use to deceive their victims and how they instill fear to maintain power and control.",
        "10 Recruiters: Analyze how human traffickers coerce individuals under their control to recruit friends and acquaintances into the commercial sex industry.",
        "11 Familial Traffickers: Examine the sexual exploitation of children by family members for financial gain or to obtain something of value.",
        "12 Hidden Buyers: Explore the factors that drive males to buy sex initially and examine how they rationalize purchasing sex acts from vulnerable individuals.",
      ],
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#303030] py-16 lg:py-24">
        <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row items-center gap-24">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#00C1D5] text-[#303030] border-2 border-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
              <h1 className={`text-xl mb-4 sm:text-3xl px-10 md:px-6 sm:mb-4`}>
                “Incredible program, testimonies, knowledge, and training.
              </h1>

              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                "This will surely save lives. It will
              </p>
              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                train, inspire, and initiate others
              </p>
              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                to know how to recognize
              </p>
              <p
                className={`${robotoItalic.className} text-lg mb-4 sm:text-2xl px-6 sm:mb-4`}
              >
                exploitation and take action."
              </p>
              <span
                className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
              >
                Dr. Maria Glukhovsky, PharmD
              </span>
            </div>
          </div>

          <div className="w-full max-w-3xl text-[#303030] sm:text-lg md:text-3xl text-left">
            <SectionHeaderText color="[#00C1D5]">
              Accommodating Your Schedule
            </SectionHeaderText>
            <BodyText color="white">
              Our Walking Wise subscription gives you one year to complete our
              12-hour online course.
            </BodyText>

            <SectionHeaderText color="[#00C1D5]" className="mt-16">
              Set your own pace
            </SectionHeaderText>
            <BodyText color="white">
              Dedicate just one hour per month to complete each lesson and reach
              the Walking Wise finish line!
            </BodyText>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      {/* <Section className="lex flex-col xl:flex-row justify-center items-center gap-8" bgColor="white">
        <div className="w-full text-[#303030] text-left">
          <SectionHeaderText>
            Build an Anti-Trafficking Community
          </SectionHeaderText>
          <BodyText className={`mt-5 `}>
            Together, we can make a real impact! While educating adults is
            crucial, children remain the primary targets of exploitation. So,
            youth education is just as essential.
          </BodyText>

          <SectionHeaderText className="mt-16">
            Empower Adolescents with Knowledge
          </SectionHeaderText>
          <BodyText className={`mt-5`}>
            We encourage course participants to put their learning into action
            with our interactive Youth Curriculum, designed to educate
            adolescents (ages 10 to 19) about recognizing and reporting signs of
            sexual exploitation.
          </BodyText>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <h1 className="text-5xl sm:text-6xl mb-4">“I LOVE IT!</h1>
            <p
              className={`${robotoItalic.className} text-lg mb-4 sm:text-3xl px-6 sm:mb-4`}
            >
              I especially love the built-in activities that keep the
              participants engaged."
            </p>
            <span
              className={`${robotoopo.className} text-[#3ab6c7] block sm:px-20 sm:text-2xl max-w-48 sm:max-w-120`}
            >
              Jennifer Livingston, MNSC, APRN, CPNP-PC, SANE-P
            </span>
          </div>
          <Button
            className={`mt-6`}
            onClick={() => handleRedirect("/youth-curriculum")}
          >
            Youth Curriculum
          </Button>
        </div>
      </Section> */}
      <Section
        className="lex flex-col xl:flex-row justify-center items-center gap-8"
        bgColor="white"
      >
        <div className="w-full text-[#303030] text-left">
          <SectionHeaderText>
            3 Part Series: 12 Courses
          </SectionHeaderText>
          <BodyText className="mt-4 md:pe-8">
            Our 12 courses are organized into three sections - 
            <span className="italic font-medium">
              {" "}
              The Groomers, The Vulnerable, and The Predators
            </span>
            . Participants engage with course materials, view interviews with survivor leaders and advocacy experts, and complete a brief 10-question quiz to earn one continuing education credit following each course.
          </BodyText>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <h1 className="text-5xl sm:text-6xl mb-4">“I LOVE IT!</h1>
            <p
              className={`${robotoItalic.className} text-lg mb-4 sm:text-3xl px-6 sm:mb-4`}
            >
              I especially love the built-in activities that keep the
              participants engaged."
            </p>
            <span
              className={`${robotoopo.className} text-[#3ab6c7] block sm:px-20 sm:text-2xl max-w-48 sm:max-w-120`}
            >
              Jennifer Livingston, MNSC, APRN, CPNP-PC, SANE-P
            </span>
          </div>
        </div>
      </Section>

      {/* <Section bgColor="white">
        
        <div className="mt-18 lg:mt-6">
          <h1 className="text-4xl sm:text-6xl md:text-5xl text-[#303030] text-start mb-4 md:mb-10">
            3 Part Course: 12 Lessons
          </h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title: "THE GROOMERS",
                lessons: [
                  "Myths & Reality",
                  "Trustworthy vs. Unsafe Adult",
                  "Grooming Process",
                  "Pornography Link",
                ],
              },
              {
                title: "THE VULNERABLE",
                lessons: [
                  "Sextortion Scheme",
                  "Male Victims",
                  "Runaways as Targets",
                  "Rural Risks",
                ],
              },
              {
                title: "THE PREDATORS",
                lessons: [
                  "Traffickers",
                  "Recruiters",
                  "Familial Traffickers",
                  "Hidden Buyers",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-[#00C1D5] py-12 ps-10 md:ps-16">
                <p
                  className={`${roboto.className} text-[#303030] text-2xl lg:text-3xl font-bold mb-4`}
                >
                  {section.title}
                </p>
                <ul className="space-y-3">
                  {section.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className={`${robotoopo.className} text-[#303030] text-xl lg:text-2xl`}
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section> */}

      {/* <Section bgColor="[#303030]">
        <SectionHeaderText color="white">
          3 Part Course: 12 Lessons
        </SectionHeaderText>
        <BodyText color="white" className="mt-4">
          Our 12-part course provides twelve contact hours, divided into three
          sections:
          <span className="italic font-medium">
            {" "}
            The Groomers, The Vulnerable, and The Predators
          </span>
          —each containing four lessons. Participants will review course
          content, watch interviews with survivor leaders and advocacy experts,
          and respond to 10 questions to earn CME/CE credit upon the completion
          of each lesson.
        </BodyText>
      </Section> */}

      {/* SESSIONS */}
      {sessionData.map((session, index) => (
        <div
          key={index}
          style={{ backgroundColor: session.color }}
          className="py-8 md:py-16 pb-16 md:pb-32 w-full"
        >
          <div
            className={`w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 ${session.textColor}`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-2 md:mb-16">
              <span style={{ color: session.highlightColor }}>
                {session.part}
              </span>{" "}
              <span style={{ color: session.headerColor }}>
                {session.title}
              </span>
            </h1>

            <h1
              className={`text-2xl sm:text-4xl font-bold ${session.headerColor}`}
              style={{ color: session.headerColor }}
            >
              Course Description
            </h1>

            <div className="relative flex flex-col lg:flex-row gap-8">
              <div>
                <p
                  className={`mt-2 text-xl sm:text-2xl ${robotoopo.className} tracking-wide lg:leading-10`}
                >
                  {session.description.intro}
                </p>
              </div>

              <div
                className={`w-full lg:w-[400px] xl:w-[400px] shrink-0 ${session.boxColor} p-12 self-start md:mt-[-130px]`}
                style={{ color: session.boxTextColor }}
              >
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                  {session.description.boxTitle}
                </h1>
                <ul className="space-y-2">
                  {session.description.lessons.map((lesson, i) => (
                    <li key={i} className="text-base sm:text-xl">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>






            <h1
              className={`text-2xl sm:text-4xl font-bold uppercase mt-18 mb-4`}
              style={{ color: session.headerColor }}
            >
              Learning Objectives
            </h1>
            <ul className="list-disc pl-6 space-y-4">
              {session.objectives.map((obj, idx) => (
                <li
                  key={idx}
                  className={`text-base text-xl sm:text-2xl ${robotoopo.className} tracking-wide lg:leading-10`}
                >
                  {obj}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-10">
              <Button
                onClick={() =>
                  window.open(
                    "https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/PIM+Accrediation+Info-Walking-Wise-eLearning/content/index.html",
                    "_blank"
                  )
                }
                className={`bg-[#9d1be3] ${roboto.className} mt-4 rounded-full text-sm sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap underline`}
              >
                About CE Credits
              </Button>
              <Button
                className={`bg-[#9d1be3] ${roboto.className} mt-0 md:mt-4 rounded-full text-sm sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap`}
                onClick={() => (window.location.href = "https://learn.walkingwise.com/enroll/3486696?price_id=4408602")}
              >
                Start Course
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartTwo;
