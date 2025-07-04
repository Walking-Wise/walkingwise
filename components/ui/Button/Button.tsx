import React from "react";
import clsx from "clsx";
import { roboto } from "@/public/fonts/Fonts";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `bg-purple-600 
         hover:bg-purple-700 
         cursor-pointer 
         text-white 
         px-10 py-4 
         rounded-4xl 
         transition-colors 
         text-lg
         whitespace-nowrap 
         ${roboto.className}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
