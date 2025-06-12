"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { robotoItalic, robotoop, robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "INCREDIBLE PROGRAM, TESTIMONIES, KNOWLEDGE, AND TRAINING. THIS WILL SURELY SAVE LIVES AND TRAIN, INSPIRE, AND INITIATE OTHERS TO KNOW HOW TO RECOGNIZE EXPLOITATION AND TAKE ACTION.",
    author: "Dr. Maria Glukhovsky, PharmD",
  },
  {
    quote:
      "I ESPECIALLY LOVE THE BUILT-IN ACTIVITIES THAT KEEP THE PARTICIPANTS ENGAGED.",
    author: "Jennifer Livingston, MNSC, APRN, CPNP-PC, SANE-P",
    heading: "“I LOVE IT!",
  },
];

const PartTwo = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {/* Section 1 */}
      <div className="flex bg-[#303030] relative flex-col xl:flex-row justify-center items-center gap-8 px-4 py-15">
        <div className="bg-white text-[#303030] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-evenly items-center text-center z-50">
          <p
            className={`${robotoopo.className} text-sm sm:text-2xl px-5 sm:px-10 mt-10`}
          >
            {`“${testimonials[0].quote}”`}
          </p>
          <span
            className={`${robotoopo.className} text-[#00C1D5] px-10 sm:px-20 block sm:text-2xl`}
          >
            {testimonials[0].author}
          </span>
        </div>

        <div className="w-full max-w-3xl text-[#303030] text-base sm:text-lg md:text-3xl lg:text-left px-4">
          <h1 className="text-4xl sm:text-6xl text-[#00C1D5]">
            Accommodate Your Busy Schedule
          </h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  sm:text-3xl text-white`}
          >
            Our Walking Wise subscription gives you 6 months to complete our
            12-hour online course.
          </p>

          <h1 className="text-4xl sm:text-6xl mt-10 text-[#00C1D5]">
            Set your own pace
          </h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  sm:text-3xl text-white`}
          >
            Dedicate about two per month to complete each lesson and reach
            the Walking Wise finish line by in 6 months!
          </p>

          <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
            {["Course Description", "Start Course"].map((label, i) => (
              <button
                key={i}
                className={`bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 sm:text-2xl rounded-4xl transition-colors ${robotoop.className}`}
                onClick={() => handleRedirect("/course")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex bg-white relative flex-col xl:flex-row justify-center items-center gap-8 px-4 py-15">
        <div className="w-full max-w-4xl text-[#303030] text-base sm:text-lg md:text-3xl  lg:text-left px-4">
          <h1 className="text-4xl sm:text-6xl">
            Build an Anti-Trafficking Community
          </h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  sm:text-3xl mt-5`}
          >
            Together, we can make a real impact! While educating adults is
            crucial, children remain the primary targets of exploitation. So,
            youth education is just as essential.
          </p>

          <h1 className="text-4xl sm:text-6xl mt-10">
            Empower Adolescents with Knowledge
          </h1>
          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  sm:text-3xl mt-5`}
          >
            We encourage course participants to put their learning into action
            with our interactive Youth Curriculum, designed to educate
            adolescents (ages 10 to 19) about recognizing and reporting signs of
            sexual exploitation.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-white w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <h1 className="text-4xl mt-5 sm:text-7xl mb-3">
              {testimonials[1].heading}
            </h1>
            <p
              className={`${robotoItalic.className} text-sm sm:text-3xl px-9 sm:mb-10`}
            >
              {`“${testimonials[1].quote}”`}
            </p>
            <span
              className={`${robotoopo.className} text-[#3ab6c7] block mt-5 sm:px-20 sm:text-2xl`}
            >
              {testimonials[1].author}
            </span>
          </div>
          <button
            className={`bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 mt-10 sm:text-2xl rounded-4xl transition-colors ${robotoopo.className}`}
            onClick={() => handleRedirect("/youth-curriculum")}
          >
            Youth Curriculum
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#00C1D5]  flex justify-center items-center w-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full text-[#303030]">
          <h1 className="text-4xl sm:text-6xl my-6 sm:my-8 md:my-10">
            medical & corporate associate education
          </h1>

          <p
            className={`${robotoopo.className} text-base tracking-wide leading-7 lg:leading-10  sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10`}
          >
            Medical groups, hospitals, government agencies, universities, and
            businesses can provide their associates exclusive access to Walking
            Wise’s 12-module educational program—designed to equip professionals
            with essential knowledge on child exploitation. This comprehensive
            learning experience offers participants up to 12 continuing
            education (MCE/CE) credits through the Postgraduate Institute for
            Medicine at no additional cost.
          </p>

          <h1 className="text-4xl sm:text-6xl mb-3 text-white mt-8 sm:mt-10">
            IN-HOUSE LMS Integration
          </h1>

          <p
            className={`${robotoopo.className} text-base tracking-wide leading-7 lg:leading-10  sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10`}
          >
            Walking Wise modules seamlessly integrate into corporate Learning
            Management Systems (LMS), allowing organizations to deliver
            education efficiently within their existing training platforms. Our
            SCORM-compliant modules can be uploaded directly into your LMS,
            ensuring associates have on-demand access to the 12 lesson series  <Link href="/contact" className="underline">Contact us</Link>    explore implementation options.
          </p>

          <h1 className="text-4xl text-white sm:text-6xl mb-3 mt-8 sm:mt-10">
            ENTERPRISE SUBSCRIPTION
          </h1>

          <p
            className={`${robotoopo.className} text-base tracking-wide leading-7 lg:leading-10  sm:text-xl md:text-2xl lg:text-3xl`}
          >
            For organizations without an LMS, our Enterprise Subscription
            provides associates with individual login access to the Walking Wise
            Learning Platform. This flexible, on-demand model allows
            professionals to complete the lessons at their own pace while
            meeting compliance and development requirements. <Link href="/contact" className="underline">Schedule</Link> a platform
            tour today to discover how Walking Wise can support your
            organization’s education initiatives.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
