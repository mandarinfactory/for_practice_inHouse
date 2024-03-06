import React from "react";
import { useRecoilValue } from "recoil";

import Sidebar from "../Sidebar";
import { searchDetailTrackState } from "../../recoil/selector/searchSelectors";
import { detailTrackState, isClickedState } from "../../recoil/atom";

const DetailAlbumTracks: React.FC = () => {
  const isClicked = useRecoilValue(isClickedState);
  const albumData = useRecoilValue(detailTrackState);
  const detailAlbumTrackData = useRecoilValue(
    searchDetailTrackState(albumData.id)
  );

  return (
    <div className="w-full h-full flex justify-center">
      {isClicked ? (
        <>
          <Sidebar />
          <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
            <div className="flex">
              <img
                className="w-[400px] h-auto rounded-xl shadow-lg"
                src={albumData.images[0].url}
                alt=""
              />
              <div className="flex flex-col justify-end ml-3 text-3xl">
                <h1>{albumData.name}</h1>
                <div className="flex my-3">
                  {albumData.artists.map((v: object, i: number) => (
                    <h1 className="mr-3" key={i}>
                      {v.name}
                    </h1>
                  ))}
                </div>
                <h1>{albumData.release_date}</h1>
              </div>
            </div>
            <div>
              {detailAlbumTrackData.items.map((v: object, i: number) => (
                <div
                  className="my-3 p-2 flex justify-between items-center bg-white bg-opacity-30 hover:bg-opacity-50 rounded-xl cursor-pointer duration-150"
                  key={i}
                >
                  <img
                    className="w-[60px] h-auto ml-3 object-cover rounded-md"
                    src={albumData.images[1].url}
                    alt=""
                  />
                  <div className="w-[80%] h-auto mx-auto flex justify-between items-center truncate">
                    <h1 className="text-xl">{v.name}</h1>
                    <h1 className="text-lg">{v.artists[0].name}</h1>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 mr-10 opacity-60"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          z
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DetailAlbumTracks;
