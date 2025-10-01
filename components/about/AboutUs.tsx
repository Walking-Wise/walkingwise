"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";

const imageData = [
  {
    src: "/assets/about-2.png",
    name: " Bekah Charleston, MA",
    title: " Survivor: Bekah Speaks Out",
    link: "https://www.bekahspeaksout.com/",
  },
  {
    src: "/assets/about-3.png",
    name: " Jon Ferry",
    title: " Survivor & Advocate",
    link: null,
  },
  {
    src: "/assets/about-4.png",
    name: " Jasmine Myers, MS",
    title: " Survivor & Advisor",
    link: null,
  },
  {
    src: "/assets/about-5.png",
    name: " Carissa Phelps, JD/MBA, Esq.",
    title: " Survivor: RunawayGirl",
    link: "https://runawaygirl.com/",
  },
  {
    src: "/assets/about-6.png",
    name: " Kathy Chen, MS",
    title: " Trafficking Advocacy Expert",
    link: null,
  },
  {
    src: "/assets/about-7.png",
    name: "Rachel Fischer, BSN, RN, SANE-A, SANE-P",
    title: " Survivor: Legal RN Consult",
    link: "https://legalrnconsult.org/",
  },
  {
    src: "/assets/about-8.png",
    name: " Catie Reay, Survivor",
    title: " TikTok Infl., A Voice for Her",
    link: "https://yellowstonevalleywoman.com/a-voice-for-her",
  },
  {
    src: "/assets/about-9.png",
    name: " Forrest Lang, Survivor ",
    title: "Author: Angel Blue",
    link: "https://angelbluebook.com/",
  },
  {
    src: "/assets/about-10.png",
    name: " Myra Strand, MA, CA",
    title: " Strand2 Squared Solutions",
    link: "https://strandsquared.com/",
  },
  {
    src: "/assets/about-11.png",
    name: " Dr. Christi Scott Bartman",
    title: " Eyes Up Appalachia",
    link: "https://www.eyesupappalachia.org/",
  },
  {
    src: "/assets/about-12.png",
    name: " Melina Highman",
    title: " Survivor & Advocate",
    link: null,
  },
  {
    src: "/assets/about-13.png",
    name: " Angela Rae Clark, Survivor",
    title: " Love Yourself More Coaching",
    link: null,
  },
  {
    src: "/assets/about-17.png",
    name: " Jennifer",
    title: " Survivor & Advisor",
    link: null,
  },
  {
    src: "/assets/about-15.png",
    name: " Russell Strand, SSA (Ret)",
    title: " Strand2 Squared Solutions",
    link: "https://strandsquared.com/",
  },
  {
    src: "/assets/about-16.png",
    name: " Leah Helmbrecht, BSN, RN",
    title: " Host: NurseConverse",
    link: "https://podcasts.apple.com/us/podcast/nurse-converse-presented-by-nurse-org/id1724443873",
  },
];

const descriptionTexts = [
  "Over 60 experts, including forensic nurses, social workers, law enforcement, educators, and survivors, guided the development of the Walking Wise education program.",
  "Collaborating with 17 inspiring survivors, Walking Wise developed trauma-sensitive education shaped by their invaluable insights. Our online course for adults features exclusive interviews with survivor leaders and advocacy experts (pictured below), providing powerful firsthand perspectives.",
];

