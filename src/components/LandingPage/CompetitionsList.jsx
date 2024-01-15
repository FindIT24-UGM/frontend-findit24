"use client";

import React, { useState } from "react";
import CompetitionCard from "./CompetitionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CompetitionsList() {
  const cards = [
    {
      name: "UX COMPETITION",
      ownIndex: 0,
    },
    {
      name: "COMPETITIVE PROGRAMMING",
      ownIndex: 1,
    },
    {
      name: "DATA ANALYTICS",
      ownIndex: 2,
    },
    {
      name: "HACKATHON",
      ownIndex: 3,
    },
    {
      name: "CAPTURE THE FLAG",
      ownIndex: 4,
    },
    {
      name: "ESPORTS",
      ownIndex: 5,
    },
    {
      name: "INFORMATICS COMPETITION",
      ownIndex: 6,
    },
  ];

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleSlideClick(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[80%] flex flex-col items-center border-x-8 border-[#92C2D0]">
        <div className="flex flex-col items-center">
          <div className="w-[70%] pt-20">
            <div className="flex justify-center">
              <p className="font-GameOfSquid text-[#FCFCFC] text-[4.5vw] drop-shadow-competitions">
                Competitions
              </p>
            </div>
            <p className="text-white text-center font-CreatoDisplay text-[#92C2D0] font-bold">
              There are sevens competitions, each contributing to the
              development of creativity and innovation in Information Technology
            </p>
          </div>
        </div>
        <div className="w-full mt-16">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
              console.log("slide change");
            }}
            onSwiper={setSwiper}
            spaceBetween="100vw"
            grabCursor={true}
          >
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
            <SwiperSlide>
              <CompetitionCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="font-Ava text-white text-[3.9vw]">
            Capture The Flag
          </div>
        </div>
      </div>
    </div>
  );
}
