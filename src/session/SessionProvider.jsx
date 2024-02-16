"use client";

import { applyMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext({
  session: {
    status: "loading",
    user: { username: undefined, position: undefined },
  },
  setSession: (session) => {},
  login: async (credentials) => {},
  logout: async () => {},
});

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    status: "loading",
    user: {},
  });

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/auth/login",
          {
            withCredentials: true,
          }
        );

        if (response.status >= 200 && response.status < 305) {
          setSession({ status: "authenticated", user: response.data.user });
        } else {
          setSession({ status: "unauthenticated", user: {} });
        }
      } catch (error) {
        setSession({ status: "unauthenticated", user: {} });
      }
    };

    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};

export { SessionProvider, useSession };
