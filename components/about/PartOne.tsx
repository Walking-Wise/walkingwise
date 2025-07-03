"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";
import PageBanner from "../ui/PageBanner/PageBanner";

const PartOne = () => {
  const router = useRouter();

  return (
    <section className="w-full">
      <PageBanner
        title="WALKING WISE MISSION"
        image="/assets/ABOUT.jpg"
        altText="About Us"
      />
      <div className="max-w-[1800px] grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px] md:mt-[80px] text-[#303030] mx-auto px-4 md:px-26">
        {/* First Statement */}
        <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5`}
          >
            Our <strong className="font-extrabold">VISION</strong> is to
            interrupt the criminal intentions of sexual predators and sex
            traffickers.
          </p>
        </div>

        {/* Second Statement */}
        <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5`}
          >
            Our <strong className="font-extrabold">MISSION</strong> is to equip
            adults to educate young people about the commercial sex industry.
          </p>
        </div>

        {/* Third Statement */}
        <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5`}
          >
            We believe <strong className="font-extrabold">KNOWLEDGE</strong>{" "}
            serves as a powerful defense against manipulation and intimidation.
          </p>
        </div>

        {/* Fourth Statement */}
        <div className="bg-[#A4E4EB] min-h-[150px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5`}
          >
            Our <strong className="font-extrabold">GOAL</strong> is to empower
            adolescents to recognize the signs of sexual exploitation and report
            it.
          </p>
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="text-[#303030] max-w-[1800px] mx-auto mt-4 md:mt-20 mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:ps-26 sm:pe-26 py-10 md:gap-8">
        {/* Founder Story Text */}
        <div className="w-full">
          <h1 className="text-5xl sm:text-5xl text-[#303030] tracking-normal mb-6">
            How We Began
          </h1>
          <div className="space-y-4 text-base sm:text-lg">
            <p
              className={`${robotoopo.className} text-xl sm:text-2xl lg:text-2xl md:pe-10 mb-6 tracking-wide lg:leading-10`}
            >
              Walking Wise
              <span className="text-sm relative -top-3">&reg; </span>
              was born from a deeply personal experience that compelled Founder
              Karla Highman to take action. While traveling, Karla and friends
              were followed by a suspicious man who seemed fixated on her young
              companion. His behavior eerily resembled known human trafficking
              tactics used in that region at the time.
            </p>
            <p
              className={`${robotoopo.className} text-xl sm:text-2xl md:pe-10 lg:text-2xl tracking-wide lg:leading-10`}
            >
              Fortunately, this young female was traveling with two vigilant
              mothers whose instincts and quick action stopped the man's
              pursuit. However, Karla was left haunted by the thought of how
              different the outcome might have been if this vulnerable girl had
              been alone or with young friends. The chilling experience fueled
              Karla passion to create a program that equips adults to educate
              children about sexual predators and human traffickers, fostering
              awareness and self-protection.
            </p>
          </div>
        </div>

        {/* Founder Image and Button */}
        <div className="flex flex-col items-center w-full lg:w-auto md:mt-[20px]">
          <div className="relative w-[250px] sm:w-[300px] h-[400px] sm:h-[300px]">
            <Image
              src="/assets/about-1.png"
              alt="Karla Highman, Founder of Walking Wise"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p
            className={`${robotoop.className} mt-4 text-center text-base sm:text-lg`}
          >
            Karla Highman, Founder <br />
            <Link href="/" className={`${robotoop.className} underline`}>
              Walking Wise
            </Link>
          </p>
          <button
            className={`bg-purple-600 hover:bg-purple-700 cursor-pointer text-white px-10 py-4 mt-10 rounded-4xl transition-colors ${roboto.className}`}
            onClick={() => router.push("/youth-curriculum")}
          >
            Youth Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
