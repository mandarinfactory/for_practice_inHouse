"use client";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { REDIRECT_URL, SCOPE } from "@/utils/constants";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "@/recoil/atom";

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
  const router = useRouter();
  const token = useRecoilValue(accessTokenState)

  useEffect(() => {
    if (!token) {
      router.reload();
    }
  },[token]) 
  return (
    <Sidebar spotifyAuthUrl={spotifyAuthUrl}>
      <Hero />
    </Sidebar>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const encodeRedirectUri = encodeURIComponent(REDIRECT_URL);
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeRedirectUri}&scope=${SCOPE}`;
  return { props: { spotifyAuthUrl } };
};

export default Home;
