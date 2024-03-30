import { configureStore, createSlice } from "@reduxjs/toolkit";

import { DictaphoneState, DarkmodeState } from "../types/types";
import { getHomepageVideos } from "./reducers/getHomepageVideos";
import { getVideoComments } from "./reducers/getVideoComments";
import {
  FirstVideoType,
  ClickedVideoSelectorType,
  SearchVideoType,
  CommentType,
  clickedIdSelectorType,
  RecommendedSelectorType,
  VideoAddInfosSelectorType,
} from "../types/VideoTypes";
import {
  videoObj,
  commentObj,
  clickedIdObj,
  videoInfosObj,
} from "../utils/objects";

const clickedButtonPageState: ClickedVideoSelectorType = {
  clickedValue: videoObj,
  loading: false,
  error: null,
};
const searchInputState: SearchVideoType = {
  clickedVideos: [],
  error: null,
  loading: false,
  searchVal: videoObj,
};
const recommendedState: RecommendedSelectorType = {
  recommendeds: commentObj,
  loading: false,
  error: null,
};
const firstVideoState: FirstVideoType = {
  videos: videoObj,
};
const videoCommentsState: CommentType = {
  comments: commentObj,
};
const videoInfosState: VideoAddInfosSelectorType = {
  clickedValue: videoInfosObj,
  loading: false,
  error: null,
};
const dictaphoneState: DictaphoneState = {
  mic: false,
  micValue: "",
};

const videoIsClickedState: clickedIdSelectorType = {
  clickedVideo: clickedIdObj,
};

const darkmodeState: DarkmodeState = {
  isDark:
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
};

export const DarkmodeSlice = createSlice({
  name: "darkmodeApp",
  initialState: darkmodeState,
  reducers: {
    toggleDarkMode: (state) => {
      const update = !state.isDark;
      if (update) {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
      }
      state.isDark = update;
    },
  },
});

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
      state.clickedValue = videoObj;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const ClickedVideoInfoSlice = createSlice({
  name: "clickedVideoInfoApp",
  initialState: videoInfosState,
  reducers: {
    videoInfosStart: (state) => {
      state.loading = true;
    },
    videoInfosSuccess: (state, action) => {
      state.clickedValue = action.payload;
      state.loading = false;
      state.error = null;
    },
    videoInfosFailure: (state, action) => {
      (state.clickedValue = videoInfosObj), (state.loading = false);
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
      state.searchVal = videoObj;
      state.loading = false;
      state.error = action.payload;
    },
    clickedVideos: (state, action) => {
      state.clickedVideos = [{ ...state.clickedVideos }, action.payload];
    },
  },
});

export const RecommendedVideoSlice = createSlice({
  name: "youtubeRecommendedApp",
  initialState: recommendedState,
  reducers: {
    recommendedStart: (state) => {
      state.loading = true;
    },
    recommendedSuccess: (state, action) => {
      state.recommendeds = action.payload;
      state.error = null;
    },
    recommendedFailure: (state, action) => {
      state.recommendeds = commentObj;
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

export const VideoCommentsSlice = createSlice({
  name: "videoCommentsApp",
  initialState: videoCommentsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoComments.fulfilled, (state, action) => {
      state.comments = action.payload;
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

export const VideoScreenIsClickedSlice = createSlice({
  name: "videoScreenIsClickedApp",
  initialState: videoIsClickedState,
  reducers: {
    isClicked: (state, action) => {
      state.clickedVideo = action.payload;
    },
  },
});

export const { toggleDarkMode } = DarkmodeSlice.actions;
export const { clickedStart, clickedSuccess, clickedFailure } =
  ClickedButtonPageSlice.actions;
export const { videoInfosStart, videoInfosSuccess, videoInfosFailure } =
  ClickedVideoInfoSlice.actions;
export const { searchStart, searchSuccess, searchFailure } =
  SearchInputSlice.actions;
export const { recommendedStart, recommendedSuccess, recommendedFailure } =
  RecommendedVideoSlice.actions;
export const { dictaphoneStart, dictaphoneSuccess } = DictaphoneSlice.actions;
export const { isClicked } = VideoScreenIsClickedSlice.actions;

export const store = configureStore({
  reducer: {
    darkmodeApp: DarkmodeSlice.reducer,
    youtubeApp: YoutubeSlice.reducer,
    dictaphoneApp: DictaphoneSlice.reducer,
    videoCommentsApp: VideoCommentsSlice.reducer,
    youtubeSearchInputApp: SearchInputSlice.reducer,
    clickedVideoInfoApp: ClickedVideoInfoSlice.reducer,
    youtubeRecommendedApp: RecommendedVideoSlice.reducer,
    videoScreenIsClickedApp: VideoScreenIsClickedSlice.reducer,
    youtubeClickedButtonPageApp: ClickedButtonPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
