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
    <div className="w-[532px] relative h-[305px] relative bg-[url('https://i.ibb.co/0Kk6kWb/Mask-group-Prize-Container.png')] bg-cover flex flex-col justify-center items-center gap-y-4">
      <div className="w-[300px] flex flex-col text-end font-Montserrat italic text-[1.25vw]">
        {type}
      </div>
      <Image
        src={Piala_Gold}
        sizes={200}
        className="absolute z-10 left-[10px]"
      />
      <div
        className={`z-0 w-[17.5vw] h-[3vw] ${additionalStyle} font-GameOfSquid text-black text-[0.7vw] font-normal flex items-center justify-end border-y-4 border-black`}
      >
        Rp
        <div className="text-[1.875vw]">{prize}</div>
      </div>
    </div>
  );
}
