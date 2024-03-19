import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { confirmedURIState, musicValState } from "@/recoil/atom";
import { searchSongFinderState } from "@/recoil/selector/searchSelectors";

const Songs: React.FC = () => {
  const musicVal = useRecoilValue(musicValState);
  const songData = useRecoilValue(searchSongFinderState(musicVal));
  const setConfirmedURI = useSetRecoilState(confirmedURIState);

  return (
    <>
      <h1 className="w-full h-auto mt-7 text-3xl">노래</h1>
      <div className="w-full md:w-[70%] h-auto flex justify-center itmes-center my-3">
        {songData ? (
          Array.from(
            { length: Math.ceil(songData.items.length / 4) },
            (value, index: number) => (
              <div key={index}>
                {songData.items
                  .slice(index * 4, (index + 1) * 4)
                  .map((v: any, i: number) => (
                    <div
                      className="mx-10 md:mx-3 my-2 cursor-pointer"
                      key={i}
                      onClick={() => {
                        setConfirmedURI(v.uri);
                      }}
                    >
                      <img
                        src={v.album.images[1].url}
                        alt="앨범아트"
                        className="w-[40%] h-auto rounded-md hover:scale-105 duration-200 shadow-lg"
                      />
                      <div className="w-[160px] ml-1 flex flex-col">
                        <h1 className="w-full truncate text-lg">{v.name}</h1>
                        <h1>{v.artists[0].name}</h1>
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
