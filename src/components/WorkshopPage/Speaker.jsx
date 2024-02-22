import React from "react";
import Pak_Guntur from "../../assets/workshoppage/Pak_Guntur.png";
import Image from "next/image";

function Speaker() {
  return (
    <div className="min-h-screen bg-[#233E51] flex justify-center items-center">
      <div className="w-[35.417vw] lg:w-[22vw] h-[700px] bg-[#2985B0] flex flex-col items-center gap-y-8">
        <p className="font-GameOfSquid text-[1.25vw] text-white mt-16">
          Speaker
        </p>
        <div className="relative mt-4 aspect-[211/202] w-[11vw] mt-8">
          <Image src={Pak_Guntur} alt="Speaker.png" fill></Image>
        </div>
        <div className="flex flex-col font-GameOfSquid text-white text-center gap-y-2">
          <p>Dr. Ir. Guntur Dharma Putra</p>
          <p>S.T., M.Sc.</p>
        </div>
        <div className="flex flex-col text-white text-center font-Montserrat">
          <p>Dosen Departemen Teknik</p>
          <p>Elektro dan Teknologi Informasi</p>
          <p>Fakultas Teknik UGM</p>
        </div>
      </div>
    </div>
  );
}

export default Speaker;
