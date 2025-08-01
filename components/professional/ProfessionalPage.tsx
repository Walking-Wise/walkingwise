"use client";
import React from "react";
import Image from "next/image";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import {
  robotoItalic,
  roboto,
  robotoopo,
  robotoBold,
  robotoItalicop,
} from "../../public/fonts/Fonts";
import Section from "../ui/Section/Section";

const ProfessionalPage = () => {
  return (
    <>
      <PageBanner
        title="Curriculum Demo"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/DEMO_300dpi_1200x511_TEXT.jpg"
        altText="Walking Wise Education Demo"
      />
      <Section bgColor="white">
        <SectionHeaderText>Hey</SectionHeaderText>
      </Section>
    </>
  );
};
