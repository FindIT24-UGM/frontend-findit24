import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Anouncement({ anouncementTitle, content, date }) {
  return (
    <div className='font-Montserrat p-2'>
      <h2 className='font-bold'>{anouncementTitle}</h2>
      <div className='text-[12px]'>{content}</div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-[12px]'>{date}</p>
        <div className='cursor-pointer'>
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
