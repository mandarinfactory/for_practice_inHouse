import { useState } from "react";
import Map from "../API/MapAPI";
import MapDesc from "./mapdesc/MapDesc";

export default function Hero() {
  const [latInfo, setLatInfo] = useState("");
  const [lngInfo, setLngInfo] = useState("");

  return (
    <div className="flex flex-row">
      <MapDesc setLatInfo={setLatInfo} setLngInfo={setLngInfo}/>
      <Map setLatInfo={setLatInfo} setLngInfo={setLngInfo}/>
    </div>
  );
}
