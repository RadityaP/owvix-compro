import React, { useState } from "react";
import Image from "next/image";
import Thumbnail from "./thumbnail";
import styles from "../../../styles/galeri.module.css";

const Youtube = ({ videos, showTitle }) => {
  const [index, setIndex] = useState(0);
  const [playedVideo, setPlayedVideo] = useState("");
  return (
    <>
      <div
        className={`${styles["arrow-container"]} ${styles.left}`}
        style={{ opacity: index === 0 ? 0 : 1 }}
        onClick={() => {
          if (index !== 0) {
            setIndex(index - 1);
            setPlayedVideo("");
          }
        }}
      >
        <Image
          src={require("../../../public/assets/chevron-pointing-to-the-left.png")}
          alt="asdad"
          height={14}
          width={14}
        />
      </div>
      <div className="overflow-hidden max-w-[1000px]">
        <div
          className="whitespace-nowrap duration-1000 ease-in-out"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {videos.map((thumb, index) => {
            return (
              <Thumbnail
                src={thumb.src}
                title={thumb.title}
                videoId={thumb.videoId}
                key={index}
                playedVideo={playedVideo}
                setPlayedVideo={setPlayedVideo}
              />
            );
          })}
        </div>
      </div>
      <div
        style={{ opacity: index === videos.length - 1 ? 0 : 1 }}
        className={`${styles["arrow-container"]} ${styles.right}`}
        onClick={() => {
          if (index !== videos.length - 1) {
            setIndex(index + 1);
            setPlayedVideo("");
          }
        }}
      >
        <Image
          src={require("../../../public/assets/right-chevron.png")}
          alt="asdad"
          height={14}
          width={14}
        />
      </div>
    </>
  );
};

export default Youtube;
