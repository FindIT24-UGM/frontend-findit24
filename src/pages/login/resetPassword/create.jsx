import React, { useState } from 'react';
import { IoKey } from 'react-icons/io5';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

const Create = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonStyle, setButtonStyle] = useState('mt-8');

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
            setButtonStyle('mt-0');
            return;
        }

        if (newPassword === confirmPassword) {
            setErrorMessage('');
            setButtonStyle('mt-8');
        } else {
            setErrorMessage('Both passwords should match');
            setButtonStyle('mt-0');
        }
    }

    return (
        <div className='bg-background-skyblue w-full h-[100vh] flex items-center justify-center'>
            <div className='flex flex-col items-center'>
                <div className='w-[42vw]'>
                    <p className='font-GameOfSquid drop-shadow-competitions text-center text-text-placeholder-light text-[60px]'>CREATE NEW PASSWORD</p>
                    <p className='font-medium font-Montserrat text-shade-white text-center mt-5'>Your new password must be different from previous used passwords</p>
                </div>
                <form onSubmit={handleSubmit} className='w-[32vw] mt-8'>
                    <div className='w-full'>
                        <div className='flex'>
                            <IoKey size={28} />
                            <p className='font-Montserrat font-bold ml-2'>Password</p>
                        </div>
                        <div>
                            <label htmlFor='newPassword' className='flex items-center w-[32vw] h-[5vh] bg-white mt-2 rounded-lg'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id='newPassword'
                                    name='newPassword'
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    required
                                    placeholder='at least 8 characters'
                                    className='w-[28vw] bg-white pl-4 focus:outline-none rounded-lg text-black'
                                />
                                {showPassword ? (
                                    <BsEyeFill size={21} color='black' className='flex-1 cursor-pointer' onClick={handleTogglePassword} />
                                ) : (
                                    <BsEyeSlashFill size={21} color='black' className='flex-1 cursor-pointer' onClick={handleTogglePassword} />
                                )}
                            </label>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='flex'>
                            <IoKey size={28} />
                            <p className='font-Montserrat font-bold ml-2'>Confirm Password</p>
                        </div>
                        <label htmlFor='confirmPassword' className='flex items-center w-[32vw] h-[5vh] bg-white mt-2 rounded-lg'>
                            <input 
                                type={showConfirmPassword ? 'text' : 'password'}
                                id='confirmPassword'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                                placeholder='at least 8 characters'
                                className='w-[28vw] bg-white pl-4 focus:outline-none rounded-lg text-black'
                            />
                            {showConfirmPassword ? (
                                <BsEyeFill size={21} color='black' className='flex-1 cursor-pointer' onClick={handleToggleConfirmPassword} />
                            ) : (
                                <BsEyeSlashFill size={21} color='black' className='flex-1 cursor-pointer' onClick={handleToggleConfirmPassword} />
                            )}
                        </label>
                    </div>
                    {errorMessage && (
                        <p className='text-error-500 font-normal text-center my-2'>{errorMessage}</p>
                    )}
                    <button className={`w-[32vw] h-[6vh] bg-primary-300 m-auto rounded-lg ${buttonStyle}`}>
                        <p className='font-Montserrat font-bold text-shade-black'>Sign In</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Create;
