import { GetServerSideProps } from "next";
import axios from "axios";

import "../app/globals.css"
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import { RecoilRootWrapper } from "@/utils/RecoilRootWrapper";
import { clientId, clientSecret, redirectUri } from "./constants";


const Callback = ({ accessToken }: { accessToken: string }) => {
    console.log(accessToken);
    
  return (
    <RecoilRootWrapper>
      <Sidebar>
        <h1>환영합니다!</h1>
        <Hero />
      </Sidebar>
    </RecoilRootWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const code = query.code as string;
  console.log(code);
  

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

    console.log(response);
    const accessToken = response.data;
    
    return { props: { accessToken } };
} catch (error) {
    console.log(error);
    console.error("Error:", error);
    return { props: { accessToken: "" } };
  }
};

export default Callback;
