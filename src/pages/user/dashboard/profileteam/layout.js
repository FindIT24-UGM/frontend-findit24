import React from "react";
import Image from "next/image";
import leftBottom from "../../../../assets/background/Group240.png";
import rightTop from "../../../../assets/background/Group241.png";

const TeamProfileLayout = ({ children }) => {
  return (
    <div className="bg-background-skyblue min-h-[1000px] w-full lg:relative">
      <div className="lg:absolute lg:left-0 lg:bottom-0 lg:w-[150px] lg:flex hidden">
        <Image src={leftBottom} alt="assets.png" />
      </div>
      <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[150px] lg:flex hidden">
        <Image src={rightTop} alt="assets.png" />
      </div>
      <div className="px-9 py-14 space-y-5 lg:relative lg:grid lg:grid-cols-3 lg:gap-x-2 lg:gap-y-1">
        {children}
      </div>
    </div>
  );
};

export default TeamProfileLayout;
