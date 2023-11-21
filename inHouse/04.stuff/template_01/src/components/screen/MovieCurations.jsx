import { useContext } from "react";
import { MovieInfoContextStore } from "../../contexts";

export default function MovieCurations({
  curatedMovie,
  genre,
  randomNumber,
  genres,
  setGenres
}) {

  const MovieInfosCtx = useContext(MovieInfoContextStore);

  return (
    <div className="lg:w-[80%] sm:w-[90%] p-5 m-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl">
      <button
        className="p-2 my-3 absolute top-5 right-10 bg-white text-black lg:text-2xl sm:text-xl hover:bg-black hover:text-white duration-200"
        onClick={() => {setGenres(genre[randomNumber])}}
      >
        다시추천!
      </button>
      <h1 className="lg:w-[45%] sm:w-[55%] px-1 py-2 my-3 text-center lg:text-2xl sm:text-md bg-white shadow-lg">
        오늘은 이런 {genres}영화 어떠세요?
      </h1>
      <div className="flex lg:flex-row sm:flex-col justify-center items-center w-full h-full">
        {curatedMovie ? (
          curatedMovie.map((movie, i) => (
            <div
              className="w-full h-auto px-2 py-3 m-2 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl hover:bg-slate-300 duration-100  cursor-pointer"
              key={i}
              onClick={(e) => {
                MovieInfosCtx.setDetailMovieInfos(true);
                MovieInfosCtx.setMovieVal(curatedMovie[i]);
                e.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-full h-full overflow-hidden lg:flex sm:hidden">
                <img
                  src={
                    movie.posters
                      ? movie.posters.includes("|")
                        ? movie.posters.substring(0, movie.posters.indexOf("|"))
                        : movie.posters
                      : "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
                  }
                  alt="movie poster"
                  className="w-full h-full cursor-pointer hover:scale-110 duration-300"
                />
              </div>
              <h1 className="my-2 text-lg">{movie.title}</h1>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
