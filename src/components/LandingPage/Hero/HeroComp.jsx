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

import Gap from "./Gap";

const HeroComp = () => {
  return (
    <div className="">
      <div>
        {/* background */}
        <Image
          alt="bg"
          src={HeroBackgroundDesktop}
          className="bg-cover absolute -z-10 hidden lg:flex w-[100vw]"
        />
        <Image
          alt="bg"
          src={StarsDesktop}
          className="bg-cover absolute -z-10 hidden lg:flex w-[100vw]"
        />
        <Image
          alt="bg"
          src={HeroBackgroundTab}
          className="bg-cover absolute -z-10 hidden md:flex lg:hidden w-[100vw]"
        />
        <Image
          alt="bg"
          src={StarsTab}
          className="bg-cover absolute -z-10 hidden md:flex lg:hidden w-[100vw]"
        />
        <Image
          alt="bg"
          src={HeroBackgroundMobile}
          className="bg-cover absolute -z-10 flex md:hidden lg:hidden w-[100vw]"
        />
        <Image
          alt="bg"
          src={StarsMobile}
          className="bg-cover absolute -z-10 flex md:hidden lg:hidden w-[100vw]"
        />
        <div className="bg-background-skyblue h-[220vh] w-full absolute -z-[50]"></div>
        {/* content */}
        <div className="">
          <h2 className="font-Ava lg:text-[50px] md:text-[48px] text-[28px] text-center text-secondary-blue">
            2024
          </h2>
          <div className="text-center">
            <q className="font-CreatoDisplay lg:text-[20px] md:text-[18px] text-[12px] text-secondary-blue">
              Tech Horizon: Beyond the Digital Sky
            </q>
          </div>
          <div className="flex flex-col">
            <div className="font-GameOfSquid lg:text-[150px] md:text-[100px] text-[60px] flex items-center justify-center space-x-8 md:space-x-16 text-text-placeholder-light z-10">
              <div className="h-fit">FIND</div>
              <div className="h-fit">IT!</div>
            </div>
            <div className="flex justify-center items-center pt-[111px] pb-20 lg:pt-0 lg:pb-0 z-20">
              <Image
                alt="heroImage"
                src={heroImage}
                className="absolute lg:w-[400px] md:w-[320px] w-[270px] lg:pt-48 lg:pb-0"
              />
            </div>
            <div className="">
              <HeroPlaceHolder />
            </div>
            <div className="">
              <Gap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
