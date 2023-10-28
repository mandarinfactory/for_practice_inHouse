import { useContext } from "react";

import { MovieInfoContextStore } from "../../contexts";

export default function MovieTrailerBox() {
  const MovieInfosCtx = useContext(MovieInfoContextStore);
  const movieTrailer = MovieInfosCtx.movieVal.vods.vod[0].vodUrl;
  const filteredTrailer = movieTrailer.replace(
    "trailerPlayPop?pFileNm=",
    "play/"
  );

  return (
    <div className="absolute w-full h-full flex flex-col justify-center items-center bg-black z-30 bg-opacity-80">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 384 512"
          className="absolute top-10 right-10 fill-white z-30"
          onClick={() => MovieInfosCtx.setIsTrailerClicked(false)}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      <div className="lg:w-[50%] sm:w-[90%] h-[50%]">
        <video controls autoPlay className="w-full h-full">
          <source src={filteredTrailer} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
