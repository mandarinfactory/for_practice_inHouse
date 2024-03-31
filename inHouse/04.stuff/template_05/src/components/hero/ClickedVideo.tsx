import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ClickedVideoInfoSlice,
  RecommendedVideoSlice,
  SearchInputSlice,
  VideoScreenIsClickedSlice,
  store,
} from "../../store/store";
import { RootState } from "../../store/store";
import { getRecommendedVideos } from "../../store/reducers/getRecommendedVideos";
import { getVideoInfos } from "../../store/reducers/getVideoInfos";
import { ClickedValueType } from "../../types/VideoTypes";

const ClickedVideo: React.FC = () => {
  const dispatch = useDispatch();
  const clickedVideoSelector = useSelector(
    (state: RootState) => state.youtubeClickedButtonPageApp
  );

  return (
    <div className="w-[85%] h-auto flex flex-wrap justify-center">
      {clickedVideoSelector?.clickedValue.items.map(
        (value: ClickedValueType, id: number) => (
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
              dispatch(SearchInputSlice.actions.clickedVideos(value));
              dispatch(VideoScreenIsClickedSlice.actions.isClicked(value));
              store.dispatch(
                getRecommendedVideos(
                  value.snippet
                    ? RecommendedVideoSlice.actions.recommendedSuccess(
                        value.snippet.channelId
                      )
                    : value.snippet
                )
              );
            }}
          >
            <img
              src={`${
                value.snippet
                  ? value.snippet.thumbnails.high.url
                  : value.snippet
              }`}
              alt="thumbnail"
              className="rounded-3xl"
            />
            <div className="hover:text-sky-700">
              <h1 className="text-lg mt-3 mb-1 overflow-hidden truncate">
                {value.snippet ? value.snippet.title : value.snippet}
              </h1>
              <p className="text-xs">
                채널이름 :{" "}
                {value.snippet ? value.snippet.channelTitle : value.snippet}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ClickedVideo;
