import React from "react";

import { PiRectangleFill } from "react-icons/pi";

export default function Status({ isVerified }) {
  return (
    <div
      className={`flex items-center space-x-1 ${isVerified ? "bg-success-300" : "bg-error-300"} w-fit px-2 py-1 rounded font-Montserrat`}
    >
      <PiRectangleFill
        className={`${isVerified ? "text-success-700" : "text-error-500"}`}
      />
      <p
        className={`${isVerified ? "text-success-700" : "text-error-500"} font-bold`}
      >
        {isVerified ? "Verified" : "Unverified"}
      </p>
    </div>
  );
}
