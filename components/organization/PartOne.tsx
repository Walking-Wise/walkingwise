
import React from "react";
import { robotoItalicop, robotoopo } from "../../public/fonts/Fonts";

const mentorRoles = [
  "YOUTH MENTORS",
  "SOCIAL WORKERS",
  "CASE MANAGERS",
  "SCOUT LEADERS",
  "YOUTH GROUP LEADERS",
  "SUNDAY SCHOOL LEADERS",
  "TEEN LEADERSHIP COACHES",
  "ATHLETIC COACHES",
  "ARTS INSTRUCTORS",
];

const saferEnvParagraphs = [
  `It is well known that sexual predators actively seek out environments where children and teenagers gather, often using deception and manipulation to blend in seamlessly.`,
  `Even the most well-prepared organizations with committed child advocates can face serious risks when an unidentified pedophile or sex trafficker infiltrates a youth-focused community. These individuals target schools, churches, sports programs, social clubs, and other organizations that engage with children and teenagers, making vigilance and proactive measures essential.`,
  `Education is one of the most powerful tools for prevention, and everyone—especially children and adolescents—should have access to it. Organizations that equip adults and youth with knowledge naturally create safer environments because predators are less likely to see them as vulnerable targets.`,
];

const PartOne = () => {
  return (
    <>
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/YTH.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 1024px */}
          <div className="hidden md:block absolute bottom-2 sm:bottom-5 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Youth Organization
            </h1>
          </div>

          {/* Centered version - shows on screens < 1024px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl  text-white p-1 bg-black/50">
                            Youth Organization
            </h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            combatting exploitation
          </h1>
        </div>
      </div>

      {/* Youth Leaders Section */}
      <div className="flex flex-col xl:flex-row justify-center items-center  px-10 py-5 mt-50">
        <div className="w-full md:max-w-4xl text-[#303030] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  xl:text-left">
          <h1 className="text-4xl sm:text-6xl mb-4">
            Youth Leaders
          </h1>
          <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 `}>
            Mentors play a crucial role in shaping young people’s lives,
            offering guidance, encouragement, and support as they navigate
            social, emotional, and family challenges.
          </p>
          <p className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  mt-10`}>
            Many survivor leaders who shared their experiences with Walking Wise<span className="text-sm relative -top-3">&reg;</span>
            spoke about the “one” trusted adult who made them feel valued,
            crediting that support as a key factor in their resilience and
            ability to overcome the impact of sexual exploitation.
          </p>
        </div>

        <div className="bg-[#36c5d8] w-[300px] h-[300px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[500px] xl:h-[500px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-black ">
          {mentorRoles.map((role, idx) => (
            <p
              key={idx}
              className={`${robotoItalicop.className} ${
                idx === 0 ? "text-white sm:text-2xl xl:text-4xl px-4 sm:px-8" : "text-sm sm:text-xl xl:text-2xl px-4 sm:px-8"
              }`}
            >
              {role}
            </p>
          ))}
        </div>
      </div>

      {/* Safer Environments Section */}
      <div className="bg-[#303030] py-10 text-white">
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <h1 className="text-4xl sm:text-6xl text-[#36c5d8]">
              creating safer environments
            </h1>
          </div>

          {saferEnvParagraphs.map((text, idx) => (
            <p
              key={idx}
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl  mt-6 sm:mt-8 md:mt-10`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default PartOne;
