import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  accessTokenState,
  musicValState,
  searchMusicHandler,
} from "../../state";

const Songs: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);

  const [songData, setSongData] = useState("");
  useEffect(() => {
    if (musicVal && accessToken) {
      const albumResultData = searchMusicHandler(accessToken, musicVal);
      albumResultData.then((response) => setSongData(response));
    }
  }, [musicVal, songData]);

  return (
    <>
      <h1 className="w-full h-auto text-3xl">노래</h1>
      <div className="flex my-3">
        {songData ? (
          // 20개의 데이터를 4개씩 묶어 배열 생성
          Array.from(
            { length: Math.ceil(songData.tracks.items.length / 4) },
            (value, index) => (
              <div className="w-auto h-full flex flex-wrap" key={index}>
                {songData.tracks.items
                  .slice(index * 4, (index + 1) * 4)
                  .map((v: any, i: number) => (
                    <div className="w-full h-auto mx-10 my-2 flex flex-wrap cursor-pointer" key={i}>
                      <img
                        src={v.album.images[1].url}
                        alt="앨범아트"
                        className="w-[70px] h-auto rounded-md"
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
