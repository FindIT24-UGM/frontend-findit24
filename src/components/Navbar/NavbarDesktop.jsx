import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const LOMBA = [
  "Capture the flag",
  "Competitive Programming",
  "UX Competition",
  "Data analysis",
  "Hackaton",
  "E-Sports",
  "Informatics Competition",
];

const NavbarDesktop = ({ activePath, setActivePath, isLogin, onSignClick }) => {
  const [opacityCompetition, setopacityCompetition] = useState(false);
  const [hideCompetition, setHideCompetition] = useState(true);
  const [spanCompetition, setSpanCompetition] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (spanCompetition) {
      setHideCompetition(false);
      setTimeout(() => setopacityCompetition(true), 100);
    } else {
      setopacityCompetition(false);
      setTimeout(() => setHideCompetition(true), 400);
    }
  }, [spanCompetition]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center -translate-x-[100%] -translate-y-[50%] gap-x-14 max-lg:hidden"
          )}
        >
          <Link href="/workshop">
            <p
              className={twMerge(
                "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
                activePath == "Workshop" && "text-primary-500"
              )}
              onClick={() => setActivePath("Workshop")}
            >
              Workshop
            </p>
          </Link>
          <div className="relative flex flex-row items-center text-sm gap-x-3">
            <p
              className={twMerge(
                "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
                activePath == "Competition" && "text-primary-500"
              )}
              onClick={() => {
                setActivePath("Competition");
                setSpanCompetition(!spanCompetition);
              }}
            >
              Competition
            </p>
            <button
              className={twMerge(
                spanCompetition && "rotate-180",
                "transition-all duration-300"
              )}
            >
              <IoMdArrowDropdown size={25} />
            </button>
            <div
              className={twMerge(
                "absolute top-[260%] left-0 -translate-x-[25%] flex flex-col w-[300%] h-fit bg-text-placeholder-dark rounded-lg px-5 py-6",
                hideCompetition && "hidden",
                !opacityCompetition && "opacity-0",
                opacityCompetition && "opacity-100",
                "transition-all duration-500"
              )}
            >
              {LOMBA.map((l) => (
                <Link
                  key={l}
                  href={
                    "/competition" + `/${l.split(" ").join("-").toLowerCase()}`
                  }
                >
                  <p
                    className="flex items-center justify-center flex-1 w-full py-2 rounded-lg cursor-pointer hover:text-white hover:bg-primary-300 font-Montserrat"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {l}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        className="max-lg:mr-auto"
        src={"/assets/images/logoFindITPutih.png"}
        width={70}
        height={70}
      />
      <div className="relative">
        <div
          className={twMerge(
            "absolute flex flex-row w-fit h-20 items-center  -translate-y-[50%] gap-x-14 max-lg:hidden"
          )}
        >
          <p
            className={twMerge(
              "text-white transition-all duration-200 cursor-pointer whitespace-nowrap text-sm hover:text-gray-300",
              activePath == "About Us" && "text-primary-500"
            )}
            onClick={() => setActivePath("About Us")}
          >
            <Link href="/aboutus">About Us</Link>
          </p>
          <Link href="/faq">
            <p
              className={twMerge(
                "text-white transition-all duration-200 cursor-pointer whitespace-nowrap hover:text-gray-300",
                activePath == "FAQ" && "text-primary-500"
              )}
              onClick={() => setActivePath("FAQ")}
            >
              FAQ
            </p>
          </Link>
        </div>
      </div>
      {isLogin && (
        <button
          className="absolute left-[50px] transition-all duration-300 hover:text-primary-500 max-lg:hidden font-GameOfSquid text-primary-300 rounded-lg text-sm"
          onClick={() =>
            router.push(
              user?.role === process.env.NEXT_PUBLIC_ADMIN_ROLE
                ? "/admin/dashboard/"
                : "/user/dashboard/beranda"
            )
          }
        >
          Dashboard
        </button>
      )}
      {/* sign in button */}
      <button
        className="absolute right-[50px] transition-all duration-300 hover:bg-primary-500 max-lg:hidden font-GameOfSquid bg-primary-300 rounded-lg text-black p-2 text-sm"
        onClick={onSignClick}
      >
        {isLogin ? "Sign Out" : "Sign In"}
      </button>
    </>
  );
};

export default NavbarDesktop;
