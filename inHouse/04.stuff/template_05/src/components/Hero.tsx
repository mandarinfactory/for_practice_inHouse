import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHomepageVideos } from "../store/reducers/getHomepageVideos";

const Hero: React.FC = () => {
  const dispatch = useDispatch<any>();
  const videoSelector = useSelector<any>((state) => state.youtubeApp);

  useEffect(() => {
    dispatch(getHomepageVideos());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-wrap flex-1 justify-center">
        {videoSelector?.videos?.items?.map(
          (value: { key: string; value: any }, id) => (
            <div className="m-5">
              <iframe
                src={`https://www.youtube.com/embed/${value.id.videoId}?autoplay-1`}
                className="w-[540px] h-[360px]"
              ></iframe>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Hero;
