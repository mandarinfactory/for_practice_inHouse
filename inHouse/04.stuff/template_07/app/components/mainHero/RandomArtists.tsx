import React from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";

import { randomArtistsHandler } from "../../recoil/selector/selectors";
import {
  detailClickedInfosState,
  isClickedState,
} from "../../recoil/atom";

const RandomArtists: React.FC = () => {
    
  const router = useRouter();
  const randomArtistsData = useRecoilValue(randomArtistsHandler(""));
  const setIsClicked = useSetRecoilState(isClickedState);
  const setDetailInfos = useSetRecoilState(detailClickedInfosState);
  
  return (
    <>
      <h1 className="my-1 text-3xl">추천하는 아티스트들</h1>
      <div className="flex flex-wrap justify-center items-center">
        {randomArtistsData?.artists.items.map((e: any, i: number) => (
          <div
            className="m-3 flex justify-center items-center w-[16%]"
            key={i}
            onClick={() => {
              setIsClicked(true);
              router.push("/DetailTracks");
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
          </div>
        ))}
      </div>
    </>
  );
};

export default RandomArtists;
