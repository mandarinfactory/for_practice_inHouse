import { createAsyncThunk } from "@reduxjs/toolkit";

import { YOUTUBE_COMMENTS_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getVideoComments = createAsyncThunk(
  "videoCommentsApp/videoComments",
  async (clickedId: string) => {
    try {
      const response = await fetch(
        `${YOUTUBE_COMMENTS_API_URL}?key=${API_KEY}&part=snippet&videoId=${clickedId}&maxResults=20`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
