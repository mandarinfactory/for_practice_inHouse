import { YOUTUBE_API_URL } from "../../utils/constants";
import {
  recommendedStart,
  recommendedSuccess,
  recommendedFailure,
} from "../store";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendedVideos =
  (clickedValue: any) => async (dispatch: any) => {
    try {
      dispatch(recommendedStart());
      const response = await fetch(
        `${YOUTUBE_API_URL}/activities?&key=${API_KEY}&part=snippet&maxResults=8&channelId=${clickedValue.payload}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      dispatch(recommendedSuccess(data));
    } catch (error) {
      dispatch(recommendedFailure(error));
    }
  };
