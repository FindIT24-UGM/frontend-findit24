import React from "react";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Question = ({ displayedFaq, faqIndex, setFaqIndex }) => {
  return (
    <div className="flex flex-col w-[90%] mt-20 h-fit gap-y-5">
      {displayedFaq.map((f, idx) => (
        <>
          <div
            key={f.id}
            className={twMerge(
              "w-full flex flex-row items-center justify-between py-3 h-fit text-white font-Montserrat bg-secondary-blue rounded-lg px-5 text-sm transition-all duration-300 hover:cursor-pointer",
              faqIndex.includes(idx) && "bg-text-placeholder-dark"
            )}
            onClick={() => {
              if (faqIndex.includes(idx)) {
                setFaqIndex((arr) => arr.filter((a) => a !== idx));
              } else {
                setFaqIndex((arr) => [...arr, idx]);
              }
            }}>
            <div className={twMerge("flex-1 flex-col")}>
              <div className="font-[700]">{f.question}</div>
              <div
                className={twMerge(
                  "grid transition-all duration-500",
                  faqIndex.includes(idx)
                    ? "grid-rows-[1fr] mt-2"
                    : "grid-rows-[0fr]"
                )}>
                <p className="overflow-hidden pr-4 font-light text-slate-300">
                  {f.ans}
                </p>
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
  );
};

export default Question;
