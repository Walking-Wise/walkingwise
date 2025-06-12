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
        <div
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] mb-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/ABOUT.jpg')" }}
        >
          {/* Right-aligned version - shows on screens ≥ 1024px */}
          <div className="hidden md:block absolute bottom-2 sm:bottom-5 right-4 sm:right-8 md:right-10 lg:right-16 xl:right-20 2xl:right-24">
            <h1 className="text-3xl  text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl p-1 bg-black/50">
              About us
            </h1>
          </div>

          {/* Centered version - shows on screens < 1024px */}
          <div className="md:hidden flex h-full justify-center items-center">
            <h1 className="text-7xl  text-white p-1 bg-black/50">About us</h1>
          </div>
        </div>
      </div>
      {/* Mission Title Section */}
      <div className="relative z-10">
        <div className="absolute z-[-100] top-[-40px]  bg-[#303030] w-full h-[130px] sm:h-[180px] flex items-center ps-4 sm:ps-10">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white">
            Walking Wise mission
          </h1>
        </div>
      </div>

      {/* Mission Statements Grid */}
      <div className="flex justify-center items-center mt-40 lg:mt-60 text-[#303030] gap-4 flex-wrap px-4 sm:px-0">
        {/* First Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[700px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 text-center`}
          >
            Our <strong className="font-extrabold">VISION</strong> is to
            interrupt the criminal intentions of sexual predators and sex
            traffickers.
          </p>
        </div>

        {/* Second Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[700px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 text-center`}
          >
            Our <strong className="font-extrabold">MISSION</strong> is to equip
            adults to educate young people about the commercial sex industry.
          </p>
        </div>

        {/* Third Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[700px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 text-center`}
          >
            We believe <strong className="font-extrabold">KNOWLEDGE</strong>{" "}
            serves as a powerful defense against manipulation and intimidation.
          </p>
        </div>

        {/* Fourth Statement */}
        <div className="bg-[#A4E4EB] h-auto min-h-[150px] w-full sm:w-[600px] lg:w-[700px] flex justify-center items-center py-6">
          <p
            className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl px-5 text-center`}
          >
            Our <strong className="font-extrabold">GOAL</strong> is to empower
            adolescents to recognize the signs of sexual exploitation and report
            it.
          </p>
        </div>
      </div>

      {/* Founder Story Section */}
      <div className="text-[#303030] mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-13 py-10 gap-8">
        {/* Founder Story Text */}
        <div className="w-full md:ps-20">
          <h1 className="text-6xl sm:text-7xl text-[#303030] tracking-normal mb-6">
            How We Began
          </h1>
          <div className="space-y-4 text-base sm:text-lg">
            <p
              className={`${robotoopo.className} text-xl sm:text-2xl lg:text-3xl md:pe-10 mb-10`}
            >
              Walking Wise<span className="text-sm relative -top-3">&reg;</span>
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
              mothers whose instincts and quick action stopped the man pursuit.
              However, Karla was left haunted by the thought of how different
              the outcome might have been if this vulnerable girl had been alone
              or with young friends. The chilling experience fueled Karla
              passion to create a program that equips adults to educate children
              about sexual predators and human traffickers, fostering awareness
              and self-protection.
            </p>
          </div>
        </div>

        {/* Founder Image and Button */}
        <div className="flex flex-col items-center w-full lg:w-auto">
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
