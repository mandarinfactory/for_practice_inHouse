import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomepageVideos } from "../store/reducers/getHomepageVideos";
import { YoutubeSlice } from "../store/store";
import { RootState } from "../store/store";

const Hero: React.FC = () => {
  const dispatch = useDispatch();
  const videoSelector = useSelector((state: RootState) => state.youtubeApp);

  useEffect(() => {
    dispatch<any>(getHomepageVideos());
  }, [dispatch]);

  return (
    <>
      {videoSelector.searchVal ? (
        <div className="w-[85%] flex flex-wrap justify-center">
          {videoSelector?.searchVal?.items?.map((value: any, id: number) => (
            <div className="w-[290px] h-300px m-3" key={id} onClick={() => {
              dispatch(YoutubeSlice.actions.clickedVideos(value))
            }}>
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
      ) : (
        <div className="w-[85%] flex flex-wrap justify-center">
          {videoSelector?.videos?.items?.map((value: any, id: number) => (
            <div className="w-[290px] h-300px m-3" key={id}>
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
      )}
    </>
  );
};

export default Hero;
