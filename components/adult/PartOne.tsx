"use client";
import Image from "next/image";
import {
  robotoItalic,
  robotoItalicop,
  roboto,
  robotoopo,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const PartOne = () => {
  return (
    <section className="w-full">
      <PageBanner
        title="ONLINE COURSE FOR ADULTS"
        image="/assets/ADULT.jpg"
        altText="Online Course for Adults"
      />

      {/* Section Content Wrapper */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 pt-8 md:pt-16 pb-16 lg:pb-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full">
            <h1 className="text-4xl sm:text-6xl md:text-5xl text-[#303030] tracking-normal md:mb-6">
              Walking Wise: Sexual Exploitation Education
            </h1>
            <div className="space-y-6">
              <p
                className={`${robotoopo.className} text-lg text-[#303030] sm:text-xl mt-4 md:mt-10 lg:text-2xl leading-7 lg:leading-10 tracking-wide xl:text-3xl`}
              >
                Backed by thorough research and expert insights, this course
                provides medical professionals, educators, youth leaders, and
                parents with a comprehensive understanding of the U.S.
                commercial sex trade and its profound impact on children.
              </p>
              <p
                className={`${robotoopo.className} text-lg sm:text-xl text-[#303030] mt-10 lg:text-2xl leading-7 lg:leading-10 tracking-wide xl:text-3xl`}
              >
                Walking Wise
                <span className="text-sm relative -top-3">&reg; </span>
                blends a trauma-informed approach with evidence-based education.
                Survivor and attorney Carissa Phelps conducted a legal review to
                uphold the integrity and credibility of the content. The course
                delivers complex topics in digestible segments, featuring
                interviews with a dozen survivor leaders and advocacy experts.
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-auto flex flex-col justify-center items-center gap-6">
            {/* Testimonial Circle */}
            <div className="bg-[#303030] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center text-white">
              <p
                className={`${robotoItalicop.className} text-[#00c1d5] text-xl sm:text-2xl xl:text-6xl px-4 sm:px-8`}
              >
                CME Credits
              </p>
              <p
                className={`${robotoItalicop.className} text-white text-xl sm:text-2xl xl:text-4xl px-4 sm:px-8`}
              >
                EARN AS YOU LEARN!
              </p>
              <p
                className={`${robotoItalic.className} text-purple-400 text-xl sm:text-2xl xl:text-3xl mb-5`}
              >
                Postgraduate Institute for Medicine
              </p>
              <p
                className={`${roboto.className} text-white text-xl sm:text-2xl xl:text-3xl px-4 sm:px-8`}
              >
                12 Contact Hours
              </p>
              <p
                className={`${roboto.className} text-white text-xl sm:text-2xl xl:text-3xl px-4 sm:px-8`}
              >
                Earn 1 CME per Lesson
              </p>
              <p
                className={`${roboto.className} text-white text-xl sm:text-2xl xl:text-3xl px-4 sm:px-8`}
              >
                Earn up to 12 CMEs
              </p>
            </div>

            {/* Logo and Button */}
            <div className="flex justify-center items-center gap-6">
              <div className="relative h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px]">
                <Image
                  src="/assets/home-1.png"
                  alt="PIM Accreditation"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                className={`bg-[#1C4675] hover:bg-[#2e3e4f] text-white px-6 sm:px-10 py-4 text-base sm:text-xl rounded-3xl transition-colors ${robotoopo.className}`}
              >
                PIM Issued CMEs
              </button>
            </div>
          </div>
        </div>

        {/* Course Lessons Section */}
        <div className="mt-18 lg:mt-16">
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
              <div key={idx} className="bg-[#00C1D5] p-8">
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
      </div>
    </section>
  );
};

export default PartOne;
