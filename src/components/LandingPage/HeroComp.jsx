import React from "react";
import heroImage from "../../assets/Logo/mascotHeroFindIT24.png";
import Image from "next/image";
import { useState, useEffect } from "react";

import BackgroundDesktop from "../../assets/background/LittleDarkBGHeroDesktop.png";
import StarsDesktop from "../../assets/background/STARSHeroDesktop.png";
import BackgroundTablet from "../../assets/background/LittleDarkBGHeroTablet.png";
import StarsTablet from "../../assets/background/STARSHeroTablet.png";
import BackgroundMobile from "../../assets/background/LittleDarkBGHeroMobile.png";
import StarsMobile from "../../assets/background/STARSHeroMobile.png";
import HeroPlaceHolder from "./HeroPlaceHolder";
import TaglineDesktop from "../../assets/background/Tagline_Section_Desktop.png";

const HeroComp = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowsWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowsWidth();

    return () => {
      window.addEventListener("resize", updateWindowsWidth);
    };
  }, []);

  return (
    <div className="min-h-[100vh] bg-background-skyblue">
      <div className="w-full relative">
        <div className="absolute -z-20">
          <Image
            src={
              windowWidth < 400
                ? BackgroundMobile
                : windowWidth > 860
                ? BackgroundDesktop
                : BackgroundTablet
            }
          />
        </div>
        <div className="absolute -z-10">
          <Image
            src={
              windowWidth < 400
                ? StarsMobile
                : windowWidth > 860
                ? StarsDesktop
                : StarsTablet
            }
          />
        </div>
      </div>
      <div className="px-10">
        <h2 className="font-Ava lg:text-[50px] md:text-[48px] text-[28px] text-center text-secondary-blue">
          2024
        </h2>
        <div className="text-center">
          <q className="font-CreatoDisplay lg:text-[20px] md:text-[18px] text-[12px] text-secondary-blue">
            Tech Horizon: Beyond the Digital Sky
          </q>
        </div>
        <div className="flex flex-col lg:relative">
          <div className="font-GameOfSquid lg:text-[180px] md:text-[120px] text-[60px] flex items-center justify-center space-x-8 md:space-x-16 text-text-placeholder-light z-10">
            <div className="h-fit">FIND</div>
            <div className="h-fit">IT!</div>
          </div>
          <div className="w-full flex items-center justify-center py-5 lg:absolute lg:z-20 lg:mb-10 lg:inset-0 lg:pt-72">
            <Image
              src={heroImage}
              className="w-[75vw] md:w-[55vw] lg:w-[508px] sm:mt-48 lg:mt-0"
            />
          </div>
          <div className="z-10">
            <HeroPlaceHolder />
          </div>
        </div>
      </div>

      <Image src={TaglineDesktop} className="w-full" />
    </div>
  );
};

export default HeroComp;
