import { configureStore, createSlice } from "@reduxjs/toolkit";

import {
  ClickedButtonPageState,
  CommentState,
  DictaphoneState,
  FirstVideoState,
  SearchInputState,
  VideoIsClickedState,
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
const dictaphoneState: DictaphoneState = {
  mic: false,
  micValue: "",
};
const videoIsClickedState: VideoIsClickedState = {
  clickedVideo: [],
};

export const ClickedButtonPageSlice = createSlice({
  name: "youtubeClickedButtonPageApp",
  initialState: clickedButtonPageState,
  reducers: {
    clickedStart: (state) => {
      state.loading = true;
    },
    clickedSuccess: (state, action) => {
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
    searchSuccess: (state, action) => {
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
    commentsSuccess: (state, action) => {
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

export const DictaphoneSlice = createSlice({
  name: "dictaphoneApp",
  initialState: dictaphoneState,
  reducers: {
    dictaphoneStart: (state, action) => {
      state.mic = action.payload;
    },
    dictaphoneSuccess: (state, action) => {
      if (state.mic === true) {
        state.micValue = action.payload;
      }
    },
  },
});

export const VideoScreenIsClicked = createSlice({
  name: "videoScreenIsClickedApp",
  initialState: videoIsClickedState,
  reducers: {
    isClicked: (state, action) => {
      state.clickedVideo = action.payload;
    },
  },
});

export const { clickedStart, clickedSuccess, clickedFailure } =
  ClickedButtonPageSlice.actions;
export const { searchStart, searchSuccess, searchFailure } =
  SearchInputSlice.actions;
export const { commentsStart, commentsSuccess, commentsFailure } =
  CommentSlice.actions;
export const { dictaphoneStart, dictaphoneSuccess } = DictaphoneSlice.actions;
export const { isClicked } = VideoScreenIsClicked.actions;

export const store = configureStore({
  reducer: {
    youtubeClickedButtonPageApp: ClickedButtonPageSlice.reducer,
    youtubeSearchInputApp: SearchInputSlice.reducer,
    youtubeCommentApp: CommentSlice.reducer,
    youtubeApp: YoutubeSlice.reducer,
    dictaphoneApp: DictaphoneSlice.reducer,
    videoScreenIsClickedApp: VideoScreenIsClicked.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
