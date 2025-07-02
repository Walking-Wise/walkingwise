import React from "react";
import {
  roboto,
  robotoItalic,
  robotoItalicop,
  robotoopo,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const mentorRoles = [
  "YOUTH MENTORS",
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

const PartOne = () => {
  return (
    <>
      {/* Hero Image Section */}
      <PageBanner
        title="COMBATTING EXPLOITATION"
        image="/assets/YTH.jpg"
        altText="Youth organizations"
      />
      {/* Youth Leaders Section */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-24 py-16 md:py-26">
        <div className="w-full md:max-w-4xl text-[#303030] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-left">
          <h1 className="text-4xl sm:text-6xl mb-4">Youth Leaders</h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 `}
          >
            Mentors play a crucial role in shaping young people’s lives,
            offering guidance, encouragement, and support as they navigate
            social, emotional, and family challenges.
          </p>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  mt-10`}
          >
            Many survivor leaders who shared their experiences with Walking Wise
            <span className="text-sm relative -top-3">&reg;</span>
            spoke about the “one” trusted adult who made them feel valued,
            crediting that support as a key factor in their resilience and
            ability to overcome the impact of sexual exploitation.
          </p>
        </div>

        <div className="bg-[#36c5d8] w-[300px] h-[300px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-black ">
          {mentorRoles.map((role, idx) => (
            <p
              key={idx}
              className={`${roboto.className} ${
                idx === 0
                  ? "text-white sm:text-2xl xl:text-4xl px-4 sm:px-8 mb-4"
                  : "text-sm sm:text-xl xl:text-xl px-4 sm:px-8"
              }`}
            >
              {role}
            </p>
          ))}
        </div>
      </div>

      {/* Safer Environments Section */}
      <div className="w-full bg-[#303030]">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-16 py-16 md:py-26">
          <div className="bg-white w-[350px] h-[350px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-10  border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-black ">
            <p className={`${robotoItalic.className} text-sm md:text-2xl`}>
              “Educating our children about the dangers they face in today’s
              world is crucial to protecting their innocence.
            </p>
            <p
              className={`${robotoItalic.className} text-sm md:text-2xl mt-2 md:mt-8`}
            >
              Walking Wise is the most engaging tool I’ve seen for empowering
              youth with the knowledge they need to stay safe.”
            </p>
            <p
              className={`${robotoItalic.className} text-xs md:text-lg mt-2 md:mt-8`}
            >
              Nate Lewis, Founder & CEO
            </p>
            <a
              className={`${robotoItalic.className} text-xs md:text-lg underline`}
              href="https://theinnocent.org"
            >
              TheInnocent.org
            </a>
          </div>
          <div className="sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
              <h1 className="text-4xl sm:text-6xl text-[#36c5d8]">
                creating safer environments
              </h1>
            </div>

            {saferEnvParagraphs.map((text, idx) => (
              <p
                key={idx}
                className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 text-lg sm:text-2xl mt-6 sm:mt-8 md:mt-10`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;
