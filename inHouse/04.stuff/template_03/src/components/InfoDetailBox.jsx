import { useContext } from "react";

import { MapInfoContextStore } from "../../contexts";

export default function InfoDetailBox() {
  const MapInfosCtx = useContext(MapInfoContextStore);

  return (
    <>
      {MapInfosCtx.isInfoBoxClicked ? (
        <div className="absolute top-[6.7%] left-[20%] w-[20%] h-[83%] bg-slate-200 z-20 animate-fade-left animate-once">
          <div
            onClick={() => MapInfosCtx.setIsInfoBoxClicked(false)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              className="absolute top-5 right-5"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <div></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
