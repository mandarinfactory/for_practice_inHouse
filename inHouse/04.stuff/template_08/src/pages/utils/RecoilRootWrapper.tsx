"use client";

import React from "react";
import { RecoilRoot, RecoilRootProps } from "recoil";
import { Suspense } from "react";
import SuspenseBox from "@/pages/components/SuspenseBox";

export const RecoilRootWrapper: React.FC<RecoilRootProps> = ({ children }) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<SuspenseBox />}>{children}</Suspense>
    </RecoilRoot>
  );
};
