import { useRouter } from "next/router";
import React from "react";

function AdminDashboadrLayout({ children }) {
  const router = useRouter()
  return (
    <div className='bg-background-skyblue min-h-screen lg:flex lg:p-10 md:p-8'>
      <div className='lg:w-[20%] px-5 pb-5'>
        <h2 className='font-Montserrat font-bold text-white text-[20px] pt-5 py-8'>
          Dashboard
        </h2>
        <div className='flex justify-between space-x-3 text-[16px] font-GameOfSquid lg:flex-col lg:space-x-0 lg:space-y-5 overflow-x-auto'>
          <div className='p-3 rounded bg-primary-300 w-1/3 lg:w-full min-w-fit text-center cursor-pointer min-h-5' onClick={() => router.push('/admin/dashboard/statistic')}>
            STATISTIK
          </div>
          <div className='p-3 rounded bg-primary-300 w-1/3 lg:w-full min-w-fit text-center cursor-pointer min-h-5' onClick={() => router.push('/admin/dashboard/team')}>
            TEAM
          </div>
          <div className='p-3 rounded bg-primary-300 w-1/3 lg:w-full min-w-fit text-center cursor-pointer min-h-5' onClick={() => router.push('/admin/dashboard/broadcast')}>
            BROADCAST
          </div>
        </div>
      </div>
      <main className='lg:w-[80%] px-5 py-5'>{children}</main>
    </div>
  );
}

export default AdminDashboadrLayout;
