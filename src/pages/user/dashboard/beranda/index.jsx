import React, { useState, useLayoutEffect } from 'react';
import UserDashboardLayout from '../layout';
import { AiFillNotification } from 'react-icons/ai'
import { IoWarningSharp } from 'react-icons/io5';
import { HiUser } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Index = () => {
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const router = useRouter();

    const handleEditProfile = () => {
        router.push('/user/dashboard/beranda/profilDiri');
    };

    useLayoutEffect(() => {
        function updateSize() {
            setIsWideScreen(window.innerWidth > 640);
            setIsSmallScreen(window.innerWidth < 640);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);

    return (
        <UserDashboardLayout>
            <div className='w-full h-full flex sm:flex-row flex-col gap-2'>
                {isSmallScreen && (
                    <div className='w-full flex items-center gap-2 bg-primary-500 border-[3px] border-shade-black rounded-xl px-4 lg:px-8 py-4'>
                        <IoWarningSharp size={18} />
                        <p className='font-Montserrat text-sm font-bold text-text-placeholder-light'>Tolong segera melengkapi data diri sebelum mendaftar lomba</p>
                    </div>
                )}
                <div className='w-full sm:w-1/3 sm:min-h-full min-h-[30vh] bg-text-placeholder-light border-[3px] border-shade-black rounded-xl p-6 flex flex-col gap-4'>
                    <div className='w-full flex justify-between max-h-[10vh]'>
                        <div className='flex justify-between items-center gap-2'>
                            <AiFillNotification size={18} color='black' />
                            <p className='font-Montserrat font-bold text-center text-shade-black'>Pengumuman</p>
                        </div>
                        {/* 
                        <div className='bg-warning-300 px-4 py-2 rounded'>
                            <p className='font-Montserrat font-bold text-sm text-center text-warning-500'>2 Baru</p>
                        </div>
                        */}
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <p className='font-Montserrat text-sm lg:text-base lg:font-bold text-shade-black text-center'>Belum ada pengumuman</p>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col gap-2'>
                    {isWideScreen && (
                        <div className='w-full flex items-center gap-3 bg-primary-500 border-[3px] border-shade-black rounded-xl px-4 lg:px-8 py-4'>
                            <IoWarningSharp size={24} className='min-w-6' />
                            <p className='font-Montserrat font-bold text-text-placeholder-light text-sm lg:text-base'>Tolong segera melengkapi data diri sebelum mendaftar lomba</p>
                        </div>
                    )}
                    <div className='flex-1 h-full border-[3px] border-shade-black rounded-xl bg-text-placeholder-light p-6 lg:p-8 flex flex-col gap-5'>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between gap-2'>
                                <HiUser size={21} color='black' />
                                <p className='font-Montserrat font-bold text-center text-shade-black'>Profil diri</p>
                            </div>
                            <div className='bg-error-100 px-3 py-2 rounded'>
                                <p className='font-Montserrat font-bold text-xs lg:text-sm text-center text-error-500'>Lengkapi Data</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-2'>
                                    <p className='font-CreatoDisplay font-bold text-2xl lg:text-5xl text-shade-black'>John Doe</p>
                                    <p className='font-Montserrat font-bold text-sm text-shade-black'>johndoe@gmail.com</p>
                                </div>
                                <div>
                                    <button className='border-2 border-background-skyblue flex items-center gap-2 px-5 py-1 rounded' onClick={handleEditProfile}>
                                        <AiFillEdit size={16} color='#2A93C2' />
                                        <p className='font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue'>Edit</p>
                                    </button>
                                </div>
                            </div>
                            <div className='my-4 border border-neutral-300' />
                            <div className='flex flex-col gap-2'>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>ID Peserta</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>g49dfh4s</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Asal Provinsi</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>D.I. Yogyakarta</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Alamat Lengkap</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>Jl. Grafika No.2, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, D.I Yogyakarta 55281</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Tanggal Lahir</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>-</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Nomor HP</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>08123456789</p>
                                    </div>
                                </div>
                            </div>
                            <div className='my-4 border border-neutral-300' />
                            <div className='flex flex-col gap-2'>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Status</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>Mahasiswa</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Institusi</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>Universitas Diponegoro</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Nomor Institusi</p>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='font-Montserrat font-medium text-shade-black text-sm lg:text-base'>20/54366/TK/09833</p>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 xl:gap-0'>
                                    <div className='w-1/4'>
                                        <p className='font-Montserrat font-bold text-shade-black text-sm lg:text-base'>Kartu Institusi</p>
                                    </div>
                                    <div className='flex-1'>
                                        <button className='border-2 border-background-skyblue rounded px-6 lg:px-8 py-0.5 lg:py-1 opacity-50'>
                                            <p className='font-Montserrat font-bold text-xs lg:text-sm text-background-skyblue text-center'>Lihat</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}

export default Index;
