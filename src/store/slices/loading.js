import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    val: false,
  },
  reducers: {
    loadingStart: (state) => {
      state.val = true;
    },
    loadingEnd: (state) => {
      state.val = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadingStart, loadingEnd } = loadingSlice.actions;

export default loadingSlice.reducer;
