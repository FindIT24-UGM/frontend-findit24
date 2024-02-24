import React from "react";
import Image from "next/image";

const TimeLineCard = ({ content, customWidthCSS }) => {
  return (
    <div
      className={`bg-[url('https://i.ibb.co/R64Tk8n/Subtract.png')] flex justify-center items-center bg-cover w-[36.4vw] h-[24vw] lg:w-[14.56vw] lg:h-[9.6vw] ${
        !customWidthCSS ? "" : customWidthCSS
      }`}
    >
      <h2 className="font-Montserrat">{content}</h2>
    </div>
  );
};

export default TimeLineCard;
