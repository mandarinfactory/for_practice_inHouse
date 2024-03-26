import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ClickedVideoInfoSlice,
  RecommendedVideoSlice,
  RootState,
  VideoScreenIsClickedSlice,
  store,
} from "../../store/store";
import { getHomepageVideos } from "../../store/reducers/getHomepageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoInfos } from "../../store/reducers/getVideoInfos";

const FirstVideo: React.FC = () => {
  const dispatch = useDispatch();
  const firstVideoSelector = useSelector(
    (state: RootState) => state.youtubeApp
  );
    
  useEffect(() => {
    dispatch<any>(getHomepageVideos(""));
  }, [dispatch]);
  return (
    <div className="w-[85%] flex flex-wrap justify-center">
      {firstVideoSelector?.videos?.items?.map((value, id: number) => (
        <div
          className="w-[290px] h-auto m-3 cursor-pointer"
          key={id}
          onLoad={() => {
            store.dispatch(
              getVideoInfos(
                ClickedVideoInfoSlice.actions.videoInfosSuccess(
                  value.id.videoId
                )
              )
            );
          }}
          onClick={() => {
            dispatch(VideoScreenIsClickedSlice.actions.isClicked(value));
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
            className="rounded-3xl"
          />
          <h1 className="text-lg my-2 overflow-hidden truncate">
            {value.snippet.title}
          </h1>
          <p className="text-xs">채널이름 : {value.snippet.channelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default FirstVideo;
