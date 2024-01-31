import React from 'react';
import RootLayout from '../../layout';

const Check = () => {
    return (
        <RootLayout>
            <div className='flex flex-col items-center justify-center w-screen h-screen bg-background-skyblue'>
                <div className='text-center w-2/3'>
                    <h1 className='font-GameOfSquid text-4xl md:text-6xl text-text-placeholder-light drop-shadow-competitions'>CHECK YOUR E-MAIL</h1>
                </div>
                <div className='my-6 w-1/3 flex justify-center'>
                    <img src='/assets/images/mail.svg' alt='mail' className='min-w-[150px] min-h-[150px]'/>
                </div>
                <div className='text-center w-2/3 lg:w-1/2'>
                    <p className='font-Montserrat font-medium text-base md:text-xl text-center'>We have sent a password recovery instruction to your email. If you don’t see the email, it might be on the <span className='text-primary-300'>spam</span> folder.</p>
                </div>
            </div>
        </RootLayout>
    );
}

export default Check;
