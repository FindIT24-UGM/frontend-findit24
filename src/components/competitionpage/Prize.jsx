import PrizeCard from "./PrizeCard";
import Image from "next/image";
import Roket from "../../assets/compepage/Roket.png";
import { useState } from "react";

export default function Prize({ firstPlacePrize, secondPlacePrize, thirdPlacePrize }) {
  return (
    <div className="min-h-screen w-full bg-[url('https://i.ibb.co/0F9wh1L/Bg-Oren-Comp-Page-Mobile.png')] md:bg-[url('https://i.ibb.co/7bzwNYP/Bg-Oren-Comp-Page-Tab.png)'] lg:bg-[url('https://i.ibb.co/kyY5TTZ/Bg-Oren-Comp-Page-Desktop.png')] bg-cover">
      <div className="relative pt-2 pb-40 sm:pt-20 gap-y-20 flex flex-col font-bold text-white ">
        {/* Beyond The Sky */}
        <p className="absolute font-Ava text-[8.889vw] md:text-[5vw] lg:text-[3.33vw] lg:rotate-90 font-normal bottom-16 lg:bottom-96 lg:-left-48 leading-[4vw] drop-shadow-[0_4px_12px_rgba(255,255,255,1)] opacity-50">
          //Beyond The Sky
        </p>
        <div className="mx-auto mt-8 lg:mt-0 flex sm:justify-center sm:items-center lg:justify-start lg:items-start lg:mx-36 font-GameOfSquid text-[6.667vw] md:text-[4.167vw] lg:text-[2.5vw]">
          {" "}
          Prize Pool
        </div>
        <div className="flex flex-col items-center gap-y-8 lg:gap-y-20 ">
          <PrizeCard type="1st place" prize={firstPlacePrize} />
          <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12 items-center justify-center tracking-widesr">
            <PrizeCard type="2nd place" prize={secondPlacePrize} />
            <PrizeCard type="3rd place" prize={thirdPlacePrize} />
          </div>
        </div>
        <Image
          src={Roket}
          className="absolute right-0 -bottom-24 md:-bottom-36 lg:-bottom-60 z-30 w-[55vw] md:w-[45vw] lg:w-[25vw]"
          alt="Roket.png"
        ></Image>
      </div>
    </div>
  );
}
