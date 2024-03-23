"use client";

import { HiHome } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import Title from "./Title";
import { SidebarProps } from "../../types/types";
import SidebarItem from "./SidebarItem";
import {
  authenticationTokenState,
  confirmedURIState,
  isClickedState,
  musicValState,
} from "../../recoil/atom";

const Sidebar: React.FC<SidebarProps> = ({ spotifyAuthUrl, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [removeAuth, setRemoveAuth] = useState(false);
  const confirmedURI = useRecoilValue(confirmedURIState);
  const setMusicVal = useSetRecoilState(musicValState);
  const setIsClicked = useSetRecoilState(isClickedState);
  const [savedAuthToken, setSavedAuthToken] = useRecoilState<string | null>(
    authenticationTokenState
  );
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "홈",
        active: pathname !== "/NewReleases",
        href: "/.",
      },
      {
        icon: WiStars,
        label: "최신앨범",
        active: pathname === "/NewReleases",
        href: "/NewReleases",
      },
    ],
    [pathname]
  );

  useEffect(() => {
    const savedLocalAuthToken = localStorage.getItem("authToken");
    if (typeof savedLocalAuthToken === "string") {
      setSavedAuthToken(savedLocalAuthToken);
    }
  }, [setSavedAuthToken]);

  useEffect(() => {
    if (removeAuth) {
      localStorage.removeItem("authToken");
      setSavedAuthToken(null);
    }
  }, [removeAuth, setSavedAuthToken]);

  return (
    <div className="flex sm:flex-col">
      <div className="sticky sm:static top-[1%] w-[20%] sm:w-full h-screen sm:h-auto my-7 sm:my-0 mx-1 p-5 sm:flex sm:justify-center">
        <Title />
        <input
          type="value"
          className="p-3 mr-1 my-7 sm:my-10 w-full sm:w-[50%] bg-slate-200 rounded-2xl text-xl"
          placeholder="쉼표 검색"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setMusicVal(event.currentTarget.value);
              setIsClicked(false);
              router.push("/.");
            }
          }}
        />
        <div className="flex flex-col sm:flex-row gap-y-4 p-5 sm:p-0">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <main className="lg:w-[90%] md:w-[80%] sm:w-[95%] h-full mr-7 my-7 p-5 sm:mx-auto sm:mt-0 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
        <>
          {!savedAuthToken ? (
            <h1 className="lg:w-[10%] md:w-[12%] sm:w-[17%] h-auto p-2 sm:px-1 mb-3 text-center lg:text-xl md:text-base sm:text-xs text-black bg-white rounded-2xl cursor-pointer">
              <a
                href={spotifyAuthUrl}
                onClick={() => {
                  router.back();
                }}
              >
                로그인
              </a>
            </h1>
          ) : (
            <h1 className="lg:w-[10%] md:w-[12%] sm:w-[17%] h-auto p-2 sm:px-1 mb-3 text-center lg:text-xl md:text-base sm:text-xs text-black bg-white rounded-2xl cursor-pointer">
              <button
                onClick={() => {
                  setRemoveAuth(true);
                  router.replace("/.");
                }}
              >
                로그아웃
              </button>
            </h1>
          )}
        </>
        {savedAuthToken ? (
          <SpotifyPlayer
            token={savedAuthToken}
            uris={confirmedURI}
            styles={{
              bgColor: "transparent",
            }}
          />
        ) : (
          <></>
        )}
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
