import { selectorFamily, RecoilEnv, GetRecoilValue } from "recoil";

import { accessTokenState } from "../atom";
import { SPOTIFY_URL } from "../../utils/constants";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const searchArtistFinderState = selectorFamily({
  key: "searchArtistFinderState",
  get:
    (artist: any) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
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
          .then((data) => data);
        return artistData;
      }
    },
});

export const searchAlbumFinderState = selectorFamily({
  key: "searchAlbumFinderState",
  get:
    (artist: any) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
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
          .then((data) => data.artists.items[0]?.id);
        const albumData = await fetch(
          `${SPOTIFY_URL}/artists/${artistID}/albums?limit=20`,
          albumParameters
        )
          .then((res) => res.json())
          .then((data) => data);
        return albumData.items;
      }
    },
});

export const searchSongFinderState = selectorFamily({
  key: "searchSongFinderState",
  get:
    (song: any) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
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
          .then((data) => data);
        return songData.tracks;
      }
    },
});

export const searchDetailTrackState = selectorFamily({
  key: "searchDetailTrackState",
  get:
    (albumID: any) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
      if (token) {
        const detailTrackParams = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const detailTrackData = await fetch(
          `${SPOTIFY_URL}/albums/${albumID}/tracks`,
          detailTrackParams
        )
          .then((res) => res.json())
          .then((data) => data);
        return detailTrackData;
      }
    },
});

export const searchBrowseState = selectorFamily({
  key: "searchBrowseState",
  get:
    (limit: any) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
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
            limit === 25 ? "new-releases" : "featured-playlists"
          }?locale=kr_KR&limit=${limit}`,
          browseParameters
        )
          .then((res) => res.json())
          .then((data) => data);
        return browseData;
      }
    },
});

export const searchDescriptionState = selectorFamily({
  key: "searchDescriptionState",
  get:
    (searchValue: string) =>
    async ({ get }) => {
      const token: GetRecoilValue | undefined = get(accessTokenState);
      if (token) {
        const languageCode = "en";
        const headers = {
          Authorization: "d19f95d5ee0b91dd9ebc8fc4ac763b6f",
          "User-Agent": "music_information",
        };
        const baseUrl = "https://api.wikimedia.org/core/v1/wikipedia/";
        const endPoint = "/search/page";
        const parameters = { q: searchValue, limit: "3" };
        const theUrl = baseUrl + languageCode + endPoint;
        const descriptionData = await fetch(
          theUrl + "?" + new URLSearchParams(parameters),
          {
            method: "GET",
            headers: headers,
          }
        )
          .then((res) => res.json())
          .then((data) => data);
        return descriptionData;
      }
    },
});
