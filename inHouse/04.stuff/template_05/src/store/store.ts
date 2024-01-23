import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types/types";

import { getHomepageVideos } from "./reducers/getHomepageVideos";

const initialState: InitialState = {
  searchVal: "",
  videos: [],
};

export const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchVal = action.payload;
    }
  },
  extraReducers: (builder => {
    builder.addCase(getHomepageVideos.fulfilled,(state, action) => {
        state.videos = action.payload;
    })
  })
});
export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;