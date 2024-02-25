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

const Gap = () => {
  return (
    <div className="relative h-full w-full overflow-hidden pt-32 bg-background-skyblue">
      {/* title */}
      <div className="w-full flex flex-col items-center absolute">
        <Image
          src={LogoFindIT}
          className="w-[15%] lg:w-[12%] md:w-[18%]"
          alt="LogoFindIT.png"
        />
        <Image
          src={AwanKiriAtas}
          className="w-[20%] right-[75vw] top-[20vh] absolute"
          alt="AwasnKiri.png"
        />
        <Image
          src={AwanKananAtas}
          className="w-[20%] left-[70vw] top-[40vh] absolute"
          alt="AwanKanan.png"
        />
        <h2 className="font-Montserrat lg:text-[30px] text-transparent bg-gradient-to-b from-orange-400 to-red-500 bg-clip-text">
          WHEN INNOVATION
        </h2>
        <h2 className="font-GameOfSquid lg:text-[30px] text-white font-bold">
          HITS EVERYONE’S IMAGINATION
        </h2>
        <Image
          src={patternsBackground}
          className="w-full bg-cover absolute top-10 "
        />
        <Image
          src={Gloey}
          className="absolute animate-spin-slow w-[45vw] bottom-[-75vw] md:bottom-[-48vw]"
        />
      </div>
      <div className="relative">
        {/* awan awan */}
        <Image
          src={AwanBawahDesktop}
          className="w-full bg-cover hidden lg:flex "
          alt="AwanBawahDesktop.png"
        />
        <Image
          src={AwanBawahTab}
          className="w-full bg-cover hidden md:flex lg:hidden "
          alt="AwanBawahTab.png"
        />
        <Image
          src={AwanBawahMobile}
          className="w-full bg-cover flex md:hidden"
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
