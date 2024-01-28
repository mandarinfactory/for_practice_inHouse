import { create } from "zustand";

export const useStore: any = create((set: any) => ({
  countState: 0,
  increaseNum: () => set((state: any) => ({ countState: state.countState + 1 })),
  removeAllNum: () => set({ countState: 0 }),
}));
