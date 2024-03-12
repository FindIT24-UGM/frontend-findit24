import React from "react";
import Image from "next/image";

import patternsBackground from "../../../assets/background/patternBgTagline.svg";

import LogoFindIT from "../../../assets/Logo/logoFindit.png";
import Mouse from "../../../assets/Logo/mouse.png";

import AwanBawahDesktop from "../../../assets/background/awanBawahDesktop.svg";
import AwanBawahTab from "../../../assets/background/awanBawahTab.png";
import AwanBawahMobile from "../../../assets/background/awanBawahMobile.png";

import AwanKiriAtas from "../../../assets/background/decorKiriTaglineHero.png";
import AwanKananAtas from "../../../assets/background/awanKananAtas.svg";
import Gloey from "../../../assets/background/gloey.png";
import { BiMouse } from "react-icons/bi";

const Gap = () => {
  return (
    <div className="relative h-full w-full overflow-hidden pt-52 bg-background-skyblue">
      {/* title */}
      <div className="w-full flex flex-col items-center absolute">
        <Image
          src={LogoFindIT}
          className="w-[30%] lg:w-[12%] md:w-[18%] -mt-20 z-10"
          alt="LogoFindIT.png"
          data-aos="fade-up"
        />
        <Image
          src={AwanKiriAtas}
          className="w-[30%] lg:w-[24%] left-0 md:left-[-40px] lg:left-[6vw] right-[75vw] top-[-10vh] lg:top-[-6vh] absolute awan-kanan z-10"
          alt="AwanKiri.png"
          data-aos="fade-left"
        />
        <Image
          src={AwanKananAtas}
          data-aos="fade-right"
          className="w-[24%] right-[2vw] lg:right-[6vw] top-[0vh] lg:top-[6vh] absolute awan-kanan z-10"
          alt="AwanKanan.png"
        />
        <h2
          className="font-Montserrat text-2xl lg:text-[30px] pt-4 pb-2 text-transparent bg-gradient-to-b from-orange-400 to-red-500 bg-clip-text font-bold z-10"
          data-aos="zoom-out-up">
          WHEN INNOVATION
        </h2>
        <h2
          className="font-GameOfSquid text-2xl text-center px-4 md:px-0 lg:text-[30px] text-white font-bold z-10"
          data-aos="zoom-out-up">
          HITS EVERYONE’S IMAGINATION
        </h2>
        <div
          className="flex justify-center items-center gap-x-2 mt-4 lg:mt-8"
          data-aos="fade-up">
          <BiMouse />
          <p className="font-Montserrat text-white">Gulir ke bawah</p>
        </div>
        <Image
          src={patternsBackground}
          className="w-full bg-cover absolute -top-[50px] opacity-75"
          alt="PatternBG.png"
        />
        <Image
          src={patternsBackground}
          className="w-full bg-cover absolute top-[280px] opacity-75"
          alt="PatternBG.png"
        />
        <Image
          src={Gloey}
          className="absolute animate-spin-slow w-[52vw] lg:w-[38vw] bottom-[-60vw] md:bottom-[-76vw] lg:bottom-[-44vw]"
          alt="Gloey.png"
          data-aos-delay="50"
        />
      </div>
      <div className="relative">
        {/* awan awan */}
        <Image
          src={AwanBawahDesktop}
          className="w-full bg-cover hidden lg:flex awan"
          alt="AwanBawahDesktop.png"
        />
        <Image
          src={AwanBawahTab}
          className="w-full bg-cover hidden md:flex lg:hidden awan"
          alt="AwanBawahTab.png"
        />
        <Image
          src={AwanBawahMobile}
          className="w-full bg-cover flex md:hidden awan"
          alt="AwanBawahMobile.png"
        />
        {/* electric pattern */}
        <Image
          src={patternsBackground}
          className="w-full bg-cover absolute top-48 hidden md:flex lg:hidden"
          alt="PatternBG.png"
        />
      </div>
      {/* gloey */}
    </div>
  );
};

export default Gap;

// lg:w-[25vw] md:w-[40vw] w-[50vw] absolute lg:top-[59vh] lg:right-[20vw] md:top-[35vh] top-[25vh]
