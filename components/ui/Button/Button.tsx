import React from "react";
import clsx from "clsx";
import { roboto } from "@/public/fonts/Fonts";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  bgColor = "[#9d1be3]",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `bg-${bgColor}
         cursor-pointer 
         text-white 
         px-6 md:px-10 py-4 
         rounded-4xl 
         transition-colors 
         md:text-lg 
         whitespace-nowrap 
         flex
         items-center
         justify-center
         ${roboto.className}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
