import React, { useState, useRef, useEffect } from 'react';
import RootLayout from '../../../../layout';
import { HiArrowLeft } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCalendar2PlusFill } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/router';

//KU COPAS KE INDEX.JSX

const DataTimGeneral = () => {
    const [institusi, setinstitusi] = useState(undefined);
    const [namaTim, setNamaTim] = useState(undefined);
    const [openStatus, setOpenStatus] = useState(false);
    const [statusSelected, setStatusSelected] = useState(undefined);
    const [date, setDate] = useState(undefined);
    const [namaPengirim, setNamaPengirim] = useState(undefined);
    const [noRekening, setNoRekening] = useState(undefined);
    const [bank, setBank] = useState(undefined);

    const dropdownStatusRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (dropdownStatusRef.current && !dropdownStatusRef.current.contains(e.target)) {
                setOpenStatus(false)
            }
        };
        document.body.addEventListener("click", handler);
        return () => document.body.removeEventListener("click", handler);
    }, []);

    const statuses = [
        {
          name : 'Mahasiswa'
        },
        {
          name : 'Pelajar'
        },
        {
          name : 'Umum'
        }
    ];

    const CustomInput = ({value, onClick}) => {
        return (
          <div className='w-full'>
            <div className='w-full h-5 relative flex justify-end items-center my-2'>
            <input 
                className='w-full h-full text-sm font-Montserrat font-medium text-[#B6B7BA] rounded-lg p-5 bg-text-placeholder-light cursor-pointer'
                type="text"
                placeholder='DD/MM/YYYY'
                value={value}
                onClick={onClick}
              >
              </input>
              <BsCalendar2PlusFill onClick={onClick} size={19} className='fill-text-placeholder-dark absolute mr-5 cursor-pointer' />
            </div>
          </div>
        );
      }

    const router = useRouter();

    const handleBackLomba = () => {
        router.push('/user/dashboard/lomba');
    }

    const showModal = () => {
        {/* Tampilkan modal buat tim */}
    }

    const DaftarLombaDanHarga = ({ lomba }) => {
        const [harga, setHarga] = useState('');
    
        useEffect(() => {
            const today = new Date();
            const earlyBird = new Date('2024-03-01');
    
            if (lomba === "Capture The Flag") {
                if (today >= earlyBird) {
                    setHarga("95.000");
                } else {
                    setHarga("125.000");
                }
            } else if (lomba === "Competitive Programming") {
                if (today >= earlyBird) {
                    setHarga("90.000");
                } else {
                    setHarga("120.000");
                }
            } else if (lomba === "Data Analytics Competition") {
                if (today >= earlyBird) {
                    setHarga("100.000");
                } else {
                    setHarga("130.000");
                }
            } else if (lomba === "Informatics Competitions") {
                if (today >= earlyBird) {
                    setHarga("60.000");
                } else {
                    setHarga("90.000");
                }
            }
        }, [lomba]);
    
        return (
            <div className='w-5/6 flex justify-between items-center'>
                <p className='font-CreatoDisplay font-bold text-3xl text-shade-white'>Buat Tim {lomba}</p>
                <p className='font-CreatoDisplay font-bold text-xl text-shade-white'>Total Fee: {harga}</p>
            </div>
        );
    }

    return (
        <RootLayout>
            <div className='bg-background-skyblue w-screen min-h-screen flex flex-col justify-center items-center gap-5'>
                <button className='w-5/6 max-h-[10vh] flex items-center gap-4 mt-6' onClick={handleBackLomba}>
                    <HiArrowLeft size={20} color='white' />
                    <p className='font-GameOfSquid text-text-placeholder-light'>Kembali</p>
                </button>
                <div className='w-2/3 bg-text-placeholder-light p-4 rounded-xl border-[3px] border-shade-black'>
                    <div className='w-full flex flex-col justify-center items-center gap-8 bg-primary-500 py-8 rounded-xl'>
                        <DaftarLombaDanHarga />
                        <div className='w-3/4 flex gap-8'>
                            <div className='w-[45%] flex flex-col gap-2'>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Status</p>
                                    <div 
                                        className='w-full text-sm font-medium font-Montserrat text-neutral-300 relative'
                                        ref={dropdownStatusRef}
                                    >
                                        <div
                                            className='w-full relative flex items-center justify-end'
                                            onClick={() => setOpenStatus(!openStatus)}
                                        >
                                            <input
                                                className={`w-full bg-white p-5 h-5 cursor-pointer ${openStatus ? "rounded-t-lg" : 'rounded-lg'}`}
                                                placeholder='Pilih Status'
                                                value={statusSelected}
                                                onChange={(e) => setStatusSelected(e.currentTarget.value)}
                                            />
                                            <IoMdArrowDropdown size={30} className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${openStatus && 'rotate-180'}`}/>
                                        </div>
                                        <ul
                                            className={`w-full bg-primary-300 overflow-y-auto absolute z-10 ${openStatus ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md" : "max-h-0 rounded-none" }`}
                                        >
                                            {statuses?.map((status) => (
                                                <li
                                                    key={status?.name}
                                                    className={`bg-primary-300 relative text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
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
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Institusi</p>
                                    <input
                                        className='h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative'
                                        placeholder='Universitas Diponegoro'
                                        required
                                        type='text'
                                        id='institusi'
                                        name='institusi'
                                        value={institusi}
                                        onChange={(e) => setinstitusi(e.currentTarget.value)}
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Nama Tim</p>
                                    <input
                                        className='h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative'
                                        placeholder='Samsan Tech'
                                        required
                                        type='text'
                                        id='namaTim'
                                        name='namaTim'
                                        value={namaTim}
                                        onChange={(e) => setNamaTim(e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                            <div className='min-h-full border border-text-placeholder-light'/>
                            <div className='w-[45%] flex flex-col gap-2'>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Tanggal Pembayaran</p>                       
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
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Nama Pengirim</p>
                                    <input
                                        className='h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative'
                                        placeholder='John Doe'
                                        required
                                        type='text'
                                        id='namaPengirim'
                                        name='namaPengirim'
                                        value={namaPengirim}
                                        onChange={(e) => setNamaPengirim(e.currentTarget.value)}
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Nomor Rekening</p>
                                    <input
                                        className='h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative'
                                        placeholder='0123456789'
                                        required
                                        type='text'
                                        id='noRekening'
                                        name='noRekening'
                                        value={noRekening}
                                        onChange={(e) => setNoRekening(e.currentTarget.value)}
                                    />
                                </div>
                                <div className='w-full flex flex-col gap-2'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light'>Bank</p>
                                    <input
                                        className='h-5 p-5 bg-shade-white rounded-lg cursor-pointer text-neutral-300 text-sm relative'
                                        placeholder='Bank BCA'
                                        required
                                        type='text'
                                        id='bank'
                                        name='bank'
                                        value={bank}
                                        onChange={(e) => setBank(e.currentTarget.value)}
                                    />
                                </div>
                                <div className='w-full flex justify-between items-center mt-6'>
                                    <div className='flex flex-col justify-between items-start'>
                                        <p className='font-Montserrat font-bold text-text-placeholder-light'>Upload Abstrak</p>
                                        {/*                                     
                                            <p className='font-Montserrat font-bold text-xs text-neutral-300'>anda belum upload</p>
                                        */}
                                    </div>
                                    <button className='rounded border-2 border-text-placeholder-light px-6 py-1'>
                                        <input
                                            className='hidden'
                                            type='file'
                                            onChange={(e) => {
                                                /* Upload image ke database */
                                            }}
                                        />
                                        <p className='font-Montserrat font-medium text-xs lg:text-sm text-text-placeholder-light'>Unggah</p>
                                    </button>
                                </div>                  
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button className='w-2/5 bg-background-skyblue py-4 rounded-md mt-4' onClick={showModal}>
                                <p className='font-GameOfSquid text-center text-shade-black m-auto'>Buat Tim</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}

export default DataTimGeneral;