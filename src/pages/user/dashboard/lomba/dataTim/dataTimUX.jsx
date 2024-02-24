import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import RootLayout from '../../../../layout';
import { HiArrowLeft } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useRouter } from 'next/router';

const DataTimUX = () => {
    const [institusi, setinstitusi] = useState(undefined);
    const [namaTim, setNamaTim] = useState(undefined);
    const [openStatus, setOpenStatus] = useState(false);
    const [statusSelected, setStatusSelected] = useState(undefined);
    const [isWideScreen, setIsWideScreen] = useState(false);

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

    const router = useRouter();

    const handleBackLomba = () => {
        router.push('/user/dashboard/lomba');
    }

    useLayoutEffect(() => {
        function updateSize() {
            setIsWideScreen(window.innerWidth > 1024);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);

    const showModal = () => {
        {/* Tampilkan modal buat tim */}
    }

    return (
        <RootLayout>
            <div className='bg-background-skyblue w-screen min-h-screen flex flex-col justify-center items-center gap-5 px-5 sm:px-0'>
                <div className='w-full sm:w-5/6 max-h-[10vh] mt-8'>
                    <button className='flex items-center gap-4' onClick={handleBackLomba}>
                        <HiArrowLeft size={isWideScreen ? 20 : 18} color='white' />
                        <p className='font-GameOfSquid text-center text-text-placeholder-white'>Kembali</p>
                    </button>
                </div>
                <div className='w-full sm:w-3/4 lg:w-2/5 p-2 sm:p-4 border-[3px] border-shade-black rounded-xl bg-text-placeholder-light mb-8'>
                    <div className='w-full flex flex-col justify-center items-center gap-8 bg-primary-500 rounded-xl py-8'>
                        <div className='w-5/6 flex items-center justify-start'>
                            <p className='font-CreatoDisplay font-bold text-xl lg:text-3xl text-shade-white'>Buat Tim UX</p>
                        </div>
                        <div className='w-5/6 lg:w-3/4 flex flex-col justify-center items-center gap-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Status</p>
                                <div 
                                    className='w-full text-sm font-medium font-Montserrat text-[#B6B7BA] relative'
                                    ref={dropdownStatusRef}
                                >
                                    <div
                                        className='w-full relative flex items-center justify-end'
                                        onClick={() => setOpenStatus(!openStatus)}
                                    >
                                        <input
                                            className={`w-full bg-white p-5 h-5 cursor-pointer text-sm ${openStatus ? "rounded-t-lg" : 'rounded-lg'}`}
                                            placeholder='Pilih Status'
                                            value={statusSelected}
                                            onChange={(e) => setStatusSelected(e.currentTarget.value)}
                                        />
                                        <IoMdArrowDropdown size={30} className={`fill-text-placeholder-dark cursor-pointer mr-2.5 absolute ${openStatus && 'rotate-180'}`}/>
                                    </div>
                                    <ul
                                        className={`w-full bg-[#F1A56A] overflow-y-auto absolute z-10 ${openStatus ? "max-h-[222px] rounded-b-lg scrollbar scrollbar-w-[10px] scrollbar-thumb-black scrollbar-thumb-rounded-md" : "max-h-0 rounded-none" }`}
                                    >
                                        {statuses?.map((status) => (
                                            <li
                                                key={status?.name}
                                                className={`bg-primary-300 relative text-sm text-text-placeholder-light py-[15px] pl-8 cursor-pointer before:h-[1px] before:w-auto before:bg-white before:absolute before:left-[10px] before:right-[10px] before:bottom-0 `}
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
                                <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Institusi</p>
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
                                <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Nama Tim</p>
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
                            <div className='w-full border border-text-placeholder-light my-4'/>
                            <div className='w-full flex justify-between items-center'>
                                <div className='flex flex-col justify-between items-start'>
                                    <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Upload Abstrak</p>
                                                                        
                                        <p className='font-Montserrat font-bold text-xs text-neutral-300 lg:text-base'>anda belum upload</p>
                                   
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
                            <button className='w-full bg-background-skyblue py-4 rounded-md mt-4' onClick={showModal}>
                                <p className='font-GameOfSquid text-center text-shade-black m-auto'>Buat Tim</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </RootLayout>
    );
}

export default DataTimUX;