import React from "react";

import { store } from "../../store/store";
import { getClickedSidebar } from "../../store/reducers/getClickedSidebar";
import { ClickedButtonPageSlice } from "../../store/store";

import 무한도전 from "../../assets/무한도전.jpg"
import 침착맨 from "../../assets/침착맨.webp";
import hahaha from "../../assets/haha ha.webp"
import 슈카월드 from "../../assets/슈카월드.webp"

const SubSidebar: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col justify-center items-center my-7 hover:text-indigo-800 cursor-pointer"
        onClick={() => {
          store.dispatch(
            getClickedSidebar(
              ClickedButtonPageSlice.actions.clickedSuccess("무한도전")
            )
          );
        }}
      >
        <img className="w-[35%] h-10 rounded-full" src={무한도전} alt="" />
        <h1>무한도전</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center mb-7 hover:text-indigo-800 cursor-pointer"
        onClick={() => {
          store.dispatch(
            getClickedSidebar(
              ClickedButtonPageSlice.actions.clickedSuccess("침착맨")
            )
          );
        }}
      >
        <img className="w-10 h-10 rounded-full" src={침착맨} alt="" />
        <h1>침착맨</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center mb-7 hover:text-indigo-800 cursor-pointer"
        onClick={() => {
          store.dispatch(
            getClickedSidebar(
              ClickedButtonPageSlice.actions.clickedSuccess("haha ha")
            )
          );
        }}
      >
        <img className="w-10 h-10 rounded-full" src={hahaha} alt="" />
        <h1>haha ha</h1>
      </div>
      <div
        className="flex flex-col justify-center items-center hover:text-indigo-800 cursor-pointer"
        onClick={() => {
          store.dispatch(
            getClickedSidebar(
              ClickedButtonPageSlice.actions.clickedSuccess("슈카월드")
            )
          );
        }}
      >
        <img className="w-10 h-10 rounded-full bg-blue-500" src={슈카월드} alt="" />
        <h1>슈카월드</h1>
      </div>
      <div className="w-[80%] h-1 my-7 mx-auto bg-slate-300"></div>
    </div>
  );
};

export default SubSidebar;
