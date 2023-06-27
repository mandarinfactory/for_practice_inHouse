export default function Hero({ isLoading, moviesInfo }) {
  console.log(moviesInfo);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        {isLoading ? (
          <h1>로딩중......</h1>
        ) : (
          <div>
            {moviesInfo.map((movie) => (
              <div key={movie.movieCd}>
                <h3>{movie.movieNm}</h3>
                <p>누적 관객 수 : {movie.audiAcc}명</p>
                <p>영화 개봉일 : ({movie.openDt})</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <input
        className="w-[50%] p-5 opacity-40 rounded-lg text-2xl"
        type="text"
        placeholder="영화를 검색해보세요."
      />
    </div>
  );
}
