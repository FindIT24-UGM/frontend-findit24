"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [activePath, setActivePath] = useState("Webinar");
  return (
    <div
      className={twMerge(
        "h-20 border-b-4 w-full border-black bg-text-placeholder-dark font-GameOfSquid flex flex-row justify-center px-7 items-center py-12",
        "max-sm:justify-between",
        "sm:gap-x-20",
        "relative"
      )}
    >
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center -translate-x-[100%] -translate-y-[50%] gap-x-14 lg:hidden"
          )}
        >
          <p
            className={twMerge(
              "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
              activePath == "Webinar" && "text-primary-500"
            )}
            onClick={() => setActivePath("Webinar")}
          >
            Webinar
          </p>
          <div className="flex flex-row items-center gap-x-3">
            <p
              className={twMerge(
                "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
                activePath == "Competition" && "text-primary-500"
              )}
              onClick={() => setActivePath("Competition")}
            >
              Competition
            </p>
            <button>
              <IoMdArrowDropdown size={25} />
            </button>
          </div>
        </div>
      </div>
      <Image src={"/assets/images/logoFINDIT.png"} width={80} height={80} />
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center  -translate-y-[50%] gap-x-14 lg:hidden"
          )}
        >
          <p
            className={twMerge(
              "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
              activePath == "About Us" && "text-primary-500"
            )}
            onClick={() => setActivePath("About Us")}
          >
            About Us
          </p>
          <p
            className={twMerge(
              "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
              activePath == "FAQ" && "text-primary-500"
            )}
            onClick={() => setActivePath("FAQ")}
          >
            FAQ
          </p>
        </div>
      </div>
      <button className="absolute right-[50px] font-GameOfSquid bg-primary-300 rounded-lg text-black p-2 text-sm">
        {isLogin ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default Navbar;
