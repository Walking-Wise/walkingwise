import React from 'react';
import Image from 'next/image';
import { robotoop } from '../../public/fonts/Fonts'; // Adjust import path as needed

const PartTwo = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <div className="mb-6 sm:mb-10">
        <h1 className={`text-purple-500 text-4xl sm:text-7xl text-center `}>
          watch trailers & enroll for the entire video
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
          <div key={num} className="group relative max-w-[500px] mx-auto w-full">
            {/* Image Container with Fixed Height */}
            <div className="relative max-w-[500px]  ">
              <Image
                src={`/assets/vid-${num}.png`}
                alt={`Image ${num}`}
                width={400}
                height={250}
                className="object-contain w-full h-full"
                quality={85}
              />
            </div>
            
            {/* Text Div Below Image */}
            <div className={`bg-[#303030]  p-3 sm:p-4 text-white ${robotoop.className}`}>
              <p className={` text-center text-2xl ${robotoop.className}`}>
                {num === 1 && "Myths & Reality"}
                {num === 2 && "Trustworthy vs. Unsafe Adult"}
                {num === 3 && "Grooming Process"}
                {num === 4 && "Pornography Link"}
                {num === 5 && "Sextortion Scheme"}
                {num === 6 && "Male Victims"}
                {num === 7 && "Runaways as Targets"}
                {num === 8 && "Rural Risks"}
                {num === 9 && "Human Traffickers"}
                {num === 10 && "Female Recruiters"}
                {num === 11 && "Family Secret"}
                {num === 12 && "Hidden Buyers"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartTwo;