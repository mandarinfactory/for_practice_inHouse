export default function DetailMovieInfos({ movieVal, setDetailMovieInfos }) {
  const actorsName = [];
  movieVal.actors.actor.forEach((v) => {
    actorsName.push(`${v.actorNm}, `);
  });
  actorsName.push(actorsName[actorsName.length - 1].replace(/,?/gi, "")); // 마지막에 오는 문자열에 있는 ,을 없애주고 추가해서
  actorsName.splice(actorsName.length - 2, 1); // 계속,이 붙어있는 문자열은 제거해줌.

  return (
    <div className="flex justify-center items-center absolute top-[20%] w-[50%] h-auto p-10 bg-white shadow-lg rounded-xl overflow-auto animate-fade animate-duration-200 z-10">
      <button onClick={() => setDetailMovieInfos(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 384 512"
          className="absolute top-[10px] right-[10px]"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      <img
        className="w-[20%] h-auto m-10 shadow-lg hover:scale-[1.3] duration-300"
        src={
          movieVal.posters
            ? movieVal.posters.includes("|")
              ? movieVal.posters.substring(0, movieVal.posters.indexOf("|"))
              : movieVal.posters
            : "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279"
        }
        alt="movie-poster"
      />
      <div className="p-5 flex flex-col">
        <h1 className="p-1 text-3xl font-bold my-3 bg-gradient-to-r from-yellow-400 to-blue-500 text-black shadow-xl drop-shadow-lg">
          {movieVal.title.includes("!")
            ? movieVal.title.replace(/!HS?E?/gi, "")
            : movieVal.title}
        </h1>
        <h4 className="my-1 text-lg">
          {movieVal.titleEng.includes("!")
            ? movieVal.titleEng.replace(/!HS?E?/gi, "")
            : movieVal.titleEng}
        </h4>
        <p className="my-1 w-full text-xl font-bold">
          감독 : {movieVal.directors.director[0].directorNm}
        </p>
        <p className="w-full my-1 text-xl font-bold">배우 : {actorsName}</p>
        <p className="my-1 text-xl">{movieVal.genre}</p>
        <p className="my-1 text-xl">
          {movieVal.ratings.rating[0].ratingGrade.includes("|")
            ? movieVal.ratings.rating[0].ratingGrade.substring(
                0,
                movieVal.ratings.rating[0].ratingGrade.indexOf("|")
              )
            : movieVal.ratings.rating[0].ratingGrade}{" "}
          / {movieVal.repRlsDate} 개봉
        </p>
        <p className="w-full my-3 text-lg font-bold">
          {movieVal.plots.plot[0].plotText}
        </p>
      </div>
    </div>
  );
}
