import Map from "../API/MapAPI";
import MapDesc from "./mapdesc/MapDesc";
import { ResultContextProvider } from "../contexts/MapDataContext";

export default function Hero() {
  return (
    <ResultContextProvider>
      <div className="flex flex-row">
        <MapDesc />
        <Map />
      </div>
    </ResultContextProvider>
  );
}
