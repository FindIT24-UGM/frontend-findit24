"use client";

import React, { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import CTF from "../../assets/Logo/CTF.png";
import CP from "../../assets/Logo/CP.png";
import UX from "../../assets/Logo/UX.png";
import DAC from "../../assets/Logo/DAC.png";
import Hackathon from "../../assets/Logo/Hackathon.png";
import ESP from "../../assets/Logo/ESP.png";
import IC from "../../assets/Logo/IC.png";
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
          src={UX}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi desain pengalaman pengguna sebuah produk aplikasi mobile. Peserta akan mengembangkan produk dalam bentuk prototipe sesuai dengan tema.",
      link: "/competition/ui-ux",
    },
    {
      name: "Competitive Programming",
      ownIndex: 1,
      icon: (
        <Image
          src={CP}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi yang menguji kemampuan berpikir logis demi menyelesaikan masalah dengan suatu program komputer.",
      link: "/competition/competitive-programming",
    },
    {
      name: "Data Analytics",
      ownIndex: 2,
      icon: (
        <Image
          src={DAC}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi menganalisis data khususnya big data guna memberi solusi dari sebuah permasalahan yang telah disediakan.",
      link: "/competition/data-analytics",
    },
    {
      name: "Hackathon",
      ownIndex: 3,
      icon: (
        <Image
          src={Hackathon}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi pembuatan inovasi berupa produk teknologi informasi dalam jangka waktu tertentu dan sesuai tema yang sudah ditentukan.",
      link: "/competition/hackathon",
    },
    {
      name: "Capture The Flag",
      ownIndex: 4,
      icon: (
        <Image
          src={CTF}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi cyber security yang menguji peserta dalam berpikir terstruktur dan kreatif dalam mencari sebuah informasi tersembunyi yang disebut flag.",
      link: "/competition/capture-the-flag",
    },
    {
      name: "Esports",
      ownIndex: 5,
      icon: (
        <Image
          src={ESP}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi yang menguji kemampuan peserta dalam bermain game kompetitif secara online. Terdapat dua pilihan game yaitu Mobile Legends dan Valorant.",
      link: "/competition/esports",
    },
    {
      name: "Informatics Competition",
      ownIndex: 6,
      icon: (
        <Image
          src={IC}
          alt="logo"
          className="unselectable w-[50vw] md:w-[15vw] lg:w-[20vw] h-full"
        />
      ),
      desc: "Kompetisi yang bertujuan untuk menguji kecerdasan dan pemahaman logika matematika melalui pengerjaan soal matematika dan problem solving.",
      link: "/competition/informatics-competition",
    },
  ];

  function handleSlideClick(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }

  return (
    <div className="min-h-screen flex justify-center lg:px-[54px] bg-background-skyblue">
      {/* <div className="hidden lg:flex absolute left-0">
        <Image src={Vector_Kiri}></Image>
      </div> */}
      {/* <div className="hidden lg:flex absolute right-0">
        <Image src={Vector_Kanan}></Image>
      </div> */}
      <div className="w-[90%] lg:w-[80%] flex flex-col justify-center items-center border-x-[6px] border-[#92C2D0] pb-20">
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
        {windowWidth < 450 ? (
          <div className="w-full h-fit mt-8 flex flex-col justify-center items-center pl-4">
            <Swiper
              slidesPerView={1.15}
              centeredSlides={false}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                console.log(`slide change[${swiper.activeIndex}]`);
                console.log(cards.name);
              }}
              onSwiper={setSwiper}
              spaceBetween="15vw"
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card) => {
                return (
                  <SwiperSlide
                    key={card.name}
                    className="py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompetitionCard {...card} activeIndex={activeIndex} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex flex-col items-center ">
              <div className="font-Ava text-white text-[10.278vw] md:text-[6.48vw] 2xl:text-[3.9vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        ) : windowWidth <= 860 ? (
          <div className="w-full h-fit mt-8 flex flex-col justify-center items-center pl-4">
            <Swiper
              slidesPerView={1.25}
              centeredSlides={true}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                console.log(`slide change[${swiper.activeIndex}]`);
                console.log(cards.name);
              }}
              onSwiper={setSwiper}
              spaceBetween="40vw"
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card) => {
                return (
                  <SwiperSlide
                    key={card.name}
                    className="py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompetitionCard {...card} activeIndex={activeIndex} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex flex-col items-center">
              <div className="font-Ava text-white text-[10.278vw] md:text-[6.48vw] 2xl:text-[3.9vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-fit mt-16 pl-4 lg:pl-0">
            <Swiper
              slidesPerView={1.25}
              centeredSlides={true}
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
                    className="lg:py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompetitionCard {...card} activeIndex={activeIndex} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="2xl:mt-8 flex flex-col items-center">
              <div className="font-Ava text-white text-[37px] md:text-[6.48vw] 2xl:text-[3.9vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
