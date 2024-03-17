import React from "react";

import Artists from "./searchHero/Artists";
import Songs from "./searchHero/Songs";
import Albums from "./searchHero/Albums";

const SearchHero:React.FC = () => {
  return (
    <div className="w-auto h-auto flex flex-col flex-wrap justify-center items-center">
      <Artists />
      <Songs />
      <Albums />
    </div>
  );
};

export default SearchHero;
