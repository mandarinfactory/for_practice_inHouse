"use client";

import React from "react";
import { RecoilRoot, RecoilRootProps } from "recoil";
import { Suspense } from "react";
import SuspenseBox from "../components/box/SuspenseBox";

export const RecoilRootBox: React.FC<RecoilRootProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<SuspenseBox />}>{children}</Suspense>
    </RecoilRoot>
  );
};
