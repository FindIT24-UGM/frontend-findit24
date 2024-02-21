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
    <div className='mt-24 lg:mt-[101px]'>
        <div className='min-w-fit relative'>
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
  );
}