import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "./atom";

const DisplayCounter = () => {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
};

export default DisplayCounter;
