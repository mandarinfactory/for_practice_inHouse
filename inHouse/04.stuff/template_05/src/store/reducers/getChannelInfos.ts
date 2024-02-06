import { createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getChannelInfos = createAsyncThunk(
  "channelInfosApp/channelInfos",
  async (infos) => {
    try {
      const response = await fetch(
        `${YOUTUBE_API_URL}/channels?key=${API_KEY}&part=snippet&id=${infos}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
