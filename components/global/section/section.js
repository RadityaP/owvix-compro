import React from "react";

const Section = (props) => {
  const { text } = props;
  return (
    <section className={`flex justify-center py-8 md:py-10`}>
      <div className={`md:max-w-[1280px] w-full px-7 md:px-10 text-${text}`}>{props.children}</div>
    </section>
  );
};

export default Section;
