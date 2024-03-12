import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";

import Accademy from "../../../assets/Logo/Academy.png";

import TopSeparator from "../../../assets/background/TopSeparatorWebinar.png";
import BottomSeparator from "../../../assets/background/BottomSeparatorWebinar.png";

//dsjkhk buat commit

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
          <h2
            className="font-GameOfSquid text-left md:text-center text-[#FCFCFC] text-[9.331vw] lg:text-[4.5vw] drop-shadow-competitions"
            data-aos="zoom-out-up">
            WORKSHOP
          </h2>
          <p
            className="text-left md:text-center font-CreatoDisplay text-[#92C2D0] text-[3.4vw] md:text-[2.604vw] lg:text-[1.25vw] font-bold"
            data-aos="zoom-out-up">
            “Exploring Blockchain : Embracing Future Technology”
          </p>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center mt-7 space-y-10 lg:gap-x-7">
          <div data-aos="fade-up">
            <div className="bg-[url('https://i.ibb.co/gRcH1C0/Webinar-Place-Holder.png')] bg-cover lg:w-[85vh] md:w-[67.3vw] w-[80vw] flex justify-center items-center">
              <Image
                src={Accademy}
                className="w-[62%] pl-4"
                alt="Academy.png"
              />
            </div>
          </div>
          <div
            className="space-y-5 flex flex-col items-center lg:items-start justify-center px-5 lg:text-left lg:px-0 pb-10"
            data-aos="zoom-out-up">
            <p className="font-Montserrat text-white text-center lg:text-left text-sm lg:text-base xl:pr-12">
              Workshop FIND IT! akan membahas teknologi blockchain, mulai dari
              dasar-dasar hingga aplikasi praktis dalam industri. Peserta akan
              memahami bagaimana teknologi ini mengubah cara transaksi, keamanan
              data, dan bahkan sistem keuangan.
            </p>
            <button className="flex items-center gap-3 py-2 px-4 bg-primary-300 w-fit rounded-md text-white">
              <Link className="font-GameOfSquid" href={"/workshop"}>
                WORKSHOP
              </Link>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* background dajsijdi*/}
      <div className="absolute bottom-0">
        <Image src={BottomSeparator} alt="Bottom Separator.png"></Image>
      </div>
    </div>
  );
};

export default WebinarComp;
