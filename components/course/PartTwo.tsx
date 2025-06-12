"use client";
import React from "react";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";
import { useRouter } from "next/navigation";

const sessionData = [
  {
    part: "part 2",
    title: "the vulnerable",
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
    boxTitle: "THE VULNERABLE",
  },
  {
    part: "part 3",
    title: "the predators",
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
    boxTitle: "THE PREDATORS",
  },
];

const PartTwo = () => {
  const router = useRouter();

  return (
    <>
      {sessionData.map((session, index) => {
        const [firstCol, secondCol] = [
          session.lessons.slice(0, 2),
          session.lessons.slice(2),
        ];

        return (
          <div
            key={index}
            className={`py-16 px-4 sm:px-6 md:px-12 lg:px-20 ${session.textColor}`}
            style={{ backgroundColor: session.color }}
          >
            <div className=" mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-4xl sm:text-6xl text-white my-4">
                  <span
                    className={`me-3`}
                    style={{ color: session.highlightColor }}
                  >
                    {session.part}
                  </span>
                  {session.title}
                </h1>
              </div>

              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-6`}
              >
                The four lessons involve four contact hours. To complete this
                session, participants will review the content, watch interviews
                featuring survivor leaders and other experts, and respond to
                questions.
              </p>

              <h1 className="text-3xl sm:text-5xl text-white lg:text-6xl my-10">
                <span
                  className={`me-3`}
                  style={{ color: session.highlightColor }}
                >
                  {session.session}
                </span>
                Description
              </h1>

              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-xl md:text-2xl lg:text-3xl mt-6`}
              >
                {index === 0
                  ? `Children and adolescents are naturally vulnerable to sex offenders and human traffickers due to their cognitive immaturity and limited life experience, which affects their decision making abilities. A youth’s inherent obedience and financial dependence on adults can also make them easy targets when living with, or in proximity to, a sexual predator. Particularly vulnerable populations include individuals from marginalized communities, such as LGBTQ+ youth, undocumented immigrants, and those with a history of trauma or abuse. Providing education enables adults and adolescents to understand how human traffickers prey on at risk populations and empowers them to recognize and respond to manipulation, intimidation, and coercion.`
                  : `Human traffickers and sexual predators often use love bonds, debt bonds, drug bonds, and family bonds to maintain control over their victims. These perpetrators commit emotionally and physically harmful acts against vulnerable populations, commonly persuading victims to believe they are responsible for the crimes inflicted upon them. Educating adults and adolescents about the risk factors and indicators of human trafficking will help them recognize the vulnerabilities that sexual predators exploit and the signs that appear once someone has been entrapped in the commercial sex industry.`}
              </p>

              <div
                className={`${session.boxColor} text-white w-full max-w-5xl py-5 min-h-[200px] px-4 sm:px-6 md:px-10 lg:px-16 mx-auto my-12`}
              >
                <h1
                  className={`${roboto.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 sm:mt-10 md:mt-0 text-center sm:text-left`}
                >
                  {session.boxTitle}
                </h1>
                <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
                  {[firstCol, secondCol].map((group, idx) => (
                    <div key={idx} className="w-full sm:w-1/2">
                      {group.map((lesson, i) => (
                        <p
                          key={i}
                          className={`${roboto.className} text-base sm:text-lg md:text-xl lg:text-4xl mt-4`}
                        >
                          {lesson}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center my-4 sm:items-center gap-4">
                <h1 className="text-4xl text-white sm:text-6xl">
                  <span
                    className={`me-3`}
                    style={{ color: session.highlightColor }}
                  >
                    {session.session}
                  </span>
                  objectives
                </h1>
                <button
                  onClick={() => router.push("/course")}
                  className={`bg-purple-600 hover:bg-purple-700 text-white sm:text-2xl px-6 py-3 sm:px-10 sm:py-4 rounded-3xl transition-colors ${robotoop.className}`}
                >
                  Start Course
                </button>
              </div>

              <ul className="list-disc pl-6 sm:pl-10 mt-6">
                {session.objectives.map((text, idx) => (
                  <li
                    key={idx}
                    className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-base sm:text-lg md:text-xl lg:text-3xl mb-10`}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PartTwo;
