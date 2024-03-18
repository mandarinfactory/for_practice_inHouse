import { GetServerSideProps } from "next";
import axios from "axios";

import "../app/globals.css";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { RecoilRootBox } from "@/pages/components/Box/RecoilRootBox";
import { clientId, clientSecret, redirectUri } from "./constants";
import { useEffect } from "react";

const Callback = ({ accessToken }: { accessToken: string }) => {
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("authToken", accessToken);
    }
  }, []);

  return (
    <RecoilRootBox>
      <Sidebar>
        <h1>환영합니다!</h1>
        <Hero />
      </Sidebar>
    </RecoilRootBox>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const code = query.code as string;

  if (!code) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const accessToken = response.data.access_token;
    return { props: { accessToken } };
  } catch (error) {
    console.log(error);
    console.error("Error:", error);
    return { props: { accessToken: "" } };
  }
};

export default Callback;
