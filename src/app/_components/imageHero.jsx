"use client";
import { useState } from "react";
import Image from "next/image";
import Girl from "../../../public/images/hero.png";
import Draw from "../../../public/svg/hero.svg";

export default function ImageHero() {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    console.log("Hola");
    setHover(!hover);
  };
  return (
    <>
      <Image
        src={Draw}
        alt="Student Girl Draw"
        className={`w-full h-full absolute z-20 transition-all object-contain ${
          hover ? "opacity-0" : "opacity-100"
        }`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      <Image
        src={Girl}
        alt="Student Girl"
        className={`w-full h-full absolute z-10 object-contain ${
          hover ? "opacity-100" : "opacity-100"
        }`}
      />
    </>
  );
}
