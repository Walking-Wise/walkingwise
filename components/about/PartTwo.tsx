import React from "react";
import Image from "next/image";
import { robotoop, roboto, robotoopo } from "../../public/fonts/Fonts";

const imageData = [
  {
    src: "/assets/about-2.png",
    name: " Bekah Charleston, MA",
    title: " Survivor: Bekah Speaks Out",
  },
  {
    src: "/assets/about-3.png",
    name: " Jon Ferry",
    title: " Survivor Advocate",
  },
  {
    src: "/assets/about-4.png",
    name: " Jasmine Myers, MS",
    title: " Survivor & Advisor",
  },
  {
    src: "/assets/about-5.png",
    name: " Carissa Phelps, JD/MBA, Esq.",
    title: " Survivor: RunawayGirl",
  },
  {
    src: "/assets/about-6.png",
    name: " Kathy Chen, MS",
    title: " Trafficking Advocacy Expert",
  },
  {
    src: "/assets/about-7.png",
    name: "Rachel Fischer, BSN, RN,SANE-A, SANE-P",
    title: " Survivor: Legal RN Consult",
  },
  {
    src: "/assets/about-8.png",
    name: " Catie Reay, Survivor",
    title: " TikTok Infl., A Voice for Her",
  },
  {
    src: "/assets/about-9.png",
    name: " Forrest Lang, Survivor ",
    title: "Author: Angel Blue",
  },
  {
    src: "/assets/about-10.png",
    name: " Myra Strand, MA, CA",
    title: " Strand2 Squared Solutions",
  },
  {
    src: "/assets/about-11.png",
    name: " Dr. Christi Scott Bartman",
    title: " Eyes Up Appalachia",
  },
  {
    src: "/assets/about-12.png",
    name: " Melina Highman",
    title: " Survivor Advocate",
  },
  {
    src: "/assets/about-13.png",
    name: " Angela Rae Clark, Survivor",
    title: " Love Yourself More Coaching",
  },
  {
    src: "/assets/about-17.png",
    name: " Jennifer",
    title: " Survivor & Advisor",
  },
  {
    src: "/assets/about-15.png",
    name: " Russell Strand, SSA (Ret)",
    title: " Strand2 Squared Solutions",
  },
  {
    src: "/assets/about-16.png",
    name: " Leah Helmbrecht, BSN, RN",
    title: " Host: NurseConverse",
  },
];

const descriptionTexts = [
  "Over 60 experts, including forensic nurses, social workers, law enforcement, educators, and survivors, guided the development of the Walking Wise education program.",
  "Collaborating with 17 inspiring survivors, Walking Wise developed trauma-sensitive education shaped by their invaluable insights. Our online course for adults features exclusive interviews with survivor leaders and advocacy experts (pictured below), providing powerful firsthand perspectives.",
];

const PartTwo = () => {
  return (
    <>
      {/* Contributors Section */}
      <div className="bg-[#303030] w-full mt-10 py-32 px-5 md:px-32">
        <div className="mx-auto">
          <h1 className="text-4xl sm:text-6xl text-white mb-6 sm:mb-10">
            Our Contributors
          </h1>

          <div className="space-y-6 sm:space-y-10">
            {descriptionTexts.map((text, index) => (
              <p
                key={index}
                className={`${robotoopo.className} text-xl sm:text-3xl text-white`}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 gap-6 sm:gap-10">
            <p
              className={`${robotoopo.className} text-xl sm:text-3xl text-white flex-1`}
            >
              Explore their journies through their interview introductions and
              biographies.
            </p>

            <a
              href="https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/Introduction-Biographies-Walking-Wise-eLearning/content/index.html"
              target="_blank"
              className={`${roboto.className} bg-purple-600 text-white px-6 sm:px-8 py-2 rounded-full hover:bg-purple-700 transition-colors w-full sm:w-[250px] text-center`}
            >
              Introductions & Biographies
            </a>
          </div>
        </div>
      </div>

      {/* Survivor Leaders Section */}
      <div className="mt-32 mb-20">
        <h1 className="text-[#303030] text-2xl sm:text-6xl text-center md:px-20">
          Guided by Experience: Survivor Leaders and Advocacy Experts
        </h1>

        <div className="w-full text-[#303030] px-4 sm:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {imageData.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-[200px] h-[250px] sm:w-[350px] sm:h-[350px]">
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
                  <span className={`${roboto.className} underline`}>
                    {person.title}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community CTA Section */}
      <div className="flex flex-col justify-center items-center gap-5 sm:gap-8 lg:text-center px-6 sm:px-14 bg-[#00c1d5] py-32">
        <h1 className="text-[#303030] text-5xl sm:text-7xl px-4 sm:px-10">
          We Invite You to Join our Walking Wise Community!
        </h1>
        <p
          className={`${robotoopo.className} mt-2 lg:text-center text-[#303030] text-lg sm:text-2xl lg:text-4xl px-4 sm:px-6 tracking-wide leading-relaxed`}
        >
          As a self-funded organization, your subscription is vital in
          supporting our mission. A portion of Walking Wise's profits goes
          toward survivor-focused programs. We encourage our subscribers to
          support local advocacy groups dedicated to survivor recovery and care.
        </p>
      </div>
    </>
  );
};

export default PartTwo;
