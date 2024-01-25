import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <main className="relative flex flex-col h-screen pt-[100px]">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>

        {children}
      </main>
    </>
  );
};

export default RootLayout;
