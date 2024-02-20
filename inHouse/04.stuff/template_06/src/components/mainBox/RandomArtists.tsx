import React, { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
// import { randomArtistsHandler } from "../../recoil/store";

const RandomArtists: React.FC = () => {
  // const randomArtistsData = useRecoilValueLoadable(randomArtistsHandler(""));

  return (
    <>
      <h1 className="my-1 text-3xl">추천하는 아티스트들</h1>
      <div className="w-auto h-auto flex flex-wrap">
        {/* {randomArtistsData?.contents.artists.items.map((e: any, i: number) => (
          <div className="m-3 flex justify-center w-[18%]" key={i}>
            <img
              className="relative w-auto h-auto object-cover rounded-full"
              src={e.images[0].url}
              alt=""
            />
            <h1 className="absolute mt-2 text-slate-400 drop-shadow-2xl uppercase text-lg">
              {e.name}
            </h1>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default RandomArtists;
