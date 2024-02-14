import { selector, RecoilEnv } from "recoil";

import { SPOTIFY_ACCESS_TOKEN_URL, SPOTIFY_URL } from "../util/constants";
import {
  accessTokenState,
  detailTrackState,
  selectedMusicValState,
} from "./atom";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const getAccessTokenData = async () => {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  const response = await fetch(SPOTIFY_ACCESS_TOKEN_URL, authParameters);
  const data = await response.json();
  return data.access_token;
};

export const detailTrackFinderState = selector({
  key: "detailTrackFinderState",
  get: async ({ get }) => {
    const token = get(accessTokenState);
    const selectedPlaylist = get(selectedMusicValState);
    if (token && selectedPlaylist) {
      let trackParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      try {
        const response = await fetch(
          `${SPOTIFY_URL}/playlists/${selectedPlaylist}
          /tracks?limit=15`,
          trackParameters
        );
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("에러!", error);
        throw error;
      }
    }
  },
});
