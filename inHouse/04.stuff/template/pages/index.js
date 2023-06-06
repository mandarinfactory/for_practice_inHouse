import Hero from "@/components/home/hero";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>이호준의 포트폴리오</title>
        <meta name="description" content="이호준의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
}
