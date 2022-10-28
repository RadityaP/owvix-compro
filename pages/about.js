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
                blurDataURL="data:image/png;base64,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"
              ></Image>
            </div>
          </div>
          <div className="basis-6/12 flex items-center px-10 md:px-0">
            <h6 className="text-lg md:text-2xl font-normal h-fit md:pl-16 md:py-5 text-justify md:border-l-white md:border-0 md:border-l-2 md:border-solid">
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
        <div className="flex flex-col md:flex-row items-stretch px-10 md:px-0">
          <div className="basis-6/12 flex items-center">
            <h6 className=" text-lg md:text-2xl font-normal h-fit mb-10 md:mb-0 md:pr-16 text-justify m-0">
              &quot;On March 23 2018, Owvix Photography was formed with limited resources, but was
              able to produce a great output that could compete in the creative agency industry in
              West Java&quot; - M. Rinaldy S.
              <br />
              <br />
              Owvix has grown guite rapidly from a small creative team with mediocre resources.
            </h6>
          </div>
          <div className="basis-6/12 flex items-center">
            <h6 className="text-lg md:text-2xl font-normal h-fit md:pl-16 text-justify m-0">
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
