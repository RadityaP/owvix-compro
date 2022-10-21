import React from "react";

const Title = (props) => {
  const { text, size, isCentered } = props;
  return (
    <h1 className={`${size} font-bold ${isCentered ? "text-center" : ""} ${props.className}`}>
      {text}
    </h1>
  );
};

export default Title;
