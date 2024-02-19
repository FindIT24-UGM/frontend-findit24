"use client";

import React, { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import { RxCross1 } from "react-icons/rx";
import NavbarMobile from "./Navbar/NavbarMobile";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, logout } from "../store/slices/authSlice";
import { loadingEnd, loadingStart } from "../store/action";

const Navbar = () => {
  // ubah isLogin di sini ya naufal
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const router = useRouter();
  const [activePath, setActivePath] = useState("Webinar");
  const [isSideNav, setIsSideNav] = useState(false);
  const [isLarge, setIsLarge] = useState(true);

  const widthTracker = () => {
    if (window.innerWidth >= 1024) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  const disableScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  const enableScroll = () => {
    window.onscroll = function () {};
  };

  useEffect(() => {
    if (isSideNav) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isSideNav]);

  useEffect(() => {
    if (isLarge) {
      setIsSideNav(false);
    }
  }, [isLarge]);

  useEffect(() => {
    window.addEventListener("resize", widthTracker);
  }, []);

  const onSignClick = useCallback(() => {
    if (isAuthenticated) {
      // fungsi logout
      dispatch(loadingStart())
      dispatch(logout())
      .unwrap()
      .then((res) => {
        dispatch(loadingEnd())
        router.push("/")
      })
    } else {
      router.push("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
      dispatch(loadingStart())
      dispatch(getUserData())
        .unwrap()
        .then((res) => {
          dispatch(loadingEnd())
        })
        .catch(err =>{

        })
  },[isAuthenticated])

  return (
    <>
      <div
        className={twMerge(
          "h-20 z-[999] border-b-4 w-full border-black bg-text-placeholder-dark font-GameOfSquid flex flex-row justify-center px-7 items-center py-12",
          "max-lg:justify-between",
          "lg:gap-x-20",
          "relative"
        )}
      >
        {/* navbar desktop */}
        <NavbarDesktop
          activePath={activePath}
          setActivePath={setActivePath}
          isLogin={isAuthenticated}
          onSignClick={onSignClick}
        />
        {/* navbar button */}
        <motion.button
          className="lg:hidden"
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
          className={twMerge(!isSideNav && "hidden", "lg:hidden")}
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
          isLogin={isAuthenticated}
          onSignClick={onSignClick}
        />
      </div>
      {/* dark background */}
      <motion.div
        className={twMerge(
          "w-full h-full absolute bg-text-placeholder-dark z-[50]",
          !isSideNav && "hidden",
          "lg:hidden"
        )}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.7 } }}
        initial={isSideNav ? "hidden" : "visible"}
        animate={isSideNav ? "visible" : "hidden"}
      />
    </>
  );
};

export default Navbar;
