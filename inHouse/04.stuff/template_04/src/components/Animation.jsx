import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../public/icon/animation.json";

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 600, height: 600 }}
    />
  );
}
