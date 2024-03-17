"use client";

import React, { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { HiHome } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import { usePathname, useRouter } from "next/navigation";
import SpotifyPlayer from "react-spotify-web-playback";

import Title from "./Title";
import { SidebarProps } from "@/types";
import SidebarItem from "./SidebarItem";
import {
  authenticationTokenState,
  confirmedURIState,
  isClickedState,
  musicValState,
} from "@/recoil/atom";

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [savedAuthToken, setSavedAuthToken] = useRecoilState(
    authenticationTokenState
  );
  const confirmedURI = useRecoilValue(confirmedURIState);
  const pathname = usePathname();
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
    const savedAuthToken = localStorage.getItem("authToken");
    if (typeof savedAuthToken === "string") {
      setSavedAuthToken(savedAuthToken);
    }
  }, []);

  const router = useRouter();
  const setMusicVal = useSetRecoilState(musicValState);
  const setIsClicked = useSetRecoilState(isClickedState);

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
        <SpotifyPlayer token={savedAuthToken} uris={confirmedURI} />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
