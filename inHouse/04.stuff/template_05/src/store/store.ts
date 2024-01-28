import { configureStore, createSlice } from "@reduxjs/toolkit";

import {
  ClickedButtonPageState,
  CommentState,
  FirstVideoState,
  SearchInputState,
} from "../types/types";
import { getHomepageVideos } from "./reducers/getHomepageVideos";

const clickedButtonPageState: ClickedButtonPageState = {
  clickedValue: "",
  loading: false,
  error: null,
};
const searchInputState: SearchInputState = {
  searchVal: "",
  loading: false,
  error: null,
  clickedVideos: [],
};
const commentState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};
const firstVideoState: FirstVideoState = {
  videos: [],
};

export const ClickedButtonPageSlice = createSlice({
  name: "youtubeClickedButtonPageApp",
  initialState: clickedButtonPageState,
  reducers: {
    clickedStart: (state) => {
      state.loading = true;
    },
    clickedSucess: (state, action) => {
      state.clickedValue = action.payload;
      state.loading = false;
      state.error = null;
    },
    clickedFailure: (state, action) => {
      state.clickedValue = "";
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const SearchInputSlice = createSlice({
  name: "youtubeSearchInputApp",
  initialState: searchInputState,
  reducers: {
    searchStart: (state) => {
      state.loading = true;
    },
    searchSucess: (state, action) => {
      state.searchVal = action.payload;
      state.loading = false;
      state.error = null;
    },
    searchFailure: (state, action) => {
      state.searchVal = "";
      state.loading = false;
      state.error = action.payload;
    },
    clickedVideos: (state, action) => {
      state.clickedVideos = [...state.clickedVideos, action.payload];
    },
  },
});

export const CommentSlice = createSlice({
  name: "youtubeCommentApp",
  initialState: commentState,
  reducers: {
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
  },
});

export const YoutubeSlice = createSlice({
  name: "youtubeApp",
  initialState: firstVideoState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomepageVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const { clickedStart, clickedSucess, clickedFailure } =
  ClickedButtonPageSlice.actions;
export const { searchStart, searchSucess, searchFailure } =
  SearchInputSlice.actions;
export const { commentsStart, commentsSucess, commentsFailure } =
  CommentSlice.actions;

export const store = configureStore({
  reducer: {
    youtubeClickedButtonPageApp: ClickedButtonPageSlice.reducer,
    youtubeSearchInputApp: SearchInputSlice.reducer,
    youtubeCommentApp: CommentSlice.reducer,
    youtubeApp: YoutubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
