import { RecoilEnv, selectorFamily } from "recoil";

import { SPOTIFY_ACCESS_TOKEN_URL, SPOTIFY_URL } from "../../util/constants";
import { accessTokenState } from "../atom";

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

export const detailTrackHandlerState = selectorFamily({
  key: "detailTrackHandlerState",
  get:
    (detailTrack: any) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (detailTrack) {
        const trackParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const detailTrackData = await fetch(
          `${SPOTIFY_URL}/playlists/${detailTrack}/tracks?limit=15`,
          trackParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return detailTrackData;
      } else {
        return detailTrack;
      }
    },
});

export const randomArtistsHandler = selectorFamily({
  key: "randomArtistsHandler",
  get:
    () =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (token) {
        const randomParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };

        const findRandomGenre = await fetch(
          `${SPOTIFY_URL}/recommendations/available-genre-seeds`,
          randomParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        const pickRandomNumber = Math.ceil(
          Math.random() * findRandomGenre.genres.length
        );
        const getRandomGenre = findRandomGenre.genres[pickRandomNumber];
        const randomGenreFinder = await fetch(
          `${SPOTIFY_URL}/search?q=genre%3A${getRandomGenre}&type=artist&limit=10`,
          randomParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return randomGenreFinder;
      }
    },
});
