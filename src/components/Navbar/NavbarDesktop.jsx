import React from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const NavbarDesktop = ({ activePath, setActivePath, isLogin, setIsLogin }) => {
  return (
    <>
      {" "}
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center -translate-x-[100%] -translate-y-[50%] gap-x-14 max-lg:hidden"
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
      <Image
        className="max-lg:mr-auto"
        src={"/assets/images/logoFINDIT.png"}
        width={80}
        height={80}
      />
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center  -translate-y-[50%] gap-x-14 max-lg:hidden"
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
      {/* sign in button */}
      <button
        className="absolute right-[50px] transition-all duration-300 hover:bg-primary-500 max-lg:hidden font-GameOfSquid bg-primary-300 rounded-lg text-black p-2 text-sm"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Sign Out" : "Sign In"}
      </button>
    </>
  );
};

export default NavbarDesktop;
