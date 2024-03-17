import type { NextApiRequest, NextApiResponse } from "next";
import qs from "querystring";

import { REDIRECT_URL } from "@/utils/constants";
import { generateRandomString } from "@/utils/generateRandomString";

export async function LoginHandler (req: NextApiRequest, res: NextApiResponse) {
  const state = generateRandomString(16);
  const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const scope =
    "user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming";
  
  res.redirect(
    "https://accounts.spotify.com/authorize?"+
      qs.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: scope,
        redirect_uri: `${REDIRECT_URL}/api/callback`,
        state: state,
      })
  );
}