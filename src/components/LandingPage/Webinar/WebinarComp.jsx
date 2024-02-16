import React from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

import WebinarAssets from "../../../assets/Logo/AssetWebinar.png";

import TopSeparator from "../../../assets/background/TopSeparatorWebinar.png";
import BottomSeparator from "../../../assets/background/BottomSeparatorWebinar.png";

const WebinarComp = () => {
  return (
    <div className="bg-background-skyblue min-h-screen flex justify-center lg:px-[54px] relative">
      {/* background */}
      <div className="absolute top-0">
        <Image src={TopSeparator}></Image>
      </div>

      {/* content */}
      <div className="border-x-[6px] border-[#92C2D0] w-[90%] lg:w-[80%]">
        <div className="gap-y-1 font-bold mt-16 lg:mt-24 md:text-center md:pl-0 text-left pl-10">
          <h2 className="font-GameOfSquid text-text-placeholder-light text-6xl">
            webinar
          </h2>
          <p className="font-CreatoDisplay text-secondary-blue text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center mt-7 space-y-10 lg:gap-x-7">
          <div>
            <div className="bg-[url('https://i.ibb.co/gRcH1C0/Webinar-Place-Holder.png')] bg-cover lg:w-[85vh] md:w-[67.3vw] w-[48vw] flex justify-center items-center">
              <Image src={WebinarAssets} className="w-[60%] pl-4" />
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-center lg:items-start justify-center px-5 lg:text-left lg:px-0 pb-10">
            <p className="font-Montserrat text-white text-center lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit
            </p>
            <bottom className="flex items-center gap-3 p-2 bg-primary-300 w-fit rounded-md text-white">
              <p className="font-GameOfSquid">WEBINAR</p>
              <FaArrowRight />
            </bottom>
          </div>
        </div>
      </div>

      {/* background */}
      <div className="absolute bottom-0">
        <Image src={BottomSeparator}></Image>
      </div>
    </div>
  );
};

export default WebinarComp;
