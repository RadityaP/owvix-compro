import React, { useEffect, useState } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        offset >= 100 ? "opacity-1" : "opacity-0"
      } fixed bottom-[20px] right-[20px] w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300`}
    >
      <Image
        src={require("/public/assets/chevron-arrow-up.png")}
        alt="chevron top"
        height={20}
        width={20}
      />
    </div>
  );
};

export default ScrollToTopButton;
