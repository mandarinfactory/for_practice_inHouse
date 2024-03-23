"use client";

import React, { Suspense } from "react";
import { RecoilRoot, RecoilRootProps } from "recoil";
import SuspenseBox from "../pages/components/Box/SuspenseBox";

export const RecoilRootBox: React.FC<RecoilRootProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<SuspenseBox />}>{children}</Suspense>
    </RecoilRoot>
  );
};
