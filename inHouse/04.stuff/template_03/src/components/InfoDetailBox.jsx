import { useEffect, useContext } from "react";

import { MapInfoContextStore } from "../../contexts";

export default function InfoDetailBox () {
    const MapInfosCtx = useContext(MapInfoContextStore);

    return (
        <div className="absolute w-[20%] h-full bg-slate-200 shadow-sm">
            <h1 className="my-5 text-3xl text-center">{MapInfosCtx.isMarkerClicked}</h1>
        </div>
    );
};