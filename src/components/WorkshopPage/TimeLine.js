import React, { useState, useEffect } from "react";
import Image from "next/image";
import HexagonDot_Desktop from "../../assets/compepage/Hexagon_Desktop.png";

// import VertikalVektor from "../../assets/background/line_vertikal.png";
// import HorizontalVektor from "../../assets/background/line_horizontal.png";

import TimeLineCard from "./TimelineCard";

function HexagonDot() {
  return (
    <div className="lg:w-[1.5vw] w-[3vw]">
      <Image
        src={HexagonDot_Desktop}
        sizes={36}
        alt="Hexagon Dot.png"
        className="relative"
      ></Image>
    </div>
  );
}

function LineH1() {
  return (
    <div className="w-[22.56vw] flex items-center">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l from-[#FF8C5A] to-[#F95949] -m-[1vw]"></div>
    </div>
  );
}

function LineV1() {
  return (
    <div className="h-[25vw] w-fit">
      <HexagonDot />
      <div className="h-full w-[50%] bg-gradient-to-b from-[#FF8C5A] to-[#F95949] mx-auto"></div>
    </div>
  );
}

const dummyData = [
  { name: "Content1", date: "11 Maret" },
  { name: "Content2", date: "12 Maret" },
  { name: "Content3", date: "13 Maret" },
  { name: "Content4", date: "14 Maret" },
];
export default function Timeline() {
  return (
    <div className="bg-text-placeholder-dark min-h-screen w-full p-10">
      <h2 className="font-GameOfSquid text-[48px] font-bold text-white text-center mb-14"
      data-aos="zoom-out-up">
        Timeline
      </h2>
      <div className="flex gap-x-3 justify-center lg:gap-x-0 lg:flex-col">
        {/* date */}
        <div className="mt-[12vw] space-y-[19.5vw] lg:space-y-0 lg:flex lg:space-x-[16.78vw] lg:mt-0 lg:ml-[6.28vw]"
        data-aos="fade-right">
          {dummyData.map((item, i) => {
            return (
              <p
                key={item.name + i}
                className="font-GameOfSquid text-white h-[5vw] my-auto lg:h-fit lg:w-[6vw] text-center"
              >
                {item.date}
              </p>
            );
          })}
        </div>
        {/* vertikal line */}
        <div className="mt-[12vw] lg:hidden" data-aos="fade-down">
          {dummyData.map((item, indexv) => {
            return (
              indexv !== dummyData.length - 1 && (
                <LineV1 key={item.name + indexv} />
              )
            );
          })}
          <HexagonDot />
        </div>
        {/* horoizontal line */}
        <div className="hidden lg:flex ml-[9.28vw]" data-aos="fade-right">
          {dummyData.map((item, indexh) => {
            return (
              indexh !== dummyData.length - 1 && (
                <LineH1 key={item.name + indexh} />
              )
            );
          })}
          <HexagonDot />
        </div>
        {/* card */}
        <div className="flex flex-col lg:flex-row" >
          {dummyData.map((item, indexcard) => {
            return (
              <div className="my-[1vw] lg:mx-[4vw]" data-aos="flip-right" key={item.name + indexcard}>
                <TimeLineCard content={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
