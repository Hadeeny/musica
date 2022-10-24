import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./features/musicSlice";
import playlistSlice from "./features/playlistSlice";

const store = configureStore({
  reducer: {
    allMusic: musicSlice,
    playlist: playlistSlice,
  },
});

export default store;
