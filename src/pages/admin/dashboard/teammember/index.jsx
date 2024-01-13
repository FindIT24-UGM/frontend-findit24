import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "./Accordion";
import Footer from "../../../../components/footer";

export default function index() {
  return (
    <div>
      <div className='bg-background-skyblue min-h-screen lg:flex py-20 px-5 lg:px-12 md:px-8'>
        <div className='bg-white rounded-lg border-2 border-black py-10 px-5 lg:flex w-full justify-between'>
          <div>
            <div className='flex items-center space-x-3 mb-12'>
              <IoArrowBack className='text-[20px]' />
              <span className='font-GameOfSquid text-[16px]'>
                TEAM INFORMATION
              </span>
            </div>
            <div className='pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8'>
              <h2 className='font-CreatoDisplay font-bold text-[42px]'>
                SamSan Tech
              </h2>
              <p className='font-Montserrat font-bold text-[16px]'>Hacketon</p>
            </div>
            <div className='flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8'>
              <div className='flex flex-col space-y-2'>
                <p>Team ID</p>
                <p>Code</p>
                <p>Leader</p>
              </div>
              <div className='flex flex-col space-y-2'>
                {/* for team id input */}
                <p className='text-neutral-700'>0dfeb631</p>
                {/* for team code input */}
                <p className='text-background-skyblue'>jmgnda</p>
                {/* for team leader input */}
                <p className='text-neutral-700'>John Doe</p>
              </div>
            </div>
            <div className='flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8'>
              <div className='flex flex-col space-y-2'>
                <p>Tanggal Pembayaran</p>
                <p>Bukti Pembayaran</p>
              </div>
              <div className='flex flex-col space-y-2'>
                {/* for date */}
                <p>12 Jnuari 2024</p>
                <button className='text-[13px] text-center px-1 py-[5px] rounded-lg border-2 border-background-skyblue text-background-skyblue'>
                  Lihat
                </button>
              </div>
            </div>
            <div className='font-bold font-Montserrat text-[17px] space-y-2 pb-8 mb-3'>
              <div className='flex space-x-1 items-center'>
                <input type='radio' name='verified' />
                <label for='verified'>Verivikasi</label>
              </div>
              <div className='flex space-x-1 items-center'>
                <input type='radio' name='verified' />
                <label for='verified'>Tolak Verivikasi</label>
              </div>
            </div>
            <button className='font-GameOfSquid font-bold text-[16px] flex items-center py-2 justify-center w-full rounded bg-primary-300 space-x-2'>
              <IoIosSave />
              <span>SIMPAN</span>
            </button>
          </div>
          <div className='px-5 py-10 bg-primary-500 rounded-lg mt-14 lg:mt-0 lg:w-2/3'>
            <h2 className='font-bold font-CreatoDisplay text-[34px] text-white'>
              Anggota
            </h2>
            <div>
              {/* bikin parameter datanya nanti aja */}
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
