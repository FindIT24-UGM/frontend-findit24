import React, { useState, useEffect } from 'react';
import { IoMail } from 'react-icons/io5';
import RootLayout from '../../layout';
import Button from '../../../components/Button';
import ElectricPattern from '../../../components/ElectricPattern';

const Reset = () => {
    const [emailIsNotRegistered, setEmailNotRegistered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handleSendInstruction = () => {
        {/* cek email terdaftar atau belum */}
        setEmailNotRegistered(true);
    }

    return (
        <RootLayout>
            <ElectricPattern>
                <div className='flex flex-col items-center justify-center w-screen h-screen bg-background-skyblue'>
                    <div className='w-2/3 lg:w-1/2 text-center'>
                        <h1 className='font-GameOfSquid text-4xl sm:text-5xl md:text-6xl text-text-placeholder-light drop-shadow-competitions'>RESET PASSWORD</h1>
                        <p className='font-Montserrat font-medium text-shade-white text-sm sm:text-base mt-5'>Enter the email associated with your account and we’ll send an email with instructions to reset your password</p>
                    </div>
                    <div className={`flex flex-col gap-4 justify-center items-center w-3/5 lg:w-2/5 mt-12`}>
                        <div className='w-full flex flex-col gap-3'>
                            <div className='flex items-center'>
                                <IoMail size={isSmallScreen ? 24 : 31} />
                                <p className='font-Montserrat font-bold text-sm sm:text-base text-text-placeholder-light ml-2 sm:ml-3'>E-mail</p>
                            </div>
                            <input 
                                type='email'
                                id='emailResetPassword'
                                name='emailResetPassword'
                                required
                                placeholder='johndoe@gmail.com'
                                className='w-full bg-white py-2 px-4 rounded-lg text-black focus:outline-none focus:border-[3px] focus:border-black cursor-pointer'
                            />
                        </div>
                        {emailIsNotRegistered && (
                            <p className='font-Montserrat font-medium text-center text-sm sm:text-base text-error-500'>E-mail is not Registered</p>
                        )}
                        <Button 
                            customClass={'font-Montserrat font-bold w-full text-sm sm:text-base'}
                            text='Send Instruction'
                            onClick={handleSendInstruction}
                        />
                    </div>
                </div>
            </ElectricPattern>
        </RootLayout>
    );
}

export default Reset;