"use client";
import React from "react";
import { roboto, robotoopo } from "../../public/fonts/Fonts";

const sessionData = [
  {
    part: "PART 2:",
    title: "THE VULNERABLE",
    session: "2nd SESSION",
    color: "#303030",
    textColor: "text-white",
    boxColor: "bg-purple-600",
    highlightColor: "#00c1d5",
    objectives: [
      "Discuss how the use of electronic devices and online platforms can increase an individual's vulnerability to sexual predators and traffickers in the commercial sex trade.",
      "Examine how societal factors contribute to the overlooked sexual exploitation of young males and understand the barriers that may discourage them from seeking help.",
      "Identify the reasons young and marginalized populations are at heightened risk of being victimized by sexual predators and traffickers in the commercial sex trade.",
      "Appraise how living in rural or sparsely populated communities presents unique conditions that enable sexual predators or human traffickers to prey on vulnerable individuals.",
    ],
    lessons: [
      "#5 Sextortion Scheme",
      "#6 Male Victims",
      "#7 Runaways as Targets",
      "#8 Rural Risks",
    ],
    boxTitle: "PART 2: LESSONS",
  },
  {
    part: "PART 3:",
    title: "THE PREDATORS",
    session: "3rd SESSION",
    color: "#00c1d5",
    textColor: "text-[#303030]",
    boxColor: "bg-[#303030]",
    highlightColor: "#303030",
    objectives: [
      "Describe the various personas human traffickers use to deceive their victims and how they instill fear to maintain power and control.",
      "Analyze how human traffickers coerce individuals under their control to recruit friends and acquaintances into the commercial sex industry.",
      "Examine the sexual exploitation of children by family members for financial gain or to obtain something of value.",
      "Explore the factors that drive males to buy sex initially and examine how they rationalize purchasing sex acts from vulnerable individuals.",
    ],
    lessons: [
      "#9 Human Traffickers",
      "#10 Recruiters",
      "#11 Familial Traffickers",
      "#12 Hidden Buyers",
    ],
    boxTitle: "PART 3: LESSONS",
  },
];

const PartTwo = () => {

  return (
    <>
      {sessionData.map((session, index) => {
        return (
          <div
            key={index}
            className={`py-16 px-4 sm:px-6 md:px-12 lg:px-20 ${session.textColor}`}
            style={{ backgroundColor: session.color }}
          >
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase">
                <span style={{ color: session.highlightColor }}>
                  {session.part}
                </span>{" "}
                {session.title}
              </h1>

              <p
                className={`mt-4 text-base sm:text-xl leading-7 ${robotoopo.className}`}
              >
                The four lessons involve four contact hours. To complete this
                session, participants will review the content, watch interviews
                featuring survivor leaders and other experts, and respond to
                questions.
              </p>

              <h2 className="text-2xl sm:text-4xl font-bold mt-10">
                <span style={{ color: session.highlightColor }}>
                  {session.session}
                </span>{" "}
                DESCRIPTION
              </h2>

              <p
                className={`mt-4 text-base sm:text-xl leading-7 ${robotoopo.className}`}
              >
                {index === 0
                  ? `Children and adolescents are naturally vulnerable to sex offenders and human traffickers due to their cognitive immaturity and limited life experience, which affects their decision making abilities. A youth’s inherent obedience and financial dependence on adults can also make them easy targets when living with, or in proximity to, a sexual predator. Particularly vulnerable populations include individuals from marginalized communities, such as LGBTQ+ youth, undocumented immigrants, and those with a history of trauma or abuse. Providing education enables adults and adolescents to understand how human traffickers prey on at risk populations and empowers them to recognize and respond to manipulation, intimidation, and coercion.`
                  : `Human traffickers and sexual predators often use love bonds, debt bonds, drug bonds, and family bonds to maintain control over their victims. These perpetrators commit emotionally and physically harmful acts against vulnerable populations, commonly persuading victims to believe they are responsible for the crimes inflicted upon them. Educating adults and adolescents about the risk factors and indicators of human trafficking will help them recognize the vulnerabilities that sexual predators exploit and the signs that appear once someone has been entrapped in the commercial sex industry.`}
              </p>

              <div
                className={`${session.boxColor} text-white w-full max-w-5xl py-5 min-h-[200px] px-4 sm:px-6 md:px-10 lg:px-16 mx-auto my-12`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {session.boxTitle}
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  {session.lessons.map((lesson, i) => (
                    <li
                      key={i}
                      className={`text-base sm:text-lg ${roboto.className}`}
                    >
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-xl font-bold uppercase mt-10 mb-4">
                <span style={{ color: session.highlightColor }}>
                  {session.session}
                </span>{" "}
                OBJECTIVES
              </h3>

              <ul className="list-disc pl-6 space-y-4">
                {session.objectives.map((text, idx) => (
                  <li
                    key={idx}
                    className={`text-base sm:text-lg ${robotoopo.className}`}
                  >
                    {text}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button className="bg-[#6B4EFF] text-white text-sm sm:text-base px-5 py-2 rounded-full">
                  CME Accreditation
                </button>
                <button
                  className="bg-[#6B4EFF] text-white text-sm sm:text-base px-5 py-2 rounded-full"
                  onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
                >
                  Start Course
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PartTwo;
