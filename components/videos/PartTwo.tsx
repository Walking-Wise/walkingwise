'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { robotoBold } from '../../public/fonts/Fonts'; // Adjust import path as needed

const PartTwo = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videoTitles: Record<number, string> = {
    1: "Myths & Reality",
    2: "Trustworthy vs. Unsafe Adult",
    3: "Grooming Process",
    4: "Pornography Link",
    5: "Sextortion Scheme",
    6: "Male Victims",
    7: "Runaways as Targets",
    8: "Rural Risks",
    9: "Human Traffickers",
    10: "Female Recruiters",
    11: "Family Secret",
    12: "Hidden Buyers"
  };

  const handleVideoClick = (num: number) => {
    setActiveVideo(num);
  };

  const closeModal = () => {
    setActiveVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10">
      <div className="mb-6 sm:mb-10">
        <h1 className={`text-purple-500 text-4xl sm:text-7xl text-center `}>
          watch trailers & enroll for the entire video
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
          <div 
            key={num} 
            className="group relative max-w-[500px] mx-auto w-full cursor-pointer"
            onClick={() => handleVideoClick(num)}
          >
            {/* Image Container with Fixed Height */}
            <div className="relative max-w-[500px]">
              <Image
                src={`/assets/vid-${num}.png`}
                alt={`${videoTitles[num]} thumbnail`}
                width={400}
                height={250}
                className="object-contain w-full h-full"
                quality={85}
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black bg-opacity-50 rounded-full p-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text Div Below Image */}
            <div className={`bg-[#303030] p-3 sm:p-4 text-white ${robotoBold.className}`}>
              <p className={`text-center font-w md:text-3xl sm:text-2xl ${robotoBold.className}`}>
                {videoTitles[num]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <Dialog
        open={activeVideo !== null}
        onClose={closeModal}
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        {activeVideo && (
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl p-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">{videoTitles[activeVideo]}</h2>
            <video 
              src={`/assets/videos/vid-${activeVideo}.mp4`} 
              controls 
              className="w-full rounded"
            />
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default PartTwo;