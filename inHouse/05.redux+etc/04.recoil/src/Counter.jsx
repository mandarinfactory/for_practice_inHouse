import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "./atom";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h1>안녕 Recoil!</h1>
      <h1>Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

export default Counter;
