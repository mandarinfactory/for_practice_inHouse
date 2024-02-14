import { createAsyncThunk } from "@reduxjs/toolkit";

import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomepageVideos = createAsyncThunk(
  "youtubeApp/homepageVideos",
  async (value: string) => {
    try {
      const response = await fetch(
        `${YOUTUBE_API_URL}/search?maxResults=1&key=${API_KEY}&part=snippet&regionCode=kr&q=${value}&type=video`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
