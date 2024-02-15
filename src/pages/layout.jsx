import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const RootLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col h-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
