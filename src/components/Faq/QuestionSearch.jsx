import React from "react";
import { BsSearch } from "react-icons/bs";

const QuestionSearch = ({ setSearched, searched }) => {
  return (
    <div className="relative w-[60%] max-sm:w-[90%] mt-10">
      <input
        className="flex items-center justify-center w-full py-4 pl-8 pr-12 text-black bg-white rounded-lg font-Montserrat text-md h-fit"
        onChange={(e) => {
          setSearched(e.target.value);
        }}
        placeholder="Search your question..."
        value={searched}></input>
      <BsSearch
        size={20}
        className="absolute text-black -translate-x-1/2 -translate-y-1/2 right-3 top-1/2"
      />
    </div>
  );
};

export default QuestionSearch;
