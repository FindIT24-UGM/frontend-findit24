import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { SessionProvider } from "../session/SessionProvider";

const RootLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col h-full">
      <Navbar />
      <SessionProvider>{children}</SessionProvider>
      <Footer />
    </main>
  );
};

export default RootLayout;
