import React from "react";

import RecommendedVideo from "./RecommendedVideo";
import Comments from "./Comments";

const VideoFeature: React.FC = () => {
  return (
    <div className="w-full h-full flex">
      <Comments />
      <RecommendedVideo />
    </div>
  );
};

export default VideoFeature;
