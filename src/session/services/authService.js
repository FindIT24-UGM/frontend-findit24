import axios from "axios";

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/auth/login",
        credentials,
        {
          withCredentials: true,
        }
      );
      setSession({ status: "authenticated", user: response.data.user });
      return response.data; // Mengembalikan data yang diterima dari backend
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed"); // Melempar error jika login gagal
    }
  },
  logout: async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/auth/logout",
        null,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error("Logout failed");
    }
  },
  activate: async (token) => {
    const response =
      (await axios.post(process.env.NEXT_PUBLIC_API_URL)) +
      "/auth/activate/" +
      token;
  },

  getUser: async (token, user) => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/user",
        {
          user,
          headers: {
            authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      if (response.status >= 200 && response.status < 305) {
        return { success: true, user: response.data.user };
      } else {
        return { success: false, message: "Failed to fetch user info" };
      }
    } catch (error) {
      return { success: false, message: "Failed to fetch user info" };
    }
  },
};

export default authService;
