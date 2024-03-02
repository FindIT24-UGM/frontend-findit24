import React, { useState, useEffect } from "react";
import Image from "next/image";
import HexagonDot_Desktop from "../../assets/compepage/Hexagon_Desktop.png";
import awanBackground from "../../assets/background/awanCompPage.png";
import VerticalVector from "../../assets/background/patternBgTimelineVertikal.png";
import HorizontalVector from "../../assets/background/patternBgTimeline.png";

import TimeLineCard from "./TimeLineCard";

function HexagonDot() {
  return (
    <div className="w-[1.5vw]">
      <Image
        src={HexagonDot_Desktop}
        sizes={36}
        alt="Hexagon Dot.png"
        className="relative"
        loading="lazy"
      ></Image>
    </div>
  );
}

function LineH1() {
  return (
    <div className="w-[14.56vw] flex items-center" data-aos="flip-down">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l from-[#FF8C5A] to-[#F95949] -m-[1vw]"></div>
    </div>
  );
}

function LineV1() {
  return (
    <div className="h-[25vw] w-fit" data-aos="flip-down">
      <HexagonDot />
      <div className="h-full w-[45%] bg-gradient-to-b from-[#FF8C5A] to-[#F95949] mx-auto"></div>
    </div>
  );
}

export default function Timeline({ data }) {
  return (
    <div className="bg-background-skyblue min-h-screen w-full py-10 relative">
      <h2 className="font-GameOfSquid text-[48px] font-bold text-white text-center lg:text-left lg:pl-10 mb-14 px-10" data-aos="zoom-out-up">
        Timeline
      </h2>
      <div className="flex gap-x-3 justify-center lg:gap-x-0 lg:justify-start lg:overflow-auto lg:scrollbar-none lg:flex-col w-full px-10 z-10" >
        <div className="mt-[13vw] space-y-[20vw] lg:hidden">
          {data.map((item, i) => (
            <p
              key={i}
              className="font-GameOfSquid text-white h-[5vw] my-auto text-[2.6vw]"
            >
              {item.date}
            </p>
          ))}
        </div>
        <div className="mt-[13vw] lg:hidden">
          {data.map((item, i) => {
            return i !== data.length - 1 && <LineV1 key={i} />;
          })}
          <HexagonDot />
        </div>
        <div className="flex flex-col lg:hidden">
          {data.map((item, i) => {
            console.log(i);
            return (
              <div key={i} className="my-[1vw]">
                <TimeLineCard content={item.name} key={i} />
              </div>
            );
          })}
        </div>

        {/* odd card */}
        <div className="hidden lg:flex space-x-[4vw] text-center">
          {data.map((item, i) => {
            const nextItem = data[i + 1];
            return (
              i % 2 !== 1 && (
                <div className="flex space-x-[4.28vw]"  data-aos="flip-down">
                  <div className="my-[1vw]">
                    <TimeLineCard content={item.name} key={i} />
                  </div>
                  {nextItem && (
                    <p className="flex justify-center items-center text-center font-GameOfSquid text-white w-[6vw]">
                      {nextItem.date}
                    </p>
                  )}
                </div>
              )
            );
          })}
        </div>
        {/* horizontal line */}
        <div className="hidden lg:flex w-[120%] ml-[7.28vw]" data-aos="flip-down">
          {data.map((item, i) => {
            return i !== data.length - 1 && <LineH1 key={i} />;
          })}
          <HexagonDot />
        </div>
        {/* even card */}
        <div className="hidden lg:flex ml-[4.28vw] space-x-[4vw] text-center">
          {data.map((item, i) => {
            const prevItem = data[i - 1];
            return (
              i % 2 === 1 && (
                <div className="flex space-x-[4.28vw]"  data-aos="flip-down">
                  {prevItem && (
                    <p className="flex justify-center items-center text-center font-GameOfSquid text-white w-[6vw]">
                      {prevItem.date}
                    </p>
                  )}
                  <div className="my-[1vw]">
                    <TimeLineCard content={item.name} key={i} />
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="absolute flex -mt-[8vh] lg:hidden">
          <Image
            src={VerticalVector}
            alt="gambar vector h-[200vh]"
            className="opacity-30"
          />
          <Image
            src={VerticalVector}
            alt="gambar vector h-[200vh]"
            className="opacity-30"
          />
        </div>
        <div className="w-full relative hidden lg:flex -mt-[45vh]">
          <Image src={HorizontalVector} alt="gambar vector" />
        </div>
      </div>
      <div className="lg:hidden">
        <Image src={awanBackground} className="w-full" alt="gambar awan" />
      </div>
    </div>
  );
}
