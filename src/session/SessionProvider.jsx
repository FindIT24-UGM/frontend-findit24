"use client";

import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext({
  // declare variable
  session: {
    status: "loading",
    user: {
      email: undefined,
      name: undefined,
      phone: undefined,
      lineContact: undefined,
      role: undefined,
      address: undefined,
      province: undefined,
      dateOfBirth: undefined,
      institutionName: undefined,
      status: undefined,
    },
  },
  setSession: (session) => {},
  vari: 0,
});

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    status: "loading",
    user: {},
  });

  const [vari, setVari] = useState(1);

  useEffect(() => {
    // fecthing
    const fetchSession = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/auth/session",
          {
            withCredentials: true,
          }
        );
        console.log(response);
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
    <SessionContext.Provider value={{ session, setSession, vari }}>
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
