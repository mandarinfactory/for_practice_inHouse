import React from "react";
import { Link, useNavigate } from "react-router-dom";

import PlayerControls from "./player/PlayerControls";
import { useRecoilState } from "recoil";
import { isClickedState, musicValState } from "../api/recoil/atom";
import LoginButton from "./button/LoginButton";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [musicVal, setMusicVal] = useRecoilState(musicValState);
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  return (
    <div className="sticky top-[1%] w-[20%] h-screen my-7 mx-1 p-5">
      <div className="flex justify-between">
        <Link to="/.">
          <div
            className="flex cursor-pointer"
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

            <h1 className="w-auto text-[2.3rem] mb-3 cursor-pointer">쉼표</h1>
          </div>
        </Link>
        <LoginButton />
      </div>
      <input
        type="value"
        className="p-3 mr-1 w-full bg-slate-200 rounded-2xl my-7 text-xl"
        placeholder="쉼표 검색"
        onKeyDown={(event: any) => {
          if (event.key === "Enter") {
            setMusicVal(event.target.value);
            setIsClicked(false);
            navigate("/.");
          }
        }}
      />

      <div className="mt-7 text-slate-700">
        <Link to="/.">
          <div className="home flex hover:text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <h1
              className="text-2xl mb-7"
              onClick={() => {
                setMusicVal("");
                setIsClicked(false);
              }}
            >
              홈
            </h1>
          </div>
        </Link>
        <Link to="/NewReleases">
          <div className="new_release flex hover:text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-2xl mb-7 hover:text-black cursor-pointer">
              최신앨범
            </h1>
          </div>
        </Link>
      </div>
      <PlayerControls />
    </div>
  );
};

export default Sidebar;
