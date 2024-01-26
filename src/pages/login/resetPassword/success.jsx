import React from 'react';

const success = () => {
    return (
        <div className='bg-background-skyblue w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[46vw]'>
                <div className='w-full'>
                    <p className='font-GameOfSquid text-center text-[60px] text-text-placeholder-light drop-shadow-competitions'>SUCCESS TO RESET PASSWORD</p>
                </div>
                <img src='/assets/images/check.svg' className='w-[16vw] h-[28vh] m-auto my-6'/>
                <div className='w-[38vw] m-auto'>
                    <p className='font-Montserrat font-medium text-[20px] text-center'>You can now  Sign in with your new password</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='w-[31vw] h-[6vh] bg-primary-300 m-auto rounded-lg'>
                        <p className='font-Montserrat font-bold text-shade-black'>Sign In</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default success;
