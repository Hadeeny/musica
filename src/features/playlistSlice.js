import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicAuth from "./musicAuth";

export const getPlaylists = createAsyncThunk(
  "getMusicPlaylist",
  async (_, thunkAPI) => {
    try {
      return await musicAuth.playlistService();
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
  myPlaylist: [],
  filesFound: [],
  musicFiles: [],
  message: "",
};

export const playlistSlice = createSlice({
  name: "allPlaylist",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      state.musicFiles.filter((file) => {
        if (file.id === action.payload) {
          file.liked = !file.liked;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylists.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlaylists.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.myPlaylist = action.payload;
        state.myPlaylist.forEach((playlist) => {
          state.filesFound.push(...playlist.files);
        });
        state.myPlaylist.map((playlist) => {
          state.musicFiles.push(...playlist.files);
        });
        state.musicFiles.forEach((object) => {
          object.liked = false;
        });
      })
      .addCase(getPlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.myPlaylist = null;
      });
  },
});

export const { toggleLike } = playlistSlice.actions;
export default playlistSlice.reducer;
