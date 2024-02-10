import React from "react";

import Songs from "./searchBox/Songs";
import Albums from "./searchBox/Albums";
import Artists from "./searchBox/Artists";

const SearchBox: React.FC = () => {
  return (
    <div className="w-auto h-auto flex flex-col flex-wrap justify-center items-center">
      <Artists />
      <Songs />
      <Albums />
    </div>
  );
};

export default SearchBox;
