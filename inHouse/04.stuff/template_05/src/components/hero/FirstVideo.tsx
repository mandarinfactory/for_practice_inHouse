import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  RecommendedVideoSlice,
  RootState,
  VideoScreenIsClicked,
  store,
} from "../../store/store";
import { getHomepageVideos } from "../../store/reducers/getHomepageVideos";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";

const FirstVideo: React.FC = () => {
  const dispatch = useDispatch();
  const firstVideoSelector = useSelector(
    (state: RootState) => state.youtubeApp
  );

  useEffect(() => {
    dispatch<any>(getHomepageVideos());
  }, [dispatch]);

  return (
    <div className="w-[85%] flex flex-wrap justify-center">
      {firstVideoSelector?.videos?.items?.map((value: any, id: number) => (
        <div
          className="w-[290px] h-300px m-3 cursor-pointer"
          key={id}
          onClick={() => {
            dispatch(VideoScreenIsClicked.actions.isClicked(value));
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
