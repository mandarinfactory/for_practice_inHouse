import { useContext } from "react";

import { MovieInfoContextStore } from "../../contexts";

export default function DetailMovieInfos({ clickedToFocus }) {
  const MovieInfosCtx = useContext(MovieInfoContextStore);
  const actorsName = [];
  const stillCuts = new Array(MovieInfosCtx.movieVal.stlls.split("|"));
  const movieTrailer = MovieInfosCtx.movieVal.vods.vod[0].vodUrl;
  stillCuts[0].length = 5;

  MovieInfosCtx.movieVal.actors.actor.forEach((v) => {
    actorsName.push(`${v.actorNm}, `);
  });
  actorsName.push(actorsName[actorsName.length - 1].replace(/,?/gi, "")); // 마지막에 오는 문자열에 있는 ,을 없애주고 추가해서
  actorsName.splice(actorsName.length - 2, 1); // 계속,이 붙어있는 문자열은 제거해줌.

  return (
    <div
      className="flex justify-center items-center absolute top-[20%] lg:w-[60%] sm:w-[90%] h-auto p-10 bg-white shadow-lg rounded-xl overflow-auto animate-fade animate-duration-200 z-10"
      ref={clickedToFocus}
    >
      <button
        onClick={() => {
          MovieInfosCtx.setDetailMovieInfos(false);
          MovieInfosCtx.setIsBoxOfficeBoxClicked(false);
          MovieInfosCtx.setIsUpcomingBoxClicked(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 384 512"
          className="absolute top-[10px] right-[10px]"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      <div>
        <div className="flex lg:flex-row sm:flex-col mb-2 overflow-hidden">
          <img
            className="w-[25%] h-auto md:m-auto sm:m-auto m-10 hover:scale-[1.3] duration-300 object-contain z-10 "
            src={
              MovieInfosCtx.movieVal.posters
                ? MovieInfosCtx.movieVal.posters.includes("|")
                  ? MovieInfosCtx.movieVal.posters.substring(
                      0,
                      MovieInfosCtx.movieVal.posters.indexOf("|")
                    )
                  : MovieInfosCtx.movieVal.posters
                : "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?"
            }
            alt="movie-poster"
          />
          <div className="p-5 flex flex-col">
            <h1 className="px-1 py-2 lg:text-3xl sm:text-2xl my-3 bg-gradient-to-r from-yellow-400 to-red-400 text-black shadow-xl drop-shadow-lg">
              {MovieInfosCtx.movieVal.title.includes("!")
                ? MovieInfosCtx.movieVal.title.replace(/!HS?E?/gi, "")
                : MovieInfosCtx.movieVal.title}
            </h1>
            <h4 className="my-1 lg:text-lg sm:text-md">
              {MovieInfosCtx.movieVal.titleEng.includes("!")
                ? MovieInfosCtx.movieVal.titleEng.replace(/!HS?E?/gi, "")
                : MovieInfosCtx.movieVal.titleEng}
            </h4>
            <p className="my-1 w-full lg:text-xl sm:text-md">
              감독 :
              {MovieInfosCtx.movieVal.directors.director[0].directorNm.includes(
                "!"
              )
                ? MovieInfosCtx.movieVal.directors.director[0].directorNm.replace(
                    /!HS?E?/gi,
                    ""
                  )
                : MovieInfosCtx.movieVal.directors.director[0].directorNm}
            </p>
            <p className="w-full my-1 lg:text-xl sm:text-md">
              배우 :
              {actorsName.includes("!")
                ? actorsName.replace(/!HS?E?/gi, "")
                : actorsName}
            </p>
            <div className="flex justify-between">
              <div>
                <p className="my-1 lg:text-xl sm:text-md">
                  {MovieInfosCtx.movieVal.genre}
                </p>
                <p className="my-1 lg:text-xl sm:text-md">
                  {MovieInfosCtx.movieVal.ratings.rating[0].ratingGrade.includes(
                    "|"
                  )
                    ? MovieInfosCtx.movieVal.ratings.rating[0].ratingGrade.substring(
                        0,
                        MovieInfosCtx.movieVal.ratings.rating[0].ratingGrade.indexOf(
                          "|"
                        )
                      )
                    : MovieInfosCtx.movieVal.ratings.rating[0].ratingGrade}{" "}
                  / {MovieInfosCtx.movieVal.repRlsDate} 개봉
                </p>
              </div>
              <div className="flex flex-row">
                <a
                  href={MovieInfosCtx.movieVal.kmdbUrl}
                  target="_blank"
                  title="영화정보"
                >
                  <svg
                    width="30px"
                    height="30px"
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1280.000000 1280.000000"
                    className="mr-5 fill-orange-400 hover:fill-red-600 duration-100"
                  >
                    <g
                      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M6095 12794 c-1354 -72 -2631 -552 -3669 -1378 -273 -218 -627 -554
                          -842 -801 -821 -944 -1342 -2077 -1518 -3305 -49 -339 -60 -507 -60 -910 0
                          -403 11 -571 60 -910 177 -1235 697 -2364 1527 -3314 132 -151 446 -464 592
                          -592 944 -821 2077 -1342 3305 -1518 339 -49 507 -60 910 -60 403 0 571 11
                          910 60 1128 162 2192 621 3075 1327 371 297 735 662 1031 1033 627 788 1071
                          1748 1263 2734 86 439 115 755 115 1240 0 403 -11 571 -60 910 -176 1228 -697
                          2361 -1518 3305 -128 146 -441 460 -592 592 -1039 907 -2282 1440 -3659 1568
                          -162 15 -716 27 -870 19z m595 -1869 c235 -65 463 -226 587 -416 92 -141 134
                          -296 134 -494 1 -177 -28 -302 -102 -448 -120 -238 -310 -399 -556 -473 -80
                          -24 -108 -27 -293 -32 -127 -2 -234 0 -278 7 -284 44 -580 257 -706 508 -40
                          80 -76 217 -85 326 -25 303 71 567 289 788 112 114 251 192 415 233 94 23 108
                          24 325 21 160 -2 219 -6 270 -20z m670 -5550 l0 -2845 380 0 380 0 0 -340 0
                          -340 -1720 0 -1720 0 0 340 0 340 380 0 380 0 0 2505 0 2505 -380 0 -380 0 0
                          340 0 340 1340 0 1340 0 0 -2845z"
                      />
                    </g>
                  </svg>
                </a>
                {movieTrailer ? (
                  <button
                    onClick={() => MovieInfosCtx.setIsTrailerClicked(true)}
                    className="h-0"
                    title="영화예고편"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="fill-red-600 hover:fill-orange-500 duration-100"
                    >
                      <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="w-full my-3 lg:text-lg sm:text-md">
              {MovieInfosCtx.movieVal.plots.plot[0].plotText}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto justify-center lg:flex md:flex sm:hidden">
          {stillCuts[0].map((pic, i) => (
            <div className="w-auto h-auto rounded-lg overflow-hidden" key={i}>
              <img
                src={pic}
                alt=""
                className="mx-5 rounded-lg object-contain hover:scale-[1.3] duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
