import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import ItemsCarousel from "react-items-carousel";

import {
  accessTokenState,
  musicValState,
  searchAlbumHandler,
} from "../../state";
import LeftChevron from "../button/LeftChevron";
import RightChevron from "../button/RightChevron";

const Albums: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const musicVal = useRecoilValue(musicValState);
  const [activeItemIndex, setActiveItemIndex] = useState(2);
  const chevronWidth = 50;

  const [albumData, setAlbumData] = useState("");
  if (musicVal && accessToken) {
    const albumResultData = searchAlbumHandler(accessToken, musicVal);
    albumResultData.then((response) => setAlbumData(response));
  }

  return (
    <>
      <h1 className="w-full h-auto text-3xl">앨범</h1>
      <div className="flex my-3">
        <div className="w-[1400px]">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={10}
            leftChevron={
              <button>
                <LeftChevron />
              </button>
            }
            rightChevron={
              <button>
                <RightChevron />
              </button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {albumData ? (
              albumData?.map((v: any, i: number) => (
                <div className="flex flex-wrap" key={i}>
                  <img
                    src={v.images[1].url}
                    alt="앨범아트"
                    className="w-[240px] rounded-lg"
                  />
                  <div className="my-2 flex flex-col">
                    <h1 className="text-lg">{v.artists[0].name}</h1>
                    <h1 className="text-lg overflow-hidden">{v.name}</h1>
                    <p>{v.release_date}</p>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </ItemsCarousel>
        </div>
      </div>
    </>
  );
};

export default Albums;
