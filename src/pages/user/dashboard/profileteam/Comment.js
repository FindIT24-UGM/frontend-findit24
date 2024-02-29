import { format } from 'date-fns';
import React from 'react'

export default function Comment({title, toTeam, content, createdAt}) {
  const formattedDate = format(new Date(`${createdAt}`), 'dd MMMM y p');
  return (
    <div className='font-Montserrat my-4 space-y-1 border-b-[1px] pb-2 border-black'>
      <h2 className='font-bold text-[16.67px]'>{title}</h2>
      <h2 className='font-bold text-[13.89px]'>To: {toTeam}</h2>
      <p className='text-[13.89px]'>{content}</p>
      <p className='text-[13.89px] font-semibold'>{formattedDate}</p>
    </div>
  )
}
