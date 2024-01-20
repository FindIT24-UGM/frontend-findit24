import React from "react";
import AdminDashboadrLayout from "../layout";
import Anouncement from "./Anouncement";

export default function index() {
  return (
    <AdminDashboadrLayout>
      <div className='bg-white p-2 rounded-lg border-2 border-black lg:flex lg:p-7'>
        <div className='bg-primary-500 p-2 rounded-lg lg:order-2 lg:w-2/3 lg:px-20 lg:py-8'>
          <form className='font-Montserrat text-[17px] space-y-2'>
            <div className='flex flex-col'>
              <label className='font-bold text-white'>Send To</label>
              <select
                aria-placeholder='Select Receiver'
                className='p-2 rounded'>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className='font-bold text-white'>Title</label>
              <input type='text' className='p-2 rounded' />
            </div>
            <div className='flex flex-col'>
              <label className='font-bold text-white'>Message</label>
              <textarea rows='8' className='p-2 rounded'></textarea>
            </div>
            <button className='font-GameOfSquid w-full p-2 bg-background-skyblue rounded-md'>
              BUTTON
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
