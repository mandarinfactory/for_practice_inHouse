import React from "react";

import Layout from "./Layout";
import Video from "../components/Video";
import VideoFeature from "../components/VideoFeature";

const VideoScreen: React.FC = () => {
  return (
    <Layout>
      <div className="w-[85%] h-full flex flex-col dark:bg-neutral-900 dark:text-white">
        <Video />
        <VideoFeature />
      </div>
    </Layout>
  );
};

export default VideoScreen;
