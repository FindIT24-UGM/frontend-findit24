import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Anouncement({ id, anouncementTitle, content, date }) {
  const router = useRouter()
  const formattedDate = format(new Date(`${date}`), 'dd MMMM y');
  const deleteAnnouncement = (id) => {
    axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/admin/announcement/${id}`, { withCredentials: true})
      .then(res => {
        router.reload()
      })
      .catch(err => {
      })
  }
  return (
    <div className='font-Montserrat p-2'>
      <h2 className='font-bold'>{anouncementTitle}</h2>
      <div className='text-[12px]'>{content}</div>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-[12px]'>{formattedDate}</p>
        <button onClick={() => deleteAnnouncement(id)}>
        <div className='cursor-pointer'>
          <FaTrash />
        </div>
        </button>
      </div>
    </div>
  );
}
