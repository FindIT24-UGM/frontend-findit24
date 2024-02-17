import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService.js";

const initialState = {
  userTeam: [],
  announcementList: [],
  isLoading: false,
  isError: false,
  message: "",
};

let user = {};
let token = {};

if (typeof window !== "undefined") {
  user = JSON.parse(localStorage.getItem(user));
  token = JSON.parse(localStorage.getItem(token));
}

export const getAllAnnouncements = createAsyncThunk(
  "admin/announcement",
  async (token, thunkAPI) => {
    try {
      const payload = await userService.getAnnouncements(token);
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
      const payload = await userService.getUserTeam(user, token);
    } catch (e) {
      const message =
        e.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createAsyncThunk({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllAnnouncements.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllAnnouncements.fulfilled, (state, action) => {
        state.announcementList = action.payload.announcements;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getAllAnnouncements.rejected, (state, action) => {
        state.message = action.payload;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUserTeam.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserTeam.fulfilled, (state, action) => {
        state.userTeam = action.payload.asMember;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getUserTeam.rejected, (state, action) => {
        state.message = action.payload;
        state.userTeam = [];
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default userSlice.reducer;
