import React from "react";
import Pak_Guntur from "../../assets/workshoppage/Pak_Guntur.png";
import Image from "next/image";

function Speaker() {
  return (
    <div className="bg-[#233E51] flex items-center justify-center min-h-screen pt-20 pb-10">
      <div className="bg-[url('https://i.ibb.co/37G2396/speaker-Card.png')] bg-cover w-[100vw] h-[71.42vw] lg:w-[56vw] lg:h-[40vw] flex flex-col items-center"
      data-aos="flip-right"
      >
        <p className="text-white font-GameOfSquid text-[3vw] mt-[2%] mb-[9.5%] lg:mb-[6%] h-fit w-fit">
          Speaker
        </p>
        <Image src={Pak_Guntur} alt="speaker.png" className="w-[24%]" />
        <div className="font-GameOfSquid text-white mt-[3.7%] text-center text-[3vw] lg:text-[1.4vw]">
          {/* nama */}
          <p className="">Dr. Ir. Guntur Dharma Putra</p>
          {/* gelar */}
          <p>S.T., M.Sc.</p>
        </div>
        <div className="font-Montserrat text-white text-[2vw] lg:text-[1.2vw] w-[40%] text-center mt-[5%] sm:mt-[7.5%] md:mt-[10%] lg:mt-[8%]">
          Dosen Departemen Teknik Elektro dan Teknologi Informasi Fakultas
          Teknik UGM
        </div>
      </div>
    </div>
  );
}

export default Speaker;
