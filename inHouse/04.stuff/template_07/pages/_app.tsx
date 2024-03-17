import "@/app/globals.css";
import type { AppProps } from "next/app";

import { RecoilRootWrapper } from "@/utils/RecoilRootWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRootWrapper>
      <Component {...pageProps} />
    </RecoilRootWrapper>
  );
}
