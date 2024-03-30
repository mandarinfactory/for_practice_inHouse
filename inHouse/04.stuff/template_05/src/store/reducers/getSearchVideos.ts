import { searchStart, searchSuccess, searchFailure } from "../store";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { ReduxType } from "../../types/types";
import { Dispatch } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchVideos = (inputValue: ReduxType) => async (dispatch: Dispatch) => {
  try {    
    dispatch(searchStart());
    const response = await fetch(
      `${YOUTUBE_API_URL}/search?maxResults=20&key=${API_KEY}&part=snippet&regionCode=kr&q=${inputValue.payload}&type=video`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
