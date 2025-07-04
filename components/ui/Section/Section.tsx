import React from "react";

type SectionProps = {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ bgColor, children, className }) => {
  return (
    <div className={`bg-${bgColor}`}>
      <div
        className={`
      w-full 
      max-w-[1800px] 
      mx-auto 
      px-6 sm:px-12 md:px-20 lg:px-26 
      flex flex-col 
      py-12 md:py-24 
      ${className ?? ""}
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
