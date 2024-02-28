import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { searchBrowseState, searchDetailTrackState } from "../../recoil/selector/searchStore";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { detailTrackState, isClickedState, selectedMusicValState } from "../../recoil/atom";


const NewReleases: React.FC = () => {
  const navigate = useNavigate();
  const newReleasesData = useRecoilValue(searchBrowseState(25));
  const setIsClicked = useSetRecoilState(isClickedState);
  const [clickedAlbum, setClickedAlbum] = useRecoilState(detailTrackState);
  const detailTrackData = useRecoilValue(searchDetailTrackState(clickedAlbum || ""))


  return (
    <div className="w-full h-full flex justify-center">
      <Sidebar />
      <div className="w-[95%] h-max-screen mr-7 my-7 p-5 bg-gradient-to-r from-red-500 to-sky-500 rounded-3xl shadow-2xl">
        <h1 className="my-1 text-3xl">최신앨범</h1>
        <div className="flex flex-wrap">
          {newReleasesData.albums.items.map((v: any, i: number) => (
            <div
              className="flex flex-col justify-center items-center my-1 cursor-pointer"
              key={i}
              onClick={() => {
                setIsClicked(true);
                navigate("/DetailAlbumTracks")
                setClickedAlbum(v.id);                
              }}
            >
              <img
                className="w-[70%] rounded-xl hover:scale-95 duration-150"
                src={v.images[0].url}
                alt="앨범아트"
              />
              <div className="mt-1 text-lg flex flex-col justify-start">
                <h1>{v.name}</h1>
                <h1>{v.artists[0].name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewReleases;
