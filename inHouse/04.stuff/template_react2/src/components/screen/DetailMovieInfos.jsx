import { useEffect } from "react";

export default function DetailMovieInfos({ movieVal }) {
  return (
    <div className="absolute w-[50%] h-[80%] bg-slate-100 shadow-lg rounded-xl">
      <img
        className="w-auto h-auto"
        src={
          movieVal.posters.includes("|")
            ? movieVal.posters.substring(0, movieVal.posters.indexOf("|"))
            : movieVal.posters
        }
        alt="movie-poster"
      />
      <h1 className="text-2xl font-bold">
        {movieVal.title.includes("!")
          ? movieVal.title.replace(/!HS?E?/gi, "")
          : movieVal.title}
      </h1>
    </div>
  );
}
