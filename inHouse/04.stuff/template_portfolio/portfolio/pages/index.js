import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>이호준의 포트폴리오</title>
        <meta name="description" content="늘 일관성 있는 배움의 자세인 개발자 이호준입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>홈 입니다.</h1>
    </Layout>
  );
};