import React from "react";

interface PageBannerProps {
  title?: string;
  image?: string;
  altText?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, image, altText }) => {
  return (
    <div className="w-full relative bg-[#303030]">
      <div className="relative w-full">
        <img
          src={image}
          alt={altText}
          className="w-full object-contain pb-[80px] sm:pb-[120px]"
        />

        {/* Overlay bar at the bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-[#303030] h-[80px] sm:h-[120px] flex items-center">
          <div className="w-full max-w-[2000px] mx-auto px-6 sm:px-12 md:px-20 lg:px-26">
            <h1 className="text-white uppercase text-4xl sm:text-6xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
