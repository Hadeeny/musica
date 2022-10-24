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
  message: "",
};

export const playlistSlice = createSlice({
  name: "allPlaylist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylists.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPlaylists.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.myPlaylist = action.payload;
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
