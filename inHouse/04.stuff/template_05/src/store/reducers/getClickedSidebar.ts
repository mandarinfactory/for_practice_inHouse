import { YOUTUBE_API_URL } from "../../utils/constants";
import { clickedStart, clickedSuccess, clickedFailure } from "../store";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getClickedSidebar =
  (clickedValue: any) => async (dispatch: any) => {
    try {
      dispatch(clickedStart());
      const response = await fetch(
        `${YOUTUBE_API_URL}/search?maxResults=20&key=${API_KEY}&part=snippet&regionCode=kr&q=${clickedValue.payload}&type=video`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      dispatch(clickedSuccess(data));
    } catch (error) {
      dispatch(clickedFailure(error));
    }
  };
