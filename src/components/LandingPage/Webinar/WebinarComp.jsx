import React from "react";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

import Accademy from "../../../assets/Logo/Academy.png";

import TopSeparator from "../../../assets/background/TopSeparatorWebinar.png";
import BottomSeparator from "../../../assets/background/BottomSeparatorWebinar.png";

const WebinarComp = () => {
  return (
    <div className="bg-background-skyblue min-h-screen flex justify-center lg:px-[54px] relative">
      {/* background */}
      <div className="absolute top-0">
        <Image src={TopSeparator} alt="Top Separator.png"></Image>
      </div>

      {/* content */}
      <div className="border-x-[6px] border-[#92C2D0] w-[90%] lg:w-[80%]">
        <div className="gap-y-1 font-bold mt-16 lg:mt-24 md:text-center md:pl-0 text-left pl-10">
          <h2 className="font-GameOfSquid text-text-placeholder-light text-sm md:text-2xl lg:text-6xl">
            WORKSHOP
          </h2>
          <p className="font-CreatoDisplay text-secondary-blue text-[12px]">
            “Exploring Blockchain : Embracing Future Technology”
          </p>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center mt-7 space-y-10 lg:gap-x-7">
          <div>
            <div className="bg-[url('https://i.ibb.co/gRcH1C0/Webinar-Place-Holder.png')] bg-cover lg:w-[85vh] md:w-[67.3vw] w-[48vw] flex justify-center items-center">
              <Image
                src={Accademy}
                className="w-[62%] pl-4"
                alt="Academy.png"
              />
            </div>
          </div>
          <div className="space-y-5 flex flex-col items-center lg:items-start justify-center px-5 lg:text-left lg:px-0 pb-10">
            <p className="font-Montserrat text-white text-center lg:text-left">
              Workshop FIND IT! akan membahas teknologi blockchain, mulai dari
              dasar-dasar hingga aplikasi praktis dalam industri. Peserta akan
              memahami bagaimana teknologi ini mengubah cara transaksi, keamanan
              data, dan bahkan sistem keuangan.
            </p>
            <div className="flex items-center gap-3 p-2 bg-primary-300 w-fit rounded-md text-white">
              <p className="font-GameOfSquid">WEBINAR</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* background */}
      <div className="absolute bottom-0">
        <Image src={BottomSeparator} alt="Bottom Separator.png"></Image>
      </div>
    </div>
  );
};

export default WebinarComp;
