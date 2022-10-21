import Container from "../components/global/container";
import styles from "../styles/home.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Section from "../components/global/section";
import Name from "../components/specific/about/name";
// import Picture from "../components/specific/about/picture";

const Picture = dynamic(() => import("../components/specific/about/picture"));

const Index = () => {
  return (
    <Container title="About | Creative Agency | Owvix Creative" background="black">
      <Section text="white text-center md:text-left">
        <div>
          <h1 className="text-[40px] md:text-[88px] font-bold m-0">ABOUT</h1>
          <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">US</h1>
        </div>
      </Section>
      <div className="flex justify-center">
        <div className={`${styles["background-about"]} w-full relative`}></div>
      </div>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-6/12 h-fit py-3 md:py-5 text-justify flex justify-center md:justify-start items-center h-auto">
            <div className="md:w-[500px] md:h-[500px] w-[200px] h-[200px] relative">
              <Image
                src={require("../public/assets/logo-white-no-text.png")}
                layout="fill"
                objectFit="contain"
                alt="logo"
                loading="lazy"
                placeholder="blur"
              ></Image>
            </div>
          </div>
          <div className="basis-6/12 flex items-center px-10 md:px-0">
            <h6 className="text-lg md:text-2xl font-normal h-fit md:pl-16 md:py-5 text-justify md:border-l-white md:border-0 md:border-l-2 md:border-solid">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </h6>
          </div>
        </div>
      </Section>
      <Section text="white">
        <div className="flex justify-center">
          <div className={`${styles["background-about"]} w-full relative`}></div>
        </div>
      </Section>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch px-10 md:px-0">
          <div className="basis-6/12 flex items-center">
            <h6 className=" text-lg md:text-2xl font-normal h-fit mb-10 md:mb-0 md:pr-16 text-justify m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </h6>
          </div>
          <div className="basis-6/12 flex items-center">
            <h6 className="text-lg md:text-2xl font-normal h-fit md:pl-16 text-justify m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </h6>
          </div>
        </div>
      </Section>
      <Section>
        <div className="w-full h-[4px] bg-white"></div>
      </Section>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-6/12 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-[40px] md:text-[88px] font-bold m-0">THE MAN</h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              BEHIND
            </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              THE LENS
            </h1>
          </div>
          <Picture isRight image={"rinaldy"} title={"CEO/FOUNDER"} name={"RINALDY"} />
        </div>
      </Section>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <Picture image={"sham"} title={"PUBLIC RELATION MANAGER"} name={"SHAM"} />
          <Picture isRight image={"nanda"} title={"MARKETING DIRECTOR"} name={"NARADHIPA"} />
        </div>
      </Section>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <Picture image={"salman"} title={"ADMINISTRATION MANAGER"} name={"SALMAN"} />
          <Picture isRight image={"tsamara"} title={"GRAPHIC DESIGNER"} name={"TSAMARA"} />
        </div>
      </Section>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <Picture image={"temy"} title={"CONTENT CREATOR"} name={"TEMY"} />
          <Picture isRight image={"jo"} title={"PROJECT RESEARCHER"} name={"JORDAN"} />
        </div>
      </Section>
    </Container>
  );
};

export default Index;
