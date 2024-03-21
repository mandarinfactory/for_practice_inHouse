import React from "react";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

import { isClickedState, musicValState } from "../recoil/atom";

const Title: React.FC = () => {
  const setMusicVal = useSetRecoilState(musicValState);
  const setIsClicked = useSetRecoilState(isClickedState);
  return (
    <div className="flex justify-between items-center">
      <Link href="/.">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setMusicVal("");
            setIsClicked(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-11 h-11 mr-2 p-1 rounded-full bg-gradient-to-r from-red-500 to-sky-500"
          >
            <path
              fillRule="evenodd"
              d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="w-auto sm:w-[50px] mx-1 text-[2.3rem] sm:text-2xl font-extrabold cursor-pointer">쉼표</h1>
        </div>
      </Link>
    </div>
  );
};

export default Title;
