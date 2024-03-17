"use client";

import { GetServerSideProps } from "next";
import "../app/globals.css";

import Hero from "./components/Hero";
import { REDIRECT_URL, SCOPE } from "@/utils/constants";
import { RecoilRootWrapper } from "@/utils/RecoilRootWrapper";
import Sidebar from "./components/Sidebar";

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
  return (
    <RecoilRootWrapper>
      <Sidebar>
        <h1 className="w-[7%] h-auto p-2 mb-3 text-center text-2xl text-black bg-white rounded-2xl cursor-pointer">
          <a href={spotifyAuthUrl}>로그인</a>
        </h1>
        <Hero />
      </Sidebar>
    </RecoilRootWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const encodeRedirectUri = encodeURIComponent(REDIRECT_URL);
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeRedirectUri}&scope=${SCOPE}`;
  return { props: { spotifyAuthUrl } };
};

export default Home;
