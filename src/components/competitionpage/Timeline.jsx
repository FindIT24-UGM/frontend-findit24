import React, { useState, useEffect } from "react";
import Opreg_Container from "../../assets/compepage/Opreg_Container.png";
import styles from "./Timeline.module.css";
import Image from "next/image";
import HexagonDot_Desktop from "../../assets/compepage/Hexagon_Desktop.png";

import VertikalVektor from "../../assets/background/line_vertikal.png";
import HorizontalVektor from "../../assets/background/line_horizontal.png";

import TimeLineCard from "./TimeLineCard";

function HexagonDot() {
  return (
    <div className="w-[1.5vw]">
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
    <div className="w-[14.56vw] flex items-center">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l from-[#FF8C5A] to-[#F95949] -m-[1vw]"></div>
    </div>
  );
}

function LineV1() {
  return (
    <div className="h-[25vw] w-fit">
      <HexagonDot />
      <div className="h-full w-[45%] bg-gradient-to-b from-[#FF8C5A] to-[#F95949] mx-auto"></div>
    </div>
  );
}

const dummyData = [
  { name: "Content1", date: "11 Maret" },
  { name: "Content2", date: "12 Maret" },
  { name: "Content3", date: "13 Maret" },
  { name: "Content4", date: "14 Maret" },
  { name: "Content5", date: "15 Maret" },
  { name: "Content6", date: "16 Maret" },
  { name: "Content7", date: "17 Maret" },
  { name: "Content8", date: "18 Maret" },
];

export default function Timeline() {
  return (
    <div className="bg-background-skyblue min-h-screen w-full p-10">
      <h2 className="font-GameOfSquid text-[48px] font-bold text-white text-center lg:text-left lg:pl-10 mb-14">
        Timeline
      </h2>
      <div className="flex gap-x-3 justify-center lg:gap-x-0 lg:justify-start lg:overflow-auto lg:scrollbar-none lg:flex-col w-full">
        <div className="mt-[13vw] space-y-[20vw] lg:hidden">
          {dummyData.map((item, i) => {
            return (
              <p
                key={i}
                className="font-GameOfSquid text-white h-[5vw] my-auto"
              >
                {item.date}
              </p>
            );
          })}
        </div>
        <div className="mt-[13vw] lg:hidden">
          {dummyData.map((item, i) => {
            return i !== dummyData.length - 1 && <LineV1 key={i} />;
          })}
          <HexagonDot />
        </div>
        <div className="flex flex-col lg:hidden">
          {dummyData.map((item, i) => {
            console.log(i);
            return (
              <div className="my-[1vw]">
                <TimeLineCard content={item.name} key={i} />
              </div>
            );
          })}
        </div>

        {/* odd card */}
        <div className="hidden lg:flex space-x-[4vw]">
          {dummyData.map((item, i) => {
            return (
              i % 2 !== 1 && (
                <div className="flex space-x-[4.28vw]">
                  <div className="my-[1vw]">
                    <TimeLineCard content={item.name} key={i} />
                  </div>
                  <p className="flex justify-center items-center text-center font-GameOfSquid text-white w-[6vw]">{dummyData[i + 1].date}</p>
                </div>
              )
            );
          })}
        </div>
        {/* horizontal line */}
        <div className="hidden lg:flex w-[120%] ml-[7.28vw]">
          {dummyData.map((item, i) => {
            return i !== dummyData.length - 1 && <LineH1 key={i} />;
          })}
          <HexagonDot />
        </div>
        {/* even card */}
        <div className="hidden lg:flex ml-[4.28vw] space-x-[4vw]">
          {dummyData.map((item, i) => {
            return (
              i % 2 === 1 && (
                <div className="flex space-x-[4.28vw]">
                  <p className="flex justify-center items-center text-center font-GameOfSquid text-white w-[6vw]">{dummyData[i - 1].date}</p>
                  <div className="my-[1vw]">
                    <TimeLineCard content={item.name} key={i} />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
