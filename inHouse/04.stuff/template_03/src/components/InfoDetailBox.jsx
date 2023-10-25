import { useEffect, useContext } from "react";

import { MapInfoContextStore } from "../../contexts";

export default function InfoDetailBox () {
    const MapInfosCtx = useContext(MapInfoContextStore);

    return (
        <div className="absolute w-[15%] h-[30%] bg-slate-300 rounded-xl shadow-lg">
            
        </div>
    );
};