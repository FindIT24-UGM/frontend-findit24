import React from 'react';
import RootLayout from './layout';
import Button from "../components/Button.jsx";
import Footer from "../components/footer.js";

const Custom404 = () => {
    return (
        <RootLayout>
            <div className='bg-background-skyblue w-screen min-h-screen flex justify-center items-center px-[7vw] lg:px-0 py-[15vh] lg:py-0 lg:pl-[7vw]'>
                <div className='flex flex-col items-center lg:grid lg:grid-rows-2 lg:grid-cols-2 w-full h-full'>
                    <div className='justify-self-center w-5/6 lg:w-full h-full flex flex-col gap-12 lg:gap-0'>
                        <div className='flex-1 w-full flex items-end border-b-2 border-white'>
                            <p className='font-Ava text-2xl sm:text-3xl lg:text-4xl text-text-placeholder-light'>/ Page not found...</p>
                        </div>
                        <div className='flex-1 w-full flex items-end justify-center mb-8'>
                            <p className='font-GameOfSquid text-2xl sm:text-4xl xl:text-5xl text-center text-text-placeholder-light drop-shadow-competitions'>Lost in Hyperspace!</p>
                        </div>
                    </div>
                    <div className='row-span-2'>
                        <div className='w-full h-auto flex items-center justify-center'>
                            <img src='/assets/images/404-Breathing.svg' alt='404Image' className='lg:max-w-full lg:max-h-full' />
                        </div>
                    </div>
                    <div className='w-full self-start'>
                        <div className='w-full flex flex-col justify-center gap-8 bg-text-placeholder-dark border-2 border-shade-black rounded-2xl py-8 lg:pl-8'>
                            <div className='flex flex-col justify-center gap-3 px-8 lg:pl-0'>
                                <p className='font-Montserrat fot-medium text-base sm:text-lg lg:text-xl text-text-placeholder-light text-center lg:text-left'>Oh, dear! It appears you've stumbled into the internet singularity zone. </p>
                                <p className='font-Montserrat fot-medium text-base sm:text-lg lg:text-xl text-text-placeholder-light text-center lg:text-left'>Before getting futher lost, why not <span className='text-primary-300'>heading back to the home page?</span></p>
                            </div>
                            <div className='w-full flex justify-center items-center relative lg:static'>
                                <Button 
                                    text='GO to home page ->'
                                    customClass={'text-[#233E51] absolute lg:static'}
                                />
                                <div className='flex-1 h-5 flex items-center bg-radial-gradient from-primary-300 to-transparent'>
                                    <div className='w-full h-3 bg-text-placeholder-dark'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </RootLayout>
    );
}

export default Custom404;
