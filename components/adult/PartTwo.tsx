"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";

const PartTwo = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#303030] py-16 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row items-center gap-24">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#00C1D5] text-[#303030] border-2 border-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
              <h1 className={`text-xl mb-4 sm:text-3xl px-10 md:px-6 sm:mb-4`}>
                “Incredible program, testimonies, knowledge, and training.
              </h1>

              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                "This will surely save lives. It will
              </p>
              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                train, inspire, and initiate others
              </p>
              <p
                className={`${robotoItalic.className} text-lg  sm:text-2xl px-6`}
              >
                to know how to recognize
              </p>
              <p
                className={`${robotoItalic.className} text-lg mb-4 sm:text-2xl px-6 sm:mb-4`}
              >
                exploitation and take action."
              </p>
              <span
                className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
              >
                Dr. Maria Glukhovsky, PharmD
              </span>
            </div>
          </div>

          <div className="w-full max-w-3xl text-[#303030] sm:text-lg md:text-3xl text-left">
            <SectionHeaderText color="[#00C1D5]">
              Accommodating Your Busy Schedule
            </SectionHeaderText>
            <BodyText
              color="white"
            >
              Our Walking Wise subscription gives you 6 months to complete our
              12-hour online course.
            </BodyText>

            <SectionHeaderText color="[#00C1D5]" className="mt-10">
              Set your own pace
            </SectionHeaderText>
            <BodyText
              color="white"
            >
              Dedicate about two hours per month to complete each lesson and
              reach the Walking Wise finish line in 6 months!
            </BodyText>

            <div className="flex flex-wrap justify-center lg:justify-start items-center mt-10 gap-4">
              {["Course Description", "Start Course"].map((label, i) => (
                <Button
                  key={i}
                  className={`px-6 py-3 sm:py-3`}
                  onClick={() => handleRedirect("/course")}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-12 lg:py-24">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col xl:flex-row justify-center items-center gap-8">
          <div className="w-full text-[#303030] text-left">
            <SectionHeaderText>
              Build an Anti-Trafficking Community
            </SectionHeaderText>
            <BodyText className={`mt-5 `}>
              Together, we can make a real impact! While educating adults is
              crucial, children remain the primary targets of exploitation. So,
              youth education is just as essential.
            </BodyText>

            <SectionHeaderText className="mt-10">
              Empower Adolescents with Knowledge
            </SectionHeaderText>
            <BodyText className={`mt-5`}>
              We encourage course participants to put their learning into action
              with our interactive Youth Curriculum, designed to educate
              adolescents (ages 10 to 19) about recognizing and reporting signs
              of sexual exploitation.
            </BodyText>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#303030] text-white w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
              <h1 className="text-5xl sm:text-6xl mb-4">“I LOVE IT!</h1>
              <p
                className={`${robotoItalic.className} text-lg mb-4 sm:text-3xl px-6 sm:mb-4`}
              >
                I especially love the built-in activities that keep the
                participants engaged."
              </p>
              <span
                className={`${robotoopo.className} text-[#3ab6c7] block sm:px-20 sm:text-2xl max-w-48 sm:max-w-120`}
              >
                Jennifer Livingston, MNSC, APRN, CPNP-PC, SANE-P
              </span>
            </div>
            <Button
              className={`mt-6`}
              onClick={() => handleRedirect("/youth-curriculum")}
            >
              Youth Curriculum
            </Button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-[#00C1D5] pt-8 md:pt-16 lg:pt-24 pb-32">
        <div
          className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-32 text-[#303030]"
          id="p_p_sector"
        >
          <SectionHeaderText className="mt-8 mb-4">
            Public & private sector organizations
          </SectionHeaderText>
          <BodyText className={`mb-10 lg:mb-18`}>
            Medical groups, hospitals, government agencies, universities, and
            businesses can provide their associates with exclusive access to
            Walking Wise’s 12-module educational program designed to equip
            professionals with essential knowledge on child exploitation. This
            comprehensive learning experience offers participants up to 12
            continuing education (MCE/CE) credits through the Postgraduate
            Institute for Medicine at no additional cost.
          </BodyText>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                title: "In-House LMS Integration",
                description:
                  "Walking Wise modules seamlessly integrate into corporate Learning Management Systems (LMS), allowing organizations to deliver education efficiently within their existing training platforms. Our SCORM-compliant modules can be uploaded directly into your LMS, ensuring associates have on-demand access to the 12 lesson series.",
                linkText: "Contact us",
                linkHref: "/contact",
                end: "today for implementation options.",
              },
              {
                title: "ENTERPRISE SUBSCRIPTION",
                description:
                  "For organizations without an LMS, our Enterprise Subscription provides associates with individual login access to the Walking Wise Learning Platform. This flexible, on-demand model allows professionals to complete the lessons at their own pace while meeting compliance and development requirements.",
                linkText: "Schedule",
                linkHref: "/contact",
                end: "a platform tour today to discover how Walking Wise can support your organization’s education initiatives.",
              },
            ].map((box, index) => (
              <div
                key={index}
                className="bg-white flex-1 pt-8 md:pt-12 pb-8 px-6 md:px-14"
              >
                <h1 className="text-3xl sm:text-5xl mb-4 text-[#303030]">
                  {box.title}
                </h1>
                <p
                  className={`${robotoopo.className} text-base tracking-loose sm:text-xl md:text-2xl lg:leading-10 `}
                >
                  {box.description}
                </p>
                <p
                  className={`${robotoopo.className} text-base tracking-loose sm:text-xl md:text-2xl mt-4 lg:leading-10 `}
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
