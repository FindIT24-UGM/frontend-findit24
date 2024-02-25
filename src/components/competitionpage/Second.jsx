import React, { useState, useEffect } from "react";
import Polygon from "../../assets/background/Polygon6.png";
import Roket1 from "../../assets/background/Roket1.png";
import Cardcompe from "../../assets/background/cardcompe2.png";
import Bintang1 from "../../assets/background/bintangCepe.png";
import Bintang2 from "../../assets/background/bintangCepe2.png";
import Pattern1 from "../../assets/background/patternCepe1.png";
import PatternTab from "../../assets/background/patternCepeTab.png";
import PatternHP from "../../assets/background/patternCepeHP.png";
import Image from "next/image";

function NamaLomba({ content }) {
  return (
    <div className="w-[120%] relative flex items-center text-center justify-center mt-32">
      <div className="absolute left-[-10vw] w-full h-[5vw] max-md:h-[6vw] bg-gradient-to-b border-4 border-black from-[#FF8C5A] to-[#F95949]"></div>
      <div className="relative whitespace-nowrap font-GameOfSquid text-[1.8vw] text-black flex justify-between w-full z-10">
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

function PolygonDot() {
  return (
    <div className="w-[1.875vw]">
      <Image
        src={Polygon}
        sizes={36}
        alt="Hexagon Dot.png"
        className="relative z-30"
      ></Image>
    </div>
  );
}

function LineH1() {
  return (
    <div className="relative w-[50%] flex items-center justify-center">
      <div className="absolute left-0 w-full h-[0.65vw] bg-gradient-to-l from-[#FF8C5A] to-[#F95949]"></div>
      <div className="relative flex justify-between z-10 w-[110%]">
        <PolygonDot />
        <PolygonDot />
        <PolygonDot />
      </div>
    </div>
  );
}

function LineH2() {
  return (
    <div className="relative h-[54vw] max-sm:h-[88vw] flex justify-center w-[10vw] max-sm:left-0 max-sm:translate-y-[20vw]">
      <div className="absolute w-[0.65vw] h-full bg-gradient-to-t from-[#FF8C5A] to-[#F95949]"></div>
      <div className="relative flex flex-col justify-between items-center z-10 w-[110%]">
        <PolygonDot />
        <PolygonDot />
        <PolygonDot />
      </div>
    </div>
  );
}

function CardAll() {
  return (
    <div className="relative w-[68%] flex items-center justify-center mt-14 mb-20 max-lg:flex-col flex-row max-md:w-[45%] max-md:my-0">
      <div className="relative flex justify-between z-10 w-fit h-fit lg:flex-row flex-col max-md:h-[80vw] max-md:gap-[28vw] max-md:justify-normal max-sm:gap-[40vw]">
        <div className="relative z-30 aspect-[150/80] w-[21.3vw] max-md:mx-auto max-md:my-0 max-md:w-[44vw] max-sm:w-[70vw]">
          <Image src={Cardcompe} alt="card.png" className="absolute" fill />
          <div className="absolute w-full text-black ml-[5vw] text-[1.12vw] max-md:text-[2.8vw] max-md:ml-[8vw] max-sm:text-[3.4vw] max-sm:ml-[14vw] max-sm:mt-[6vw] mt-[3vw]  text-left">
            <strong className="font-bold">Kategori Peserta</strong>
            <div className="mt-2">
              <ul>
                <li className="list-disc">Sendiri</li>
                <li className="list-disc">Team (Max 3 orang)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative z-30 aspect-[150/80] w-[21.3vw] max-md:mx-auto max-md:my-0 max-md:w-[44vw] max-sm:w-[70vw]">
          <Image src={Cardcompe} alt="card.png" className="absolute" fill />
          <div className="absolute w-full text-black left-0 ml-[5vw] text-[1.12vw] max-md:text-[2.8vw] max-md:ml-[8vw] max-sm:text-[3.4vw] max-sm:ml-[14vw] max-sm:mt-[6vw] mt-[3vw] text-left">
            <strong className="font-bold">Biaya Pendaftaran</strong>
            <div className="mt-2">
              <ul>
                <li className="list-disc">Rp 100.000 (Early Bird)</li>
                <li className="list-disc">Rp 130.000 (Regular)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative z-30 aspect-[150/80] w-[21.3vw] max-md:mx-auto max-md:my-0 max-md:w-[44vw] max-sm:w-[70vw]">
          <Image src={Cardcompe} alt="card.png" className="absolute" fill />
          <div className="absolute w-full text-black left-0 ml-[5vw] text-[1.12vw] max-md:text-[2.8vw] max-md:ml-[8vw] max-sm:text-[3.4vw] max-sm:ml-[14vw] max-sm:mt-[6vw] mt-[3vw] text-left">
            <strong className="font-bold">Contact Person</strong>
            <div className="mt-2">
              <ul>
                <li className="list-disc">WA : 6281234567800</li>
                <li className="list-disc">Line : usnline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isVisible;
};

export default function Second({ cabangLomba }) {
  return (
    <main className="w-screen items-center justify-center text-center relative max-sm:mb-[50vw]">
      <div className="relative w-full">
        <Image
          src={Pattern1}
          className="absolute w-[16vw] top-[0vw] right-[0vw] z-0"
        />
        <Image
          src={Pattern1}
          className="absolute w-[16vw] top-[0vw] left-[0vw] z-0 rotate-180"
        />
        <Image
          src={PatternTab}
          className="absolute w-[16vw] top-[0vw] justify-center z-0 min-md:opacity-0 max-sm:opacity-0"
        />
        <Image
          src={PatternHP}
          className="absolute w-[16vw] top-[0vw] justify-center z-0 min-sm:opacity-0"
        />
      </div>
      <div className="absolute left-0 top-[-8vw] w-[15vw] z-30 max-md:w-[32vw] max-md:top-[-22vw] max-sm:w-[24vw] max-sm:top-[-10vw]">
        <Image src={Roket1} />
      </div>
      <div className="w-full h-[20vw] flex justify-center items-center relative ">
        <div className="w-full rotate-6">
          <NamaLomba content={cabangLomba} />
        </div>
      </div>
      <Image
        src={Bintang1}
        className="absolute w-[40vw] left-[20vw] top-[16vw] z-0"
      />
      <Image
        src={Bintang1}
        className="absolute w-[40vw] left-[40vw] top-[24vw] z-0"
      />
      <Image
        src={Bintang2}
        className="absolute w-[50vw] left-[30vw] top-[48vw] z-0"
      />
      <div className="font-Montserrat text-[1vw] w-[28vw] flex justify-center items-center text-center mx-auto my-20 max-md:w-[54%] max-md:text-[2vw]  max-sm:w-[60%] max-sm:text-[3vw]">
        Kompetisi yang menguji kemampuan berpikir logis untuk menyelesaikan
        masalah menggunakan sebuah program komputer yang ditulis dalam batasan
        waktu dan memori yang ditentukan.
      </div>
      {MyComponent() && (
        <div className=" w-full flex justify-center items-center mb-[16vw] max-sm:translate-x-[8vw] max-sm:gap-[3vw] max-sm:justify-normal">
          <LineH2 />
          <CardAll />
        </div>
      )}
      {!MyComponent() && (
        <div className="w-full flex flex-col justify-center items-center mb-[16vw]">
          <LineH1 />
          <CardAll />
        </div>
      )}
    </main>
  );
}
