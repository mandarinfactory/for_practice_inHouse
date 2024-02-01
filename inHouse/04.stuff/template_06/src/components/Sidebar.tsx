import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[15%] h-[400px] m-7 p-5 bg-slate-50 rounded-3xl shadow-2xl">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 mr-1 p-1 rounded-full bg-gradient-to-r from-yellow-500 to-emerald-500"
        >
          <path
            fillRule="evenodd"
            d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="text-xl">쉼표</h1>
      </div>
      <input type="text" className="py-1 px-2 w-full bg-slate-200 rounded-3xl my-5 text-sm" placeholder="쉼표 검색"/>
      <div className="mt-3">
        <h1 className="text-base mb-5">라이브러리</h1>
        <h1 className="text-sm mb-5 hover:text-emerald-500 cursor-pointer rounded-3xl">
          홈
        </h1>
        <h1 className="text-sm mb-5 hover:text-emerald-500 cursor-pointer">
          노래
        </h1>
        <h1 className="text-sm mb-5 hover:text-emerald-500 cursor-pointer">
          앨범
        </h1>
        <h1 className="text-sm hover:text-emerald-500 cursor-pointer">
          아티스트
        </h1>
      </div>
      <div className="mt-7">
        <h1 className="text-base mb-7">내 음악</h1>
        <h1 className="text-sm mb-5 hover:text-emerald-500 cursor-pointer">
          최근 재생된 노래
        </h1>
        <h1 className="text-sm hover:text-emerald-500 cursor-pointer">
          좋아하는 노래
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
