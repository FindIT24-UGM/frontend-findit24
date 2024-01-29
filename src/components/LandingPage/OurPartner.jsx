import React from 'react'

export default function OurPartner () {

  const logos = [
    {
      name: "logo1",
      id: 1,
      imgUrl: null
    },
    {
      name: "logo2",
      id: 2,
      imgUrl: null
    },
    {
      name: "logo3",
      id:3,
      imgUrl: null
    },
    {
      name: "logo4",
      id:4,
      imgUrl: null
    },
    {
      name: "logo5",
      id:5,
      imgUrl: null
    },
    {
      name: "logo6",
      id:6,
      imgUrl: null
    },
    {
      name: "logo7",
      id:7,
      imgUrl: null
    }
  ]

  return (
    <div className='flex flex-col mt-[110px] sm:mt-[280px] pb-96'>
      <div className='flex justify-center items-center '>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center w-[74vw]'>
          <div className=' text-[#FCFCFC] text-[9vw] lg:text-[4.470vw] flex justify-center'>
            <div className=' inline-flex py-[1.2vw] font-GameOfSquid gap-x-3 sm:gap-x-5 lg:gap-x-8 items-center' >
              <p className='drop-shadow-[0_0px_2px_rgba(255,255,255,1)] sm:drop-shadow-[0_0px_4px_rgba(255,255,255,1)] lg:drop-shadow-[0_0px_6px_rgba(255,255,255,1)]'>
                our
              </p>
              <div className='border-solid border-[#92C2D0] border-[0.55vw] lg:border-[0.3vw] rounded-[1.8vw] lg:rounded-[0.9vw] py-[1.2vw] lg:py-[0.8vw] px-[1.5vw] lg:px-[1.1vw]'>
                <p className='drop-shadow-[0_0px_2px_rgba(255,255,255,1)] sm:drop-shadow-[0_0px_4px_rgba(255,255,255,1)] lg:drop-shadow-[0_0px_6px_rgba(255,255,255,1)]'>
                  PARTNER
                </p>
              </div>
            </div>
          </div>
          <p className='flex justify-center items-center font-CreatoDisplay text-[#92C2D0] text-center align-top lg:text-justify text-xs sm:text-xl lg:text-2xl lg:leading-6 font-medium lg:font-bold lg:w-[33.5vw] lg:h-[2.5vw] mt-4 sm:mt-8 lg:mt-0'> 
          We sincerely express our appreciation to our sponsors for their generous support and confidence in our event.
          </p>
        </div>
      </div>
      <div className='mt-24 lg:mt-[101px]'>
        <div className='min-w-fit relative '>
          <div className='flex animate-swipeRight2 absolute'>
            {logos.map((logo) =>(
              <div className=' overflow-hidden bg-[#D9D9D9] mx-3 sm:mx-[2.174vw] lg:mx-[2.183vw] w-[143px] sm:w-[27.344vw] lg:w-[19.647vw] h-[78.4px] sm:h-[14.974vw] lg:h-[10.707vw] rounded-[9.11px] sm:rounded-[1.745vw] lg:rounded-[1.247vw] transition ease-in-out duration-300 hover:scale-110 relative before:absolute before:w-[15%] before:h-[150%] before:shadow-white before:bg-[#f3f3f3] before:blur-sm before:opacity-90 before:rotate-[-20deg] before:top-[-30px] before:left-[-15px] before:translate-x-[-150%] before:duration-500 hover:before:translate-x-[800%] '>
                <img/>
              </div>
            ))}
          </div>
          <div className='flex h-auto animate-swipeRight1 absolute'>
            {logos.map((logo) =>(
            <div className=' overflow-hidden bg-[#D9D9D9] mx-3 sm:mx-[2.174vw] lg:mx-[2.183vw] w-[143px] sm:w-[27.344vw] lg:w-[19.647vw] h-[78.4px] sm:h-[14.974vw] lg:h-[10.707vw] rounded-[9.11px] sm:rounded-[1.745vw] lg:rounded-[1.247vw] transition ease-in-out duration-300 hover:scale-110 relative before:absolute before:w-[15%] before:h-[150%] before:shadow-white before:bg-[#f3f3f3] before:blur-sm before:opacity-90 before:rotate-[-20deg] before:top-[-30px] before:left-[-15px] before:translate-x-[-150%] before:duration-500 hover:before:translate-x-[800%]'>
              <img/>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}