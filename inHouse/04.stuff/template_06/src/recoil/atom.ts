import { atom } from "recoil";

export const accessTokenState = atom<string | undefined>({
  key: "accessTokenState",
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

export const isClickedState = atom<boolean>({
  key: "isClickedState",
  default: false,
});

export const isDetailClickedState = atom<boolean>({
  key: "isDetailClickedState",
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

})