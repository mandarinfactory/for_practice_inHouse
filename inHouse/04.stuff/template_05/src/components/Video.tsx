import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChannelInfosSlice, RootState } from "../store/store";

const Video: React.FC = () => {
  const dispatch = useDispatch();
  const videoSelector = useSelector(
    (state: RootState) => state.videoScreenIsClickedApp
  );
  const videoArr = Object.entries(videoSelector);

  return (
    <div className="w-full h-full">
      {videoArr.map<any>((value: any, index: number) => (
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          key={index}
        >
          <iframe
            src={`https://www.youtube.com/embed/${value[1].id.videoId}?autoplay=1&mute=1`}
            className="w-full h-[800px] rounded-3xl"
          ></iframe>
          <div className="w-full my-7 flex flex-col justify-start items-start p-3 bg-slate-50 rounded-3xl shadow-xl">
            <h1 className="mb-3 text-2xl">{value[1].snippet.title}</h1>
            <h1
              className="mb-3 text-xl px-3 py-2 bg-indigo-700 text-white rounded-3xl cursor-pointer"
              onClick={() => {
                dispatch(
                  ChannelInfosSlice.actions.channelInfosSuccess(
                    value[1].snippet.channelId
                  )
                );
              }}
            >
              {value[1].snippet.channelTitle}
            </h1>
            <p>{value[1].snippet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
