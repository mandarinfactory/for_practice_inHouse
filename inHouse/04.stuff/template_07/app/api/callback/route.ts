import qs from "querystring";
import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

import { getAuthorizationTokenData } from "../../../api/token";

export default function CallbackLoginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = typeof req.query.code === "string" ? req.query.code : null;
  const state = typeof req.query.state === "string" ? req.query.state : null;

  if (state === null || code === null) {
    res.redirect(
      "/#" +
        qs.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    getAuthorizationTokenData(code)
    .then((response) => {
      setCookie('access_token', response.data.access_token, {
        req,
        res,
        maxAge: response.data.expires_in,
      });

      setCookie('refresh_token', response.data.refresh_token, {
        req,
        res,
        maxAge: response.data.expires_in,
        httpOnly: true,
      });

      res.redirect('/');
    })
      .catch((error: any) => {
        res.status(500).json(error);
      });
  }
}
