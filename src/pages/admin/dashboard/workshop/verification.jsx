import React, { useState } from 'react';
import RootLayout from '../../../layout';
import ElectricPattern from '../../../../components/ElectricPattern';
import Footer from '../../../../components/footer';
import { IoArrowBack } from "react-icons/io5"
import { IoIosSave } from 'react-icons/io';
import { useRouter } from 'next/router';

const Verification = () => {
    const [content, setContent] = useState(null);
    const [rejectActive, setRejectActive] = useState(false);

    const router = useRouter();

    const handleBackWorkshop = () => {
        router.push("/admin/dashboard/workshop");
    };

    const handleRejectButtonClick = () => {
        setRejectActive(true);
    };

    const handleVerifyButtonClick = () => {
        setRejectActive(false);
    };

    let maxMessageLength = 500;

    const formFields = [
        { label: 'Tanggal Pembayaran', value: '12/01/2024' },
        { label: 'Nama Pengirim', value: 'Jerome Polin' },
        { label: 'No. Rek', value: '6301 8888 8888' },
        { label: 'Bank', value: 'BCA' }
    ];

    return (
        <RootLayout>
            <ElectricPattern>
                <div className='flex flex-col lg:flex-row justify-between w-[95%] lg:w-[90%] min-h-screen mx-auto my-[5vh] bg-text-placeholder-light border-[3px] border-shade-black rounded-2xl relative p-5 sm:p-8 lg:p-10'>
                    <div className='w-full lg:w-2/5 flex flex-col gap-8 p-3 sm:p-5'>
                        <button className='w-full flex gap-4 items-center' onClick={handleBackWorkshop}>
                            <IoArrowBack size={20} color='black' />
                            <p className='font-GameOfSquid text-shade-black text-center'>Team information</p>
                        </button>
                        <div className='w-full flex flex-col gap-4'>
                            <p className='font-CreatoDisplay font-bold text-shade-black text-2xl'>John Doe</p>
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
                    <div className='w-full lg:w-3/5 bg-primary-500 p-5 sm:p-8 lg:p-10 rounded-xl flex flex-col gap-8 mt-5 lg:mt-0 min-h-[80vh]'>
                        <p className='font-CreatoDisplay font-bold text-shade-white text-lg lg:text-3xl'>Bukti Pembayaran</p>
                        <div className='max-h-full max-w-full'>
                            {/* Gambar Bukti Pembayaran */}
                        </div>
                    </div>
                </div>
            </ElectricPattern>
            <Footer />
        </RootLayout>
    );
}

export default Verification;
