import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-[80%] mx-auto my-7 text-black body-font bg-slate-50 rounded-[2rem] shadow-xl">
      <div className="container flex flex-wrap p-3 flex-col md:flex-row justify-center items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-15 h-15 p-3 bg-indigo-800 flex justify-center items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-7 h-7 fill-white"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </div>
        </a>
        <h1 className="mx-5 my-3 text-4xl font-bold">밥반찬친구</h1>
        <div>
          <p className="text-xs">기다리고 기다리던 나의 밥반찬친구..!</p>
          <p className="text-xs">밥먹을때, 심심할때, 설거지할때 원하는 YouTube영상을 본다!</p>
        </div>
        <div>
          메뉴보드판
        </div>
        <input type="text" className="bg-slate-200 ml-10 text-xl p-2 rounded-3xl" />
      </div>
    </header>
  );
};

export default Navbar;
