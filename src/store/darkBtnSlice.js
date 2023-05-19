import { createSlice } from "@reduxjs/toolkit";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export const darkBtnSlice = createSlice({
  name: "BtnText",
  initialState: {
    icon: faMoon,
    text: "",
  },
  reducers: {
    darkBtn: (state, action) => {
      state.icon = action.payload.icon;
      state.text = action.payload.text;
    },
  },
});

// Action creators are generated for each case reducer function
export const { darkBtn } = darkBtnSlice.actions;

export default darkBtnSlice.reducer;
