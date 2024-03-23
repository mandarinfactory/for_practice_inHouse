import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import { RecoilRootBox } from "../utils/RecoilRootBox";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRootBox>
      <Head>
        <title>쉼표</title>
        <meta
          name="description"
          content="쉼표와 함께 즐거운 휴식을 보내세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </RecoilRootBox>
  );
}