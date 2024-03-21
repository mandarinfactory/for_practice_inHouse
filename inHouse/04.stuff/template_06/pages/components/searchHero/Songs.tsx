import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { authenticationTokenState, confirmedURIState, musicValState } from "@/recoil/atom";
import { searchSongFinderState } from "@/recoil/selector/searchSelectors";
import { SongDataType } from "@/types/AlbumTypes";

const Songs: React.FC = () => {
  const musicVal = useRecoilValue(musicValState);
  const songData = useRecoilValue(searchSongFinderState(musicVal)) as SongDataType;
  const setConfirmedURI = useSetRecoilState(confirmedURIState);
  const savedAuthToken:string = useRecoilValue(authenticationTokenState);
  const [queryNum, setQueryNum] = useState(0);

  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.matchMedia("(min-width: 1050px)").matches) setQueryNum(4);
      else if (window.matchMedia("(min-width: 700px)").matches) setQueryNum(5);
      else setQueryNum(10);
    };

    handleMediaQuery();

    window.addEventListener("resize", handleMediaQuery);
    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, []);

  return (
    <>
      <h1 className="w-full h-full mt-7 text-3xl sm:text-center">노래</h1>
      <div className="flex justify-center itmes-center my-3">
        {songData && queryNum !== 0 ? (
          Array?.from(
            { length: Math.ceil(songData.items.length / queryNum) },
            (value, index: number) => (
              <div key={index}>
                {songData.items
                  .slice(index * 4, (index + 1) * 4)
                  .map((v, i: number) => (
                    <div
                      className="my-1 cursor-pointer"
                      key={i}
                      onClick={() => {
                        setConfirmedURI(v.uri);
                        savedAuthToken ? <></> : alert("로그인 후 재생해주시기 바랍니다!")
                      }}
                    >
                      <img
                        src={v.album.images[1].url}
                        alt="앨범아트"
                        className="w-[40%] h-auto rounded-md hover:scale-105 duration-200 shadow-lg"
                      />
                      <div className="w-[160px] ml-1 my-1 flex flex-col">
                        <h1 className="w-full truncate lg:text-lg md:text-base sm:text-sm">
                          {v.name}
                        </h1>
                        <h1 className="lg:text-base md:text-sm sm:text-xs">
                          {v.artists[0].name}
                        </h1>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Songs;
