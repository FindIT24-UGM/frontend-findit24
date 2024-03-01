"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CompCard from "./CompCard";

import CTF from "../../../assets/Logo/CTF.png";
import CP from "../../../assets/Logo/CP.png";
import UX from "../../../assets/Logo/UX.png";
import DAC from "../../../assets/Logo/DAC.png";
import Hackaton from "../../../assets/Logo/Hackathon.png";
import ESP from "../../../assets/Logo/ESP.png";
import IC from "../../../assets/Logo/IC.png";

const CompetitionComp = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();

    return () => {
      window.addEventListener("resize", updateWindowWidth);
    };
  }, []);

  // datanya
  const cards = [
    {
      ownIndex: 0,
      name: "Capture The Flag",
      mainDesc:
        "Kompetisi cyber security yang menguji peserta dalam berpikir terstruktur dan kreatif dalam mencari sebuah informasi tersembunyi yang disebut flag.",

      secDesc: "Tertarik mendaftar Capture the Flag, Hackers?",
      icon: <Image src={CTF} className="w-[80%] unselectable" alt="CTF.png" />,
    },
    {
      ownIndex: 1,
      name: "Competitive Programming",
      mainDesc:
        "Kompetisi yang menguji kemampuan berpikir logis demi menyelesaikan masalah dengan suatu program komputer.",
      secDesc: "Tertarik mendaftar, Programmer?",
      icon: (
        <Image
          src={CP}
          className="w-[80%] unselectable"
          alt="Competitive Programming.png"
        />
      ),
    },
    {
      ownIndex: 2,
      name: "UX Competition",
      mainDesc:
        "Kompetisi desain pengalaman pengguna sebuah produk aplikasi mobile. Peserta akan mengembangkan produk dalam bentuk prototipe sesuai dengan tema.",
      secDesc: "Tertarik mendaftar , Designer?",
      icon: <Image src={UX} className="w-[80%] unselectable" alt="UX.png" />,
    },
    {
      ownIndex: 3,
      name: "Data Analytics",
      mainDesc:
        "Kompetisi menganalisis data khususnya big data guna memberi solusi dari sebuah permasalahan yang telah disediakan.",
      secDesc: "Tertarik mendaftar, Data Analyst?",
      icon: <Image src={DAC} className="w-[80%] unselectable" alt="DAC.png" />,
    },
    {
      ownIndex: 4,
      name: "Hackathon",
      mainDesc:
        "Kompetisi pembuatan inovasi berupa produk teknologi informasi dalam jangka waktu tertentu dan sesuai tema yang sudah ditentukan.",
      secDesc: "Tertarik mendaftar, Hackaton Enthusiat?",
      icon: (
        <Image
          src={Hackaton}
          className="w-[80%] unselectable"
          alt="Hackathon.png"
        />
      ),
    },
    {
      ownIndex: 5,
      name: "E-sports",
      mainDesc:
        "Kompetisi yang menguji kemampuan peserta dalam bermain game kompetitif secara online. Terdapat dua pilihan game yaitu Mobile Legends dan Valorant.",
      secDesc: "Tertarik mendaftar, Gamers?",
      icon: (
        <Image src={ESP} className="w-[80%] unselectable" alt="Esport.png" />
      ),
    },
    {
      ownIndex: 6,
      name: "Informatics Competition",
      mainDesc:
        "Kompetisi yang bertujuan untuk menguji kecerdasan dan pemahaman logika matematika melalui pengerjaan soal matematika dan problem solving.",
      secDesc: "Tertarik mendaftar, Logic Geeks?",
      icon: <Image src={IC} className="w-[80%] unselectable" alt="IC.png" />,
    },
  ];

  // fungsi slidernya
  function handleSlideClick(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }

  const linkCompetitionPage = [
    "/competition/capture-the-flag",
    "/competition/competitive-programming",
    "/competition/ux-competition",
    "/competition/data-analytics",
    "/competition/hackathon",
    "/competition/e-sports",
    "/competition/informatics-competition",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-[54px] bg-background-skyblue">
      <div className="w-[90%] lg:w-[80%] flex flex-col justify-center items-center border-x-[6px] border-[#92C2D0] pb-20">
        <div className="flex flex-col items-center">
          <div className="lg:w-[70%] pt-20">
            <div className="flex flex-col items-center mx-auto">
              <div className="font-GameOfSquid text-[#FCFCFC] text-[9.331vw] lg:text-[4.5vw] drop-shadow-competitions"
              data-aos="zoom-out-up">
                Competitions
              </div>
              <div className="text-center font-CreatoDisplay text-[#92C2D0] text-[3.214vw] md:text-[2.604vw] lg:text-[1.25vw] font-bold"
              data-aos="zoom-out-up">
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
              slidesPerView={1.45}
              centeredSlides={false}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                console.log(`slide change[${swiper.activeIndex}]`);
                console.log(cards.name);
              }}
              onSwiper={setSwiper}
              spaceBetween="13vw"
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card, idx) => {
                return (
                  <SwiperSlide
                    key={card.name}
                    className="py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompCard
                      name={card.name}
                      activeIndex={activeIndex}
                      mainDesc={card.mainDesc}
                      secDesc={card.secDesc}
                      linkDestination={linkCompetitionPage[idx]}
                      imageIcon={card.icon}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex flex-col items-center">
              <div className="font-Ava text-white text-[9vw] md:text-[5vw] 2xl:text-[2vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        ) : windowWidth < 860 ? (
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
              spaceBetween="10vw"
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card, idx) => {
                return (
                  <SwiperSlide
                    key={card.name}
                    className="py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompCard
                      name={card.name}
                      activeIndex={activeIndex}
                      mainDesc={card.mainDesc}
                      secDesc={card.secDesc}
                      linkDestination={linkCompetitionPage[idx]}
                      imageIcon={card.icon}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex flex-col items-center">
              <div className="font-Ava text-white text-[9vw] md:text-[5vw] 2xl:text-[2vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-fit mt-8 flex flex-col justify-center items-center pl-4">
            <Swiper
              slidesPerView={1.2}
              centeredSlides={true}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                console.log(`slide change[${swiper.activeIndex}]`);
                console.log(cards.name);
              }}
              onSwiper={setSwiper}
              spaceBetween="60vw"
              grabCursor={true}
              className="w-full"
            >
              {cards.map((card, idx) => {
                return (
                  <SwiperSlide
                    key={card.name}
                    className="py-10 flex flex-col items-center justify-center"
                    onClick={() => handleSlideClick(card.ownIndex)}
                  >
                    <CompCard
                      name={card.name}
                      activeIndex={activeIndex}
                      mainDesc={card.mainDesc}
                      secDesc={card.secDesc}
                      linkDestination={linkCompetitionPage[idx]}
                      imageIcon={card.icon}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex flex-col items-center">
              <div className="font-Ava text-white text-[9vw] md:text-[5vw] 2xl:text-[2vw]">
                {cards[activeIndex].name}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionComp;
