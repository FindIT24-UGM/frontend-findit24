import React from "react";

const HeroPlaceHolder = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[url('https://i.ibb.co/JvWVDbJ/placeholdersm.png')] lg:bg-[url('https://i.ibb.co/mhbzqmQ/placeholder.png')] md:bg-[url('https://i.ibb.co/WHD48Jx/placeholdermd.png')] bg-cover h-[275px] w-[492px] md:w-[701.27px] md:h-[245px] lg:w-[72vw] lg:h-[350px] lg:flex lg:justify-between lg:items-center">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:flex lg:flex-col justify-center items-center pt-10 px-28 lg:w-[47%]">
            <p className="text-text-placeholder-light font-Montserrat text-[13px] md:text-[16px] lg:text-[1.042vw] text-center">
              <span className="font-bold">
                Future Innovations and Discovery IT,{" "}
              </span>{" "}
              sebuah kompetisi tingkat nasional di bidang Teknologi Informasi.
              FIND IT! terdiri dari dua acara yaitu{" "}
              <span className="font-bold">webinar</span> dan{" "}
              <span className="font-bold">lomba-lomba</span> yang mendorong
              inovasi di era digital.
            </p>
          </div>
          <div className="px-20 lg:w-[50%] lg:pt-14">
            <div className="text-text-placeholder-light text-center text-[13px] md:text-[16px] lg:text-[1.042vw] font-Montserrat hidden space-x-1 lg:space-x-0 lg:flex lg:flex-col">
              <span>Siapkan diri anda untuk berinovasi dan</span>
              <span className="font-bold">melampaui batas imajinasi.</span>
            </div>
            <div className="font-GameOfSquid space-x-10 flex flex-row items-center justify-center text-white text-[13px] md:text-[16px] lg:text-[12px] mt-5">
              <button className="px-2 py-1 bg-shade-black border-2 border-primary-300 rounded-md w-[143px] h-[64px] md:w-[202px] md:h-[46px]">
                DAFTAR KOMPETISI
              </button>
              <button className="px-2 py-1 border-2 border-shade-black rounded-md w-[143px] h-[64px] md:w-[202px] md:h-[46px]">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlaceHolder;
