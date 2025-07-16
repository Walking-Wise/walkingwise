"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import PageBanner from "../ui/PageBanner/PageBanner";
import {
  robotoopo,
  robotoItalic,
  robotoBold,
  robotoItalicop,
} from "../../public/fonts/Fonts";
import Button from "../ui/Button/Button";

const AnimatedVideos = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videoTitles: Record<
    number,
    { name: string; link: string; thumbnail: string }
  > = {
    1: {
      name: "Myths & Reality",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Myths+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Videos+-+Website+Animation/Video-Myths_and_Reality-4-1-2025.mp4",
    },
    2: {
      name: "Trustworthy vs. Unsafe Adult",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Trustworthy+vs+Unsafe+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Trustworthy_Vs_Unsafe_Adult-1080p-250125.mp4",
    },
    3: {
      name: "Grooming Process",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Grooming+Process+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Grooming_Process_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    4: {
      name: "Pornography Link",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Pornography+Link+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Pornography_Link_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    5: {
      name: "Sextortion Scheme",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Sextortion+Scheme+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Sextortion_Scheme_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    6: {
      name: "Male Victims",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Male+Victims+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Male_Victims_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    7: {
      name: "Runaways as Targets",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Runaways+As+Targets+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Runaways_are_Targets_of_Child_Sex_Traffick-1080p-230618.mp4",
    },
    8: {
      name: "Rural Risks",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Rural+Risks+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Rural_Risks_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    9: {
      name: "Human Traffickers",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Human+Traffickers+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Human+Traffickers_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    10: {
      name: "Female Recruiters",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Female+Recruiter+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Female_Recruiters_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    11: {
      name: "Family Secret",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Family+Secrect+-+Thumbnail.png",
      link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Trailers+-+Website+Animation/Trailer-Family_Secret_of_Child_Sex_Trafficking-1080p-230618.mp4",
    },
    12: {
      name: "Hidden Buyers",
      thumbnail:
        "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Thumbnails+-+Website+Animation/Hidden+Buyers+Coming+Soon+-+Thumbnail.png",
      link: "/assets/videos/hidden-buyers.mp4",
    },
  };

  const handleVideoClick = (num: number) => {
    if (videoTitles[num]?.link) {
      setActiveVideo(num);
    } else {
      alert("Video not available yet.");
    }
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

      <Section
        bgColor="[#303030]"
        className="gap-10 xl:flex-row justify-between items-center xl:items-start"
      >
        <div className="lg:w-4xl md:py-10 text-white md:mt-8">
          <SectionHeaderText color="[#36c5d8]">
            Empowerment through Animation
          </SectionHeaderText>
          <BodyText className="mt-4 sm:mt-6 text-white">
            Walking Wise empowers young people with critical skills to evaluate
            who is trustworthy, swiftly identify a potential online threat, and
            judge when to end something as basic as a conversation or as
            powerful as a relationship.
          </BodyText>

          <SectionHeaderText color="[#36c5d8]" className="mt-16">
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

        <div>
          <div className="bg-[#36c5d8] w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] border-4 border-white rounded-full flex flex-col justify-center items-center text-center text-white p-4 xl:mt-10">
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl text-[#303030]`}
            >
              "I believe the animated
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl text-[#303030]`}
            >
              videos are valuable lessons &
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-xl lg:text-3xl text-[#303030]`}
            >
              non-triggering for at-risk youth.
            </p>
            <h1 className="text-lg sm:text-3xl px-6 my-2 md:my-10 text-[#303030]">
              It's a great concept and easy to teach"
            </h1>
            <p
              className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-2xl`}
            >
              Abby, Advocate
            </p>
            <a
              href="https://gozoe.org/"
              target="_blank"
              className={`${robotoopo.className} text-[#303030] text-sm sm:text-xl lg:text-2xl underline`}
            >
              ZOE International
            </a>
          </div>

          <div className="flex flex-col justify-center items-center mb-10 gap-4 md:mt-8">
            <Button
              onClick={() => (window.location.href = "/demo")}
              className={`mt-13`}
            >
              Demo Curriculum
            </Button>
          </div>
        </div>
      </Section>

      <Section bgColor="[#36c5d8]">
        <div className="flex justify-center items-center flex-col">
          <SectionHeaderText className="lg:text-7xl">
            Walking Wise Animated Video Series
          </SectionHeaderText>
          <BodyText className="mt-4 sm:mt-8 md:text-center md:px-32">
            Watch our video trailers and DEMO video:{" "}
            <span className={`font-bold ${robotoItalicop.className}`}>
              Myths and Reality
            </span>
            .
          </BodyText>
          <BodyText className="md:text-center md:px-32">
            Adults are encouraged to accompany young children throughout the
            learning process.
          </BodyText>
          <BodyText className="md:text-center md:px-32 mt-4">
            Enroll today to unlock our complete animated video series.
          </BodyText>
          <Button
            onClick={() => (window.location.href = "/pricing")}
            className={`mt-8`}
          >
            {"Enroll Today"}
          </Button>
        </div>
      </Section>

      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 max-w-[1800px] mx-auto">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
            <div
              key={num}
              className="group relative max-w-[500px] mx-auto w-full cursor-pointer"
              onClick={() => handleVideoClick(num)}
            >
              <div className="relative max-w-[500px]">
                <Image
                  src={videoTitles[num].thumbnail}
                  alt={`${videoTitles[num].name} thumbnail`}
                  width={400}
                  height={250}
                  className="object-contain w-full h-full"
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
                  {videoTitles[num].name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Dialog
        open={activeVideo !== null}
        onClose={closeModal}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {activeVideo !== null && (
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl p-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {videoTitles[activeVideo]?.name}
            </h2>
            <video
              src={videoTitles[activeVideo]?.link}
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
