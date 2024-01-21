import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types/types";

import { getHomepageVideos } from "./reducers/getHomepageVideos";

const initialState: InitialState = {
  videos: [],
};

const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {

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