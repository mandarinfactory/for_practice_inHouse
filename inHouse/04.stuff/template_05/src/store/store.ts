import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types/types";

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResult: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {

  },
});
export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer
  },
});