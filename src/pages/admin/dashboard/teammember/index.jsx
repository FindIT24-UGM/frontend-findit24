import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "../../../../components/AdminPage/Accordion";
//KUPINDAHIN KE [teamId].jsx
export default function index() {
  return (
    <div className="bg-background-skyblue min-h-screen lg:flex py-20 px-5 lg:px-12 md:px-8">
      <div className="bg-white rounded-lg border-2 border-black py-10 px-5 lg:flex w-full justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-12">
            <IoArrowBack className="text-[20px]" />
            <span className="font-GameOfSquid text-[16px]">
              TEAM INFORMATION
            </span>
          </div>
          <div className="pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <h2 className="font-CreatoDisplay font-bold text-[42px]">
              SamSan Tech
            </h2>
            <p className="font-Montserrat font-bold text-[16px]">Hacketon</p>
          </div>
          <div className="flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <div className="flex flex-col space-y-2">
              <p>Team ID</p>
              <p>Code</p>
              <p>Leader</p>
            </div>
            <div className="flex flex-col space-y-2">
              {/* for team id input */}
              <p className="text-neutral-700">0dfeb631</p>
              {/* for team code input */}
              <p className="text-background-skyblue">jmgnda</p>
              {/* for team leader input */}
              <p className="text-neutral-700">John Doe</p>
            </div>
          </div>
          <div className="flex space-x-10 font-Montserrat text-[17px] font-bold pb-8 border border-x-0 border-t-0 border-b-neutral-300 mb-8">
            <div className="flex flex-col space-y-4">
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Tanggal Pembayaran
              </p>
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Nama Pengirim
              </p>
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                No. Rek
              </p>
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Bank
              </p>
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Bukti Pembayaran
              </p>
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Bukti Twibon
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {/* for date */}
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                12/01/2024
              </p>
              {/* name of the sander */}
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                Jerome Polin
              </p>
              {/* account number */}
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                6301 8888 8888
              </p>
              {/* account name */}
              <p className="flex flex-row items-center h-[60px] md:h-fit">
                BCA
              </p>
              {/*  payment */}
              <div className="flex flex-row items-center h-[60px] md:h-fit">
                <button className="text-[13px] text-center px-1 py-[5px] rounded-lg border-2 border-background-skyblue text-background-skyblue w-3/4">
                  Lihat
                </button>
              </div>
              {/* twibon upload */}
              <div className="flex flex-row items-center h-[60px] md:h-fit">
                <button className="text-[13px] text-center px-1 py-[5px] rounded-lg border-2 border-background-skyblue text-background-skyblue w-3/4">
                  Lihat
                </button>
              </div>
            </div>
          </div>
          <div className="font-bold font-Montserrat text-[17px] space-y-2 pb-8 mb-3">
            <div className="flex space-x-1 items-center">
              <input type="radio" name="verified" />
              <label for="verified">Verivikasi</label>
            </div>
            <div className="flex space-x-1 items-center">
              <input type="radio" name="verified" />
              <label for="verified">Tolak Verivikasi</label>
            </div>
            <div>
              <textarea
                rows="8"
                className="p-2 w-full font-light border-2"
              ></textarea>
            </div>
          </div>
          <div>
            <textarea
              rows="8"
              className="p-2 w-full font-light border-2d"
            ></textarea>
          </div>
          <button className="font-GameOfSquid font-bold text-[16px] flex items-center py-2 justify-center w-full rounded bg-primary-300 space-x-2">
            <IoIosSave />
            <span>SIMPAN</span>
          </button>
        </div>
        <div className="px-5 py-10 bg-primary-500 rounded-lg mt-14 lg:mt-0 lg:w-2/3">
          <h2 className="font-bold font-CreatoDisplay text-[34px] text-white">
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
  );
}
