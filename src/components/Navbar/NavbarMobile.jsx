import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const NavbarMobile = ({ isSideNav, isLogin, setIsLogin }) => {
  return (
    <motion.div
      className="absolute z-[999] right-0 top-[104%] w-fit  pt-10 h-screen bg-text-placeholder-dark flex flex-col items-end font-GameOfSquid "
      variants={{
        hidden: { x: "200%", opacity: 0 },
        visible: { x: "0%", opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      animate={isSideNav ? "visible" : "hidden"}
      initial={isSideNav ? "hidden" : "visible"}
    >
      <div className="flex flex-col ml-32 mr-8 gap-y-10">
        <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
          Webinar
        </p>
        <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
          Competition
        </p>
        <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
          About Us
        </p>
        <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
          FAQ
        </p>
      </div>
      <button
        className={twMerge(
          "w-[80%] h-fit py-3 text-black rounded-lg bg-primary-300 mx-auto mt-16 hover:bg-primary-500 duration-300 transition-all"
        )}
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Sign Out" : "Sign in"}
      </button>
    </motion.div>
  );
};

export default NavbarMobile;
