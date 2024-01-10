"use client";

import { useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const LOMBA = [
  { full: "Capture the flag", short: "CTF" },
  { full: "Competitive Programming", short: "CP" },
  { full: "UX Competition", short: "UX" },
  { full: "Data analysis", short: "Data" },
  { full: "Hackaton", short: "Hackaton" },
  { full: "E-Sports", short: "E-Sports" },
  { full: "Informatics Competition", short: "IC" },
];

const FAQ = [
  {
    question: "ctf",
    ans: "benar bro benar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar brobenar bro",
    category: "Capture the flag",
  },
  {
    question: "Apakah ux",
    ans: "ril cuy",
    category: "UX Competition",
  },
  { question: "webinar", ans: "iya", category: "Webinar" },
];

const CATEGORY = ["All", "Lomba", "Webinar"];

const SELECTION = [
  "All",
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

export default function FAQPage() {
  const [searched, setSearched] = useState("");
  const [selected, setSelected] = useState("All");
  const [faqIndex, setFaqIndex] = useState([]);
  const [competition, setCompetition] = useState("Lomba");

  const displayedFaq = useMemo(() => {
    const searchedVal = FAQ.filter((f) =>
      f.question.toLowerCase().includes(searched.toLowerCase())
    );
    if (selected == "" || selected == "All") {
      return searchedVal;
    }
    return searchedVal.filter((s) => s.category == selected);
  }, [searched, selected]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-auto bg-background-skyblue">
      <h1 className="font-GameOfSquid text-5xl font-[400]">FAQ</h1>
      <h2 className="font-CreatoDisplay text-lg font-[700] mt-2">
        Frequently Asked Question
      </h2>
      <div className="relative w-[60%] mt-10">
        <input
          className="flex items-center justify-center w-full py-2 pl-2 pr-12 text-black bg-white text-md h-fit"
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          value={searched}
        ></input>
        <BsSearch
          size={15}
          className="absolute text-black -translate-x-1/2 -translate-y-1/2 right-3 top-1/2"
        />
      </div>
      <div className="flex flex-row items-center justify-center w-[50%] p-2 bg-text-placeholder-dark rounded-xl border-2 border-black mt-5 gap-x-2">
        {SELECTION.map((sel) => {
          if (!CATEGORY.includes(sel)) return;
          return (
            <div
              className={twMerge(
                "flex items-center justify-center flex-1 rounded-lg cursor-pointer font-GameOfSquid text-neutral-300 hover:text-white hover:bg-primary-300 transition-all duration-300  py-1",
                sel !== "Lomba" &&
                  selected == sel &&
                  "bg-primary-500 text-white  border-2 border-black",
                sel == "Lomba" &&
                  selected !== "All" &&
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
                    "absolute top-[150%] flex flex-col w-[300%] h-fit bg-text-placeholder-dark rounded-lg px-5 py-6",
                    "opacity-0 -z-10",
                    sel == selected && "opacity-100 z-10",
                    "group-hover:opacity-100 group-hover:z-10",
                    "transition-all duration-500"
                  )}
                >
                  {LOMBA.map((l) => (
                    <div
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
      <div className="flex flex-col w-[80%] mt-10 h-fit gap-y-5">
        {displayedFaq.map((f, idx) => (
          <>
            <div
              className={twMerge(
                "w-full flex flex-row items-center justify-between py-2 h-fit text-white font-Montserrat font-[700] bg-secondary-blue rounded-lg px-5 text-sm transition-all duration-300",
                faqIndex.includes(idx) && "bg-text-placeholder-dark"
              )}
            >
              <div
                className={twMerge("flex-1 flex-col cursor-pointer")}
                onClick={() => {
                  if (faqIndex.includes(idx)) {
                    setFaqIndex((arr) => arr.filter((a) => a !== idx));
                  } else {
                    setFaqIndex((arr) => [...arr, idx]);
                  }
                }}
              >
                <div>{f.question}</div>
                <div
                  className={twMerge(
                    "grid transition-all duration-500",
                    faqIndex.includes(idx)
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  )}
                >
                  <p className="overflow-hidden">{f.ans}</p>
                </div>
              </div>
              {faqIndex.includes(idx) ? (
                <IoMdArrowDropup size={30} />
              ) : (
                <IoMdArrowDropdown size={30} />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
