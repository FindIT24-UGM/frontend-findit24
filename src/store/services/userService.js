import axios from "axios";

// GET ANNOUNCEMENT FOR USER SERVICE
const getAnnouncements = async (token) => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/admin/announcement",
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// GET USER TEAM BY FIND TEAM
const getUserTeam = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/user/find-team",
    {
      withCredentials: true
    }
  );
  return response.data;
};

const userService = { getAnnouncements, getUserTeam };

export default userService;
