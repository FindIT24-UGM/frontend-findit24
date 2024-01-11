import React from "react";

function Layout() {
  return (
    <div className='bg-background-skyblue min-h-screen lg:flex lg:p-10 md:p-8'>
      <div className='lg:w-[20%] px-5 pb-5'>section1</div>
      <main className='lg:w-[80%] px-5 py-5'>section2</main>
    </div>
  );
}

export default Layout;
