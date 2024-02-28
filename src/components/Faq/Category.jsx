import React from "react";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown } from "react-icons/io";

const LOMBA = [
  { full: "Capture the flag", short: "CTF" },
  { full: "Competitive Programming", short: "CP" },
  { full: "UX Competition", short: "UX" },
  { full: "Data analysis", short: "Data" },
  { full: "Hackaton", short: "Hackaton" },
  { full: "E-Sports", short: "E-Sports" },
  { full: "Informatics Competition", short: "IC" },
];

const CATEGORY = ["General", "Lomba", "Webinar"];

const SELECTION = [
  "General",
  "Lomba",
  "Webinar",
  "Capture the flag",
  "Competitive Programming",
  "UX Competition",
  "Data analysis",
  "Hackaton",
  "E-Sports",
  "Informatics Competition",
];

const Category = ({ setSelected, setCompetition, competition, selected }) => {
  return (
    <div className="flex flex-row items-center justify-center max-sm:w-[80%] w-[50%] p-2 bg-text-placeholder-dark rounded-xl border-2 border-black mt-5 gap-x-2">
      {SELECTION.map((sel) => {
        if (!CATEGORY.includes(sel)) return;
        return (
          <div
            key={sel}
            className={twMerge(
              "flex items-center text-[11px] md:text-[15px] lg:text-[20px] justify-center flex-1 rounded-lg cursor-pointer font-GameOfSquid text-neutral-300 hover:text-white hover:bg-primary-300 transition-all duration-300  py-1",
              sel !== "Lomba" &&
                selected == sel &&
                "bg-primary-500 text-white  border-2 border-black",
              sel == "Lomba" &&
                selected !== "General" &&
                selected !== "Webinar" &&
                "bg-primary-500 text-white  border-2 border-black",
              sel == "Lomba" && "group relative"
            )}
            onClick={() => {
              if (sel == "Lomba") return;
              setSelected(sel);
            }}
          >
            <p className="mx-auto">{sel == "Lomba" ? competition : sel}</p>
            {sel == "Lomba" && <IoMdArrowDropdown size={30} />}
            {sel == "Lomba" && (
              <div
                className={twMerge(
                  "absolute top-[150%] flex flex-col w-[300%] h-fit bg-text-placeholder-dark rounded-lg px-5 py-6 -translate-y-2",
                  "opacity-0 -z-10",
                  sel == selected && "opacity-100 z-10",
                  "group-hover:opacity-100 group-hover:z-10",
                  "transition-all duration-500"
                )}
              >
                {LOMBA.map((l) => (
                  <div
                    key={l.short}
                    className="flex items-center justify-center flex-1 w-full py-2 rounded-lg hover:text-white hover:bg-primary-300 font-Montserrat"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCompetition(l.short);
                      setSelected(l.full);
                    }}
                  >
                    {l.full}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
