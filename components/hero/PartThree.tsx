"use client";
import { roboto, robotoopo } from "../../public/fonts/Fonts";
import Image from "next/image";

const LogoItem = ({
  src,
  alt,
  text,
  textColor,
  link,
}: {
  src: string;
  alt: string;
  text: string;
  textColor: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[100px] sm:h-[100px] w-[100px] sm:w-[100px]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <a
        className={`${roboto.className} mt-2 text-center sm:text-xl underline`}
        style={{ color: textColor }}
        href={link}
        target="_blank"
      >
        {text}
      </a>
    </div>
  );
};

const PartThree = () => {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-6     gap-5  items-start  px-4 sm:px-20 py-10 lg:py-32">
      {/* Text Content */}
      <div className="text-[#303030] 
      col-span-2 col-start-1 row-span-1
      md:col-span-5 md:col-start-1 md:row-span-3
      justify-center items-center w-full lg:w-auto">
        <h1 className="text-4xl sm:text-6xl px-4 max-w-4xl sm:px-8 text-left lg:text-center mb-2">
          Postgraduate Institute for Medicine & Academy of Forensic Nursing
        </h1>

        {[
          "Walking Wise has developed evidence-based education for adults and adolescents in collaboration with survivor leaders and advocacy experts, to help deliver content that is sensitive to the effects of trauma.",
          "Our online course is accredited for Continuing Education (CME/CE) credits by the Postgraduate Institute for Medicine (PIM) and the Academy of Forensic Nursing (AFN).",
        ].map((paragraph, index) => (
          <p
            key={index}
            className={`${
              robotoopo.className
            } tracking-wide md:leading-7 lg:leading-12 text-left lg:text-center mb-2 text-xl sm:text-3xl px-4 sm:px-8 mt-4 sm:mt-${
              index === 0 ? "15" : "5"
            } text-center lg:text-left`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Logo Images */}
        <div className="
        col-span-1 col-start-1 row-span-1
        md:col-span-1 md:col-start-6 md:row-span-1
         items-center ">
          <LogoItem
            src="/assets/home-1.png"
            alt="Logo"
            text="PIM Accreditation"
            textColor="rgb(27, 68, 116)"
            link="https://walking-wise-12-part-course.s3.us-east-1.amazonaws.com/PIM+Accrediation+Info-Walking-Wise-eLearning/content/index.html?version=20251011"
          />
          
        </div>
        <div className="
        col-span-1 col-start-2 row-span-1
        md:col-span-1 md:col-start-6 md:row-span-1
         items-center ">
          <LogoItem
            src="/assets/home-2.png"
            alt="Logo"
            text="AFN Partnership"
            textColor="rgb(86, 1, 119)"
            link="https://www.goafn.org/news-1/afn-and-walking-wise-help-schools-build-an-anti-sex-trafficking-culture"
          />
        </div>
        <div className="
        col-span-2 col-start-1 row-span-1
        md:col-span-1 md:col-start-6 md:row-span-1
        items-center 
        ">
         <button
            onClick={() =>
              (window.location.href =
                "/adult-education")
            }
            className={`bg-[#9d1be3] ${roboto.className} block mx-auto mt-4 rounded-full text-sm sm:text-[16px] py-2 sm:py-3 px-4 text-white flex items-center whitespace-nowrap`}
          >
            Online Course for Adults
          </button>
        </div>
      
    </div>
    </>
  );
};

export default PartThree;
