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
      state.myPlaylist.forEach((file) => {
        file.files.forEach((item) => {
          if (item.id === action.payload) {
            item.liked = !item.liked;
          }
        });
      });
    },
    populatePlaylists: (state, action) => {
      state.myPlaylist = action.payload;
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

export const { toggleLike, populatePlaylists } = playlistSlice.actions;
export default playlistSlice.reducer;
