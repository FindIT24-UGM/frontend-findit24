import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import authService from "../services/authService";
import { toast } from "react-toastify";
import { Router } from "next/router";
let user = {};
// let token = {};
// if (typeof window !== "undefined") {
//   user = JSON.parse(localStorage.getItem("user"));
//   // token = JSON.parse(localStorage.getItem("token"));
// }

const initialState = {
  // isAuthenticated: user === null || {} ? false : true,
  isAuthenticated: false,
  user: user ? user : null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
  token: "",
};
// register user
export const signup = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      const payload = await authService.signup(user);
      toast.success("Register success, please verify your account", {
        className: "toast-success",
      });
      return payload;
    } catch (error) {
      const message = error?.response?.data?.errors;
      toast.error(message, {
        className: "toast-error",
      });
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// activate user
export const activate = createAsyncThunk(
  "auth/activate",
  async (token, thunkAPI) => {
    try {
      const payload = await authService.activate(token);
      return payload;
    } catch (error) {
      const message = error?.response?.data?.errors;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const payload = await authService.login(user);
    return payload;
  } catch (error) {
    const message = error?.response?.data?.errors;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const getUserData = createAsyncThunk(
  "/user",
  async (token, thunkAPI) => {
    try {
      const payload = await authService.getUser();
      return payload;
    } catch (error) {
      const message = error;
      if (error.response.status === 401) {
        toast.error("Session expired, please login again", {
          className: "toast-error",
        });
        authService.logout();
        Router.replace("/login");
      }
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset(state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isAuthenticated = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
