"use client";
import { roboto, robotoopo } from "../../public/fonts/Fonts";

type StatCardProps = {
  value: string;
  title: string;
  description: string;
  source1: string;
  source2?: string;
  link1: string;
  link2?: string;
  className?: string;
};

const StatCard = ({
  value,
  title,
  description,
  source1,
  source2,
  link1,
  link2,
}: StatCardProps) => {
  return (
    <div className="bg-[#00C1D5] flex flex-col justify-between items-center text-center h-[370px] w-full max-w-[400px] px-3 py-4">
      <div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl text-[#303030] mt-5">
          {value}
        </h1>
        <p
          className={`${roboto.className} text-[#303030] text-2xl sm:text-3xl`}
        >
          {title}
        </p>
        <p
          className={`${robotoopo.className} text-white text-xl sm:text-2xl px-4 sm:px-7 mt-2`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col">
        <a
          href={link1}
          target="_blank"
          className={`${robotoopo.className} text-mg px-6 underline text-black text-[#303030]`}
        >
          {source1}
        </a>
        {source2 && (
          <a
            href={link2}
            target="_blank"
            className={`${robotoopo.className} text-mg px-6 underline text-black text-[#303030]`}
          >
            {source2}
          </a>
        )}
      </div>
    </div>
  );
};

const PartTwo = () => {
  const statsData = [
    {
      value: "460,000",
      title: "Missing U.S. Children",
      description:
        "~460,000 U.S. children go missing every year, with 19% at risk for sex trafficking.",
      source1: "U.S. Dept. of Justice, 2023",
      source2: "NCMEC Impact Report, 2023",
      maxWidth: "max-w-[220px]",
      link1:
        "https://www.justice.gov/opa/pr/justice-department-observes-national-missing-children-s-day-4",
      link2: "https://www.missingkids.org/ourwork/impact",
    },
    {
      value: "90%",
      title: "Sexual Abuse",
      description:
        "~90% of child victims are sexually abused by someone they know and trust.",
      source1: "Crimes Against Children Research Center",
      link1:
        "https://www.unh.edu/ccrc/sites/default/files/media/2022-03/characteristics-of-crimes-against-juveniles_0.pdf",
    },
    {
      value: "36.2mm",
      title: "Child Sexual Exploitation",
      description:
        "36,210,368 reports were received of suspected child sexual exploitation in 2023.",
      source1: "NCMEC CyberTipline Report, 2023",
      link1: "https://www.missingkids.org/cybertiplinedata",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 px-4 py-10">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            title={stat.title}
            description={stat.description}
            source1={stat.source1}
            source2={stat.source2}
            link1={stat.link1}
            link2={stat.link2}
          />
        ))}
      </div>

      <div className="bg-[#303030] w-full  text-center flex flex-col justify-evenly items-center py-20  px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-[7px] text-[#00C1D5]">
          Knowledge is a Powerful Defense
        </h1>
        <p
          className={`tracking-wider max-w-screen-2xl mx-auto md:leading-7 lg:leading-10  text-xl sm:text-2xl lg:text-3xl text-white max-w-8xl md:px-10 mt-4 ${robotoopo.className}`}
        >
          Our Walking Wise<span className="text-sm relative -top-3">&reg;</span>{" "}
          mission is to equip adults with the knowledge and tools to educate
          young people on 12 critical topics related to sexual abuse and child
          sexual exploitation.
        </p>
      </div>
    </>
  );
};

export default PartTwo;
