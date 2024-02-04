import { atom, selector } from "recoil";

export const textState = atom<string | undefined>({
  key: "textState", // 모든 atom들에는 unique한 key를 가져야한다.
  default: "안녕! 난 Recoil이야!",
});

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
