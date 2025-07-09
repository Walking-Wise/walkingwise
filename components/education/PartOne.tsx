"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  robotoopo,
  robotoItalic,
  robotoItalicop,
} from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";

const PartOne = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/videos");
  };

  return (
    <section className="w-full">
      <PageBanner
        title="PARENT GUIDED"
        image="/assets/EDUCATION.jpg"
        altText="Parent guide"
      />

      {/* Parent Engagement Section */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26 flex flex-col xl:flex-row items-center md:gap-24 pb-12 md:pb-16">
        <div className="mt-12 max-w-3xl">
          <SectionHeaderText>Parent & Caregiver Engagement</SectionHeaderText>
          <BodyText className="mt-4">
            Walking Wise<span className="text-sm relative -top-3">&reg;</span>{" "}
            encourages parents, grandparents, and other caregivers to take
            charge of their child’s education. It’s Walking Wise’s mission to
            help you hold candid conversations about sexual exploitation and
            abuse. The goal is for your child to recognize unsafe adult
            behaviors and come to you for guidance and protection.
          </BodyText>
        </div>

        {/* Quote Box */}
        <div className="bg-[#00c1d5] w-[350px] sm:min-w-[400px] lg:min-w-[500px] h-[350px] sm:h-[400px] lg:h-[500px] me-0 sm:me-10 p-4 border-4 xl:mt-[-30] border-white rounded-full text-[#303030] flex flex-col justify-center items-center text-center z-50">
          <p
            className={`${robotoItalic.className} text-lg  sm:text-3xl text-[#303030] px-15 mt-6 mb-6`}
          >
            “Upon completing the Unsafe Adult, Grooming, and Sextortion lessons,
            my granddaughter said,
          </p>
          <h1 className={`capitalize text-md mt-3 sm:text-3xl px-15 mb-4`}>
            ‘I bet I’m the only kid who knows this stuff in my entire school!’”
          </h1>
          <span
            className={`${robotoItalic.className} text-[#303030] block mt-4 sm:text-2xl text-white`}
          >
            Engaged Grandmother
          </span>
        </div>
      </div>

      {/* Curriculum Info Section */}

      <Section bgColor="[#303030]" className="md:pb-30">
        <SectionHeaderText className="text-white">
          Moving Beyond Stranger Danger
        </SectionHeaderText>

        <div className="mt-6 sm:mt-8 md:mt-10 space-y-10">
          <BodyText className="text-white">
            The concept of "Stranger Danger" is no longer widely promoted
            because it can create a false sense of security and does not reflect
            the modern realities of child exploitation and abuse. Research shows
            that most predators are not strangers but rather individuals the
            child knows and trusts—such as family members, friends, and
            authority figures.
          </BodyText>

          <BodyText className="text-white">
            Today's approach focuses on empowerment through education, teaching
            children to recognize unsafe behaviors rather than fearing
            unfamiliar faces. By fostering open conversations, developing
            critical thinking skills, and encouraging kids to trust their
            instincts, we help them identify and respond to potential dangers
            more confidently.
          </BodyText>

          <BodyText className="text-white">
            This shift ensures that children feel empowered to speak up, seek
            help, and understand that everyone—not just strangers— must respect
            their boundaries.
          </BodyText>
        </div>
      </Section>
    </section>
  );
};

export default PartOne;
