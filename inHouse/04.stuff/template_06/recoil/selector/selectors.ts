import { GetRecoilValue, RecoilEnv, selectorFamily } from "recoil";

import { accessTokenState } from "../atom";
import { SPOTIFY_URL } from "@/utils/constants";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const detailTrackHandlerState = selectorFamily({
  key: "detailTrackHandlerState",
  get:
    (detailTrack: string) =>
    async ({ get }) => {
      const token: GetRecoilValue = get(accessTokenState);
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
          .then((data) => data);
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
      const token: GetRecoilValue = get(accessTokenState);
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
          .then((data) => data);

        const pickRandomNumber: number = Math.ceil(
          Math.random() * findRandomGenre.genres?.length
        );
        const getRandomGenre = findRandomGenre?.genres[pickRandomNumber];
        const randomGenreFinder = await fetch(
          `${SPOTIFY_URL}/search?q=genre%3A${getRandomGenre}&type=artist&limit=10`,
          randomParameters
        )
          .then((res) => res.json())
          .then((data: any) => data);
        return randomGenreFinder;
      }
    },
});
