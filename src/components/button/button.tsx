import React from "react";

interface ButtonProps {
  text: string;
  hoverBgColor?: string; // Background color on hover
  onClick?: () => void; // Optional onClick handler
  className?: string; // Optional custom classes
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`py-3 uppercase  cursor-pointer px-12  text-gray-900  bg-white transition-all duration-300 ease-in-out   ${className}`}
      style={{
        transition: "background-color 0.4s ease-in-out, color 0.4s ease-in-out", // Add transition for both background and text color
        whiteSpace: "nowrap", // Prevent text wrapping
        overflow: "hidden", // Hide overflowed text
        textOverflow: "ellipsis", // Add ellipsis if text overflows
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
