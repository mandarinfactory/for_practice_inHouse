import { useState } from "react";
import Map from "../API/MapAPI";
import MapDesc from "./mapdesc/MapDesc";

export default function Hero() {

  return (
    <div className="flex flex-row">
      <MapDesc/>
      <Map/>
    </div>
  );
}
