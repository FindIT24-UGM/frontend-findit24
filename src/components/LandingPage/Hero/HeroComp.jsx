import React from "react";
import Image from "next/image";

import HeroPlaceHolder from "./HeroPlaceHolder";

import HeroBackgroundDesktop from "../../../assets/background/LittleDarkBGHeroDesktop.png";
import HeroBackgroundTab from "../../../assets/background/LittleDarkBGHeroTablet.png";
import HeroBackgroundMobile from "../../../assets/background/LittleDarkBGHeroMobile.png";

import StarsDesktop from "../../../assets/background/STARSHeroDesktop.png";
import StarsTab from "../../../assets/background/STARSHeroTablet.png";
import StarsMobile from "../../../assets/background/STARSHeroMobile.png";

import heroImage from "../../../assets/Logo/mascotHeroFindIT24.png";

const HeroComp = () => {
  return (
    <div className="relative">
      <div className="w-full">
        {/* background */}
        <Image
          alt="bg"
          src={HeroBackgroundDesktop}
          className="bg-cover absolute -z-10 hidden lg:flex h-fit"
        />
        <Image
          alt="bg"
          src={StarsDesktop}
          className="bg-cover absolute -z-10 hidden lg:flex h-fit"
        />
        <Image
          alt="bg"
          src={HeroBackgroundTab}
          className="bg-cover absolute -z-10 hidden md:flex lg:hidden h-fit"
        />
        <Image
          alt="bg"
          src={StarsTab}
          className="bg-cover absolute -z-10 hidden md:flex lg:hidden h-fit"
        />
        <Image
          alt="bg"
          src={HeroBackgroundMobile}
          className="bg-cover absolute -z-10 flex md:hidden lg:hidden h-fit"
        />
        <Image
          alt="bg"
          src={StarsMobile}
          className="bg-cover absolute -z-10 flex md:hidden lg:hidden h-fit"
        />

        {/* content */}
        <div>
          <h2 className="font-Ava lg:text-[50px] md:text-[48px] text-[28px] text-center text-secondary-blue">
            2024
          </h2>
          <div className="text-center">
            <q className="font-CreatoDisplay lg:text-[20px] md:text-[18px] text-[12px] text-secondary-blue">
              Tech Horizon: Beyond the Digital Sky
            </q>
          </div>
          <div className="flex flex-col lg:relative">
            <div className="font-GameOfSquid lg:text-[150px] md:text-[100px] text-[60px] flex items-center justify-center space-x-8 md:space-x-16 text-text-placeholder-light z-10">
              <div className="h-fit">FIND</div>
              <div className="h-fit">IT!</div>
            </div>
            <div className="flex justify-center items-center pt-28 pb-20 lg:pt-0 lg:pb-0 animate-bounce">
              <Image
                alt="heroImage"
                src={heroImage}
                className="absolute lg:w-[400px] md:w-[320px] w-[270px] lg:pt-48 lg:pb-0"
              />
            </div>
            <div className="">
              <HeroPlaceHolder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
