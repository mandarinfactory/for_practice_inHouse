import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

/* export const getHomepageVideos = createAsyncThunk(
  "youtubeApp/homepageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="무한도전"&key=${API_KEY}&part=snippet&type=video`
    );
    const parsedData = await parseData(items)
    
  }
); */
