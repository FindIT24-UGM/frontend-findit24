import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <main className="relative flex flex-col h-full">
        <Navbar />
        {children}
      </main>
    </Provider>
  );
};

export default RootLayout;
