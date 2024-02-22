import React, { useState } from "react";
import AdminDashboadrLayout from "../layout";
import Anouncement from "./Anouncement";
import axios from "axios";

export default function index() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [message, setMessage] = useState(null)

  const uploadAnnouncement = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/announcement`,
    {
      toEvent: selectedOption,
      title,
      content
    }, {withCredentials: true})
    .then(res => {
      setMessage(res.data.message)
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <AdminDashboadrLayout>
      <div className='bg-white p-2 rounded-lg border-2 border-black lg:flex lg:p-7'>
        <div className='bg-primary-500 p-2 rounded-lg lg:order-2 lg:w-2/3 lg:px-20 lg:py-8'>
          <form className='font-Montserrat text-[17px] space-y-2'>
            <div className='flex flex-col'>
            <select
              aria-placeholder='Select Receiver'
              className='p-2 rounded'
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.currentTarget.value)}
            >
              <option value="">Select an option</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CTF}>Capture The Flag</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_HACKATHON}>Hackathon</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_ML}>Esport - Mobile Legends</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_CP}>Competitive Programming</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_DAC}>Data Analytics Competition</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_VALORANT}>Esport - Valorant</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_IC}>Informatics Competitions</option>
              <option value={process.env.NEXT_PUBLIC_COMPETITION_ID_UXCOMPE}>UX Competition</option>
              <option value="">Options X</option>
            </select>
            </div>
            <div className='flex flex-col'>
              <label className='font-bold text-white'>Title</label>
              <input type='text' className='p-2 rounded' value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </div>
            <div className='flex flex-col'>
              <label className='font-bold text-white'>Message</label>
              <textarea rows='8' className='p-2 rounded' value={content} onChange={(e) => setContent(e.currentTarget.value)}></textarea>
            </div>
            <button onClick={uploadAnnouncement} className='font-GameOfSquid w-full p-2 bg-background-skyblue rounded-md'>
              Send
            </button>
          </form>
        </div>
        <div className='p-2 text-[16px] font-Montserrat lg:order-1 lg:w-1/3 lg:mr-5 lg:py-8'>
          <h2 className='font-bold'>Broadcast History</h2>
          <Anouncement
            anouncementTitle={"Anouncement title"}
            content={
              "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
            }
            date={"12 January 2024, 23:56:02"}
          />
          <Anouncement
            anouncementTitle={"Anouncement title"}
            content={
              "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
            }
            date={"12 January 2024, 23:56:02"}
          />
          <Anouncement
            anouncementTitle={"Anouncement title"}
            content={
              "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
            }
            date={"12 January 2024, 23:56:02"}
          />
        </div>
      </div>
    </AdminDashboadrLayout>
  );
}
