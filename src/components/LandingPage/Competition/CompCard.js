import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi";

const CompCard = (props) => {
  const { name, activeIndex, mainDesc, secDesc, imageIcon, linkDestination } =
    props;
  return (
    <div className="w-full flex lg:justify-center lg:items-center p-10">
      <div className="bg-gradient-to-b from-[#ED7C80] to-[#F9C883] border-4 border-black rounded-md flex flex-col md:flex-row md:justify-between py-5 px-10 lg:min-h-[23vw] md:min-h-[35vw] min-h-[80vw]"
      data-aos="fade-up">
        <div className="order-2 md:order-1 md:w-1/2 md:flex md:items-center my-5 md:my-0">
          <div className="space-y-5 flex flex-col items-center">
            <p className="text-center font-Montserrat text-white text-[2.5wv] md:text-[1.5vw] lg:text-[1vw]">{mainDesc}</p>
            <button className="flex items-center space-x-3 px-2 py-3 text-white text-xl bg-black rounded-md lg:hidden">
              <p className="font-GameOfSquid font-bold bg text-[2.5vw]">see more</p>
              <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full flex justify-center md:w-1/2 lg:w-full md:my-auto">
          {imageIcon}
        </div>
        <div className="hidden lg:order-3 md:order-1 md:w-1/2 lg:flex md:items-center my-5 md:my-0">
          <div className="hidden space-y-5 lg:flex lg:flex-col items-center">
            <p className="text-center font-Montserrat text-white text-[1.2vw]">{secDesc}</p>
            <Link
              href={linkDestination}
              className="flex items-center space-x-3 px-2 py-3 text-white text-[2.5vw] bg-black rounded-md"
            >
              <p className="font-GameOfSquid font-bold bg text-[1vw]">see more</p>
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCard;
