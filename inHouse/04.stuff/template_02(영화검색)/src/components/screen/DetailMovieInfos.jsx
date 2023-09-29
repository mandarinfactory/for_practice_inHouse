import { useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function DetailMovieInfos({ clickedToFocus }) {
  const MovieInfosCtx = useContext(MovieInfoContextStore);

  const actorsName = [];
  const stillCuts = new Array(MovieInfosCtx.movieVal.stlls.split("|"));
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
          MovieInfosCtx.setIsBoxClicked(false);
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
            <h1 className="px-1 py-2 lg:text-3xl md:text-2xl sm:text-xl my-3 bg-gradient-to-r from-yellow-400 to-red-400 text-black shadow-xl drop-shadow-lg">
              {MovieInfosCtx.movieVal.title.includes("!")
                ? MovieInfosCtx.movieVal.title.replace(/!HS?E?/gi, "")
                : MovieInfosCtx.movieVal.title}
            </h1>
            <h4 className="my-1 lg:text-lg sm:text-sm">
              {MovieInfosCtx.movieVal.titleEng.includes("!")
                ? MovieInfosCtx.movieVal.titleEng.replace(/!HS?E?/gi, "")
                : MovieInfosCtx.movieVal.titleEng}
            </h4>
            <p className="my-1 w-full lg:text-xl md:text-md sm:text-sm">
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
            <p className="w-full my-1 lg:text-xl md:text-md sm:text-sm">
              배우 :
              {actorsName.includes("!")
                ? actorsName.replace(/!HS?E?/gi, "")
                : actorsName}
            </p>
            <div className="flex justify-between">
              <div>
                <p className="my-1 lg:text-xl md:text-md sm:text-sm">
                  {MovieInfosCtx.movieVal.genre}
                </p>
                <p className="my-1 lg:text-xl md:text-md sm:text-sm">
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
              <a href={MovieInfosCtx.movieVal.kmdbUrl} target="_blank">
                <svg
                  width="30px"
                  height="30px"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1280.000000 1280.000000"
                  className="fill-orange-400 hover:fill-red-500 duration-100"
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
            </div>
            <p className="w-full my-3 lg:text-lg md:text-base sm:text-sm">
              {MovieInfosCtx.movieVal.plots.plot[0].plotText}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto justify-center lg:flex sm:hidden">
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
        <div className="w-full h-auto mx-3 my-5 flex flex-row justify-center items-center">
          <form className="w-full h-full">
            <input type="text" className="w-full h-full p-2 bg-slate-300 rounded-lg text-lg" placeholder="댓글을 적어주세요."/>
          </form>
            <button className="lg:w-[70px] sm:w-[90px] px-[20px] py-2 mx-3 bg-slate-700 text-white rounded-lg">입력</button>
        </div>
      </div>
    </div>
  );
}
