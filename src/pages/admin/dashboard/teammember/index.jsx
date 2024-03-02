import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Accordion from "../../../../components/AdminPage/Accordion";
import RootLayout from "../../../layout";
import ElectricPattern from "../../../../components/ElectricPattern";
import { useRouter } from 'next/router';

//KUPINDAHIN KE [teamId].jsx
export default function index() {
  const [content, setContent] = useState(null);
  const [rejectActive, setRejectActive] = useState(false);

  const handleRejectButtonClick = () => {
    setRejectActive(true);
  };

  const handleVerifyButtonClick = () => {
      setRejectActive(false);
  };

  const router = useRouter();

    const handleBackTeam = () => {
        router.push("/admin/dashboard/team");
    };

  let maxMessageLength = 500;

  const teamInfo = [
    { label: 'Team ID', value: '0dfeb631' },
    { label: 'Code', value: 'jmgnda' },
    { label: 'Leader', value: 'John Doe' }
  ];

  const formFields = [
    { label: 'Tanggal Pembayaran', value: '12/01/2024' },
    { label: 'Nama Pengirim', value: 'Jerome Polin' },
    { label: 'No. Rek', value: '6301 8888 8888' },
    { label: 'Bank', value: 'BCA' }
  ];

  return (
    <RootLayout>
      <ElectricPattern>
      <div className="bg-background-skyblue min-h-screen lg:flex py-20 px-5 lg:px-12 md:px-8">
        <div className="bg-white rounded-lg border-2 border-black py-10 px-5 lg:flex w-full justify-between relative">
          <div className='w-full lg:w-2/5 flex flex-col gap-8 p-3 sm:p-5'>
            <button className='w-full flex gap-4 items-center' onClick={handleBackTeam}>
              <IoArrowBack size={20} color='black' />
              <p className='font-GameOfSquid text-shade-black text-center'>Team information</p>
            </button>
            <div className='w-full flex flex-col gap-4'>
              <div className="flex flex-col gap-2">
                <p className='font-CreatoDisplay font-bold text-shade-black text-4xl'>SamSan Tech</p>
                <p className="font-Montserrat font-bold text-base text-shade-black">Hackathon</p>
              </div>
              <div className='border border-neutral-300 w-full' />
              {teamInfo.map((field, index) => (
                <div key={index} className='w-full flex'>
                  <div className='w-1/2'>
                    <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>{field.label}</p>
                  </div>
                  <div className='min-w-1/2'>
                    <p className={`font-Montserrat font-bold text-sm sm:text-base ${index === 1 ? 'text-background-skyblue' : 'text-neutral-700'}`}>{field.value}</p>
                  </div>
                </div>
              ))}
              <div className='border border-neutral-300 w-full' />
              {formFields.map((field, index) => (
                <div key={index} className='w-full flex'>
                  <div className='w-1/2'>
                    <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>{field.label}</p>
                  </div>
                  <div className='min-w-1/2'>
                    <p className='font-Montserrat font-bold text-neutral-700 text-sm sm:text-base'>{field.value}</p>
                  </div>
                </div>
              ))}
              <div className="w-full flex">
                <div className="w-1/2">
                  <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>Bukti Pembayaran</p>
                </div>
                <button className="min-w-1/2 border-[2px] border-background-skyblue px-4 py-1 rounded">
                  <p className="text-background-skyblue font-bold text-sm font-Montserrat">Lihat</p>
                </button>
              </div>
              <div className="w-full flex">
                <div className="w-1/2">
                  <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>Bukti Twibbon</p>
                </div>
                <button className="min-w-1/2 border-[2px] border-background-skyblue px-4 py-1 rounded">
                  <p className="text-background-skyblue font-bold text-sm font-Montserrat">Lihat</p>
                </button>
              </div>
              <div className='border border-neutral-300 w-full' />
              <div className='flex flex-col gap-3 sm:gap-4'>
              <button className='flex gap-4 items-center' onClick={handleVerifyButtonClick}>
                <div className={`w-3 h-3 rounded-full border-2 border-shade-black ${rejectActive ? '' : 'bg-background-skyblue'}`} />
                <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>Verifikasi</p>
              </button>
              <button className='flex gap-4 items-center' onClick={handleRejectButtonClick}>
                <div className={`w-3 h-3 rounded-full border-2 border-shade-black ${rejectActive ? 'bg-background-skyblue' : ''}`} />
                <p className='font-Montserrat font-bold text-shade-black text-sm sm:text-base'>Tolak Verifikasi</p>
              </button>
              {rejectActive && (
                <div className="w-full relative border border-shade-black rounded-lg">
                  <textarea
                    rows='2' 
                    className='rounded-lg bg-text-placeholder-light text-neutral-500 font-Montserrat font-medium w-5/6 h-full px-3 py-2 border-none outline-none'
                    style={{ resize: "none" }} 
                    placeholder="Write here..." 
                    value={content}
                    maxLength={maxMessageLength}
                    onChange={(e) => {
                      if (e.currentTarget.value.length <= maxMessageLength) {
                        setContent(e.currentTarget.value);
                      }
                    }}
                  />
                  <span className='text-sm text-shade-black absolute right-0 bottom-0 p-3 z-[100]'>{`${content ? content.length : 0}/500`}</span>
                </div>
              )}
              </div>
              <button className='w-full rounded-md bg-primary-300 flex gap-2 items-center justify-center py-2'>
                <IoIosSave size={20} color='black' />
                <p className='font-GameOfSquid text-shade-black text-center'>Simpan</p>
                </button>
            </div>
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
      </ElectricPattern>
    </RootLayout>
  );
}
