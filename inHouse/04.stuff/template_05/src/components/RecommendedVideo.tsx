import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, VideoScreenIsClickedSlice } from "../store/store";

const RecommendedVideo: React.FC = () => {
  const dispatch = useDispatch();
  const recommendedSelector = useSelector(
    (state: RootState) => state.youtubeRecommendedApp
  );
  
  return (
    <div className="flex flex-col">
      {recommendedSelector?.recommendeds?.items?.map(
        (value: any, id: number) => (
          console.log(value)
        )
      )}
    </div>
  );
};

export default RecommendedVideo;
