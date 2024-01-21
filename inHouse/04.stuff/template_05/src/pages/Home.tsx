import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import { getHomepageVideos } from "../store/reducers/getHomepageVideos";

const Home: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [youtubeVideo, setYoutubeVideo] = useState();
  const videoSelector = useSelector((state) => state.youtubeApp);
  

  useEffect(() => {
    dispatch(getHomepageVideos());
    console.log(videoSelector.videos.items);
  }, [dispatch]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
