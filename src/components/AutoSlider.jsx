import React from "react";
import Image from "next/image";
import Prize from "../assets/Prize.png";

export default function AutoSlider() {
  return (
    <div className="w-full bg-background-skyblue">
      <div className="slider">
        <div className="w-full border-y-8 border-[#92C2D0]">
          <div className="animate-sliderTrack flex gap-x-6 font-GameOfSquid text-[52.72px] whitespace-nowrap">
            <Image src={Prize} sizes="60vw" alt="Win A TotalPrize" />
            <Image src={Prize} sizes="60vw" alt="Win A TotalPrize" />
            <Image src={Prize} sizes="60vw" alt="Win A Total Prize" />
            <Image src={Prize} sizes="60vw" alt="Win A Total Prize" />
            <Image src={Prize} sizes="60vw" alt="Win A Total Prize" />
          </div>
        </div>
      </div>
    </div>
  );
}
