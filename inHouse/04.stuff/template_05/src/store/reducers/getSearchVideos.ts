import { searchStart, searchSuccess, searchFailure } from "../store";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchVideos = (inputValue: any) => async (dispatch: any) => {
  try {
    dispatch(searchStart());
    const response = await fetch(
      `${YOUTUBE_API_URL}/search?maxResults=1&key=${API_KEY}&part=snippet&regionCode=kr&q=${inputValue}&type=video`
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
