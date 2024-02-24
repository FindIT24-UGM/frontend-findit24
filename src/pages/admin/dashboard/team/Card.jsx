import React from "react";
import { TiChevronRight } from "react-icons/ti";
import { GoSquareFill } from "react-icons/go";
import { format } from "date-fns";

export default function Card({ name, member, date, isverified }) {
  const formattedDate = format(new Date(`${date}`), 'dd MMMM y');
  return (
    <div className='flex justify-between bg-white rounded-lg p-3 w-full my-2 cursor-pointer'>
      <div className='flex flex-col justify-center md:w-1/2'>
        <h2 className='font-bold text-[16px]'>{name}</h2>
        <p className='text-[13px]'>{member}</p>
      </div>
      <div className='flex items-center md:w-1/3 justify-between'>
        <div className='hidden md:flex md:flex-col text-[13px]'>
          <h2 className='font-bold'>Registered</h2>
          <p>{formattedDate}</p>
        </div>
        <button
          className={`flex px-2 rounded items-center ${
            isverified ? "bg-success-300" : "bg-error-300"
          }`}>
          <GoSquareFill className='text-[30px]' />
          <p>{isverified ? "verified" : "unverified"}</p>
        </button>
        <TiChevronRight />
      </div>
    </div>
  );
}
