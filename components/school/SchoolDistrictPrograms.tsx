"use client";

import React from "react";
import { roboto, robotoItalic, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";
import Image from "next/image";
import SectionHeaderText from "../ui/SectionHeaderText/SectionHeaderText";
import BodyText from "../ui/BodyText/BodyText";
import Button from "../ui/Button/Button";
import Section from "../ui/Section/Section";



  const listyle1 = {
    paddingLeft: '10px !important',
  };
  const blueboxstyle = {
    paddingLeft: '3vw !important',
  };
  const blackpadding = {
    paddingLeft: '3vw !important',
  };
  const bluetext = { color: '#68d2df', paddingLeft: '3vw !important',};

const cardDataTop = [
  {
    title: "",
    subtitle: "",
    bg: "black",
    features: [
      "HEADERL",
      " ",
      "Walking Wise prevention curriculum helps students understand the grooming process, vulnerability risks, and the predatory behavior of some adults and peers.",
      " ",
      "Rather than presenting all content at once, Walking Wise uses a developmental approach that introduces age-appropriate concepts over five years. ",
      " ",
      "Students receive prevention education annually from grades 6–10, allowing schools to reinforce key safety concepts as students encounter new social, emotional, and digital challenges. ",
      " ",
      "The curriculum consists of 12 lessons delivered through animated videos, classroom presentations, and guided discussions. Schools may teach the lessons during health classes, advisory periods, or as part of other safety or prevention initiatives.",
      " ",
      " ",
      "Recommended Implementation",
      "• Begin with staff and parent education to establish shared understanding and support. ",
      "• Reinforce learning annually from grades 6–10.",
      "• Deliver 2–3 student lessons per year, up to 40 minutes per lesson.",
      "• Adapt discussion depth and activities to meet student maturity levels and local school policies.",
      " ",
      " ",
      "BUTTON1",
      " "
        ],
  

    topics: [
      "Myths & Reality",
      "Trustworthy vs. Unsafe Adult",
      "Grooming Process",
      "Pornography Link",
    ],
    middle: "6th Grade",
    high: "9th Grade",
  },
  {
    title: "5-YEAR TEACHING TRACK",
    subtitle: "Student Instruction: ~8 Hours",
    bg: "blue",
    features: [
      "5-YEAR TEACHING TRACK",
      "Student Instruction: ~8 Hours",
      " ",
      " ",
      "PARENTS & STAFF",
      "#1 Myths & Reality",
      " ",
      "6th GRADE - Grooming",
      "#2 Trustworthy vs. Unsafe Adults",
      "#3 Grooming Process",
      " ",
      "7th GRADE - Online Risks",
      "#4 Pornography & Exploitation",
      "#5 Sextortion Scheme",
      " ",
      "8th GRADE - Vulnerability",
      "#6 Male Victims",
      "#7 Runaways as Targets",
      "#8 Rural Risks",
      " ",
      "9th GRADE - Predators",
      "#9 Human Traffickers",
      "#10 Femail and Peer Recruiters",
      " ",
      "10th GRADE - Hidden Exploitation",
      "#11 Family Secret",
      "#12 Hidden Buyers",
      " ",
      "BUTTON2",
      " ",
      " ",
        ],
    
    topics: [
      "Sextortion Scheme",
      "Male Victims",
      "Runaways as Targets",
      "Rural Risks",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
];
const cardData = [
  {
    title: "THE GROOMERS",
    topics: [
      "#1 Myths & Reality: Parents & Staff",
      "#2 Trustworthy vs. Unsafe Adult: 6th grade",
      "#3 Grooming Process: 6th grade",
      "#4 Pornography Link: 6th grade",
    ],
    middle: "6th Grade",
    high: "9th Grade",
  },
  {
    title: "THE VULNERABLE",
    topics: [
      "#5 Sextortion Scheme: 7th grade",
      "#6 Male Victims: 7th grade",
      "#7 Runaways as Targets: 7th grade",
      "#8 Rural Risks: 7th grade",
    ],
    middle: "7th Grade",
    high: "10th Grade",
  },
  {
    title: "THE PREDATORS",
    topics: [
      "#9 Human Traffickers: 8th grade",
      "#10 Female Recruiters: 8th grade",
      "#11 Family Secret: 8th grade",
      "#12 Hidden Buyers: 8th grade",
    ],
    middle: "8th Grade",
    high: "11th Grade",
  },
];

const SchoolDistrictPrograms = () => {
  return (
    <>
      <PageBanner
        title="SCHOOL EDUCATION"
        image="https://walking-wise-2025-website-assets.s3.us-east-1.amazonaws.com/Website+Hero+Banners+300dpi/SCHOOLPROGRAMS_300dpi_1200x511_TEXT.jpg"
        altText="School and district programs"
      />

      {/* Testimonial + Intro Section */}
      <Section
        bgColor="white"
        className="=flex flex-col xl:flex-row items-center gap-10 md:gap-24"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#303030] text-[#303030] border-2 border-white w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] p-4 rounded-full flex flex-col justify-center items-center text-center z-50">
            <p
              className={`${robotoItalic.className} px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              “Walking Wise
            </p>
            <p
              className={`${robotoItalic.className} px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              offers the best tools I’ve
            </p>
            <p
              className={`${robotoItalic.className} mb-8 px-4 sm:px-8 leading-snug text-xl md:text-3xl text-white`}
            >
              seen for teaching students about sexual exploitation and
              sextortion—without being scary or lewd.”
            </p>
            <span
              className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
            >
              Nigel Hunter, Deputy
            </span>
            <span
              className={`${robotoopo.className} text-white block px-4 sm:px-6 text-[#303030] text-md md:text-2xl`}
            >
              School Resource Officer
            </span>
          </div>
        </div>

        <div className="max-w-[800px] text-[#303030]">
          <SectionHeaderText className="text-4xl sm:text-6xl">
            Sustainable Education
          </SectionHeaderText>
          <BodyText className={`mt-4 sm:mt-6`}>
            Many schools invite guest speakers to address sexual exploitation 11 pwith
            staff, parents, and students. While a presentation can raise
            important awareness, its impact is often short-lived. Walking Wise
            offers a sustainable, school-led solution—empowering school safety
            teams to integrate prevention education into their middle and high
            school curricula over time.
          </BodyText>
          <BodyText className={`mt-4 sm:mt-6`}>
            This ongoing approach helps students build lasting awareness,
            strengthen critical thinking, and develop the skills to recognize
            and resist the manipulative tactics commonly used by sexual
            predators.
          </BodyText>
        </div>
      </Section>

      {/* District Rollout Section is now Adaptable Curriculum*/}
      <div

        className="bg-[#00C1D5] text-[#303030] flex flex-col lg:flex-row gap-10 
        pt-7 md:pt-15 pb-3 md:pb-16 pl-[7vw] pr-[7vw]
        "
       
      >
        {/* Left Content */}
        <div className="flex-1">
           <SectionHeaderText>Adaptable Curriculum</SectionHeaderText>
          <BodyText className={`mt-4 `}>
            Our curriculum is designed for flexibility, enabling educators to tailor materials to align with school policies and protocols, age appropriateness, teaching styles, and available class time. 
          </BodyText>
          
        </div>

        
      </div>

     {/* School Program Rollout is now Learning Journey*/}
      

        
<div

        className="bg-white text-[#303030] flex flex-col lg:flex-row gap-10 
        pt-7 md:pt-15 pb-3 md:pb-16 pl-[7vw] pr-[7vw]
        "
       
      >

      <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5  items-start">
     {cardDataTop.map((card, idx) => (
      <div
       key={idx}
       
       className={`mt-10 flex flex-col relative 

        grid 
                ${
                    card.bg === "black"
                      ? "bg-[#FFFFFF] text-[#303030] "
                      : "bg-[#303030]  text-white "
                  } 
                ${
                    card.bg === "black"
                      ? "col-start-1 md:col-start-1 "
                      : "col-start-1 md:col-start-7"
                  } 
                ${
                    card.bg === "black"
                      ? "col-span-1 md:col-span-6 "
                      : "col-span-1 md:col-span-5 "
                  } 
       `}
      >
       
       
       

       
       <div className="flex-1 mt-4 mb-4  self-start">
        <ul className="space-y-2 text-sm lg:text-md" >
         

         {card.features.map((feature, i) => {
          if  (feature.includes("TRACK"))
           return <li><h1 id={card.title} className="text-4xl sm:text-6xl"style={blackpadding}>{feature}</h1></li>;
          else if  (feature.includes("th GRADE"))
           return <li className="text-xl sm:text-2xl md:text-2xl text-bold italic" style={bluetext} >{feature}</li>;
          else if (feature.includes("#"))
          return <li key={i} className="text-xl sm:text-2xl md:text-3xl" style={blackpadding}>{feature}</li>;
          else if (feature.includes("Student"))
          return <li key={i} className="text-xl sm:text-2xl md:text-3xl" style={blackpadding}>{feature}</li>;
          else if  (feature.includes("PARENTS"))
           return <li className="text-xl sm:text-2xl md:text-2xl text-bold italic" style={bluetext} >{feature}</li>;

          else if  (feature.includes("Recommended Implementations"))
           return <h2 className="text-xl sm:text-2xl md:text-2xl text-bold italic" >{feature}</h2>;
 
          else if  (feature=== "HEADERL")
           return <h1 className="text-3xl sm:text-4xl md:text-6xl text-[#303030]">Learning Journey</h1>;
          
          else if (feature === "BUTTON1")
          return <li className="line-short" ><button type="button" className="bg-[#9d1be3] mx-auto cursor-pointer  text-white  px-6 md:px-10 py-2 md:py-4  rounded-4xl  transition-colors  md:text-lg  whitespace-nowrap  flex items-center justify-center roboto_8d2838e4-module__oXDxdq__className">ENROLL Today!&nbsp;&nbsp;</button>
         </li>;

          else if (feature === "BUTTON2")
          return <li className="line-short" >
         <button type="button" className="bg-[#9d1be3] mx-auto cursor-pointer  text-white  px-6 md:px-10 py-2 md:py-4  rounded-4xl  transition-colors  md:text-lg  whitespace-nowrap  flex items-center justify-center roboto_8d2838e4-module__oXDxdq__className">Teaching Track</button>
         </li>;

          else if (feature === " ")
          return <li className="line-short" >&nbsp;</li>;



          else
          return <li key={i} className="text-xl sm:text-2xl md:text-3xl">{feature}</li>;

         })}
         
         

        </ul>
       </div>

       
      </div>
     ))}
    </div>
        
       </div></div> 


      {/* Safety Teams Section */}

      <div

        className="bg-[#303030]  text-white flex flex-col lg:flex-row gap-10 
        pt-7 md:pt-15 pb-3 md:pb-16 pl-[7vw] pr-[7vw]
        "
       
      >

      <div className="flex-1">

        <SectionHeaderText color="white">School Safety Teams</SectionHeaderText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          In 2021, the U.S. Department of Education provided guidelines for
          implementing human trafficking education and suggested empowering a
          ‘safety team’ to develop and oversee school education as well as
          policies and response protocols for reporting suspected child
          trafficking.
        </BodyText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          Safety teams are recommended to include school counselors, social workers, nurses,
          resource officers, psychologists, principals,
          wellness-focused educators, and members of their local anti-human
          trafficking coalition. With this diverse expertise, these teams are
          well-equipped to provide staff training, raise awareness among parents, and educate students.
        </BodyText>
        <BodyText className={`mt-4 sm:mt-6 text-white lg:text-white`}>
          For more information, please review the guidelines written for the
          U.S. Department of Education, Office of Safe and Supportive Schools,
          called{" "}
          <a
            href="https://www.ed.gov/sites/ed/files/documents/human-trafficking/human-trafficking-americas-schools.pdf"
            target="_blank"
            className="underline"
          >
            Human Trafficking in AMERICA’S SCHOOLS
          </a>
          .
        </BodyText>
        </div></div>

    </>
  );
};

export default SchoolDistrictPrograms;
