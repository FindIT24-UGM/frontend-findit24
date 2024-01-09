"use client";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const FAQ = [{ question: "Apakah benar bro", ans: "benar bro" }];

const CATEGORY = [
  {
    title: "All",
  },
  {
    title: "Lomba",
  },
  {
    title: "We-binar",
  },
];

export default function FAQPage() {
  const [searched, setSearched] = useState("");
  const [category, setCategory] = useState("");
  const [faqIndex, setFaqIndex] = useState(FAQ.length);
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
      <div className="flex flex-row items-center justify-center w-[50%] p-2 bg-shade-black rounded-xl border-2 border-black mt-5 gap-x-2">
        {CATEGORY.map((c) => (
          <div
            className={twMerge(
              "flex items-center justify-center flex-1 cursor-pointer font-GameOfSquid text-neutral-300 hover:text-white hover:bg-orange-300 transition-all duration-300 rounded-lg border-2 border-black py-1",
              category == c.title && "bg-orange-500 text-white"
            )}
            onClick={() => setCategory(c.title)}
          >
            {c.title}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[80%] mt-10">
        {FAQ.map((f, idx) => (
          <div
            className={twMerge(
              "w-full flex flex-row items-center justify-between py-2 h-fit text-white font-Montserrat font-[700] bg-secondary-blue rounded-lg px-5 text-sm transition-all duration-300",
              faqIndex == idx && "bg-shade-black"
            )}
          >
            <div className="flex-1">
              <p>{f.question}</p>
              {faqIndex == idx && <p className="mt-10">{f.ans}</p>}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                const newIndex = faqIndex == idx ? FAQ.length : idx;
                setFaqIndex(newIndex);
              }}
            >
              {faqIndex == idx ? (
                <IoMdArrowDropup size={30} />
              ) : (
                <IoMdArrowDropdown size={30} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
