"use client";
import Image from "next/image";
import React from "react";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import Button from "../ui/Button/Button";

const PartOne = () => {

  return (
    <>
      <PageBanner
        title="Curriculum for Youth"
        image="/assets/YOUTH.jpg"
        altText="Youth Curriculum"
      />

      <Section bgColor="white">
        <div className="flex justify-between items-center md:pe-12">
          <SectionHeaderText> Youth Education </SectionHeaderText>
          <Image
            src="/assets/11+.png"
            alt="Ages 11 plus"
            width={75}
            height={75}
          />
        </div>
        <BodyText className="mt-4 sm:mt-6">
          The Walking Wise Learning Platform offers engaging, easy-to-teach
          lessons designed for lasting impact on middle and high school youth
          ages 11+. Our curriculum uses multisensory teaching to enhance
          learning, combining technology and storytelling through interactive
          classroom presentations and animated explainer videos.
        </BodyText>
      </Section>

      <Section bgColor="[#00C1D5]" className="lg:flex-row">
        <div className="w-full flex flex-col items-center">
          <div className="relative h-[250px] sm:h-[300px] md:h-[425px] w-[200px] sm:w-[250px] md:w-[325px] mb-6">
            <Image
              src="/assets/youth-1.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <Button
            onClick={() =>
              (window.location.href =
                "https://www.walkingwise.com/contact-us-v2/")
            }
          >
            DEMO Curriculum
          </Button>
        </div>
        <div>
          <SectionHeaderText className="text-white">
            Classroom Presentations
          </SectionHeaderText>
          <BodyText className="mt-4 sm:mt-8">
            Our classroom presentations are designed for student education,
            school staff meetings, and parent events.
          </BodyText>
          <BodyText className="mt-4 sm:mt-8">
            Educators can captivate these diverse audiences using group
            discussions, live polls, word clouds, text responses, interactive
            Q&A, anonymous surveys, and animated videos.
          </BodyText>
          <BodyText className="mt-4 sm:mt-8">
            The presentation topics are typically 45 minutes. Educators are
            encouraged to modify the presentations to be age-appropriate, align
            with school policy, and fit within time schedules.
          </BodyText>
        </div>
      </Section>
    </>
  );
};

export default PartOne;
