import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { InitialState } from "../types/types";

import { getHomepageVideos } from "./reducers/getHomepageVideos";
import { getSearchVideos } from "./reducers/getSearchVideos";

const initialState: InitialState = {
  searchVal: "",
  videos: [],
  loading: false,
  error: null,
};

export const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    searchSucess: (state, action) => {
      state.searchVal = action.payload;
      state.loading = false;
      state.error = null;
    },
    searchStart: (state) => {
      state.loading = true;
    },
    searchFailure: (state, action) => {
      state.searchVal = "";
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomepageVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const { searchSucess, searchStart, searchFailure } =
  YoutubeSlice.actions;

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});