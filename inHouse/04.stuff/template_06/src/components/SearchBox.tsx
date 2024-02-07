import React from "react";

import Songs from "./search/Songs";
import Albums from "./search/Albums";
import Artists from "./search/Artists";

const SearchBox: React.FC = () => {
  return (
    <div className="w-auto h-auto flex flex-col flex-wrap justify-center items-center">
      <div>
        <h1 className="text-3xl">노래</h1>
        <Songs />
      </div>
      <div className="flex">
        <h1 className="text-3xl">앨범</h1>
        <Albums />
      </div>
      <div>
        <h1 className="text-3xl">아티스트</h1>
        <Artists />
      </div>
    </div>
  );
};

export default SearchBox;
