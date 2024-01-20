import React from "react";

const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-15 h-12 text-white p-2 bg-red-500 rounded-full"
          viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          <span className="ml-3 text-2xl font-bold">나의여지도</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
