import React from "react";
import TeamProfileLayout from "./layout";

import { FaArrowLeft } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { HiCheckCircle } from "react-icons/hi";
import { BsQuestionOctagonFill } from "react-icons/bs";

import Comment from "./Comment";
import Status from "./Status";
import Accordion from "./Accordion";

const index = () => {
  const copyOnclick = () => {};
  const editOnclick = () => {};
  const unggahOnclick = () => {};
  const uploadOnclick = () => {};
  return (
    <TeamProfileLayout>
      {/* header */}
      <div className="flex items-center space-x-5 text-white text-xl lg:hidden">
        <FaArrowLeft />
        <h2 className="font-GameOfSquid font-bold">DASHBOARD LOMBA</h2>
      </div>

      <div className="space-y-5 md:space-y-0 md:flex md:flex-row md:justify-between md:gap-x-5 lg:flex-col lg:gap-y-5 lg:order-2">
        {/* deadline verif box */}
        <div className="bg-text-placeholder-light px-5 py-5 rounded-md border-4 border-black md:order-2 md:w-[40%] lg:w-full">
          <div className="flex items-center space-x-2">
            <IoTime />
            <h2 className="font-Montserrat font-bold">Deadline Verifikasi</h2>
          </div>
          <div className="flex justify-between my-5 md:flex md:flex-col lg:flex-row">
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[28px]">20</h2>
              <p className="font-Montserrat font-bold text-[16px]">Hari</p>
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[28px]">22</h2>
              <p className="font-Montserrat font-bold text-[16px]">Jam</p>
            </div>
            <div className="bg-gradient-to-b from-orange-400 to-red-400 rounded p-2 w-1/3 mx-2 text-white space-y-2 md:w-full md:flex md:items-center md:justify-between md:my-1 lg:w-1/3">
              <h2 className="font-GameOfSquid text-[28px]">14</h2>
              <p className="font-Montserrat font-bold text-[16px]">Menit</p>
            </div>
          </div>
        </div>
        {/* komentar admn box */}
        <div className="bg-text-placeholder-light px-5 py-5 rounded-md border-4 border-black space-y-4 md:order-1 md:w-[60%] lg:w-full lg:h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BsChatSquareTextFill />
              <h2 className="font-Montserrat font-bold">Komentar Admin</h2>
            </div>
            <div className="w-fit text-[#E1820A] bg-[#E8C81B] p-1 rounded-md font-Montserrat font-bold">
              1 BARU
            </div>
          </div>
          <div className="max-h-72 md:max-h-56 lg:max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-white">
            <Comment
              title={"Verifikasi Gagal"}
              destination={"Samsan Tech"}
              content={
                "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
              }
              date={"12 Januari 2024, 13:56:02"}
            />
            <Comment
              title={"Verifikasi Gagal"}
              destination={"Samsan Tech"}
              content={
                "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
              }
              date={"12 Januari 2024, 13:56:02"}
            />
            <Comment
              title={"Verifikasi Gagal"}
              destination={"Samsan Tech"}
              content={
                "Ipsum congue eget pretium non sit blandit at. Tellus nunc sed morbi eget cras. Elementum amet penatibus elementum ultrices consectetur elementum aliquet."
              }
              date={"12 Januari 2024, 13:56:02"}
            />
          </div>
        </div>
      </div>

      {/* team info box */}
      <div className="bg-text-placeholder-light px-5 py-5 rounded-md border-4 border-black space-y-8 md:flex md:gap-x-5 lg:order-1 lg:row-span-2 lg:col-span-2">
        <div className="space-y-4 text-left md:w-1/2">
          <div className="flex items-center space-x-2">
            <BsPeopleFill />
            <h2 className="font-Montserrat font-bold">Team information</h2>
          </div>
          <div className="border-b-[1px] pb-5 border-slate-600">
            <div className="flex items-center justify-between">
              <h2 className="font-CreatoDisplay font-bold text-[24px]">
                SamSan Tech
              </h2>
              <Status isVerified={false} />
            </div>
            <p className="font-Montserrat font-bold text-[13.89px]">Heckaton</p>
          </div>
          <div className="space-y-4 border-b-[1px] pb-5 border-slate-600">
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Team ID</h2>
              <p className="h-full">0dfeb631</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Code</h2>
              <p className="h-full font-bold text-background-skyblue">jmgnda</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Leader</h2>
              <p className="h-full">John Doe</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <div className="font-bold w-[200px]">
                <p>Invitation</p>
                <p>Code</p>
              </div>
              <div className="h-full flex items-center space-x-2">
                <p>1gh7bb3@</p>
                <IoIosCopy
                  className="cursor-pointer"
                  onClick={() => copyOnclick()}
                />
              </div>
            </div>
          </div>
          <div className="space-y-3 border-b-[1px] pb-5 border-slate-600">
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Status</h2>
              <p className="h-full text-left">Mahasiswa</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Asal Instansi</h2>
              <p className="h-full text-left">Universitas Diponegoro</p>
            </div>
          </div>
          <div className="space-y-4 border-b-[1px] pb-5 border-slate-600">
            <div className="font-Montserrat flex items-center">
              <div className="w-[200px]">
                <p>Informasi</p>
                <p>Pembayaran</p>
              </div>
              <button
                className="flex items-center w-[160px] justify-center border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                onClick={() => {
                  editOnclick();
                }}
              >
                <AiFillEdit />
                <p>Edit</p>
              </button>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Tanggal Pembayaran</h2>
              <p>12/01/2024</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Nama Pengirim</h2>
              <p>John Doe</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">No. Rek</h2>
              <p>6301 8888 8888</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <h2 className="font-bold w-[200px]">Bank</h2>
              <p>BCA</p>
            </div>
            <div className="font-Montserrat flex items-center">
              <div className="w-[200px]">
                <p className="font-bold">Informasi</p>
                <p className="text-neutral-300 font-bold text-[11.57px]">
                  buktiPembayaran.png
                </p>
              </div>
              <button
                className="w-[160px] border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                onClick={() => {
                  unggahOnclick();
                }}
              >
                Unggah
              </button>
            </div>
            <div className="font-Montserrat flex items-center">
              <div className="w-[200px]">
                <p className="font-bold">Bukti Twibbon</p>
                <p className="text-neutral-300 font-bold text-[11.57px]">
                  anda belum upload
                </p>
              </div>
              <button
                className="w-[160px] border-4 border-background-skyblue rounded-md text-background-skyblue font-bold space-x-1"
                onClick={() => {
                  uploadOnclick();
                }}
              >
                Upload
              </button>
            </div>
          </div>
          <button className="w-full py-3 rounded-sm flex items-center justify-center space-x-3 font-GameOfSquid bg-primary-300">
            <HiCheckCircle />
            <p className="text-[16px] font-bold">aJUKAN VERIFIKASI</p>
          </button>
        </div>
        <div className="px-3 py-5 bg-primary-500 rounded-md md:w-1/2">
          <h2 className="text-2xl font-Montserrat text-white font-bold">
            Anggota
          </h2>
          <div className="mt-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-primary-500 scroll-m-2 max-h-[720px]">
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
      </div>

      {/* pertanyaan box */}
      <div className="lg:order-3">
        <div className="bg-primary-500 px-5 py-5 text-white rounded-md border-4 border-black space-y-5">
          <div className="font-bold flex items-center space-x-2 font-Montserrat">
            <BsQuestionOctagonFill />
            <h2>Butuh Bantuan?</h2>
          </div>
          <div className="font-Montserrat">
            Apabila anda memiliki <span className="font-bold">pertanyaan</span>{" "}
            atau membutuhkan bantuan{" "}
            <span className="font-bold">dalam proses verifikasi</span>, silakan
            mengubungi Contact Person Lomba
          </div>
          <button className="text-center text-[16px] text-black font-bold py-2 bg-background-skyblue w-full font-GameOfSquid rounded-md">
            Hubungi kami
          </button>
        </div>
      </div>
    </TeamProfileLayout>
  );
};

export default index;
