import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomepageVideos } from "../store/reducers/getHomepageVideos";

const Hero: React.FC = () => {
  const dispatch = useDispatch<any>();
  const videoSelector = useSelector<any>((state) => state.youtubeApp);

  useEffect(() => {
    dispatch(getHomepageVideos());
    console.log(videoSelector);
    
  }, [dispatch]);

  return (
    <>
      <div className="w-[85%] flex flex-wrap justify-center">
        {videoSelector?.videos?.items?.map(
          (value: { key: string; value: any }, id: number) => (
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
          )
        )}
      </div>
    </>
  );
};

export default Hero;
