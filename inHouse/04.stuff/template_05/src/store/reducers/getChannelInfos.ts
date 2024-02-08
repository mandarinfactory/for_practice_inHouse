import { YOUTUBE_API_URL } from "../../utils/constants";
import {
  channelInfosStart,
  channelInfosSuccess,
  channelInfosFailure,
} from "../store";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getChannelInfos = (channelId: any) => async (dispatch: any) => {
  try {
    dispatch(channelInfosStart());
    const response = await fetch(
      `${YOUTUBE_API_URL}/channels?key=${API_KEY}&part=snippet&id=${channelId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    dispatch(channelInfosSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(channelInfosFailure(error));
  }
};
