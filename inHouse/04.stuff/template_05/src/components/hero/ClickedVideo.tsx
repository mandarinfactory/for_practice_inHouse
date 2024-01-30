import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchInputSlice, VideoScreenIsClicked } from "../../store/store";
import { RootState } from "../../store/store";
const ClickedVideo: React.FC = () => {
  const dispatch = useDispatch();
  const clickedVideoSelector = useSelector(
    (state: RootState) => state.youtubeClickedButtonPageApp
  );
  return (
    <div className="w-[85%] flex flex-wrap justify-center">
      {clickedVideoSelector?.clickedValue?.items?.map((value: any, id: number) => (
        <div
          className="w-[290px] h-300px m-3"
          key={id}
          onClick={() => {
            dispatch(SearchInputSlice.actions.clickedVideos(value));
            dispatch(VideoScreenIsClicked.actions.isClicked(value));
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${value.id.videoId}?autoplay-1`}
            className="w-[290px] h-[200px] rounded-3xl"
          ></iframe>
          <h1 className="text-lg my-2 overflow-hidden truncate">
            {value.snippet.title}
          </h1>
          <p className="text-xs">채널이름 : {value.snippet.channelTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ClickedVideo;