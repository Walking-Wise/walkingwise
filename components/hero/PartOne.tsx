"use client";
import { robotoItalic, robotoopo, roboto } from "../../public/fonts/Fonts";

const PartOne = () => {
  return (
    <section className="max-w-full  flex justify-center  flex-col ">
      {/* Hero Image Section */}
      <div className="w-full relative bg-[#303030]">
        <div className="relative w-full">
          {/* Add padding-bottom to keep the image visible above the bar */}
          <img
            src="/assets/HOME1.jpg"
            alt="About Us"
            className="w-full object-contain pb-[50px] sm:pb-[40px]"
          />
        </div>
      </div>
      <div className="flex relative flex-col xl:flex-row justify-center  items-center gap-8 px-4 py-5 bg-white">
        <div className="absolute z-[-100px] top-[-40px] 2xl:top-0  bg-[#303030] w-full h-[75px] " />
        <div className="bg-[#303030] w-[300px] h-[300px] z-50 sm:min-w-[500px] sm:h-[500px] p-4 border-t-3 border-white rounded-full flex flex-col justify-evenly items-center text-center text-white ">
          <p
            className={`${robotoItalic.className} text-md leading-[0]  sm:text-4xl mt-10 px-9`}
          >
            “Just one year
          </p>
          <p className={`${robotoItalic.className} text-md leading-[0] sm:text-4xl px-9`}>
            after watching your
          </p>
          <p className={`${robotoItalic.className} text-md leading-[0] sm:text-4xl px-9`}>
            animiated video, my
          </p>
          <p className={`${robotoItalic.className} text-md leading-[0] sm:text-4xl px-9`}>
            11 year old daughter
          </p>
          <p className={`${robotoItalic.className} text-md leading-[0] sm:text-4xl px-9`}>
            reported an ‘unsafe adult’
          </p>
          <p className={`${robotoItalic.className} text-md leading-[0] sm:text-4xl px-9`}>
            in her life.”
          </p>
          <span
            className={`${robotoItalic.className} text-[#00c1d5] block sm:text-2xl `}
          >
            Proactive Father
          </span>
        </div>
        <div className="w-full max-w-4xl text-black text-xl md:text-4xl text-left px-4 mt-16">
          <p className={`${robotoopo.className} tracking-wide lg:mt-10`}>
            Sexual predators and child traffickers can deceive adults and entire
            communities.
            <br /> <br />
            Predators groom victims by gaining their trust before gradually
            revealing the truth of their intentions.
            <br /> <br />
            Teaching young people to recognize unsafe adult behaviors can
            empower them to seek help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
