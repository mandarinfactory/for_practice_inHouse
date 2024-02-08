import { configureStore, createSlice } from "@reduxjs/toolkit";

import {
  ClickedButtonPageState,
  RecommendedState,
  DictaphoneState,
  FirstVideoState,
  SearchInputState,
  VideoIsClickedState,
  VideoCommentsState,
  ChannelInfosState,
} from "../types/types";
import { getHomepageVideos } from "./reducers/getHomepageVideos";
import { getVideoComments } from "./reducers/getVideoComments";
import { getChannelInfos } from "./reducers/getChannelInfos";

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
const recommendedState: RecommendedState = {
  recommendeds: [],
  loading: false,
  error: null,
};
const channelInfosState: ChannelInfosState = {
  channelInfos: [],
  loading: false,
  error: null,
};
const firstVideoState: FirstVideoState = {
  videos: [],
};
const videoCommentsState: VideoCommentsState = {
  comments: [],
};
const dictaphoneState: DictaphoneState = {
  mic: false,
  micValue: "",
};
const videoIsClickedState: VideoIsClickedState = {
  clickedVideo: 0,
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

export const ClickedVideoInfoSlice = createSlice({
  name: "clickedVideoInfoApp",
  initialState: clickedButtonPageState,
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
      state.recommendeds = [];
      state.error = action.payload;
    },
  },
});

export const ChannelInfosSlice = createSlice({
  name: "channelInfosApp",
  initialState: channelInfosState,
  reducers: {
    channelInfosStart: (state) => {
      state.loading = true;
    },
    channelInfosSuccess: (state, action) => {
      state.channelInfos = action.payload;
      state.error = null;
    },
    channelInfosFailure: (state, action) => {
      state.channelInfos = [];
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
    builder.addCase(getVideoComments.fulfilled, (state, action: any) => {
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

export const { clickedStart, clickedSuccess, clickedFailure } =
  ClickedButtonPageSlice.actions;
export const { videoInfosStart, videoInfosSuccess, videoInfosFailure } =
  ClickedVideoInfoSlice.actions;
export const { channelInfosStart, channelInfosSuccess, channelInfosFailure } =
  ChannelInfosSlice.actions;
export const { searchStart, searchSuccess, searchFailure } =
  SearchInputSlice.actions;
export const { recommendedStart, recommendedSuccess, recommendedFailure } =
  RecommendedVideoSlice.actions;
export const { dictaphoneStart, dictaphoneSuccess } = DictaphoneSlice.actions;
export const { isClicked } = VideoScreenIsClickedSlice.actions;

export const store = configureStore({
  reducer: {
    youtubeClickedButtonPageApp: ClickedButtonPageSlice.reducer,
    clickedVideoInfoApp: ClickedVideoInfoSlice.reducer,
    youtubeSearchInputApp: SearchInputSlice.reducer,
    youtubeRecommendedApp: RecommendedVideoSlice.reducer,
    youtubeApp: YoutubeSlice.reducer,
    videoCommentsApp: VideoCommentsSlice.reducer,
    dictaphoneApp: DictaphoneSlice.reducer,
    videoScreenIsClickedApp: VideoScreenIsClickedSlice.reducer,
    channelInfosApp: ChannelInfosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
