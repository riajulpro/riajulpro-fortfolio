"use client";

import { Stack } from "@mui/material";
import Image from "next/image";

import riajulProProfileOne from "@/assets/picture/riajulpro-profile-square.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "react-scroll";

import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const TEXTS = ["MERN Stack", "Frontend", "NodeJS", "MongoDB"];

const HomeSec = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  //   -----------------------------------------------------------

  return (
    <div className="md:h-screen flex flex-col-reverse md:flex-row justify-center items-center bg-colorBlack m-2 rounded-md">
      <div className="flex-1 p-4">
        <h1
          data-aos="fade-down"
          className="text-2xl md:text-5xl font-bold uppercase"
        >
          Hi, I am RiaJul!
        </h1>
        <h1
          data-aos="fade-up"
          className="text-base md:text-3xl font-bold uppercase flex gap-2"
        >
          A
          <span className="text-colorPrimary">
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </span>
          <span className="transition-all duration-1000 ease-in-out">
            Web Developer
          </span>
        </h1>
        <p data-aos="zoom-out-up" className="text-xs text-gray-400 my-4">
          Hello there! I&apos;m RiaJul Pro, a dedicated MERN stack developer and
          front-end specialist with a passion for crafting seamless and visually
          appealing websites. I specialize in translating your ideas into
          interactive and functional web applications. Whether you&apos;re a
          small business aiming to establish an online presence or a
          medium-sized enterprise looking to enhance your digital footprint,
          I&apos;ve got you covered.
        </p>
        <div>
          <a href="/resume.pdf" download="resume.pdf">
            <button className="px-6 py-3 rounded bg-colorPrimary text-black hover:bg-bgColor hover:text-colorPrimary cursor-pointer transition-all duration-300 ease-in-out active:scale-95">
              <span className="uppercase">Resume</span> <FileDownloadIcon />
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={riajulProProfileOne}
          alt="RiaJul Pro Profile"
          className="[clip-path:polygon(50%_0%,100%_0,100%_75%,50%_100%,0%_75%,0_0)] md:[clip-path:polygon(25%_0%,100%_0,100%_50%,100%_100%,25%_100%,0%_50%)]"
        />
      </div>
    </div>
  );
};

export default HomeSec;
