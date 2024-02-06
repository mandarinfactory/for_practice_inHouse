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
const SearchVideo: React.FC = () => {
  const dispatch = useDispatch();
  const searchVideoSelector = useSelector(
    (state: RootState) => state.youtubeSearchInputApp
  );
  const videoAddInfosSelector = useSelector(
    (state: RootState) => state.clickedVideoInfoApp
  );
  return (
    <div className="w-[85%] flex flex-wrap justify-center">
      {searchVideoSelector?.searchVal?.items?.map((value: any, id: number) => (
        <div
          className="w-[290px] h-300px m-3 cursor-pointer"
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
          <p className="mt-1 text-xs">
            조회수 :{" "}
            {videoAddInfosSelector.clickedValue
              ? videoAddInfosSelector?.clickedValue?.items[0]?.statistics
                  ?.viewCount
              : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchVideo;
