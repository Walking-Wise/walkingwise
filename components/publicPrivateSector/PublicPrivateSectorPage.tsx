"use client";
import React from "react";
import Image from "next/image";
import PageBanner from "../ui/PageBanner/PageBanner";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Section from "../ui/Section/Section";
import {
  robotoItalic,
  roboto,
  robotoopo,
  robotoBold,
  robotoItalicop,
} from "../../public/fonts/Fonts";
import Button from "../ui/Button/Button";
import Link from "next/link";

const PublicPrivateSectorPage = () => {
  return (
    <>
      <PageBanner
        title="Public & Private Sector"
        image=""
        altText="Walking Wise Education Demo"
      />

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
            continuing education (CME/CE) credits through the Postgraduate
            Institute for Medicine at no additional cost.
          </BodyText>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                title: "In-House LMS Integration",
                description:
                  "Walking Wise modules seamlessly integrate into corporate Learning Management Systems (LMS), allowing organizations to deliver education efficiently within their existing training platforms. Our SCORM-compliant modules can be uploaded directly into your LMS, ensuring associates have on-demand access to the 12 lesson series.",
                linkText: "Contact us",
                linkHref: "/request-a-quote",
                end: "today for implementation options.",
              },
              {
                title: "ENTERPRISE SUBSCRIPTION",
                description:
                  "For organizations without an LMS, our Enterprise Subscription provides associates with individual login access to the Walking Wise Learning Platform. This flexible, on-demand model allows professionals to complete the lessons at their own pace while meeting compliance and development requirements.",
                linkText: "Schedule",
                linkHref:
                  "https://calendly.com/karla-highman-walkingwise/30min?back=1&amp;month=2025-07",
                end: "a platform tour today to discover how Walking Wise can support your organization’s education initiatives.",
                newPage: true,
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
                  <Link
                    href={box.linkHref}
                    target={box.newPage ? "_blank" : ""}
                    className="underline"
                  >
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

export default PublicPrivateSectorPage;
