"use client";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import SuspenseBox from "./components/page/SuspenseBox";

export default function Home() {
  return (
    <RecoilRoot>
      <Suspense fallback={<SuspenseBox />}>
        <div className="w-full h-full flex justify-center">
          <Sidebar />
          <Hero />
        </div>
      </Suspense>
    </RecoilRoot>
  );
}
