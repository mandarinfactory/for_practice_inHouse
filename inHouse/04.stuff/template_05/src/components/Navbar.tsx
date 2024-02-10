import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DarkmodeSlice,
  DictaphoneSlice,
  RootState,
  SearchInputSlice,
  VideoScreenIsClickedSlice,
  store,
} from "../store/store";
import { getSearchVideos } from "../store/reducers/getSearchVideos";
import Dictaphone from "./Dictaphone";
import { getHomepageVideos } from "../store/reducers/getHomepageVideos";
import { UseDarkmode, useDarkmode } from "../hooks/useDarkmode";

const Navbar: React.FC = () => {
  const [darkmodeSelector, onToggleDarkMode]: UseDarkmode = useDarkmode();
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
    <header className="w-[90%] mx-auto mb-7 text-black body-font bg-slate-50 rounded-[2rem] shadow-xl dark:bg-gray-700 dark:text-white">
      <div className="container flex flex-wrap p-3 flex-col mx-auto md:flex-row justify-center items-center">
        <div
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          onClick={() => {
            dispatch(VideoScreenIsClickedSlice.actions.isClicked(0));
            dispatch<any>(getHomepageVideos());
          }}
        >
          <div className="p-4 bg-indigo-800 dark:bg-indigo-500 rounded-full">
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
            className="dictaphone transcript p-3 ml-5 rounded-full bg-indigo-800 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 cursor-pointer"
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
        <div className="darkmode ml-10">
          {!darkmodeSelector ? (
            <div
              className="moon p-3 rounded-full bg-yellow-400 hover:bg-yellow-300 cursor-pointer"
              onClick={() => {
                dispatch(DarkmodeSlice.actions.toggleDarkMode("dark"));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-9 h-9"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div
              className="sun p-3 rounded-full bg-orange-500 hover:bg-orange-400 cursor-pointer"
              onClick={() => {
                dispatch(DarkmodeSlice.actions?.toggleDarkMode("light"));                
              }}
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-9 h-9"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
