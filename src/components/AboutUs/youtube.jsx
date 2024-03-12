import React from "react";
import Image from "next/image";
import YoutubeImage from "../../assets/about/youtube.svg";
import Bottomcircuit from "../../assets/about/botomCircuit.png";
import CloudsDekstop from "../../assets/background/awanSponsorsDekstop.png";
import CloudsTablet from "../../assets/background/awanSponsorsTablet.png";
import CloudsMobile from "../../assets/background/awanSponsorsMobile.png";

export default function Youtube() {
  return (
    <div className="w-screen  h-[50vw] flex justify-center items-center mb-[20vw] lg:mb-[6vw]">
      <div className="relative w-full flex flex-col text-center">
        <div className="font-GameOfSquid text-[#FCFCFC] drop-shadow-[0_0px_2px_rgba(255,255,255,1)] text-[3.7vw] mb-[3vw]">
          <p>fIND It! REWIND</p>
        </div>
        <div className="w-[62.3vw] max-md:w-[82.3vw] self-center">
          <iframe
            className="absolute rounded-3xl mx-auto my-auto w-[55vw] h-[30vw] translate-y-[4vw] max-md:w-[65vw] max-md:h-[35vw] max-md:translate-y-[4vw]  inset-0"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/tW7Gr2J0b84?si=6QR5IjPS0MHILkkH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
          <Image src={YoutubeImage} alt="BG_Card.svg" className="" />
        </div>
        <div className="absolute w-[100%] translate-y-[20vw] mx-auto z-[-1]">
          <Image src={Bottomcircuit} alt="BottomCircuit" />
        </div>
        <div className="min-w-fit h-auto absolute hidden lg:flex top-0 z-[-1]">
          <div className="min-w-fit top-20 h-auto scale-110 flex relative object-none object-right">
            <Image
              alt="bg"
              src={CloudsDekstop}
              className="overflow-visible animate-swipeRight2"
            />
            {/* <Image
              alt="bg"
              src={CloudsDekstop}
              className="overflow-visible absolute animate-swipeRight1"
            /> */}
          </div>
        </div>
        <div className="min-w-fit w-[26vw] absolute hidden sm:flex lg:hidden top-[18vw] z-[-1]">
          <div className="min-w-fit h-auto flex relative object-none object-right scale-[1.8]">
            <Image
              alt="bg"
              src={CloudsTablet}
              className="overflow-visible animate-swipeRight2"
            />
            {/* <Image
              alt="bg"
              src={CloudsTablet}
              className="overflow-visible absolute animate-swipeRight1"
            /> */}
          </div>
        </div>
        <div className="min-w-fit h-auto absolute flex sm:hidden top-0 z-[-1]">
          <div className="min-w-fit h-auto flex relative object-none object-right scale-[2]">
            <Image
              alt="bg"
              src={CloudsMobile}
              className="overflow-visible animate-swipeRight2"
            />
            {/* <Image
              alt="bg"
              src={CloudsMobile}
              className="overflow-visible absolute animate-swipeRight1"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
