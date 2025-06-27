"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { roboto, robotoop, robotoopo } from "../../public/fonts/Fonts";

const PartOne = () => {
  const router = useRouter();

  return (
    <section className="w-full">
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div className="relative w-full">
          {/* Add padding-bottom to keep the image visible above the bar */}
          <img
            src="/assets/ABOUT.jpg"
            alt="About Us"
            className="w-full object-contain pb-[80px] sm:pb-[120px]"
          />

          {/* Overlay bar at the bottom */}
          <div className="absolute bottom-0 left-0 w-full bg-[#303030] flex items-center ps-4 sm:ps-34 h-[80px] sm:h-[120px]">
            <h1 className="text-white text-4xl sm:text-6xl lg:text-6xl">
              WALKING WISE MISSION
            </h1>
          </div>
        </div>
      </div>
      {/* Mission Statements Grid */}
      <div className="flex justify-center items-center mt-[20px] md:mt-[80px] text-[#303030] gap-4 flex-wrap px-4 sm:px-0 md:px-28">
        {/* First Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[48%] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 `}
          >
            Our <strong className="font-extrabold">VISION</strong> is to
            interrupt the criminal intentions of sexual predators and sex
            traffickers.
          </p>
        </div>

        {/* Second Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[48%] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 `}
          >
            Our <strong className="font-extrabold">MISSION</strong> is to equip
            adults to educate young people about the commercial sex industry.
          </p>
        </div>

        {/* Third Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[48%] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 `}
          >
            We believe <strong className="font-extrabold">KNOWLEDGE</strong>{" "}
            serves as a powerful defense against manipulation and intimidation.
          </p>
        </div>

        {/* Fourth Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[48%] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 `}
          >
            Our <strong className="font-extrabold">GOAL</strong> is to empower
            adolescents to recognize the signs of sexual exploitation and report
            it.
          </p>
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="text-[#303030] mt-20 mb-30 flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:ps-13 sm:pe-26 py-10 gap-8">
        {/* Founder Story Text */}
        <div className="w-full md:ps-20">
          <h1 className="text-6xl sm:text-7xl text-[#303030] tracking-normal mb-6">
            How We Began
          </h1>
          <div className="space-y-4 text-base sm:text-lg">
            <p
              className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl md:pe-10 mb-10`}
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
              className={`${robotoopo.className} text-xl sm:text-2xl md:pe-10 lg:text-3xl`}
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
        <div className="flex flex-col items-center w-full lg:w-auto md:mt-[100px]">
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
