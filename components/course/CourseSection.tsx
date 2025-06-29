"use client";

import React from "react";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const sessionData = [
  {
    part: "PART 1:",
    title: "THE GROOMERS",
    color: "#ffffff",
    headerColor: "#303030",
    textColor: "text-[#303030]",
    boxColor: "bg-[#00c1d5]",
    boxTextColor: "#303030",
    highlightColor: "#00c1d5",
    description: {
      intro:
        "Groomers possess the skills to deceive victims, their families, and entire communities. The process is subtle and involves forming a relationship with a vulnerable person with the intention of future sexual assault or inducing the victim to participate in a crime. ",
      boxTitle: "PART 1: LESSONS",
      lessons: [
        "#1 Myths & Reality",
        "#2 Trustworthy vs. Unsafe Adults",
        "#3 Grooming Process",
        "#4 Pornography Link",
      ],
      additional:
        "Grooming is an illegal act, but prosecuting such cases is challenging due to the difficulty of proving criminal intent without a sexual assault occurring. Education for adults, adolescents, and youth will empower communities to recognize forms of manipulation and report grooming before offenders have the chance to commit sexual crimes.",
    },
    objectives: [
      "Examine common sex trafficking myths and understand how these misconceptions enable society to overlook the tactics of force, fraud, and coercion that predators use to exploit victims in the commercial sex trade.",
      "Discuss how young people can recognize inappropriate behaviors of unsafe adults to identify the key traits of trustworthy adults.",
      "Describe the grooming techniques used by sexual predators and traffickers to manipulate their targets.",
      "Examine how viewing pornography can harm young brains, normalize sexual exploitation, and contribute to the expansion of the commercial sex trade.",
    ],
  },
  {
    part: "PART 2:",
    title: "THE VULNERABLE",
    color: "#303030",
    headerColor: "#00c1d5",
    textColor: "text-[#ffffff]",
    boxColor: "bg-[#00c1d5]",
    boxTextColor: "#303030",
    highlightColor: "#ffffff",
    description: {
      intro:
        "Children and adolescents are naturally vulnerable to sex offenders and human traffickers due to their cognitive immaturity and limited life experience, which affects their decision-making abilities. ",
      boxTitle: "PART 2: LESSONS",
      lessons: [
        "#5  Sextortion Scheme",
        "#6 Male Victims",
        "#7 Runaways as Targets",
        "#8 Rural Risks",
      ],
      additional:
        "A youth’s inherent obedience and financial dependence on adults can also make them easy targets when living with or in proximity to a sexual predator. Particularly vulnerable populations include individuals from marginalized communities, such as LGBTQ+ youth, undocumented immigrants, and those with a history of trauma or abuse. Providing education enables adults and adolescents to understand how human traffickers prey on at-risk populations and empowers them to recognize and respond to manipulation, intimidation, and coercion.",
    },
    objectives: [
      "Discuss how the use of electronic devices and online platforms can increase an individual's vulnerability to sexual predators and traffickers in the commercial sex trade.",
      "Examine how societal factors contribute to the overlooked sexual exploitation of young males and understand the barriers that may discourage them from seeking help.",
      "Identify the reasons young and marginalized populations are at heightened risk of being victimized by sexual predators and traffickers in the commercial sex trade.",
      "Appraise how living in rural or sparsely populated communities presents unique conditions that enable sexual predators or human traffickers to prey on vulnerable individuals.",
    ],
  },
  {
    part: "PART 3:",
    title: "THE PREDATORS",
    color: "#00c1d5",
    headerColor: "#303030",
    textColor: "text-[#303030]",
    boxColor: "bg-[#303030]",
    boxTextColor: "#ffffff",
    highlightColor: "#ffffff",
    description: {
      intro:
        "Human traffickers and sexual predators often use love bonds, debt bonds, drug bonds, and family bonds to maintain control over their victims. These perpetrators commit emotionally and physically harmful acts against vulnerable populations, commonly persuading victims to believe they are responsible for the crimes inflicted upon them. ",
      boxTitle: "PART 3: LESSONS",
      lessons: [
        "#9 Human Traffickers",
        "#10 Recruiters",
        "#11 Familial Traffickers",
        "#12 Hidden Buyers",
      ],
      additional:
        "Educating adults and adolescents about the risk factors and indicators of human trafficking will help them recognize the vulnerabilities that sexual predators exploit and the signs that appear once someone has been entrapped in the commercial sex industry.",
    },
    objectives: [
      "Describe the various personas human traffickers use to deceive their victims and how they instill fear to maintain power and control.",
      "Analyze how human traffickers coerce individuals under their control to recruit friends and acquaintances into the commercial sex industry.",
      "Examine the sexual exploitation of children by family members for financial gain or to obtain something of value.",
      "Explore the factors that drive males to buy sex initially and examine how they rationalize purchasing sex acts from vulnerable individuals.",
    ],
  },
];

const CourseSection = () => {
  return (
    <>
      <PageBanner
        title="ADULT COURSE DESCRIPTION"
        image="/assets/COURSE.jpg"
        altText="Online Course for Adults"
      />

      {/* INTRO SECTION */}
      <div className="bg-white pt-8 md:pt-16 md:pb-4">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26">
          <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#303030]">
            WALKING WISE: SEXUAL EXPLOITATION EDUCATION
          </h1>
          <p
            className={`text-xl sm:text-3xl italic mt-4 text-[#303030] ${robotoopo.className}`}
          >
            Our 12-part course provides twelve contact hours, divided into three
            sections:
            <span className="italic font-medium">
              {" "}
              The Groomers, The Vulnerable, and The Predators
            </span>
            —each containing four lessons. Participants will review course
            content, watch interviews with survivor leaders and advocacy
            experts, and respond to 10 questions to earn CE/CME credit upon the
            completion of each lesson.
          </p>
        </div>
      </div>

      {/* SESSIONS */}
      {sessionData.map((session, index) => (
        <div
          key={index}
          style={{ backgroundColor: session.color }}
          className="py-8 md:py-16 pb-16 md:pb-32 w-full"
        >
          <div
            className={`w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 ${session.textColor}`}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-2 md:mb-8">
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
                  className={`mt-2 text-xl sm:text-2xl ${robotoopo.className}`}
                >
                  {session.description.intro}
                </p>
              </div>

              <div
                className={`w-full lg:w-[500px] xl:w-[500px] shrink-0 ${session.boxColor} p-6 self-start md:mt-[-100px]`}
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

            <div className="mt-6">
              <p className={`text-xl sm:text-2xl ${robotoopo.className}`}>
                {session.description.additional}
              </p>
            </div>

            <h1
              className={`text-2xl sm:text-4xl font-bold uppercase mt-10 mb-4`}
              style={{ color: session.headerColor }}
            >
              Learning Objectives
            </h1>
            <ul className="list-disc pl-6 space-y-4">
              {session.objectives.map((obj, idx) => (
                <li
                  key={idx}
                  className={`text-base text-xl sm:text-2xl ${robotoopo.className}`}
                >
                  {obj}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 md:mt-10">
              <button
                onClick={() =>
                  (window.location.href =
                    "https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/PIM+Accreditation+Info-Walking-Wise-eLearning/content/index.html")
                }
                className={`bg-[#9d1be3] ${roboto.className} mt-4 rounded-full text-sm sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap underline`}
              >
                CME Accreditation
              </button>
              <button
                className={`bg-[#9d1be3] ${roboto.className} mt-0 md:mt-4 rounded-full text-sm sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap`}
                onClick={() =>
                  (window.location.href =
                    "https://www.walkingwise.com/contact-us-v2/")
                }
              >
                Start Course
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseSection;
