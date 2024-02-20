import React from "react";
import { useRecoilValue } from "recoil";
import { musicValState } from "../../recoil/atom";
import { searchSongFinderState } from "../../recoil/selector/searchStore";

const Songs: React.FC = () => {
  const musicVal = useRecoilValue(musicValState);
  const songData = useRecoilValue(searchSongFinderState(musicVal));

  return (
    <>
      <h1 className="w-full h-auto mt-7 text-3xl">노래</h1>
      <div className="flex my-3">
        {songData ? (
          // 20개의 데이터를 4개씩 묶어 배열 생성
          Array.from(
            { length: Math.ceil(songData.items.length / 4) },
            (value, index) => (
              <div className="w-auto h-full flex flex-wrap" key={index}>
                {songData.items
                  .slice(index * 4, (index + 1) * 4)
                  .map((v: any, i: number) => (
                    <div
                      className="w-full h-auto mx-10 my-2 flex flex-wrap cursor-pointer"
                      key={i}
                    >
                      <img
                        src={v.album.images[1].url}
                        alt="앨범아트"
                        className="w-[70px] h-auto rounded-md hover:scale-105 duration-200 shadow-lg"
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
