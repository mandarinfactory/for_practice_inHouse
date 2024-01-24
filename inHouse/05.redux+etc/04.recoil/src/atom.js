import { atom } from "recoil";

export const countState = atom({
    // 전역상태, atom === state이다.
    key: "count",
    default: 15,
  });