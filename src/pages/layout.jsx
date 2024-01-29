import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col h-full">
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
