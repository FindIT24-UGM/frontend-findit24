import React from "react";
import { twMerge } from "tailwind-merge";
import { IoMdArrowDropdown } from "react-icons/io";

const Question = ({ displayedFaq, faqIndex }) => {
  return (
    <div className="flex flex-col w-[80%] mt-20 h-fit gap-y-5">
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
                  faqIndex.includes(idx) ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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
  );
};

export default Question;
