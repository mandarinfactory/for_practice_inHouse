import React from "react";
import { useStore } from "./store/store";

export const App: React.FC = () => {
  const initialCountState: any = useStore((state) => state.countState);
  const increaseBtn: any = useStore((state) => state.increaseNum);
  const removeAllBtn: any = useStore((state) => state.removeAllNum);

  return (
    <div className="m-5">
      <h1 className="text-[4em] text-red-700 font-bold drop-shadow-lg">ZUSTAND!!!</h1>
      <p className="text-[4em] text-black font-bold drop-shadow-lg">{initialCountState}</p>
      <button className="text-2xl font-bold bg-slate-100 p-3 rounded-2xl m-3 shadow-lg" onClick={increaseBtn}>+</button>
      <button className="text-2xl font-bold bg-slate-100 p-3 rounded-2xl m-3 shadow-lg" onClick={removeAllBtn}>리셋</button>
    </div>
  );
};
