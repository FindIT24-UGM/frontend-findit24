import React from 'react'

import Telepeformance from '../../../assets/Logo/Teleperformance'

export default function OurPartner () {

  return (
    <>
      <div className='mt-8 sm:mt-9 lg:mt-[136px] w-full h-auto flex justify-center'>
        <div className='w-auto h-auto z-50 bg-secondary-blue border-text-placeholder-dark border-[2px] sm:border-[4px] lg:border-[8px] rounded-md sm:rounded-lg lg:rounded-2xl py-[17px] sm:py-7 lg:py-12 pr-[15px] sm:pr-[30px] lg:pr-[38px] pl-8 sm:pl-[54px] lg:pl-[87px] flex justify-center items-center gap-[10px] sm:gap-[14px] lg:gap-8'>
          <Telepeformance />
          <p className=' text-text-placeholder-dark font-GameOfSquid text-xs sm:text-xl lg:text-3xl font-normal'>
            TELEPERFORMANCE
          </p>
        </div>
      </div>
    </>
  );
}