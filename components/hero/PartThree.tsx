"use client";
import { roboto, robotoopo } from "../../public/fonts/Fonts";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoItem = ({
  src,
  alt,
  text,
  textColor,
}: {
  src: string;
  alt: string;
  text: string;
  textColor: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[100px] sm:h-[200px] w-[100px] sm:w-[200px]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p
        className={`${roboto.className} mt-2 text-center sm:text-2xl`}
        style={{ color: textColor }}
      >
        {text}
      </p>
    </div>
  );
};

const PartThree = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row max-w-screen-2xl mx-auto justify-evenly  px-4 sm:px-20 py-10 lg:py-20">
      {/* Text Content */}
      <div className="text-[#303030] flex flex-col justify-center items-center w-full lg:w-auto">
        <h1 className="text-4xl sm:text-6xl px-4 max-w-4xl sm:px-8 text-left lg:text-center">
          Postgraduate Institute for Medicine & Academy of Forensic Nursing
        </h1>

        {[
          "Walking Wise has developed evidence-based education for adults and adolescents in collaboration with survivor leaders and advocacy experts, helping to deliver content that is sensitive to the effect of trauma.",
          "Our online course is accredited for Continuing Education (MCE/CE) credits by the Postgraduate Institute for Medicine (PIM) and the Academy of Forensic Nursing (AFN).",
        ].map((paragraph, index) => (
          <p
            key={index}
            className={`${
              robotoopo.className
            } tracking-wide md:leading-7 lg:leading-10  text-left lg:text-center mb-2 text-xl sm:text-3xl px-4 sm:px-8 mt-4 sm:mt-${
              index === 0 ? "15" : "5"
            } text-center lg:text-left`}
          >
            {paragraph}
          </p>
        ))}

        <button
          onClick={() => router.push("/course")}
          className={`bg-[#303030] ${roboto.className} rounded-full text-sm sm:text-lg py-2 sm:py-3 px-6 text-white flex items-center whitespace-nowrap`}
        >
          Online Course for Adults
          <i className="bg-white text-black  font-bold rounded-full p-1 ml-3 flex items-center justify-center">
            <ChevronRight
              strokeWidth={3}
              className="w-4 h-4 sm:w-5  sm:h-5 lg:w-7 lg:h-7"
            />
          </i>
        </button>
      </div>

      {/* Logo Images */}
      <div className="flex flex-row lg:flex-col justify-center items-center gap-6 lg:gap-10 mt-10 lg:mt-0">
        <LogoItem
          src="/assets/home-1.png"
          alt="Logo"
          text="PIM Accreditation"
          textColor="rgb(27, 68, 116)"
        />
        <LogoItem
          src="/assets/home-2.png"
          alt="Logo"
          text="AFN Partnership"
          textColor="rgb(86, 1, 119)"
        />
      </div>
    </div>
  );
};

export default PartThree;
