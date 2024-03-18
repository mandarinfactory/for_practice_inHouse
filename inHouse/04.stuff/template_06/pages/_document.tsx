import { Html, Head, Main, NextScript } from "next/document";
import { RecoilRootBox } from "./components/Box/RecoilRootBox";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>쉼표</title>
        <meta
          name="description"
          content="쉼표와 함께 즐거운 휴식을 보내세요!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <RecoilRootBox>
        <body>
          <Main />
          <NextScript />
        </body>
      </RecoilRootBox>
    </Html>
  );
}
