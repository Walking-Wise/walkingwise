"use client";
import Image from "next/image";
import { robotoItalic, robotoopo, roboto } from "../../public/fonts/Fonts";

const PartOne = () => {
  return (
    <section className="max-w-full  flex justify-center  flex-col ">
      <div className="max-w-full relative bg-[#303030] ">
        <div className="w-full relative max-h-[600px] mb-10">
          {/* Background Image - Hidden on mobile */}
          <div className="hidden lg:block">
            <Image
              src="/assets/HOME.jpg"
              alt="Home Background"
              width={1920}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Background Image for mobile - using CSS background */}
          <div
            className="lg:hidden w-full h-[500px] bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/assets/HOME.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-black/70 p-6 mx-4 text-center max-w-[90%]">
                <h1 className="text-5xl sm:text-7xl font-bold text-white mb-3">
                  walking wise
                </h1>
                <h1 className="text-2xl sm:text-4xl font-bold text-[#68D2DF] mb-3">
                  empowering youth
                </h1>
                <h1 className="text-xl sm:text-2xl font-medium text-white">
                  educating communities to combat child exploitation
                </h1>
              </div>
            </div>
          </div>

          {/* Original right-aligned text - shown only on larger screens */}
          <div className="hidden lg:block my-auto absolute bottom-0 right-10">
            <div className="bg-black/70 p-1 flex flex-col w-[450px]">
              <h1 className="text-8xl text-white">walking wise</h1>
              <p className={`${roboto.className} text-5xl text-[#68D2DF]`}>
                Empowering Youth
              </p>
            </div>
            <h1 className="text-5xl text-white bg-black/70 ps-1 pb-1">
              educating communities to combat child exploitation
            </h1>
          </div>
        </div>
      </div>
      <div className="flex relative flex-col xl:flex-row justify-center  items-center gap-8 px-4 py-5 bg-white">
        <div className="absolute z-[-100px] top-[-40px] 2xl:top-0  bg-[#303030] w-full h-[100px]" />
        <div className="bg-[#303030] w-[300px] h-[300px]  z-50 sm:min-w-[500px] sm:h-[500px] p-4 border-t-3 border-white rounded-full flex flex-col justify-evenly items-center text-center text-white ">
          <p
            className={`${robotoItalic.className} text-md  sm:text-4xl mt-10 px-9`}
          >
            “JUST ONE YEAR AFTER WATCHING YOUR ANIMATED VIDEO, MY 11 YEAR OLD
            DAUGHTER REPORTED AN ‘UNSAFE ADULT’ IN HER LIFE.”
          </p>
          <span
            className={`${robotoItalic.className} text-[#68D2DF] block sm:text-2xl `}
          >
            Proactive Father
          </span>
        </div>
        <div className="w-full max-w-4xl text-black text-xl md:text-3xl text-left  px-4">
          <p className={`${robotoopo.className} tracking-wide mt-10`}>
            Sexual predators and child traffickers can deceive adults and entir
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
