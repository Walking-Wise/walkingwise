"use client";
import Image from "next/image";
import { robotoItalic,robotoItalicop, roboto, robotoopo } from "../../public/fonts/Fonts";

const PartOne = () => {
  return (
    <>
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/ADULT.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 768px (md) */}
          <div className="hidden md:block absolute bottom-70 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              Adult education
            </h1>
          </div>

          {/* Centered version - shows on screens < 768px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-5xl text-white sm:text-7xl p-1 bg-black/50">Adult education</h1>
          </div>
        </div>
      </div>

      {/* Title Overlay Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px] bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            online course for adults
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="text-black mt-30 lg:mt-50 max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start px-4 sm:px-8 lg:px-16 py-10 gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="w-full">
          <h1 className="text-4xl sm:text-6xl text-[#303030] tracking-normal mb-6">
            Walking Wise: Sexual Exploitation Education
          </h1>
          <div className="space-y-6">
            <p className={`${robotoopo.className} text-lg sm:text-xl mt-10 lg:text-2xl leading-7 lg:leading-10  tracking-wide xl:text-3xl`}>
              Backed by thorough research and expert insights, this course provides medical professionals, educators, youth leaders, and parents with a comprehensive understanding of the U.S. commercial sex trade and its profound impact on children.
            </p>
            <p className={`${robotoopo.className} text-lg sm:text-xl mt-10 lg:text-2xl leading-7 lg:leading-10  tracking-wide xl:text-3xl`}>
              Walking Wise<span className="text-sm relative -top-3">&reg;</span>blends a trauma-informed approach with evidence-based education. Survivor and attorney Carissa Phelps conducted a legal review to uphold the integrity and credibility of the content. The course delivers complex topics in digestible segments, featuring interviews with a dozen survivor leaders and advocacy experts.
            </p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-auto flex flex-col justify-center md:mt-20 items-center gap-8">
          {/* Testimonial Circle */}
          <div className="bg-[#303030] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center text-white">
            <p className={`${robotoItalicop.className} text-[#68D2DF] text-sm sm:text-2xl lg:text-xl xl:text-6xl px-4 sm:px-8`}>
              CME Credits
            </p>
            <p className={`${robotoItalicop.className} text-white text-sm sm:text-2xl lg:text-xl xl:text-4xl px-4 sm:px-8`}>
              EARN AS YOU LEARN!
            </p>
            <p className={`${robotoItalic.className} text-purple-400 text-sm sm:text-2xl lg:text-xl xl:text-3xl mb-5`}>
              Postgraduate Institute for Medicine
            </p>
            <p className={`${roboto.className} text-white mb-2 text-sm sm:text-2xl lg:text-xl xl:text-3xl px-4 sm:px-8`}>
              12 Contact Hours
            </p>
            <p className={`${roboto.className} text-white mb-2 text-sm sm:text-2xl lg:text-xl xl:text-3xl px-4 sm:px-8`}>
              Earn 1 CME per Lesson
            </p>
            <p className={`${roboto.className} text-white text-sm sm:text-2xl lg:text-xl xl:text-3xl px-4 sm:px-8`}>
              Earn up to 12 CMEs
            </p>
          </div>

          {/* Logo and Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
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
      <div className="mt-10 mb-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#303030] text-start mb-10">
          3 Part Course: 12 Lessons
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* THE GROOMERS Card */}
          <div className="bg-[#00C1D5] p-8">
            <p className={`${roboto.className} text-[#303030] text-2xl lg:text-3xl font-bold mb-4`}>
              THE GROOMERS
            </p>
            <ul className="space-y-3">
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Myths & Reality
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Trustworthy vs. Unsafe Adult
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Grooming Process
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Pornography Link
              </li>
            </ul>
          </div>

          {/* THE VULNERABLE Card */}
          <div className="bg-[#00C1D5] p-8">
            <p className={`${roboto.className} text-[#303030] text-2xl lg:text-3xl font-bold mb-4`}>
              THE VULNERABLE
            </p>
            <ul className="space-y-3">
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Sextortion Scheme
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Male Victims
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Runaways as Targets
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Rural Risks
              </li>
            </ul>
          </div>

          {/* THE PREDATORS Card */}
          <div className="bg-[#00C1D5] p-8">
            <p className={`${roboto.className} text-[#303030] text-2xl lg:text-3xl font-bold mb-4`}>
              THE PREDATORS
            </p>
            <ul className="space-y-3">
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Traffickers
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Recruiters
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Familial Traffickers
              </li>
              <li className={`${robotoopo.className} text-[#303030] text-xl lg:text-3xl`}>
                Hidden Buyers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartOne;