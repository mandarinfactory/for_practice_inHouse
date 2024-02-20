import { RecoilEnv, selector, selectorFamily } from "recoil";

import { SPOTIFY_ACCESS_TOKEN_URL, SPOTIFY_URL } from "../util/constants";
import { accessTokenState } from "./atom";

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

export const searchArtistFinderState = selectorFamily({
  key: "searchArtistFinderState",
  get:
    (artist: any) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (artist) {
        const artistParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const artistData = await fetch(
          `${SPOTIFY_URL}/search?q=${artist}&type=artist`,
          artistParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return artistData;
      }
    },
});

export const searchAlbumFinderState = selectorFamily({
  key: "searchAlbumFinderState",
  get:
    (artist: any) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (artist) {
        const albumParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const artistID = await fetch(
          `${SPOTIFY_URL}/search?q=${artist}&type=artist`,
          albumParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data.artists.items[0].id;
          });
        const albumData = await fetch(
          `${SPOTIFY_URL}/artists/${artistID}/albums?limit=20`,
          albumParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return albumData.items;
      }
    },
});

export const searchSongFinderState = selectorFamily({
  key: "searchSongFinderState",
  get:
    (song: any) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (song) {
        const songParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const songData = await fetch(
          `${SPOTIFY_URL}/search?q=${song}&type=track&limit=20`,
          songParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return songData.tracks;
      }
    },
});

export const getPlaylistsDataState = selector({
  key: "getPlaylistsDataState",
  get: async ({ get }) => {
    const token = get(accessTokenState);
    if (token) {
      const playlistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const playlistData = await fetch(
        `${SPOTIFY_URL}/browse/featured-playlists?locale=kr_KR&limit=10`,
        playlistParameters
      )
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      return playlistData.playlists;
    }
  },
});

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

/* export const randomArtistsHandler = selectorFamily({
  key: "randomArtistsHandler",
  get:
    (value: string) =>
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
          `${SPOTIFY_URL}/search?q=genre%3A${getRandomGenre}&type=artist&limit=7`,
          randomParameters
        )
          .then((res) => res.json())
          .then((data) => {
            return data;
          });
        return randomGenreFinder;
      }
    },
}); */
