export default function Hero({ isLoading, moviesInfo }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div>
        {isLoading ? (
          <h1 className="p-10 text-3xl">로딩중......</h1>
        ) : (
          <div className="w-full p-5 my-10 bg-white rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-xl">
            <h1 className="my-7 text-3xl font-extrabold">현재 박스오피스</h1>
            {moviesInfo.map((movie, i) => (
              <div className="p-2 my-1 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-200 shadow-md animate-fade-left duration-100" key={movie.movieCd}>
                <h3 className="mx-10 my-3 text-3xl">{i + 1}. {movie.movieNm}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        className="w-[50%] p-5 opacity-40 rounded-lg text-2xl shadow-xl"
        type="text"
        placeholder="영화를 검색해보세요."
      />
    </div>
  );
}
