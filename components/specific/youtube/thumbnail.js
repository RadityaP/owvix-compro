import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import YoutubePlayer from './player';

const Thumbnail = (props) => {
  const { src, title, videoId, playedVideo, setPlayedVideo } = props;

  return (
    <div className="w-full inline-block">
      <div
        className={`${
          playedVideo === videoId ? 'hidden' : 'block'
        } relative w-full aspect-[800/450] border-4 border-white border-solid m-auto cursor-pointer hover:opacity-60 duration-500 ease-in-out`}
        onClick={() => {
          setPlayedVideo(videoId);
        }}
      >
        <Image src={src} alt={title} layout="fill" objectFit="contain" loading="lazy"></Image>
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <Image
            src="https://owvix.com/images/assets/play-button-colored.png"
            alt="asdad"
            height={70}
            width={70}
          />
        </div>
      </div>
      {playedVideo === videoId && <YoutubePlayer videoId={videoId} />}
    </div>
  );
};

export default Thumbnail;
