import { atom } from "recoil";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const accessTokenState = atom<string | undefined>({
  key: `accessTokenState`,
  default: "",
});

export const musicValState = atom<string | undefined>({
  key: `musicValState`, // 모든 atom들에는 unique한 key를 가져야한다.
  default: "",
});

export const getAccessTokenData = async (state: any) => {
  const authParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    authParameters
  );
  const data = await response.json();
  return data.access_token;
};

export const searchMusicHandler = async (accessToken: any, musicVal: any) => {
  let searchParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  };
  let artistID = await fetch(
    `https://api.spotify.com/v1/search?q=${musicVal}&type=artist`,
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data.artists.items[0].id;
    });
  let albumsData = await fetch(
    `https://api.spotify.com/v1/artists/${artistID}/albums?limit=20`,
    searchParameters
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return albumsData;
};

/* export const getAuthToken = selector({
  key: "get/authSpotifyToken",
  get: async ({ get }) => {
    const authToken = get(authTokenState);
    const url 
  }
}) */
