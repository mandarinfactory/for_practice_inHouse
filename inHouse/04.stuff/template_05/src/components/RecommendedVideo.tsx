import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RecommendedVideoSlice,
  RootState,
  VideoScreenIsClickedSlice,
  store,
} from "../store/store";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";

const RecommendedVideo: React.FC = () => {
  const dispatch = useDispatch();
  const recommendedSelector = useSelector(
    (state: RootState) => state.youtubeRecommendedApp
  );

  const filteredSelector = recommendedSelector?.recommendeds?.items?.filter(
    (el:any) => {
      if (!el.contentDetails.playlistItem) {
        return el;
      }
    }
  );

  return (
    <div className="flex flex-col">
      {filteredSelector?.map((value: any, id: number) => (
        <div
          className="w-[180px] h-[130px] m-1 flex cursor-pointer"
          key={id}
          onClick={() => {
            dispatch(VideoScreenIsClickedSlice.actions.isClicked(value));
            // console.log(value.snippet.channelId);
            store.dispatch(
              getRecommendedVideos(
                RecommendedVideoSlice.actions.recommendedSuccess(
                  value.snippet.channelId
                )
              )
            );
          }}
        >
          <img
            src={`${value.snippet.thumbnails.high.url}`}
            alt="thumbnail"
            className="mx-1 rounded-xl"
          />
          <div className="w-full ml-3">
            <h1 className="text-base truncate">{value.snippet.title}</h1>
            <h1 className="mt-3 text-base">{value.snippet.channelTitle}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecommendedVideo;
