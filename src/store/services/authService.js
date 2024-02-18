import axios from "axios";

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
    userData, {
      withCredentials: true
    }
  );
  if (!response.data.error == true && typeof window !== "undefined") {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    // localStorage.setItem("token", JSON.stringify(response.data.token));
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${response.data.token}`;
    // Cookies.set("AuthToken", response.data.token);
  }
  return response.data;
};

// ACTIVATE ACCOUNT
const activate = async (token) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/api/v1/auth/activation",
    token
  );
  return response.data;
};

//LOGOUT USER
const logout = async () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    withCredentials: true
  })
  return response.data
};

// GET USER INFO
const getUser = async (user) => {
  const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/user", {
    user,
    // headers: {
    //   authorization: `Bearer ${token}`,
    // },
    withCredentials: true
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
