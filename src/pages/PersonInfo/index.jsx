import React, { useState, useEffect, useRef } from 'react';
import RootLayout from '../layout.jsx';
import { BsPersonBadgeFill, BsCalendarDateFill, BsCalendar2PlusFill, BsPinMapFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoSchool } from 'react-icons/io5';
import { HiPhone } from 'react-icons/hi';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Button from '../../components/Button.jsx';

const PersonalInfo = () => {
  const [name, setName] = useState(undefined); 
  const [date, setDate] = useState(undefined);
  const [openProvinsi, setOpenProvinsi] = useState(false);
  const [provinsiSelected, setProvinsiSelected] = useState(undefined);
  const [openStatus, setOpenStatus] = useState(false);
  const [statusSelected, setStatusSelected] = useState(undefined);
  const [instansi, setInstansi] = useState(undefined);
  const [number, setNumber] = useState(undefined);
  const [message, setMessage] = useState("");

  const dropdownProvinsiRef = useRef();
  const dropdownStatusRef = useRef();

  useEffect (() => {
    const handler = (e) => {
      if(!dropdownProvinsiRef.current.contains(e.target)){
        setOpenProvinsi(false)
      }
      if(!dropdownStatusRef.current.contains(e.target)){
        setOpenStatus(false)
      }
    };
    document.body.addEventListener("click", handler);
    return () => document.body.removeEventListener("click", handler);
  })

  const onSubmit = async () => {
    try {
      if(!name) {
        return setMessage("Please fill Nama Lengkap")
      }
      if(!date) {
        return setMessage("Please fill Tanggal Lahir")
      }
      if(!provinsiSelected) {
        return setMessage("Please fill Asal Provinsi")
      }
      if(!statusSelected) {
        return setMessage("Please fill Status")
      }
      if(!instansi) {
        return setMessage("Please fill Instansi")
      }
      if(!number) {
        return setMessage("Please fill Nomor HP")
      }
    } catch (err) {}
  };

  const CustomInput = ({value, onClick}) => {
    return (
      <div className='w-[66.66667vw] sm:w-[50vw] lg:w-[33.3333333vw] '>
        <div className='w-full h-auto mt-2 relative flex justify-end items-center'>
        <input 
            className='w-full text-base font-Montserrat font-medium text-[#B6B7BA] py-[15px] pl-8 rounded-lg'
            type="text"
            placeholder='DD/MM/YYYY'
            value={value}
            onClick={onClick}
          >
          </input>
          <BsCalendar2PlusFill onClick={onClick} className='size-[24px] fill-[#233E51] absolute mr-7' />
        </div>
      </div>
    );
  }

  const provinsies = [
    {
      name : "Nanggroe Aceh Darussalam"
    },
    {
      name : "Sumatera Utara"
    },
    {
      name : "Sumatera Selatan"
    },
    {
      name : "Sumatera Barat"
    },
    {
      name : "Bengkulu"
    },
    {
      name : "Riau"
    },
    {
      name : "Kepulauan Riau"
    },
    {
      name : "Jambi"
    },
    {
      name : "Lampung"
    },
    {
      name : "Bangka Belitung"
    },
    {
      name : "Kalimantan Barat"
    },
    {
      name : "Kalimantan Timur"
    },
    {
      name : "Kalimantan Selatan"
    },
    {
      name : "Kalimantan Tengah"
    },
    {
      name : "Kalimantan Utara"
    },
    {
      name : "Banten"
    },
    {
      name : "DKI Jakarta"
    },
    {
      name : "Jawa Barat"
    },
    {
      name : "Jawa Tengah"
    },
    {
      name : "Daerah Istimewa Yogyakarta"
    },
    {
      name : "Jawa Timur"
    },
    {
      name : "Bali"
    },
    {
      name : "Nusa Tenggara Timur"
    },
    {
      name : "Nusa Tenggara Barat"
    },
    {
      name : "Gorontalo"
    },
    {
      name : "Sulawesi Barat"
    },
    {
      name : "Sulawesi Tengah"
    },
    {
      name : "Sulawesi Utara"
    },
    {
      name : "Sulawesi Tenggara"
    },
    {
      name : "Sulawesi Selatan"
    },
    {
      name : "Maluku Utara"
    },
    {
      name : "Maluku"
    },
    {
      name : "Papua Barat"
    },
    {
      name : "Papua"
    },
    {
      name : "Papua Tengah"
    },
    {
      name : "Papua Pegunungan"
    },
    {
      name : "Papua Selatan"
    },
    {
      name : "Papua Barat Daya"
    }
  ]
  const statuses = [
    {
      name : 'Universitas/Institut'
    },
    {
      name : 'SMA'
    },
    {
      name : 'Umum'
    }
  ]

  return (
    <RootLayout>
    <div className='flex flex-col items-center justify-center w-screen min-h-screen overflow-auto bg-background-skyblue'>
      <div className=' text-center mt-[68px]'>
        <h1 className='font-GameOfSquid text-6xl leading-[50px] text-[#FCFCFC] drop-shadow-[0_0px_6px_rgba(255,255,255,1)]'>
          DATA DIRI
        </h1>
        <h2 className=' font-Montserrat text-base text-[#FFF] mt-2 font-medium'>
          Please fill the form correctly
        </h2>
      </div>
      <div className='mt-6 w-2/3 sm:w-1/2 lg:w-1/3 flex flex-col gap-4'>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <BsPersonBadgeFill className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Nama Lengkap
            </h2>
          </div>
          <input
            className=' w-full mt-2 text-base font-Montserrat font-medium text-[#B6B7BA] py-[15px] pl-8 rounded-lg'
            type="text"
            placeholder='John Doe'
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          ></input>
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <BsCalendarDateFill className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Tanggal Lahir
            </h2>
          </div>
          <DatePicker
            selected={date}
            onChange={(e) => setDate(e)}
            customInput = {<CustomInput />}
            dateFormat="dd/MM/yyyy"
            placeholderText='MM/DD/YYYY'
            showMonthDropdown
            showYearDropdown
            yearDropdownItemNumber={50}
            scrollableYearDropdown
          />
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <BsPinMapFill className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Asal Provinsi
            </h2>
          </div>
          <div 
            className='w-full text-base font-medium font-Montserrat text-[#B6B7BA] mt-2 relative'
            ref={dropdownProvinsiRef}
          >
            <div 
            className='w-full relative flex items-center justify-end'
            onClick={() => setOpenProvinsi(!openProvinsi)}
            >
              <input
                className={`w-full bg-white py-[15px] pl-8 cursor-pointer ${openProvinsi ? "rounded-t-lg" : 'rounded-lg'}`}
                placeholder='Pilih Provinsi'
                value={provinsiSelected}
                onChange={(e) => setProvinsiSelected(e.currentTarget.value)}
              >
              </input>
              <IoMdArrowDropdown className={`size-[35px] fill-[#233E51] absolute mr-[22px] ${openProvinsi && 'rotate-180'}`}/>
            </div>
            <ul
              className={`w-full bg-[#F1A56A] overflow-y-auto absolute z-10 ${openProvinsi ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md" : "max-h-0 rounded-none" }`}
            >
              <div className='w-full h-auto relative'>
                {provinsies?.map((provinsi) => (
                  <li
                    key={provinsi?.name}
                    className={`bg-[#F1A56A] relative text-[#FCFCFC] py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-0 before:bottom-0 `}
                    onClick={() => {
                      setProvinsiSelected(provinsi?.name);
                      setOpenProvinsi(false);
                    }}
                  >
                    {provinsi?.name}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <BsPersonBadgeFill className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Status
            </h2>
          </div>
          <div 
            className='w-full text-base font-medium font-Montserrat text-[#B6B7BA] mt-2 relative'
            ref={dropdownStatusRef}
          >
            <div
              className='w-full relative flex items-center justify-end'
              onClick={() => setOpenStatus(!openStatus)}
            >
              <input
                className={`w-full bg-white py-[15px] pl-8 cursor-pointer ${openStatus ? "rounded-t-lg" : 'rounded-lg'}`}
                placeholder='Pilih Status'
                value={statusSelected}
                onChange={(e) => setStatusSelected(e.currentTarget.value)}
              >
              </input>
              <IoMdArrowDropdown className={`size-[35px] fill-[#233E51] absolute mr-[22px] ${openStatus && 'rotate-180'}`}/>
            </div>
            <ul
              className={`w-full bg-[#F1A56A] overflow-y-auto absolute z-10 ${openStatus ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md" : "max-h-0 rounded-none" }`}
            >
              {statuses?.map((status) => (
                <li
                  key={status?.name}
                  className={`bg-[#F1A56A] relative text-[#FCFCFC] py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
                  onClick={() => {
                    setStatusSelected(status?.name);
                    setOpenStatus(false);
                  }}
                >
                  {status?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <IoSchool className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Instansi
            </h2>
          </div>
          <input
            className=' w-full mt-2 text-base font-Montserrat font-medium text-[#B6B7BA] py-[15px] pl-8 rounded-lg'
            type="text"
            placeholder='Universitas Gadjah Mada'
            value={instansi}
            onChange={(e) => setInstansi(e.currentTarget.value)}
          ></input>
        </div>
        <div className='w-full'>
          <div className='flex gap-[10px] items-center'>
            <HiPhone className='size-8 text-[#FCFCFC]'/>
            <h2 className='text-base text-[#FCFCFC] font-Montserrat text-center font-bold'>
              Nomor HP
            </h2>
          </div>
          <input
            className=' w-full mt-2 text-base font-Montserrat font-medium text-[#B6B7BA] py-[15px] pl-8 rounded-lg'
            type="text" 
            placeholder='08123456789'
            value={number}
            onChange={(e) => setNumber(e.currentTarget.value)}
          ></input>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center my-5">
        <p className={"text-red-600 font-Montserrat font-bold text-center text-nowrap absolute"}>
          {message}
        </p>
      </div>
      <div className='w-1/3'>
      <Button
        fullW
        onClick={onSubmit}
        customClass={"font-Montserrat text-black font-bold"}
        text="Continue"
      />
      </div>
    </div>
    </RootLayout>
  )
}

export default PersonalInfo;