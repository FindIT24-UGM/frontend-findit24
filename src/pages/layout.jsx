import React from "react";
import Navbar from "../components/Navbar";
import Toaster from "../components/ToasterProvider";

const RootLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col h-full">
      {Toaster}
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
