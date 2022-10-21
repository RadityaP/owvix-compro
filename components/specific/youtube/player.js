import React, { useEffect } from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId, setShowPlayer, setPlayVideo }) => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        iframeClassName="w-[350px] md:w-[900px] h-[195px] md:h-[506px] aspect-[800/450]"
      />
    </div>
  );
};

export default YoutubePlayer;
