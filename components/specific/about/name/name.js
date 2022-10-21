import React from "react";

const Index = ({ name, title }) => {
  return (
    <div className="mt-7 text-center md:text-left">
      <div className="text-[28px] md:text-[44px] font-bold">{name}</div>
      <div className="text-[16px] md:text-[24px] font-normal italic mt-1">{title}</div>
    </div>
  );
};

export default Index;
