import { useState, useContext } from "react";

import { MapInfoContextStore } from "../../../contexts";
import * as api from "../../../API";

export default function Header() {
  const MapInfosCtx = useContext(MapInfoContextStore);
  const scrollToTop = () => {
    document.querySelector(".infoBox").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="text-white bg-teal-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="w-10 h-10 fill-teal-700 p-2 bg-white rounded-full"
          >
            <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
          </svg>
          <span className="mx-4 text-3xl text-white">동네지도</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <button
            className="mr-10 text-white text-xl hover:text-slate-800 cursor-pointer duration-100"
            onClick={() => {
              MapInfosCtx.setIsfilteredNumber({
                largeClass: "I2",
                middleClass: "I212",
                smallClass: "I21201",
              });
              scrollToTop();
            }}
          >
            카페
          </button>
          <button
            className="mr-10 text-white text-xl hover:text-slate-800 cursor-pointer duration-100"
            onClick={() => {
              MapInfosCtx.setIsfilteredNumber({
                largeClass: "I2",
                middleClass: "I201",
                smallClass: "",
              });
              scrollToTop();
            }}
          >
            음식점
          </button>
          <button
            className="mr-10 text-white text-xl hover:text-slate-800 cursor-pointer duration-100"
            onClick={() => {
              MapInfosCtx.setIsfilteredNumber({
                largeClass: "G2",
                middleClass: "G204",
                smallClass: "G20405",
              });
              scrollToTop();
            }}
          >
            편의점
          </button>
          <button
            className="mr-10 text-white text-xl hover:text-slate-800 cursor-pointer duration-100"
            onClick={() => {
              MapInfosCtx.setIsfilteredNumber({
                largeClass: "Q1",
                middleClass: "Q102",
                smallClass: "",
              });
              scrollToTop();
            }}
          >
            병원
          </button>
          <button
            className="mr-10 text-white text-xl hover:text-slate-800 cursor-pointer duration-100"
            onClick={() => {
              MapInfosCtx.setIsfilteredNumber({
                largeClass: "G2",
                middleClass: "G215",
                smallClass: "G21501",
              });
              scrollToTop();
            }}
          >
            약국
          </button>
        </nav>
        <div>
          <input type="text" className="w-[100%] px-5 py-2 rounded-xl text-black" placeholder="도시를 입력해주세요." onChange={(v) => {MapInfosCtx.setInputVal(v)}}/>
        </div>
      </div>
    </header>
  );
}
