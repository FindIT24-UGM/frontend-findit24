import React from 'react';
import ElectricPattern from './ElectricPattern';
import RootLayout from '../layout';
import Button from "../../components/Button";
import { useRouter } from 'next/router';
import { HiArrowRight } from 'react-icons/hi';

const Index = () => {
  const router = useRouter();

  const goToHomepage = () => {
    router.push('/');
  };

  return (
      <RootLayout>
        <ElectricPattern backgroundColor="bg-gradient-to-r from-background-skyblue via-[#217196] to-background-skyblue">
            <div className='w-full min-h-full flex flex-col justify-center items-center gap-8 relative'>
              <h1 className='font-GameOfSquid text-[32px] sm:text-6xl lg:text-[86px] text-text-placeholder-light drop-shadow-competitions text-center'>coming soon</h1>
              <p className='font-Montserrat font-medium text-base sm:text-lg lg:text-xl text-text-placeholder-light text-center mx-5'>Oh, dear! it looks like the page is under maintenance. </p>
              <div className='lg:w-3/4 w-full flex items-center justify-center gap-1'>
                <div className='relative w-full h-5 sm:flex hidden items-center bg-radial-gradient from-primary-300 to-transparent'>
                  <div className='absolute right-0 w-full h-3 bg-gradient-to-l from-[#217196] to-background-skyblue'/>
                </div>
                <Button 
                  text={<>
                    Go to Homepage
                  </>} 
                  onClick={goToHomepage}
                  customClass={"text-shade-black w-4/5 sm:w-full min-w-[245px]"}
                />
                <div className='relative w-full h-5 sm:flex hidden items-center bg-radial-gradient from-primary-300 to-transparent'>
                  <div className='absolute w-full h-3 bg-gradient-to-l from-background-skyblue to-[#217196]'/>
                </div>
              </div>
            </div>
        </ElectricPattern>
      </RootLayout>
  );
}

export default Index;
