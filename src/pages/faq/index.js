"use client";

import { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const LOMBA = [
  "Capture the flag",
  "Competitive Programming",
  "UX Competition",
  "Data analysis",
  "Hackaton",
  "E-Sports",
  "Informatics Competition",
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

const CATEGORY = [
  {
    title: "All",
  },
  {
    title: "Lomba",
  },
  {
    title: "Webinar",
  },
];

export default function FAQPage() {
  const [searched, setSearched] = useState("");
  const [category, setCategory] = useState("");
  const [faqIndex, setFaqIndex] = useState([]);

  const displayedFaq = useMemo(() => {
    const searchedVal = FAQ.filter((f) =>
      f.question.toLowerCase().includes(searched.toLowerCase())
    );
    if (category == "" || category == "All") {
      return searchedVal;
    }
    return searchedVal.filter((s) => s.category == category);
  }, [searched, category]);

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
      <div className="flex flex-row items-center justify-center w-[50%] p-2 bg-[#233E51] rounded-xl border-2 border-black mt-5 gap-x-2">
        {CATEGORY.map((c) => (
          <div
            className={twMerge(
              "flex items-center justify-center flex-1 rounded-lg cursor-pointer font-GameOfSquid text-neutral-300 hover:text-white hover:bg-orange-300 transition-all duration-300  py-1",
              category == c.title &&
                "bg-orange-500 text-white  border-2 border-black",
              c.title == "Lomba" && "group relative"
            )}
            onClick={() => setCategory(c.title)}
          >
            <p className="mx-auto">{c.title}</p>
            {c.title == "Lomba" && <IoMdArrowDropdown size={30} />}
            {c.title == "Lomba" && (
              <div
                className={twMerge(
                  "absolute top-[150%] flex flex-col w-[300%] h-fit bg-[#233E51] rounded-lg px-5 py-6",
                  "opacity-0 -z-10",
                  c.title == category && "opacity-100 z-10",
                  "group-hover:opacity-100 group-hover:z-10",
                  "transition-all duration-500"
                )}
              >
                {LOMBA.map((l) => (
                  <div
                    className="flex items-center justify-center flex-1 w-full py-2 rounded-lg hover:text-white hover:bg-orange-300 font-Montserrat"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCategory(l);
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[80%] mt-10 h-fit gap-y-5">
        {displayedFaq.map((f, idx) => (
          <>
            <div
              className={twMerge(
                "w-full flex flex-row items-center justify-between py-2 h-fit text-white font-Montserrat font-[700] bg-secondary-blue rounded-lg px-5 text-sm transition-all duration-300",
                faqIndex.includes(idx) && "bg-[#233E51]"
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
