import React from "react";
import { accessTokenState, confirmedURIState } from "../../api/recoil/atom";
import { useRecoilValue } from "recoil";
import SpotifyPlayer from "react-spotify-web-playback";

const PlayerControls: React.FC = () => {
  const token = useRecoilValue(accessTokenState);

  const trackUri = useRecoilValue(confirmedURIState);
  // console.log(trackUri);

  return (
    <>
      <SpotifyPlayer
        token={token?.data?.access_token}
        uris={trackUri ? [trackUri] : []}
      />
    </>
  );
};

export default PlayerControls;
