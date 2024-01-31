import React, { useState, useEffect } from 'react';
import RootLayout from '../../layout';
import Button from '../../../components/Button';
import { IoKey } from 'react-icons/io5';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Create = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePasswordChange = (e, setPassword) => {
        setPassword(e.target.value);
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newPassword.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
        } else if (newPassword === confirmPassword) {
            setErrorMessage('');
        } else {
            setErrorMessage('Both passwords should match');
        }
    }

    return (
        <RootLayout>
            <div className='flex flex-col items-center justify-center w-screen h-screen bg-background-skyblue'>
                <div className='text-center w-2/3 lg:w-1/2'>
                    <h1 className='font-GameOfSquid text-4xl sm:text-5xl lg:text-6xl text-text-placeholder-light drop-shadow-competitions'>CREATE NEW PASSWORD</h1>
                    <p className='font-Montserrat font-medium text-shade-white text-sm md:text-base mt-5'>Your new password must be different from previous used passwords</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-3/5 lg:w-2/5 mt-10'>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='flex items-center'>
                            <IoKey size={isSmallScreen ? 21 : 28} />
                            <p className='font-Montserrat font-bold text-text-placeholder-light text-sm md:text-base ml-2 md:ml-3'>Password</p>
                        </div>
                        <div className='relative flex items-center justify-center w-full'>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                id='newPassword'
                                name='newPassword'
                                value={newPassword}
                                onChange={(e) => handlePasswordChange(e, setNewPassword)}
                                required
                                placeholder='at least 8 characters'
                                className='w-full bg-white focus:outline-none focus:border-[3px] focus:border-black rounded-lg text-black text-sm md:text-base cursor-pointer px-4 py-2'
                            />
                            <button
                                onClick={handleTogglePassword}
                                className='flex items-center justify-center'
                            >
                                {showPassword ? (
                                    <BsEyeFill size={isSmallScreen ? 18 : 21} color='black' className="absolute text-black right-4" />
                                ) : (
                                    <BsEyeSlashFill size={isSmallScreen ? 18 : 21} color='black' className="absolute text-black right-4"/>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <div className='flex items-center'>
                            <IoKey size={isSmallScreen ? 21 : 28} />
                            <p className='font-Montserrat font-bold text-text-placeholder-light text-sm md:text-base ml-2 md:ml-3'>Confirm Password</p>
                        </div>
                        <div className='relative flex items-center justify-center w-full'>
                            <input 
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={(e) => handlePasswordChange(e, setConfirmPassword)}
                                required
                                placeholder='at least 8 characters'
                                className='w-full bg-white focus:outline-none focus:border-[3px] focus:border-black rounded-lg text-black text-sm md:text-base cursor-pointer px-4 py-2'
                            />
                            <button
                                onClick={handleToggleConfirmPassword}
                                className='flex items-center justify-center'
                            >
                                {showConfirmPassword ? (
                                    <BsEyeFill size={isSmallScreen ? 18 : 21} color='black' className="absolute text-black right-4" />
                                ) : (
                                    <BsEyeSlashFill size={isSmallScreen ? 18 : 21} color='black' className="absolute text-black right-4"/>
                                )}
                            </button>
                        </div>
                    </div>
                    {errorMessage && (
                        <p className='text-error-500 text-center font-normal'>{errorMessage}</p>
                    )}
                    <Button 
                        customClass={`font-Montserrat font-bold w-full text-sm md:text-base ${errorMessage ? 'mt-0' : 'mt-5'}`}
                        text='Reset Password'
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </RootLayout>
    );
}

export default Create;