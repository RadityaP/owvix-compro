import Container from "../components/global/container";
import styles from "../styles/main.module.css";
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
          <h1 className="text-[32px] md:text-[88px] font-bold m-0">ABOUT</h1>
          <h1 className="text-[32px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">US</h1>
        </div>
      </Section>
      <div className="flex justify-center">
        <div className={`${styles["background-about"]} w-full relative`}></div>
      </div>
      <Section text="white">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="basis-6/12 h-fit py-0 md:py-5 text-justify flex justify-center md:justify-start items-center h-auto">
            <div className="md:w-[500px] md:h-[500px] w-[200px] h-[200px] relative">
              <Image
                src={require("../public/assets/logo-white-no-text.png")}
                layout="fill"
                objectFit="contain"
                alt="logo"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              ></Image>
            </div>
          </div>
          <div className="basis-6/12 flex items-center px-2 md:px-0">
            <h6 className="text-sm md:text-lg md:text-2xl font-normal h-fit md:pl-16 md:py-5 text-center md:text-justify md:border-l-white md:border-0 md:border-l-2 md:border-solid">
              Owvix was founded by Muhammad Rinaldy Syarifullah, the goal is to create a flexible
              and reliable creative team to cover a lot of documentation needs for graduations,
              wedding, and product advertisement in the scope of Bandung and especially in West Java
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
        <div className="flex flex-col md:flex-row items-stretch px-2 md:px-0">
          <div className="basis-6/12 flex items-center">
            <h6 className="text-sm md:text-lg md:text-2xl font-normal h-fit mb-10 md:mb-0 md:pr-16 text-center md:text-justify m-0">
              &quot;On March 23 2018, Owvix Photography was formed with limited resources, but was
              able to produce a great output that could compete in the creative agency industry in
              West Java&quot; - M. Rinaldy S.
              <br />
              <br />
              Owvix has grown guite rapidly from a small creative team with mediocre resources.
            </h6>
          </div>
          <div className="basis-6/12 flex items-center">
            <h6 className="text-sm md:text-lg md:text-2xl font-normal h-fit md:pl-16 text-center md:text-justify m-0">
              Within a few years, Owvix not only provided a great services for documentation of
              graduations, weddings or products, but also began to dive deeper by making indie short
              films, also able to create web-series, making motion graphic animations for various
              events, collaborate with well-known companies in Indonesia to create compan profiles,
              and much more.
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
            <h1 className="text-[28px] md:text-[88px] font-bold m-0">THE MAN</h1>
            <h1 className="text-[28px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              BEHIND
            </h1>
            <h1 className="text-[28px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
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
