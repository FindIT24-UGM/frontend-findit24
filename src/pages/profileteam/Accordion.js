import React from "react";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

export default function Accordion() {
  const [isExpand, setIsExpand] = useState(0);
  const clickAccordion = () => {
    setIsExpand(!isExpand);
  };
  const unggahOnclick = () => {};
  return (
    <div className={`bg-shade-white rounded-md my-2 ${isExpand ? 'border-2 border-black' : ''}`}>
      <div
        className={`flex items-center justify-between font-bold font-Montserrat p-2 cursor-pointer rounded-md ${isExpand ? 'border-black' : ''}`}
        onClick={() => {
          clickAccordion();
        }}
      >
        <div className="flex items-center space-x-4">
          <p>1.</p>
          <p>Han Jipyeong</p>
        </div>
        <MdPlayArrow className={`text-xl delay-100 ${isExpand ? 'transition rotate-90' : ''} delay-100`} />
      </div>
      <div className={`${isExpand ? "" : "hidden"}`}>
        <div className="px-4 pt-3">
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Email</h2>
            <p>Johndoe@gmail.com</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Tanggal Lahir</h2>
            <p>10/10/2002</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Asal Provinsi</h2>
            <p>D.I. Yogyakarta</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Alamat Lengkap</h2>
            <p>
              Jl. Grafika No.2, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman,
              D.I Yogyakarta 55281
            </p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Nomor HP</h2>
            <p>+62 044144015</p>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">ID Peserta</h2>
            <p>g49dfh4s</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Status</h2>
            <p>Mahasiswa</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Institusi</h2>
            <p>Universitas Diponegoro</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Nomor Institusi</h2>
            <p>1548824-2554-887</p>
          </div>
          <div className="font-Montserrat text-[11.57px] my-2">
            <h2 className="font-bold">Kartu Institusi</h2>
            <button
              className="w-[100px] border-2 border-background-skyblue rounded-md text-background-skyblue font-bold mt-1"
              onClick={() => {
                unggahOnclick();
              }}
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
