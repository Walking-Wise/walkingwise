"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  roboto,
  robotoItalic,
  robotoop,
  robotoopo,
} from "../../public/fonts/Fonts";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "This will surely save lives. It will train, inspire, and initiate others to know how to recognize exploitation and take action.",
    author: "Dr. Maria Glukhovsky, PharmD",
    heading: "“Incredible program, testimonies, knowledge, and training.",
  },
  {
    quote:
      "I especially love the built-in activities that keep the participants engaged.",
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
      <div className="bg-[#303030] py-16 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row items-center gap-8">
          <div className="bg-[#00C1D5] text-[#303030] w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-8 rounded-full border-2 border-white flex flex-col justify-center items-center text-center z-50">
            <p className="text-xl sm:text-2xl mt-5 font-bold mb-4 lg:mb-8 px-6">
              {testimonials[0].heading}
            </p>
            <p
              className={`${robotoopo.className} text-sm sm:text-2xl px-5 sm:px-10 mb-4 lg:mb-8`}
            >
              {`“${testimonials[0].quote}”`}
            </p>
            <span
              className={`${robotoopo.className} text-[#303030] px-6 sm:px-10 block sm:text-2xl`}
            >
              {testimonials[0].author}
            </span>
          </div>

          <div className="w-full max-w-3xl text-[#303030] sm:text-lg md:text-3xl text-left">
            <h1 className="text-3xl sm:text-6xl text-[#00C1D5]">
              Accommodating Your Busy Schedule
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 sm:text-3xl text-white`}
            >
              Our Walking Wise subscription gives you 6 months to complete our
              12-hour online course.
            </p>

            <h1 className="text-3xl sm:text-6xl mt-10 text-[#00C1D5]">
              Set your own pace
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 sm:text-3xl text-white`}
            >
              Dedicate about two hours per month to complete each lesson and
              reach the Walking Wise finish line in 6 months!
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start items-center mt-10 gap-4">
              {["Course Description", "Start Course"].map((label, i) => (
                <button
                  key={i}
                  className={`bg-[#9d1be3] ${roboto.className} rounded-full text-md sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap`}
                  onClick={() => handleRedirect("/course")}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-12 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row justify-center items-center gap-8">
          <div className="w-full text-[#303030] text-left">
            <h1 className="text-3xl sm:text-6xl">
              Build an Anti-Trafficking Community
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 sm:text-3xl mt-5`}
            >
              Together, we can make a real impact! While educating adults is
              crucial, children remain the primary targets of exploitation. So,
              youth education is just as essential.
            </p>

            <h1 className="text-3xl sm:text-6xl mt-10">
              Empower Adolescents with Knowledge
            </h1>
            <p
              className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10 sm:text-3xl mt-5`}
            >
              We encourage course participants to put their learning into action
              with our interactive Youth Curriculum, designed to educate
              adolescents (ages 10 to 19) about recognizing and reporting signs
              of sexual exploitation.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#303030] text-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
              <h1 className="text-5xl sm:text-6xl mb-4">
                {testimonials[1].heading}
              </h1>
              <p
                className={`${robotoItalic.className} text-lg mb-4 sm:text-3xl px-6 sm:mb-4`}
              >
                {`${testimonials[1].quote}”`}
              </p>
              <span
                className={`${robotoopo.className} text-[#3ab6c7] block sm:px-20 sm:text-2xl max-w-48 sm:max-w-120`}
              >
                {testimonials[1].author}
              </span>
            </div>
            <button
              className={`bg-[#9d1be3] ${roboto.className} mt-6 rounded-full text-md sm:text-[16px] px-6 py-3 sm:py-3 text-white text-center flex items-center justify-center whitespace-nowrap`}
              onClick={() => handleRedirect("/youth-curriculum")}
            >
              Youth Curriculum
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#00C1D5] pt-16 pb-32">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 text-[#303030]">
          <h1 className="text-3xl sm:text-6xl my-8">
            Public & private sector organizations
          </h1>
          <p
            className={`${robotoopo.className} text-base tracking-wide leading-7 lg:leading-10 sm:text-xl md:text-2xl lg:text-3xl mb-10`}
          >
            Medical groups, hospitals, government agencies, universities, and
            businesses can provide their associates with exclusive access to
            Walking Wise’s 12-module educational program designed to equip
            professionals with essential knowledge on child exploitation. This
            comprehensive learning experience offers participants up to 12
            continuing education (MCE/CE) credits through the Postgraduate
            Institute for Medicine at no additional cost.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                title: "In-House LMS Integration",
                description:
                  "Walking Wise modules seamlessly integrate into corporate Learning Management Systems (LMS), allowing organizations to deliver education efficiently within their existing training platforms. Our SCORM-compliant modules can be uploaded directly into your LMS, ensuring associates have on-demand access to the 12 lesson series.",
                linkText: "Contact us",
                linkHref: "https://www.walkingwise.com/contact-us-v2/",
                end: "today for implementation options.",
              },
              {
                title: "ENTERPRISE SUBSCRIPTION",
                description:
                  "For organizations without an LMS, our Enterprise Subscription provides associates with individual login access to the Walking Wise Learning Platform. This flexible, on-demand model allows professionals to complete the lessons at their own pace while meeting compliance and development requirements.",
                linkText: "Schedule",
                linkHref: "https://www.walkingwise.com/contact-us-v2/",
                end: "a platform tour today to discover how Walking Wise can support your organization’s education initiatives.",
              },
            ].map((box, index) => (
              <div key={index} className="bg-white flex-1 pt-12 pb-8 px-8">
                <h1 className="text-3xl sm:text-5xl mb-4 text-[#303030]">
                  {box.title}
                </h1>
                <p
                  className={`${robotoopo.className} text-base tracking-loose leading-7 sm:text-xl md:text-2xl`}
                >
                  {box.description}
                </p>
                <p
                  className={`${robotoopo.className} text-base tracking-loose leading-7 sm:text-xl md:text-2xl mt-4`}
                >
                  <Link href={box.linkHref} className="underline">
                    {box.linkText}
                  </Link>{" "}
                  {box.end}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
