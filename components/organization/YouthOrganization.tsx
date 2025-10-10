"use client";
import React from "react";
import {
  robotoItalic,
  robotoItalicop,
  robotoopo,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Section from "../ui/Section/Section";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";

const mentorRoles = [
  "Social Workers",
  "Case Managers",
  "Scout Leaders",
  "Youth Group Leaders",
  "Sunday School Leaders",
  "Teen Leadership Coaches",
  "Athletic Coaches",
  "Arts Instructors",
];

const saferEnvParagraphs = [
  `It is well known that sexual predators actively seek out environments where children and teenagers gather, often using deception and manipulation to gain trust and blend in unnoticed.`,
  `Well-run organizations can still be infiltrated by pedophiles or sex traffickers who deliberately target youth-centered communities. Schools, churches, sports teams, social clubs, and other youth-oriented spaces are frequent targets, making vigilance, training, and proactive safety measures essential.`,
];

const YouthOrganization = () => {
  return (
    <>
      <PageBanner
        title="COMBATTING EXPLOITATION"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/YOUTHORGANIZATIONS_300dpi_1200x511_TEXT.jpg"
        altText="Youth organizations"
      />
      <Section
        bgColor="white"
        className="xl:flex-row items-center md:gap-24 pb-12 md:pb-16 lg:pb-16 py-0 md:py-0 lg:py-0"
      >
        <div className="md:mt-12">
          <SectionHeaderText className="mb-6">Youth Leaders</SectionHeaderText>
          <BodyText>
            Mentors play a crucial role in shaping young people’s lives,
            offering guidance, encouragement, and support as they navigate
            social, emotional, and family challenges.
          </BodyText>
          <BodyText className={`mt-6`}>
            Many survivor leaders who shared their experiences with Walking Wise
            <span className="text-sm relative -top-3">&reg;</span> spoke about
            the “one” trusted adult who made them feel valued, crediting that
            support as a key factor in their resilience and ability to overcome
            the impact of sexual exploitation.
          </BodyText>
        </div>

        <div className="bg-[#00c1d5] w-[300px] h-[300px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-4 pt-8 me-0 sm:me-10 border-4 xl:mt-[-30] border-white rounded-full flex flex-col justify-center items-center text-center text-white z-50">
          <h1
            className={`text-white text-2xl xl:text-6xl mb-2 md:mb-4 px-4 sm:px-8`}
          >
            YOUTH MENTORS
          </h1>

          {mentorRoles.map((role, idx) => (
            <p
              key={idx}
              className={`${robotoItalicop.className} text-sm sm:text-xl xl:text-3xl px-4 sm:px-8 mb-1 text-[#303030]`}
            >
              {role}
            </p>
          ))}
        </div>
      </Section>

      {/* Safer Environments Section */}
      <div className="w-full bg-[#303030]">
        <div className="max-w-[2000px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center gap-16 py-16 md:py-26">
          <div className="bg-white w-[350px] h-[350px] sm:min-w-[400px] sm:h-[400px] xl:min-w-[550px] xl:h-[550px] p-10 rounded-full flex flex-col justify-center items-center text-center pt-16 text-[#303030]">
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              “Educating our children
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              about the dangers they face
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              in today’s world is crucial to
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              protecting their innocence.
            </p>
            <p
              className={`${robotoItalic.className} text-md md:text-3xl mt-2 md:mt-8`}
            >
              Walking Wise is the most engaging
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              tool I’ve seen for empowering
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              youth with the knowledge they
            </p>
            <p className={`${robotoItalic.className} text-md md:text-3xl`}>
              need to stay safe.”
            </p>
            <p className={`${robotoItalic.className} text-sm md:text-xl mt-8`}>
              Nate Lewis, Founder & CEO
            </p>
            <a
              className={`${robotoItalic.className} text-sm md:text-xl underline`}
              href="https://theinnocent.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              TheInnocent.org
            </a>
          </div>
          <div className="sm:p-8 md:p-10 text-white">
            <SectionHeaderText color="[#36c5d8]">
              creating safer environments
            </SectionHeaderText>
            {saferEnvParagraphs.map((text, idx) => (
              <BodyText
                key={idx}
                className={`mt-6 sm:mt-8 md:mt-10`}
                color="white"
              >
                {text}
               
              </BodyText>
            ))}
            <div className="flex gap-4 mt-12">

<Button onClick={() => (window.location.href = "/demo")}>
              DEMO Curriculum
            </Button>
            <Button onClick={() => (window.location.href = "/pricing")}>
              ENROLL Today!
            </Button>


    
</div>
          </div>
        </div>
        
      </div>

      <div className="w-full flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 bg-[#3ab6c7] text-[#303030]">
          <div className="w-full flex justify-end">
            <div className="max-w-[900px] w-full p-6 sm:p-8 md:p-24 text-left">
              <SectionHeaderText>prevention strategy</SectionHeaderText>
              <BodyText className={`mt-6`}>
                Education is one of the most powerful tools for prevention, and
                everyone, especially adolescents, should have access to it.
              </BodyText>
              <BodyText className={`mt-6`}>
                Organizations that equip adults and youth with knowledge
                naturally create safer environments, as predators are less
                likely to see the children they serve as vulnerable targets.
              </BodyText>
              <BodyText className={`mt-6`}>
                Walking Wise education is designed for flexible use in
                one-on-one mentoring, small group discussions, or full-scale
                workshops.
              </BodyText>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 bg-white text-[#303030]">
          <div className="w-full flex justify-start">
            <div className="max-w-[900px] w-full p-6 sm:p-8 md:p-24 text-left">
              <SectionHeaderText>anti-trafficking groups</SectionHeaderText>
              <BodyText className={`mt-6`}>
                Our education is designed to compliment the vital work of
                anti-trafficking organizations by streamlining the delivery of
                impactful prevention education.
              </BodyText>
              <BodyText className={`mt-6`}>
                Walking Wise trauma-sensitive and expert-reviewed resources free
                advocacy groups from the costly and time-consuming task of
                content development, allowing them to focus on what they do
                best—building strong community relationships and offering direct
                support.
              </BodyText>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 text-center w-full py-10 md:py-15 bg-[#303030]">
        <div className="max-w-[2000px] mx-auto md:px-26 ">
          <h1 className="text-3xl md:text-6xl tracking-wide leading-8 lg:leading-16 text-white">
            Partnering in the fight against child exploitation
          </h1>
         <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white text-partnering`}>
            Join our Affiliate Program to raise funds for your organization while advancing prevention education in your community. Receive your organization's unique link, share it with others, and help bring life-changing learning to schools and youth networks. 
          
           <div className="flex justify-center items-center py-5 md:py-5 ">
              <Button 
                className=" whitespacebuttonwrap "
                onClick={() => window.open("https://tally.so/r/w459Bo", "_blank")}
                >Apply to Join our Affiliate Program
            </Button>
           </div>
          </BodyText>
            
        </div>
      </div>
    </>
  );
};

export default YouthOrganization;
