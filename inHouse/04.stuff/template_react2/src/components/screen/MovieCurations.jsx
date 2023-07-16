export default function MovieCurations({
  curatedMovie,
  setMovieVal,
  setDetailMovieInfos,
  genre,
  randomNumber,
  setGenres
}) {
  return (
    <div className="w-[50%] p-5 m-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl">
      <button
        className="p-[10px] absolute top-5 right-10 bg-white text-black text-2xl font-bold hover:bg-blue-500 hover:text-white duration-200"
        onClick={() => {setGenres(genre[randomNumber])}}
      >
        다시추천!
      </button>
      <h1 className="w-[40%] px-1 py-2 text-center text-3xl font-bold bg-white shadow-lg">
        오늘은 이런영화 어떠세요?
      </h1>
      <div className="flex justify-center items-center w-full h-full">
        {curatedMovie ? (
          curatedMovie.map((movie, i) => (
            <div
              className="w-full h-auto p-3 m-5 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 border-gray-200 shadow-xl hover:bg-slate-300 duration-100"
              key={i}
              onClick={() => {
                setDetailMovieInfos(true);
                setMovieVal(curatedMovie[i]);
              }}
            >
              <div className="w-full h-full overflow-hidden">
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
              <h1 className="my-2 text-xl font-bold">{movie.title}</h1>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
