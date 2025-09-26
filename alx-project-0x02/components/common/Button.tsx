import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
