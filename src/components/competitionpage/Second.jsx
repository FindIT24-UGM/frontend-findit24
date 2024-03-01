import React, { useState, useEffect, useRef } from "react";
import Roket1 from "../../assets/background/Roket1.png";
import Bintang1 from "../../assets/background/bintangCepe.png";
import Bintang2 from "../../assets/background/bintangCepe2.png";
import Pattern1 from "../../assets/background/patternCepe1.png";
import PatternTab from "../../assets/background/patternCepeTab.png";
import PatternHP from "../../assets/background/patternCepeHP.png";
import HexagonDot_Desktop from "../../assets/compepage/Hexagon_Desktop.png";
import Image from "next/image";

function NamaLomba({ content }) {
  const sliderTrackRef = useRef(null);
  let requestId = null;

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;

    const startAnimation = () => {
      if (sliderTrack) {
        const sliderWidth = sliderTrack.scrollWidth;
        let position = 0;

        const animate = () => {
          position += 1;
          if (position >= sliderWidth) {
            position = 0;
          }
          sliderTrack.style.transform = `translateX(-${position}px)`;
          requestId = requestAnimationFrame(animate);
        };

        animate();
      }
    };

    startAnimation();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="w-[250%] md:w-[150%] lg:w-[120%] relative flex items-center text-center justify-center mt-32">
      <div className="absolute left-[-10vw] w-full h-[5vw] max-md:h-[6vw] bg-gradient-to-b border-4 border-black from-[#FF8C5A] to-[#F95949]"></div>
      <div
        ref={sliderTrackRef}
        className="relative whitespace-nowrap font-GameOfSquid text-[3.33vw] md:text-[2.6vw] lg:text-[1.8vw] text-black flex justify-between w-full z-10"
      >
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}&emsp;
        {content}
      </div>
    </div>
  );
}
const cardAllItems = [
  { title: "Kategori Peserta", desc: ["Sendiri", "Team (Max 3 orang)"] },
  { title: "Technical Meeting", desc: ["26 April 2024", "dikananmu"] },
  { title: "Penutupan Pendaftaran", desc: ["24 Maret 2024", "dikananmu", "test aja"] },
];

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
    <div className="w-[24.5vw] flex items-center">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l from-[#FF8C5A] to-[#F95949] -m-[1vw]"></div>
    </div>
  );
}

function LineV1() {
  return (
    <div className="h-[24.4vw] w-fit">
      <HexagonDot />
      <div className="h-full w-[45%] bg-gradient-to-b from-[#FF8C5A] to-[#F95949] mx-auto"></div>
    </div>
  );
}

function TimeLineCard({ data }) {
  return (
    <div
      className={`bg-[url('https://i.ibb.co/Jsxq84v/cardcompe2.png')] flex justify-center items-center bg-cover w-[41.0vw] h-[22.4vw] lg:w-[20.5vw] lg:h-[11.2vw] `}
    >
      <div className="flex flex-col w-full">
        <h2 className="font-Montserrat text-center text-[2vw] lg:text-[1vw] font-bold mb-2">{data.title}</h2>
        <div className="flex flex-col justify-start items-start pl-[1.2vw]">
          {data.desc.map((item, index) => (
            <li className="font-Montserrat text-[2vw] lg:text-[0.9vw]" key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimeLine({ data }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex gap-x-3 justify-center lg:gap-x-0 lg:flex-col px-10 z-10 lg:w-fit w-full">
        {/* vertikal line */}
        <div className="lg:hidden mt-[11.2vw]">
          {data.map((item, index) => {
            return i !== data.length - 1 && <LineV1 key={index} />;
          })}
          <HexagonDot />
        </div>
        <div className="flex flex-col lg:hidden">
          {data.map((item, index) => {
            return (
              <div key={index} className="my-[1vw]">
                <TimeLineCard data={item} />
              </div>
            );
          })}
        </div>

        {/* horizontal line */}
        <div className="hidden lg:flex ml-[10.25vw]">
          {data.map((item, index) => {
            return i !== data.length - 1 && <LineH1 key={index} />;
          })}
          <HexagonDot />
        </div>
        <div className="hidden lg:flex space-x-[4vw] text-center">
          {data.map((item, index) => {
            return (
              <div className="flex space-x-[4.28vw]">
                <div className="my-[1vw]">
                  <TimeLineCard data={item} key={index} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default function Second({
  cabangLomba,
  competitionDescription,
}) {
  return (
    <main className="w-screen items-center justify-center text-center relative max-sm:mb-[50vw]">
      <div className="relative w-full">
        <Image
          src={Pattern1}
          className="absolute w-[16vw] top-[0vw] right-[0vw] z-0"
          alt="Pattern.png"
        />
        <Image
          src={Pattern1}
          className="absolute w-[16vw] top-[0vw] left-[0vw] z-0 rotate-180"
          alt="Pattern.png"
        />
        <Image
          src={PatternTab}
          className="absolute w-[16vw] top-[0vw] justify-center z-0 min-md:opacity-0 max-sm:opacity-0"
          alt="Pattern.png"
        />
        <Image
          src={PatternHP}
          className="absolute w-[16vw] top-[0vw] justify-center z-0 min-sm:opacity-0"
          alt="Pattern.png"
        />
      </div>
      <div className="absolute left-0 top-[-8vw] w-[15vw] z-30 max-md:w-[32vw] max-md:top-[-22vw] max-sm:w-[24vw] max-sm:top-[-10vw]">
        <Image src={Roket1} alt="Roket.png" />
      </div>
      <div className="w-full h-[20vw] flex justify-center items-center relative ">
        <div className="w-full rotate-6">
          <NamaLomba content={cabangLomba} />
        </div>
      </div>
      <Image
        src={Bintang1}
        className="absolute w-[40vw] left-[20vw] top-[16vw] z-0"
        alt="Bintang.png"
      />
      <Image
        src={Bintang1}
        className="absolute w-[40vw] left-[40vw] top-[24vw] z-0"
        alt="Bintang.png"
      />
      <Image
        src={Bintang2}
        className="absolute w-[50vw] left-[30vw] top-[48vw] z-0"
        alt="Bintang.png"
      />
      <div className="font-Montserrat text-[3.85vw] md:text-[2.1vw] lg:text-[1vw] w-[83.33vw] md:w-[52vw] lg:w-[28vw] flex justify-center items-center text-center mx-auto my-20 max-md:w-[54%] max-md:text-[2vw]  max-sm:w-[60%] max-sm:text-[3vw]">
        {competitionDescription}
      </div>

      <TimeLine data={cardAllItems} />
    </main>
  );
}


