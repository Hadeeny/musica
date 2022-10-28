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
  myCollection: [],
  isListening: false,
  songIndex: 0,
  nextSongIndex: 0,
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

    addToCollections: (state, action) => {
      state.myCollection.push(action.payload);
    },

    goToNextSong: (state) => {
      if (state.songIndex < state.nowPlaying.length - 1) {
        state.songIndex++;
      } else state.songIndex = 0;
    },
    goToPrevSong: (state) => {
      state.songIndex--;
      if (state.songIndex < 0) {
        state.songIndex = state.nowPlaying.length - 1;
      }
    },
    getNextSong: (state, action) => {
      state.nextSongIndex = action.payload;
    },
    getSongIndex: (state, action) => {
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

export const {
  addToNowPlaying,
  goToNextSong,
  goToPrevSong,
  getIndex,
  getNextSong,
  getSongIndex,
  addToCollections,
} = musicSlice.actions;
export default musicSlice.reducer;
