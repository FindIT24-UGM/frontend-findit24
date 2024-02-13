import React from "react";
import Opreg_Container from "../../assets/compepage/Opreg_Container.png";
import styles from "./Timeline.module.css";
import Image from "next/image";
import HexagonDot_Desktop from "../../assets/compepage/Hexagon_Desktop.png";

function HexagonDot() {
  return (
    <div className="w-[1.875vw]">
      <Image
        src={HexagonDot_Desktop}
        sizes={36}
        alt="Hexagon Dot.png"
        className="relative z-30"
      ></Image>
    </div>
  );
}

function LineH1() {
  return (
    <div className="w-[105%] flex items-center">
      <HexagonDot />
      <div className="w-full h-[0.75vw] bg-gradient-to-l -ml-2 from-[#FF8C5A] to-[#F95949]"></div>
    </div>
  );
}

function HorizontalTextBot() {
  <div className="w-full h-fit flex flex-col gap-y-[1.75vw]">
    <LineH1 />
    <p></p>
  </div>;
}

export default function Timeline() {
  return (
    <div className="flex flex-col w-full h-fit gap-y-[1.75vw]">
      <h2 className="font-GameOfSquid text-white mt-12">Timeline</h2>
      <div className="grid grid-cols-7 gap-y-[1.75vw]">
        <div></div>
        <div className="flex flex-col justify-end">
          <Image src={Opreg_Container} alt="Opreg.png"></Image>
        </div>
        <div>
          <div className="flex h-[240px] items-end">
            <div className="w-[75px] flex flex-col font-GameOfSquid text-white">
              <p className="text-[1.875vw] text-center">12</p>
              <p className="text-[1.042vw]">March</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <Image src={Opreg_Container} alt="Opreg.png"></Image>
        </div>
        <div></div>
        <div className="flex flex-col justify-end">
          <Image src={Opreg_Container} alt="Opreg.png"></Image>
        </div>
        <div></div>
        {/* Line */}
        <div></div>
        <LineH1 />
        <LineH1 />
        <LineH1 />
        <LineH1 />
        <LineH1 />
        <LineH1 />
        <div></div>
        <div>
          <div className="w-[75px] flex flex-col font-GameOfSquid text-white -ml-4">
            <p className="text-[1.875vw] text-center">12</p>
            <p className="text-[1.042vw]">March</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center">
          <Image src={Opreg_Container} wid alt="Opreg.png"></Image>
        </div>
        <div></div>
        <div>
          <Image src={Opreg_Container} wid alt="Opreg.png"></Image>
        </div>
        <div></div>
        <div>
          <Image src={Opreg_Container} wid alt="Opreg.png"></Image>
        </div>
      </div>
    </div>
  );
}
