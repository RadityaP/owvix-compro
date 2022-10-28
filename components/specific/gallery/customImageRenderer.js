import React, { useState, useEffect } from "react";
import Image from "next/image";
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
};

const CustomRenderer = ({ index, photo, margin, direction, top, left, onClick, quality }) => {
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  return (
    <div
      className="bg-transparent"
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <Image
        src={photo.src}
        onClick={() => onClick(index)}
        layout="fill"
        objectFit="cover"
        alt={photo.title}
        sizes="320 640 750"
        loading="lazy"
        placeholder="blur"
        quality={quality ?? 1}
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      ></Image>
    </div>
  );
};

export default CustomRenderer;
