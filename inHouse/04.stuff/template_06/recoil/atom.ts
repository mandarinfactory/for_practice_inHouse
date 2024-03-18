import { atom } from "recoil";

export const accessTokenState = atom<any | undefined>({
  key: "accessTokenState",
  default: "",
});

export const authenticationTokenState = atom<any | undefined>({
  key: "authenticationTokenState",
  default: "",
});

export const confirmedURIState = atom<string>({
  key: "confirmedURIState",
  default: "",
});

export const selectedMusicValState = atom<string | undefined>({
  key: "selectedMusicValState",
  default: "",
});

export const musicValState = atom<string | undefined>({
  key: "musicValState",
  default: "",
});

export const clickedAlbumState = atom<object>({
  key: "clickedAlbumState",
  default: [],
});

export const isClickedState = atom<boolean>({
  key: "isClickedState",
  default: false,
});

export const detailTrackState = atom<object>({
  key: "detailTrackState",
  default: [],
});

export const detailClickedPlaylistsInfoState = atom<object>({
  key: "detailClickedPlaylistsInfoState",
  default: [],
});

export const detailClickedInfosState = atom<object>({
  key: "detailClickedInfosState",
  default: [],
});
