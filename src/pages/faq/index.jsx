"use client";

import { useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown } from "react-icons/io";
import NoQuestion from "./NoQuestion";
import Question from "./Question";

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
    <div className="flex flex-col items-center justify-center w-screen min-h-screen px-5 py-20 overflow-auto bg-background-skyblue lg:px-12 md:px-8">
      {/* the header and input section*/}
      <h1 className="font-GameOfSquid text-8xl font-[400] max-sm:mr-auto max-sm:ml-10">
        FAQ
      </h1>
      <h2 className="font-CreatoDisplay tracking-wide text-lg font-[700] mt-2 max-sm:mr-auto max-sm:ml-10">
        Frequently Asked Question
      </h2>
      <div className="relative w-[60%] max-sm:w-[85%] mt-10">
        <input
          className="flex items-center justify-center w-full py-4 pl-8 pr-12 text-black bg-white rounded-lg font-Montserrat text-md h-fit"
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder="Search your question..."
          value={searched}
        ></input>
        <BsSearch
          size={20}
          className="absolute text-black -translate-x-1/2 -translate-y-1/2 right-3 top-1/2"
        />
      </div>
      {/* the category section */}
      <div className="flex flex-row items-center justify-center max-sm:w-[80%] w-[50%] p-2 bg-text-placeholder-dark rounded-xl border-2 border-black mt-5 gap-x-2">
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
      {/* the question section */}
      {displayedFaq.length > 0 && (
        <Question displayedFaq={displayedFaq} faqIndex={faqIndex} />
      )}

      {/* no question found section */}
      {displayedFaq.length == 0 && <NoQuestion />}
    </div>
  );
}
