import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

import webinarLogoDesktop from "../../../assets/Logo/AssetWebinarDesktop.svg";
import webinarLogoTablet from "../../../assets/Logo/AssetWebinarTablet.svg";
import webinarLogoMobile from "../../../assets/Logo/AssetWebinarMobile.svg";

import webinarPlaceholderDesktop from "../../../assets/background/WebinarPlaceholderDesktop.svg";
import webinarPlaceholderTablet from "../../../assets/background/WebinarPlaceholderTab.svg";
import webinarPlaceholderMobile from "../../../assets/background/WebinarPlaceholderMobile.svg";

import LineSeparatorDesktop from "../../../assets/background/LineSeparatorWebinarDesktop.png";
import LineSeparatorTablet from "../../../assets/background/LineSeparatorWebinarTab.png";
import LineSeparatorMobile from "../../../assets/background/LineSeparatorWebinarMobile.png";

import sidePattern from "../../../assets/background/sidePattern.png";

const WebinarComp = () => {
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
    <div className="h-dvh">
      {/* background */}
      <div className="w-full relative">
        <div className="absolute bg-background-skyblue -z-10">
          <Image
            src={
              windowWidth < 400
                ? LineSeparatorMobile
                : windowWidth > 860
                ? LineSeparatorDesktop
                : LineSeparatorTablet
            }
          />
        </div>
        <div className="absolute hidden lg:flex">
          <Image src={sidePattern} />
        </div>
      </div>
      {/* content */}
      <div className="px-[50px] pt-14 md:px-[117px] md:pt-20 lg:px-[185px]">
        <h1 className="text-[34.18px] font-GameOfSquid text-text-placeholder-light pl-10 md:pl-0 md:text-center lg:text-[72px]">
          WEBINAR
        </h1>
        <p className="text-secondary-blue font-CreatoDisplay text-[11.57px] pl-10 pr-20 md:pl-0 md:pr-0 md:text-center lg:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <div className="">
          <div className="lg:w-[51%] lg:h-fit">
            <div className="relative">
              <div className="absolute">
                <Image
                  src={
                    windowWidth < 400
                      ? webinarLogoMobile
                      : windowWidth > 860
                      ? webinarLogoDesktop
                      : webinarLogoTablet
                  }
                />
              </div>
              <div className="">
                <Image
                  src={
                    windowWidth < 400
                      ? webinarPlaceholderMobile
                      : windowWidth > 860
                      ? webinarPlaceholderDesktop
                      : webinarPlaceholderTablet
                  }
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[49%] lg:flex lg:items-center">
            <div>
              <p className="font-Montserrat text-[13.89px] lg:text-[16px] text-text-placeholder-light pl-10 md:pl-0 md:px-10 md:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="pl-10 mt-5 md:pl-0 md:px-10 md:flex md:justify-center">
                <button className="flex items-center justify-between space-x-3 text-[16px] px-5 bg-primary-300 rounded-md py-2 text-text-placeholder-light">
                  <span>WEBINAR</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarComp;
