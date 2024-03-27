import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { toggleDarkMode } from "../store/store";

export type UseDarkmode = [boolean, (text: string) => void];

export const useDarkmode = (): UseDarkmode => {
  const dispatch = useDispatch();
  const darkmodeSelector = useSelector(
    (state: RootState) => state.darkmodeApp.isDark
  );

  useEffect(() => {
    if (darkmodeSelector) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkmodeSelector]);

  const onToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return [darkmodeSelector, onToggleDarkMode];
};
