import React from "react";
import Link from "next/link";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { randomArtistsHandler } from "@/recoil/selector/selectors";
import { isClickedState, detailClickedInfosState } from "@/recoil/atom";

const RandomArtists: React.FC = () => {
  const randomArtistsData = useRecoilValue(randomArtistsHandler(""));
  const setIsClicked = useSetRecoilState(isClickedState);
  const setDetailInfos = useSetRecoilState(detailClickedInfosState);

  return (
    <>
      <h1 className="my-1 text-3xl">추천하는 아티스트들</h1>
      <div className="flex flex-wrap justify-center items-center">
        {randomArtistsData?.artists.items.map((e: any, i: number) => (
          <Link
            href="components/DetailTracks"
            className="m-3 flex justify-center items-center w-[16%]"
            key={i}
            onClick={() => {
              setIsClicked(true);
              setDetailInfos(e);
            }}
          >
            <div className="relative w-[80%] hover:scale-95 duration-150 cursor-pointer">
              <img
                className="object-cover rounded-xl shadow-xl"
                src={e.images[0].url}
                alt="아티스트"
              />
              <h1 className="absolute top-1 left-1 text-white mix-blend-difference mt-2 drop-shadow-2xl uppercase text-lg">
                {e.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RandomArtists;
