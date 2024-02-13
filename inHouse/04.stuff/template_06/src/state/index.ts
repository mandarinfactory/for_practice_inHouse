import { atom, RecoilEnv, selector } from "recoil";
import { SPOTIFY_ACCESS_TOKEN_URL, SPOTIFY_URL } from "../util/constants";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const accessTokenState = atom<string | undefined>({
  key: `accessTokenState`,
  default: "",
});

export const selectedMusicValState = atom<string | undefined>({
  key: "selectedMusicValState",
  default: "",
});

export const musicValState = atom<string | undefined>({
  key: `musicValState`,
  default: "",
});

export const isClickedState = atom<boolean>({
  key: "isClickedState",
  default: false,
});

export const detailTrackState = atom<any>({
  key: "detailTrackState",
  default: "",
});
export const detailClickedInfoState = atom<any>({
  key: "detailClickedInfoState",
  default: "",
});

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

export const searchArtistFinder = async (
  accessToken: string,
  artistVal: string
) => {
  let artistParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistData = await fetch(
    `${SPOTIFY_URL}/search?q=${artistVal}&type=artist`,
    artistParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data.artists.items;
    });
  return artistData;
};

export const searchAlbumHandler = async (
  accessToken: string,
  musicVal: string
) => {
  let searchParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(
    `${SPOTIFY_URL}/search?q=${musicVal}&type=artist`,
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data.artists.items[0].id;
    });
  let albumData = await fetch(
    `${SPOTIFY_URL}/artists/${artistID}/albums?limit=20`,
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return albumData.items;
};

export const searchMusicHandler = async (
  accessToken: string,
  searchVal: string
) => {
  let musicParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let searchData = await fetch(
    `${SPOTIFY_URL}/search?q=${searchVal}&type=track&limit=20`,
    musicParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return searchData;
};

export const browseHandler = async (accessToken: string, type: string) => {
  let browseParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let browseData = await fetch(
    `${SPOTIFY_URL}/browse/${type}?locale=kr_KR&limit=10`,
    browseParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return browseData;
};

export const detailTrackFinder = async (accessToken: string, id: string) => {
  let trackParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let detailTrackData = await fetch(
    `${SPOTIFY_URL}/playlists/${id}/tracks?limit=15`,
    trackParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return detailTrackData;
};

export const detailTrackFinderState = selector({
  key: "detailTrackFinderState",
  get: async ({ get }) => {
    let trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + get(accessTokenState),
      },
    };
    try {
      const response = await fetch(
        `${SPOTIFY_URL}/playlists/${get(
          selectedMusicValState
        )}/tracks?limit=15`,
        trackParameters
      );
      const data = await response.json();
      get(detailTrackState);
      console.log(data);
      return data;
    } catch (error) {
      console.error("에러!", error);
      throw error;
    }
  },
});
