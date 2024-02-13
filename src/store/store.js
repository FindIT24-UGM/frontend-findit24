import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    user: authSlice.reducer,
    loading: loadingReducer,
  },
});
