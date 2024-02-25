import React from "react";
import Image from "next/image";
import placeholder from "../../assets/about/placeholdertengah.svg";
import Roket from "../../assets/about/AWAN MIRING.png";
import Awankanan1 from "../../assets/about/AWAN MIDDLE1.png";
import Awankanan2 from "../../assets/about/AWAN MIDDLE2.png";
import Linetengah from "../../assets/about/linetengah.png";
import Awankiri2 from "../../assets/about/awankiri2.png";
import Awankiri3 from "../../assets/about/awankiri3.png";
import Lineberdiri from "../../assets/about/lineberdiri.png";

export default function Youtube(){
    return(
        <div className="w-screen  h-[50vw] max-md:h-[80vw] max-sm:h-[150vw] flex justify-center items-center">
            <div className="relative flex  max-md:flex-col  w-full">
                <div className="relative flex flex-col  ml-[10vw] max-md:ml-0 max-md:mt-[4vw] top-[6vw] h-fit">
                    <div className=" justify-center text-center font-Montserrat mb-[1vw] text-[#FCFCFC] text-[1vw] max-md:text-[1.6vw] max-sm:text-[3.2vw] font-bold max-md:font-semibold max-sm:text-left max-sm:px-[6vw] z-[2]">
                        <p>INTRODUCING FIND IT! 2024 THEME</p>
                    </div>
                    <div className=" relative justify-center text-center font-GameOfSquid text-[#FCFCFC] drop-shadow-[0_0vw_0.1vw_rgba(255,255,255,1)] text-[3vw] max-md:text-[3.6vw] max-sm:text-[7.8vw] max-sm:text-left max-sm:px-[6vw] leading-10 max-md:leading-[0.9] mb-[2vw] z-[2]">
                        <p className="max-sm:w-[30%] max-sm:mb-[3vw]">TECH HORIZON:</p>
                        <p className="max-sm:w-[70%]">BEYOND THE DIGITAL SKY</p>
                    </div>
                    <div className="relative w-[50vw] max-sm:w-[250vw] flex flex-col justify-center items-center max-md:w-[85vw] left-0 max-md:self-center">
                        <Image src={placeholder} alt="BG_Card.svg" className="" />
                        <div className="absolute flex w-[78%] max-sm:w-[32%] justify-center text-center items-center font-Montserrat font-semibold mb-[1vw] text-[#FCFCFC] text-[1vw] max-md:text-[2vw] max-sm:text-[3.2vw] max-sm:text-left">
                        “Tech Horizon” menggambarkan pandangan yang melampaui batas-batas konvensional dalam dunia teknologi. “Beyond the Digital Sky” mencerminkan semangat eksplorasi dan inovasi di luar batasan yang kita kenal sekarang. Tema ini mengajak peserta untuk menjelajahi dan melampaui horison digital, mengejar ide-ide canggih yang belum terpikirkan sebelumnya
                        </div>
                    </div>
                </div>
                
                <div className="relative bg-cover w-[50vw] translate-y-[-10vw] max-md:translate-y-[-14vw] max-md:translate-x-[50vw] max-sm:translate-y-[-123vw]">
                    <Image src={Roket} alt="Roket.png" />
                </div>
                <div className="absolute bg-cover w-[18vw] right-[10vw] translate-y-[16vw] max-md:translate-y-[64vw] max-sm:translate-y-[24vw]">
                    <Image src={Awankanan1} alt="Roket.png" />
                </div>
                <div className="absolute bg-cover w-[26vw] max-md:w-[29vw] right-[-4vw] translate-y-[18vw] max-md:translate-y-[66vw] max-sm:translate-y-[28vw]">
                    <Image src={Awankanan2} alt="Roket.png" />
                </div>
                <div className="absolute bg-cover w-[18vw] right-[-4vw] translate-y-[26vw] max-md:translate-y-[76vw] max-sm:translate-y-[36vw]">
                    <Image src={Awankanan1} alt="Roket.png" />
                </div>
                <div className="absolute w-[full] translate-y-[8vw] max-md:translate-y-[20vw] mx-auto z-[-1]">
                    <Image src={Linetengah} />
                </div>
                <div className="absolute w-[10vw] max-md:w-[20vw] translate-y-[-3vw] left-0 z-[-1] max-sm:opacity-0">
                    <Image src={Awankiri2} />
                </div>
                <div className="absolute w-[13vw] max-md:w-[20vw] translate-y-[30vw] max-md:translate-y-[48vw] max-sm:translate-y-[110vw] left-0">
                    <Image src={Awankiri3} />
                </div>
                <div className="absolute flex w-[90vw] opacity-0 mx-auto max-md:opacity-100 max-md:self-center max-md:text-center z-[-1]">
                    <Image src={Lineberdiri} />
                    <Image src={Lineberdiri} />
                    <Image src={Lineberdiri} />
                </div>
            </div>
        </div>

    );
}