import { useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function SearchedMovieBox({ searchedMovie, clickedToFocus }) {
  
  const MovieInfosCtx = useContext(MovieInfoContextStore);
  return (
    <div className="flex flex-col justify-center items-start lg:w-[50%] sm:w-[90%] p-5 my-3 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl">
      {searchedMovie.map((movie, i) => (
        <div
        className="w-full p-2 flex flex-row justify-between items-center duration-100 hover:bg-slate-200 bg-opacity-70 cursor-pointer rounded-lg"
        key={i}
        onClick={() => {
          MovieInfosCtx.setDetailMovieInfos(true);
          MovieInfosCtx.setMovieVal(searchedMovie[i]);
          clickedToFocus.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex flex-col justify-center items-start">
            <h2 className="my-3 lg:text-2xl sm:text-base text-black" key={i}>
              {movie.title.includes("!")
                ? movie.title.replace(/!HS?E?/gi, "")
                : movie.title}
            </h2>
            <div>
              {movie.posters ? (
                <div className="lg:w-[20%] sm:w-0 h-auto object-contain shadow-lg">
                  <img
                    src={
                      movie.posters.includes("|")
                        ? movie.posters.substring(0, movie.posters.indexOf("|"))
                        : movie.posters
                    }
                    alt="movie-poster"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <p className="text-sm italic text-gray-900">
            {movie.genre} /{" "}
            {movie.titleEng.includes("!")
              ? movie.titleEng.replace(/!HS?E?/gi, "")
              : movie.titleEng}
          </p>
        </div>
      ))}
    </div>
  );
}
