import { useEffect } from "react";
import qs from "querystring";

import { getLoginAccessTokenData } from "./token";

const saveTokentoCookie = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (state === null || code === null) {
      window.location.href = "/#" + qs.stringify({ error: "state_mismatch" });
    } else {
      getLoginAccessTokenData(code)
        .then((response) => {
          document.cookie = `access_token=${response.data.access_token}; max-age=${response.data.expires_in}`;
          document.cookie = `refresh_token=${response.data.refresh_token}; max-age=${response.data.expires_in}; httpOnly=true`;
          window.location.href = "/";
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }
  }, []);
}

export default saveTokentoCookie;
