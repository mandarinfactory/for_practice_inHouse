"use client";

import { HiHome } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import Title from "./Title";
import { SidebarProps } from "@/types/types";
import SidebarItem from "./SidebarItem";
import {
  authenticationTokenState,
  confirmedURIState,
  isClickedState,
  musicValState,
} from "@/recoil/atom";

const Sidebar: React.FC<SidebarProps> = ({ spotifyAuthUrl, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [removeAuth, setRemoveAuth] = useState(false);
  const confirmedURI = useRecoilValue(confirmedURIState);
  const setMusicVal = useSetRecoilState(musicValState);
  const setIsClicked = useSetRecoilState(isClickedState);
  const [savedAuthToken, setSavedAuthToken] = useRecoilState(
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
  }, []);

  useEffect(() => {
    if (removeAuth) {
      localStorage.removeItem("authToken");
      setSavedAuthToken(null);
    }
  }, [removeAuth]);

  return (
    <div className="flex">
      <div className="sticky top-[1%] w-[20%] h-screen my-7 mx-1 p-5">
        <Title />
        <input
          type="value"
          className="p-3 mr-1 w-full bg-slate-200 rounded-2xl my-7 text-xl"
          placeholder="쉼표 검색"
          onKeyDown={(event: any) => {
            if (event.key === "Enter") {
              setMusicVal(event.target.value);
              setIsClicked(false);
              router.push("/.");
            }
          }}
        />
        <div className="flex flex-col gap-y-4 p-5">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </div>
      <main className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
        <h1 className="w-[7%] h-auto p-2 mb-3 text-center text-2xl text-black bg-white rounded-2xl cursor-pointer">
          {!savedAuthToken ? (
            <a href={spotifyAuthUrl} className="cursor">
              로그인
            </a>
          ) : (
            <button
              onClick={() => {
                setRemoveAuth(true);
              }}
            >
              로그아웃
            </button>
          )}
        </h1>
        <SpotifyPlayer
          token={savedAuthToken}
          uris={confirmedURI}
          styles={{
            bgColor: "transparent",
          }}
        />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
