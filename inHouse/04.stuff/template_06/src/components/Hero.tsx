import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "../store/store";

const Hero: React.FC = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState)
  const onChange = (event:any) => {
    setText(event.target.value);
  };

  return (
    <div className="w-full h-[500px] mr-7 my-7 p-5 bg-slate-50 rounded-3xl shadow-2xl">
      Hero
      <h1>{text}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default Hero;
