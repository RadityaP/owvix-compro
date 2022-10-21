import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

const NavigationList = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "clients",
    title: "Clients",
    link: "/clients",
  },
];

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const router = useRouter();

  return (
    <nav className="bg-black border-b-2 border-b-gray-400 border-solid">
      <div className="container px-7 md:px-10 max-w-[1280px] flex flex-wrap justify-between items-center mx-auto">
        <Link href={"/"} className="flex items-center text-white text-3xl">
          <div className="w-[100px] h-[100px] relative cursor-pointer">
            <Image
              src={require("../../../public/assets/logo-white.png")}
              alt="logo"
              layout="fill"
              objectFit="contain"
              loading="eager"
            ></Image>
          </div>
        </Link>
        <div
          className="relative w-[24px] h-[24px] cursor-pointer flex md:hidden flex-col gap-[5px]"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="w-full h-[4px] bg-white rounded-full"></div>
          <div className="w-full h-[4px] bg-white rounded-full"></div>
          <div className="w-full h-[4px] bg-white rounded-full"></div>
        </div>
        <div
          className={`${menuOpened ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col p-4 mt-4 mb-0 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {NavigationList.map((list) => {
              return (
                <li key={list.id}>
                  <Link href={list.link}>
                    <a
                      className={`${
                        list.link === router.pathname ? "text-red-primary after:!left-0" : ""
                      } text-center md:text-left block text-lg font-bold py-2 pr-4 pl-3 text-white hover:text-red-primary transition-all duration-300 after:transition-all relative overflow-hidden after:duration-300 after:content-[''] after:w-full after:h-[2px] after:bg-red-primary after:absolute after:bottom-0 after:left-[-1020px] md:after:left-[-150px] hover:after:left-0`}
                    >
                      {list.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
