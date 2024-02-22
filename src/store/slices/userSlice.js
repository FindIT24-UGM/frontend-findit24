import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService.js";


const initialState = {
  userTeam: [],
  announcementList: [],
  allTeamsToJoin: [],
  isLoading: false,
  isError: false,
  message: "",
};

// let token = {};

// if (typeof window !== "undefined") {
//   user = JSON.parse(localStorage.getItem(user));
//   token = JSON.parse(localStorage.getItem(token));
// }

export const getTeamAnnouncements = createAsyncThunk(
  "admin/announcement/get",
  async (eventIds, thunkAPI) => {
    try {
      const payload = await userService.getAnnouncements(eventIds);
      return payload;
    } catch (e) {
      const message =
        e.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserTeam = createAsyncThunk(
  "user/find-team",
  async (token, thunkAPI) => {
    try {
      const payload = await userService.getUserTeam();
      return payload
    } catch (e) {
      const message =
        e.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTeamsToSearch = createAsyncThunk(
  "team/search-teams",
  async (eventId, thunkAPI) => {
    try {
      const payload = await userService.getTeamsOfEvent(eventId);
      return payload
    } catch (e) {
      const message =
        e.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTeamAnnouncements.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTeamAnnouncements.fulfilled, (state, action) => {
        state.announcementList = action.payload.announcements;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getTeamAnnouncements.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserTeam.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserTeam.fulfilled, (state, action) => {
        state.userTeam = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getUserTeam.rejected, (state, action) => {
        state.message = action.payload;
        state.userTeam = [];
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTeamsToSearch.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTeamsToSearch.fulfilled, (state, action) => {
        state.allTeamsToJoin = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getTeamsToSearch.rejected, (state, action) => {
        state.message = action.payload;
        state.allTeamsToJoin = [];
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
