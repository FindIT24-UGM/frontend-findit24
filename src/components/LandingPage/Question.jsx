import React from "react";
import Image from "next/image";
import Button from "../Button";
import hmm1 from "../../assets/background/hmm1.png";
import placeholder from "../../assets/background/placeholder.svg";
import rightPlanet from "../../assets/background/rightPlanet.png";
import placeholderHP from "../../assets/background/placeholderHP.svg";
import bg1 from "../../assets/background/bg1.svg";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

import CloudsDekstop from "../../assets/background/awanSponsorsDekstop.png";
import CloudsTablet from "../../assets/background/awanSponsorsTablet.png";
import CloudsMobile from "../../assets/background/awanSponsorsMobile.png";

export default function Question() {
  const handleContactUsClick = () => {};

  return (
    <div className="h-fit bg-background-skyblue flex justify-center z-[-4]">
      <div className="relative flex justify-center">
        <div className="min-w-fit h-auto absolute hidden lg:flex -top-[418px]">
          <div className="min-w-fit h-auto scale-125 flex relative object-none object-right">
            <Image
              alt="bg"
              src={CloudsDekstop}
              className="overflow-visible animate-swipeRight2"
            />
            <Image
              alt="bg"
              src={CloudsDekstop}
              className="overflow-visible absolute animate-swipeRight1"
            />
          </div>
        </div>
        <div className="min-w-fit h-auto absolute hidden sm:flex lg:hidden -top-72">
          <div className="min-w-fit h-auto flex relative object-none object-right scale-[1.8]">
            <Image
              alt="bg"
              src={CloudsTablet}
              className="overflow-visible animate-swipeRight2"
            />
            <Image
              alt="bg"
              src={CloudsTablet}
              className="overflow-visible absolute animate-swipeRight1"
            />
          </div>
        </div>
        <div className="min-w-fit h-auto absolute flex sm:hidden -top-40">
          <div className="min-w-fit h-auto flex relative object-none object-right scale-[2]">
            <Image
              alt="bg"
              src={CloudsMobile}
              className="overflow-visible animate-swipeRight2"
            />
            <Image
              alt="bg"
              src={CloudsMobile}
              className="overflow-visible absolute animate-swipeRight1"
            />
          </div>
        </div>
        <div className="bg-[url('../assets/background/placeholder.svg')] w-[55vw] bg-no-repeat bg-contain grid-cols-2 grid z-10 max-md:w-[90vw] max-sm:bg-[url('../assets/background/placeholderHP.svg')] max-sm:grid-cols-1 translate-y-[8vw] max-md:translate-y-[12vw]">
          <div className=" scale-125 max-sm:scale-60 translate-y-[-10vw] translate-x-[-2vw] w-fit max-sm:flex max-sm:place-self-center max-sm:translate-x-[0vw] max-md:translate-y-[-15vw] max-sm:translate-y-[-65vw] max-sm:mt-[25vw] max-sm:mb-[15vw]">
            <Image src={hmm1} alt="logo" className="w-[80vw] max-sm:w-[50vw]" />
          </div>
          <div className="flex flex-col mt-6 translate-y-[3vw] translate-x-[-5vw] max-sm:text-center max-sm:translate-y-[-80vw] max-sm:translate-x-[0vw]">
            <div className="grid font-GameOfSquid text-[#FCFCFC] text-[3.7vw] leading-[4vw] max-md:text-[6vw] max-md:leading-9 max-sm:text-[9vw] max-sm:leading-10">
              <p>HAVE ANY</p>
              <p>QUESTIONS?</p>
            </div>
            <div className="mt-[1.6vw] flex gap-x-4 w-100px max-sm:justify-center">
              <a
                href="mailto:findit@gmail.com?subject=Subjek%20Email&body=Pesan%20Anda%20di%20sini"
                className="flex justify-center items-center w-fit space-x-[1vw] px-[1vw] py-[0.8vw] max-md:space-x-[2.6vw] max-md:py-[2vw] max-md:px-[2vw] max-sm:space-x-[3vw] max-sm:py-[2vw] max-sm:px-[4vw] text-white text-[1vw] max-md:text-[2vw] max-sm:text-[3.2vw] bg-black rounded-md font-GameOfSquid"
              >
                <p>KONTAK KAMI</p>
                <HiArrowRight />
              </a>
              <Link
                href="/faq"
                className="flex justify-center items-center w-fit space-x-[1vw] px-[1vw] py-[0.8vw] max-md:space-x-[2.6vw] max-md:py-[2vw] max-sm:space-x-[3vw] max-sm:py-[2vw] text-white text-[1vw] max-md:text-[2vw] max-md:px-[2vw] max-sm:text-[3.2vw] max-sm:px-[4vw] border-black border-[0.2vw] max-md:border-[0.4vw] max-sm:border-[0.4vw] rounded-md font-GameOfSquid"
              >
                <p>LIHAT FAQ </p>
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[14vw] translate-y-[-10vw]">
        <Image
          src={rightPlanet}
          alt="logo"
          className="w-[5vw] max-md:opacity-0"
        />
      </div>
      <div className="absolute justify-center flex z-[-0] gap-[60vw] opacity-30 translate-y-[4vw]">
        <Image
          src={bg1}
          alt="logo"
          className="w-[20vw] max-md:w-[30vw] max-md:translate-y-[-16vw] max-md:translate-x-[24vw]"
        />
        <Image
          src={bg1}
          alt="logo"
          className="w-[20vw] max-md:w-[30vw] max-md:translate-y-[-25vw] max-md:translate-x-[-23vw]"
        />
      </div>
    </div>
  );
}
