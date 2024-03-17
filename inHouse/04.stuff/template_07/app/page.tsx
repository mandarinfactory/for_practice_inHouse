"use client";

import { GetServerSideProps } from 'next';

import Hero from "@/components/Hero";
import { REDIRECT_URL, SCOPE } from '@/utils/constants';

const Home = ({ spotifyAuthUrl }: { spotifyAuthUrl: string }) => {
    return (
        <div className="w-full h-full flex justify-center">
        <h1>Spotify 로그인!</h1>
        <a href={spotifyAuthUrl}>Login with Spotify</a>
      <Hero />
    </div>
  );
}

export const getServerSideProps = async () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    const encodeRedirectUri = encodeURIComponent(REDIRECT_URL);
    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeRedirectUri}&scope=${SCOPE}`;
    return { props: { spotifyAuthUrl } };
};

export default Home;
