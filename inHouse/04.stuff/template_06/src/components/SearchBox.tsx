import React from "react";

import Songs from "./search/Songs";
import Albums from "./search/Albums";

const SearchBox: React.FC = () => {
  return (
    <div className="w-auto h-auto flex flex-col flex-wrap justify-center items-center">
      <Songs />
      <Albums />
    </div>
  );
};

export default SearchBox;
