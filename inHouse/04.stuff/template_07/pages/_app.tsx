import "@/app/globals.css";
import type { AppProps } from "next/app";

import { RecoilRootBox } from "./components/Box/RecoilRootBox";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRootBox>
      <Component {...pageProps} />
    </RecoilRootBox>
  );
}
