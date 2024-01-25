import { configureStore, createSlice } from "@reduxjs/toolkit";

import { InitialState } from "../types/types";
import { getHomepageVideos } from "./reducers/getHomepageVideos";

const initialState: InitialState = {
  searchVal: "",
  videos: [],
  clickedVideos: [],
  comments: [],
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
    commentsStart: (state) => {
      state.loading = true;
    },
    commentsSucess: (state, action) => {
      state.comments = action.payload;
      state.error = null;
    },
    commentsFailure: (state, action) => {
      state.comments = [];
      state.error = action.payload;
    },
    clickedVideos: (state, action) => {
      state.clickedVideos = state.clickedVideos.push(action.payload)
      console.log(state);
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getHomepageVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const { searchStart, searchSucess, searchFailure } = YoutubeSlice.actions;
export const { commentsStart, commentsSucess,commentsFailure } = YoutubeSlice.actions;

export const store = configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
