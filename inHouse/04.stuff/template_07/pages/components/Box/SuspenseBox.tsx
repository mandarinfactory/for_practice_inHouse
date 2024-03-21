import React from "react";
import ReactLoading from "react-loading";

const SuspenseBox: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <ReactLoading type="bubbles" color="#239cda" height="300px" width="300px" />
        <h1 className="text-black font-bold lg:text-3xl md:text-2xl sm:text-xl drop-shadow-xl">
          앗! 로딩중...잠시만 기다려주세요!
        </h1>
      </div>
    </div>
  );
};

export default SuspenseBox;
