import { createContext, useState } from "react";

export const MovieInfoContextStore = createContext(); // context생성
// context 생성할 때 기본값을 setting한다. --> React에서는 값을 컨트롤할때는 component를 만들어 사용하는걸 지향한다.

const MovieInfoContext = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchMovieKeyword, setSearchMovieKeyword] = useState();
  const [boxesMoviesInfo, setBoxesMoviesInfo] = useState();
  const [detailMovieInfos, setDetailMovieInfos] = useState(false);
  const [movieVal, setMovieVal] = useState();
  const [inputVal, setInputVal] = useState(false);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [isBoxOfficeBoxClicked, setIsBoxOfficeBoxClicked] = useState(false);
  const [isUpcomingBoxClicked, setIsUpcomingBoxClicked] = useState(false);
  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isTrailerClicked, setIsTrailerClicked] = useState(false);
  const [userIdName, setUserIdName] = useState();

  const MovieInfoStore = {
    isLoading,
    setIsLoading,
    searchMovieKeyword,
    setSearchMovieKeyword,
    boxesMoviesInfo,
    setBoxesMoviesInfo,
    detailMovieInfos,
    setDetailMovieInfos,
    movieVal,
    setMovieVal,
    inputVal,
    setInputVal,
    moviesInfo,
    setMoviesInfo,
    isBoxOfficeBoxClicked,
    setIsBoxOfficeBoxClicked,
    isUpcomingBoxClicked,
    setIsUpcomingBoxClicked,
    isLoginBtnClicked,
    setIsLoginBtnClicked,
    isLoginClicked,
    setIsLoginClicked,
    isSignUpClicked,
    setIsSignUpClicked,
    isTrailerClicked,
    setIsTrailerClicked,
    userIdName,
    setUserIdName
  };

  return (
    <MovieInfoContextStore.Provider value={MovieInfoStore}>
      {props.children}
    </MovieInfoContextStore.Provider>
  );
};

export default MovieInfoContext;
