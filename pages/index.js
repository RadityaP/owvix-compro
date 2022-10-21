import Container from "../components/global/container";
import Section from "../components/global/section";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Title from "../components/global/title";
import styles from "../styles/home.module.css";
import galleryStyles from "../styles/galeri.module.css";
import Button from "../components/global/button";
import Image from "next/image";
import { creativeVideos, momentVideos } from "../file/videos";
import {
  eventPhotos,
  graduationPhotos,
  birthdayPhotos,
  engagementPhotos,
  preweddingPhotos,
  siramanPhotos,
  weddingPhotos,
} from "../file/images";

const GalleryComponent = dynamic(() => import("../components/specific/gallery"), {});
const YoutubeComponent = dynamic(() => import("../components/specific/youtube"), {});

const Index = () => {
  const router = useRouter();

  return (
    <Container title="Creative Agency | Owvix Creative" background="black">
      <div className={`${styles["background"]} w-full pt-[100px] pb-[150px]`}>
        <Section text="white">
          <div className="mb-10">
            <h1 className="text-[50px] md:text-[88px] font-bold m-0">INFINITY</h1>
            <h1 className="text-[50px] md:text-[88px] font-bold mb-0 mt-[-10px] md:mt-[-30px]">
              CREATIVITY.
            </h1>
          </div>
          <div className="">
            VIDEO PRODUCTION | FILM | WEB SERIES | VIDEO PROMOTION | COMPANY PROFILE | ANIMATION
          </div>
          <div className="">MOMENT DOCUMENTARIES | EVENT | WEDDING | PREWEDDING | GRADUATION</div>
          <div className="">ADVERTISING | PRODUCT | YEAR BOOK | ALBUM</div>
        </Section>
      </div>
      <Section text="white">
        <Title
          text="CREATIVE VIDEO PRODUCTION"
          size="text-[32px] md:text-[48px] "
          isCentered
        ></Title>
        <div className="flex justify-center relative">
          <YoutubeComponent videos={creativeVideos} />
        </div>
      </Section>
      <Section text="white">
        <Title text="MOMENT DOCUMENTARIES" size="text-[32px] md:text-[48px] " isCentered></Title>
        <div className={`${galleryStyles.container} gallery-home`}>
          <div className={`${galleryStyles["item-container"]} md:!pl-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={eventPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Events</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pr-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={graduationPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Graduation</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pl-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={birthdayPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Birthday</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pr-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={engagementPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Engagement</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pl-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={preweddingPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Prewedding</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pr-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={siramanPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Siraman</h3>
          </div>
          <div className={`${galleryStyles["item-container"]} md:!pl-0`}>
            <div className={galleryStyles["gallery-container"]}>
              <GalleryComponent photos={weddingPhotos} />
            </div>
            <h3 className={galleryStyles.title}>Wedding</h3>
          </div>
        </div>
        <div className="flex justify-center relative mt-10">
          <YoutubeComponent videos={momentVideos} />
        </div>
      </Section>
      <div
        className={`${styles["background-2"]} w-full pt-[100px] pb-[150px] relative after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:z-2`}
      >
        <Section text="white">
          <div className="mb-10 z-10 relative">
            <h1 className="text-[40px] md:text-[88px] font-bold m-0">We are </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              Owvix Creative.
            </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              A creative agency
            </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              that puts moment
            </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              into something
            </h1>
            <h1 className="text-[40px] md:text-[88px] font-bold m-0 mt-[-10px] md:mt-[-30px]">
              magical.
            </h1>
          </div>

          <Button
            color="white"
            size="large"
            hoverColor="black"
            className="relative z-10"
            onClick={() => router.push("/about")}
          >
            Read more
          </Button>
        </Section>
      </div>
      <div className={`bg-white w-full py-[20px]`}>
        <Section>
          <div className="flex items-center justify-center flex-col md:flex-row">
            <div className="text-center mb-3 md:mb-0 md:text-right text-[28px] font-bold text-grey-primary border-black border-0 border-b-4 md:border-b-0 border-solid pb-6 md:pb-0">
              OUR
              <br />
              HAPPY
              <br />
              CLIENTS
              <br />
            </div>
            <div className="flex ml-0 md:ml-12 md:border-black border-0 md:border-l-4 border-solid">
              <div className="w-[90px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[200px] md:w-[120px] md:h-[120px] lg:h-[120px] relative">
                <Image
                  src={require("../public/assets/partner/itdri.png")}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  alt="partner1"
                ></Image>
              </div>
              <div className="w-[90px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[100px] md:w-[120px] md:h-[120px] lg:h-[120px] relative">
                <Image
                  src={require("../public/assets/partner/inspektorat-jawa-barat.png")}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  alt="partner1"
                ></Image>
              </div>
              <div className="w-[90px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[200px] md:w-[120px] md:h-[120px] lg:h-[120px] relative">
                <Image
                  src={require("../public/assets/partner/direktorat-jenderal-kekayaan-negara-kemenkeu.png")}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  alt="partner1"
                ></Image>
              </div>
              <div className="w-[90px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[200px] md:w-[120px] md:h-[120px] lg:h-[120px] relative">
                <Image
                  src={require("../public/assets/partner/schlumberger.png")}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  alt="partner1"
                ></Image>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button
              color="grey-primary"
              size="small"
              isWide
              hoverColor="red-secondary"
              onClick={() => router.push("/clients")}
            >
              View more
            </Button>
          </div>
        </Section>
      </div>
      {/* <div className={`bg-white w-full py-[20px]`}> */}
      <Section text="white">
        <div className="flex md:flex-row flex-col gap-[30px] my-5 md:my-12 items-center md:items-start">
          <div className="basis-6/12 text-center md:text-right mb-4 md:mb-0">
            <h1 className="text-[32px] md:text-[56px] font-bold m-0 mt-[-10px] md:mt-[-20px]">
              CONNECT
            </h1>
            <h1 className="text-[32px] md:text-[56px] font-bold m-0 mt-[-10px] md:mt-[-20px]">
              WITH
            </h1>
            <h1 className="text-[32px] md:text-[56px] font-bold m-0 mt-[-10px] md:mt-[-20px]">
              US
            </h1>
          </div>
          <div className="basis-6/12 flex flex-col gap-[20px]">
            <div className="flex items-center">
              <Link href="https://www.instagram.com/owvix/">
                <a target="_blank" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                    <Image
                      src={require("../public/assets/social/instagram.png")}
                      layout="fill"
                      loading="lazy"
                      objectFit="contain"
                      alt="partner1"
                    ></Image>
                  </div>
                  <div className="text-[16px] md:text-[18px] font-semibold ml-5">Ovwix</div>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="https://api.whatsapp.com/send?phone=6282120913001&text=Hallo%20Owvix,%20bisa%20kirim%20pricelistnya">
                <a target="_blank" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                    <Image
                      src={require("../public/assets/social/wa.png")}
                      layout="fill"
                      loading="lazy"
                      objectFit="contain"
                      alt="partner1"
                    ></Image>
                  </div>
                  <div className="text-[16px] md:text-[18px] font-semibold ml-5">082120913001</div>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                <Image
                  src={require("../public/assets/social/email.png")}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  alt="partner1"
                ></Image>
              </div>
              <div className="text-[16px] md:text-[18px] font-semibold ml-5">owvixx@gmail.com</div>
            </div>
            <div className="flex items-center">
              <Link href="https://www.youtube.com/channel/UCHXAkKY9qExHUL5-Ixxu2nQ">
                <a target="_blank" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                    <Image
                      src={require("../public/assets/social/youtube.png")}
                      layout="fill"
                      loading="lazy"
                      objectFit="contain"
                      alt="partner1"
                    ></Image>
                  </div>
                  <div className="text-[16px] md:text-[18px] font-semibold ml-5">
                    Owvix Creative
                  </div>
                </a>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="https://www.tiktok.com/@owvixcreative">
                <a target="_blank" className="flex items-center">
                  <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] relative">
                    <Image
                      src={require("../public/assets/social/tiktok.png")}
                      layout="fill"
                      loading="lazy"
                      objectFit="contain"
                      alt="partner1"
                    ></Image>
                  </div>
                  <div className="text-[16px] md:text-[18px] font-semibold ml-5">
                    Ovwix Creative
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      {/* </div> */}
    </Container>
  );
};

export default Index;
