import BG_WS from "../../assets/workshoppage/BG_WS.png";
import React from "react";
import Image from "next/image";
import { BiMouse } from "react-icons/bi";
import { useState, useEffect } from "react";
import Link from "next/link";

import AOS from 'aos';
import 'aos/dist/aos.css';

function HeroWS() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  useEffect(()=>{
    AOS.init({
      disable: false,
      duration: 1300,
    })
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const changingDate = new Date("4 Mar 2024");
    const currentDate = new Date();
    const totalSeconds = Math.max((changingDate - currentDate) / 1000, 0);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;

    return { days, hours, minutes };
  }

  return (
    <div className="min-h-screen w-full bg-[#233E51] flex justify-center">
      <div className="flex flex-col justify-center items-center gap-y-8 absolute">
        <p className="font-Ava text-white text-[20px] lg:text-[1.25vw]">
          {"//Workshop"}
        </p>
        <div className="font-GameOfSquid text-center text-[5.556vw] md:text-[3.125vw] lg:text-[1.25vw] bg-gradient-to-b from-[#FF8C5A] to-[#F95949] bg-clip-text text-transparent"
        data-aos="zoom-out-up">
          <p>{'"Exploring Blockchain :'}</p>
          <p>Embracing Future</p>
          <p>Technology</p>
        </div>
        <div className="mt-8 font-GameOfSquid text-white text-center text-[12px] lg:text-[0.8333vw]">
          <div className="flex flex-col text-[12px] lg:text-[0.833vw]"
          data-aos="zoom-out-up">
            <p>Benefit</p>
            <div className="font-Montserrat text-[14px] lg:text-[0.9vw]">
              <ul>Sertifikat</ul>
              <ul>Knowledge</ul>
              <ul>E-Money</ul>
            </div>
          </div>
        </div>
        <div className="mt-4 font-GameOfSquid text-white"
        data-aos="zoom-out-up">
          Sisa waktu pendaftaran
        </div>
        <div className="flex text-white"
        data-aos="zoom-out-up">
          <h4 className="font-GameOfSquid text-[#EE8478] text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            {timeRemaining.days}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;hari
          </h4>
          <h4 className="font-GameOfSquid  text-[#EE8478] text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            &nbsp;|&nbsp;{timeRemaining.hours}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;jam
          </h4>
          <h4 className="font-GameOfSquid text-[#EE8478] text-[4.44vw] md:text-[3.125vw] lg:text-[1.25vw]">
            &nbsp;|&nbsp;{timeRemaining.minutes}
          </h4>
          <h4 className="font-Montserrat flex items-center text-[3.214vw] lg:text-[0.72vw]">
            &nbsp;menit
          </h4>
        </div>
        <div className="flex gap-x-2">
          <button className="flex justify-center items-center p-3 w-fit rounded-xl bg-gradient-to-b from-[#FF8C5A] to-[#F95949] " 
          data-aos="fade-right">
            <div className="text-white font-GameOfSquid">Daftar</div>
          </button>
          <button className="flex justify-center items-center p-3 w-fit rounded-xl bg-white" 
          data-aos="fade-left">
            <Link className="text-black font-GameOfSquid" href={'https://drive.google.com/drive/folders/1qKxHY8v6nULKy3R9n0OPEJkvWK8-9bRT?usp=sharing'}>Guidebook</Link>
          </button>
        </div>

        <div className="flex justify-center items-center bottom-0 gap-x-2" data-aos="fade-up">
          <BiMouse />
          <p className="font-Montserrat text-white">Gulir ke bawah</p>
        </div>
      </div>
      <Image
        src={BG_WS}
        className="top-0 w-[120vw] lg:w-[75vw]"
        alt="Background.png"
        data-aos="fade-down"
      ></Image>
    </div>
  );
}

export default HeroWS;
