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
        <Image src={LogoFindIT} className="w-[15%] lg:w-[12%] md:w-[18%]" />
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
        <Image src={Gloey} className="lg:w-[25vw] md:w-[40vw] w-[50vw] absolute lg:top-[59vh] lg:right-[20vw] md:top-[35vh] top-[25vh] animate-spin-slow" />
      </div>
      <div className="relative">
        {/* awan awan */}
        <Image
          src={AwanBawahDesktop}
          className="w-full bg-cover hidden lg:flex "
        />
        <Image
          src={AwanBawahTab}
          className="w-full bg-cover hidden md:flex lg:hidden "
        />
        <Image
          src={AwanBawahMobile}
          className="w-full bg-cover flex md:hidden"
        />
        {/* electric pattern */}
        <Image
          src={patternsBackground}
          className="w-full bg-cover absolute top-48 hidden md:flex lg:hidden"
        />
      </div>
      {/* gloey */}
    </div>
  );
};

export default Gap;
