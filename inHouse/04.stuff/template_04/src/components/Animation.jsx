import React, { useState, useEffect } from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../public/icon/animation.json";

export default function Animation() {
  const [mediaNum, setMediaNum] = useState(0);
  useEffect(() => {
    const resizeMediaQuery = () => {
      if (window.matchMedia("screen and (min-width: 1400px)").matches) {
        setMediaNum(180);
      } else if (window.matchMedia("screen and (min-width: 1000px)").matches) {
        setMediaNum(140);
      }
      else if (window.matchMedia("screen and (min-width: 700px)").matches) {
        setMediaNum(120);
      } else {
        setMediaNum(100);
      }
    };

    resizeMediaQuery();

    window.addEventListener("resize", resizeMediaQuery);
    return () => {
      window.removeEventListener("resize", resizeMediaQuery);
    };
  }, []);
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: `${mediaNum}%`, height: `${mediaNum}%` }}
    />
  );
}
