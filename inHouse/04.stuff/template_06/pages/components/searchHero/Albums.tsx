import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { detailTrackState, isClickedState, musicValState } from "@/recoil/atom";
import LeftChevron from "../button/LeftChevron";
import RightChevron from "../button/RightChevron";
import { searchAlbumFinderState } from "@/recoil/selector/searchSelectors";
import Link from "next/link";

const Albums = () => {
  const musicVal = useRecoilValue(musicValState);
  const albumData = useRecoilValue(searchAlbumFinderState(musicVal));
  const setIsClicked = useSetRecoilState(isClickedState);
  const setClickedAlbum = useSetRecoilState(detailTrackState);
  const [activeItemIndex, setActiveItemIndex] = useState(2);
  const CHEVRONWIDTH = 50;
  return (
    <>
      <h1 className="w-full h-auto text-3xl">앨범</h1>
      <div className="flex my-3">
        <div className="w-[1400px]">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={20}
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
            chevronWidth={CHEVRONWIDTH}
          >
            {albumData ? (
              albumData?.map((v: any, i: number) => (
                <Link
                  href="components/DetailAlbumTracks"
                  className="flex flex-wrap cursor-pointer"
                  key={i}
                  onClick={() => {
                    setIsClicked(true);
                    setClickedAlbum(v);
                  }}
                >
                  <img
                    src={v.images[1].url}
                    alt="앨범아트"
                    className="w-[240px] rounded-lg hover:scale-95 duration-300 shadow-xl"
                  />
                  <div className="my-2 flex flex-col">
                    <h1 className="text-lg">{v.artists[0].name}</h1>
                    <h1 className="text-lg overflow-hidden">{v.name}</h1>
                    <p>{v.release_date}</p>
                  </div>
                </Link>
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
