import React from "react";
import { RecoilRoot } from "recoil";

import Home from "./page/Home";

export const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    </>
  );
};
