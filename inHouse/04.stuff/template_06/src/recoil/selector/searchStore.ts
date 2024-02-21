import { selectorFamily, RecoilEnv } from "recoil";

import { accessTokenState } from "../atom";
import { SPOTIFY_URL } from "../../util/constants";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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

export const searchBrowseState = selectorFamily({
  key: "searchBrowseState",
  get:
    (limit: number) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (token) {
        const browseParameters = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const browseData = await fetch(
          `${SPOTIFY_URL}/browse/${
            limit === 25
              ? "new-releases"
              : limit === 30
              ? "top-hit"
              : "featured-playlists"
          }?locale=kr_KR&limit=${limit}`,
          browseParameters
        )
          .then((res) => res.json())
          .then((data) => {
            
            return data;
          });
          console.log(browseData);
          return browseData;
      }
    },
});
