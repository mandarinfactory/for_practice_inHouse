import React from "react";
import { accessTokenState, confirmedURIState } from "../../api/recoil/atom";
import { useRecoilValue } from "recoil";
import SpotifyPlayer from "react-spotify-web-playback";

const PlayerControls: React.FC = () => {
  const token = useRecoilValue(accessTokenState);
  console.log(token);
  
  const trackUri = useRecoilValue(confirmedURIState);

  return (
    <>
      <SpotifyPlayer
        token={token?.data?.access_token}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
      />
    </>
  );
};

export default PlayerControls;
