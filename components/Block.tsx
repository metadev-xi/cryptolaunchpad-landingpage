import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface BlockProps {
  imgStyles?: string;
  imgAlt?: string;
  imgSrc?: string | StaticImageData;
  blockStyles?: string;
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({
  imgSrc,
  imgAlt = "",
  imgStyles,
  blockStyles,
  children,
}) => {
  return (
    <div
      className={"relative  border filter-border rounded-3xl " + blockStyles}
    >
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={imgAlt}
          className={
            "absolute top-0 left-0 object-cover rounded-3xl " + imgStyles
          }
        />
      )}
      {children}
    </div>
  );
};

export default Block;
