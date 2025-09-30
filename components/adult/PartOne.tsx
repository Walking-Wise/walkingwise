"use client";
import Image from "next/image";
import {
  robotoItalic,
  robotoItalicop,
  roboto,
  robotoopo,
  robotoop,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";

const PartOne = () => {
  return (
    <>
      <PageBanner
        title="ONLINE COURSE FOR ADULTS"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/ADULTEDUCATION_300dpi_1200x511_TEXT.jpg"
        altText="Online Course for Adults"
      />

      {/* Section Content Wrapper */}
      <Section bgColor="white" className="pt-8 md:pt-16 pb-16 lg:pb-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="w-full">
            <SectionHeaderText>
              Walking Wise: Sexual Exploitation Education
            </SectionHeaderText>

            <BodyText className={`mb-6 mt-4 sm:mt-6`}>
              Backed by thorough research and expert insights, this course
              provides medical professionals, educators, youth leaders, and
              parents with a comprehensive understanding of the U.S. commercial
              sex trade and its profound impact on children.
            </BodyText>
            <BodyText className="mt-8">
              Walking Wise
              <span className="text-sm relative -top-3">&reg; </span>
              blends a trauma-informed approach with evidence-based education.
              Survivor and attorney Carissa Phelps conducted a legal review to
              uphold the integrity and credibility of the content. The course
              delivers complex topics in digestible segments, featuring
              interviews with a dozen survivor leaders and advocacy experts.
            </BodyText>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-auto flex flex-col justify-center items-center gap-2">
            {/* Testimonial Circle */}
            <div className="bg-[#303030] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[450px] xl:h-[450px] p-4 flex flex-col justify-center items-center text-center text-white">
              <p
                className={`${robotoItalicop.className} text-[#00c1d5] text-xl sm:text-2xl xl:text-5xl px-4 sm:px-8`}
              >
                CME Credits
              </p>
              <p
                className={`${robotoItalicop.className} text-white text-xl sm:text-2xl xl:text-3xl px-4 sm:px-8`}
              >
                EARN AS YOU LEARN!
              </p>
              <p
                className={`${robotoItalic.className} text-purple-400 text-xl sm:text-2xl xl:text-2xl mb-5`}
              >
                Postgraduate Institute for Medicine
              </p>
              <p
                className={`${robotoop.className} text-white text-xl sm:text-2xl xl:text-2xl px-4 sm:px-8`}
              >
                12 Contact Hours
              </p>
              <p
                className={`${robotoop.className} text-white text-xl sm:text-2xl xl:text-2xl px-4 sm:px-8`}
              >
                Earn 1 CME per Lesson
              </p>
              <p
                className={`${robotoop.className} text-white text-xl sm:text-2xl xl:text-2xl px-4 sm:px-8`}
              >
                Earn up to 12 CMEs
              </p>
            </div>

            {/* Logo and Button */}
            <div className="flex justify-center items-center gap-6 mt-4">
              {/* <div className="relative h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] lg:h-[100px] lg:w-[100px]">
                <Image
                  src="/assets/home-1.png"
                  alt="PIM Accreditation"
                  fill
                  className="object-cover"
                />
              </div> */}
              <button
                onClick={() =>
                  window.open(
                  "https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/PIM+Accrediation+Info-Walking-Wise-eLearning/content/index.html?version=20250930165120",
                    "_blank"
                  )
                }
                className={`bg-[#1C4675] hover:bg-[#2e3e4f] text-white px-6 sm:px-10 py-4 text-base sm:text-xl rounded-3xl transition-colors ${robotoopo.className}`}
              >
                PIM Issued CMEs/CEs
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PartOne;
