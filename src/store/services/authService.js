import axios from "axios";
import Cookies from "js-cookie";

// REGISTER USER
const signup = async (userData) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/auth/register",
    userData,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return response.data;
};

// LOGIN USER
const login = async (userData) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/auth/login",
    userData,
    {
      withCredentials: true,
      // headers: `Bearer ${token}`,
    }
  );
  return response.data;
};

// ACTIVATE ACCOUNT
const activate = async (token) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/auth/activation",
    token
  );
  if (!response.data.error == true && typeof window !== "undefined") {
    // localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//LOGOUT USER
const logout = async () => {
  // if (typeof window !== "undefined") {
  //   localStorage.clear();
  // }
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
    {
      withCredentials: true,
    }
  );
};

// GET USER INFO
const getUser = async (token, user) => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/user", {
    headers: {
      authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response.data;
};

const authService = {
  signup,
  login,
  activate,
  logout,
  getUser,
};

export default authService;
