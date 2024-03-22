import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

import {
  detailTrackState,
  isClickedState,
  musicValState,
} from "../../recoil/atom";
import LeftChevron from "../button/LeftChevron";
import RightChevron from "../button/RightChevron";
import { searchAlbumFinderState } from "../../recoil/selector/searchSelectors";
import Link from "next/link";
import { AlbumDataType } from "../../types/AlbumTypes";

const Albums = () => {
  const musicVal = useRecoilValue(musicValState);
  const albumDataLoadable = useRecoilValueLoadable(
    searchAlbumFinderState(musicVal)
  );
  const albumData = (
    albumDataLoadable.state === "hasValue" && albumDataLoadable.contents
      ? albumDataLoadable.contents
      : undefined
  ) as AlbumDataType[];
  const setIsClicked = useSetRecoilState(isClickedState);
  const setClickedAlbum = useSetRecoilState(detailTrackState);
  const CHEVRONWIDTH = 50;

  const [activeItemIndex, setActiveItemIndex] = useState(2);
  const [numOfCards, setNumOfCards] = useState(4);
  const [gutter, setGutter] = useState(28);

  useEffect(() => {
    const resizeMediaQuery = () => {
      if (window.matchMedia("(min-width: 1900px)").matches) {
        setGutter(10);
        setNumOfCards(4);
      } else if (window.matchMedia("(min-width: 1300px)").matches)
        setNumOfCards(4);
      else if (window.matchMedia("(min-width: 1024px)").matches)
        setNumOfCards(3);
      else if (window.matchMedia("(min-width: 700px)").matches) setGutter(5);
      else if (window.matchMedia("(min-width: 400px)").matches) {
        setGutter(0);
        setNumOfCards(1);
      }
    };

    resizeMediaQuery();

    window.addEventListener("resize", resizeMediaQuery);
    return () => {
      window.removeEventListener("resize", resizeMediaQuery);
    };
  }, []);

  return (
    <>
      <h1 className="w-full h-auto text-3xl sm:text-center">앨범</h1>
      <div className="flex my-3">
        <div className="lg:max-w-6xl md:max-w-2xl sm:max-w-sm">
          <ItemsCarousel
            chevronWidth={CHEVRONWIDTH}
            gutter={gutter}
            numberOfCards={numOfCards}
            outsideChevron
            activeItemIndex={activeItemIndex}
            requestToChangeActive={setActiveItemIndex}
            leftChevron={<LeftChevron />}
            rightChevron={<RightChevron />}
          >
            {albumData
              ? albumData?.map((v, i: number) => (
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
                      <h1 className="lg:text-lg md:text-base sm:text-sm">
                        {v.artists[0].name}
                      </h1>
                      <h1 className="lg:text-lg md:text-base sm:text-sm overflow-hidden">
                        {v.name}
                      </h1>
                      <p>{v.release_date}</p>
                    </div>
                  </Link>
                ))
              : albumData}
          </ItemsCarousel>
        </div>
      </div>
    </>
  );
};

export default Albums;
