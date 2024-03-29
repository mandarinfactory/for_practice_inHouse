import { useState, useEffect, useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";
import AuthComponent from "./auth/AuthComponent";

export default function Header() {
  const [loggedHandler, setLoggedHandler] = useState(true);
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  useEffect(() => {
    if (MovieInfosCtx.isLoginClicked) {
      setLoggedHandler(false);
    }
  }, [MovieInfosCtx.isLoginClicked]);

  const handleLogout = () => {
    MovieInfosCtx.setIsLoginClicked(false);
    setLoggedHandler(true);
    // 로그인, 로그아웃 toggle형식으로 만들었습니다.
  };

  return (
    <>
      <header className="p-2 w-full h-auto text-gray-200 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-100 shadow-lg flex justify-center">
        <div className="w-full container flex flex-wrap p-5 flex-row items-center justify-between">
          <h1 className="mr-20 lg:text-3xl md:text-3xl sm:text-2xl font-extrabold text-black drop-shadow-lg hover:text-slate-800">
            <a href="./"> 무비써치</a>
          </h1>
          <div className="flex flex-row">
            {MovieInfosCtx.isLoginClicked ? (
              <h1 className="mx-5 md:text-3xl sm:text-2xl font-extrabold text-black drop-shadow-lg">{MovieInfosCtx.userIdName}님 환영합니다. /</h1>
            ) : (
              <></>
            )}
            <h1 className="lg:text-3xl md:text-3xl sm:text-2xl font-extrabold text-black drop-shadow-lg hover:text-slate-800">
              {MovieInfosCtx.isLoginClicked ? (
                <a href="#" onClick={handleLogout}>
                  로그아웃
                </a>
              ) : (
                <a
                  href="#"
                  onClick={() => {
                    MovieInfosCtx.setIsLoginBtnClicked(true);
                  }}
                >
                  {loggedHandler ? "로그인" : "로그아웃"}
                </a>
              )}
            </h1>
          </div>
        </div>
      </header>
      {MovieInfosCtx.isLoginBtnClicked ? <AuthComponent /> : null}
    </>
  );
}
