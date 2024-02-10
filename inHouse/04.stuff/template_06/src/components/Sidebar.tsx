import React from "react";

import PlayerControls from "./PlayerControls";
import { useRecoilState } from "recoil";
import { musicValState } from "../state";

const Sidebar: React.FC = () => {
  const [musicVal, setMusicVal] = useRecoilState(musicValState);

  return (
    <div className="w-[18%] h-auto my-7 mx-1 p-5">
      <div
        className="flex cursor-pointer"
        onClick={() => {
          location.reload();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-11 h-11 mr-2 p-1 rounded-full bg-gradient-to-r from-yellow-500 to-emerald-500"
        >
          <path
            fillRule="evenodd"
            d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="w-auto text-[2.3rem] mb-3 cursor-pointer">쉼표</h1>
      </div>
      <input
        type="value"
        className="p-3 mr-1 w-full bg-slate-200 rounded-2xl my-7 text-xl"
        placeholder="쉼표 검색"
        onKeyDown={(event: any) => {
          if (event.key === "Enter") {
            setMusicVal(event.target.value);
          }
        }}
      />

      <div className="mt-7 text-slate-700">
        <h1 className="text-3xl mb-7 text-black">라이브러리</h1>
        <h1 className="text-2xl mb-7 hover:text-black cursor-pointer rounded-3xl">
          홈
        </h1>
        <h1 className="text-2xl mb-7 hover:text-black cursor-pointer">노래</h1>
        <h1 className="text-2xl mb-7 hover:text-black cursor-pointer">앨범</h1>
        <h1 className="text-2xl hover:text-black cursor-pointer">아티스트</h1>
      </div>
      <PlayerControls />
    </div>
  );
};

export default Sidebar;
