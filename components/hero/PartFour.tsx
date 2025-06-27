"use client";

import React from "react";
import { roboto, robotoopo } from "../../public/fonts/Fonts";
import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  imageSrc: StaticImageData | string;
  altText: string;
  buttonText: string;
  description: string;
  link: string;
}

const cardData: CardProps[] = [
  {
    imageSrc: "/assets/home-3.png",
    altText: "Curriculum for Youth",
    buttonText: "Curriculum for Youth",
    description:
      "Walking Wise helps young people develop life skills through age appropriate, interactive lessons and animated explanations.",
    link: "/youth-curriculum",
  },
  {
    imageSrc: "/assets/home-4.png",
    altText: "Youth Organizations",
    buttonText: "Youth Organizations",
    description:
      "As trusted mentors, youth leaders can play a vital role in equipping teens with the knowledge that will help protect them from sexual predators.",
    link: "/youth-organization",
  },
  {
    imageSrc: "/assets/home-5.png",
    altText: "Public & Private Sectors",
    buttonText: "Public & Private Sectors",
    description:
      "Our 12 learning modules can be integrated into a training platform or accessed by associates online via a Walking Wise subscription.",
    link: "/home-education",
  },
];

const Card: React.FC<CardProps> = ({
  imageSrc,
  altText,
  buttonText,
  description,
  link,
}) => {
  const router = useRouter();

  return (
    <div className="w-full lg:w-1/3 flex flex-col items-center max-w-[400px]">
      <div className="relative h-[250px] sm:h-[300px] w-full">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <button
        onClick={() => router.push(link)}
        className={`bg-[#303030] ${roboto.className} mt-5 rounded-full text-sm sm:text-xl py-2 sm:py-3 px-10 text-white flex items-center whitespace-nowrap`}
      >
        {buttonText}
        <i className="bg-white text-black font-bold rounded-full p-1 ml-3 flex items-center justify-center">
          <ChevronRight
            strokeWidth={3}
            className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7"
          />
        </i>
      </button>
      <p
        className={`${robotoopo.className} mt-4   text-sm sm:text-xl lg:text-2xl  text-start`}
      >
        {description}
      </p>
    </div>
  );
};

const PartFour: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#00c1d5" }}>
      <div className="w-full flex flex-wrap text-white justify-center  items-center lg:items-stretch gap-8 px-4 sm:px-10 lg:px-20 py-16">
        {cardData.map((card) => (
          <Card
            key={card.altText}
            imageSrc={card.imageSrc}
            altText={card.altText}
            buttonText={card.buttonText}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PartFour;
