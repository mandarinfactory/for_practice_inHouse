import { selectorFamily, RecoilEnv } from "recoil";

import { accessTokenState } from "../atom";
import { SPOTIFY_URL } from "../../../utils/constants";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const musicPlayPauseHandlerState = selectorFamily({
  key: "musicPlayPauseHandlerState",
  get:
    (uri: string) =>
    async ({ get }) => {
      const token = get(accessTokenState);
      if (token && uri) {        
        const playerParams = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          data: {
            context_uri: uri,
            offset: {
              position: 5,
            },
          },
        };
        const playerAPI = await fetch(
          `${SPOTIFY_URL}/me/player/play`,
          playerParams
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            return data;
          });
        return playerAPI;
      }
    },
});
