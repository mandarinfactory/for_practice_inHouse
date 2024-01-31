import React from "react";
import { useDispatch } from "react-redux";

import { DictaphoneSlice, SearchInputSlice, VideoScreenIsClicked, store } from "../store/store";
import { getSearchVideos } from "../store/reducers/getSearchVideos";
import Dictaphone from "./Dictaphone";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const getInputValue = (event: any) => {
    if (event.key === "Enter") {
      const inputValueElement =
        document.querySelector<HTMLInputElement>(".inputValue");
      const inputValue = inputValueElement?.value;
      store.dispatch(
        getSearchVideos(SearchInputSlice.actions.searchSuccess(inputValue))
      );
    }
  };
  return (
    <header className="w-[90%] mx-auto my-7 text-black body-font bg-slate-50 rounded-[2rem] shadow-xl">
      <div className="container flex flex-wrap p-3 flex-col mx-auto md:flex-row justify-center items-center">
        <div
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          onClick={() => {
            dispatch(VideoScreenIsClicked.actions.isClicked(0));
          }}
        >
          <div className="p-4 bg-indigo-800 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-7 h-7 fill-white"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </div>
        </div>
        <h1 className="mx-5 my-3 text-4xl font-bold">밥튜브</h1>
        <div className="text-sm mx-5">
          <p>필요할때 보는 나의 밥튜브..!</p>
          <p>밥먹을때, 심심할때, 설거지할때 원하는 영상을 본다!</p>
        </div>
        <input
          type="textd"
          className="inputValue bg-slate-200 ml-10 text-xl px-5 py-3 rounded-3xl"
          onKeyDown={(value) => {
            getInputValue(value);
          }}
        />
        <div>
          <button
            className="transcript p-3 ml-5 rounded-full bg-indigo-800 hover:bg-indigo-700 cursor-pointer"
            onClick={() => {
              dispatch(DictaphoneSlice.actions.dictaphoneStart(true));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-9 h-9"
            >
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
          </button>
          <Dictaphone />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
