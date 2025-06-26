'use client'
import React from "react";
import { robotoopo } from "../../public/fonts/Fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PartTwo = () => {
  const router = useRouter();
  return (
    <>
      <div className=" text-[#303030]">
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <h1 className="text-4xl sm:text-6xl">
              prevention strategy
            </h1>
          </div>

          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10`}
          >
            Education for adults and youth creates a cohesive and powerful
            prevention strategy. While our adult course ensures that those
            working with youth are informed and prepared, the Walking Wise <Link className="underline" href="/youth-curriculum">youth
            curriculum</Link> directly equips adolescents with the knowledge and skills
            they need to recognize signs of exploitation and take action to
            report it.
          </p>

          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10`}
          >
            Whether the educational tools are used in one-on-one mentoring
            sessions, group discussions, or more extensive workshops, they
            empower adolescents to step away from situations that make them
            uncomfortable and seek support from trustworthy adults.
          </p>
        </div>
      </div>

      <div className="bg-[#3ab6c7] lg:mt-10 text-black">
        <div className="p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <h1 className="text-4xl sm:text-6xl ">
              anti-exploitation advocates
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full sm:w-auto">
              <button
                className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-2 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
                onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
              >
                  DEMO Curriculum
              </button>
              <button
                className={`bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 md:px-10 py-2 rounded-4xl transition-colors ${robotoopo.className} text-sm sm:text-base md:text-xl`}
                onClick={() => window.location.href = "https://www.walkingwise.com/contact-us-v2/"}
              >
                ENROLL Today! 
              </button>
            </div>
          </div>

          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10`}
          >
            Walking Wise is strategically positioned to collaborate with
            anti-trafficking organizations, bridging the gap and allowing them
            to focus on relationship-building and community support, while
            Walking Wise delivers impactful, evidence-based educational content.
          </p>

          <p
            className={`${robotoopo.className} tracking-wide leading-7 lg:leading-10  text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-6 sm:mt-8 md:mt-10`}
          >
            As a dedicated anti-trafficking partner, our Walking Wise Learning
            Platform maintains trauma-sensitive and expert-reviewed educational
            resources, freeing advocacy groups from the burden of developing
            this costly and time-consuming material. Walking Wise is committed
            to ensuring high-quality prevention education and streamlining
            content delivery for our partners.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartTwo;
