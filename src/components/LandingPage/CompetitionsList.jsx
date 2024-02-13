"use client";

import React, { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import CP_Lalu from "../../assets/Logo/CPLalu.png";
import DAC_Lalu from "../../assets/Logo/DACLalu.png";
import Esport_lalu from "../../assets/Logo/EsportLalu.png";
import Hackathon_Lalu from "../../assets/Logo/HackatonLalu.png";
import Logic_Comp_lalu from "../../assets/Logo/Logic_Comp_Lalu.png";
import Ui_Ux_Lalu from "../../assets/Logo/Ui_Ux_Lalu.png";
import CTF_Lalu from "../../assets/Logo/CTF_Lalu.png";
import Vector_Kiri from "../../assets/landingpage/Vector_Kiri.png";
import Vector_Kanan from "../../assets/landingpage/Vector_Kanan.png";
import sidePattern from "../../assets/background/sidePattern.png";

export default function CompetitionsList() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowsWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowsWidth();

    return () => {
      window.addEventListener("resize", updateWindowsWidth);
    };
  }, []);

  const cards = [
    {
      name: "UX Competition",
      ownIndex: 0,
      icon: (
        <Image
          src={Ui_Ux_Lalu}
          alt="logo"
          className="unselectable w-[62.5vw] md:w-[13.2vw] lg:w-[20vw]"
        />
      ),
      desc: "UX Competition adalah kompetisi desain pengalaman pengguna sebuah produk aplikasi mobile. Peserta akan mengembangkan produk dalam bentuk prototipe sesuai dengan tema.",
      link: "/competition/ui-ux",
    },
    {
      name: "Competitive Programming",
      ownIndex: 1,
      icon: (
        <Image
          src={CP_Lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Competitive Programming adalah kompetisi yang menguji kemampuan berpikir logis demi menyelesaikan masalah dengan suatu program komputer.",
      link: "/competition/competitive-programming",
    },
    {
      name: "Data Analytics",
      ownIndex: 2,
      icon: (
        <Image
          src={DAC_Lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Data Analytics Competition merupakan kompetisi menganalisis data khususnya big data guna memberi solusi dari sebuah permasalahan yang telah disediakan.",
      link: "/competition/data-analytics",
    },
    {
      name: "Hackathon",
      ownIndex: 3,
      icon: (
        <Image
          src={Hackathon_Lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Hackathon adalah kompetisi pembuatan inovasi berupa produk teknologi informasi dalam jangka waktu tertentu dan sesuai tema yang sudah ditentukan.",
      link: "/competition/hackathon",
    },
    {
      name: "Capture The Flag",
      ownIndex: 4,
      icon: (
        <Image
          src={CTF_Lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Capture the Flag adalah kompetisi cyber security yang menguji peserta dalam berpikir terstruktur dan kreatif dalam mencari sebuah informasi tersembunyi yang disebut flag.",
      link: "/competition/capture-the-flag",
    },
    {
      name: "Esports",
      ownIndex: 5,
      icon: (
        <Image
          src={Esport_lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Sebuah kompetisi yang menguji kemampuan peserta dalam bermain game kompetitif secara online. Terdapat dua pilihan game yaitu Mobile Legends dan Valorant.",
      link: "/competition/esports",
    },
    {
      name: "Informatics Competition",
      ownIndex: 6,
      icon: (
        <Image
          src={Logic_Comp_lalu}
          sizes={
            windowWidth < 400
              ? "(max-width: 100vw)"
              : windowWidth < 800
              ? "(max-width: 33vw)"
              : "(max-width: 20vw)"
          }
          alt="logo"
          className="unselectable"
        />
      ),
      desc: "Informatics Competition merupakan kompetisi yang bertujuan untuk menguji kecerdasan dan pemahaman logika matematika melalui pengerjaan soal matematika dan problem solving.",
      link: "/competition/informatics-competition",
    },
  ];

  function handleSlideClick(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }

  return (
    <div className="min-h-screen flex justify-center lg:px-[54px]">
      <div className="hidden lg:flex absolute left-0">
        <Image src={Vector_Kiri}></Image>
      </div>
      <div className="hidden lg:flex absolute right-0">
        <Image src={Vector_Kanan}></Image>
      </div>
      <div className="w-[90%] lg:w-[80%] flex flex-col items-center border-x-[6px] border-[#92C2D0] pb-20">
        <div className="flex flex-col items-center">
          <div className="lg:w-[70%] pt-20">
            <div className="flex flex-col items-center mx-auto">
              <div className="font-GameOfSquid text-[#FCFCFC] text-[9.331vw] lg:text-[4.5vw] drop-shadow-competitions">
                Competitions
              </div>
              <div className="text-center font-CreatoDisplay text-[#92C2D0] font-normal text-[3.214vw] md:text-[2.604vw] lg:text-[1.25vw] font-bold">
                There are sevens competitions, each contributing to the
                development of creativity and innovation in Information
                Technology
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-16">
          <Swiper
            slidesPerView={1.25}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.7,
                centeredSlides: false,
              },
              770: {
                centeredSlides: true,
              },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              console.log(`slide change[${swiper.activeIndex}]`);
              console.log(cards.name);
            }}
            onSwiper={setSwiper}
            spaceBetween="100vw"
            grabCursor={true}
          >
            {cards.map((card) => {
              return (
                <SwiperSlide
                  key={card.name}
                  className="py-10 flex flex-col items-center justify-center p-0"
                  onClick={() => handleSlideClick(card.ownIndex)}
                >
                  <CompetitionCard {...card} activeIndex={activeIndex} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="mt-8 flex flex-col items-center">
            <div className="font-Ava text-white text-[3.9vw]">
              {cards[activeIndex].name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
