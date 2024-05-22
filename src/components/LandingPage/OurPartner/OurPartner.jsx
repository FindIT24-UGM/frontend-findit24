import React from "react";

import Telepeformance from "../../../assets/Logo/Teleperformance";
import Image from "next/image";
import Sponsor_Fix from "../../../assets/Logo/Sponsor_Fix.png";
import Gradient_Bg from "../../../assets/Logo/Gradient_Bg.png";

export default function OurPartner() {
  return (
    <>
      <div className="mt-8 sm:mt-9 lg:mt-[136px] w-full h-auto flex justify-center">
        {/* <div className="w-auto h-auto z-50 bg-secondary-blue border-text-placeholder-dark border-[2px] sm:border-[4px] lg:border-[8px] rounded-md sm:rounded-lg lg:rounded-2xl py-[17px] sm:py-7 lg:py-12 pr-[15px] sm:pr-[30px] lg:pr-[38px] pl-8 sm:pl-[54px] lg:pl-[87px] flex justify-center items-center gap-[10px] sm:gap-[14px] lg:gap-8"> */}
        <Image
          src={Sponsor_Fix}
          className="w-[80.5vw] md:w-[65.5vw] lg:w-[59vw] 2xl:w-[50vw] z-50"
          alt="Sponsor"
        />
        {/* </div> */}
      </div>
    </>
  );
}
