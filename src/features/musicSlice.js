import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicAuth from "./musicAuth";

export const getAllMusic = createAsyncThunk(
  "getAllMusic",
  async (_, thunkAPI) => {
    try {
      return await musicAuth.allMusic();
    } catch (error) {
      const message =
        error.respose && error.response.data.message
          ? error.response.data.message
          : error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  musicFiles: [],
  nowPlaying: [],
  isListening: false,
  songIndex: 0,
  message: "",
};

export const musicSlice = createSlice({
  name: "allMusic",
  initialState,
  reducers: {
    addToNowPlaying: (state, action) => {
      state.isListening = true;
      state.nowPlaying = action.payload;
    },
    getIndex: (state, action) => {
      state.songIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.musicFiles = action.payload;
      })
      .addCase(getAllMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.musicFiles = null;
      });
  },
});

export const { addToNowPlaying, getIndex } = musicSlice.actions;
export default musicSlice.reducer;
