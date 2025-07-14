"use client";
import React from "react";
import {
  robotoItalic,
  robotoItalicop,
  robotoopo,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const mentorRoles = [
  "Social Workers",
  "Case Managers",
  "Scout Leaders",
  "Youth Group Leaders",
  "Sunday School Leaders",
  "Teen Leadership Coaches",
  "Athletic Coaches",
  "Arts Instructors",
];

const saferEnvParagraphs = [
  `It is well known that sexual predators actively seek out environments where children and teenagers gather, often using deception and manipulation to gain trust and blend in unnoticed.`,
  `Well-run organizations can still be infiltrated by pedophiles or sex traffickers who deliberately target youth-centered communities. Schools, churches, sports teams, social clubs, and other youth-oriented spaces are frequent targets, making vigilance, training, and proactive safety measures essential.`,
];

const YouthOrganization = () => {
  return (
    <>
      <PageBanner
        title="COMBATTING EXPLOITATION"
        image="/assets/YTH.jpg"
        altText="Youth organizations"
      />
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-24 py-16 md:py-6 md:pb-24">
        <div className="w-full md:max-w-4xl text-[#303030]">
          <h1 className="text-4xl sm:text-6xl mb-6">Youth Leaders</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-3xl`}
          >
            Mentors play a crucial role in shaping young people’s lives,
            offering guidance, encouragement, and support as they navigate
            social, emotional, and family challenges.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 mt-6 text-lg sm:text-3xl`}
          >
            Many survivor leaders who shared their experiences with Walking Wise
            <span className="text-sm relative -top-3">&reg;</span> spoke about
            the “one” trusted adult who made them feel valued, crediting that
            support as a key factor in their resilience and ability to overcome
            the impact of sexual exploitation.
          </p>
        </div>

        <div className="bg-[#36c5d8] w-[300px] h-[300px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-4 pt-8 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-[#303030]">
          <h1
            className={`text-white sm:text-2xl xl:text-6xl mb-4 px-4 sm:px-8`}
          >
            YOUTH MENTORS
          </h1>

          {mentorRoles.map((role, idx) => (
            <p
              key={idx}
              className={`${robotoItalicop.className} text-sm sm:text-xl xl:text-2xl px-4 sm:px-8 mb-1`}
            >
              {role}
            </p>
          ))}
        </div>
      </div>

      {/* Safer Environments Section */}
      <div className="w-full bg-[#303030]">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-16 py-16 md:py-26">
          <div className="bg-white w-[350px] h-[350px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-10 rounded-full flex flex-col justify-center items-center text-center pt-16 text-[#303030]">
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              “Educating our children
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              about the dangers they face
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              in today’s world is crucial to
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              protecting their innocence.
            </p>
            <p
              className={`${robotoItalic.className} text-sm md:text-3xl mt-2 md:mt-8`}
            >
              Walking Wise is the most engaging
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              tool I’ve seen for empowering
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              youth with the knowledge they
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-3xl`}>
              need to stay safe.”
            </p>
            <p className={`${robotoItalic.className} text-xs md:text-xl mt-8`}>
              Nate Lewis, Founder & CEO
            </p>
            <a
              className={`${robotoItalic.className} text-xs md:text-xl underline`}
              href="https://theinnocent.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheInnocent.org
            </a>
          </div>
          <div className="sm:p-8 md:p-10 text-white">
            <h1 className="text-4xl sm:text-5xl text-[#36c5d8]">
              creating safer environments
            </h1>
            {saferEnvParagraphs.map((text, idx) => (
              <p
                key={idx}
                className={`${robotoopo.className} tracking-wide leading-7 sm:leading-8 lg:leading-10 text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-8 md:mt-10`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 bg-[#3ab6c7] text-[#303030]">
          <div className="w-full flex justify-end">
            <div className="max-w-[900px] w-full p-6 sm:p-8 md:p-24 text-left">
              <h1 className="text-4xl sm:text-6xl">prevention strategy</h1>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6`}
              >
                Education is one of the most powerful tools for prevention, and
                everyone, especially adolescents, should have access to it.
              </p>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6`}
              >
                Organizations that equip adults and youth with knowledge
                naturally create safer environments, as predators are less
                likely to see the children they serve as vulnerable targets.
              </p>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6`}
              >
                Walking Wise education is designed for flexible use in
                one-on-one mentoring, small group discussions, or full-scale
                workshops.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 bg-white text-[#303030]">
          <div className="w-full flex justify-start">
            <div className="max-w-[900px] w-full p-6 sm:p-8 md:p-24 text-left">
              <h1 className="text-4xl sm:text-6xl">anti-trafficking groups</h1>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6`}
              >
                Our education is designed to complement the vital work of
                anti-trafficking organizations by streamlining the delivery of
                impactful prevention education.
              </p>
              <p
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6`}
              >
                Walking Wise trauma-sensitive and expert-reviewed resources free
                advocacy groups from the costly and time-consuming task of
                content development, allowing them to focus on what they do
                best—building strong community relationships and offering direct
                support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="mx-auto px-6 text-center w-full py-32 bg-[#303030]">
        <div className="max-w-[1800px] mx-auto px-26 ">
          <h1 className="text-6xl tracking-wide leading-7 lg:leading-16 text-white">
            Together, we can form a powerful partnership that strengthens both
            education & outreach in the fight against child exploitation.
          </h1>
          <div className="max-w-[1800px] mx-auto px-6 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full justify-center mt-16 bg-[#303030]">
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
              onClick={() => (window.location.href = "/contact")}
            >
              Animated Videos
            </button>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
              onClick={() => (window.location.href = "/contact")}
            >
              DEMO Curriculum
            </button>
            <button
              className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-3 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
              onClick={() => (window.location.href = "/request-a-quote")}
            >
              ENROLL Today!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouthOrganization;
