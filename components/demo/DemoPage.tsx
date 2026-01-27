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

const resourceItems = [
  {
    title: "",
    description:
      "Evaluate Walking Wise’s instructional approach across all 12 curriculum topics.",
  },
  {
    title: "",
    description:
      "Provide a professional learning overview for staff, educators, and parent groups.",
  },
  {
    title: "",
    description:
      "Deliver an introductory, age-appropriate classroom presentation for middle and high school students.",
  },
];

const demoContent = [
  {
    title: "Online Course",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Adult_Online_Learning.png",
    link: "https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/WW-1-Myths-Reality-Course/content/index.html",
  },
  {
    title: "Animated Video",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Animated_Videos.png",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Videos-Animation/Videos+-+Website+Animation/Video-Myths_and_Reality-4-1-2025.mp4",
  },
  {
    title: "Lesson Plan",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Education_Guide.png",
    objectClass: "!object-scale-down",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/PDFs_Guildes_OtherDocs/DEMO_Lesson-Myths_Reality_Walking-Wise.pdf",
  },
  {
    title: "Class Presentation",
    subtitle: "",
    image:
      "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website_Dashboard-Education_PDFs_and_Icons/Icons+for+Website/Icon-Classroom_Presentations.png",
    link: "https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Classroom+Presentation+Assets/Classroom+PowerPoint+Presentations/PowerPoint-Myths%2BReality_WalkingWise-2026.pptx",
  },
];

const DemoPage = () => {
  return (
    <>
      <PageBanner
        title="Curriculum Demo"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/DEMO_300dpi_1200x511_TEXT.jpg"
        altText="Walking Wise Education Demo"
      />

      <Section bgColor="white">
        <div className="w-full flex justify-end hidden md:block">
          <div className="bg-[#36c5d8] md:w-[510px] md:h-[510px] p-4 border-t-3 border-white rounded-full flex flex-col justify-center items-center text-center text-[#303030] mx-auto md:absolute md:right-[7%] z-50 md:mt-[-450px]">
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8 md:mt-12`}
            >
              “The sheep pretend the
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              wolf will never come,
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              but the sheepdog is
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              prepared and waiting
            </p>
            <p
              className={`${robotoItalic.className} text-sm sm:text-2xl md:text-4xl px-4 sm:px-8`}
            >
              for that day.”
            </p>
            <div>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl mt-8`}
              >
                Retired Lieutenant Colonel
              </p>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}
              >
                Dave Grossman,
              </p>
              <p
                className={`${robotoItalicop.className} text-white px-9 text-sm sm:text-xl md:text-2xl`}
              >
                U.S. Army
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeaderText className="mb-4">
            on-demand education
          </SectionHeaderText>
          <p
          className={`${robotoopo.className} text-base text-base  text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-8 sm:mb-10`}
        >
          Walking Wise provides evidence-informed education that equips educators and prevention professionals to address sexual exploitation with confidence and care.
          </p>
                   <p
          className={`${robotoopo.className} text-base text-base  text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-8 sm:mb-10`}
        >

           Districts and organizations are invited to explore <strong><i>Myths & Reality</i></strong>, the first lesson in the Walking Wise curriculum, as a complimentary demonstration of how all 12 instructional topics are presented.
Participants may complete the adult learning module to earn 1 CE/CME credit and preview the animated video, lesson plan, and classroom presentation to evaluate instructional quality, age appropriateness, and trauma-informed design. 
          </p>
        </div>
      </Section>

      <Section bgColor="[#00c1d5]" className="md:pb-32">
        <div className="flex justify-between flex-wrap">
          <h1 className="text-4xl sm:text-6xl text-[#303030]">
            Pilot the Curriculum
          </h1>
        </div>

        <p
          className={`${robotoopo.className} text-base text-base  text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-8 sm:mb-10`}
        >
         School districts and nonprofit organizations may pilot the <strong><i>Myths & Reality</i></strong> lesson to assess alignment with district goals, student needs, and prevention priorities.
This lesson may be used to:
        </p>

        <ul className="list-disc sm:ms-12 pb-[20]">
          {resourceItems.map(({ title, description }, index) => (
            <li
              key={index}
              className={`${robotoopo.className} text-[#303030] text-base 
              text-xl sm:text-2xl md:text-3xl
              mt-4 sm:mt-6 ms-6 md:ms-2`}
            >
              <span className={`text-white text-bold ${roboto.className}`}>
                {title}
              </span>{" "}
              {description}
            </li>
          ))}
        </ul>
       <p
          className={`${robotoopo.className} text-base text-base  text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-8 sm:mb-10`}
        >
       Piloting Myths & Reality allows districts to experience the structure, tone, and educational outcomes of Walking Wise before 
        <a href="https://www.walkingwise.com/implementation" target="_blank">implementation</a>
                                                                                                                                     .
       </p>
      </Section>

      <div className="bg-[#303030] flex justify-center py-4 lg:py-14">
        <SectionHeaderText className={`text-white lg:text-7xl`}>
          Lesson #1: Myths & Reality
        </SectionHeaderText>
      </div>
      <Section bgColor="white" className="lg:py-18 lg:pb-32">
        <div className="relative">
          {/* Demo Badge */}

          {/* Demo Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 md:mt-10">
            {demoContent.map(({ title, image, objectClass = "", link }, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square w-full h-auto max-w-[400px]"
                >
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-contain rounded-lg ${objectClass}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                </a>

                <Button
                  onClick={() => window.open(link, "_blank")}
                  bgColor="[#303030]"
                  className="md:mt-4 w-[170px] md:w-[250px] md:w-full max-w-[250px] md:min-h-[70px]"
                >
                  {title}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="bg-[#303030] grid grid-cols-1 md:grid-cols-12 items-center justify-center py-5 md:py-4 lg:py-10">
        <div className="text-white 
        col-span-1 col-start-1 row-span-1
        md:col-span-8 md:col-start-3 md:row-span-1
        text-xl sm:text-2xl md:text-3xl 
        text-center md:text-center
        px-[7vw]
        py-[]
        ">
          <a
            href="https://calendly.com/karla-highman-walkingwise/30min?back=1&amp;month=2025-07"
            target="_blank"
            className="underline"
          >
            Schedule
          </a>{" "}
          a platform tour today to discover how Walking Wise can support your
          organization's education initiatives.
          </div>
          
          <div 
           
           className="
           pr-[10px]
            col-span-1 col-start-1 row-span-1
            md:col-span-4 md:col-start-3 md:row-span-1
            justify-center items-center h-full ">
          <button
           
            onClick={() => (window.location.href = "https://learn.walkingwise.com/enroll/3486696?price_id=4408602")}
            className={`bg-[#9d1be3] ${roboto.className} block mx-auto mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-4 text-white flex 
            justify-center min-w-[240]
            whitespace-nowrap 
            text-center lg:float-right md:float-right `}
          >
            {"Start Adult Course"}
          </button>
          </div>
          <div className="

            col-span-1 col-start-1 row-span-1
            md:col-span-4 md:col-start-7 md:row-span-1
            justify-center items-center h-full ">

          <button
           
            onClick={() => (window.location.href = "/pricing-youth-curriculum")}
            className={`bg-[#9d1be3] ${roboto.className} block mx-auto mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-4 text-white flex items-center whitespace-nowrap 
            text-center lg:float-left md:float-left `}
          >
            {"Youth Curriculum Enrollment"}
          </button>
        </div>
      </div>

    </>
  );
};

export default DemoPage;
