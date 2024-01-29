import { YOUTUBE_API_URL } from "../../utils/constants";
import { commentsFailure, commentsStart, commentsSuccess } from "../store";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getClickedVideoComments =
  (inputValue: any) => async (dispatch: any) => {
    try {
      dispatch(commentsStart());

      const response = await fetch(
        `${YOUTUBE_API_URL}/commentThreads/&key=${API_KEY}&videoId=${inputValue.payload}&maxResults=30`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      dispatch(commentsSuccess(data));
    } catch (error) {
      dispatch(commentsFailure(error));
    }
  };
