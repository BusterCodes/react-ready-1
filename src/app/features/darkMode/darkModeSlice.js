import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    value: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    },
    darkModeOn: (state) => {
      state.value = true;
    },
    darkModeOff: (state) => {
      state.value = false;
    },
  },
});

export const { toggleDarkMode, darkModeOn, darkModeOff } =
  darkModeSlice.actions;

export const selectDarkMode = (state) => state.darkMode.value;

export default darkModeSlice.reducer;