const AboutUs = () => {
  const router = useRouter();

  return (
    <>
      <section className="w-full">
        <PageBanner
          title="WALKING WISE MISSION"
          image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/ABOUT_300dpi_1200x511_TEXT.jpg"
          altText="About Us"
        />
        <Section
          bgColor="white"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-0 md:pb-0"
        >
          <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
            <p
              className={`${robotoopo.className} text-[#303030] text-xl sm:text-2xl lg:text-3xl px-5`}
            >
              Our <strong className="font-extrabold">VISION</strong> is to
              interrupt the criminal intentions of sexual predators and sex
              traffickers.
            </p>
          </div>

          <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
            <p
              className={`${robotoopo.className} text-[#303030] text-xl sm:text-2xl lg:text-3xl px-5`}
            >
              Our <strong className="font-extrabold">MISSION</strong> is to
              equip adults to educate young people about the commercial sex
              trade.
            </p>
          </div>

          <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
            <p
              className={`${robotoopo.className} text-[#303030] text-xl sm:text-2xl lg:text-3xl px-5`}
            >
              We believe <strong className="font-extrabold">KNOWLEDGE</strong>{" "}
              serves as a powerful defense against manipulation and
              intimidation.
            </p>
          </div>

          <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
            <p
              className={`${robotoopo.className} text-[#303030] text-xl sm:text-2xl lg:text-3xl px-5`}
            >
              Our <strong className="font-extrabold">GOAL</strong> is to empower
              adolescents to recognize the signs of sexual exploitation and
              report it.
            </p>
          </div>
        </Section>

        <Section
          bgColor="white"
          className="mb-8 md:mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-start md:gap-8"
        >
          <div className="w-full">
            <SectionHeaderText className="mb-6">How We Began</SectionHeaderText>
            <div className="space-y-4">
              <BodyText className={`md:pe-10 mb-6`}>
                Walking Wise
                <span className="text-sm relative -top-3">&reg; </span>
                was born from a deeply personal experience that compelled
                Founder Karla Highman to take action. While traveling, Karla and
                friends were followed by a suspicious man who seemed fixated on
                her young companion. His behavior eerily resembled known human
                trafficking tactics used in that region at the time.
              </BodyText>
              <BodyText className={`md:pe-10`}>
                Fortunately, this young female was traveling with two vigilant
                mothers whose instincts and quick action stopped the man's
                pursuit. However, Karla was left haunted by the thought of how
                different the outcome might have been if this vulnerable girl
                had been alone or with young friends. The chilling experience
                fueled Karla's passion to create a program that equips adults to
                educate children about sexual predators and human traffickers,
                fostering awareness and self-protection.
              </BodyText>
            </div>
          </div>

          <div className="flex flex-col items-center w-full lg:w-auto md:mt-[20px]">
            <div className="relative w-[250px] sm:w-[300px] h-[400px] sm:h-[300px]">
              <Image
                src="/assets/about-1.png"
                alt="Karla Highman, Founder of Walking Wise"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p
              className={`${robotoop.className} mt-4 text-center text-[#303030] sm:text-lg`}
            >
              Karla Highman, Founder <br />
              Walking Wise
              
            </p>
            <Button
              className={`mt-10`}
              onClick={() => window.open("https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PDFs_Guildes_OtherDocs/About_Walking_Wise-and-Founder_Karla_Highman.pdf")}
            >
             My Story, Our Mission
            </Button>
          </div>
        </Section>
      </section>

      <Section bgColor="[#303030]" className="w-full">
        <SectionHeaderText className="mb-6 sm:mb-10 text-white">
          Our Contributors
        </SectionHeaderText>

        <div className="space-y-6 sm:space-y-10">
          {descriptionTexts.map((text, index) => (
            <BodyText key={index} className={`text-white`}>
              {text}
            </BodyText>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 gap-6 sm:gap-10">
          <BodyText className={`text-white flex-1`}>
            Explore their journeys through their interview introductions and
            biographies.
          </BodyText>

          <a
            href="https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/Introduction-Biographies-Walking-Wise-eLearning/content/index.html"
            target="_blank"
            className={`${roboto.className} text-lg bg-purple-600 text-white px-6 sm:px-8 py-2 rounded-full hover:bg-purple-700 transition-colors w-full sm:w-[250px] text-center`}
          >
            Introductions & Biographies
          </a>
        </div>
      </Section>

      <div className="mt-10 md:mt-32 mb-20 mx-auto max-w-[2000px]">
        <SectionHeaderText className="text-[#303030] text-2xl sm:text-6xl text-center">
          Guided by Experience: Survivor Leaders and Advocacy Experts
        </SectionHeaderText>

        <div className="w-full text-[#303030] px-4 sm:px-24 py-10 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {imageData.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-[100%] h-[350px] sm:w-[100%] sm:h-[350px]">
                  <Image
                    src={person.src}
                    alt={`${person.name}, ${person.title}`}
                    fill
                    className="object-contain"
                    priority={index < 5}
                  />
                </div>
                <p
                  className={`${roboto.className} mt-4 text-center text-base sm:text-lg`}
                >
                  {person.name} <br />
                  {person.link ? (
                    <a
                      href={person.link}
                      target="_blank"
                      className={`${roboto.className} underline`}
                    >
                      {person.title}
                    </a>
                  ) : (
                    <span className={`${roboto.className}`}>
                      {person.title}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section
        bgColor="[#00c1d5]"
        className="justify-center items-center gap-5 sm:gap-8 text-center"
      >
        <h1 className="text-[#303030] text-5xl sm:text-7xl px-4 sm:px-10">
          We Invite You to Join our Walking Wise Community!
        </h1>
        <BodyText className="mt-2">
          As a self-funded organization, your subscription is vital in
          supporting our mission. A portion of Walking Wise's profits goes
          toward survivor-focused programs. We encourage our subscribers to
          support local advocacy groups dedicated to survivor recovery and care.
        </BodyText>
      </Section>
    </>
  );
};

export default AboutUs;
