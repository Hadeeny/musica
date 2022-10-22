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
  message: "",
};

export const musicSlice = createSlice({
  name: "allMusic",
  initialState,
  reducers: {
    //   reset: (state) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.error = false;
    //     state.message = "";
    //   },
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

// export const { reset } = authSlice.actions;
export default musicSlice.reducer;