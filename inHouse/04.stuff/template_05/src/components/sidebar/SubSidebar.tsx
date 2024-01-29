import React from "react";

import { store } from "../../store/store";
import { getClickedSidebar } from "../../store/reducers/getClickedSidebar";
import { ClickedButtonPageSlice } from "../../store/store";

const SubSidebar: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center my-7 hover:text-indigo-800 cursor-pointer" onClick={() => {
        store.dispatch(
          getClickedSidebar(ClickedButtonPageSlice.actions.clickedSuccess("무한도전"))
        )
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
        <h1>무한도전</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-7 hover:text-indigo-800 cursor-pointer" onClick={() => {
        store.dispatch(
          getClickedSidebar(ClickedButtonPageSlice.actions.clickedSuccess("침착맨"))
        )
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clipRule="evenodd"
          />
        </svg>
        <h1>침착맨</h1>
      </div>
      <div className="flex flex-col justify-center items-center mb-7 hover:text-indigo-800 cursor-pointer" onClick={() => {
        store.dispatch(
          getClickedSidebar(ClickedButtonPageSlice.actions.clickedSuccess("haha ha"))
        )
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clipRule="evenodd"
          />
        </svg>
        <h1>haha ha</h1>
      </div>
      <div className="flex flex-col justify-center items-center hover:text-indigo-800 cursor-pointer" onClick={() => {
        store.dispatch(
          getClickedSidebar(ClickedButtonPageSlice.actions.clickedSuccess("슈카월드"))
        )
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clipRule="evenodd"
          />
        </svg>
        <h1>슈카월드</h1>
      </div>
      <div className="w-[80%] h-1 my-7 mx-auto bg-slate-300"></div>
    </div>
  );
};

export default SubSidebar;
