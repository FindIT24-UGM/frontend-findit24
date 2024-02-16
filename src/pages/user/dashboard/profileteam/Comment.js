import React from 'react'

export default function Comment({title, destination, content, date}) {
  return (
    <div className='font-Montserrat my-4 space-y-1 border-b-[1px] pb-2 border-black'>
      <h2 className='font-bold text-[16.67px]'>{title}</h2>
      <h2 className='font-bold text-[13.89px]'>To: {destination}</h2>
      <p className='text-[13.89px]'>{content}</p>
      <p className='text-[13.89px] font-semibold'>{date}</p>
    </div>
  )
}
