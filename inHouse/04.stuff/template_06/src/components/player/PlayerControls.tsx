import React, { useEffect, useState } from "react";
import { accessTokenState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";
import { musicPlayPauseHandlerState } from "../../recoil/selector/playerSelectors";

const PlayerControls: React.FC = () => {
  const token = useRecoilValue(accessTokenState);
  /* const [player, setPlayer] = useState<Spotify.Player>();
  useEffect(() => {
    const spotifyScript = document.createElement("script");
    spotifyScript.src = "https://sdk.scdn.co/spotify-player.js";
    spotifyScript.async = true;

    document.body.appendChild(spotifyScript);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const spotifyPlayer = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb: any) => {
          cb(token?.replace(/\"/g, ""));
        },
        volume: 0.5,
      });

      setPlayer(spotifyPlayer);

      spotifyPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      spotifyPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
      spotifyPlayer.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        console.log("state changed", state);
      });

      spotifyPlayer.connect();
    };
  }, [token]); */

  const playerHandler = useRecoilValue(musicPlayPauseHandlerState(""));

  return (
    <div className="mt-5 p-3 w-full h-[70%] flex flex-col justify-center bg-slate-100 rounded-3xl shadow-xl">
      <div className="m-5 w-auto h-[50%] bg-slate-50 rounded-3xl shadow-xl"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="my-3 text-2xl">헤어지자 말해요</h1>
        <h1 className="my-1 text-2xl">박재정</h1>
        <div>
          <p className="my-3 text-xl">1집 Alone / 2023</p>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 cursor-pointer"
        >
          <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
        </svg>
        <div className="playAndStop" onClick={() => {
          playerHandler;
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 cursor-pointer"
          >
            <path d="M15 6.75a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75H15ZM20.25 6.75a.75.75 0 0 0-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-.75ZM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061Z" />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 cursor-pointer"
        >
          <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
        </svg>
      </div>
    </div>
  );
};

export default PlayerControls;
