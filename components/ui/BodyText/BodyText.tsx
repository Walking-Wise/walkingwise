// components/BodyText.tsx
import { robotoopo } from "@/public/fonts/Fonts";
import React from "react";

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const BodyText: React.FC<BodyTextProps> = ({
  children,
  className,
  color = "[#303030]",
}) => {
  return (
    <p
      className={`
        ${robotoopo.className} 
        tracking-wide 
        leading-7 sm:leading-8 lg:leading-10 
        text-xl sm:text-2xl md:text-3xl 
        text-${color}
        ${className ?? ""}
      `}
    >
      {children}
    </p>
  );
};

export default BodyText;
