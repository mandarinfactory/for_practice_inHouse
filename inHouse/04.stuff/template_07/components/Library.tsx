"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  const onClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
            <TbPlaylist className="text-neutral-400" size={26}/>
            <p className="text-neutral-400 font-medium text-md">
                라이브러리!
            </p>
        </div>
        <AiOutlinePlus 
            onClick={onClick}
            size={20}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        노래들 리스트!
      </div>
    </div>
  );
};

export default Library;
