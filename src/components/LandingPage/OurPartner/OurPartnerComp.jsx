import React from "react";
import Image from "next/image";

import OurPartner from "./OurPartner";

import StarsDekstop from "../../../assets/background/STARS-SponsorsDekstop.png";
import StarsTablet from "../../../assets/background/STARS-SponsorsTablet.png";
import StarsMobile from "../../../assets/background/STARS-SponsorsMobile.png";

import PlanetMobile from "../../../assets/background/planetSponsorMobile.png";
import PlanetTablet from "../../../assets/background/planetSponsorTablet.png";
import PlanetRight from "../../../assets/background/rightPlanetSponsors.png";
import PlanetLeft from "../../../assets/background/leftPlanet-Sponsors.png";

import CloudsDekstop from "../../../assets/background/awanSponsorsDekstop.png";
import CloudsTablet from "../../../assets/background/awanSponsorsTablet.png";
import CloudsMobile from "../../../assets/background/awanSponsorsMobile.png";

const OurPartnerComp = () => {
  return (
    <div className="w-full lg:pt-8 pb-24 lg:pb-48 bg-background-skyblue">
      <div className="relative">
        {/*background*/}
        <Image
          alt="bg"
          src={StarsDekstop}
          className="bg-cover absolute hidden lg:flex w-full"
          data-aos="fade-down"
        />
        <Image
          alt="bg"
          src={StarsTablet}
          className="bg-cover absolute hidden md:flex lg:hidden w-full"
          data-aos="fade-down"
        />
        <Image
          alt="bg"
          src={StarsMobile}
          className="bg-cover absolute flex md:hidden lg:hidden w-full"
          data-aos="fade-down"
        />
        <Image
          alt="bg"
          src={PlanetMobile}
          className="absolute top-[15px] flex md:hidden lg:hidden"
          data-aos="fade-right"
        />
        <Image
          alt="bg"
          src={PlanetTablet}
          className="absolute top-[60px] left-[22px] hidden md:flex lg:hidden"
          data-aos="fade-right"
        />
        <Image
          alt="bg"
          src={PlanetLeft}
          className="absolute hidden top-[150px] left-[70px] lg:flex"
          data-aos="fade-right"
        />
        <div className="min-w-fit h-auto absolute hidden lg:flex top-[418px]">
          <div className="min-w-fit h-auto scale-125 flex relative object-none object-right">
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
        <div className="min-w-fit h-auto absolute hidden sm:flex lg:hidden top-72">
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
        <div className="min-w-fit h-auto absolute flex sm:hidden top-40">
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
        {/*content*/}
        <div className="">
          <div className="w-full h-auto flex flex-col pt-[110px] sm:pt-[225px] pb-96">
            <div className="flex justify-center items-center ">
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-[74vw]">
                <div className=" text-[#FCFCFC] text-[9vw] lg:text-[4.470vw] flex justify-center">
                  <div
                    className=" inline-flex py-[1.2vw] font-GameOfSquid gap-x-3 sm:gap-x-5 lg:gap-x-8 items-center"
                    data-aos="zoom-out-up"
                  >
                    <p className="drop-shadow-[0_0px_2px_rgba(255,255,255,1)] sm:drop-shadow-[0_0px_4px_rgba(255,255,255,1)] lg:drop-shadow-[0_0px_6px_rgba(255,255,255,1)]">
                      our
                    </p>
                    <div
                      className="border-solid z-30 border-[#92C2D0] border-[0.55vw] lg:border-[0.3vw] rounded-[1.8vw] lg:rounded-[0.9vw] lg:py-0 px-[1.5vw] lg:px-[1.1vw]"
                      data-aos="zoom-out-up"
                    >
                      <p className="drop-shadow-[0_0px_2px_rgba(255,255,255,1)] sm:drop-shadow-[0_0px_4px_rgba(255,255,255,1)] lg:drop-shadow-[0_0px_6px_rgba(255,255,255,1)]">
                        PARTNER
                      </p>
                    </div>
                  </div>
                </div>
                <p
                  className="flex justify-center items-center font-CreatoDisplay text-[#92C2D0] text-center align-top lg:text-justify text-[3.4vw] md:text-[2.604vw] lg:text-[1.25vw] font-bold mt-4 sm:mt-8 lg:mt-0 lg:ml-6 z-30"
                  data-aos="zoom-out-up"
                >
                  We sincerely express our appreciation to our sponsors for
                  their generous support and confidence in our event.
                </p>
              </div>
            </div>
            <div>
              <OurPartner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartnerComp;
