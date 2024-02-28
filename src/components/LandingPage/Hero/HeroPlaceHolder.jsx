import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const HeroPlaceHolder = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  const handleDaftarClick = () => {
    if (isAuthenticated) {
      router.replace("/competition/capture-the-flag");
    } else {
      router.replace("/login");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-cover p-0 md:p-8 lg:bg-[url('https://i.ibb.co/pJ75N28/placeholder-Desktop.png')] lg:w-[1000px] lg:h-[250px] md:bg-[url('https://i.ibb.co/NTRcSNC/placeholder-Tab.png')] md:w-[702px] md:h-[245px] bg-[url('https://i.ibb.co/4SXs1b0/placeholder-Mobile.png')] w-[360px] h-[275px]">
        <div className="w-full h-full flex justify-between items-center lg:gap-72">
          <div className="lg:w-1/2 lg:m-auto">
            <p className="mb-10 lg:mb-0 text-white text-center">
              <span className="font-bold">
                Future Innovations and Discovery IT
              </span>
              , sebuah kompetisi tingkat nasional di bidang Teknologi Informasi.
              FIND IT! terdiri dari dua acara yaitu{" "}
              <span className="font-bold">webinar</span> dan{" "}
              <span className="font-bold">lomba-lomba</span> yang mendorong
              inovasi di era digital.
            </p>
            <div className="flex flex-row gap-x-5 justify-center lg:hidden font-GameOfSquid font-bold text-white">
              <button
                className="bg-shade-black p-2 rounded-md"
                onClick={handleDaftarClick}
              >
                DAFTAR KOMPETISI
              </button>
              <button
                className="border-2 border-shade-black p-2 rounded-md"
                onClick={() => router.replace("/aboutus")}
              >
                ABOUT US
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:gap-y-5 lg:m-auto lg:w-1/2">
            <p className="text-center text-white">
              Siapkan diri anda untuk berinovasi dan melampaui batas imajinasi.
            </p>
            <div className="flex flex-row gap-x-5 justify-center font-GameOfSquid font-bold text-white">
              <Link href="/competition/capture-the-flag">
                <button className="bg-shade-black p-2 rounded-md">
                  DAFTAR KOMPETISI
                </button>
              </Link>
              <Link href="/aboutus">
                <button className="border-2 border-shade-black p-2 rounded-md">
                  ABOUT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlaceHolder;
