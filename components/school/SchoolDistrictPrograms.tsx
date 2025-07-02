"use client";

import React from "react";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

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
      "Recruiters",
      "Familial Traffickers",
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
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row items-center gap-24 py-16 md:py-32">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-[#303030] border-2 border-white w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <p
              className={`${robotoItalic.className} mb-3 px-4 sm:px-8 leading-snug text-3xl text-white`}
            >
              “Walking Wise offers the best tools I’ve seen for teaching
              students about about sexual exploitation and sextortion—without
              being scary or lewd.”
            </p>
            <span
              className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-lg`}
            >
              Nigel Hunter, Deputy School Resource Officer
            </span>
          </div>
        </div>

        <div className="max-w-[800px] text-[#303030]">
          <h1 className="text-4xl sm:text-6xl">Sustainable Education</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl mt-4 sm:mt-6`}
          >
            Many schools invite guest speakers to address sex trafficking with
            staff, parents, and students. While a presentation can raise
            important awareness, its impact is often short-lived. Walking Wise
            offers a sustainable, school-led solution—empowering school safety
            teams to integrate prevention education into their middle and high
            school curriculum over time.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl mt-4 sm:mt-6`}
          >
            This ongoing approach helps students build lasting awareness,
            strengthen critical thinking, and develop the skills to recognize
            and resist the manipulative tactics commonly used by sexual
            predators.
          </p>
        </div>
      </div>

      {/* School Program Rollout */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-16 lg:py-32 bg-[#00C1D5] text-[#303030]">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl sm:text-6xl">School Program Rollout</h1>
          <div className="h-[50px] w-[50px] pt-[5px] border-[#303030] text-white hidden sm:block text-[#115a64] rounded-full text-xl ps-2 border-5 border-r-transparent">
            11y+
          </div>
        </div>
        <p
          className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          While most adults successfully use our training and tools to educate
          about child exploitation, Walking Wise strongly encourages school
          social workers, resource officers, nurses, and wellness-focused
          teachers to leverage their expertise in leading this safety initiative
          on 12 critical issues
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 my-10 gap-6 md:gap-10 items-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white h-[300px] mx-auto sm:h-[350px] md:h-[400px] w-full max-w-[400px] flex justify-evenly p-4 items-center flex-col"
            >
              <div className="text-center flex flex-col gap-2">
                <h1
                  className={`${roboto.className} text-[#00778B] text-2xl sm:text-3xl md:text-2xl xl:text-3xl`}
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

              <div className="flex justify-between px-4 sm:px-6 md:px-2 xl:px-6 w-full">
                <div>
                  <p
                    className={`${roboto.className} text-sm sm:text-base md:text-md xl:text-xl`}
                  >
                    Middle Schools
                  </p>
                  <p
                    className={`${roboto.className} text-[#00778B] text-lg xl:text-xl`}
                  >
                    {card.middle}
                  </p>
                </div>
                <div>
                  <p
                    className={`${roboto.className} text-sm sm:text-base md:text-md xl:text-xl`}
                  >
                    High Schools
                  </p>
                  <p
                    className={`${roboto.className} text-[#00778B] text-lg xl:text-xl`}
                  >
                    {card.high}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* District Rollout Section */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 lg:py-32 py-16 bg-white text-[#303030] flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-6xl">District Rollout</h1>
          <p
            className={`${robotoopo.className} mt-4 leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl`}
          >
            Introducing essential topics gradually throughout students’ academic
            journey fosters consistent and impactful learning.
          </p>
          <p
            className={`${robotoopo.className} mt-4 leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl`}
          >
            The Walking Wise curriculum is designed for flexibility, enabling
            educators to tailor materials to align with school policies and
            protocols, age appropriateness, teaching styles, and available class
            time.
          </p>
        </div>

        {/* Right Box */}
        <div className="flex-1 bg-[#303030] text-white p-6 sm:p-8 relative">
          <h3 className="text-xl sm:text-3xl font-semibold mb-4">
            DISTRICT WIDE PROGRAM
          </h3>
          <ul
            className={`${robotoopo.className} text-base sm:text-2xl space-y-2`}
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
          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-[#B833E1] text-white px-6 py-2 rounded-full text-sm sm:text-base"
              onClick={() => (window.location.href = "/demo")}
            >
              DEMO Curriculum
            </button>
            <button
              className="bg-[#B833E1] text-white px-6 py-2 rounded-full text-sm sm:text-base"
              onClick={() =>
                (window.location.href =
                  "https://www.walkingwise.com/contact-us-v2/")
              }
            >
              ENROLL Today!
            </button>
          </div>
        </div>
      </div>

      {/* Safety Teams Section */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-16 lg:py-32 bg-[#303030] text-white">
        <h1 className="text-4xl sm:text-7xl">School Safety Teams</h1>
        <p
          className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          In 2021, the U.S. Department of Education provided guidelines for
          implementing human trafficking education and suggested empowering a
          ‘safety team’ to develop and oversee school education as well as
          policies and response protocols for reporting suspected child
          trafficking.
        </p>
        <p
          className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          It is recommended that safety teams include school social workers,
          nurses, resource officers, psychologists, counselors, principals,
          wellness-focused educators, and members of their local anti-human
          trafficking coalition. With this diverse expertise, these teams are
          well-equipped to provide staff training and educate parents and
          students.
        </p>
        <p
          className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6`}
        >
          For more information, please review guidelines written for the U.S.
          Department of Education, Office of Safe and Supportive Schools, called{" "}
          <span className="underline">
            Human Trafficking in AMERICA’S SCHOOLS
          </span>
          .
        </p>
      </div>
    </>
  );
};

export default SchoolDistrictPrograms;
