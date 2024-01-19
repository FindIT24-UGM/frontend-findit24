"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import { RxCross1 } from "react-icons/rx";
import NavbarMobile from "./Navbar/NavbarMobile";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [activePath, setActivePath] = useState("Webinar");
  const [isSideNav, setIsSideNav] = useState(false);
  return (
    <>
      <div
        className={twMerge(
          "h-20 border-b-4 w-full border-black bg-text-placeholder-dark font-GameOfSquid flex flex-row justify-center px-7 items-center py-12",
          "max-lg:justify-between",
          "lg:gap-x-20",
          "relative"
        )}
      >
        {/* navbar desktop */}
        <NavbarDesktop
          activePath={activePath}
          setActivePath={setActivePath}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
        {/* navbar button */}
        <motion.button
          className="lg-hidden"
          key={isSideNav}
          onClick={() => setIsSideNav(!isSideNav)}
          variants={{
            hidden: { x: "200%", opacity: 0 },
            visible: { x: "0%", opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          animate={isSideNav ? "hidden" : "visible"}
          initial={isSideNav ? "visible" : "hidden"}
        >
          <Image
            src={"assets/images/menu-hamburger.svg"}
            height={40}
            width={40}
          />
        </motion.button>
        <motion.button
          className={twMerge(!isSideNav && "hidden", "lg-hidden")}
          variants={{
            hidden: { scale: 0, opacity: 0, rotate: -180 },
            visible: { scale: 1, opacity: 1, rotate: 180 },
          }}
          transition={{ duration: 0.5 }}
          animate={isSideNav ? "visible" : "hidden"}
          initial={isSideNav ? "hidden" : "visible"}
          onClick={() => setIsSideNav(!isSideNav)}
        >
          <RxCross1 size={40} />
        </motion.button>
        {/* navbar mobile */}
        <NavbarMobile
          isSideNav={isSideNav}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </div>
      {/* dark background */}
      <motion.div
        className="w-full h-full absolute bg-text-placeholder-dark z-[20]"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7 } }}
        initial={isSideNav ? "hidden" : "visible"}
        animate={isSideNav ? "visible" : "hidden"}
      />
    </>
  );
};

export default Navbar;
