import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import darkBtnSlice from "./darkBtnSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    darkBtn: darkBtnSlice,
  },
});
