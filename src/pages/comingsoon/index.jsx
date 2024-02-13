import React from "react";
import Button from "../../components/Button";
import RootLayout from "../layout";

export default function ComingSoon() {
  return (
    <div className="overflow-hidden">
      <RootLayout>
        <div className="min-h-screen w-full bg-gradient-to-r from-[#2A93C2] via-[#217196] to-[#2A93C2] flex flex-col justify-center items-center gap-y-8">
          <p className="font-GameOfSquid text-[8.889vw] md:text-[7.776vw] lg:text-[4.5vw] text-white drop-shadow-[0_0_4px_rgba(252,252,252,1)]">
            Coming Soon
          </p>
          <div className="flex flex-col md:flex-row font-Montserrat font-medium gap-x-1 justify-center text-white text-[5.210vw] md:text-[2.604vw] lg:text-[1.042vw]">
            <p className="">Oh, dear! it looks like the page</p>
            <p className="text-center">is under maintenance.</p>
          </div>
          <div className="w-[13.177vw] h-[2.917vw]">
            <Button fullW={true} text="Go To Homepage =>" />
          </div>
        </div>
      </RootLayout>
    </div>
  );
}
