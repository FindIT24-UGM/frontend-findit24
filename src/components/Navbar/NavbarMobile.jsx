"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const LOMBA = [
  "Capture the flag",
  "Competitive Programming",
  "UX Competition",
  "Data analytics",
  "Hackathon",
  "E-Sports",
  "Informatics Competition",
];

const NavbarMobile = ({ isSideNav, isLogin, onSignClick }) => {
  const [isCompetition, setIsCompetition] = useState(false);
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  return (
    <motion.div
      className="absolute z-[1000] right-0 top-[104%] w-fit  pt-10 h-screen bg-text-placeholder-dark flex flex-col items-end font-GameOfSquid lg:hidden"
      variants={{
        hidden: { x: "200%", opacity: 0 },
        visible: { x: "0%", opacity: 1 },
      }}
      transition={{ duration: 0.5 }}
      animate={isSideNav ? "visible" : "hidden"}
      initial={isSideNav ? "hidden" : "visible"}
    >
      <div className="flex flex-col items-end ml-32 mr-8 text-lg gap-y-10">
        <Link href="/workshop">
          <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
            Workshop
          </p>
        </Link>
        <div
          className="flex flex-col items-end gap-y-3-2 "
          onClick={() => setIsCompetition(!isCompetition)}
        >
          <div className="flex flex-row justify-end cursor-pointer gap-x-2">
            <p className="text-white transition-all duration-100 cursor-pointer hover:text-primary-500">
              Competition
            </p>
            {isCompetition ? (
              <IoMdArrowDropup size={20} />
            ) : (
              <IoMdArrowDropdown size={20} />
            )}
          </div>
          <div
            className={twMerge(
              "grid transition-all duration-500",
              isCompetition ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="flex flex-col overflow-hidden gap-y-2">
              {LOMBA.map((l, idx) => (
                <Link
                  key={idx}
                  href={
                    "/competition" + `/${l.split(" ").join("-").toLowerCase()}`
                  }
                  className={twMerge(
                    idx == 0 && "mt-10",
                    idx == LOMBA.length - 1 && "mb-2"
                  )}
                >
                  <p>{l}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href="/aboutus">
          <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
            About Us
          </p>
        </Link>
        <Link href="/faq">
          <p className="text-white transition-all duration-300 cursor-pointer hover:text-primary-500">
            FAQ
          </p>
        </Link>
      </div>

      <button
        className={twMerge(
          "w-[80%] h-fit py-3 text-black rounded-lg bg-primary-300 mx-auto mt-16 hover:bg-primary-500 duration-300 transition-all"
        )}
        onClick={onSignClick}
      >
        {isLogin ? "Sign Out" : "Sign in"}
      </button>
      {isLogin && (
        <button
          className={twMerge(
            "w-[80%] h-fit py-3 text-black rounded-lg bg-primary-300 mx-auto mt-5 hover:bg-primary-500 duration-300 transition-all"
          )}
          onClick={() =>
            router.push(
              user?.role === process.env.NEXT_PUBLIC_ADMIN_ROLE
                ? "/admin/dashboard/beranda"
                : "/user/dashboard/beranda"
            )
          }
        >
          Dashboard
        </button>
      )}
    </motion.div>
  );
};

export default NavbarMobile;
