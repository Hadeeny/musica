import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./features/musicSlice";

const store = configureStore({
  reducer: {
    allMusic: musicSlice,
  },
});

export default store;
