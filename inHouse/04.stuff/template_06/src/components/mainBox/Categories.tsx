import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { accessTokenState } from "../../recoil";
import { browseHandler } from "../../recoil";

const Categories: React.FC = () => {
  const accessToken = useRecoilValue(accessTokenState);
  const [categoriesData, setCategoriesData] = useState<any>();

  if (accessToken) {
    const categoriesResultData = browseHandler(accessToken, "categories");
    categoriesResultData.then((response) => setCategoriesData(response));
  }
  return (
    <div className="my-1">
      <h1 className="my-1 text-3xl">카테고리</h1>
      <div className="flex flex-wrap justify-center">
        {categoriesData ? (
          categoriesData.categories.items.map((v: any) => (
            <div
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={v.icons[0].url}
                alt="categories"
                className="w-[60%] h-auto rounded-lg hover:scale-105 duration-300 shadow-xl"
              />
              <h1 className="my-1">{v.name}</h1>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Categories;
