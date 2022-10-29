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
  message: "",
};

export const playlistSlice = createSlice({
  name: "allPlaylist",
  initialState,
  reducers: {
    queryFile: (state, action) => {},
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
          // if (!filesFound.artist.includes(playlist.artist)) {
          //   state.filesFound.push(...playlist.files);
          // }
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

// export const { reset } = authSlice.actions;
export default playlistSlice.reducer;
