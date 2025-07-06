"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import PageBanner from "../ui/PageBanner/PageBanner";
import { robotoopo, robotoItalic, robotoBold } from "../../public/fonts/Fonts";

const AnimatedVideos = () => {
  const buttons = ["DEMO Curriculum", "ENROLL Today!"];
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handleRedirect = () => {
    window.location.href = "https://www.walkingwise.com/contact-us-v2/";
  };

  const videoTitles: Record<number, string> = {
    1: "Myths & Reality",
    2: "Trustworthy vs. Unsafe Adult",
    3: "Grooming Process",
    4: "Pornography Link",
    5: "Sextortion Scheme",
    6: "Male Victims",
    7: "Runaways as Targets",
    8: "Rural Risks",
    9: "Human Traffickers",
    10: "Female Recruiters",
    11: "Family Secret",
    12: "Hidden Buyers",
  };

  const handleVideoClick = (num: number) => {
    setActiveVideo(num);
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <PageBanner
        title="Animated Video Series"
        image="/assets/video.png"
        altText="Animated Video Series"
      />

      {/* Explanation Section */}
      <Section bgColor="white">
        <SectionHeaderText>Explanation Animation</SectionHeaderText>
        <BodyText className="mt-4 sm:mt-6">
          Storytelling creates a strong connection with audiences, while visual
          learning enhances comprehension and retention. By combining these
          elements, explainer-style animation becomes a powerful educational
          tool that resonates with both children and adults. Walking Wise
          subscribers receive full access to an animated video series that
          covers 12 key issues related to child exploitation.
        </BodyText>
      </Section>

      {/* Empowerment Section */}
      <Section
        bgColor="[#303030]"
        className="mt-20 gap-10 xl:flex-row justify-between items-center xl:items-start"
      >
        <div className="lg:w-4xl py-10 text-white">
          <SectionHeaderText className="text-[#36c5d8] lg:text-[#36c5d8]">
            Empowerment through Animation
          </SectionHeaderText>
          <BodyText className="mt-4 sm:mt-6 text-white">
            Walking Wise empowers young people with critical skills to evaluate
            who is trustworthy, swiftly identify a potential online threat, and
            judge when to end something as basic as a conversation or as
            powerful as a relationship.
          </BodyText>

          <SectionHeaderText className="text-[#36c5d8] lg:text-[#36c5d8] mt-16">
            Strategic Tactics of Sexual Predators
          </SectionHeaderText>
          <BodyText className="mt-4 sm:mt-6 text-white">
            Understanding that many children experience sexual abuse and
            exploitation, we worked diligently with survivors and advocacy
            experts to produce animated explanations that are sensitive to those
            who have experienced trauma. Each 3-minute video illustrates the
            many tactics predators use to groom and exploit vulnerable children.
          </BodyText>
        </div>

        {/* Quote Box and Buttons */}
        <div>
          <div className="bg-[#36c5d8] w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] border-4 border-white rounded-full flex flex-col justify-center items-center text-center text-white p-4 xl:mt-10">
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl`}
            >
              "The animated videos
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl`}
            >
              are valuable lessons &
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl `}
            >
              non-triggering for at-risk youth.
            </p>
            <h1 className="text-lg sm:text-3xl px-6 my-2 md:my-10 text-[#303030]">
              It's a great concept and easy to teach
            </h1>
            <p
              className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-2xl`}
            >
              Abby, Advocate
            </p>
            <p
              className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-2xl`}
            >
              ZOE International
            </p>
          </div>

          <div className="flex flex-col justify-center items-center mb-10 gap-4">
            {buttons.map((label, idx) => (
              <button
                key={idx}
                onClick={handleRedirect}
                className={`bg-purple-600 hover:bg-purple-700 text-white text-sm sm:px-10 py-2 w-1/2 sm:text-xl mt-4 rounded-4xl transition-colors ${robotoopo.className}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Final Section */}
      <Section bgColor="[#36c5d8]">
        <div className="flex justify-between items-center">
          <SectionHeaderText>
            Walking Wise Animated Video Series
          </SectionHeaderText>
          <div className="h-[50px] w-[50px] pt-[5px] border-[#303030] hidden sm:block text-[#115a64] rounded-full text-xl ps-2 border-5 border-r-transparent">
            11y+
          </div>
        </div>
        <BodyText className="mt-4 sm:mt-6">
          Watch our 12 video trailers or view our sample video: The Myths of
          Child Sex Trafficking.
        </BodyText>
        <BodyText className="text-white mt-4 sm:mt-6">
          NOTE: Adults are encouraged to accompany young children throughout the
          learning process.
        </BodyText>
      </Section>

      {/* Trailers Section */}
      <Section bgColor="white">
        <SectionHeaderText className="text-purple-500 text-center">
          Watch trailers & enroll for the entire video
        </SectionHeaderText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 max-w-[1800px] mx-auto">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
            <div
              key={num}
              className="group relative max-w-[500px] mx-auto w-full cursor-pointer"
              onClick={() => handleVideoClick(num)}
            >
              <div className="relative max-w-[500px]">
                <Image
                  src={`/assets/vid-${num}.png`}
                  alt={`${videoTitles[num]} thumbnail`}
                  width={400}
                  height={250}
                  className="object-contain w-full h-full"
                  quality={85}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className={`bg-[#303030] p-3 sm:p-4 text-white ${robotoBold.className}`}
              >
                <p
                  className={`text-center md:text-2xl sm:text-2xl ${robotoBold.className}`}
                >
                  {videoTitles[num]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Video Modal */}
      <Dialog
        open={activeVideo !== null}
        onClose={closeModal}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {activeVideo && (
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl p-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {videoTitles[activeVideo]}
            </h2>
            <video
              src={`/assets/videos/vid-${activeVideo}.mp4`}
              controls
              className="w-full rounded"
            />
          </div>
        )}
      </Dialog>
    </>
  );
};

export default AnimatedVideos;
