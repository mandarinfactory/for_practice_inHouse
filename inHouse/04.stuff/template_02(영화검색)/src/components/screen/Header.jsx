import { useEffect, useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";
import AuthComponent from "./auth/AuthComponent";

export default function Header() {
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  useEffect(() => {
    <AuthComponent />
  },[MovieInfosCtx.isLoginClicked])

  return (
    <>
      <header className="p-2 w-full h-auto text-gray-200 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-100 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <h1 className="mr-20 md:text-3xl sm:text-2xl font-extrabold text-black drop-shadow-lg">
            <a href="./"> 무비써치</a>
          </h1>
          <h1 className="mr-20 md:text-3xl sm:text-2xl font-extrabold text-black drop-shadow-lg">
            <a
              href="#"
              onClick={() => {
                MovieInfosCtx.setIsLoginClicked(true);
              }}
            >
              {" "}
              로그인
            </a>
          </h1>
        </div>
      </header>
      {MovieInfosCtx.isLoginClicked ? <AuthComponent /> : <></>}
    </>
  );
}
