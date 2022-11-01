import React from "react";

const Button = (props) => {
  const { color, hoverColor, isWide = false, size, onClick, className } = props;
  return (
    <span
      onClick={() => onClick()}
      className={`${className} border-3 border-solid border-${color} ${
        isWide ? "px-20 py-[4px]" : "px-7 py-2"
      } rounded-3xl ${
        size === "large" ? "text-[18px]" : "text-[16px]"
      }  font-semibold cursor-pointer ease-in-out duration-200 ${
        hoverColor === "black"
          ? "hover:border-black-primary hover:bg-black-primary"
          : "hover:border-red-secondary hover:bg-red-secondary hover:text-white"
      }`}
    >
      <span>{props.children}</span>
    </span>
  );
};

export default Button;
