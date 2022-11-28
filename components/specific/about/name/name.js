import React from 'react';

const Index = ({ name, title }) => {
  return (
    <div className="mt-3 text-center md:text-left">
      <div className="text-[24px] md:text-[40px] font-bold">{name}</div>
      <div className="text-[12px] md:text-[20px] font-normal italic">{title}</div>
    </div>
  );
};

export default Index;
