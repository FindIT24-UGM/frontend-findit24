import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const NoQuestion = () => {
  return (
    <div
      className={twMerge(
        "flex flex-row sm:gap-x-3 w-[80%] mt-20 justify-center items-center",
        "max-sm:flex-col max-sm:gap-y-5"
      )}
    >
      <Image
        src={"assets/images/faq-Not-found asset.svg"}
        width={250}
        height={250}
      />
      <div className="flex flex-col text-center font-Montserrat">
        <p className="mb-5 text-xl font-GameOfSquid">No Result Found...</p>
        <p className="max-sm:text-sm">
          We couldn't find what you searched for.
        </p>
        <p className="max-sm:text-sm">
          Please search again, or contact us
          {<span className="ml-2 underline">here</span>}
        </p>
      </div>
    </div>
  );
};

export default NoQuestion;
