"use client";

import { Toaster } from "react-hot-toast";

export default (
  <Toaster
    gutter={8}
    toastOptions={{
      style: {
        marginTop: "40px",
      },
      success: {
        duration: 3000,
        iconTheme: {
          primary: "#F35D40",
          secondary: "white",
        },
        style: {
          background: "white",
          color: "#F35D40",
          accentColor: "#F35D40",
          fontWeight: "bold",
        },
      },
      error: {
        duration: 4000,
      },
    }}
  />
);
