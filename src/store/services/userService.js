import axios from "axios";

// GET ANNOUNCEMENT FOR USER SERVICE
const getAnnouncements = async (eventIds) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/admin/announcement/get",
    { eventId: [...eventIds] },
    {
      withCredentials: true
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

//GET ALL TEAMS OF THE EVENT
// const getTeamsOfEvent = async (eventId) => {
//   const response = await axios.post(
//     process.env.NEXT_PUBLIC_API_URL + "/team/search-teams", 
//     { eventId },
//     { withCredentials: true }
//   );
//   return response.data;
// }

const userService = { getAnnouncements, getUserTeam };

export default userService;
