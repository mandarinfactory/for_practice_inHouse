import { createAsyncThunk } from "@reduxjs/toolkit";

import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomepageVideos = createAsyncThunk(
  "youtubeApp/homepageVideos",
  async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_API_URL}/search?maxResults=5&q="무한도전"&key=${API_KEY}&part=snippet&type=video`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
