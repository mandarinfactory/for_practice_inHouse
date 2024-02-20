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

export const isNewClickedState = atom<boolean>({
  key: "isNewClickedState",
  default: false,
});

export const isTopClickedState = atom<boolean>({
  key: "isTopClickedState",
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
