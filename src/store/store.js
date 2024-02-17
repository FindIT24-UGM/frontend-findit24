import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/userSlice";
import loadingReducer from "./slices/loading";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  user: userSlice.reducer,
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
