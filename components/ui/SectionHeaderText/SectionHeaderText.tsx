// components/SectionHeaderText.tsx
import React from "react";

type SectionHeaderTextProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const SectionHeaderText: React.FC<SectionHeaderTextProps> = ({
  children,
  className,
  color = "[#303030]",
}) => {
  return (
    <h1
      className={`
        text-3xl sm:text-4xl md:text-6xl
        text-${color}
        ${className ?? ""}
      `}
    >
      {children}
    </h1>
  );
};

export default SectionHeaderText;
