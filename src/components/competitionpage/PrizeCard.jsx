import React from "react";
import Image from "next/image";
import Piala_Gold from "../../assets/compepage/Piala_Gold.png";

let additionalStyle;

export default function PrizeCard({ type, prize }) {
  switch (type) {
    case "1st place":
      prize = "3.000.000";
      additionalStyle = "bg-primary-300";
      break;
    case "2nd place":
      prize = "2.000.000";
      additionalStyle = "bg-[#969696]";
      break;
    case "3rd place":
      prize = "1.000.000";
      additionalStyle = "bg-[#82512C]";
  }
  return (
    <div className="w-[280px] h-[160px] lg:w-[532px] relative lg:h-[305px] relative bg-[url('https://i.ibb.co/0Kk6kWb/Mask-group-Prize-Container.png')] bg-cover flex flex-col justify-center items-center gap-y-4">
      <div className="w-[47.778vw] md:w-[20.833vw] lg:w-[14.5vw] flex flex-col text-end font-Montserrat italic text-[18px] lg:text-[1.25vw]">
        {type}
      </div>
      <Image
        src={Piala_Gold}
        className="absolute z-10 left-[10px] mx-3 md:mx-0 w-[28.611vw] md:w-[13.411vw] lg:w-[10.417vw]"
        alt="Piala.png"
      />
      <div
        className={`z-0 w-[47.778vw] md:w-[20.833vw] lg:w-[14.5vw] h-[36px] lg:h-[3vw] ${additionalStyle} font-GameOfSquid text-black lg:text-[0.7vw] font-normal flex items-center justify-end  border-y-4 border-black`}
      >
        Rp
        <div className="text-[5vw] md:text-[2.344vw] lg:text-[1.667vw] lg:mr-4">
          {prize}
        </div>
      </div>
    </div>
  );
}
