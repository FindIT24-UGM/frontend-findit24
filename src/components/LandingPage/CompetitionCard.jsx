import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import CP_lalu from "../../assets/Logo/CPLalu.png";

export default function CompetitionCard(props) {
  const { name, desc, icon, link, ownIndex, activeIndex } = props;
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

  return (
    <div className="w-full flex lg:justify-center lg:items-center">
      <div className="w-[150%] lg:w-[100%] lg:relative bg-gradient-to-b from-[#ED7C80] to-[#F9C883] h-[400px] border-4 border-black p-4 lg:p-12 rounded-xl flex flex-col lg:grid lg:grid-cols-3">
        <div className="flex flex-col gap-y-4">
          <div className="flex lg:flex-col">
            <div className="font-GameOfSquid text-white text-[4.44vw] md:text-[2.266vw] lg:text-[1.25vw]">
              <div>"Stratigize. Conquer.</div>
              <div>{name}"</div>
            </div>
          </div>
          {windowWidth <= 400 ? (
            <div className="font-Montserrat text-white text-[1.042vw]">
              {desc}
              <div></div>
            </div>
          ) : windowWidth <= 860 ? (
            <div></div>
          ) : (
            <div>
              <div className="font-Montserrat text-white text-[1.042vw]">
                {desc}
                <div></div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex items-center justify-center lg:relative lg:bottom-[130px] z-30 mt-4">
          {icon}
        </div>

        <div className="flex flex-col justify-center font-Montserrat text-white text-[1.25vw] lg:mb-20">
          <div>Tertarik mendaftar</div>
          <div>{name},</div>
          <div className="font-bold">Hackers? </div>
          <div className="mt-4">
            <Link href={link}>
              <Button
                variant="primary"
                text="See More ->"
                customClass="bg-black"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
