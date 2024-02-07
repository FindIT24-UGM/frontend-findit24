import PrizeCard from "./PrizeCard";
import Image from "next/image";
import Roket from "../../assets/compepage/Roket.png";
import { useState } from "react";

export default function Prize({ prizeArray }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FF8C5A] to-[#F95949]">
      <div className="relative pt-2 pb-40 sm:pt-20 gap-y-20 flex flex-col font-bold text-white ">
        {/* Beyond The Sky */}
        <p className="absolute font-Ava text-[3.33vw] rotate-90 leading-[4vw] font-normal bottom-80 -left-48 leading-[4vw] drop-shadow-[0_4px_12px_rgba(255,255,255,1)] opacity-50">
          //Beyond The Sky
        </p>
        <div className="mx-auto lg:mx-36 font-GameOfSquid text-[2.5vw]">
          {" "}
          Prize Pool
        </div>
        <div className="flex flex-col items-center gap-y-40 ">
          <PrizeCard type="1st place" prize="Juara 1" />
          <div className="flex gap-x-12 items-center justify-center tracking-widesr">
            <PrizeCard type="2nd place" prize="Juara 2" />
            <PrizeCard type="3rd place" prize="Juara 3" />
          </div>
        </div>
        <Image
          src={Roket}
          width={500}
          className="absolute right-0 -bottom-60 z-30"
        ></Image>
      </div>
    </div>
  );
}
