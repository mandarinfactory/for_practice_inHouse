import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const RecommendedVideo: React.FC = () => {
  const recommendedSelector = useSelector(
    (state: RootState) => state.youtubeRecommendedApp
  );
  return (
    <div className="flex flex-col">
      {recommendedSelector?.recommendeds?.items?.map(
        (value: any, id: number) => (
          <div
            className="w-[180px] h-[120px] m-1 flex cursor-pointer"
            key={id}
            onClick={() => {}}
          >
            <img
              src={`${value.snippet.thumbnails.high.url}`}
              alt="thumbnail"
              className="mx-1 rounded-xl"
            />
            <div className="w-full ml-3">
              <h1 className="text-base truncate">
                {value.snippet.title}
              </h1>
              <h1 className="mt-3 text-base">{value.snippet.channelTitle}</h1>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RecommendedVideo;
